!function(){var e=/^(components|business)\/[A-Z][^\/]+$/g,t=[],n=t.push,r=t.map,o=t.forEach,i={component:function(){return r.call(this,function(t){return t.replace(e,function(e){return e+"/index"})})},tpl:function(){return n.call(this,"text!./tpl.html"),this}};Array.prototype.dispose=function(){var e=this;return o.call(arguments,function(t){var n;(n=i[t])?e=n.call(e):void 0}),e},Object.defineProperties?Object.defineProperties(Array.prototype,{dispose:{enumerable:!1}}):void 0,"function"!=typeof Object.assign&&(Object.assign=function(e){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");e=Object(e);for(var t=1;t<arguments.length;t++){var n=arguments[t];if(null!=n)for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Object.defineProperties?Object.defineProperties(Object,{assign:{enumerable:!1}}):void 0)}();