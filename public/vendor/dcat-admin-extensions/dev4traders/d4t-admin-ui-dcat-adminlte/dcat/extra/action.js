(()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,e(r.key),r)}}function e(n){var e=function(n,e){if("object"!=t(n)||!n)return n;var o=n[Symbol.toPrimitive];if(void 0!==o){var r=o.call(n,e||"default");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"==t(e)?e:String(e)}!function(e){var o=function(){function o(t){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),this.options=$.extend({selector:null,event:"click",method:"POST",key:null,url:null,data:{},confirm:null,calledClass:null,before:function(t,n){},html:function(t,n,e){t.html(n)},success:function(t,n){},error:function(t,n){}},t),this.init()}var r,i,a;return r=o,(i=[{key:"init",value:function(){var t=this,n=t.options;$(n.selector).off(n.event).on(n.event,(function(o){var r=$(this).data(),i=$(this);if(!(i.attr("loading")>0)&&!1!==n.before(r,i,t)){var a=n.confirm;a?e.confirm(a[0],a[1],c):c()}function c(){i.attr("loading",1),Object.assign(r,n.data),t.promise(i,r).then(t.resolve()).catch(t.reject())}}))}},{key:"resolve",value:function(){var t=this.options;return function(n){var o=n[0],r=n[1];!1!==t.success(r,o)&&e.handleJsonResponse(o,{html:t.html,target:r})}}},{key:"reject",value:function(){var n=this.options;return function(o){var r=o[0],i=o[1];!1!==n.success(i,r)&&(r&&"object"===t(r.responseJSON)&&e.error(r.responseJSON.message),console.error(o))}}},{key:"promise",value:function(t,n){var o=this.options;return new Promise((function(r,i){Object.assign(n,{_action:o.calledClass,_key:o.key,_token:e.token}),e.NP.start(),$.ajax({method:o.method,url:o.url,data:n,success:function(n){t.attr("loading",0),e.NP.done(),r([n,t])},error:function(n){t.attr("loading",0),e.NP.done(),i([n,t])}})}))}}])&&n(r.prototype,i),a&&n(r,a),Object.defineProperty(r,"prototype",{writable:!1}),o}();e.Action=function(t){return new o(t)}}(Dcat)})();
//# sourceMappingURL=action.js.map