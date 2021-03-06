import './main.sass'
import 'classlist-polyfill'

/**
 * @description Concise slider component
 * Note: This is not a gallery plugin, so far there is no autoplay function, which is not one of the intended features.
 * 
 * @param {object}    params                Config object
 * @param {string}    params.selector       Id or class selector
 * @param {number}    params.gridNum        Number of visible grids
 * @param {number}    params.step           Step number of items for each slide, default to gridNum
 * @param {boolean}   params.loop           Whether to slide to the start or end while reaching the end or start, default to false
 * @param {boolean}   params.indicator      Whether to generate indicator, default to true
 * @param {boolean}   params.indicatorCtrl  Whether the indicator could control slide, default to false
 * @param {string}    params.indicatorType  Indicator type, page: one item represent gridNum slider items, single: one item maps a single slider item, default to page
 * @param {boolean}   params.prevNext       Whether to generate prev & next slide controllers, default to true
 * @param {boolean}   params.autoResize     Whether to resize slider when window resize fires, default to false
 * 
 * Hooks functions
 * @param {function}  params.onCreated        Fired when all the DOM have been created and the sizes have been calculated
 * @param {function}  params.onBeforeSliding  Fired before sliding
 * @param {function}  params.onAfterSliding   Fired after sliding
 * @param {function}  params.onResized        Fired when the slider has been resized
 */

