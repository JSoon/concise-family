/*!
 * @description  @jsoon/concise-family - Concise components.
 * @version      1.0.2
 * @release      Wed Feb 26 2020 00:50:11 GMT+0800 (China Standard Time)
 * @author       undefined
 * @email        undefined
 */
!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports["concise-slider"]=r():(t.ConciseFamily=t.ConciseFamily||{},t.ConciseFamily["concise-slider"]=r())}(this,(function(){return function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="/",n(n.s=33)}([function(t,r,n){(function(r){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r&&r)||Function("return this")()}).call(this,n(35))},function(t,r){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,r){var n={}.hasOwnProperty;t.exports=function(t,r){return n.call(t,r)}},function(t,r){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,r,n){var e=n(1);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,r,n){var e=n(4),o=n(9),i=n(6);t.exports=e?function(t,r,n){return o.f(t,r,i(1,n))}:function(t,r,n){return t[r]=n,t}},function(t,r){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},function(t,r,n){var e=n(15),o=n(17);t.exports=function(t){return e(o(t))}},function(t,r,n){var e=n(3);t.exports=function(t,r){if(!e(t))return t;var n,o;if(r&&"function"==typeof(n=t.toString)&&!e(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!e(o=n.call(t)))return o;if(!r&&"function"==typeof(n=t.toString)&&!e(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,r,n){var e=n(4),o=n(18),i=n(19),c=n(8),u=Object.defineProperty;r.f=e?u:function(t,r,n){if(i(t),r=c(r,!0),i(n),o)try{return u(t,r,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},function(t,r,n){var e=n(0),o=n(5);t.exports=function(t,r){try{o(e,t,r)}catch(n){e[t]=r}return r}},function(t,r,n){var e=n(26),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,r,n){var e=n(0),o=n(22),i=n(2),c=n(23),u=n(30),f=n(54),a=o("wks"),s=e.Symbol,l=f?s:s&&s.withoutSetter||c;t.exports=function(t){return i(a,t)||(u&&i(s,t)?a[t]=s[t]:a[t]=l("Symbol."+t)),a[t]}},function(t,r,n){var e=n(0),o=n(14).f,i=n(5),c=n(38),u=n(10),f=n(43),a=n(52);t.exports=function(t,r){var n,s,l,p,d,v=t.target,y=t.global,h=t.stat;if(n=y?e:h?e[v]||u(v,{}):(e[v]||{}).prototype)for(s in r){if(p=r[s],l=t.noTargetGet?(d=o(n,s))&&d.value:n[s],!a(y?s:v+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;f(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,s,p,t)}}},function(t,r,n){var e=n(4),o=n(36),i=n(6),c=n(7),u=n(8),f=n(2),a=n(18),s=Object.getOwnPropertyDescriptor;r.f=e?s:function(t,r){if(t=c(t),r=u(r,!0),a)try{return s(t,r)}catch(t){}if(f(t,r))return i(!o.f.call(t,r),t[r])}},function(t,r,n){var e=n(1),o=n(16),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,r){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,r){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,r,n){var e=n(4),o=n(1),i=n(37);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,r,n){var e=n(3);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,r,n){var e=n(21),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,r,n){var e=n(0),o=n(10),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,r,n){var e=n(42),o=n(21);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.6.4",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,r){var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+e).toString(36)}},function(t,r){t.exports={}},function(t,r,n){var e=n(45),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][r]||o[t]&&o[t][r]}},function(t,r){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},function(t,r,n){var e=n(16);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,r,n){var e=n(17);t.exports=function(t){return Object(e(t))}},function(t,r,n){var e=n(3),o=n(27),i=n(12)("species");t.exports=function(t,r){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?e(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===r?0:r)}},function(t,r,n){var e=n(1);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,r,n){var e,o,i=n(0),c=n(56),u=i.process,f=u&&u.versions,a=f&&f.v8;a?o=(e=a.split("."))[0]+e[1]:c&&(!(e=c.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=c.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},function(t,r,n){"use strict";var e=n(58).forEach,o=n(61),i=n(62),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,r,n){"use strict";n.r(r);n(34),n(57),n(63),n(65);var e,o,i,c=0;function u(t){var r=t.direction,n=t.sliderList,u=t.sliderItems,f=t.step,a=t.gridNum,s=t.itemWidth;a>u.length||("prev"===r?(o-=f)<0&&(o=0):o+=f,(i=o+a-1)>u.length-1&&(i=u.length-1,o=i+1-a),c="prev"===r?Math.floor(o/a):(i+1)%a!=0?e-1:Math.floor(o/a),n.style.transform="translate3d(-".concat(o*s,"px, 0, 0)"))}r.default=function(t){var r=t.selector,n=t.gridNum,f=t.step,a=void 0===f?t.gridNum:f;if(!r)throw"Slider has no id or class selector!";o=0,i=n-1;var s=document.querySelector(r),l=s.querySelector(".slider-wrapper")||s,p=l.querySelector(".slider-list-wrapper"),d=l.querySelector(".slider-list"),v=l.querySelectorAll(".slider-item"),y=l.querySelector(".slider-indicator"),h=l.querySelector(".slider-prev"),m=l.querySelector(".slider-next");e=Math.ceil(v.length/n);var x=p.clientWidth/n,g=x*v.length;d.style.width="".concat(g,"px"),v.forEach((function(t,r){t.style.width="".concat(x,"px"),r<n&&(t.style.opacity=1)})),d.style.display="block";for(var S=0;S<e;S++){var b=document.createElement("div");b.classList.add("slider-indicator-item"),y.appendChild(b)}y.firstElementChild.classList.add("active"),d.addEventListener("transitionstart",(function(t){!function(t){t.sliderItems.forEach((function(t,r){t.style.opacity=0,r>=o&&r<=i&&(t.style.opacity=1)}))}({sliderItems:v,gridNum:n,step:a})})),d.addEventListener("transitionend",(function(t){!function(t){var r=t.sliderIndicator;r.children.forEach((function(t){return t.classList.remove("active")})),r.children[c].classList.add("active")}({sliderIndicator:y,step:a})})),h.addEventListener("click",(function(t){u({direction:"prev",sliderList:d,sliderItems:v,step:a,gridNum:n,itemWidth:x})}),!1),m.addEventListener("click",(function(t){u({direction:"next",sliderList:d,sliderItems:v,step:a,gridNum:n,itemWidth:x})}),!1)}},function(t,r,n){"use strict";var e=n(13),o=n(1),i=n(27),c=n(3),u=n(28),f=n(11),a=n(53),s=n(29),l=n(55),p=n(12),d=n(31),v=p("isConcatSpreadable"),y=d>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),h=l("concat"),m=function(t){if(!c(t))return!1;var r=t[v];return void 0!==r?!!r:i(t)};e({target:"Array",proto:!0,forced:!y||!h},{concat:function(t){var r,n,e,o,i,c=u(this),l=s(c,0),p=0;for(r=-1,e=arguments.length;r<e;r++)if(i=-1===r?c:arguments[r],m(i)){if(p+(o=f(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&a(l,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");a(l,p++,i)}return l.length=p,l}})},function(t,r){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,r,n){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);r.f=i?function(t){var r=o(this,t);return!!r&&r.enumerable}:e},function(t,r,n){var e=n(0),o=n(3),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,r,n){var e=n(0),o=n(5),i=n(2),c=n(10),u=n(20),f=n(39),a=f.get,s=f.enforce,l=String(String).split("String");(t.exports=function(t,r,n,u){var f=!!u&&!!u.unsafe,a=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof r||i(n,"name")||o(n,"name",r),s(n).source=l.join("string"==typeof r?r:"")),t!==e?(f?!p&&t[r]&&(a=!0):delete t[r],a?t[r]=n:o(t,r,n)):a?t[r]=n:c(r,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||u(this)}))},function(t,r,n){var e,o,i,c=n(40),u=n(0),f=n(3),a=n(5),s=n(2),l=n(41),p=n(24),d=u.WeakMap;if(c){var v=new d,y=v.get,h=v.has,m=v.set;e=function(t,r){return m.call(v,t,r),r},o=function(t){return y.call(v,t)||{}},i=function(t){return h.call(v,t)}}else{var x=l("state");p[x]=!0,e=function(t,r){return a(t,x,r),r},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(r){var n;if(!f(r)||(n=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,r,n){var e=n(0),o=n(20),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,r,n){var e=n(22),o=n(23),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,r){t.exports=!1},function(t,r,n){var e=n(2),o=n(44),i=n(14),c=n(9);t.exports=function(t,r){for(var n=o(r),u=c.f,f=i.f,a=0;a<n.length;a++){var s=n[a];e(t,s)||u(t,s,f(r,s))}}},function(t,r,n){var e=n(25),o=n(46),i=n(51),c=n(19);t.exports=e("Reflect","ownKeys")||function(t){var r=o.f(c(t)),n=i.f;return n?r.concat(n(t)):r}},function(t,r,n){var e=n(0);t.exports=e},function(t,r,n){var e=n(47),o=n(50).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,r,n){var e=n(2),o=n(7),i=n(48).indexOf,c=n(24);t.exports=function(t,r){var n,u=o(t),f=0,a=[];for(n in u)!e(c,n)&&e(u,n)&&a.push(n);for(;r.length>f;)e(u,n=r[f++])&&(~i(a,n)||a.push(n));return a}},function(t,r,n){var e=n(7),o=n(11),i=n(49),c=function(t){return function(r,n,c){var u,f=e(r),a=o(f.length),s=i(c,a);if(t&&n!=n){for(;a>s;)if((u=f[s++])!=u)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,r,n){var e=n(26),o=Math.max,i=Math.min;t.exports=function(t,r){var n=e(t);return n<0?o(n+r,0):i(n,r)}},function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,r){r.f=Object.getOwnPropertySymbols},function(t,r,n){var e=n(1),o=/#|\.prototype\./,i=function(t,r){var n=u[c(t)];return n==a||n!=f&&("function"==typeof r?e(r):!!r)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,r,n){"use strict";var e=n(8),o=n(9),i=n(6);t.exports=function(t,r,n){var c=e(r);c in t?o.f(t,c,i(0,n)):t[c]=n}},function(t,r,n){var e=n(30);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,r,n){var e=n(1),o=n(12),i=n(31),c=o("species");t.exports=function(t){return i>=51||!e((function(){var r=[];return(r.constructor={})[c]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},function(t,r,n){var e=n(25);t.exports=e("navigator","userAgent")||""},function(t,r,n){"use strict";var e=n(13),o=n(32);e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,r,n){var e=n(59),o=n(15),i=n(28),c=n(11),u=n(29),f=[].push,a=function(t){var r=1==t,n=2==t,a=3==t,s=4==t,l=6==t,p=5==t||l;return function(d,v,y,h){for(var m,x,g=i(d),S=o(g),b=e(v,y,3),w=c(S.length),L=0,E=h||u,O=r?E(d,w):n?E(d,0):void 0;w>L;L++)if((p||L in S)&&(x=b(m=S[L],L,g),t))if(r)O[L]=x;else if(x)switch(t){case 3:return!0;case 5:return m;case 6:return L;case 2:f.call(O,m)}else if(s)return!1;return l?-1:a||s?s:O}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},function(t,r,n){var e=n(60);t.exports=function(t,r,n){if(e(t),void 0===r)return t;switch(n){case 0:return function(){return t.call(r)};case 1:return function(n){return t.call(r,n)};case 2:return function(n,e){return t.call(r,n,e)};case 3:return function(n,e,o){return t.call(r,n,e,o)}}return function(){return t.apply(r,arguments)}}},function(t,r){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,r,n){"use strict";var e=n(1);t.exports=function(t,r){var n=[][t];return!!n&&e((function(){n.call(null,r||function(){throw 1},1)}))}},function(t,r,n){var e=n(4),o=n(1),i=n(2),c=Object.defineProperty,u={},f=function(t){throw t};t.exports=function(t,r){if(i(u,t))return u[t];r||(r={});var n=[][t],a=!!i(r,"ACCESSORS")&&r.ACCESSORS,s=i(r,0)?r[0]:f,l=i(r,1)?r[1]:void 0;return u[t]=!!n&&!o((function(){if(a&&!e)return!0;var t={length:-1};a?c(t,1,{enumerable:!0,get:f}):t[1]=1,n.call(t,s,l)}))}},function(t,r,n){var e=n(0),o=n(64),i=n(32),c=n(5);for(var u in o){var f=e[u],a=f&&f.prototype;if(a&&a.forEach!==i)try{c(a,"forEach",i)}catch(t){a.forEach=i}}},function(t,r){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,r,n){}]).default}));
//# sourceMappingURL=concise-slider.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25jaXNlLXNsaWRlci5qcyIsInNvdXJjZVJvb3QiOiIifQ==