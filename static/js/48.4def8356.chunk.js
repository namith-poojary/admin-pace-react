(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[48],{516:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},533:function(e,t,n){"use strict";var r=n(536);t.__esModule=!0,t.getScrollbarWidth=i,t.setScrollbarWidth=l,t.isBodyOverflowing=u,t.getOriginalBodyPadding=function(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)},t.conditionallyUpdateScrollbar=function(){var e=i(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;u()&&l(n+e)},t.setGlobalCssModule=function(e){o=e},t.mapToCssModules=function(e,t){void 0===e&&(e="");void 0===t&&(t=o);return t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e},t.omit=function(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n},t.pick=function(e,t){var n,r=Array.isArray(t)?t:[t],o=r.length,a={};for(;o>0;)n=r[o-=1],a[n]=e[n];return a},t.warnOnce=d,t.deprecated=function(e,t){return function(n,r,o){null!==n[r]&&"undefined"!==typeof n[r]&&d('"'+r+'" property of "'+o+'" has been deprecated.\n'+t);for(var a=arguments.length,i=new Array(a>3?a-3:0),l=3;l<a;l++)i[l-3]=arguments[l];return e.apply(void 0,[n,r,o].concat(i))}},t.DOMElement=f,t.isReactRefObj=b,t.toNumber=function(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===v(e))return NaN;if(h(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=h(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var r=/^0b[01]+$/i.test(e);return r||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),r?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e},t.isObject=h,t.isFunction=g,t.findDOMElements=E,t.isArrayOrNodeList=O,t.getTarget=function(e,t){var n=E(e);return t?O(n)?n:null===n?[]:[n]:O(n)?n[0]:n},t.addMultipleEventListeners=function(e,t,n,r){var o=e;O(o)||(o=[o]);var a=n;"string"===typeof a&&(a=a.split(/\s+/));if(!O(o)||"function"!==typeof t||!Array.isArray(a))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(a,(function(e){Array.prototype.forEach.call(o,(function(n){n.addEventListener(e,t,r)}))})),function(){Array.prototype.forEach.call(a,(function(e){Array.prototype.forEach.call(o,(function(n){n.removeEventListener(e,t,r)}))}))}},t.focusableElements=t.defaultToggleEvents=t.canUseDOM=t.PopperPlacements=t.keyCodes=t.TransitionStatuses=t.TransitionPropTypeKeys=t.TransitionTimeouts=t.tagPropType=t.targetPropType=void 0;var o,a=r(n(61));function i(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function l(e){document.body.style.paddingRight=e>0?e+"px":null}function u(){return document.body.clientWidth<window.innerWidth}var c={};function d(e){c[e]||("undefined"!==typeof console&&console.error(e),c[e]=!0)}var s="object"===typeof window&&window.Element||function(){};function f(e,t,n){if(!(e[t]instanceof s))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var p=a.default.oneOfType([a.default.string,a.default.func,f,a.default.shape({current:a.default.any})]);t.targetPropType=p;var y=a.default.oneOfType([a.default.func,a.default.string,a.default.shape({$$typeof:a.default.symbol,render:a.default.func}),a.default.arrayOf(a.default.oneOfType([a.default.func,a.default.string,a.default.shape({$$typeof:a.default.symbol,render:a.default.func})]))]);t.tagPropType=y;t.TransitionTimeouts={Fade:150,Collapse:350,Modal:300,Carousel:600};t.TransitionPropTypeKeys=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"];t.TransitionStatuses={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};t.keyCodes={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80};t.PopperPlacements=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];var m=!("undefined"===typeof window||!window.document||!window.document.createElement);function b(e){return!(!e||"object"!==typeof e)&&"current"in e}function v(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function h(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function g(e){if(!h(e))return!1;var t=v(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function E(e){if(b(e))return e.current;if(g(e))return e();if("string"===typeof e&&m){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function O(e){return null!==e&&(Array.isArray(e)||m&&"number"===typeof e.length)}t.canUseDOM=m;t.defaultToggleEvents=["touchstart","click"];t.focusableElements=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},536:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},604:function(e,t,n){"use strict";n.r(t);var r=n(516),o=n(154),a=n(155),i=n(157),l=n(156),u=n(158),c=n(2),d=n.n(c),s=n(499),f=n.n(s),p=n(533),y=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,o=e.cssModule,a=e.dataBox,i=(Object(r.a)(e,["children","className","cssModule","dataBox"]),a()),l=i.variant;if(!l||["facebook","twitter","linkedin","google-plus"].indexOf(l)<0)return null;var u="bg-"+l,c="fa fa-"+l,s=Object.keys(i),y=Object.values(i),m=f()("".concat("brand-card","-header"),u),b=f()("".concat("brand-card","-body")),v=Object(p.mapToCssModules)(f()("brand-card",n),o);return d.a.createElement("div",{className:v},d.a.createElement("div",{className:m},d.a.createElement("i",{className:c}),t),d.a.createElement("div",{className:b},d.a.createElement("div",null,d.a.createElement("div",{className:"text-value"},y[1]),d.a.createElement("div",{className:"text-uppercase text-muted small"},s[1])),d.a.createElement("div",null,d.a.createElement("div",{className:"text-value"},y[2]),d.a.createElement("div",{className:"text-uppercase text-muted small"},s[2]))))}}]),t}(c.Component);y.defaultProps={dataBox:function(){return{variant:"facebook",friends:"-",feeds:"-"}}},t.default=y}}]);
//# sourceMappingURL=48.4def8356.chunk.js.map