const slider = params => {

  const {
    selector,
    gridNum,
    step = params.gridNum,
    loop = false,
    indicator = true,
    indicatorCtrl = false,
    indicatorType = 'page',
    prevNext = true,
    autoResize = false,
    onCreated = () => {},
    onBeforeSliding = () => {},
    onAfterSliding = () => {},
    onResized = () => {},
  } = params

  // API exposed to the instance
  const API = {}

  // Private variables
  let indicatorItemNum // Total indicator item number
  let curIndicatorItemIdx = 0 // Current indicator item number index
  let curVisibleStart, curVisibleEnd // Current visible items index range
  // If reach the start or end after slide
  let reachStart = true,
    reachEnd = false
  let itemWidth // Slide individual item width
  let resizeTimer // Resize slider timer
  let singleLoop = loop && step === 1

  if (!selector) {
    throw 'Slider has no id or class selector!'
  }

  // Initial current visible items index range
  curVisibleStart = 0
  curVisibleEnd = gridNum - 1

  //#region Initial DOM

  const sliderEle = document.querySelector(selector)
  const sliderWrapper = sliderEle.querySelector('.slider-wrapper') || sliderEle
  const sliderListWrapper = sliderWrapper.querySelector('.slider-list-wrapper')
  const sliderList = sliderWrapper.querySelector('.slider-list')
  let sliderItems = sliderWrapper.querySelectorAll('.slider-item')

  const sliderIndicator = document.createElement('div')
  sliderIndicator.classList.add('slider-indicator')

  // Indicator item number
  if (indicatorType === 'page') {
    indicatorItemNum = Math.ceil(sliderItems.length / gridNum)
  } else {
    indicatorItemNum = sliderItems.length
  }

  // Generate indicator items based on gridNum
  for (let i = 0; i < indicatorItemNum; i++) {
    const indicatorItem = document.createElement('div')
    indicatorItem.classList.add('slider-indicator-item')
    indicatorItem.setAttribute('data-idx', i)
    sliderIndicator.appendChild(indicatorItem)
  }
  sliderIndicator.firstElementChild.classList.add('active')
  indicator && sliderWrapper.appendChild(sliderIndicator)

  const sliderPrev = document.createElement('div')
  sliderPrev.innerHTML = 'Prev'
  sliderPrev.classList.add('slider-prev')
  const sliderNext = document.createElement('div')
  sliderNext.innerHTML = 'Next'
  sliderNext.classList.add('slider-next')
  if (prevNext && gridNum < sliderItems.length) {
    sliderWrapper.appendChild(sliderPrev)
    sliderWrapper.appendChild(sliderNext)
  }

  //#endregion

  const callbackParams = {
    sliderWrapper,
    sliderListWrapper,
    sliderList,
    sliderIndicator,
    sliderPrev,
    sliderNext,
    curIndicatorItemIdx,
    curVisibleStart,
    curVisibleEnd
  }

  // Calculate all the widths dynamically
  resize({
    init: true
  })

  // Display slider list after width being initialized
  sliderList.style.display = 'block'

  onCreated(callbackParams)

  //#region Controllers

  // This event may have compatibility issues
  // Tested on Safari, Firefox & Chrome
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event#Browser_compatibility
  sliderList.addEventListener('transitionend', e => {
    reachStart = curVisibleStart === 0 ? true : false
    reachEnd = curVisibleEnd === sliderItems.length - 1 ? true : false

    // Prevent transition of children element from fired
    if (e.target !== sliderList) {
      return
    }
    
    onAfterSliding(Object.assign(params, updateCallbackParams()))

    updateIndicator()
  })

  // Resize slider when window resizes
  if (autoResize) {
    window.addEventListener('resize', e => {
      resizeTimer && clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        resize()
      }, 1000)
    })
  }

  // Prev page
  sliderPrev.addEventListener('click', e => {
    updateListPosition({
      direction: 'prev'
    })
  }, false)

  // Next page
  sliderNext.addEventListener('click', e => {
    updateListPosition({
      direction: 'next'
    })
  }, false)

  // Indicator
  if (indicatorCtrl) {
    sliderIndicator.children.forEach(item => item.style.cursor = 'pointer')
    sliderIndicator.addEventListener('click', e => {
      if (!e.target.hasAttribute('data-idx')) {
        return
      }

      const newIndicatorItemIdx = Number(e.target.getAttribute('data-idx'))
      console.log('newIndicatorItemIdx', newIndicatorItemIdx);

      updateListPosition({
        direction: 'locating',
        newIndicatorItemIdx
      })
    }, false)
  }

  //#endregion

  //#region Private functions

  function updateListPosition(params) {
    let {
      direction,
      newIndicatorItemIdx
    } = params

    onBeforeSliding(Object.assign(params, updateCallbackParams()))

    // Calculate visible items index range
    if (direction === 'prev') {
      curVisibleStart -= step
      if (curVisibleStart < 0) {
        curVisibleStart = 0
      }
    } else if (direction === 'next') {
      curVisibleStart += step
    } else if (direction === 'locating') {
      if (indicatorType === 'page') {
        curVisibleStart = newIndicatorItemIdx * gridNum
      } else {
        curVisibleStart = newIndicatorItemIdx
      }
    }
    curVisibleEnd = curVisibleStart + gridNum - 1

    // Deal with edge cases of visible range
    if (curVisibleEnd > sliderItems.length - 1) {
      curVisibleEnd = sliderItems.length - 1
      curVisibleStart = curVisibleEnd + 1 - gridNum
    }

    if (loop) {
      if (reachStart && direction === 'prev') {
        curVisibleEnd = sliderItems.length - 1
        curVisibleStart = curVisibleEnd + 1 - gridNum
      }
      if (reachEnd && direction === 'next') {
        curVisibleStart = 0
        curVisibleEnd = curVisibleStart + gridNum - 1
      }
    }

    console.log('curVisibleRange', [curVisibleStart, curVisibleEnd]);

    sliderList.style.transform = `translate3d(-${curVisibleStart * itemWidth}px, 0, 0)`

    updateItemsVisibility()

  }

  function updateIndicator() {

    // Calculate current page number index
    if (indicatorType === 'page') {
      if (reachEnd) {
        curIndicatorItemIdx = indicatorItemNum - 1
      } else {
        curIndicatorItemIdx = Math.round(getVisibleMedian([curVisibleStart, curVisibleEnd]) / gridNum)
      }
    } else {
      curIndicatorItemIdx = curVisibleStart
    }

    console.log('curIndicatorItemIdx', curIndicatorItemIdx);

    // Highlight current indicator based on step
    sliderIndicator.children.forEach(item => item.classList.remove('active'))
    sliderIndicator.children[curIndicatorItemIdx].classList.add('active')

  }

  function updateItemsVisibility() {

    // Make items of current index visible
    sliderItems.forEach((item, idx) => {
      item.style.opacity = 0

      if (idx >= curVisibleStart && idx <= curVisibleEnd) {
        item.style.opacity = 1
      }
    })

  }

  function updateCallbackParams() {
    return Object.assign(callbackParams, {
      curIndicatorItemIdx,
      curVisibleStart,
      curVisibleEnd
    })
  }

  //#endregion

  //#region Public functions

  API.resize = resize

  function resize(params = {}) {
    const {
      init = false
    } = params

    const wrapperWidth = sliderListWrapper.clientWidth
    itemWidth = wrapperWidth / gridNum
    const listWidth = itemWidth * sliderItems.length

    // Set slider list width
    sliderList.style.width = `${listWidth}px`

    // Set slider item width
    sliderItems.forEach((item, idx) => {
      item.style.width = `${itemWidth}px`

      // Display current slide items
      if (idx < gridNum && init) {
        item.style.opacity = 1
      }
    })

    onResized(Object.assign(params, updateCallbackParams()))

    return params
  }

  //#endregion

  return API

}

/**
 * @description Get median of visible items index range
 * 
 * @param {Array} range [start, end] 
 */
function getVisibleMedian(range) {
  const rangeArray = []
  for (let i = range[0]; i <= range[1]; i += 1) {
    rangeArray.push(i)
  }

  if (rangeArray.length <= 2) {
    return range[0]
  }

  const even = rangeArray.length % 2 === 0 ? true : false
  // [4,5,6,7] => 5, [4,5,6,7,8] => 6
  if (even) {
    return (rangeArray[rangeArray.length / 2] + rangeArray[rangeArray.length / 2 - 1]) / 2
  } else {
    return rangeArray[(rangeArray.length - 1) / 2]
  }
}

export default slider