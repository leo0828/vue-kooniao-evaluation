!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("KooniaoEvaluation",[],n):"object"==typeof exports?exports.KooniaoEvaluation=n():e.KooniaoEvaluation=n()}("undefined"!=typeof self?self:this,function(){return function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/dist/",n(n.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(1),r={install:function(e,n){e.component(o.a.name,o.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),n.default=r},function(e,n,t){"use strict";var o=t(3),r=t(2),i=r(null,o.a,!1,null,null,null);n.a=i.exports},function(e,n){e.exports=function(e,n,t,o,r,i){var u,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(u=e,s=e.default);var f="function"==typeof s?s.options:s;n&&(f.render=n.render,f.staticRenderFns=n.staticRenderFns,f._compiled=!0),t&&(f.functional=!0),r&&(f._scopeId=r);var c;if(i?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=c):o&&(c=o),c){var d=f.functional,l=d?f.render:f.beforeCreate;d?(f._injectStyles=c,f.render=function(e,n){return c.call(n),l(e,n)}):f.beforeCreate=l?[].concat(l,c):[c]}return{esModule:u,exports:s,options:f}}},function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",[e._v("hello vue-kooniao-evaliation")])},r=[],i={render:o,staticRenderFns:r};n.a=i}])});
//# sourceMappingURL=vue-kooniao-evaluation.js.map