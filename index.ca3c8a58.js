function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=e.parcelRequired76b;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},e.parcelRequired76b=i);var o,a=i("cyIMT"),u=i("9Zl8s"),c={},f={};f=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var l,v={},d={};l="object"==typeof e&&e&&e.Object===Object&&e;var s="object"==typeof self&&self&&self.Object===Object&&self,p=l||s||Function("return this")();v=function(){return d.Date.now()};var y={},b={},g={},m=/\s/;g=function(t){for(var e=t.length;e--&&m.test(t.charAt(e)););return e};var h=/^\s+/;b=function(t){return t?t.slice(0,g(t)+1).replace(h,""):t};var j,T={},w={};j=(d=p).Symbol;var x={},O=Object.prototype,S=O.hasOwnProperty,_=O.toString,E=j?j.toStringTag:void 0;x=function(t){var e=S.call(t,E),n=t[E];try{t[E]=void 0;var r=!0}catch(t){}var i=_.call(t);return r&&(e?t[E]=n:delete t[E]),i};var M={},N=Object.prototype.toString;M=function(t){return N.call(t)};var q="[object Null]",D="[object Undefined]",L=j?j.toStringTag:void 0;w=function(t){return null==t?void 0===t?D:q:L&&L in Object(t)?x(t):M(t)};var I={};I=function(t){return null!=t&&"object"==typeof t};var P="[object Symbol]";T=function(t){return"symbol"==typeof t||I(t)&&w(t)==P};var U=NaN,W=/^[-+]0x[0-9a-f]+$/i,$=/^0b[01]+$/i,F=/^0o[0-7]+$/i,H=parseInt;y=function(t){if("number"==typeof t)return t;if(T(t))return U;if(f(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=f(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=b(t);var n=$.test(t);return n||F.test(t)?H(t.slice(2),n?2:8):W.test(t)?U:+t};var R="Expected a function",A=Math.max,C=Math.min;c=function(t,e,n){var r,i,o,a,u,c,l=0,d=!1,s=!1,p=!0;if("function"!=typeof t)throw new TypeError(R);function b(e){var n=r,o=i;return r=i=void 0,l=e,a=t.apply(o,n)}function g(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-l>=o}function m(){var t=v();if(g(t))return h(t);u=setTimeout(m,function(t){var n=e-(t-c);return s?C(n,o-(t-l)):n}(t))}function h(t){return u=void 0,p&&r?b(t):(r=i=void 0,a)}function j(){var t=v(),n=g(t);if(r=arguments,i=this,c=t,n){if(void 0===u)return function(t){return l=t,u=setTimeout(m,e),d?b(t):a}(c);if(s)return clearTimeout(u),u=setTimeout(m,e),b(c)}return void 0===u&&(u=setTimeout(m,e)),a}return e=y(e)||0,f(n)&&(d=!!n.leading,o=(s="maxWait"in n)?A(y(n.maxWait)||0,e):o,p="trailing"in n?!!n.trailing:p),j.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=i=u=void 0},j.flush=function(){return void 0===u?a:h(v())},j};var G="Expected a function";o=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError(G);return f(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),c(t,e,{leading:r,maxWait:e,trailing:i})};var Q=i("j9dda"),Y=i("7Y9D8");i("04jNI");const Z=document.querySelector(".search-form"),k=document.querySelector(".search-form__input"),z=document.querySelector(".gallery__box"),B=document.querySelector(".pagination"),J=t(o)((async t=>{B.innerHTML="",z.innerHTML="";const e=await(0,a.fetchQuery)(t,1);(0,u.createGallery)(e)}),500);Z.addEventListener("submit",(t=>{t.preventDefault();const e=k.value;""!==e?((0,Q.setPaginationState)("search"),J(e)):Y.Notify.failure("Please fill the search form first.",{position:"center-top"})}));
//# sourceMappingURL=index.ca3c8a58.js.map
