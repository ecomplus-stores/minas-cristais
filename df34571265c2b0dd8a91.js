(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{296:function(e,t,r){"use strict";var o=r(14),n=r(40),c=r(317),a=r(318),i=r(8),s=1..toFixed,u=Math.floor,d=function(e,t,r){return 0===t?r:t%2==1?d(e,t-1,r*e):d(e*e,t/2,r)};o({target:"Number",proto:!0,forced:s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!i((function(){s.call({})}))},{toFixed:function(e){var t,r,o,i,s=c(this),p=n(e),f=[0,0,0,0,0,0],l="",m="0",h=function(e,t){for(var r=-1,o=t;++r<6;)o+=e*f[r],f[r]=o%1e7,o=u(o/1e7)},y=function(e){for(var t=6,r=0;--t>=0;)r+=f[t],f[t]=u(r/e),r=r%e*1e7},b=function(){for(var e=6,t="";--e>=0;)if(""!==t||0===e||0!==f[e]){var r=String(f[e]);t=""===t?r:t+a.call("0",7-r.length)+r}return t};if(p<0||p>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(l="-",s=-s),s>1e-21)if(r=(t=function(e){for(var t=0,r=e;r>=4096;)t+=12,r/=4096;for(;r>=2;)t+=1,r/=2;return t}(s*d(2,69,1))-69)<0?s*d(2,-t,1):s/d(2,t,1),r*=4503599627370496,(t=52-t)>0){for(h(0,r),o=p;o>=7;)h(1e7,0),o-=7;for(h(d(10,o,1),0),o=t-1;o>=23;)y(1<<23),o-=23;y(1<<o),h(1,1),y(2),m=b()}else h(0,r),h(1<<-t,0),m=b()+a.call("0",p);return m=p>0?l+((i=m.length)<=p?"0."+a.call("0",p-i)+m:m.slice(0,i-p)+"."+m.slice(i-p)):l+m}})},317:function(e,t,r){var o=r(23);e.exports=function(e){if("number"!=typeof e&&"Number"!=o(e))throw TypeError("Incorrect invocation");return+e}},318:function(e,t,r){"use strict";var o=r(40),n=r(19);e.exports="".repeat||function(e){var t=String(n(this)),r="",c=o(e);if(c<0||c==1/0)throw RangeError("Wrong number of repetitions");for(;c>0;(c>>>=1)&&(t+=t))1&c&&(r+=t);return r}},356:function(e,t,r){"use strict";r.r(t);r(16);var o=r(101),n=(r(296),r(31)),c=r(28),a=r(45);const i=n.$ecomConfig.get("currency")||"BRL",s=e=>{const t={name:Object(c.a)(e),id:e.sku,price:Object(a.a)(e).toFixed(2)};return e.quantity&&(t.quantity=e.quantity),t};var u=r(20);r(55);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default=(e={})=>{const{dataLayerVar:t,parseDomMsDelay:r}=e,n=window[t]||window.dataLayer;n&&((e=>{const t=window.storefront&&window.storefront.context;if(t&&"products"===t.resource){const{body:r}=t,n=s(r),c={event:"eec.detail",ecommerce:{currencyCode:i,detail:{products:[n]}}},a=Object(o.a)(r);a.length&&(n.category=r.category_tree?r.category_tree.replace(/\s>\s/g,"/"):a[0],c.ecommerce.detail.actionField={list:a[0]}),r.brands&&r.brands.length&&(n.brand=r.brands[0].name),e.push(c)}})(n),(e=>{const t=window.storefrontApp&&window.storefrontApp.router;if(t){let r=!1;const o=()=>{const e=[];return u.a.data&&Array.isArray(u.a.data.items)&&u.a.data.items.forEach(t=>{e.push(s(t))}),e},n=(t,n)=>{const c={step:t,option:n};t<=1||!r?(e.push({event:"eec.checkout",ecommerce:{currencyCode:i,checkout:{actionField:c,products:o()}}}),e.push({event:"checkout"}),r=!0):(e.push({event:"eec.checkout_option",ecommerce:{currencyCode:i,checkout_option:{actionField:c}}}),e.push({event:"checkoutOption"}))},c=t=>{const{amount:r}=window.storefrontApp,n=(r&&r.total||u.a.data&&u.a.data.subtotal||0).toFixed(2);e.push({event:"eec.purchase",ecommerce:{currencyCode:i,purchase:{actionField:{id:t,revenue:n},products:o()}}})},a=({name:e,params:t})=>{switch(e){case"cart":n(1,"Review Cart");break;case"checkout":n(2,"Confirm Purchase");break;case"confirmation":c(t.id)}};t.currentRoute&&a(t.currentRoute),t.afterEach(a)}})(n),(e=>{const t={},r=r=>{const o=s(r);e.push({event:"eec.add",ecommerce:{currencyCode:i,add:{products:[o]}}}),e.push({event:"addToCart"}),t[r.sku]=o},o=r=>{const o=t[r.sku];e.push({event:"eec.remove",ecommerce:{currencyCode:i,remove:{products:[o?Object.assign({},o):s(r)]}}}),e.push({event:"removeFromCart"}),delete t[r.sku]};u.a.on("addItem",({item:e})=>r(e)),u.a.on("increaseItemQnt",({item:e})=>{const n=t[e.sku];if(n){const t=e.quantity-n.quantity;t>0?r(p({},e,{quantity:t})):o(p({},e,{quantity:-t}))}else r(e)}),u.a.on("removeItem",({item:e})=>o(e)),u.a.on("clear",()=>{for(const e in t)t[e]&&o(t[e])})})(n),setTimeout(()=>{(e=>{const t=document.querySelectorAll("[data-sku]");if(t.length){const r=[],o={},n="/search"===window.location.pathname;for(let e=0;e<t.length;e++){const c=t[e],{sku:a}=c.dataset;if(-1===r.indexOf(a)&&(r.push(a),c.closest)){const e=c.closest(".products-carousel");!n&&e&&(o[a]=e.dataset.title)}}e.push({event:"eec.impressions",ecommerce:{currencyCode:i,impressions:r.map(e=>{const t=n?"Search results":o[e],r={id:e};return t&&(r.list=t),r})}})}})(n)},r>=0?r:300))}}}]);
//# sourceMappingURL=df34571265c2b0dd8a91.js.map