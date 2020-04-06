/**
 * Swiper 5.3.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 29, 2020
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Swiper=t()}(this,(function(){"use strict";var e="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,t="undefined"==typeof window?{document:e,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,i=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function s(s,a){var r=[],n=0;if(s&&!a&&s instanceof i)return s;if(s)if("string"==typeof s){var o,l,d=s.trim();if(d.indexOf("<")>=0&&d.indexOf(">")>=0){var h="div";for(0===d.indexOf("<li")&&(h="ul"),0===d.indexOf("<tr")&&(h="tbody"),0!==d.indexOf("<td")&&0!==d.indexOf("<th")||(h="tr"),0===d.indexOf("<tbody")&&(h="table"),0===d.indexOf("<option")&&(h="select"),(l=e.createElement(h)).innerHTML=d,n=0;n<l.childNodes.length;n+=1)r.push(l.childNodes[n])}else for(o=a||"#"!==s[0]||s.match(/[ .<>:~]/)?(a||e).querySelectorAll(s.trim()):[e.getElementById(s.trim().split("#")[1])],n=0;n<o.length;n+=1)o[n]&&r.push(o[n])}else if(s.nodeType||s===t||s===e)r.push(s);else if(s.length>0&&s[0].nodeType)for(n=0;n<s.length;n+=1)r.push(s[n]);return new i(r)}function a(e){for(var t=[],i=0;i<e.length;i+=1)-1===t.indexOf(e[i])&&t.push(e[i]);return t}s.fn=i.prototype,s.Class=i,s.Dom7=i;var r={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.add(t[i]);return this},removeClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.remove(t[i]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.toggle(t[i]);return this},attr:function(e,t){var i=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var s=0;s<this.length;s+=1)if(2===i.length)this[s].setAttribute(e,t);else for(var a in e)this[s][a]=e[a],this[s].setAttribute(a,e[a]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var i;if(void 0!==t){for(var s=0;s<this.length;s+=1)(i=this[s]).dom7ElementDataStorage||(i.dom7ElementDataStorage={}),i.dom7ElementDataStorage[e]=t;return this}if(i=this[0]){if(i.dom7ElementDataStorage&&e in i.dom7ElementDataStorage)return i.dom7ElementDataStorage[e];var a=i.getAttribute("data-"+e);return a||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransform=e,i.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransitionDuration=e,i.transitionDuration=e}return this},on:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var a=t[0],r=t[1],n=t[2],o=t[3];function l(e){var t=e.target;if(t){var i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),s(t).is(r))n.apply(t,i);else for(var a=s(t).parents(),o=0;o<a.length;o+=1)s(a[o]).is(r)&&n.apply(a[o],i)}}function d(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof t[1]&&(a=(e=t)[0],n=e[1],o=e[2],r=void 0),o||(o=!1);for(var h,p=a.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(h=0;h<p.length;h+=1){var v=p[h];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[v]||(u.dom7LiveListeners[v]=[]),u.dom7LiveListeners[v].push({listener:n,proxyListener:l}),u.addEventListener(v,l,o)}else for(h=0;h<p.length;h+=1){var f=p[h];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[f]||(u.dom7Listeners[f]=[]),u.dom7Listeners[f].push({listener:n,proxyListener:d}),u.addEventListener(f,d,o)}}return this},off:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var s=t[0],a=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(s=(e=t)[0],r=e[1],n=e[2],a=void 0),n||(n=!1);for(var o=s.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],h=0;h<this.length;h+=1){var p=this[h],c=void 0;if(!a&&p.dom7Listeners?c=p.dom7Listeners[d]:a&&p.dom7LiveListeners&&(c=p.dom7LiveListeners[d]),c&&c.length)for(var u=c.length-1;u>=0;u-=1){var v=c[u];r&&v.listener===r?(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1)):r&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===r?(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1)):r||(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1))}}return this},trigger:function(){for(var i=[],s=arguments.length;s--;)i[s]=arguments[s];for(var a=i[0].split(" "),r=i[1],n=0;n<a.length;n+=1)for(var o=a[n],l=0;l<this.length;l+=1){var d=this[l],h=void 0;try{h=new t.CustomEvent(o,{detail:r,bubbles:!0,cancelable:!0})}catch(t){(h=e.createEvent("Event")).initEvent(o,!0,!0),h.detail=r}d.dom7EventData=i.filter((function(e,t){return t>0})),d.dispatchEvent(h),d.dom7EventData=[],delete d.dom7EventData}return this},transitionEnd:function(e){var t,i=["webkitTransitionEnd","transitionend"],s=this;function a(r){if(r.target===this)for(e.call(this,r),t=0;t<i.length;t+=1)s.off(i[t],a)}if(e)for(t=0;t<i.length;t+=1)s.on(i[t],a);return this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(this.length>0){var i=this[0],s=i.getBoundingClientRect(),a=e.body,r=i.clientTop||a.clientTop||0,n=i.clientLeft||a.clientLeft||0,o=i===t?t.scrollY:i.scrollTop,l=i===t?t.scrollX:i.scrollLeft;return{top:s.top+o-r,left:s.left+l-n}}return null},css:function(e,i){var s;if(1===arguments.length){if("string"!=typeof e){for(s=0;s<this.length;s+=1)for(var a in e)this[s].style[a]=e[a];return this}if(this[0])return t.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(s=0;s<this.length;s+=1)this[s].style[e]=i;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(a){var r,n,o=this[0];if(!o||void 0===a)return!1;if("string"==typeof a){if(o.matches)return o.matches(a);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(a);if(o.msMatchesSelector)return o.msMatchesSelector(a);for(r=s(a),n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}if(a===e)return o===e;if(a===t)return o===t;if(a.nodeType||a instanceof i){for(r=a.nodeType?[a]:a,n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,s=this.length;return new i(e>s-1?[]:e<0?(t=s+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var t,s=[],a=arguments.length;a--;)s[a]=arguments[a];for(var r=0;r<s.length;r+=1){t=s[r];for(var n=0;n<this.length;n+=1)if("string"==typeof t){var o=e.createElement("div");for(o.innerHTML=t;o.firstChild;)this[n].appendChild(o.firstChild)}else if(t instanceof i)for(var l=0;l<t.length;l+=1)this[n].appendChild(t[l]);else this[n].appendChild(t)}return this},prepend:function(t){var s,a;for(s=0;s<this.length;s+=1)if("string"==typeof t){var r=e.createElement("div");for(r.innerHTML=t,a=r.childNodes.length-1;a>=0;a-=1)this[s].insertBefore(r.childNodes[a],this[s].childNodes[0])}else if(t instanceof i)for(a=0;a<t.length;a+=1)this[s].insertBefore(t[a],this[s].childNodes[0]);else this[s].insertBefore(t,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&s(this[0].nextElementSibling).is(e)?new i([this[0].nextElementSibling]):new i([]):this[0].nextElementSibling?new i([this[0].nextElementSibling]):new i([]):new i([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.nextElementSibling;){var r=a.nextElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&s(t.previousElementSibling).is(e)?new i([t.previousElementSibling]):new i([]):t.previousElementSibling?new i([t.previousElementSibling]):new i([])}return new i([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.previousElementSibling;){var r=a.previousElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},parent:function(e){for(var t=[],i=0;i<this.length;i+=1)null!==this[i].parentNode&&(e?s(this[i].parentNode).is(e)&&t.push(this[i].parentNode):t.push(this[i].parentNode));return s(a(t))},parents:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var r=this[i].parentNode;r;)e?s(r).is(e)&&t.push(r):t.push(r),r=r.parentNode;return s(a(t))},closest:function(e){var t=this;return void 0===e?new i([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],s=0;s<this.length;s+=1)for(var a=this[s].querySelectorAll(e),r=0;r<a.length;r+=1)t.push(a[r]);return new i(t)},children:function(e){for(var t=[],r=0;r<this.length;r+=1)for(var n=this[r].childNodes,o=0;o<n.length;o+=1)e?1===n[o].nodeType&&s(n[o]).is(e)&&t.push(n[o]):1===n[o].nodeType&&t.push(n[o]);return new i(a(t))},filter:function(e){for(var t=[],s=0;s<this.length;s+=1)e.call(this[s],s,this[s])&&t.push(this[s]);return new i(t)},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,a;for(i=0;i<e.length;i+=1){var r=s(e[i]);for(a=0;a<r.length;a+=1)this[this.length]=r[a],this.length+=1}return this},styles:function(){return this[0]?t.getComputedStyle(this[0],null):{}}};Object.keys(r).forEach((function(e){s.fn[e]=s.fn[e]||r[e]}));var n={deleteProps:function(e){var t=e;Object.keys(t).forEach((function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,i){var s,a,r;void 0===i&&(i="x");var n=t.getComputedStyle(e,null);return t.WebKitCSSMatrix?((a=n.transform||n.webkitTransform).split(",").length>6&&(a=a.split(", ").map((function(e){return e.replace(",",".")})).join(", ")),r=new t.WebKitCSSMatrix("none"===a?"":a)):s=(r=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===i&&(a=t.WebKitCSSMatrix?r.m41:16===s.length?parseFloat(s[12]):parseFloat(s[4])),"y"===i&&(a=t.WebKitCSSMatrix?r.m42:16===s.length?parseFloat(s[13]):parseFloat(s[5])),a||0},parseUrlQuery:function(e){var i,s,a,r,n={},o=e||t.location.href;if("string"==typeof o&&o.length)for(r=(s=(o=o.indexOf("?")>-1?o.replace(/\S*\?/,""):"").split("&").filter((function(e){return""!==e}))).length,i=0;i<r;i+=1)a=s[i].replace(/#\S+/g,"").split("="),n[decodeURIComponent(a[0])]=void 0===a[1]?void 0:decodeURIComponent(a[1])||"";return n},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var i=Object(e[0]),s=1;s<e.length;s+=1){var a=e[s];if(null!=a)for(var r=Object.keys(Object(a)),o=0,l=r.length;o<l;o+=1){var d=r[o],h=Object.getOwnPropertyDescriptor(a,d);void 0!==h&&h.enumerable&&(n.isObject(i[d])&&n.isObject(a[d])?n.extend(i[d],a[d]):!n.isObject(i[d])&&n.isObject(a[d])?(i[d]={},n.extend(i[d],a[d])):i[d]=a[d])}}return i}},o={touch:t.Modernizr&&!0===t.Modernizr.touch||!!(t.navigator.maxTouchPoints>0||"ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch),pointerEvents:!!t.PointerEvent&&"maxTouchPoints"in t.navigator&&t.navigator.maxTouchPoints>0,observer:"MutationObserver"in t||"WebkitMutationObserver"in t,passiveListener:function(){var e=!1;try{var i=Object.defineProperty({},"passive",{get:function(){e=!0}});t.addEventListener("testPassiveListener",null,i)}catch(e){}return e}(),gestures:"ongesturestart"in t},l=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach((function(e){t.on(e,t.params.on[e])}))},d={components:{configurable:!0}};l.prototype.on=function(e,t,i){var s=this;if("function"!=typeof t)return s;var a=i?"unshift":"push";return e.split(" ").forEach((function(e){s.eventsListeners[e]||(s.eventsListeners[e]=[]),s.eventsListeners[e][a](t)})),s},l.prototype.once=function(e,t,i){var s=this;if("function"!=typeof t)return s;function a(){for(var i=[],r=arguments.length;r--;)i[r]=arguments[r];s.off(e,a),a.f7proxy&&delete a.f7proxy,t.apply(s,i)}return a.f7proxy=t,s.on(e,a,i)},l.prototype.off=function(e,t){var i=this;return i.eventsListeners?(e.split(" ").forEach((function(e){void 0===t?i.eventsListeners[e]=[]:i.eventsListeners[e]&&i.eventsListeners[e].length&&i.eventsListeners[e].forEach((function(s,a){(s===t||s.f7proxy&&s.f7proxy===t)&&i.eventsListeners[e].splice(a,1)}))})),i):i},l.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,s,a,r=this;if(!r.eventsListeners)return r;"string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],s=e.slice(1,e.length),a=r):(i=e[0].events,s=e[0].data,a=e[0].context||r);var n=Array.isArray(i)?i:i.split(" ");return n.forEach((function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach((function(e){t.push(e)})),t.forEach((function(e){e.apply(a,s)}))}})),r},l.prototype.useModulesParams=function(e){var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i];s.params&&n.extend(e,s.params)}))},l.prototype.useModules=function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i],a=e[i]||{};s.instance&&Object.keys(s.instance).forEach((function(e){var i=s.instance[e];t[e]="function"==typeof i?i.bind(t):i})),s.on&&t.on&&Object.keys(s.on).forEach((function(e){t.on(e,s.on[e])})),s.create&&s.create.bind(t)(a)}))},d.components.set=function(e){this.use&&this.use(e)},l.installModule=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;s.prototype.modules||(s.prototype.modules={});var a=e.name||Object.keys(s.prototype.modules).length+"_"+n.now();return s.prototype.modules[a]=e,e.proto&&Object.keys(e.proto).forEach((function(t){s.prototype[t]=e.proto[t]})),e.static&&Object.keys(e.static).forEach((function(t){s[t]=e.static[t]})),e.install&&e.install.apply(s,t),s},l.use=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;return Array.isArray(e)?(e.forEach((function(e){return s.installModule(e)})),s):s.installModule.apply(s,[e].concat(t))},Object.defineProperties(l,d);var h={updateSize:function(){var e,t,i=this.$el;e=void 0!==this.params.width?this.params.width:i[0].clientWidth,t=void 0!==this.params.height?this.params.height:i[0].clientHeight,0===e&&this.isHorizontal()||0===t&&this.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),n.extend(this,{width:e,height:t,size:this.isHorizontal()?e:t}))},updateSlides:function(){var e=this.params,i=this.$wrapperEl,s=this.size,a=this.rtlTranslate,r=this.wrongRTL,o=this.virtual&&e.virtual.enabled,l=o?this.virtual.slides.length:this.slides.length,d=i.children("."+this.params.slideClass),h=o?this.virtual.slides.length:d.length,p=[],c=[],u=[];function v(t){return!e.cssMode||t!==d.length-1}var f=e.slidesOffsetBefore;"function"==typeof f&&(f=e.slidesOffsetBefore.call(this));var m=e.slidesOffsetAfter;"function"==typeof m&&(m=e.slidesOffsetAfter.call(this));var g=this.snapGrid.length,b=this.snapGrid.length,w=e.spaceBetween,y=-f,x=0,T=0;if(void 0!==s){var E,S;"string"==typeof w&&w.indexOf("%")>=0&&(w=parseFloat(w.replace("%",""))/100*s),this.virtualSize=-w,a?d.css({marginLeft:"",marginTop:""}):d.css({marginRight:"",marginBottom:""}),e.slidesPerColumn>1&&(E=Math.floor(h/e.slidesPerColumn)===h/this.params.slidesPerColumn?h:Math.ceil(h/e.slidesPerColumn)*e.slidesPerColumn,"auto"!==e.slidesPerView&&"row"===e.slidesPerColumnFill&&(E=Math.max(E,e.slidesPerView*e.slidesPerColumn)));for(var C,M=e.slidesPerColumn,P=E/M,z=Math.floor(h/e.slidesPerColumn),k=0;k<h;k+=1){S=0;var $=d.eq(k);if(e.slidesPerColumn>1){var L=void 0,I=void 0,D=void 0;if("row"===e.slidesPerColumnFill&&e.slidesPerGroup>1){var O=Math.floor(k/(e.slidesPerGroup*e.slidesPerColumn)),A=k-e.slidesPerColumn*e.slidesPerGroup*O,G=0===O?e.slidesPerGroup:Math.min(Math.ceil((h-O*M*e.slidesPerGroup)/M),e.slidesPerGroup);L=(I=A-(D=Math.floor(A/G))*G+O*e.slidesPerGroup)+D*E/M,$.css({"-webkit-box-ordinal-group":L,"-moz-box-ordinal-group":L,"-ms-flex-order":L,"-webkit-order":L,order:L})}else"column"===e.slidesPerColumnFill?(D=k-(I=Math.floor(k/M))*M,(I>z||I===z&&D===M-1)&&(D+=1)>=M&&(D=0,I+=1)):I=k-(D=Math.floor(k/P))*P;$.css("margin-"+(this.isHorizontal()?"top":"left"),0!==D&&e.spaceBetween&&e.spaceBetween+"px")}if("none"!==$.css("display")){if("auto"===e.slidesPerView){var H=t.getComputedStyle($[0],null),B=$[0].style.transform,N=$[0].style.webkitTransform;if(B&&($[0].style.transform="none"),N&&($[0].style.webkitTransform="none"),e.roundLengths)S=this.isHorizontal()?$.outerWidth(!0):$.outerHeight(!0);else if(this.isHorizontal()){var X=parseFloat(H.getPropertyValue("width")),V=parseFloat(H.getPropertyValue("padding-left")),Y=parseFloat(H.getPropertyValue("padding-right")),F=parseFloat(H.getPropertyValue("margin-left")),W=parseFloat(H.getPropertyValue("margin-right")),R=H.getPropertyValue("box-sizing");S=R&&"border-box"===R?X+F+W:X+V+Y+F+W}else{var q=parseFloat(H.getPropertyValue("height")),j=parseFloat(H.getPropertyValue("padding-top")),K=parseFloat(H.getPropertyValue("padding-bottom")),U=parseFloat(H.getPropertyValue("margin-top")),_=parseFloat(H.getPropertyValue("margin-bottom")),Z=H.getPropertyValue("box-sizing");S=Z&&"border-box"===Z?q+U+_:q+j+K+U+_}B&&($[0].style.transform=B),N&&($[0].style.webkitTransform=N),e.roundLengths&&(S=Math.floor(S))}else S=(s-(e.slidesPerView-1)*w)/e.slidesPerView,e.roundLengths&&(S=Math.floor(S)),d[k]&&(this.isHorizontal()?d[k].style.width=S+"px":d[k].style.height=S+"px");d[k]&&(d[k].swiperSlideSize=S),u.push(S),e.centeredSlides?(y=y+S/2+x/2+w,0===x&&0!==k&&(y=y-s/2-w),0===k&&(y=y-s/2-w),Math.abs(y)<.001&&(y=0),e.roundLengths&&(y=Math.floor(y)),T%e.slidesPerGroup==0&&p.push(y),c.push(y)):(e.roundLengths&&(y=Math.floor(y)),(T-Math.min(this.params.slidesPerGroupSkip,T))%this.params.slidesPerGroup==0&&p.push(y),c.push(y),y=y+S+w),this.virtualSize+=S+w,x=S,T+=1}}if(this.virtualSize=Math.max(this.virtualSize,s)+m,a&&r&&("slide"===e.effect||"coverflow"===e.effect)&&i.css({width:this.virtualSize+e.spaceBetween+"px"}),e.setWrapperSize&&(this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"})),e.slidesPerColumn>1&&(this.virtualSize=(S+e.spaceBetween)*E,this.virtualSize=Math.ceil(this.virtualSize/e.slidesPerColumn)-e.spaceBetween,this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"}),e.centeredSlides)){C=[];for(var Q=0;Q<p.length;Q+=1){var J=p[Q];e.roundLengths&&(J=Math.floor(J)),p[Q]<this.virtualSize+p[0]&&C.push(J)}p=C}if(!e.centeredSlides){C=[];for(var ee=0;ee<p.length;ee+=1){var te=p[ee];e.roundLengths&&(te=Math.floor(te)),p[ee]<=this.virtualSize-s&&C.push(te)}p=C,Math.floor(this.virtualSize-s)-Math.floor(p[p.length-1])>1&&p.push(this.virtualSize-s)}if(0===p.length&&(p=[0]),0!==e.spaceBetween&&(this.isHorizontal()?a?d.filter(v).css({marginLeft:w+"px"}):d.filter(v).css({marginRight:w+"px"}):d.filter(v).css({marginBottom:w+"px"})),e.centeredSlides&&e.centeredSlidesBounds){var ie=0;u.forEach((function(t){ie+=t+(e.spaceBetween?e.spaceBetween:0)}));var se=(ie-=e.spaceBetween)-s;p=p.map((function(e){return e<0?-f:e>se?se+m:e}))}if(e.centerInsufficientSlides){var ae=0;if(u.forEach((function(t){ae+=t+(e.spaceBetween?e.spaceBetween:0)})),(ae-=e.spaceBetween)<s){var re=(s-ae)/2;p.forEach((function(e,t){p[t]=e-re})),c.forEach((function(e,t){c[t]=e+re}))}}n.extend(this,{slides:d,snapGrid:p,slidesGrid:c,slidesSizesGrid:u}),h!==l&&this.emit("slidesLengthChange"),p.length!==g&&(this.params.watchOverflow&&this.checkOverflow(),this.emit("snapGridLengthChange")),c.length!==b&&this.emit("slidesGridLengthChange"),(e.watchSlidesProgress||e.watchSlidesVisibility)&&this.updateSlidesOffset()}},updateAutoHeight:function(e){var t,i=[],s=0;if("number"==typeof e?this.setTransition(e):!0===e&&this.setTransition(this.params.speed),"auto"!==this.params.slidesPerView&&this.params.slidesPerView>1)if(this.params.centeredSlides)i.push.apply(i,this.visibleSlides);else for(t=0;t<Math.ceil(this.params.slidesPerView);t+=1){var a=this.activeIndex+t;if(a>this.slides.length)break;i.push(this.slides.eq(a)[0])}else i.push(this.slides.eq(this.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var r=i[t].offsetHeight;s=r>s?r:s}s&&this.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this.params,i=this.slides,a=this.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&this.updateSlidesOffset();var r=-e;a&&(r=e),i.removeClass(t.slideVisibleClass),this.visibleSlidesIndexes=[],this.visibleSlides=[];for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(t.centeredSlides?this.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+t.spaceBetween);if(t.watchSlidesVisibility||t.centeredSlides&&t.autoHeight){var d=-(r-o.swiperSlideOffset),h=d+this.slidesSizesGrid[n];(d>=0&&d<this.size-1||h>1&&h<=this.size||d<=0&&h>=this.size)&&(this.visibleSlides.push(o),this.visibleSlidesIndexes.push(n),i.eq(n).addClass(t.slideVisibleClass))}o.progress=a?-l:l}this.visibleSlides=s(this.visibleSlides)}},updateProgress:function(e){if(void 0===e){var t=this.rtlTranslate?-1:1;e=this&&this.translate&&this.translate*t||0}var i=this.params,s=this.maxTranslate()-this.minTranslate(),a=this.progress,r=this.isBeginning,o=this.isEnd,l=r,d=o;0===s?(a=0,r=!0,o=!0):(r=(a=(e-this.minTranslate())/s)<=0,o=a>=1),n.extend(this,{progress:a,isBeginning:r,isEnd:o}),(i.watchSlidesProgress||i.watchSlidesVisibility||i.centeredSlides&&i.autoHeight)&&this.updateSlidesProgress(e),r&&!l&&this.emit("reachBeginning toEdge"),o&&!d&&this.emit("reachEnd toEdge"),(l&&!r||d&&!o)&&this.emit("fromEdge"),this.emit("progress",a)},updateSlidesClasses:function(){var e,t=this.slides,i=this.params,s=this.$wrapperEl,a=this.activeIndex,r=this.realIndex,n=this.virtual&&i.virtual.enabled;t.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=n?this.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+a+'"]'):t.eq(a)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass));var o=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===o.length&&(o=t.eq(0)).addClass(i.slideNextClass);var l=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===l.length&&(l=t.eq(-1)).addClass(i.slidePrevClass),i.loop&&(o.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,i=this.rtlTranslate?this.translate:-this.translate,s=this.slidesGrid,a=this.snapGrid,r=this.params,o=this.activeIndex,l=this.realIndex,d=this.snapIndex,h=e;if(void 0===h){for(var p=0;p<s.length;p+=1)void 0!==s[p+1]?i>=s[p]&&i<s[p+1]-(s[p+1]-s[p])/2?h=p:i>=s[p]&&i<s[p+1]&&(h=p+1):i>=s[p]&&(h=p);r.normalizeSlideIndex&&(h<0||void 0===h)&&(h=0)}if(a.indexOf(i)>=0)t=a.indexOf(i);else{var c=Math.min(r.slidesPerGroupSkip,h);t=c+Math.floor((h-c)/r.slidesPerGroup)}if(t>=a.length&&(t=a.length-1),h!==o){var u=parseInt(this.slides.eq(h).attr("data-swiper-slide-index")||h,10);n.extend(this,{snapIndex:t,realIndex:u,previousIndex:o,activeIndex:h}),this.emit("activeIndexChange"),this.emit("snapIndexChange"),l!==u&&this.emit("realIndexChange"),(this.initialized||this.runCallbacksOnInit)&&this.emit("slideChange")}else t!==d&&(this.snapIndex=t,this.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this.params,i=s(e.target).closest("."+t.slideClass)[0],a=!1;if(i)for(var r=0;r<this.slides.length;r+=1)this.slides[r]===i&&(a=!0);if(!i||!a)return this.clickedSlide=void 0,void(this.clickedIndex=void 0);this.clickedSlide=i,this.virtual&&this.params.virtual.enabled?this.clickedIndex=parseInt(s(i).attr("data-swiper-slide-index"),10):this.clickedIndex=s(i).index(),t.slideToClickedSlide&&void 0!==this.clickedIndex&&this.clickedIndex!==this.activeIndex&&this.slideToClickedSlide()}};var p={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,i=this.rtlTranslate,s=this.translate,a=this.$wrapperEl;if(t.virtualTranslate)return i?-s:s;if(t.cssMode)return s;var r=n.getTranslate(a[0],e);return i&&(r=-r),r||0},setTranslate:function(e,t){var i=this.rtlTranslate,s=this.params,a=this.$wrapperEl,r=this.wrapperEl,n=this.progress,o=0,l=0;this.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.cssMode?r[this.isHorizontal()?"scrollLeft":"scrollTop"]=this.isHorizontal()?-o:-l:s.virtualTranslate||a.transform("translate3d("+o+"px, "+l+"px, 0px)"),this.previousTranslate=this.translate,this.translate=this.isHorizontal()?o:l;var d=this.maxTranslate()-this.minTranslate();(0===d?0:(e-this.minTranslate())/d)!==n&&this.updateProgress(e),this.emit("setTranslate",this.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,i,s,a){var r;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0),void 0===s&&(s=!0);var n=this,o=n.params,l=n.wrapperEl;if(n.animating&&o.preventInteractionOnTransition)return!1;var d,h=n.minTranslate(),p=n.maxTranslate();if(d=s&&e>h?h:s&&e<p?p:e,n.updateProgress(d),o.cssMode){var c=n.isHorizontal();return 0===t?l[c?"scrollLeft":"scrollTop"]=-d:l.scrollTo?l.scrollTo(((r={})[c?"left":"top"]=-d,r.behavior="smooth",r)):l[c?"scrollLeft":"scrollTop"]=-d,!0}return 0===t?(n.setTransition(0),n.setTranslate(d),i&&(n.emit("beforeTransitionStart",t,a),n.emit("transitionEnd"))):(n.setTransition(t),n.setTranslate(d),i&&(n.emit("beforeTransitionStart",t,a),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(e){n&&!n.destroyed&&e.target===this&&(n.$wrapperEl[0].removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].removeEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,i&&n.emit("transitionEnd"))}),n.$wrapperEl[0].addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].addEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd))),!0}};var c={setTransition:function(e,t){this.params.cssMode||this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.params,a=this.previousIndex;if(!s.cssMode){s.autoHeight&&this.updateAutoHeight();var r=t;if(r||(r=i>a?"next":i<a?"prev":"reset"),this.emit("transitionStart"),e&&i!==a){if("reset"===r)return void this.emit("slideResetTransitionStart");this.emit("slideChangeTransitionStart"),"next"===r?this.emit("slideNextTransitionStart"):this.emit("slidePrevTransitionStart")}}},transitionEnd:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.previousIndex,a=this.params;if(this.animating=!1,!a.cssMode){this.setTransition(0);var r=t;if(r||(r=i>s?"next":i<s?"prev":"reset"),this.emit("transitionEnd"),e&&i!==s){if("reset"===r)return void this.emit("slideResetTransitionEnd");this.emit("slideChangeTransitionEnd"),"next"===r?this.emit("slideNextTransitionEnd"):this.emit("slidePrevTransitionEnd")}}}};var u={slideTo:function(e,t,i,s){var a;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var r=this,n=e;n<0&&(n=0);var o=r.params,l=r.snapGrid,d=r.slidesGrid,h=r.previousIndex,p=r.activeIndex,c=r.rtlTranslate,u=r.wrapperEl;if(r.animating&&o.preventInteractionOnTransition)return!1;var v=Math.min(r.params.slidesPerGroupSkip,n),f=v+Math.floor((n-v)/r.params.slidesPerGroup);f>=l.length&&(f=l.length-1),(p||o.initialSlide||0)===(h||0)&&i&&r.emit("beforeSlideChangeStart");var m,g=-l[f];if(r.updateProgress(g),o.normalizeSlideIndex)for(var b=0;b<d.length;b+=1)-Math.floor(100*g)>=Math.floor(100*d[b])&&(n=b);if(r.initialized&&n!==p){if(!r.allowSlideNext&&g<r.translate&&g<r.minTranslate())return!1;if(!r.allowSlidePrev&&g>r.translate&&g>r.maxTranslate()&&(p||0)!==n)return!1}if(m=n>p?"next":n<p?"prev":"reset",c&&-g===r.translate||!c&&g===r.translate)return r.updateActiveIndex(n),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==o.effect&&r.setTranslate(g),"reset"!==m&&(r.transitionStart(i,m),r.transitionEnd(i,m)),!1;if(o.cssMode){var w=r.isHorizontal();return 0===t?u[w?"scrollLeft":"scrollTop"]=-g:u.scrollTo?u.scrollTo(((a={})[w?"left":"top"]=-g,a.behavior="smooth",a)):u[w?"scrollLeft":"scrollTop"]=-g,!0}return 0===t?(r.setTransition(0),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,s),r.transitionStart(i,m),r.transitionEnd(i,m)):(r.setTransition(t),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,s),r.transitionStart(i,m),r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(i,m))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd))),!0},slideToLoop:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=e;return this.params.loop&&(a+=this.loopedSlides),this.slideTo(a,t,i,s)},slideNext:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.activeIndex<s.slidesPerGroupSkip?1:s.slidesPerGroup;if(s.loop){if(a)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}return this.slideTo(this.activeIndex+r,e,t,i)},slidePrev:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.snapGrid,n=this.slidesGrid,o=this.rtlTranslate;if(s.loop){if(a)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}function l(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var d,h=l(o?this.translate:-this.translate),p=r.map((function(e){return l(e)})),c=(n.map((function(e){return l(e)})),r[p.indexOf(h)],r[p.indexOf(h)-1]);return void 0===c&&s.cssMode&&r.forEach((function(e){!c&&h>=e&&(c=e)})),void 0!==c&&(d=n.indexOf(c))<0&&(d=this.activeIndex-1),this.slideTo(d,e,t,i)},slideReset:function(e,t,i){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,i)},slideToClosest:function(e,t,i,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===s&&(s=.5);var a=this.activeIndex,r=Math.min(this.params.slidesPerGroupSkip,a),n=r+Math.floor((a-r)/this.params.slidesPerGroup),o=this.rtlTranslate?this.translate:-this.translate;if(o>=this.snapGrid[n]){var l=this.snapGrid[n];o-l>(this.snapGrid[n+1]-l)*s&&(a+=this.params.slidesPerGroup)}else{var d=this.snapGrid[n-1];o-d<=(this.snapGrid[n]-d)*s&&(a-=this.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,this.slidesGrid.length-1),this.slideTo(a,e,t,i)},slideToClickedSlide:function(){var e,t=this,i=t.params,a=t.$wrapperEl,r="auto"===i.slidesPerView?t.slidesPerViewDynamic():i.slidesPerView,o=t.clickedIndex;if(i.loop){if(t.animating)return;e=parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"),10),i.centeredSlides?o<t.loopedSlides-r/2||o>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),o=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),n.nextTick((function(){t.slideTo(o)}))):t.slideTo(o):o>t.slides.length-r?(t.loopFix(),o=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),n.nextTick((function(){t.slideTo(o)}))):t.slideTo(o)}else t.slideTo(o)}};var v={loopCreate:function(){var t=this,i=t.params,a=t.$wrapperEl;a.children("."+i.slideClass+"."+i.slideDuplicateClass).remove();var r=a.children("."+i.slideClass);if(i.loopFillGroupWithBlank){var n=i.slidesPerGroup-r.length%i.slidesPerGroup;if(n!==i.slidesPerGroup){for(var o=0;o<n;o+=1){var l=s(e.createElement("div")).addClass(i.slideClass+" "+i.slideBlankClass);a.append(l)}r=a.children("."+i.slideClass)}}"auto"!==i.slidesPerView||i.loopedSlides||(i.loopedSlides=r.length),t.loopedSlides=Math.ceil(parseFloat(i.loopedSlides||i.slidesPerView,10)),t.loopedSlides+=i.loopAdditionalSlides,t.loopedSlides>r.length&&(t.loopedSlides=r.length);var d=[],h=[];r.each((function(e,i){var a=s(i);e<t.loopedSlides&&h.push(i),e<r.length&&e>=r.length-t.loopedSlides&&d.push(i),a.attr("data-swiper-slide-index",e)}));for(var p=0;p<h.length;p+=1)a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));for(var c=d.length-1;c>=0;c-=1)a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))},loopFix:function(){this.emit("beforeLoopFix");var e,t=this.activeIndex,i=this.slides,s=this.loopedSlides,a=this.allowSlidePrev,r=this.allowSlideNext,n=this.snapGrid,o=this.rtlTranslate;this.allowSlidePrev=!0,this.allowSlideNext=!0;var l=-n[t]-this.getTranslate();if(t<s)e=i.length-3*s+t,e+=s,this.slideTo(e,0,!1,!0)&&0!==l&&this.setTranslate((o?-this.translate:this.translate)-l);else if(t>=i.length-s){e=-i.length+t+s,e+=s,this.slideTo(e,0,!1,!0)&&0!==l&&this.setTranslate((o?-this.translate:this.translate)-l)}this.allowSlidePrev=a,this.allowSlideNext=r,this.emit("loopFix")},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,i=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass+",."+t.slideClass+"."+t.slideBlankClass).remove(),i.removeAttr("data-swiper-slide-index")}};var f={setGrabCursor:function(e){if(!(o.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked||this.params.cssMode)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){o.touch||this.params.watchOverflow&&this.isLocked||this.params.cssMode||(this.el.style.cursor="")}};var m,g,b,w,y,x,T,E,S,C,M,P,z,k,$,L={appendSlide:function(e){var t=this.$wrapperEl,i=this.params;if(i.loop&&this.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&t.append(e[s]);else t.append(e);i.loop&&this.loopCreate(),i.observer&&o.observer||this.update()},prependSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&this.loopDestroy();var a=s+1;if("object"==typeof e&&"length"in e){for(var r=0;r<e.length;r+=1)e[r]&&i.prepend(e[r]);a=s+e.length}else i.prepend(e);t.loop&&this.loopCreate(),t.observer&&o.observer||this.update(),this.slideTo(a,0,!1)},addSlide:function(e,t){var i=this.$wrapperEl,s=this.params,a=this.activeIndex;s.loop&&(a-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+s.slideClass));var r=this.slides.length;if(e<=0)this.prependSlide(t);else if(e>=r)this.appendSlide(t);else{for(var n=a>e?a+1:a,l=[],d=r-1;d>=e;d-=1){var h=this.slides.eq(d);h.remove(),l.unshift(h)}if("object"==typeof t&&"length"in t){for(var p=0;p<t.length;p+=1)t[p]&&i.append(t[p]);n=a>e?a+t.length:a}else i.append(t);for(var c=0;c<l.length;c+=1)i.append(l[c]);s.loop&&this.loopCreate(),s.observer&&o.observer||this.update(),s.loop?this.slideTo(n+this.loopedSlides,0,!1):this.slideTo(n,0,!1)}},removeSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&(s-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+t.slideClass));var a,r=s;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)a=e[n],this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1);r=Math.max(r,0)}else a=e,this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1),r=Math.max(r,0);t.loop&&this.loopCreate(),t.observer&&o.observer||this.update(),t.loop?this.slideTo(r+this.loopedSlides,0,!1):this.slideTo(r,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},I=(m=t.navigator.platform,g=t.navigator.userAgent,b={ios:!1,android:!1,androidChrome:!1,desktop:!1,iphone:!1,ipod:!1,ipad:!1,edge:!1,ie:!1,firefox:!1,macos:!1,windows:!1,cordova:!(!t.cordova&&!t.phonegap),phonegap:!(!t.cordova&&!t.phonegap),electron:!1},w=t.screen.width,y=t.screen.height,x=g.match(/(Android);?[\s\/]+([\d.]+)?/),T=g.match(/(iPad).*OS\s([\d_]+)/),E=g.match(/(iPod)(.*OS\s([\d_]+))?/),S=!T&&g.match(/(iPhone\sOS|iOS)\s([\d_]+)/),C=g.indexOf("MSIE ")>=0||g.indexOf("Trident/")>=0,M=g.indexOf("Edge/")>=0,P=g.indexOf("Gecko/")>=0&&g.indexOf("Firefox/")>=0,z="Win32"===m,k=g.toLowerCase().indexOf("electron")>=0,$="MacIntel"===m,!T&&$&&o.touch&&(1024===w&&1366===y||834===w&&1194===y||834===w&&1112===y||768===w&&1024===y)&&(T=g.match(/(Version)\/([\d.]+)/),$=!1),b.ie=C,b.edge=M,b.firefox=P,x&&!z&&(b.os="android",b.osVersion=x[2],b.android=!0,b.androidChrome=g.toLowerCase().indexOf("chrome")>=0),(T||S||E)&&(b.os="ios",b.ios=!0),S&&!E&&(b.osVersion=S[2].replace(/_/g,"."),b.iphone=!0),T&&(b.osVersion=T[2].replace(/_/g,"."),b.ipad=!0),E&&(b.osVersion=E[3]?E[3].replace(/_/g,"."):null,b.ipod=!0),b.ios&&b.osVersion&&g.indexOf("Version/")>=0&&"10"===b.osVersion.split(".")[0]&&(b.osVersion=g.toLowerCase().split("version/")[1].split(" ")[0]),b.webView=!(!(S||T||E)||!g.match(/.*AppleWebKit(?!.*Safari)/i)&&!t.navigator.standalone)||t.matchMedia&&t.matchMedia("(display-mode: standalone)").matches,b.webview=b.webView,b.standalone=b.webView,b.desktop=!(b.ios||b.android)||k,b.desktop&&(b.electron=k,b.macos=$,b.windows=z,b.macos&&(b.os="macos"),b.windows&&(b.os="windows")),b.pixelRatio=t.devicePixelRatio||1,b);function D(i){var a=this.touchEventsData,r=this.params,o=this.touches;if(!this.animating||!r.preventInteractionOnTransition){var l=i;l.originalEvent&&(l=l.originalEvent);var d=s(l.target);if(("wrapper"!==r.touchEventsTarget||d.closest(this.wrapperEl).length)&&(a.isTouchEvent="touchstart"===l.type,(a.isTouchEvent||!("which"in l)||3!==l.which)&&!(!a.isTouchEvent&&"button"in l&&l.button>0||a.isTouched&&a.isMoved)))if(r.noSwiping&&d.closest(r.noSwipingSelector?r.noSwipingSelector:"."+r.noSwipingClass)[0])this.allowClick=!0;else if(!r.swipeHandler||d.closest(r.swipeHandler)[0]){o.currentX="touchstart"===l.type?l.targetTouches[0].pageX:l.pageX,o.currentY="touchstart"===l.type?l.targetTouches[0].pageY:l.pageY;var h=o.currentX,p=o.currentY,c=r.edgeSwipeDetection||r.iOSEdgeSwipeDetection,u=r.edgeSwipeThreshold||r.iOSEdgeSwipeThreshold;if(!c||!(h<=u||h>=t.screen.width-u)){if(n.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=h,o.startY=p,a.touchStartTime=n.now(),this.allowClick=!0,this.updateSize(),this.swipeDirection=void 0,r.threshold>0&&(a.allowThresholdMove=!1),"touchstart"!==l.type){var v=!0;d.is(a.formElements)&&(v=!1),e.activeElement&&s(e.activeElement).is(a.formElements)&&e.activeElement!==d[0]&&e.activeElement.blur();var f=v&&this.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||f)&&l.preventDefault()}this.emit("touchStart",l)}}}}function O(t){var i=this.touchEventsData,a=this.params,r=this.touches,o=this.rtlTranslate,l=t;if(l.originalEvent&&(l=l.originalEvent),i.isTouched){if(!i.isTouchEvent||"mousemove"!==l.type){var d="touchmove"===l.type&&l.targetTouches&&(l.targetTouches[0]||l.changedTouches[0]),h="touchmove"===l.type?d.pageX:l.pageX,p="touchmove"===l.type?d.pageY:l.pageY;if(l.preventedByNestedSwiper)return r.startX=h,void(r.startY=p);if(!this.allowTouchMove)return this.allowClick=!1,void(i.isTouched&&(n.extend(r,{startX:h,startY:p,currentX:h,currentY:p}),i.touchStartTime=n.now()));if(i.isTouchEvent&&a.touchReleaseOnEdges&&!a.loop)if(this.isVertical()){if(p<r.startY&&this.translate<=this.maxTranslate()||p>r.startY&&this.translate>=this.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<r.startX&&this.translate<=this.maxTranslate()||h>r.startX&&this.translate>=this.minTranslate())return;if(i.isTouchEvent&&e.activeElement&&l.target===e.activeElement&&s(l.target).is(i.formElements))return i.isMoved=!0,void(this.allowClick=!1);if(i.allowTouchCallbacks&&this.emit("touchMove",l),!(l.targetTouches&&l.targetTouches.length>1)){r.currentX=h,r.currentY=p;var c=r.currentX-r.startX,u=r.currentY-r.startY;if(!(this.params.threshold&&Math.sqrt(Math.pow(c,2)+Math.pow(u,2))<this.params.threshold)){var v;if(void 0===i.isScrolling)this.isHorizontal()&&r.currentY===r.startY||this.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:c*c+u*u>=25&&(v=180*Math.atan2(Math.abs(u),Math.abs(c))/Math.PI,i.isScrolling=this.isHorizontal()?v>a.touchAngle:90-v>a.touchAngle);if(i.isScrolling&&this.emit("touchMoveOpposite",l),void 0===i.startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(i.startMoving=!0)),i.isScrolling)i.isTouched=!1;else if(i.startMoving){this.allowClick=!1,a.cssMode||l.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&l.stopPropagation(),i.isMoved||(a.loop&&this.loopFix(),i.startTranslate=this.getTranslate(),this.setTransition(0),this.animating&&this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!a.grabCursor||!0!==this.allowSlideNext&&!0!==this.allowSlidePrev||this.setGrabCursor(!0),this.emit("sliderFirstMove",l)),this.emit("sliderMove",l),i.isMoved=!0;var f=this.isHorizontal()?c:u;r.diff=f,f*=a.touchRatio,o&&(f=-f),this.swipeDirection=f>0?"prev":"next",i.currentTranslate=f+i.startTranslate;var m=!0,g=a.resistanceRatio;if(a.touchReleaseOnEdges&&(g=0),f>0&&i.currentTranslate>this.minTranslate()?(m=!1,a.resistance&&(i.currentTranslate=this.minTranslate()-1+Math.pow(-this.minTranslate()+i.startTranslate+f,g))):f<0&&i.currentTranslate<this.maxTranslate()&&(m=!1,a.resistance&&(i.currentTranslate=this.maxTranslate()+1-Math.pow(this.maxTranslate()-i.startTranslate-f,g))),m&&(l.preventedByNestedSwiper=!0),!this.allowSlideNext&&"next"===this.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!this.allowSlidePrev&&"prev"===this.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),a.threshold>0){if(!(Math.abs(f)>a.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,void(r.diff=this.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}a.followFinger&&!a.cssMode&&((a.freeMode||a.watchSlidesProgress||a.watchSlidesVisibility)&&(this.updateActiveIndex(),this.updateSlidesClasses()),a.freeMode&&(0===i.velocities.length&&i.velocities.push({position:r[this.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:r[this.isHorizontal()?"currentX":"currentY"],time:n.now()})),this.updateProgress(i.currentTranslate),this.setTranslate(i.currentTranslate))}}}}}else i.startMoving&&i.isScrolling&&this.emit("touchMoveOpposite",l)}function A(e){var t=this,i=t.touchEventsData,s=t.params,a=t.touches,r=t.rtlTranslate,o=t.$wrapperEl,l=t.slidesGrid,d=t.snapGrid,h=e;if(h.originalEvent&&(h=h.originalEvent),i.allowTouchCallbacks&&t.emit("touchEnd",h),i.allowTouchCallbacks=!1,!i.isTouched)return i.isMoved&&s.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,void(i.startMoving=!1);s.grabCursor&&i.isMoved&&i.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=n.now(),u=c-i.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(h),t.emit("tap click",h),u<300&&c-i.lastClickTime<300&&t.emit("doubleTap doubleClick",h)),i.lastClickTime=n.now(),n.nextTick((function(){t.destroyed||(t.allowClick=!0)})),!i.isTouched||!i.isMoved||!t.swipeDirection||0===a.diff||i.currentTranslate===i.startTranslate)return i.isTouched=!1,i.isMoved=!1,void(i.startMoving=!1);if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,p=s.followFinger?r?t.translate:-t.translate:-i.currentTranslate,!s.cssMode)if(s.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<d.length?t.slideTo(d.length-1):t.slideTo(t.slides.length-1));if(s.freeModeMomentum){if(i.velocities.length>1){var v=i.velocities.pop(),f=i.velocities.pop(),m=v.position-f.position,g=v.time-f.time;t.velocity=m/g,t.velocity/=2,Math.abs(t.velocity)<s.freeModeMinimumVelocity&&(t.velocity=0),(g>150||n.now()-v.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=s.freeModeMomentumVelocityRatio,i.velocities.length=0;var b=1e3*s.freeModeMomentumRatio,w=t.velocity*b,y=t.translate+w;r&&(y=-y);var x,T,E=!1,S=20*Math.abs(t.velocity)*s.freeModeMomentumBounceRatio;if(y<t.maxTranslate())s.freeModeMomentumBounce?(y+t.maxTranslate()<-S&&(y=t.maxTranslate()-S),x=t.maxTranslate(),E=!0,i.allowMomentumBounce=!0):y=t.maxTranslate(),s.loop&&s.centeredSlides&&(T=!0);else if(y>t.minTranslate())s.freeModeMomentumBounce?(y-t.minTranslate()>S&&(y=t.minTranslate()+S),x=t.minTranslate(),E=!0,i.allowMomentumBounce=!0):y=t.minTranslate(),s.loop&&s.centeredSlides&&(T=!0);else if(s.freeModeSticky){for(var C,M=0;M<d.length;M+=1)if(d[M]>-y){C=M;break}y=-(y=Math.abs(d[C]-y)<Math.abs(d[C-1]-y)||"next"===t.swipeDirection?d[C]:d[C-1])}if(T&&t.once("transitionEnd",(function(){t.loopFix()})),0!==t.velocity){if(b=r?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity),s.freeModeSticky){var P=Math.abs((r?-y:y)-t.translate),z=t.slidesSizesGrid[t.activeIndex];b=P<z?s.speed:P<2*z?1.5*s.speed:2.5*s.speed}}else if(s.freeModeSticky)return void t.slideToClosest();s.freeModeMomentumBounce&&E?(t.updateProgress(x),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating=!0,o.transitionEnd((function(){t&&!t.destroyed&&i.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(s.speed),t.setTranslate(x),o.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))}))):t.velocity?(t.updateProgress(y),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,o.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(y),t.updateActiveIndex(),t.updateSlidesClasses()}else if(s.freeModeSticky)return void t.slideToClosest();(!s.freeModeMomentum||u>=s.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var k=0,$=t.slidesSizesGrid[0],L=0;L<l.length;L+=L<s.slidesPerGroupSkip?1:s.slidesPerGroup){var I=L<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;void 0!==l[L+I]?p>=l[L]&&p<l[L+I]&&(k=L,$=l[L+I]-l[L]):p>=l[L]&&(k=L,$=l[l.length-1]-l[l.length-2])}var D=(p-l[k])/$,O=k<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(u>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(D>=s.longSwipesRatio?t.slideTo(k+O):t.slideTo(k)),"prev"===t.swipeDirection&&(D>1-s.longSwipesRatio?t.slideTo(k+O):t.slideTo(k))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(h.target===t.navigation.nextEl||h.target===t.navigation.prevEl)?h.target===t.navigation.nextEl?t.slideTo(k+O):t.slideTo(k):("next"===t.swipeDirection&&t.slideTo(k+O),"prev"===t.swipeDirection&&t.slideTo(k))}}}function G(){var e=this.params,t=this.el;if(!t||0!==t.offsetWidth){e.breakpoints&&this.setBreakpoint();var i=this.allowSlideNext,s=this.allowSlidePrev,a=this.snapGrid;this.allowSlideNext=!0,this.allowSlidePrev=!0,this.updateSize(),this.updateSlides(),this.updateSlidesClasses(),("auto"===e.slidesPerView||e.slidesPerView>1)&&this.isEnd&&!this.params.centeredSlides?this.slideTo(this.slides.length-1,0,!1,!0):this.slideTo(this.activeIndex,0,!1,!0),this.autoplay&&this.autoplay.running&&this.autoplay.paused&&this.autoplay.run(),this.allowSlidePrev=s,this.allowSlideNext=i,this.params.watchOverflow&&a!==this.snapGrid&&this.checkOverflow()}}function H(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function B(){var e=this.wrapperEl;this.previousTranslate=this.translate,this.translate=this.isHorizontal()?-e.scrollLeft:-e.scrollTop,-0===this.translate&&(this.translate=0),this.updateActiveIndex(),this.updateSlidesClasses();var t=this.maxTranslate()-this.minTranslate();(0===t?0:(this.translate-this.minTranslate())/t)!==this.progress&&this.updateProgress(this.translate),this.emit("setTranslate",this.translate,!1)}var N=!1;function X(){}var V={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},Y={update:h,translate:p,transition:c,slide:u,loop:v,grabCursor:f,manipulation:L,events:{attachEvents:function(){var t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl;this.onTouchStart=D.bind(this),this.onTouchMove=O.bind(this),this.onTouchEnd=A.bind(this),t.cssMode&&(this.onScroll=B.bind(this)),this.onClick=H.bind(this);var r=!!t.nested;if(!o.touch&&o.pointerEvents)s.addEventListener(i.start,this.onTouchStart,!1),e.addEventListener(i.move,this.onTouchMove,r),e.addEventListener(i.end,this.onTouchEnd,!1);else{if(o.touch){var n=!("touchstart"!==i.start||!o.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};s.addEventListener(i.start,this.onTouchStart,n),s.addEventListener(i.move,this.onTouchMove,o.passiveListener?{passive:!1,capture:r}:r),s.addEventListener(i.end,this.onTouchEnd,n),i.cancel&&s.addEventListener(i.cancel,this.onTouchEnd,n),N||(e.addEventListener("touchstart",X),N=!0)}(t.simulateTouch&&!I.ios&&!I.android||t.simulateTouch&&!o.touch&&I.ios)&&(s.addEventListener("mousedown",this.onTouchStart,!1),e.addEventListener("mousemove",this.onTouchMove,r),e.addEventListener("mouseup",this.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&s.addEventListener("click",this.onClick,!0),t.cssMode&&a.addEventListener("scroll",this.onScroll),t.updateOnWindowResize?this.on(I.ios||I.android?"resize orientationchange observerUpdate":"resize observerUpdate",G,!0):this.on("observerUpdate",G,!0)},detachEvents:function(){var t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl,r=!!t.nested;if(!o.touch&&o.pointerEvents)s.removeEventListener(i.start,this.onTouchStart,!1),e.removeEventListener(i.move,this.onTouchMove,r),e.removeEventListener(i.end,this.onTouchEnd,!1);else{if(o.touch){var n=!("onTouchStart"!==i.start||!o.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};s.removeEventListener(i.start,this.onTouchStart,n),s.removeEventListener(i.move,this.onTouchMove,r),s.removeEventListener(i.end,this.onTouchEnd,n),i.cancel&&s.removeEventListener(i.cancel,this.onTouchEnd,n)}(t.simulateTouch&&!I.ios&&!I.android||t.simulateTouch&&!o.touch&&I.ios)&&(s.removeEventListener("mousedown",this.onTouchStart,!1),e.removeEventListener("mousemove",this.onTouchMove,r),e.removeEventListener("mouseup",this.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&s.removeEventListener("click",this.onClick,!0),t.cssMode&&a.removeEventListener("scroll",this.onScroll),this.off(I.ios||I.android?"resize orientationchange observerUpdate":"resize observerUpdate",G)}},breakpoints:{setBreakpoint:function(){var e=this.activeIndex,t=this.initialized,i=this.loopedSlides;void 0===i&&(i=0);var s=this.params,a=this.$el,r=s.breakpoints;if(r&&(!r||0!==Object.keys(r).length)){var o=this.getBreakpoint(r);if(o&&this.currentBreakpoint!==o){var l=o in r?r[o]:void 0;l&&["slidesPerView","spaceBetween","slidesPerGroup","slidesPerGroupSkip","slidesPerColumn"].forEach((function(e){var t=l[e];void 0!==t&&(l[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")}));var d=l||this.originalParams,h=s.slidesPerColumn>1,p=d.slidesPerColumn>1;h&&!p?a.removeClass(s.containerModifierClass+"multirow "+s.containerModifierClass+"multirow-column"):!h&&p&&(a.addClass(s.containerModifierClass+"multirow"),"column"===d.slidesPerColumnFill&&a.addClass(s.containerModifierClass+"multirow-column"));var c=d.direction&&d.direction!==s.direction,u=s.loop&&(d.slidesPerView!==s.slidesPerView||c);c&&t&&this.changeDirection(),n.extend(this.params,d),n.extend(this,{allowTouchMove:this.params.allowTouchMove,allowSlideNext:this.params.allowSlideNext,allowSlidePrev:this.params.allowSlidePrev}),this.currentBreakpoint=o,u&&t&&(this.loopDestroy(),this.loopCreate(),this.updateSlides(),this.slideTo(e-i+this.loopedSlides,0,!1)),this.emit("breakpoint",d)}}},getBreakpoint:function(e){if(e){var i=!1,s=Object.keys(e).map((function(e){if("string"==typeof e&&0===e.indexOf("@")){var i=parseFloat(e.substr(1));return{value:t.innerHeight*i,point:e}}return{value:e,point:e}}));s.sort((function(e,t){return parseInt(e.value,10)-parseInt(t.value,10)}));for(var a=0;a<s.length;a+=1){var r=s[a],n=r.point;r.value<=t.innerWidth&&(i=n)}return i||"max"}}},checkOverflow:{checkOverflow:function(){var e=this.params,t=this.isLocked,i=this.slides.length>0&&e.slidesOffsetBefore+e.spaceBetween*(this.slides.length-1)+this.slides[0].offsetWidth*this.slides.length;e.slidesOffsetBefore&&e.slidesOffsetAfter&&i?this.isLocked=i<=this.size:this.isLocked=1===this.snapGrid.length,this.allowSlideNext=!this.isLocked,this.allowSlidePrev=!this.isLocked,t!==this.isLocked&&this.emit(this.isLocked?"lock":"unlock"),t&&t!==this.isLocked&&(this.isEnd=!1,this.navigation.update())}},classes:{addClasses:function(){var e=this.classNames,t=this.params,i=this.rtl,s=this.$el,a=[];a.push("initialized"),a.push(t.direction),t.freeMode&&a.push("free-mode"),t.autoHeight&&a.push("autoheight"),i&&a.push("rtl"),t.slidesPerColumn>1&&(a.push("multirow"),"column"===t.slidesPerColumnFill&&a.push("multirow-column")),I.android&&a.push("android"),I.ios&&a.push("ios"),t.cssMode&&a.push("css-mode"),a.forEach((function(i){e.push(t.containerModifierClass+i)})),s.addClass(e.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,i,s,a,r,n){var o;function l(){n&&n()}e.complete&&r?l():i?((o=new t.Image).onload=l,o.onerror=l,a&&(o.sizes=a),s&&(o.srcset=s),i&&(o.src=i)):l()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var i=0;i<e.imagesToLoad.length;i+=1){var s=e.imagesToLoad[i];e.loadImage(s,s.currentSrc||s.getAttribute("src"),s.srcset||s.getAttribute("srcset"),s.sizes||s.getAttribute("sizes"),!0,t)}}}},F={},W=function(e){function t(){for(var i,a,r,l=[],d=arguments.length;d--;)l[d]=arguments[d];1===l.length&&l[0].constructor&&l[0].constructor===Object?r=l[0]:(a=(i=l)[0],r=i[1]),r||(r={}),r=n.extend({},r),a&&!r.el&&(r.el=a),e.call(this,r),Object.keys(Y).forEach((function(e){Object.keys(Y[e]).forEach((function(i){t.prototype[i]||(t.prototype[i]=Y[e][i])}))}));var h=this;void 0===h.modules&&(h.modules={}),Object.keys(h.modules).forEach((function(e){var t=h.modules[e];if(t.params){var i=Object.keys(t.params)[0],s=t.params[i];if("object"!=typeof s||null===s)return;if(!(i in r&&"enabled"in s))return;!0===r[i]&&(r[i]={enabled:!0}),"object"!=typeof r[i]||"enabled"in r[i]||(r[i].enabled=!0),r[i]||(r[i]={enabled:!1})}}));var p=n.extend({},V);h.useModulesParams(p),h.params=n.extend({},p,F,r),h.originalParams=n.extend({},h.params),h.passedParams=n.extend({},r),h.$=s;var c=s(h.params.el);if(a=c[0]){if(c.length>1){var u=[];return c.each((function(e,i){var s=n.extend({},r,{el:i});u.push(new t(s))})),u}var v,f,m;return a.swiper=h,c.data("swiper",h),a&&a.shadowRoot&&a.shadowRoot.querySelector?(v=s(a.shadowRoot.querySelector("."+h.params.wrapperClass))).children=function(e){return c.children(e)}:v=c.children("."+h.params.wrapperClass),n.extend(h,{$el:c,el:a,$wrapperEl:v,wrapperEl:v[0],classNames:[],slides:s(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===h.params.direction},isVertical:function(){return"vertical"===h.params.direction},rtl:"rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction"),rtlTranslate:"horizontal"===h.params.direction&&("rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction")),wrongRTL:"-webkit-box"===v.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:h.params.allowSlideNext,allowSlidePrev:h.params.allowSlidePrev,touchEvents:(f=["touchstart","touchmove","touchend","touchcancel"],m=["mousedown","mousemove","mouseup"],o.pointerEvents&&(m=["pointerdown","pointermove","pointerup"]),h.touchEventsTouch={start:f[0],move:f[1],end:f[2],cancel:f[3]},h.touchEventsDesktop={start:m[0],move:m[1],end:m[2]},o.touch||!h.params.simulateTouch?h.touchEventsTouch:h.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video, label",lastClickTime:n.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:h.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),h.useModules(),h.params.init&&h.init(),h}}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var i={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return t.prototype.slidesPerViewDynamic=function(){var e=this.params,t=this.slides,i=this.slidesGrid,s=this.size,a=this.activeIndex,r=1;if(e.centeredSlides){for(var n,o=t[a].swiperSlideSize,l=a+1;l<t.length;l+=1)t[l]&&!n&&(r+=1,(o+=t[l].swiperSlideSize)>s&&(n=!0));for(var d=a-1;d>=0;d-=1)t[d]&&!n&&(r+=1,(o+=t[d].swiperSlideSize)>s&&(n=!0))}else for(var h=a+1;h<t.length;h+=1)i[h]-i[a]<s&&(r+=1);return r},t.prototype.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,i=e.params;i.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(s(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||s(),i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function s(){var t=e.rtlTranslate?-1*e.translate:e.translate,i=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(i),e.updateActiveIndex(),e.updateSlidesClasses()}},t.prototype.changeDirection=function(e,t){void 0===t&&(t=!0);var i=this.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e?this:(this.$el.removeClass(""+this.params.containerModifierClass+i).addClass(""+this.params.containerModifierClass+e),this.params.direction=e,this.slides.each((function(t,i){"vertical"===e?i.style.width="":i.style.height=""})),this.emit("changeDirection"),t&&this.update(),this)},t.prototype.init=function(){this.initialized||(this.emit("beforeInit"),this.params.breakpoints&&this.setBreakpoint(),this.addClasses(),this.params.loop&&this.loopCreate(),this.updateSize(),this.updateSlides(),this.params.watchOverflow&&this.checkOverflow(),this.params.grabCursor&&this.setGrabCursor(),this.params.preloadImages&&this.preloadImages(),this.params.loop?this.slideTo(this.params.initialSlide+this.loopedSlides,0,this.params.runCallbacksOnInit):this.slideTo(this.params.initialSlide,0,this.params.runCallbacksOnInit),this.attachEvents(),this.initialized=!0,this.emit("init"))},t.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var i=this,s=i.params,a=i.$el,r=i.$wrapperEl,o=i.slides;return void 0===i.params||i.destroyed?null:(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),a.removeAttr("style"),r.removeAttr("style"),o&&o.length&&o.removeClass([s.slideVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach((function(e){i.off(e)})),!1!==e&&(i.$el[0].swiper=null,i.$el.data("swiper",null),n.deleteProps(i)),i.destroyed=!0,null)},t.extendDefaults=function(e){n.extend(F,e)},i.extendedDefaults.get=function(){return F},i.defaults.get=function(){return V},i.Class.get=function(){return e},i.$.get=function(){return s},Object.defineProperties(t,i),t}(l),R={name:"device",proto:{device:I},static:{device:I}},q={name:"support",proto:{support:o},static:{support:o}},j={isEdge:!!t.navigator.userAgent.match(/Edge/g),isSafari:function(){var e=t.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)},K={name:"browser",proto:{browser:j},static:{browser:j}},U={name:"resize",create:function(){var e=this;n.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){t.addEventListener("resize",this.resize.resizeHandler),t.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){t.removeEventListener("resize",this.resize.resizeHandler),t.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},_={func:t.MutationObserver||t.WebkitMutationObserver,attach:function(e,i){void 0===i&&(i={});var s=this,a=new(0,_.func)((function(e){if(1!==e.length){var i=function(){s.emit("observerUpdate",e[0])};t.requestAnimationFrame?t.requestAnimationFrame(i):t.setTimeout(i,0)}else s.emit("observerUpdate",e[0])}));a.observe(e,{attributes:void 0===i.attributes||i.attributes,childList:void 0===i.childList||i.childList,characterData:void 0===i.characterData||i.characterData}),s.observer.observers.push(a)},init:function(){if(o.observer&&this.params.observer){if(this.params.observeParents)for(var e=this.$el.parents(),t=0;t<e.length;t+=1)this.observer.attach(e[t]);this.observer.attach(this.$el[0],{childList:this.params.observeSlideChildren}),this.observer.attach(this.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach((function(e){e.disconnect()})),this.observer.observers=[]}},Z={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){n.extend(this,{observer:{init:_.init.bind(this),attach:_.attach.bind(this),destroy:_.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},Q={update:function(e){var t=this,i=t.params,s=i.slidesPerView,a=i.slidesPerGroup,r=i.centeredSlides,o=t.params.virtual,l=o.addSlidesBefore,d=o.addSlidesAfter,h=t.virtual,p=h.from,c=h.to,u=h.slides,v=h.slidesGrid,f=h.renderSlide,m=h.offset;t.updateActiveIndex();var g,b,w,y=t.activeIndex||0;g=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(b=Math.floor(s/2)+a+l,w=Math.floor(s/2)+a+d):(b=s+(a-1)+l,w=a+d);var x=Math.max((y||0)-w,0),T=Math.min((y||0)+b,u.length-1),E=(t.slidesGrid[x]||0)-(t.slidesGrid[0]||0);function S(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(n.extend(t.virtual,{from:x,to:T,offset:E,slidesGrid:t.slidesGrid}),p===x&&c===T&&!e)return t.slidesGrid!==v&&E!==m&&t.slides.css(g,E+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:E,from:x,to:T,slides:function(){for(var e=[],t=x;t<=T;t+=1)e.push(u[t]);return e}()}),void S();var C=[],M=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var P=p;P<=c;P+=1)(P<x||P>T)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+P+'"]').remove();for(var z=0;z<u.length;z+=1)z>=x&&z<=T&&(void 0===c||e?M.push(z):(z>c&&M.push(z),z<p&&C.push(z)));M.forEach((function(e){t.$wrapperEl.append(f(u[e],e))})),C.sort((function(e,t){return t-e})).forEach((function(e){t.$wrapperEl.prepend(f(u[e],e))})),t.$wrapperEl.children(".swiper-slide").css(g,E+"px"),S()},renderSlide:function(e,t){var i=this.params.virtual;if(i.cache&&this.virtual.cache[t])return this.virtual.cache[t];var a=i.renderSlide?s(i.renderSlide.call(this,e,t)):s('<div class="'+this.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return a.attr("data-swiper-slide-index")||a.attr("data-swiper-slide-index",t),i.cache&&(this.virtual.cache[t]=a),a},appendSlide:function(e){if("object"==typeof e&&"length"in e)for(var t=0;t<e.length;t+=1)e[t]&&this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);this.virtual.update(!0)},prependSlide:function(e){var t=this.activeIndex,i=t+1,s=1;if(Array.isArray(e)){for(var a=0;a<e.length;a+=1)e[a]&&this.virtual.slides.unshift(e[a]);i=t+e.length,s=e.length}else this.virtual.slides.unshift(e);if(this.params.virtual.cache){var r=this.virtual.cache,n={};Object.keys(r).forEach((function(e){var t=r[e],i=t.attr("data-swiper-slide-index");i&&t.attr("data-swiper-slide-index",parseInt(i,10)+1),n[parseInt(e,10)+s]=t})),this.virtual.cache=n}this.virtual.update(!0),this.slideTo(i,0)},removeSlide:function(e){if(null!=e){var t=this.activeIndex;if(Array.isArray(e))for(var i=e.length-1;i>=0;i-=1)this.virtual.slides.splice(e[i],1),this.params.virtual.cache&&delete this.virtual.cache[e[i]],e[i]<t&&(t-=1),t=Math.max(t,0);else this.virtual.slides.splice(e,1),this.params.virtual.cache&&delete this.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);this.virtual.update(!0),this.slideTo(t,0)}},removeAllSlides:function(){this.virtual.slides=[],this.params.virtual.cache&&(this.virtual.cache={}),this.virtual.update(!0),this.slideTo(0,0)}},J={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create:function(){n.extend(this,{virtual:{update:Q.update.bind(this),appendSlide:Q.appendSlide.bind(this),prependSlide:Q.prependSlide.bind(this),removeSlide:Q.removeSlide.bind(this),removeAllSlides:Q.removeAllSlides.bind(this),renderSlide:Q.renderSlide.bind(this),slides:this.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){if(this.params.virtual.enabled){this.classNames.push(this.params.containerModifierClass+"virtual");var e={watchSlidesProgress:!0};n.extend(this.params,e),n.extend(this.originalParams,e),this.params.initialSlide||this.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},ee={handle:function(i){var s=this.rtlTranslate,a=i;a.originalEvent&&(a=a.originalEvent);var r=a.keyCode||a.charCode;if(!this.allowSlideNext&&(this.isHorizontal()&&39===r||this.isVertical()&&40===r||34===r))return!1;if(!this.allowSlidePrev&&(this.isHorizontal()&&37===r||this.isVertical()&&38===r||33===r))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||e.activeElement&&e.activeElement.nodeName&&("input"===e.activeElement.nodeName.toLowerCase()||"textarea"===e.activeElement.nodeName.toLowerCase()))){if(this.params.keyboard.onlyInViewport&&(33===r||34===r||37===r||39===r||38===r||40===r)){var n=!1;if(this.$el.parents("."+this.params.slideClass).length>0&&0===this.$el.parents("."+this.params.slideActiveClass).length)return;var o=t.innerWidth,l=t.innerHeight,d=this.$el.offset();s&&(d.left-=this.$el[0].scrollLeft);for(var h=[[d.left,d.top],[d.left+this.width,d.top],[d.left,d.top+this.height],[d.left+this.width,d.top+this.height]],p=0;p<h.length;p+=1){var c=h[p];c[0]>=0&&c[0]<=o&&c[1]>=0&&c[1]<=l&&(n=!0)}if(!n)return}this.isHorizontal()?(33!==r&&34!==r&&37!==r&&39!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),(34!==r&&39!==r||s)&&(33!==r&&37!==r||!s)||this.slideNext(),(33!==r&&37!==r||s)&&(34!==r&&39!==r||!s)||this.slidePrev()):(33!==r&&34!==r&&38!==r&&40!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),34!==r&&40!==r||this.slideNext(),33!==r&&38!==r||this.slidePrev()),this.emit("keyPress",r)}},enable:function(){this.keyboard.enabled||(s(e).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(s(e).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},te={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){n.extend(this,{keyboard:{enabled:!1,enable:ee.enable.bind(this),disable:ee.disable.bind(this),handle:ee.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var ie={lastScrollTime:n.now(),lastEventBeforeSnap:void 0,recentWheelEvents:[],event:function(){return t.navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var t="onwheel"in e;if(!t){var i=e.createElement("div");i.setAttribute("onwheel","return;"),t="function"==typeof i.onwheel}return!t&&e.implementation&&e.implementation.hasFeature&&!0!==e.implementation.hasFeature("","")&&(t=e.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel"},normalize:function(e){var t=0,i=0,s=0,a=0;return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=i,i=0),s=10*t,a=10*i,"deltaY"in e&&(a=e.deltaY),"deltaX"in e&&(s=e.deltaX),e.shiftKey&&!s&&(s=a,a=0),(s||a)&&e.deltaMode&&(1===e.deltaMode?(s*=40,a*=40):(s*=800,a*=800)),s&&!t&&(t=s<1?-1:1),a&&!i&&(i=a<1?-1:1),{spinX:t,spinY:i,pixelX:s,pixelY:a}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,i=this,a=i.params.mousewheel;i.params.cssMode&&t.preventDefault();var r=i.$el;if("container"!==i.params.mousewheel.eventsTarged&&(r=s(i.params.mousewheel.eventsTarged)),!i.mouseEntered&&!r[0].contains(t.target)&&!a.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var o=0,l=i.rtlTranslate?-1:1,d=ie.normalize(t);if(a.forceToAxis)if(i.isHorizontal()){if(!(Math.abs(d.pixelX)>Math.abs(d.pixelY)))return!0;o=d.pixelX*l}else{if(!(Math.abs(d.pixelY)>Math.abs(d.pixelX)))return!0;o=d.pixelY}else o=Math.abs(d.pixelX)>Math.abs(d.pixelY)?-d.pixelX*l:-d.pixelY;if(0===o)return!0;if(a.invert&&(o=-o),i.params.freeMode){var h={time:n.now(),delta:Math.abs(o),direction:Math.sign(o)},p=i.mousewheel.lastEventBeforeSnap,c=p&&h.time<p.time+500&&h.delta<=p.delta&&h.direction===p.direction;if(!c){i.mousewheel.lastEventBeforeSnap=void 0,i.params.loop&&i.loopFix();var u=i.getTranslate()+o*a.sensitivity,v=i.isBeginning,f=i.isEnd;if(u>=i.minTranslate()&&(u=i.minTranslate()),u<=i.maxTranslate()&&(u=i.maxTranslate()),i.setTransition(0),i.setTranslate(u),i.updateProgress(),i.updateActiveIndex(),i.updateSlidesClasses(),(!v&&i.isBeginning||!f&&i.isEnd)&&i.updateSlidesClasses(),i.params.freeModeSticky){clearTimeout(i.mousewheel.timeout),i.mousewheel.timeout=void 0;var m=i.mousewheel.recentWheelEvents;m.length>=15&&m.shift();var g=m.length?m[m.length-1]:void 0,b=m[0];if(m.push(h),g&&(h.delta>g.delta||h.direction!==g.direction))m.splice(0);else if(m.length>=15&&h.time-b.time<500&&b.delta-h.delta>=1&&h.delta<=6){var w=o>0?.8:.2;i.mousewheel.lastEventBeforeSnap=h,m.splice(0),i.mousewheel.timeout=n.nextTick((function(){i.slideToClosest(i.params.speed,!0,void 0,w)}),0)}i.mousewheel.timeout||(i.mousewheel.timeout=n.nextTick((function(){i.mousewheel.lastEventBeforeSnap=h,m.splice(0),i.slideToClosest(i.params.speed,!0,void 0,.5)}),500))}if(c||i.emit("scroll",t),i.params.autoplay&&i.params.autoplayDisableOnInteraction&&i.autoplay.stop(),u===i.minTranslate()||u===i.maxTranslate())return!0}}else{var y={time:n.now(),delta:Math.abs(o),direction:Math.sign(o),raw:e},x=i.mousewheel.recentWheelEvents;x.length>=2&&x.shift();var T=x.length?x[x.length-1]:void 0;if(x.push(y),T?(y.direction!==T.direction||y.delta>T.delta)&&i.mousewheel.animateSlider(y):i.mousewheel.animateSlider(y),i.mousewheel.releaseScroll(y))return!0}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},animateSlider:function(e){return e.delta>=6&&n.now()-this.mousewheel.lastScrollTime<60||(e.direction<0?this.isEnd&&!this.params.loop||this.animating||(this.slideNext(),this.emit("scroll",e.raw)):this.isBeginning&&!this.params.loop||this.animating||(this.slidePrev(),this.emit("scroll",e.raw)),this.mousewheel.lastScrollTime=(new t.Date).getTime(),!1)},releaseScroll:function(e){var t=this.params.mousewheel;if(e.direction<0){if(this.isEnd&&!this.params.loop&&t.releaseOnEdges)return!0}else if(this.isBeginning&&!this.params.loop&&t.releaseOnEdges)return!0;return!1},enable:function(){var e=ie.event();if(this.params.cssMode)return this.wrapperEl.removeEventListener(e,this.mousewheel.handle),!0;if(!e)return!1;if(this.mousewheel.enabled)return!1;var t=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(t=s(this.params.mousewheel.eventsTarged)),t.on("mouseenter",this.mousewheel.handleMouseEnter),t.on("mouseleave",this.mousewheel.handleMouseLeave),t.on(e,this.mousewheel.handle),this.mousewheel.enabled=!0,!0},disable:function(){var e=ie.event();if(this.params.cssMode)return this.wrapperEl.addEventListener(e,this.mousewheel.handle),!0;if(!e)return!1;if(!this.mousewheel.enabled)return!1;var t=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(t=s(this.params.mousewheel.eventsTarged)),t.off(e,this.mousewheel.handle),this.mousewheel.enabled=!1,!0}},se={update:function(){var e=this.params.navigation;if(!this.params.loop){var t=this.navigation,i=t.$nextEl,s=t.$prevEl;s&&s.length>0&&(this.isBeginning?s.addClass(e.disabledClass):s.removeClass(e.disabledClass),s[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass)),i&&i.length>0&&(this.isEnd?i.addClass(e.disabledClass):i.removeClass(e.disabledClass),i[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass))}},onPrevClick:function(e){e.preventDefault(),this.isBeginning&&!this.params.loop||this.slidePrev()},onNextClick:function(e){e.preventDefault(),this.isEnd&&!this.params.loop||this.slideNext()},init:function(){var e,t,i=this.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=s(i.nextEl),this.params.uniqueNavElements&&"string"==typeof i.nextEl&&e.length>1&&1===this.$el.find(i.nextEl).length&&(e=this.$el.find(i.nextEl))),i.prevEl&&(t=s(i.prevEl),this.params.uniqueNavElements&&"string"==typeof i.prevEl&&t.length>1&&1===this.$el.find(i.prevEl).length&&(t=this.$el.find(i.prevEl))),e&&e.length>0&&e.on("click",this.navigation.onNextClick),t&&t.length>0&&t.on("click",this.navigation.onPrevClick),n.extend(this.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;t&&t.length&&(t.off("click",this.navigation.onNextClick),t.removeClass(this.params.navigation.disabledClass)),i&&i.length&&(i.off("click",this.navigation.onPrevClick),i.removeClass(this.params.navigation.disabledClass))}},ae={update:function(){var e=this.rtl,t=this.params.pagination;if(t.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var i,a=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,r=this.pagination.$el,n=this.params.loop?Math.ceil((a-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length;if(this.params.loop?((i=Math.ceil((this.activeIndex-this.loopedSlides)/this.params.slidesPerGroup))>a-1-2*this.loopedSlides&&(i-=a-2*this.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==this.params.paginationType&&(i=n+i)):i=void 0!==this.snapIndex?this.snapIndex:this.activeIndex||0,"bullets"===t.type&&this.pagination.bullets&&this.pagination.bullets.length>0){var o,l,d,h=this.pagination.bullets;if(t.dynamicBullets&&(this.pagination.bulletSize=h.eq(0)[this.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(this.isHorizontal()?"width":"height",this.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==this.previousIndex&&(this.pagination.dynamicBulletIndex+=i-this.previousIndex,this.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?this.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:this.pagination.dynamicBulletIndex<0&&(this.pagination.dynamicBulletIndex=0)),o=i-this.pagination.dynamicBulletIndex,d=((l=o+(Math.min(h.length,t.dynamicMainBullets)-1))+o)/2),h.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),r.length>1)h.each((function(e,a){var r=s(a),n=r.index();n===i&&r.addClass(t.bulletActiveClass),t.dynamicBullets&&(n>=o&&n<=l&&r.addClass(t.bulletActiveClass+"-main"),n===o&&r.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),n===l&&r.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))}));else{var p=h.eq(i),c=p.index();if(p.addClass(t.bulletActiveClass),t.dynamicBullets){for(var u=h.eq(o),v=h.eq(l),f=o;f<=l;f+=1)h.eq(f).addClass(t.bulletActiveClass+"-main");if(this.params.loop)if(c>=h.length-t.dynamicMainBullets){for(var m=t.dynamicMainBullets;m>=0;m-=1)h.eq(h.length-m).addClass(t.bulletActiveClass+"-main");h.eq(h.length-t.dynamicMainBullets-1).addClass(t.bulletActiveClass+"-prev")}else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),v.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next");else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),v.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}}if(t.dynamicBullets){var g=Math.min(h.length,t.dynamicMainBullets+4),b=(this.pagination.bulletSize*g-this.pagination.bulletSize)/2-d*this.pagination.bulletSize,w=e?"right":"left";h.css(this.isHorizontal()?w:"top",b+"px")}}if("fraction"===t.type&&(r.find("."+t.currentClass).text(t.formatFractionCurrent(i+1)),r.find("."+t.totalClass).text(t.formatFractionTotal(n))),"progressbar"===t.type){var y;y=t.progressbarOpposite?this.isHorizontal()?"vertical":"horizontal":this.isHorizontal()?"horizontal":"vertical";var x=(i+1)/n,T=1,E=1;"horizontal"===y?T=x:E=x,r.find("."+t.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+T+") scaleY("+E+")").transition(this.params.speed)}"custom"===t.type&&t.renderCustom?(r.html(t.renderCustom(this,i+1,n)),this.emit("paginationRender",this,r[0])):this.emit("paginationUpdate",this,r[0]),r[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,i=this.pagination.$el,s="";if("bullets"===e.type){for(var a=this.params.loop?Math.ceil((t-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length,r=0;r<a;r+=1)e.renderBullet?s+=e.renderBullet.call(this,r,e.bulletClass):s+="<"+e.bulletElement+' class="'+e.bulletClass+'"></'+e.bulletElement+">";i.html(s),this.pagination.bullets=i.find("."+e.bulletClass)}"fraction"===e.type&&(s=e.renderFraction?e.renderFraction.call(this,e.currentClass,e.totalClass):'<span class="'+e.currentClass+'"></span> / <span class="'+e.totalClass+'"></span>',i.html(s)),"progressbar"===e.type&&(s=e.renderProgressbar?e.renderProgressbar.call(this,e.progressbarFillClass):'<span class="'+e.progressbarFillClass+'"></span>',i.html(s)),"custom"!==e.type&&this.emit("paginationRender",this.pagination.$el[0])}},init:function(){var e=this,t=e.params.pagination;if(t.el){var i=s(t.el);0!==i.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&i.length>1&&1===e.$el.find(t.el).length&&(i=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&i.addClass(t.clickableClass),i.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(i.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&i.addClass(t.progressbarOppositeClass),t.clickable&&i.on("click","."+t.bulletClass,(function(t){t.preventDefault();var i=s(this).index()*e.params.slidesPerGroup;e.params.loop&&(i+=e.loopedSlides),e.slideTo(i)})),n.extend(e.pagination,{$el:i,el:i[0]}))}},destroy:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.pagination.$el;t.removeClass(e.hiddenClass),t.removeClass(e.modifierClass+e.type),this.pagination.bullets&&this.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&t.off("click","."+e.bulletClass)}}},re={setTranslate:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=this.rtlTranslate,i=this.progress,s=e.dragSize,a=e.trackSize,r=e.$dragEl,n=e.$el,o=this.params.scrollbar,l=s,d=(a-s)*i;t?(d=-d)>0?(l=s-d,d=0):-d+s>a&&(l=a+d):d<0?(l=s+d,d=0):d+s>a&&(l=a-d),this.isHorizontal()?(r.transform("translate3d("+d+"px, 0, 0)"),r[0].style.width=l+"px"):(r.transform("translate3d(0px, "+d+"px, 0)"),r[0].style.height=l+"px"),o.hide&&(clearTimeout(this.scrollbar.timeout),n[0].style.opacity=1,this.scrollbar.timeout=setTimeout((function(){n[0].style.opacity=0,n.transition(400)}),1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=e.$dragEl,i=e.$el;t[0].style.width="",t[0].style.height="";var s,a=this.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,r=this.size/this.virtualSize,o=r*(a/this.size);s="auto"===this.params.scrollbar.dragSize?a*r:parseInt(this.params.scrollbar.dragSize,10),this.isHorizontal()?t[0].style.width=s+"px":t[0].style.height=s+"px",i[0].style.display=r>=1?"none":"",this.params.scrollbar.hide&&(i[0].style.opacity=0),n.extend(e,{trackSize:a,divider:r,moveDivider:o,dragSize:s}),e.$el[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](this.params.scrollbar.lockClass)}},getPointerPosition:function(e){return this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY},setDragPosition:function(e){var t,i=this.scrollbar,s=this.rtlTranslate,a=i.$el,r=i.dragSize,n=i.trackSize,o=i.dragStartPos;t=(i.getPointerPosition(e)-a.offset()[this.isHorizontal()?"left":"top"]-(null!==o?o:r/2))/(n-r),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var l=this.minTranslate()+(this.maxTranslate()-this.minTranslate())*t;this.updateProgress(l),this.setTranslate(l),this.updateActiveIndex(),this.updateSlidesClasses()},onDragStart:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el,r=i.$dragEl;this.scrollbar.isTouched=!0,this.scrollbar.dragStartPos=e.target===r[0]||e.target===r?i.getPointerPosition(e)-e.target.getBoundingClientRect()[this.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.transition(100),r.transition(100),i.setDragPosition(e),clearTimeout(this.scrollbar.dragTimeout),a.transition(0),t.hide&&a.css("opacity",1),this.params.cssMode&&this.$wrapperEl.css("scroll-snap-type","none"),this.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,i=this.$wrapperEl,s=t.$el,a=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),i.transition(0),s.transition(0),a.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el;this.scrollbar.isTouched&&(this.scrollbar.isTouched=!1,this.params.cssMode&&(this.$wrapperEl.css("scroll-snap-type",""),s.transition("")),t.hide&&(clearTimeout(this.scrollbar.dragTimeout),this.scrollbar.dragTimeout=n.nextTick((function(){a.css("opacity",0),a.transition(400)}),1e3)),this.emit("scrollbarDragEnd",e),t.snapOnRelease&&this.slideToClosest())},enableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!o.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},l=!(!o.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};o.touch?(r.addEventListener(i.start,this.scrollbar.onDragStart,n),r.addEventListener(i.move,this.scrollbar.onDragMove,n),r.addEventListener(i.end,this.scrollbar.onDragEnd,l)):(r.addEventListener(s.start,this.scrollbar.onDragStart,n),e.addEventListener(s.move,this.scrollbar.onDragMove,n),e.addEventListener(s.end,this.scrollbar.onDragEnd,l))}},disableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!o.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},l=!(!o.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};o.touch?(r.removeEventListener(i.start,this.scrollbar.onDragStart,n),r.removeEventListener(i.move,this.scrollbar.onDragMove,n),r.removeEventListener(i.end,this.scrollbar.onDragEnd,l)):(r.removeEventListener(s.start,this.scrollbar.onDragStart,n),e.removeEventListener(s.move,this.scrollbar.onDragMove,n),e.removeEventListener(s.end,this.scrollbar.onDragEnd,l))}},init:function(){if(this.params.scrollbar.el){var e=this.scrollbar,t=this.$el,i=this.params.scrollbar,a=s(i.el);this.params.uniqueNavElements&&"string"==typeof i.el&&a.length>1&&1===t.find(i.el).length&&(a=t.find(i.el));var r=a.find("."+this.params.scrollbar.dragClass);0===r.length&&(r=s('<div class="'+this.params.scrollbar.dragClass+'"></div>'),a.append(r)),n.extend(e,{$el:a,el:a[0],$dragEl:r,dragEl:r[0]}),i.draggable&&e.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},ne={setTransform:function(e,t){var i=this.rtl,a=s(e),r=i?-1:1,n=a.attr("data-swiper-parallax")||"0",o=a.attr("data-swiper-parallax-x"),l=a.attr("data-swiper-parallax-y"),d=a.attr("data-swiper-parallax-scale"),h=a.attr("data-swiper-parallax-opacity");if(o||l?(o=o||"0",l=l||"0"):this.isHorizontal()?(o=n,l="0"):(l=n,o="0"),o=o.indexOf("%")>=0?parseInt(o,10)*t*r+"%":o*t*r+"px",l=l.indexOf("%")>=0?parseInt(l,10)*t+"%":l*t+"px",null!=h){var p=h-(h-1)*(1-Math.abs(t));a[0].style.opacity=p}if(null==d)a.transform("translate3d("+o+", "+l+", 0px)");else{var c=d-(d-1)*(1-Math.abs(t));a.transform("translate3d("+o+", "+l+", 0px) scale("+c+")")}},setTranslate:function(){var e=this,t=e.$el,i=e.slides,a=e.progress,r=e.snapGrid;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){e.parallax.setTransform(i,a)})),i.each((function(t,i){var n=i.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(n+=Math.ceil(t/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){e.parallax.setTransform(i,n)}))}))},setTransition:function(e){void 0===e&&(e=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){var a=s(i),r=parseInt(a.attr("data-swiper-parallax-duration"),10)||e;0===e&&(r=0),a.transition(r)}))}},oe={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,i=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,a=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-t,2)+Math.pow(a-i,2))},onGestureStart:function(e){var t=this.params.zoom,i=this.zoom,a=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!o.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,a.scaleStart=oe.getDistanceBetweenTouches(e)}a.$slideEl&&a.$slideEl.length||(a.$slideEl=s(e.target).closest("."+this.params.slideClass),0===a.$slideEl.length&&(a.$slideEl=this.slides.eq(this.activeIndex)),a.$imageEl=a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),a.$imageWrapEl=a.$imageEl.parent("."+t.containerClass),a.maxRatio=a.$imageWrapEl.attr("data-swiper-zoom")||t.maxRatio,0!==a.$imageWrapEl.length)?(a.$imageEl.transition(0),this.zoom.isScaling=!0):a.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!o.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;i.fakeGestureMoved=!0,s.scaleMove=oe.getDistanceBetweenTouches(e)}s.$imageEl&&0!==s.$imageEl.length&&(o.gestures?i.scale=e.scale*i.currentScale:i.scale=s.scaleMove/s.scaleStart*i.currentScale,i.scale>s.maxRatio&&(i.scale=s.maxRatio-1+Math.pow(i.scale-s.maxRatio+1,.5)),i.scale<t.minRatio&&(i.scale=t.minRatio+1-Math.pow(t.minRatio-i.scale+1,.5)),s.$imageEl.transform("translate3d(0,0,0) scale("+i.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!o.gestures){if(!i.fakeGestureTouched||!i.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!I.android)return;i.fakeGestureTouched=!1,i.fakeGestureMoved=!1}s.$imageEl&&0!==s.$imageEl.length&&(i.scale=Math.max(Math.min(i.scale,s.maxRatio),t.minRatio),s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+i.scale+")"),i.currentScale=i.scale,i.isScaling=!1,1===i.scale&&(s.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,i=t.gesture,s=t.image;i.$imageEl&&0!==i.$imageEl.length&&(s.isTouched||(I.android&&e.preventDefault(),s.isTouched=!0,s.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this.zoom,i=t.gesture,s=t.image,a=t.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(this.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=n.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=n.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),this.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var r=s.width*t.scale,o=s.height*t.scale;if(!(r<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-r/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!t.isScaling){if(this.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!this.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),a.prevPositionX||(a.prevPositionX=s.touchesCurrent.x),a.prevPositionY||(a.prevPositionY=s.touchesCurrent.y),a.prevTime||(a.prevTime=Date.now()),a.x=(s.touchesCurrent.x-a.prevPositionX)/(Date.now()-a.prevTime)/2,a.y=(s.touchesCurrent.y-a.prevPositionY)/(Date.now()-a.prevTime)/2,Math.abs(s.touchesCurrent.x-a.prevPositionX)<2&&(a.x=0),Math.abs(s.touchesCurrent.y-a.prevPositionY)<2&&(a.y=0),a.prevPositionX=s.touchesCurrent.x,a.prevPositionY=s.touchesCurrent.y,a.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,i=e.image,s=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!i.isTouched||!i.isMoved)return i.isTouched=!1,void(i.isMoved=!1);i.isTouched=!1,i.isMoved=!1;var a=300,r=300,n=s.x*a,o=i.currentX+n,l=s.y*r,d=i.currentY+l;0!==s.x&&(a=Math.abs((o-i.currentX)/s.x)),0!==s.y&&(r=Math.abs((d-i.currentY)/s.y));var h=Math.max(a,r);i.currentX=o,i.currentY=d;var p=i.width*e.scale,c=i.height*e.scale;i.minX=Math.min(t.slideWidth/2-p/2,0),i.maxX=-i.minX,i.minY=Math.min(t.slideHeight/2-c/2,0),i.maxY=-i.minY,i.currentX=Math.max(Math.min(i.currentX,i.maxX),i.minX),i.currentY=Math.max(Math.min(i.currentY,i.maxY),i.minY),t.$imageWrapEl.transition(h).transform("translate3d("+i.currentX+"px, "+i.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,e.currentScale=1,t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,i,s,a,r,n,o,l,d,h,p,c,u,v,f,m,g=this.zoom,b=this.params.zoom,w=g.gesture,y=g.image;(w.$slideEl||(w.$slideEl=this.slides.eq(this.activeIndex),w.$imageEl=w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),w.$imageWrapEl=w.$imageEl.parent("."+b.containerClass)),w.$imageEl&&0!==w.$imageEl.length)&&(w.$slideEl.addClass(""+b.zoomedSlideClass),void 0===y.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,i="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=y.touchesStart.x,i=y.touchesStart.y),g.scale=w.$imageWrapEl.attr("data-swiper-zoom")||b.maxRatio,g.currentScale=w.$imageWrapEl.attr("data-swiper-zoom")||b.maxRatio,e?(f=w.$slideEl[0].offsetWidth,m=w.$slideEl[0].offsetHeight,s=w.$slideEl.offset().left+f/2-t,a=w.$slideEl.offset().top+m/2-i,o=w.$imageEl[0].offsetWidth,l=w.$imageEl[0].offsetHeight,d=o*g.scale,h=l*g.scale,u=-(p=Math.min(f/2-d/2,0)),v=-(c=Math.min(m/2-h/2,0)),(r=s*g.scale)<p&&(r=p),r>u&&(r=u),(n=a*g.scale)<c&&(n=c),n>v&&(n=v)):(r=0,n=0),w.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),w.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+g.scale+")"))},out:function(){var e=this.zoom,t=this.params.zoom,i=e.gesture;i.$slideEl||(i.$slideEl=this.slides.eq(this.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),i.$imageWrapEl=i.$imageEl.parent("."+t.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(e.scale=1,e.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+t.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this.zoom;if(!e.enabled){e.enabled=!0;var t=!("touchstart"!==this.touchEvents.start||!o.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1},i=!o.passiveListener||{passive:!1,capture:!0},s="."+this.params.slideClass;o.gestures?(this.$wrapperEl.on("gesturestart",s,e.onGestureStart,t),this.$wrapperEl.on("gesturechange",s,e.onGestureChange,t),this.$wrapperEl.on("gestureend",s,e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.on(this.touchEvents.start,s,e.onGestureStart,t),this.$wrapperEl.on(this.touchEvents.move,s,e.onGestureChange,i),this.$wrapperEl.on(this.touchEvents.end,s,e.onGestureEnd,t),this.touchEvents.cancel&&this.$wrapperEl.on(this.touchEvents.cancel,s,e.onGestureEnd,t)),this.$wrapperEl.on(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove,i)}},disable:function(){var e=this.zoom;if(e.enabled){this.zoom.enabled=!1;var t=!("touchstart"!==this.touchEvents.start||!o.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1},i=!o.passiveListener||{passive:!1,capture:!0},s="."+this.params.slideClass;o.gestures?(this.$wrapperEl.off("gesturestart",s,e.onGestureStart,t),this.$wrapperEl.off("gesturechange",s,e.onGestureChange,t),this.$wrapperEl.off("gestureend",s,e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.off(this.touchEvents.start,s,e.onGestureStart,t),this.$wrapperEl.off(this.touchEvents.move,s,e.onGestureChange,i),this.$wrapperEl.off(this.touchEvents.end,s,e.onGestureEnd,t),this.touchEvents.cancel&&this.$wrapperEl.off(this.touchEvents.cancel,s,e.onGestureEnd,t)),this.$wrapperEl.off(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove,i)}}},le={loadInSlide:function(e,t){void 0===t&&(t=!0);var i=this,a=i.params.lazy;if(void 0!==e&&0!==i.slides.length){var r=i.virtual&&i.params.virtual.enabled?i.$wrapperEl.children("."+i.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):i.slides.eq(e),n=r.find("."+a.elementClass+":not(."+a.loadedClass+"):not(."+a.loadingClass+")");!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||(n=n.add(r[0])),0!==n.length&&n.each((function(e,n){var o=s(n);o.addClass(a.loadingClass);var l=o.attr("data-background"),d=o.attr("data-src"),h=o.attr("data-srcset"),p=o.attr("data-sizes");i.loadImage(o[0],d||l,h,p,!1,(function(){if(null!=i&&i&&(!i||i.params)&&!i.destroyed){if(l?(o.css("background-image",'url("'+l+'")'),o.removeAttr("data-background")):(h&&(o.attr("srcset",h),o.removeAttr("data-srcset")),p&&(o.attr("sizes",p),o.removeAttr("data-sizes")),d&&(o.attr("src",d),o.removeAttr("data-src"))),o.addClass(a.loadedClass).removeClass(a.loadingClass),r.find("."+a.preloaderClass).remove(),i.params.loop&&t){var e=r.attr("data-swiper-slide-index");if(r.hasClass(i.params.slideDuplicateClass)){var s=i.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+i.params.slideDuplicateClass+")");i.lazy.loadInSlide(s.index(),!1)}else{var n=i.$wrapperEl.children("."+i.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');i.lazy.loadInSlide(n.index(),!1)}}i.emit("lazyImageReady",r[0],o[0]),i.params.autoHeight&&i.updateAutoHeight()}})),i.emit("lazyImageLoad",r[0],o[0])}))}},load:function(){var e=this,t=e.$wrapperEl,i=e.params,a=e.slides,r=e.activeIndex,n=e.virtual&&i.virtual.enabled,o=i.lazy,l=i.slidesPerView;function d(e){if(n){if(t.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(a[e])return!0;return!1}function h(e){return n?s(e).attr("data-swiper-slide-index"):s(e).index()}if("auto"===l&&(l=0),e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)t.children("."+i.slideVisibleClass).each((function(t,i){var a=n?s(i).attr("data-swiper-slide-index"):s(i).index();e.lazy.loadInSlide(a)}));else if(l>1)for(var p=r;p<r+l;p+=1)d(p)&&e.lazy.loadInSlide(p);else e.lazy.loadInSlide(r);if(o.loadPrevNext)if(l>1||o.loadPrevNextAmount&&o.loadPrevNextAmount>1){for(var c=o.loadPrevNextAmount,u=l,v=Math.min(r+u+Math.max(c,u),a.length),f=Math.max(r-Math.max(u,c),0),m=r+l;m<v;m+=1)d(m)&&e.lazy.loadInSlide(m);for(var g=f;g<r;g+=1)d(g)&&e.lazy.loadInSlide(g)}else{var b=t.children("."+i.slideNextClass);b.length>0&&e.lazy.loadInSlide(h(b));var w=t.children("."+i.slidePrevClass);w.length>0&&e.lazy.loadInSlide(h(w))}}},de={LinearSpline:function(e,t){var i,s,a,r,n,o=function(e,t){for(s=-1,i=e.length;i-s>1;)e[a=i+s>>1]<=t?s=a:i=a;return i};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){this.controller.spline||(this.controller.spline=this.params.loop?new de.LinearSpline(this.slidesGrid,e.slidesGrid):new de.LinearSpline(this.snapGrid,e.snapGrid))},setTranslate:function(e,t){var i,s,a=this,r=a.controller.control;function n(e){var t=a.rtlTranslate?-a.translate:a.translate;"slide"===a.params.controller.by&&(a.controller.getInterpolateFunction(e),s=-a.controller.spline.interpolate(-t)),s&&"container"!==a.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(a.maxTranslate()-a.minTranslate()),s=(t-a.minTranslate())*i+e.minTranslate()),a.params.controller.inverse&&(s=e.maxTranslate()-s),e.updateProgress(s),e.setTranslate(s,a),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof W&&n(r[o]);else r instanceof W&&t!==r&&n(r)},setTransition:function(e,t){var i,s=this,a=s.controller.control;function r(t){t.setTransition(e,s),0!==e&&(t.transitionStart(),t.params.autoHeight&&n.nextTick((function(){t.updateAutoHeight()})),t.$wrapperEl.transitionEnd((function(){a&&(t.params.loop&&"slide"===s.params.controller.by&&t.loopFix(),t.transitionEnd())})))}if(Array.isArray(a))for(i=0;i<a.length;i+=1)a[i]!==t&&a[i]instanceof W&&r(a[i]);else a instanceof W&&t!==a&&r(a)}},he={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this.params.a11y;if(13===e.keyCode){var i=s(e.target);this.navigation&&this.navigation.$nextEl&&i.is(this.navigation.$nextEl)&&(this.isEnd&&!this.params.loop||this.slideNext(),this.isEnd?this.a11y.notify(t.lastSlideMessage):this.a11y.notify(t.nextSlideMessage)),this.navigation&&this.navigation.$prevEl&&i.is(this.navigation.$prevEl)&&(this.isBeginning&&!this.params.loop||this.slidePrev(),this.isBeginning?this.a11y.notify(t.firstSlideMessage):this.a11y.notify(t.prevSlideMessage)),this.pagination&&i.is("."+this.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){if(!this.params.loop&&this.navigation){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;i&&i.length>0&&(this.isBeginning?this.a11y.disableEl(i):this.a11y.enableEl(i)),t&&t.length>0&&(this.isEnd?this.a11y.disableEl(t):this.a11y.enableEl(t))}},updatePagination:function(){var e=this,t=e.params.a11y;e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.bullets.each((function(i,a){var r=s(a);e.a11y.makeElFocusable(r),e.a11y.addElRole(r,"button"),e.a11y.addElLabel(r,t.paginationBulletMessage.replace(/{{index}}/,r.index()+1))}))},init:function(){this.$el.append(this.a11y.liveRegion);var e,t,i=this.params.a11y;this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&(this.a11y.makeElFocusable(e),this.a11y.addElRole(e,"button"),this.a11y.addElLabel(e,i.nextSlideMessage),e.on("keydown",this.a11y.onEnterKey)),t&&(this.a11y.makeElFocusable(t),this.a11y.addElRole(t,"button"),this.a11y.addElLabel(t,i.prevSlideMessage),t.on("keydown",this.a11y.onEnterKey)),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.on("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)},destroy:function(){var e,t;this.a11y.liveRegion&&this.a11y.liveRegion.length>0&&this.a11y.liveRegion.remove(),this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&e.off("keydown",this.a11y.onEnterKey),t&&t.off("keydown",this.a11y.onEnterKey),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.off("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)}},pe={init:function(){if(this.params.history){if(!t.history||!t.history.pushState)return this.params.history.enabled=!1,void(this.params.hashNavigation.enabled=!0);var e=this.history;e.initialized=!0,e.paths=pe.getPathValues(),(e.paths.key||e.paths.value)&&(e.scrollToSlide(0,e.paths.value,this.params.runCallbacksOnInit),this.params.history.replaceState||t.addEventListener("popstate",this.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||t.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=pe.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=t.location.pathname.slice(1).split("/").filter((function(e){return""!==e})),i=e.length;return{key:e[i-2],value:e[i-1]}},setHistory:function(e,i){if(this.history.initialized&&this.params.history.enabled){var s=this.slides.eq(i),a=pe.slugify(s.attr("data-history"));t.location.pathname.includes(e)||(a=e+"/"+a);var r=t.history.state;r&&r.value===a||(this.params.history.replaceState?t.history.replaceState({value:a},null,a):t.history.pushState({value:a},null,a))}},slugify:function(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,i){if(t)for(var s=0,a=this.slides.length;s<a;s+=1){var r=this.slides.eq(s);if(pe.slugify(r.attr("data-history"))===t&&!r.hasClass(this.params.slideDuplicateClass)){var n=r.index();this.slideTo(n,e,i)}}else this.slideTo(0,e,i)}},ce={onHashCange:function(){var t=e.location.hash.replace("#","");if(t!==this.slides.eq(this.activeIndex).attr("data-hash")){var i=this.$wrapperEl.children("."+this.params.slideClass+'[data-hash="'+t+'"]').index();if(void 0===i)return;this.slideTo(i)}},setHash:function(){if(this.hashNavigation.initialized&&this.params.hashNavigation.enabled)if(this.params.hashNavigation.replaceState&&t.history&&t.history.replaceState)t.history.replaceState(null,null,"#"+this.slides.eq(this.activeIndex).attr("data-hash")||"");else{var i=this.slides.eq(this.activeIndex),s=i.attr("data-hash")||i.attr("data-history");e.location.hash=s||""}},init:function(){if(!(!this.params.hashNavigation.enabled||this.params.history&&this.params.history.enabled)){this.hashNavigation.initialized=!0;var i=e.location.hash.replace("#","");if(i)for(var a=0,r=this.slides.length;a<r;a+=1){var n=this.slides.eq(a);if((n.attr("data-hash")||n.attr("data-history"))===i&&!n.hasClass(this.params.slideDuplicateClass)){var o=n.index();this.slideTo(o,0,this.params.runCallbacksOnInit,!0)}}this.params.hashNavigation.watchState&&s(t).on("hashchange",this.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&s(t).off("hashchange",this.hashNavigation.onHashCange)}},ue={run:function(){var e=this,t=e.slides.eq(e.activeIndex),i=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(i=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=n.nextTick((function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")),e.params.cssMode&&e.autoplay.running&&e.autoplay.run()}),i)},start:function(){return void 0===this.autoplay.timeout&&(!this.autoplay.running&&(this.autoplay.running=!0,this.emit("autoplayStart"),this.autoplay.run(),!0))},stop:function(){return!!this.autoplay.running&&(void 0!==this.autoplay.timeout&&(this.autoplay.timeout&&(clearTimeout(this.autoplay.timeout),this.autoplay.timeout=void 0),this.autoplay.running=!1,this.emit("autoplayStop"),!0))},pause:function(e){this.autoplay.running&&(this.autoplay.paused||(this.autoplay.timeout&&clearTimeout(this.autoplay.timeout),this.autoplay.paused=!0,0!==e&&this.params.autoplay.waitForTransition?(this.$wrapperEl[0].addEventListener("transitionend",this.autoplay.onTransitionEnd),this.$wrapperEl[0].addEventListener("webkitTransitionEnd",this.autoplay.onTransitionEnd)):(this.autoplay.paused=!1,this.autoplay.run())))}},ve={setTranslate:function(){for(var e=this.slides,t=0;t<e.length;t+=1){var i=this.slides.eq(t),s=-i[0].swiperSlideOffset;this.params.virtualTranslate||(s-=this.translate);var a=0;this.isHorizontal()||(a=s,s=0);var r=this.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:r}).transform("translate3d("+s+"px, "+a+"px, 0px)")}},setTransition:function(e){var t=this,i=t.slides,s=t.$wrapperEl;if(i.transition(e),t.params.virtualTranslate&&0!==e){var a=!1;i.transitionEnd((function(){if(!a&&t&&!t.destroyed){a=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)s.trigger(e[i])}}))}}},fe={setTranslate:function(){var e,t=this.$el,i=this.$wrapperEl,a=this.slides,r=this.width,n=this.height,o=this.rtlTranslate,l=this.size,d=this.params.cubeEffect,h=this.isHorizontal(),p=this.virtual&&this.params.virtual.enabled,c=0;d.shadow&&(h?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=t.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),t.append(e)));for(var u=0;u<a.length;u+=1){var v=a.eq(u),f=u;p&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),h||(y=w,w=0);var T="rotateX("+(h?0:-m)+"deg) rotateY("+(h?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&b>-1&&(c=90*f+90*b,o&&(c=90*-f-90*b)),v.transform(T),d.slideShadows){var E=h?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=h?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=s('<div class="swiper-slide-shadow-'+(h?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=s('<div class="swiper-slide-shadow-'+(h?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=Math.max(-b,0)),S.length&&(S[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(h)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var C=Math.abs(c)-90*Math.floor(Math.abs(c)/90),M=1.5-(Math.sin(2*C*Math.PI/360)/2+Math.cos(2*C*Math.PI/360)/2),P=d.shadowScale,z=d.shadowScale/M,k=d.shadowOffset;e.transform("scale3d("+P+", 1, "+z+") translate3d(0px, "+(n/2+k)+"px, "+-n/2/z+"px) rotateX(-90deg)")}var $=j.isSafari||j.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+$+"px) rotateX("+(this.isHorizontal()?0:c)+"deg) rotateY("+(this.isHorizontal()?-c:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},me={setTranslate:function(){for(var e=this.slides,t=this.rtlTranslate,i=0;i<e.length;i+=1){var a=e.eq(i),r=a[0].progress;this.params.flipEffect.limitRotation&&(r=Math.max(Math.min(a[0].progress,1),-1));var n=-180*r,o=0,l=-a[0].swiperSlideOffset,d=0;if(this.isHorizontal()?t&&(n=-n):(d=l,l=0,o=-n,n=0),a[0].style.zIndex=-Math.abs(Math.round(r))+e.length,this.params.flipEffect.slideShadows){var h=this.isHorizontal()?a.find(".swiper-slide-shadow-left"):a.find(".swiper-slide-shadow-top"),p=this.isHorizontal()?a.find(".swiper-slide-shadow-right"):a.find(".swiper-slide-shadow-bottom");0===h.length&&(h=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"left":"top")+'"></div>'),a.append(h)),0===p.length&&(p=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"right":"bottom")+'"></div>'),a.append(p)),h.length&&(h[0].style.opacity=Math.max(-r,0)),p.length&&(p[0].style.opacity=Math.max(r,0))}a.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var t=this,i=t.slides,s=t.activeIndex,a=t.$wrapperEl;if(i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;i.eq(s).transitionEnd((function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)a.trigger(e[i])}}))}}},ge={setTranslate:function(){for(var e=this.width,t=this.height,i=this.slides,a=this.$wrapperEl,r=this.slidesSizesGrid,n=this.params.coverflowEffect,l=this.isHorizontal(),d=this.translate,h=l?e/2-d:t/2-d,p=l?n.rotate:-n.rotate,c=n.depth,u=0,v=i.length;u<v;u+=1){var f=i.eq(u),m=r[u],g=(h-f[0].swiperSlideOffset-m/2)/m*n.modifier,b=l?p*g:0,w=l?0:p*g,y=-c*Math.abs(g),x=n.stretch;"string"==typeof x&&-1!==x.indexOf("%")&&(x=parseFloat(n.stretch)/100*m);var T=l?0:x*g,E=l?x*g:0;Math.abs(E)<.001&&(E=0),Math.abs(T)<.001&&(T=0),Math.abs(y)<.001&&(y=0),Math.abs(b)<.001&&(b=0),Math.abs(w)<.001&&(w=0);var S="translate3d("+E+"px,"+T+"px,"+y+"px)  rotateX("+w+"deg) rotateY("+b+"deg)";if(f.transform(S),f[0].style.zIndex=1-Math.abs(Math.round(g)),n.slideShadows){var C=l?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),M=l?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===C.length&&(C=s('<div class="swiper-slide-shadow-'+(l?"left":"top")+'"></div>'),f.append(C)),0===M.length&&(M=s('<div class="swiper-slide-shadow-'+(l?"right":"bottom")+'"></div>'),f.append(M)),C.length&&(C[0].style.opacity=g>0?g:0),M.length&&(M[0].style.opacity=-g>0?-g:0)}}(o.pointerEvents||o.prefixedPointerEvents)&&(a[0].style.perspectiveOrigin=h+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},be={init:function(){var e=this.params.thumbs,t=this.constructor;e.swiper instanceof t?(this.thumbs.swiper=e.swiper,n.extend(this.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),n.extend(this.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):n.isObject(e.swiper)&&(this.thumbs.swiper=new t(n.extend({},e.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),this.thumbs.swiperCreated=!0),this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),this.thumbs.swiper.on("tap",this.thumbs.onThumbClick)},onThumbClick:function(){var e=this.thumbs.swiper;if(e){var t=e.clickedIndex,i=e.clickedSlide;if(!(i&&s(i).hasClass(this.params.thumbs.slideThumbActiveClass)||null==t)){var a;if(a=e.params.loop?parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"),10):t,this.params.loop){var r=this.activeIndex;this.slides.eq(r).hasClass(this.params.slideDuplicateClass)&&(this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft,r=this.activeIndex);var n=this.slides.eq(r).prevAll('[data-swiper-slide-index="'+a+'"]').eq(0).index(),o=this.slides.eq(r).nextAll('[data-swiper-slide-index="'+a+'"]').eq(0).index();a=void 0===n?o:void 0===o?n:o-r<r-n?o:n}this.slideTo(a)}}},update:function(e){var t=this.thumbs.swiper;if(t){var i="auto"===t.params.slidesPerView?t.slidesPerViewDynamic():t.params.slidesPerView;if(this.realIndex!==t.realIndex){var s,a=t.activeIndex;if(t.params.loop){t.slides.eq(a).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,a=t.activeIndex);var r=t.slides.eq(a).prevAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index(),n=t.slides.eq(a).nextAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index();s=void 0===r?n:void 0===n?r:n-a==a-r?a:n-a<a-r?n:r}else s=this.realIndex;t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(s)<0&&(t.params.centeredSlides?s=s>a?s-Math.floor(i/2)+1:s+Math.floor(i/2)-1:s>a&&(s=s-i+1),t.slideTo(s,e?0:void 0))}var o=1,l=this.params.thumbs.slideThumbActiveClass;if(this.params.slidesPerView>1&&!this.params.centeredSlides&&(o=this.params.slidesPerView),this.params.thumbs.multipleActiveThumbs||(o=1),o=Math.floor(o),t.slides.removeClass(l),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(var d=0;d<o;d+=1)t.$wrapperEl.children('[data-swiper-slide-index="'+(this.realIndex+d)+'"]').addClass(l);else for(var h=0;h<o;h+=1)t.slides.eq(this.realIndex+h).addClass(l)}}},we=[R,q,K,U,Z,J,te,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){n.extend(this,{mousewheel:{enabled:!1,enable:ie.enable.bind(this),disable:ie.disable.bind(this),handle:ie.handle.bind(this),handleMouseEnter:ie.handleMouseEnter.bind(this),handleMouseLeave:ie.handleMouseLeave.bind(this),animateSlider:ie.animateSlider.bind(this),releaseScroll:ie.releaseScroll.bind(this),lastScrollTime:n.now(),lastEventBeforeSnap:void 0,recentWheelEvents:[]}})},on:{init:function(){!this.params.mousewheel.enabled&&this.params.cssMode&&this.mousewheel.disable(),this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.params.cssMode&&this.mousewheel.enable(),this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){n.extend(this,{navigation:{init:se.init.bind(this),update:se.update.bind(this),destroy:se.destroy.bind(this),onNextClick:se.onNextClick.bind(this),onPrevClick:se.onPrevClick.bind(this)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t,i=this.navigation,a=i.$nextEl,r=i.$prevEl;!this.params.navigation.hideOnClick||s(e.target).is(r)||s(e.target).is(a)||(a?t=a.hasClass(this.params.navigation.hiddenClass):r&&(t=r.hasClass(this.params.navigation.hiddenClass)),!0===t?this.emit("navigationShow",this):this.emit("navigationHide",this),a&&a.toggleClass(this.params.navigation.hiddenClass),r&&r.toggleClass(this.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){n.extend(this,{pagination:{init:ae.init.bind(this),render:ae.render.bind(this),update:ae.update.bind(this),destroy:ae.destroy.bind(this),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){this.params.pagination.el&&this.params.pagination.hideOnClick&&this.pagination.$el.length>0&&!s(e.target).hasClass(this.params.pagination.bulletClass)&&(!0===this.pagination.$el.hasClass(this.params.pagination.hiddenClass)?this.emit("paginationShow",this):this.emit("paginationHide",this),this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){n.extend(this,{scrollbar:{init:re.init.bind(this),destroy:re.destroy.bind(this),updateSize:re.updateSize.bind(this),setTranslate:re.setTranslate.bind(this),setTransition:re.setTransition.bind(this),enableDraggable:re.enableDraggable.bind(this),disableDraggable:re.disableDraggable.bind(this),setDragPosition:re.setDragPosition.bind(this),getPointerPosition:re.getPointerPosition.bind(this),onDragStart:re.onDragStart.bind(this),onDragMove:re.onDragMove.bind(this),onDragEnd:re.onDragEnd.bind(this),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){n.extend(this,{parallax:{setTransform:ne.setTransform.bind(this),setTranslate:ne.setTranslate.bind(this),setTransition:ne.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},init:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax.enabled&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(i){t[i]=oe[i].bind(e)})),n.extend(e,{zoom:t});var i=1;Object.defineProperty(e.zoom,"scale",{get:function(){return i},set:function(t){if(i!==t){var s=e.zoom.gesture.$imageEl?e.zoom.gesture.$imageEl[0]:void 0,a=e.zoom.gesture.$slideEl?e.zoom.gesture.$slideEl[0]:void 0;e.emit("zoomChange",t,s,a)}i=t}})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()},slideChange:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.params.cssMode&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){n.extend(this,{lazy:{initialImageLoaded:!1,load:le.load.bind(this),loadInSlide:le.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){this.params.lazy.enabled&&(this.params.lazy.loadOnTransitionStart||!this.params.lazy.loadOnTransitionStart&&!this.lazy.initialImageLoaded)&&this.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()},slideChange:function(){this.params.lazy.enabled&&this.params.cssMode&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){n.extend(this,{controller:{control:this.params.controller.control,getInterpolateFunction:de.getInterpolateFunction.bind(this),setTranslate:de.setTranslate.bind(this),setTransition:de.setTransition.bind(this)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var e=this;n.extend(e,{a11y:{liveRegion:s('<span class="'+e.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(he).forEach((function(t){e.a11y[t]=he[t].bind(e)}))},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){n.extend(this,{history:{init:pe.init.bind(this),setHistory:pe.setHistory.bind(this),setHistoryPopState:pe.setHistoryPopState.bind(this),scrollToSlide:pe.scrollToSlide.bind(this),destroy:pe.destroy.bind(this)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)},slideChange:function(){this.history.initialized&&this.params.cssMode&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){n.extend(this,{hashNavigation:{initialized:!1,init:ce.init.bind(this),destroy:ce.destroy.bind(this),setHash:ce.setHash.bind(this),onHashCange:ce.onHashCange.bind(this)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()},slideChange:function(){this.hashNavigation.initialized&&this.params.cssMode&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var e=this;n.extend(e,{autoplay:{running:!1,paused:!1,run:ue.run.bind(e),start:ue.start.bind(e),stop:ue.stop.bind(e),pause:ue.pause.bind(e),onVisibilityChange:function(){"hidden"===document.visibilityState&&e.autoplay.running&&e.autoplay.pause(),"visible"===document.visibilityState&&e.autoplay.paused&&(e.autoplay.run(),e.autoplay.paused=!1)},onTransitionEnd:function(t){e&&!e.destroyed&&e.$wrapperEl&&t.target===this&&(e.$wrapperEl[0].removeEventListener("transitionend",e.autoplay.onTransitionEnd),e.$wrapperEl[0].removeEventListener("webkitTransitionEnd",e.autoplay.onTransitionEnd),e.autoplay.paused=!1,e.autoplay.running?e.autoplay.run():e.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&(this.autoplay.start(),document.addEventListener("visibilitychange",this.autoplay.onVisibilityChange))},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},touchEnd:function(){this.params.cssMode&&this.autoplay.paused&&!this.params.autoplay.disableOnInteraction&&this.autoplay.run()},destroy:function(){this.autoplay.running&&this.autoplay.stop(),document.removeEventListener("visibilitychange",this.autoplay.onVisibilityChange)}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){n.extend(this,{fadeEffect:{setTranslate:ve.setTranslate.bind(this),setTransition:ve.setTransition.bind(this)}})},on:{beforeInit:function(){if("fade"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"fade");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};n.extend(this.params,e),n.extend(this.originalParams,e)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){n.extend(this,{cubeEffect:{setTranslate:fe.setTranslate.bind(this),setTransition:fe.setTransition.bind(this)}})},on:{beforeInit:function(){if("cube"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"cube"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};n.extend(this.params,e),n.extend(this.originalParams,e)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){n.extend(this,{flipEffect:{setTranslate:me.setTranslate.bind(this),setTransition:me.setTransition.bind(this)}})},on:{beforeInit:function(){if("flip"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"flip"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};n.extend(this.params,e),n.extend(this.originalParams,e)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){n.extend(this,{coverflowEffect:{setTranslate:ge.setTranslate.bind(this),setTransition:ge.setTransition.bind(this)}})},on:{beforeInit:function(){"coverflow"===this.params.effect&&(this.classNames.push(this.params.containerModifierClass+"coverflow"),this.classNames.push(this.params.containerModifierClass+"3d"),this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}},{name:"thumbs",params:{thumbs:{multipleActiveThumbs:!0,swiper:null,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){n.extend(this,{thumbs:{swiper:null,init:be.init.bind(this),update:be.update.bind(this),onThumbClick:be.onThumbClick.bind(this)}})},on:{beforeInit:function(){var e=this.params.thumbs;e&&e.swiper&&(this.thumbs.init(),this.thumbs.update(!0))},slideChange:function(){this.thumbs.swiper&&this.thumbs.update()},update:function(){this.thumbs.swiper&&this.thumbs.update()},resize:function(){this.thumbs.swiper&&this.thumbs.update()},observerUpdate:function(){this.thumbs.swiper&&this.thumbs.update()},setTransition:function(e){var t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(){var e=this.thumbs.swiper;e&&this.thumbs.swiperCreated&&e&&e.destroy()}}}];return void 0===W.use&&(W.use=W.Class.use,W.installModule=W.Class.installModule),W.use(we),W}));
//# sourceMappingURL=swiper.min.js.map
;"use strict";var THREE={REVISION:"71"};"object"==typeof module&&(module.exports=THREE),void 0===Math.sign&&(Math.sign=function(e){return 0>e?-1:e>0?1:+e}),THREE.log=function(){console.log.apply(console,arguments)},THREE.warn=function(){console.warn.apply(console,arguments)},THREE.error=function(){console.error.apply(console,arguments)},THREE.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2},THREE.CullFaceNone=0,THREE.CullFaceBack=1,THREE.CullFaceFront=2,THREE.CullFaceFrontBack=3,THREE.FrontFaceDirectionCW=0,THREE.FrontFaceDirectionCCW=1,THREE.BasicShadowMap=0,THREE.PCFShadowMap=1,THREE.PCFSoftShadowMap=2,THREE.FrontSide=0,THREE.BackSide=1,THREE.DoubleSide=2,THREE.NoShading=0,THREE.FlatShading=1,THREE.SmoothShading=2,THREE.NoColors=0,THREE.FaceColors=1,THREE.VertexColors=2,THREE.NoBlending=0,THREE.NormalBlending=1,THREE.AdditiveBlending=2,THREE.SubtractiveBlending=3,THREE.MultiplyBlending=4,THREE.CustomBlending=5,THREE.AddEquation=100,THREE.SubtractEquation=101,THREE.ReverseSubtractEquation=102,THREE.MinEquation=103,THREE.MaxEquation=104,THREE.ZeroFactor=200,THREE.OneFactor=201,THREE.SrcColorFactor=202,THREE.OneMinusSrcColorFactor=203,THREE.SrcAlphaFactor=204,THREE.OneMinusSrcAlphaFactor=205,THREE.DstAlphaFactor=206,THREE.OneMinusDstAlphaFactor=207,THREE.DstColorFactor=208,THREE.OneMinusDstColorFactor=209,THREE.SrcAlphaSaturateFactor=210,THREE.MultiplyOperation=0,THREE.MixOperation=1,THREE.AddOperation=2,THREE.UVMapping=300,THREE.CubeReflectionMapping=301,THREE.CubeRefractionMapping=302,THREE.EquirectangularReflectionMapping=303,THREE.EquirectangularRefractionMapping=304,THREE.SphericalReflectionMapping=305,THREE.RepeatWrapping=1e3,THREE.ClampToEdgeWrapping=1001,THREE.MirroredRepeatWrapping=1002,THREE.NearestFilter=1003,THREE.NearestMipMapNearestFilter=1004,THREE.NearestMipMapLinearFilter=1005,THREE.LinearFilter=1006,THREE.LinearMipMapNearestFilter=1007,THREE.LinearMipMapLinearFilter=1008,THREE.UnsignedByteType=1009,THREE.ByteType=1010,THREE.ShortType=1011,THREE.UnsignedShortType=1012,THREE.IntType=1013,THREE.UnsignedIntType=1014,THREE.FloatType=1015,THREE.HalfFloatType=1025,THREE.UnsignedShort4444Type=1016,THREE.UnsignedShort5551Type=1017,THREE.UnsignedShort565Type=1018,THREE.AlphaFormat=1019,THREE.RGBFormat=1020,THREE.RGBAFormat=1021,THREE.LuminanceFormat=1022,THREE.LuminanceAlphaFormat=1023,THREE.RGBEFormat=THREE.RGBAFormat,THREE.RGB_S3TC_DXT1_Format=2001,THREE.RGBA_S3TC_DXT1_Format=2002,THREE.RGBA_S3TC_DXT3_Format=2003,THREE.RGBA_S3TC_DXT5_Format=2004,THREE.RGB_PVRTC_4BPPV1_Format=2100,THREE.RGB_PVRTC_2BPPV1_Format=2101,THREE.RGBA_PVRTC_4BPPV1_Format=2102,THREE.RGBA_PVRTC_2BPPV1_Format=2103,THREE.Projector=function(){THREE.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."),this.projectVector=function(e,t){THREE.warn("THREE.Projector: .projectVector() is now vector.project()."),e.project(t)},this.unprojectVector=function(e,t){THREE.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),e.unproject(t)},this.pickingRay=function(e,t){THREE.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")}},THREE.CanvasRenderer=function(){THREE.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"),this.domElement=document.createElement("canvas"),this.clear=function(){},this.render=function(){},this.setClearColor=function(){},this.setSize=function(){}},THREE.Color=function(e){return 3===arguments.length?this.setRGB(arguments[0],arguments[1],arguments[2]):this.set(e)},THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,set:function(e){return e instanceof THREE.Color?this.copy(e):"number"==typeof e?this.setHex(e):"string"==typeof e&&this.setStyle(e),this},setHex:function(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,this},setRGB:function(e,t,r){return this.r=e,this.g=t,this.b=r,this},setHSL:function(e,t,r){if(0===t)this.r=this.g=this.b=r;else{var i=function(e,t,r){return 0>r&&(r+=1),r>1&&(r-=1),1/6>r?e+6*(t-e)*r:.5>r?t:2/3>r?e+6*(t-e)*(2/3-r):e};t=.5>=r?r*(1+t):r+t-r*t,r=2*r-t,this.r=i(r,t,e+1/3),this.g=i(r,t,e),this.b=i(r,t,e-1/3)}return this},setStyle:function(e){return/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(e)?(e=/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(e),this.r=Math.min(255,parseInt(e[1],10))/255,this.g=Math.min(255,parseInt(e[2],10))/255,this.b=Math.min(255,parseInt(e[3],10))/255,this):/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(e)?(e=/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(e),this.r=Math.min(100,parseInt(e[1],10))/100,this.g=Math.min(100,parseInt(e[2],10))/100,this.b=Math.min(100,parseInt(e[3],10))/100,this):/^\#([0-9a-f]{6})$/i.test(e)?(e=/^\#([0-9a-f]{6})$/i.exec(e),this.setHex(parseInt(e[1],16)),this):/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(e)?(e=/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(e),this.setHex(parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3],16)),this):/^(\w+)$/i.test(e)?(this.setHex(THREE.ColorKeywords[e]),this):void 0},copy:function(e){return this.r=e.r,this.g=e.g,this.b=e.b,this},copyGammaToLinear:function(e,t){return void 0===t&&(t=2),this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this},copyLinearToGamma:function(e,t){void 0===t&&(t=2);var r=t>0?1/t:1;return this.r=Math.pow(e.r,r),this.g=Math.pow(e.g,r),this.b=Math.pow(e.b,r),this},convertGammaToLinear:function(){var e=this.r,t=this.g,r=this.b;return this.r=e*e,this.g=t*t,this.b=r*r,this},convertLinearToGamma:function(){return this.r=Math.sqrt(this.r),this.g=Math.sqrt(this.g),this.b=Math.sqrt(this.b),this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(e){e=e||{h:0,s:0,l:0};var t,r=this.r,i=this.g,n=this.b,o=Math.max(r,i,n),a=Math.min(r,i,n),s=(a+o)/2;if(a===o)a=t=0;else{var h=o-a,a=.5>=s?h/(o+a):h/(2-o-a);switch(o){case r:t=(i-n)/h+(n>i?6:0);break;case i:t=(n-r)/h+2;break;case n:t=(r-i)/h+4}t/=6}return e.h=t,e.s=a,e.l=s,e},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(e,t,r){var i=this.getHSL();return i.h+=e,i.s+=t,i.l+=r,this.setHSL(i.h,i.s,i.l),this},add:function(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this},addColors:function(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this},addScalar:function(e){return this.r+=e,this.g+=e,this.b+=e,this},multiply:function(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this},multiplyScalar:function(e){return this.r*=e,this.g*=e,this.b*=e,this},lerp:function(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this},equals:function(e){return e.r===this.r&&e.g===this.g&&e.b===this.b},fromArray:function(e){return this.r=e[0],this.g=e[1],this.b=e[2],this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e},clone:function(){return(new THREE.Color).setRGB(this.r,this.g,this.b)}},THREE.ColorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},THREE.Quaternion=function(e,t,r,i){this._x=e||0,this._y=t||0,this._z=r||0,this._w=void 0!==i?i:1},THREE.Quaternion.prototype={constructor:THREE.Quaternion,_x:0,_y:0,_z:0,_w:0,get x(){return this._x},set x(e){this._x=e,this.onChangeCallback()},get y(){return this._y},set y(e){this._y=e,this.onChangeCallback()},get z(){return this._z},set z(e){this._z=e,this.onChangeCallback()},get w(){return this._w},set w(e){this._w=e,this.onChangeCallback()},set:function(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this.onChangeCallback(),this},copy:function(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this.onChangeCallback(),this},setFromEuler:function(e,t){if(!1==e instanceof THREE.Euler)throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var r=Math.cos(e._x/2),i=Math.cos(e._y/2),n=Math.cos(e._z/2),o=Math.sin(e._x/2),a=Math.sin(e._y/2),s=Math.sin(e._z/2);return"XYZ"===e.order?(this._x=o*i*n+r*a*s,this._y=r*a*n-o*i*s,this._z=r*i*s+o*a*n,this._w=r*i*n-o*a*s):"YXZ"===e.order?(this._x=o*i*n+r*a*s,this._y=r*a*n-o*i*s,this._z=r*i*s-o*a*n,this._w=r*i*n+o*a*s):"ZXY"===e.order?(this._x=o*i*n-r*a*s,this._y=r*a*n+o*i*s,this._z=r*i*s+o*a*n,this._w=r*i*n-o*a*s):"ZYX"===e.order?(this._x=o*i*n-r*a*s,this._y=r*a*n+o*i*s,this._z=r*i*s-o*a*n,this._w=r*i*n+o*a*s):"YZX"===e.order?(this._x=o*i*n+r*a*s,this._y=r*a*n+o*i*s,this._z=r*i*s-o*a*n,this._w=r*i*n-o*a*s):"XZY"===e.order&&(this._x=o*i*n-r*a*s,this._y=r*a*n-o*i*s,this._z=r*i*s+o*a*n,this._w=r*i*n+o*a*s),!1!==t&&this.onChangeCallback(),this},setFromAxisAngle:function(e,t){var r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this.onChangeCallback(),this},setFromRotationMatrix:function(e){var t=e.elements,r=t[0];e=t[4];var i=t[8],n=t[1],o=t[5],a=t[9],s=t[2],h=t[6],t=t[10],l=r+o+t;return l>0?(r=.5/Math.sqrt(l+1),this._w=.25/r,this._x=(h-a)*r,this._y=(i-s)*r,this._z=(n-e)*r):r>o&&r>t?(r=2*Math.sqrt(1+r-o-t),this._w=(h-a)/r,this._x=.25*r,this._y=(e+n)/r,this._z=(i+s)/r):o>t?(r=2*Math.sqrt(1+o-r-t),this._w=(i-s)/r,this._x=(e+n)/r,this._y=.25*r,this._z=(a+h)/r):(r=2*Math.sqrt(1+t-r-o),this._w=(n-e)/r,this._x=(i+s)/r,this._y=(a+h)/r,this._z=.25*r),this.onChangeCallback(),this},setFromUnitVectors:function(){var e,t;return function(r,i){return void 0===e&&(e=new THREE.Vector3),t=r.dot(i)+1,1e-6>t?(t=0,Math.abs(r.x)>Math.abs(r.z)?e.set(-r.y,r.x,0):e.set(0,-r.z,r.y)):e.crossVectors(r,i),this._x=e.x,this._y=e.y,this._z=e.z,this._w=t,this.normalize(),this}}(),inverse:function(){return this.conjugate().normalize(),this},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this.onChangeCallback(),this},dot:function(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var e=this.length();return 0===e?(this._z=this._y=this._x=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this.onChangeCallback(),this},multiply:function(e,t){return void 0!==t?(THREE.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)},multiplyQuaternions:function(e,t){var r=e._x,i=e._y,n=e._z,o=e._w,a=t._x,s=t._y,h=t._z,l=t._w;return this._x=r*l+o*a+i*h-n*s,this._y=i*l+o*s+n*a-r*h,this._z=n*l+o*h+r*s-i*a,this._w=o*l-r*a-i*s-n*h,this.onChangeCallback(),this},multiplyVector3:function(e){return THREE.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),e.applyQuaternion(this)},slerp:function(e,t){if(0===t)return this;if(1===t)return this.copy(e);var r=this._x,i=this._y,n=this._z,o=this._w,a=o*e._w+r*e._x+i*e._y+n*e._z;if(0>a?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=r,this._y=i,this._z=n,this;var s=Math.acos(a),h=Math.sqrt(1-a*a);return.001>Math.abs(h)?(this._w=.5*(o+this._w),this._x=.5*(r+this._x),this._y=.5*(i+this._y),this._z=.5*(n+this._z),this):(a=Math.sin((1-t)*s)/h,s=Math.sin(t*s)/h,this._w=o*a+this._w*s,this._x=r*a+this._x*s,this._y=i*a+this._y*s,this._z=n*a+this._z*s,this.onChangeCallback(),this)},equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w},fromArray:function(e,t){return void 0===t&&(t=0),this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this.onChangeCallback(),this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e},onChange:function(e){return this.onChangeCallback=e,this},onChangeCallback:function(){},clone:function(){return new THREE.Quaternion(this._x,this._y,this._z,this._w)}},THREE.Quaternion.slerp=function(e,t,r,i){return r.copy(e).slerp(t,i)},THREE.Vector2=function(e,t){this.x=e||0,this.y=t||0},THREE.Vector2.prototype={constructor:THREE.Vector2,set:function(e,t){return this.x=e,this.y=t,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("index is out of range: "+e)}},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+e)}},copy:function(e){return this.x=e.x,this.y=e.y,this},add:function(e,t){return void 0!==t?(THREE.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)},addScalar:function(e){return this.x+=e,this.y+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this},sub:function(e,t){return void 0!==t?(THREE.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)},subScalar:function(e){return this.x-=e,this.y-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this},multiply:function(e){return this.x*=e.x,this.y*=e.y,this},multiplyScalar:function(e){return this.x*=e,this.y*=e,this},divide:function(e){return this.x/=e.x,this.y/=e.y,this},divideScalar:function(e){return 0!==e?(e=1/e,this.x*=e,this.y*=e):this.y=this.x=0,this},min:function(e){return this.x>e.x&&(this.x=e.x),this.y>e.y&&(this.y=e.y),this},max:function(e){return this.x<e.x&&(this.x=e.x),this.y<e.y&&(this.y=e.y),this},clamp:function(e,t){return this.x<e.x?this.x=e.x:this.x>t.x&&(this.x=t.x),this.y<e.y?this.y=e.y:this.y>t.y&&(this.y=t.y),this},clampScalar:function(){var e,t;return function(r,i){return void 0===e&&(e=new THREE.Vector2,t=new THREE.Vector2),e.set(r,r),t.set(i,i),this.clamp(e,t)}}(),floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x),this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(e){return this.x*e.x+this.y*e.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(e){return Math.sqrt(this.distanceToSquared(e))},distanceToSquared:function(e){var t=this.x-e.x;return e=this.y-e.y,t*t+e*e},setLength:function(e){var t=this.length();return 0!==t&&e!==t&&this.multiplyScalar(e/t),this},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this},lerpVectors:function(e,t,r){return this.subVectors(t,e).multiplyScalar(r).add(e),this},equals:function(e){return e.x===this.x&&e.y===this.y},fromArray:function(e,t){return void 0===t&&(t=0),this.x=e[t],this.y=e[t+1],this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e},fromAttribute:function(e,t,r){return void 0===r&&(r=0),t=t*e.itemSize+r,this.x=e.array[t],this.y=e.array[t+1],this},clone:function(){return new THREE.Vector2(this.x,this.y)}},THREE.Vector3=function(e,t,r){this.x=e||0,this.y=t||0,this.z=r||0},THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(e,t,r){return this.x=e,this.y=t,this.z=r,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("index is out of range: "+e)}},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+e)}},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this},add:function(e,t){return void 0!==t?(THREE.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this},sub:function(e,t){return void 0!==t?(THREE.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this},multiply:function(e,t){return void 0!==t?(THREE.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this},multiplyVectors:function(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this},applyEuler:function(){var e;return function(t){return!1==t instanceof THREE.Euler&&THREE.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order."),void 0===e&&(e=new THREE.Quaternion),this.applyQuaternion(e.setFromEuler(t)),this}}(),applyAxisAngle:function(){var e;return function(t,r){return void 0===e&&(e=new THREE.Quaternion),this.applyQuaternion(e.setFromAxisAngle(t,r)),this}}(),applyMatrix3:function(e){var t=this.x,r=this.y,i=this.z;return e=e.elements,this.x=e[0]*t+e[3]*r+e[6]*i,this.y=e[1]*t+e[4]*r+e[7]*i,this.z=e[2]*t+e[5]*r+e[8]*i,this},applyMatrix4:function(e){var t=this.x,r=this.y,i=this.z;return e=e.elements,this.x=e[0]*t+e[4]*r+e[8]*i+e[12],this.y=e[1]*t+e[5]*r+e[9]*i+e[13],this.z=e[2]*t+e[6]*r+e[10]*i+e[14],this},applyProjection:function(e){var t=this.x,r=this.y,i=this.z;e=e.elements;var n=1/(e[3]*t+e[7]*r+e[11]*i+e[15]);return this.x=(e[0]*t+e[4]*r+e[8]*i+e[12])*n,this.y=(e[1]*t+e[5]*r+e[9]*i+e[13])*n,this.z=(e[2]*t+e[6]*r+e[10]*i+e[14])*n,this},applyQuaternion:function(e){var t=this.x,r=this.y,i=this.z,n=e.x,o=e.y,a=e.z;e=e.w;var s=e*t+o*i-a*r,h=e*r+a*t-n*i,l=e*i+n*r-o*t,t=-n*t-o*r-a*i;return this.x=s*e+t*-n+h*-a-l*-o,this.y=h*e+t*-o+l*-n-s*-a,this.z=l*e+t*-a+s*-o-h*-n,this},project:function(){var e;return function(t){return void 0===e&&(e=new THREE.Matrix4),e.multiplyMatrices(t.projectionMatrix,e.getInverse(t.matrixWorld)),this.applyProjection(e)}}(),unproject:function(){var e;return function(t){return void 0===e&&(e=new THREE.Matrix4),e.multiplyMatrices(t.matrixWorld,e.getInverse(t.projectionMatrix)),this.applyProjection(e)}}(),transformDirection:function(e){var t=this.x,r=this.y,i=this.z;return e=e.elements,this.x=e[0]*t+e[4]*r+e[8]*i,this.y=e[1]*t+e[5]*r+e[9]*i,this.z=e[2]*t+e[6]*r+e[10]*i,this.normalize(),this},divide:function(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this},divideScalar:function(e){return 0!==e?(e=1/e,this.x*=e,this.y*=e,this.z*=e):this.z=this.y=this.x=0,this},min:function(e){return this.x>e.x&&(this.x=e.x),this.y>e.y&&(this.y=e.y),this.z>e.z&&(this.z=e.z),this},max:function(e){return this.x<e.x&&(this.x=e.x),this.y<e.y&&(this.y=e.y),this.z<e.z&&(this.z=e.z),this},clamp:function(e,t){return this.x<e.x?this.x=e.x:this.x>t.x&&(this.x=t.x),this.y<e.y?this.y=e.y:this.y>t.y&&(this.y=t.y),this.z<e.z?this.z=e.z:this.z>t.z&&(this.z=t.z),this},clampScalar:function(){var e,t;return function(r,i){return void 0===e&&(e=new THREE.Vector3,t=new THREE.Vector3),e.set(r,r,r),t.set(i,i,i),this.clamp(e,t)}}(),floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x),this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y),this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(e){var t=this.length();return 0!==t&&e!==t&&this.multiplyScalar(e/t),this},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this},lerpVectors:function(e,t,r){return this.subVectors(t,e).multiplyScalar(r).add(e),this},cross:function(e,t){if(void 0!==t)return THREE.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t);var r=this.x,i=this.y,n=this.z;return this.x=i*e.z-n*e.y,this.y=n*e.x-r*e.z,this.z=r*e.y-i*e.x,this},crossVectors:function(e,t){var r=e.x,i=e.y,n=e.z,o=t.x,a=t.y,s=t.z;return this.x=i*s-n*a,this.y=n*o-r*s,this.z=r*a-i*o,this},projectOnVector:function(){var e,t;return function(r){return void 0===e&&(e=new THREE.Vector3),e.copy(r).normalize(),t=this.dot(e),this.copy(e).multiplyScalar(t)}}(),projectOnPlane:function(){var e;return function(t){return void 0===e&&(e=new THREE.Vector3),e.copy(this).projectOnVector(t),this.sub(e)}}(),reflect:function(){var e;return function(t){return void 0===e&&(e=new THREE.Vector3),this.sub(e.copy(t).multiplyScalar(2*this.dot(t)))}}(),angleTo:function(e){return e=this.dot(e)/(this.length()*e.length()),Math.acos(THREE.Math.clamp(e,-1,1))},distanceTo:function(e){return Math.sqrt(this.distanceToSquared(e))},distanceToSquared:function(e){var t=this.x-e.x,r=this.y-e.y;return e=this.z-e.z,t*t+r*r+e*e},setEulerFromRotationMatrix:function(e,t){THREE.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(e,t){THREE.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(e){return THREE.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(e)},getScaleFromMatrix:function(e){return THREE.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(e)},getColumnFromMatrix:function(e,t){return THREE.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,t)},setFromMatrixPosition:function(e){return this.x=e.elements[12],this.y=e.elements[13],this.z=e.elements[14],this},setFromMatrixScale:function(e){var t=this.set(e.elements[0],e.elements[1],e.elements[2]).length(),r=this.set(e.elements[4],e.elements[5],e.elements[6]).length();return e=this.set(e.elements[8],e.elements[9],e.elements[10]).length(),this.x=t,this.y=r,this.z=e,this},setFromMatrixColumn:function(e,t){var r=4*e,i=t.elements;return this.x=i[r],this.y=i[r+1],this.z=i[r+2],this},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z},fromArray:function(e,t){return void 0===t&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e},fromAttribute:function(e,t,r){return void 0===r&&(r=0),t=t*e.itemSize+r,this.x=e.array[t],this.y=e.array[t+1],this.z=e.array[t+2],this},clone:function(){return new THREE.Vector3(this.x,this.y,this.z)}},THREE.Vector4=function(e,t,r,i){this.x=e||0,this.y=t||0,this.z=r||0,this.w=void 0!==i?i:1},THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setW:function(e){return this.w=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("index is out of range: "+e)}},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+e)}},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=void 0!==e.w?e.w:1,this},add:function(e,t){return void 0!==t?(THREE.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this},sub:function(e,t){return void 0!==t?(THREE.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},applyMatrix4:function(e){var t=this.x,r=this.y,i=this.z,n=this.w;return e=e.elements,this.x=e[0]*t+e[4]*r+e[8]*i+e[12]*n,this.y=e[1]*t+e[5]*r+e[9]*i+e[13]*n,this.z=e[2]*t+e[6]*r+e[10]*i+e[14]*n,this.w=e[3]*t+e[7]*r+e[11]*i+e[15]*n,this},divideScalar:function(e){return 0!==e?(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e):(this.z=this.y=this.x=0,this.w=1),this},setAxisAngleFromQuaternion:function(e){this.w=2*Math.acos(e.w);var t=Math.sqrt(1-e.w*e.w);return 1e-4>t?(this.x=1,this.z=this.y=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this},setAxisAngleFromRotationMatrix:function(e){var t,r,i;e=e.elements;var n=e[0];i=e[4];var o=e[8],a=e[1],s=e[5],h=e[9];r=e[2],t=e[6];var l=e[10];return.01>Math.abs(i-a)&&.01>Math.abs(o-r)&&.01>Math.abs(h-t)?.1>Math.abs(i+a)&&.1>Math.abs(o+r)&&.1>Math.abs(h+t)&&.1>Math.abs(n+s+l-3)?(this.set(1,0,0,0),this):(e=Math.PI,n=(n+1)/2,s=(s+1)/2,l=(l+1)/2,i=(i+a)/4,o=(o+r)/4,h=(h+t)/4,n>s&&n>l?.01>n?(t=0,i=r=.707106781):(t=Math.sqrt(n),r=i/t,i=o/t):s>l?.01>s?(t=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),t=i/r,i=h/r):.01>l?(r=t=.707106781,i=0):(i=Math.sqrt(l),t=o/i,r=h/i),this.set(t,r,i,e),this):(e=Math.sqrt((t-h)*(t-h)+(o-r)*(o-r)+(a-i)*(a-i)),.001>Math.abs(e)&&(e=1),this.x=(t-h)/e,this.y=(o-r)/e,this.z=(a-i)/e,this.w=Math.acos((n+s+l-1)/2),this)},min:function(e){return this.x>e.x&&(this.x=e.x),this.y>e.y&&(this.y=e.y),this.z>e.z&&(this.z=e.z),this.w>e.w&&(this.w=e.w),this},max:function(e){return this.x<e.x&&(this.x=e.x),this.y<e.y&&(this.y=e.y),this.z<e.z&&(this.z=e.z),this.w<e.w&&(this.w=e.w),this},clamp:function(e,t){return this.x<e.x?this.x=e.x:this.x>t.x&&(this.x=t.x),this.y<e.y?this.y=e.y:this.y>t.y&&(this.y=t.y),this.z<e.z?this.z=e.z:this.z>t.z&&(this.z=t.z),this.w<e.w?this.w=e.w:this.w>t.w&&(this.w=t.w),this},clampScalar:function(){var e,t;return function(r,i){return void 0===e&&(e=new THREE.Vector4,t=new THREE.Vector4),e.set(r,r,r,r),t.set(i,i,i,i),this.clamp(e,t)}}(),floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},roundToZero:function(){return this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x),this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y),this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z),this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},setLength:function(e){var t=this.length();return 0!==t&&e!==t&&this.multiplyScalar(e/t),this},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this},lerpVectors:function(e,t,r){return this.subVectors(t,e).multiplyScalar(r).add(e),this},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w},fromArray:function(e,t){return void 0===t&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e},fromAttribute:function(e,t,r){return void 0===r&&(r=0),t=t*e.itemSize+r,this.x=e.array[t],this.y=e.array[t+1],this.z=e.array[t+2],this.w=e.array[t+3],this},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,this.w)}},THREE.Euler=function(e,t,r,i){this._x=e||0,this._y=t||0,this._z=r||0,this._order=i||THREE.Euler.DefaultOrder},
THREE.Euler.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" "),THREE.Euler.DefaultOrder="XYZ",THREE.Euler.prototype={constructor:THREE.Euler,_x:0,_y:0,_z:0,_order:THREE.Euler.DefaultOrder,get x(){return this._x},set x(e){this._x=e,this.onChangeCallback()},get y(){return this._y},set y(e){this._y=e,this.onChangeCallback()},get z(){return this._z},set z(e){this._z=e,this.onChangeCallback()},get order(){return this._order},set order(e){this._order=e,this.onChangeCallback()},set:function(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._order=i||this._order,this.onChangeCallback(),this},copy:function(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this.onChangeCallback(),this},setFromRotationMatrix:function(e,t,r){var i=THREE.Math.clamp,n=e.elements;e=n[0];var o=n[4],a=n[8],s=n[1],h=n[5],l=n[9],c=n[2],u=n[6],n=n[10];return t=t||this._order,"XYZ"===t?(this._y=Math.asin(i(a,-1,1)),.99999>Math.abs(a)?(this._x=Math.atan2(-l,n),this._z=Math.atan2(-o,e)):(this._x=Math.atan2(u,h),this._z=0)):"YXZ"===t?(this._x=Math.asin(-i(l,-1,1)),.99999>Math.abs(l)?(this._y=Math.atan2(a,n),this._z=Math.atan2(s,h)):(this._y=Math.atan2(-c,e),this._z=0)):"ZXY"===t?(this._x=Math.asin(i(u,-1,1)),.99999>Math.abs(u)?(this._y=Math.atan2(-c,n),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(s,e))):"ZYX"===t?(this._y=Math.asin(-i(c,-1,1)),.99999>Math.abs(c)?(this._x=Math.atan2(u,n),this._z=Math.atan2(s,e)):(this._x=0,this._z=Math.atan2(-o,h))):"YZX"===t?(this._z=Math.asin(i(s,-1,1)),.99999>Math.abs(s)?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-c,e)):(this._x=0,this._y=Math.atan2(a,n))):"XZY"===t?(this._z=Math.asin(-i(o,-1,1)),.99999>Math.abs(o)?(this._x=Math.atan2(u,h),this._y=Math.atan2(a,e)):(this._x=Math.atan2(-l,n),this._y=0)):THREE.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+t),this._order=t,!1!==r&&this.onChangeCallback(),this},setFromQuaternion:function(){var e;return function(t,r,i){return void 0===e&&(e=new THREE.Matrix4),e.makeRotationFromQuaternion(t),this.setFromRotationMatrix(e,r,i),this}}(),setFromVector3:function(e,t){return this.set(e.x,e.y,e.z,t||this._order)},reorder:function(){var e=new THREE.Quaternion;return function(t){e.setFromEuler(this),this.setFromQuaternion(e,t)}}(),equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order},fromArray:function(e){return this._x=e[0],this._y=e[1],this._z=e[2],void 0!==e[3]&&(this._order=e[3]),this.onChangeCallback(),this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e},toVector3:function(e){return e?e.set(this._x,this._y,this._z):new THREE.Vector3(this._x,this._y,this._z)},onChange:function(e){return this.onChangeCallback=e,this},onChangeCallback:function(){},clone:function(){return new THREE.Euler(this._x,this._y,this._z,this._order)}},THREE.Line3=function(e,t){this.start=void 0!==e?e:new THREE.Vector3,this.end=void 0!==t?t:new THREE.Vector3},THREE.Line3.prototype={constructor:THREE.Line3,set:function(e,t){return this.start.copy(e),this.end.copy(t),this},copy:function(e){return this.start.copy(e.start),this.end.copy(e.end),this},center:function(e){return(e||new THREE.Vector3).addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(e){return(e||new THREE.Vector3).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(e,t){var r=t||new THREE.Vector3;return this.delta(r).multiplyScalar(e).add(this.start)},closestPointToPointParameter:function(){var e=new THREE.Vector3,t=new THREE.Vector3;return function(r,i){e.subVectors(r,this.start),t.subVectors(this.end,this.start);var n=t.dot(t),n=t.dot(e)/n;return i&&(n=THREE.Math.clamp(n,0,1)),n}}(),closestPointToPoint:function(e,t,r){return e=this.closestPointToPointParameter(e,t),r=r||new THREE.Vector3,this.delta(r).multiplyScalar(e).add(this.start)},applyMatrix4:function(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this},equals:function(e){return e.start.equals(this.start)&&e.end.equals(this.end)},clone:function(){return(new THREE.Line3).copy(this)}},THREE.Box2=function(e,t){this.min=void 0!==e?e:new THREE.Vector2(1/0,1/0),this.max=void 0!==t?t:new THREE.Vector2(-(1/0),-(1/0))},THREE.Box2.prototype={constructor:THREE.Box2,set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromPoints:function(e){this.makeEmpty();for(var t=0,r=e.length;r>t;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(){var e=new THREE.Vector2;return function(t,r){var i=e.copy(r).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}}(),copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-(1/0),this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},center:function(e){return(e||new THREE.Vector2).addVectors(this.min,this.max).multiplyScalar(.5)},size:function(e){return(e||new THREE.Vector2).subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},containsPoint:function(e){return e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y?!1:!0},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y?!0:!1},getParameter:function(e,t){return(t||new THREE.Vector2).set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))},isIntersectionBox:function(e){return e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y?!1:!0},clampPoint:function(e,t){return(t||new THREE.Vector2).copy(e).clamp(this.min,this.max)},distanceToPoint:function(){var e=new THREE.Vector2;return function(t){return e.copy(t).clamp(this.min,this.max).sub(t).length()}}(),intersect:function(e){return this.min.max(e.min),this.max.min(e.max),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)},clone:function(){return(new THREE.Box2).copy(this)}},THREE.Box3=function(e,t){this.min=void 0!==e?e:new THREE.Vector3(1/0,1/0,1/0),this.max=void 0!==t?t:new THREE.Vector3(-(1/0),-(1/0),-(1/0))},THREE.Box3.prototype={constructor:THREE.Box3,set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromPoints:function(e){this.makeEmpty();for(var t=0,r=e.length;r>t;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(){var e=new THREE.Vector3;return function(t,r){var i=e.copy(r).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}}(),setFromObject:function(){var e=new THREE.Vector3;return function(t){var r=this;return t.updateMatrixWorld(!0),this.makeEmpty(),t.traverse(function(t){var i=t.geometry;if(void 0!==i)if(i instanceof THREE.Geometry)for(var n=i.vertices,i=0,o=n.length;o>i;i++)e.copy(n[i]),e.applyMatrix4(t.matrixWorld),r.expandByPoint(e);else if(i instanceof THREE.BufferGeometry&&void 0!==i.attributes.position)for(n=i.attributes.position.array,i=0,o=n.length;o>i;i+=3)e.set(n[i],n[i+1],n[i+2]),e.applyMatrix4(t.matrixWorld),r.expandByPoint(e)}),this}}(),copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-(1/0),this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},center:function(e){return(e||new THREE.Vector3).addVectors(this.min,this.max).multiplyScalar(.5)},size:function(e){return(e||new THREE.Vector3).subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},containsPoint:function(e){return e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z?!1:!0},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z?!0:!1},getParameter:function(e,t){return(t||new THREE.Vector3).set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))},isIntersectionBox:function(e){return e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z?!1:!0},clampPoint:function(e,t){return(t||new THREE.Vector3).copy(e).clamp(this.min,this.max)},distanceToPoint:function(){var e=new THREE.Vector3;return function(t){return e.copy(t).clamp(this.min,this.max).sub(t).length()}}(),getBoundingSphere:function(){var e=new THREE.Vector3;return function(t){return t=t||new THREE.Sphere,t.center=this.center(),t.radius=.5*this.size(e).length(),t}}(),intersect:function(e){return this.min.max(e.min),this.max.min(e.max),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},applyMatrix4:function(){var e=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];return function(t){return e[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),e[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),e[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),e[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),e[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),e[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),e[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),e[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.makeEmpty(),this.setFromPoints(e),this}}(),translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)},clone:function(){return(new THREE.Box3).copy(this)}},THREE.Matrix3=function(){this.elements=new Float32Array([1,0,0,0,1,0,0,0,1]),0<arguments.length&&THREE.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")},THREE.Matrix3.prototype={constructor:THREE.Matrix3,set:function(e,t,r,i,n,o,a,s,h){var l=this.elements;return l[0]=e,l[3]=t,l[6]=r,l[1]=i,l[4]=n,l[7]=o,l[2]=a,l[5]=s,l[8]=h,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},copy:function(e){return e=e.elements,this.set(e[0],e[3],e[6],e[1],e[4],e[7],e[2],e[5],e[8]),this},multiplyVector3:function(e){return THREE.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},multiplyVector3Array:function(e){return THREE.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),this.applyToVector3Array(e)},applyToVector3Array:function(){var e=new THREE.Vector3;return function(t,r,i){void 0===r&&(r=0),void 0===i&&(i=t.length);for(var n=0;i>n;n+=3,r+=3)e.x=t[r],e.y=t[r+1],e.z=t[r+2],e.applyMatrix3(this),t[r]=e.x,t[r+1]=e.y,t[r+2]=e.z;return t}}(),multiplyScalar:function(e){var t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this},determinant:function(){var e=this.elements,t=e[0],r=e[1],i=e[2],n=e[3],o=e[4],a=e[5],s=e[6],h=e[7],e=e[8];return t*o*e-t*a*h-r*n*e+r*a*s+i*n*h-i*o*s},getInverse:function(e,t){var r=e.elements,i=this.elements;if(i[0]=r[10]*r[5]-r[6]*r[9],i[1]=-r[10]*r[1]+r[2]*r[9],i[2]=r[6]*r[1]-r[2]*r[5],i[3]=-r[10]*r[4]+r[6]*r[8],i[4]=r[10]*r[0]-r[2]*r[8],i[5]=-r[6]*r[0]+r[2]*r[4],i[6]=r[9]*r[4]-r[5]*r[8],i[7]=-r[9]*r[0]+r[1]*r[8],i[8]=r[5]*r[0]-r[1]*r[4],r=r[0]*i[0]+r[1]*i[3]+r[2]*i[6],0===r){if(t)throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");return THREE.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0"),this.identity(),this}return this.multiplyScalar(1/r),this},transpose:function(){var e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this},flattenToArrayOffset:function(e,t){var r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e},getNormalMatrix:function(e){return this.getInverse(e).transpose(),this},transposeIntoArray:function(e){var t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this},fromArray:function(e){return this.elements.set(e),this},toArray:function(){var e=this.elements;return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},clone:function(){return(new THREE.Matrix3).fromArray(this.elements)}},THREE.Matrix4=function(){this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),0<arguments.length&&THREE.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")},THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(e,t,r,i,n,o,a,s,h,l,c,u,E,p,d,f){var m=this.elements;return m[0]=e,m[4]=t,m[8]=r,m[12]=i,m[1]=n,m[5]=o,m[9]=a,m[13]=s,m[2]=h,m[6]=l,m[10]=c,m[14]=u,m[3]=E,m[7]=p,m[11]=d,m[15]=f,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},copy:function(e){return this.elements.set(e.elements),this},extractPosition:function(e){return THREE.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(e)},copyPosition:function(e){var t=this.elements;return e=e.elements,t[12]=e[12],t[13]=e[13],t[14]=e[14],this},extractBasis:function(e,t,r){var i=this.elements;return e.set(i[0],i[1],i[2]),t.set(i[4],i[5],i[6]),r.set(i[8],i[9],i[10]),this},makeBasis:function(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this},extractRotation:function(){var e=new THREE.Vector3;return function(t){var r=this.elements;t=t.elements;var i=1/e.set(t[0],t[1],t[2]).length(),n=1/e.set(t[4],t[5],t[6]).length(),o=1/e.set(t[8],t[9],t[10]).length();return r[0]=t[0]*i,r[1]=t[1]*i,r[2]=t[2]*i,r[4]=t[4]*n,r[5]=t[5]*n,r[6]=t[6]*n,r[8]=t[8]*o,r[9]=t[9]*o,r[10]=t[10]*o,this}}(),makeRotationFromEuler:function(e){!1==e instanceof THREE.Euler&&THREE.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var t=this.elements,r=e.x,i=e.y,n=e.z,o=Math.cos(r),r=Math.sin(r),a=Math.cos(i),i=Math.sin(i),s=Math.cos(n),n=Math.sin(n);if("XYZ"===e.order){e=o*s;var h=o*n,l=r*s,c=r*n;t[0]=a*s,t[4]=-a*n,t[8]=i,t[1]=h+l*i,t[5]=e-c*i,t[9]=-r*a,t[2]=c-e*i,t[6]=l+h*i,t[10]=o*a}else"YXZ"===e.order?(e=a*s,h=a*n,l=i*s,c=i*n,t[0]=e+c*r,t[4]=l*r-h,t[8]=o*i,t[1]=o*n,t[5]=o*s,t[9]=-r,t[2]=h*r-l,t[6]=c+e*r,t[10]=o*a):"ZXY"===e.order?(e=a*s,h=a*n,l=i*s,c=i*n,t[0]=e-c*r,t[4]=-o*n,t[8]=l+h*r,t[1]=h+l*r,t[5]=o*s,t[9]=c-e*r,t[2]=-o*i,t[6]=r,t[10]=o*a):"ZYX"===e.order?(e=o*s,h=o*n,l=r*s,c=r*n,t[0]=a*s,t[4]=l*i-h,t[8]=e*i+c,t[1]=a*n,t[5]=c*i+e,t[9]=h*i-l,t[2]=-i,t[6]=r*a,t[10]=o*a):"YZX"===e.order?(e=o*a,h=o*i,l=r*a,c=r*i,t[0]=a*s,t[4]=c-e*n,t[8]=l*n+h,t[1]=n,t[5]=o*s,t[9]=-r*s,t[2]=-i*s,t[6]=h*n+l,t[10]=e-c*n):"XZY"===e.order&&(e=o*a,h=o*i,l=r*a,c=r*i,t[0]=a*s,t[4]=-n,t[8]=i*s,t[1]=e*n+c,t[5]=o*s,t[9]=h*n-l,t[2]=l*n-h,t[6]=r*s,t[10]=c*n+e);return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},setRotationFromQuaternion:function(e){return THREE.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(e)},makeRotationFromQuaternion:function(e){var t=this.elements,r=e.x,i=e.y,n=e.z,o=e.w,a=r+r,s=i+i,h=n+n;e=r*a;var l=r*s,r=r*h,c=i*s,i=i*h,n=n*h,a=o*a,s=o*s,o=o*h;return t[0]=1-(c+n),t[4]=l-o,t[8]=r+s,t[1]=l+o,t[5]=1-(e+n),t[9]=i-a,t[2]=r-s,t[6]=i+a,t[10]=1-(e+c),t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},lookAt:function(){var e=new THREE.Vector3,t=new THREE.Vector3,r=new THREE.Vector3;return function(i,n,o){var a=this.elements;return r.subVectors(i,n).normalize(),0===r.length()&&(r.z=1),e.crossVectors(o,r).normalize(),0===e.length()&&(r.x+=1e-4,e.crossVectors(o,r).normalize()),t.crossVectors(r,e),a[0]=e.x,a[4]=t.x,a[8]=r.x,a[1]=e.y,a[5]=t.y,a[9]=r.y,a[2]=e.z,a[6]=t.z,a[10]=r.z,this}}(),multiply:function(e,t){return void 0!==t?(THREE.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)},multiplyMatrices:function(e,t){var r=e.elements,i=t.elements,n=this.elements,o=r[0],a=r[4],s=r[8],h=r[12],l=r[1],c=r[5],u=r[9],E=r[13],p=r[2],d=r[6],f=r[10],m=r[14],T=r[3],g=r[7],R=r[11],r=r[15],y=i[0],v=i[4],H=i[8],x=i[12],b=i[1],w=i[5],_=i[9],M=i[13],S=i[2],C=i[6],A=i[10],L=i[14],P=i[3],F=i[7],B=i[11],i=i[15];return n[0]=o*y+a*b+s*S+h*P,n[4]=o*v+a*w+s*C+h*F,n[8]=o*H+a*_+s*A+h*B,n[12]=o*x+a*M+s*L+h*i,n[1]=l*y+c*b+u*S+E*P,n[5]=l*v+c*w+u*C+E*F,n[9]=l*H+c*_+u*A+E*B,n[13]=l*x+c*M+u*L+E*i,n[2]=p*y+d*b+f*S+m*P,n[6]=p*v+d*w+f*C+m*F,n[10]=p*H+d*_+f*A+m*B,n[14]=p*x+d*M+f*L+m*i,n[3]=T*y+g*b+R*S+r*P,n[7]=T*v+g*w+R*C+r*F,n[11]=T*H+g*_+R*A+r*B,n[15]=T*x+g*M+R*L+r*i,this},multiplyToArray:function(e,t,r){var i=this.elements;return this.multiplyMatrices(e,t),r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],r[9]=i[9],r[10]=i[10],r[11]=i[11],r[12]=i[12],r[13]=i[13],r[14]=i[14],r[15]=i[15],this},multiplyScalar:function(e){var t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this},multiplyVector3:function(e){return THREE.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."),e.applyProjection(this)},multiplyVector4:function(e){return THREE.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector3Array:function(e){return THREE.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),this.applyToVector3Array(e)},applyToVector3Array:function(){var e=new THREE.Vector3;return function(t,r,i){void 0===r&&(r=0),void 0===i&&(i=t.length);for(var n=0;i>n;n+=3,r+=3)e.x=t[r],e.y=t[r+1],e.z=t[r+2],e.applyMatrix4(this),t[r]=e.x,t[r+1]=e.y,t[r+2]=e.z;return t}}(),rotateAxis:function(e){THREE.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),e.transformDirection(this)},crossVector:function(e){return THREE.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},determinant:function(){var e=this.elements,t=e[0],r=e[4],i=e[8],n=e[12],o=e[1],a=e[5],s=e[9],h=e[13],l=e[2],c=e[6],u=e[10],E=e[14];return e[3]*(+n*s*c-i*h*c-n*a*u+r*h*u+i*a*E-r*s*E)+e[7]*(+t*s*E-t*h*u+n*o*u-i*o*E+i*h*l-n*s*l)+e[11]*(+t*h*c-t*a*E-n*o*c+r*o*E+n*a*l-r*h*l)+e[15]*(-i*a*l-t*s*c+t*a*u+i*o*c-r*o*u+r*s*l)},transpose:function(){var e,t=this.elements;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this},flattenToArrayOffset:function(e,t){var r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e},getPosition:function(){var e=new THREE.Vector3;return function(){THREE.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");var t=this.elements;return e.set(t[12],t[13],t[14])}}(),setPosition:function(e){var t=this.elements;return t[12]=e.x,t[13]=e.y,t[14]=e.z,this},getInverse:function(e,t){var r=this.elements,i=e.elements,n=i[0],o=i[4],a=i[8],s=i[12],h=i[1],l=i[5],c=i[9],u=i[13],E=i[2],p=i[6],d=i[10],f=i[14],m=i[3],T=i[7],g=i[11],i=i[15];if(r[0]=c*f*T-u*d*T+u*p*g-l*f*g-c*p*i+l*d*i,r[4]=s*d*T-a*f*T-s*p*g+o*f*g+a*p*i-o*d*i,r[8]=a*u*T-s*c*T+s*l*g-o*u*g-a*l*i+o*c*i,r[12]=s*c*p-a*u*p-s*l*d+o*u*d+a*l*f-o*c*f,r[1]=u*d*m-c*f*m-u*E*g+h*f*g+c*E*i-h*d*i,r[5]=a*f*m-s*d*m+s*E*g-n*f*g-a*E*i+n*d*i,r[9]=s*c*m-a*u*m-s*h*g+n*u*g+a*h*i-n*c*i,r[13]=a*u*E-s*c*E+s*h*d-n*u*d-a*h*f+n*c*f,r[2]=l*f*m-u*p*m+u*E*T-h*f*T-l*E*i+h*p*i,r[6]=s*p*m-o*f*m-s*E*T+n*f*T+o*E*i-n*p*i,r[10]=o*u*m-s*l*m+s*h*T-n*u*T-o*h*i+n*l*i,r[14]=s*l*E-o*u*E-s*h*p+n*u*p+o*h*f-n*l*f,r[3]=c*p*m-l*d*m-c*E*T+h*d*T+l*E*g-h*p*g,r[7]=o*d*m-a*p*m+a*E*T-n*d*T-o*E*g+n*p*g,r[11]=a*l*m-o*c*m-a*h*T+n*c*T+o*h*g-n*l*g,r[15]=o*c*E-a*l*E+a*h*p-n*c*p-o*h*d+n*l*d,r=n*r[0]+h*r[4]+E*r[8]+m*r[12],0==r){if(t)throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");return THREE.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0"),this.identity(),this}return this.multiplyScalar(1/r),this},translate:function(e){THREE.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(e){THREE.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(e){THREE.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(e){THREE.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(e,t){THREE.error("THREE.Matrix4: .rotateByAxis() has been removed.")},scale:function(e){var t=this.elements,r=e.x,i=e.y;return e=e.z,t[0]*=r,t[4]*=i,t[8]*=e,t[1]*=r,t[5]*=i,t[9]*=e,t[2]*=r,t[6]*=i,t[10]*=e,t[3]*=r,t[7]*=i,t[11]*=e,this},getMaxScaleOnAxis:function(){var e=this.elements;return Math.sqrt(Math.max(e[0]*e[0]+e[1]*e[1]+e[2]*e[2],Math.max(e[4]*e[4]+e[5]*e[5]+e[6]*e[6],e[8]*e[8]+e[9]*e[9]+e[10]*e[10])))},makeTranslation:function(e,t,r){return this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this},makeRotationX:function(e){var t=Math.cos(e);return e=Math.sin(e),this.set(1,0,0,0,0,t,-e,0,0,e,t,0,0,0,0,1),this},makeRotationY:function(e){var t=Math.cos(e);return e=Math.sin(e),this.set(t,0,e,0,0,1,0,0,-e,0,t,0,0,0,0,1),this},makeRotationZ:function(e){var t=Math.cos(e);return e=Math.sin(e),this.set(t,-e,0,0,e,t,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(e,t){var r=Math.cos(t),i=Math.sin(t),n=1-r,o=e.x,a=e.y,s=e.z,h=n*o,l=n*a;return this.set(h*o+r,h*a-i*s,h*s+i*a,0,h*a+i*s,l*a+r,l*s-i*o,0,h*s-i*a,l*s+i*o,n*s*s+r,0,0,0,0,1),this},makeScale:function(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this},compose:function(e,t,r){return this.makeRotationFromQuaternion(t),this.scale(r),this.setPosition(e),this},decompose:function(){var e=new THREE.Vector3,t=new THREE.Matrix4;return function(r,i,n){var o=this.elements,a=e.set(o[0],o[1],o[2]).length(),s=e.set(o[4],o[5],o[6]).length(),h=e.set(o[8],o[9],o[10]).length();0>this.determinant()&&(a=-a),r.x=o[12],r.y=o[13],r.z=o[14],t.elements.set(this.elements),r=1/a;var o=1/s,l=1/h;return t.elements[0]*=r,t.elements[1]*=r,t.elements[2]*=r,t.elements[4]*=o,t.elements[5]*=o,t.elements[6]*=o,t.elements[8]*=l,t.elements[9]*=l,t.elements[10]*=l,i.setFromRotationMatrix(t),n.x=a,n.y=s,n.z=h,this}}(),makeFrustum:function(e,t,r,i,n,o){var a=this.elements;return a[0]=2*n/(t-e),a[4]=0,a[8]=(t+e)/(t-e),a[12]=0,a[1]=0,a[5]=2*n/(i-r),a[9]=(i+r)/(i-r),a[13]=0,a[2]=0,a[6]=0,a[10]=-(o+n)/(o-n),a[14]=-2*o*n/(o-n),a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this},makePerspective:function(e,t,r,i){e=r*Math.tan(THREE.Math.degToRad(.5*e));var n=-e;return this.makeFrustum(n*t,e*t,n,e,r,i)},makeOrthographic:function(e,t,r,i,n,o){var a=this.elements,s=t-e,h=r-i,l=o-n;return a[0]=2/s,a[4]=0,a[8]=0,a[12]=-((t+e)/s),a[1]=0,a[5]=2/h,a[9]=0,a[13]=-((r+i)/h),a[2]=0,a[6]=0,a[10]=-2/l,a[14]=-((o+n)/l),a[3]=0,a[7]=0,a[11]=0,a[15]=1,this},fromArray:function(e){return this.elements.set(e),this},toArray:function(){var e=this.elements;return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]},clone:function(){return(new THREE.Matrix4).fromArray(this.elements)}},THREE.Ray=function(e,t){this.origin=void 0!==e?e:new THREE.Vector3,this.direction=void 0!==t?t:new THREE.Vector3},THREE.Ray.prototype={constructor:THREE.Ray,set:function(e,t){return this.origin.copy(e),this.direction.copy(t),this},copy:function(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this},at:function(e,t){return(t||new THREE.Vector3).copy(this.direction).multiplyScalar(e).add(this.origin)},recast:function(){var e=new THREE.Vector3;return function(t){return this.origin.copy(this.at(t,e)),this}}(),closestPointToPoint:function(e,t){var r=t||new THREE.Vector3;r.subVectors(e,this.origin);var i=r.dot(this.direction);return 0>i?r.copy(this.origin):r.copy(this.direction).multiplyScalar(i).add(this.origin)},distanceToPoint:function(){var e=new THREE.Vector3;return function(t){var r=e.subVectors(t,this.origin).dot(this.direction);return 0>r?this.origin.distanceTo(t):(e.copy(this.direction).multiplyScalar(r).add(this.origin),e.distanceTo(t))}}(),distanceSqToSegment:function(){var e=new THREE.Vector3,t=new THREE.Vector3,r=new THREE.Vector3;return function(i,n,o,a){e.copy(i).add(n).multiplyScalar(.5),t.copy(n).sub(i).normalize(),r.copy(this.origin).sub(e);var s,h=.5*i.distanceTo(n),l=-this.direction.dot(t),c=r.dot(this.direction),u=-r.dot(t),E=r.lengthSq(),p=Math.abs(1-l*l);return p>0?(i=l*u-c,n=l*c-u,s=h*p,i>=0?n>=-s?s>=n?(h=1/p,i*=h,n*=h,l=i*(i+l*n+2*c)+n*(l*i+n+2*u)+E):(n=h,i=Math.max(0,-(l*n+c)),l=-i*i+n*(n+2*u)+E):(n=-h,i=Math.max(0,-(l*n+c)),l=-i*i+n*(n+2*u)+E):-s>=n?(i=Math.max(0,-(-l*h+c)),n=i>0?-h:Math.min(Math.max(-h,-u),h),l=-i*i+n*(n+2*u)+E):s>=n?(i=0,n=Math.min(Math.max(-h,-u),h),l=n*(n+2*u)+E):(i=Math.max(0,-(l*h+c)),n=i>0?h:Math.min(Math.max(-h,-u),h),l=-i*i+n*(n+2*u)+E)):(n=l>0?-h:h,i=Math.max(0,-(l*n+c)),l=-i*i+n*(n+2*u)+E),o&&o.copy(this.direction).multiplyScalar(i).add(this.origin),a&&a.copy(t).multiplyScalar(n).add(e),l}}(),isIntersectionSphere:function(e){return this.distanceToPoint(e.center)<=e.radius},intersectSphere:function(){var e=new THREE.Vector3;return function(t,r){e.subVectors(t.center,this.origin);var i=e.dot(this.direction),n=e.dot(e)-i*i,o=t.radius*t.radius;return n>o?null:(o=Math.sqrt(o-n),n=i-o,i+=o,0>n&&0>i?null:0>n?this.at(i,r):this.at(n,r))}}(),isIntersectionPlane:function(e){var t=e.distanceToPoint(this.origin);return 0===t||0>e.normal.dot(this.direction)*t?!0:!1},distanceToPlane:function(e){var t=e.normal.dot(this.direction);return 0==t?0==e.distanceToPoint(this.origin)?0:null:(e=-(this.origin.dot(e.normal)+e.constant)/t,e>=0?e:null)},intersectPlane:function(e,t){var r=this.distanceToPlane(e);return null===r?null:this.at(r,t)},isIntersectionBox:function(){var e=new THREE.Vector3;return function(t){return null!==this.intersectBox(t,e)}}(),intersectBox:function(e,t){var r,i,n,o,a;i=1/this.direction.x,o=1/this.direction.y,a=1/this.direction.z;var s=this.origin;return i>=0?(r=(e.min.x-s.x)*i,i*=e.max.x-s.x):(r=(e.max.x-s.x)*i,i*=e.min.x-s.x),o>=0?(n=(e.min.y-s.y)*o,o*=e.max.y-s.y):(n=(e.max.y-s.y)*o,o*=e.min.y-s.y),r>o||n>i?null:((n>r||r!==r)&&(r=n),(i>o||i!==i)&&(i=o),a>=0?(n=(e.min.z-s.z)*a,a*=e.max.z-s.z):(n=(e.max.z-s.z)*a,a*=e.min.z-s.z),r>a||n>i?null:((n>r||r!==r)&&(r=n),(i>a||i!==i)&&(i=a),0>i?null:this.at(r>=0?r:i,t)))},intersectTriangle:function(){var e=new THREE.Vector3,t=new THREE.Vector3,r=new THREE.Vector3,i=new THREE.Vector3;return function(n,o,a,s,h){if(t.subVectors(o,n),r.subVectors(a,n),i.crossVectors(t,r),o=this.direction.dot(i),o>0){if(s)return null;s=1}else{if(!(0>o))return null;s=-1,o=-o}return e.subVectors(this.origin,n),n=s*this.direction.dot(r.crossVectors(e,r)),0>n?null:(a=s*this.direction.dot(t.cross(e)),0>a||n+a>o?null:(n=-s*e.dot(i),0>n?null:this.at(n/o,h)))}}(),applyMatrix4:function(e){return this.direction.add(this.origin).applyMatrix4(e),this.origin.applyMatrix4(e),this.direction.sub(this.origin),this.direction.normalize(),this},equals:function(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)},clone:function(){return(new THREE.Ray).copy(this)}},THREE.Sphere=function(e,t){this.center=void 0!==e?e:new THREE.Vector3,this.radius=void 0!==t?t:0},THREE.Sphere.prototype={constructor:THREE.Sphere,set:function(e,t){return this.center.copy(e),this.radius=t,this},setFromPoints:function(){var e=new THREE.Box3;return function(t,r){var i=this.center;void 0!==r?i.copy(r):e.setFromPoints(t).center(i);for(var n=0,o=0,a=t.length;a>o;o++)n=Math.max(n,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(n),this}}(),copy:function(e){return this.center.copy(e.center),this.radius=e.radius,this},empty:function(){return 0>=this.radius},containsPoint:function(e){return e.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(e){return e.distanceTo(this.center)-this.radius},intersectsSphere:function(e){var t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t},clampPoint:function(e,t){var r=this.center.distanceToSquared(e),i=t||new THREE.Vector3;return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i},getBoundingBox:function(e){return e=e||new THREE.Box3,e.set(this.center,this.center),e.expandByScalar(this.radius),e},applyMatrix4:function(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this},translate:function(e){return this.center.add(e),this},equals:function(e){return e.center.equals(this.center)&&e.radius===this.radius},clone:function(){return(new THREE.Sphere).copy(this)}},THREE.Frustum=function(e,t,r,i,n,o){this.planes=[void 0!==e?e:new THREE.Plane,void 0!==t?t:new THREE.Plane,void 0!==r?r:new THREE.Plane,void 0!==i?i:new THREE.Plane,void 0!==n?n:new THREE.Plane,void 0!==o?o:new THREE.Plane]},THREE.Frustum.prototype={constructor:THREE.Frustum,set:function(e,t,r,i,n,o){var a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(r),a[3].copy(i),a[4].copy(n),a[5].copy(o),this},copy:function(e){for(var t=this.planes,r=0;6>r;r++)t[r].copy(e.planes[r]);return this},setFromMatrix:function(e){var t=this.planes,r=e.elements;e=r[0];var i=r[1],n=r[2],o=r[3],a=r[4],s=r[5],h=r[6],l=r[7],c=r[8],u=r[9],E=r[10],p=r[11],d=r[12],f=r[13],m=r[14],r=r[15];return t[0].setComponents(o-e,l-a,p-c,r-d).normalize(),t[1].setComponents(o+e,l+a,p+c,r+d).normalize(),t[2].setComponents(o+i,l+s,p+u,r+f).normalize(),t[3].setComponents(o-i,l-s,p-u,r-f).normalize(),t[4].setComponents(o-n,l-h,p-E,r-m).normalize(),t[5].setComponents(o+n,l+h,p+E,r+m).normalize(),this},intersectsObject:function(){var e=new THREE.Sphere;return function(t){var r=t.geometry;return null===r.boundingSphere&&r.computeBoundingSphere(),e.copy(r.boundingSphere),e.applyMatrix4(t.matrixWorld),this.intersectsSphere(e)}}(),intersectsSphere:function(e){var t=this.planes,r=e.center;e=-e.radius;for(var i=0;6>i;i++)if(t[i].distanceToPoint(r)<e)return!1;return!0},intersectsBox:function(){var e=new THREE.Vector3,t=new THREE.Vector3;return function(r){for(var i=this.planes,n=0;6>n;n++){var o=i[n];e.x=0<o.normal.x?r.min.x:r.max.x,t.x=0<o.normal.x?r.max.x:r.min.x,e.y=0<o.normal.y?r.min.y:r.max.y,t.y=0<o.normal.y?r.max.y:r.min.y,e.z=0<o.normal.z?r.min.z:r.max.z,t.z=0<o.normal.z?r.max.z:r.min.z;var a=o.distanceToPoint(e),o=o.distanceToPoint(t);if(0>a&&0>o)return!1}return!0}}(),containsPoint:function(e){for(var t=this.planes,r=0;6>r;r++)if(0>t[r].distanceToPoint(e))return!1;return!0},clone:function(){return(new THREE.Frustum).copy(this)}},THREE.Plane=function(e,t){this.normal=void 0!==e?e:new THREE.Vector3(1,0,0),this.constant=void 0!==t?t:0},THREE.Plane.prototype={constructor:THREE.Plane,set:function(e,t){return this.normal.copy(e),this.constant=t,this},setComponents:function(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this},setFromNormalAndCoplanarPoint:function(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this},setFromCoplanarPoints:function(){
var e=new THREE.Vector3,t=new THREE.Vector3;return function(r,i,n){return i=e.subVectors(n,i).cross(t.subVectors(r,i)).normalize(),this.setFromNormalAndCoplanarPoint(i,r),this}}(),copy:function(e){return this.normal.copy(e.normal),this.constant=e.constant,this},normalize:function(){var e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(e){return this.normal.dot(e)+this.constant},distanceToSphere:function(e){return this.distanceToPoint(e.center)-e.radius},projectPoint:function(e,t){return this.orthoPoint(e,t).sub(e).negate()},orthoPoint:function(e,t){var r=this.distanceToPoint(e);return(t||new THREE.Vector3).copy(this.normal).multiplyScalar(r)},isIntersectionLine:function(e){var t=this.distanceToPoint(e.start);return e=this.distanceToPoint(e.end),0>t&&e>0||0>e&&t>0},intersectLine:function(){var e=new THREE.Vector3;return function(t,r){var i=r||new THREE.Vector3,n=t.delta(e),o=this.normal.dot(n);return 0!=o?(o=-(t.start.dot(this.normal)+this.constant)/o,0>o||o>1?void 0:i.copy(n).multiplyScalar(o).add(t.start)):0==this.distanceToPoint(t.start)?i.copy(t.start):void 0}}(),coplanarPoint:function(e){return(e||new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var e=new THREE.Vector3,t=new THREE.Vector3,r=new THREE.Matrix3;return function(i,n){var o=n||r.getNormalMatrix(i),o=e.copy(this.normal).applyMatrix3(o),a=this.coplanarPoint(t);return a.applyMatrix4(i),this.setFromNormalAndCoplanarPoint(o,a),this}}(),translate:function(e){return this.constant-=e.dot(this.normal),this},equals:function(e){return e.normal.equals(this.normal)&&e.constant==this.constant},clone:function(){return(new THREE.Plane).copy(this)}},THREE.Math={generateUUID:function(){var e,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=Array(36),i=0;return function(){for(var n=0;36>n;n++)8==n||13==n||18==n||23==n?r[n]="-":14==n?r[n]="4":(2>=i&&(i=33554432+16777216*Math.random()|0),e=15&i,i>>=4,r[n]=t[19==n?3&e|8:e]);return r.join("")}}(),clamp:function(e,t,r){return t>e?t:e>r?r:e},clampBottom:function(e,t){return t>e?t:e},mapLinear:function(e,t,r,i,n){return i+(e-t)*(n-i)/(r-t)},smoothstep:function(e,t,r){return t>=e?0:e>=r?1:(e=(e-t)/(r-t),e*e*(3-2*e))},smootherstep:function(e,t,r){return t>=e?0:e>=r?1:(e=(e-t)/(r-t),e*e*e*(e*(6*e-15)+10))},random16:function(){return(65280*Math.random()+255*Math.random())/65535},randInt:function(e,t){return Math.floor(this.randFloat(e,t))},randFloat:function(e,t){return e+Math.random()*(t-e)},randFloatSpread:function(e){return e*(.5-Math.random())},degToRad:function(){var e=Math.PI/180;return function(t){return t*e}}(),radToDeg:function(){var e=180/Math.PI;return function(t){return t*e}}(),isPowerOfTwo:function(e){return 0===(e&e-1)&&0!==e},nextPowerOfTwo:function(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e++,e}},THREE.Spline=function(e){function t(e,t,r,i,n,o,a){return e=.5*(r-e),i=.5*(i-t),(2*(t-r)+e+i)*a+(-3*(t-r)-2*e-i)*o+e*n+t}this.points=e;var r,i,n,o,a,s,h,l,c,u=[],E={x:0,y:0,z:0};this.initFromArray=function(e){this.points=[];for(var t=0;t<e.length;t++)this.points[t]={x:e[t][0],y:e[t][1],z:e[t][2]}},this.getPoint=function(e){return r=(this.points.length-1)*e,i=Math.floor(r),n=r-i,u[0]=0===i?i:i-1,u[1]=i,u[2]=i>this.points.length-2?this.points.length-1:i+1,u[3]=i>this.points.length-3?this.points.length-1:i+2,s=this.points[u[0]],h=this.points[u[1]],l=this.points[u[2]],c=this.points[u[3]],o=n*n,a=n*o,E.x=t(s.x,h.x,l.x,c.x,n,o,a),E.y=t(s.y,h.y,l.y,c.y,n,o,a),E.z=t(s.z,h.z,l.z,c.z,n,o,a),E},this.getControlPointsArray=function(){var e,t,r=this.points.length,i=[];for(e=0;r>e;e++)t=this.points[e],i[e]=[t.x,t.y,t.z];return i},this.getLength=function(e){var t,r,i,n=t=t=0,o=new THREE.Vector3,a=new THREE.Vector3,s=[],h=0;for(s[0]=0,e||(e=100),r=this.points.length*e,o.copy(this.points[0]),e=1;r>e;e++)t=e/r,i=this.getPoint(t),a.copy(i),h+=a.distanceTo(o),o.copy(i),t*=this.points.length-1,t=Math.floor(t),t!=n&&(s[t]=h,n=t);return s[s.length]=h,{chunks:s,total:h}},this.reparametrizeByArcLength=function(e){var t,r,i,n,o,a,s=[],h=new THREE.Vector3,l=this.getLength();for(s.push(h.copy(this.points[0]).clone()),t=1;t<this.points.length;t++){for(r=l.chunks[t]-l.chunks[t-1],a=Math.ceil(e*r/l.total),n=(t-1)/(this.points.length-1),o=t/(this.points.length-1),r=1;a-1>r;r++)i=n+1/a*r*(o-n),i=this.getPoint(i),s.push(h.copy(i).clone());s.push(h.copy(this.points[t]).clone())}this.points=s}},THREE.Triangle=function(e,t,r){this.a=void 0!==e?e:new THREE.Vector3,this.b=void 0!==t?t:new THREE.Vector3,this.c=void 0!==r?r:new THREE.Vector3},THREE.Triangle.normal=function(){var e=new THREE.Vector3;return function(t,r,i,n){return n=n||new THREE.Vector3,n.subVectors(i,r),e.subVectors(t,r),n.cross(e),t=n.lengthSq(),t>0?n.multiplyScalar(1/Math.sqrt(t)):n.set(0,0,0)}}(),THREE.Triangle.barycoordFromPoint=function(){var e=new THREE.Vector3,t=new THREE.Vector3,r=new THREE.Vector3;return function(i,n,o,a,s){e.subVectors(a,n),t.subVectors(o,n),r.subVectors(i,n),i=e.dot(e),n=e.dot(t),o=e.dot(r);var h=t.dot(t);a=t.dot(r);var l=i*h-n*n;return s=s||new THREE.Vector3,0==l?s.set(-2,-1,-1):(l=1/l,h=(h*o-n*a)*l,i=(i*a-n*o)*l,s.set(1-h-i,i,h))}}(),THREE.Triangle.containsPoint=function(){var e=new THREE.Vector3;return function(t,r,i,n){return t=THREE.Triangle.barycoordFromPoint(t,r,i,n,e),0<=t.x&&0<=t.y&&1>=t.x+t.y}}(),THREE.Triangle.prototype={constructor:THREE.Triangle,set:function(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this},setFromPointsAndIndices:function(e,t,r,i){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[i]),this},copy:function(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this},area:function(){var e=new THREE.Vector3,t=new THREE.Vector3;return function(){return e.subVectors(this.c,this.b),t.subVectors(this.a,this.b),.5*e.cross(t).length()}}(),midpoint:function(e){return(e||new THREE.Vector3).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(e){return THREE.Triangle.normal(this.a,this.b,this.c,e)},plane:function(e){return(e||new THREE.Plane).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(e,t){return THREE.Triangle.barycoordFromPoint(e,this.a,this.b,this.c,t)},containsPoint:function(e){return THREE.Triangle.containsPoint(e,this.a,this.b,this.c)},equals:function(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)},clone:function(){return(new THREE.Triangle).copy(this)}},THREE.Clock=function(e){this.autoStart=void 0!==e?e:!0,this.elapsedTime=this.oldTime=this.startTime=0,this.running=!1},THREE.Clock.prototype={constructor:THREE.Clock,start:function(){this.oldTime=this.startTime=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now(),this.running=!0},stop:function(){this.getElapsedTime(),this.running=!1},getElapsedTime:function(){return this.getDelta(),this.elapsedTime},getDelta:function(){var e=0;if(this.autoStart&&!this.running&&this.start(),this.running){var t=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now(),e=.001*(t-this.oldTime);this.oldTime=t,this.elapsedTime+=e}return e}},THREE.EventDispatcher=function(){},THREE.EventDispatcher.prototype={constructor:THREE.EventDispatcher,apply:function(e){e.addEventListener=THREE.EventDispatcher.prototype.addEventListener,e.hasEventListener=THREE.EventDispatcher.prototype.hasEventListener,e.removeEventListener=THREE.EventDispatcher.prototype.removeEventListener,e.dispatchEvent=THREE.EventDispatcher.prototype.dispatchEvent},addEventListener:function(e,t){void 0===this._listeners&&(this._listeners={});var r=this._listeners;void 0===r[e]&&(r[e]=[]),-1===r[e].indexOf(t)&&r[e].push(t)},hasEventListener:function(e,t){if(void 0===this._listeners)return!1;var r=this._listeners;return void 0!==r[e]&&-1!==r[e].indexOf(t)?!0:!1},removeEventListener:function(e,t){if(void 0!==this._listeners){var r=this._listeners[e];if(void 0!==r){var i=r.indexOf(t);-1!==i&&r.splice(i,1)}}},dispatchEvent:function(e){if(void 0!==this._listeners){var t=this._listeners[e.type];if(void 0!==t){e.target=this;for(var r=[],i=t.length,n=0;i>n;n++)r[n]=t[n];for(n=0;i>n;n++)r[n].call(this,e)}}}},function(e){e.Raycaster=function(t,r,i,n){this.ray=new e.Ray(t,r),this.near=i||0,this.far=n||1/0,this.params={Sprite:{},Mesh:{},PointCloud:{threshold:1},LOD:{},Line:{}}};var t=function(e,t){return e.distance-t.distance},r=function(e,t,i,n){if(e.raycast(t,i),!0===n){e=e.children,n=0;for(var o=e.length;o>n;n++)r(e[n],t,i,!0)}};e.Raycaster.prototype={constructor:e.Raycaster,precision:1e-4,linePrecision:1,set:function(e,t){this.ray.set(e,t)},setFromCamera:function(t,r){r instanceof e.PerspectiveCamera?(this.ray.origin.copy(r.position),this.ray.direction.set(t.x,t.y,.5).unproject(r).sub(r.position).normalize()):r instanceof e.OrthographicCamera?(this.ray.origin.set(t.x,t.y,-1).unproject(r),this.ray.direction.set(0,0,-1).transformDirection(r.matrixWorld)):e.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(e,i){var n=[];return r(e,this,n,i),n.sort(t),n},intersectObjects:function(i,n){var o=[];if(!1==i instanceof Array)return e.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),o;for(var a=0,s=i.length;s>a;a++)r(i[a],this,o,n);return o.sort(t),o}}}(THREE),THREE.Object3D=function(){Object.defineProperty(this,"id",{value:THREE.Object3DIdCount++}),this.uuid=THREE.Math.generateUUID(),this.name="",this.type="Object3D",this.parent=void 0,this.children=[],this.up=THREE.Object3D.DefaultUp.clone();var e=new THREE.Vector3,t=new THREE.Euler,r=new THREE.Quaternion,i=new THREE.Vector3(1,1,1);t.onChange(function(){r.setFromEuler(t,!1)}),r.onChange(function(){t.setFromQuaternion(r,void 0,!1)}),Object.defineProperties(this,{position:{enumerable:!0,value:e},rotation:{enumerable:!0,value:t},quaternion:{enumerable:!0,value:r},scale:{enumerable:!0,value:i}}),this.rotationAutoUpdate=!0,this.matrix=new THREE.Matrix4,this.matrixWorld=new THREE.Matrix4,this.matrixAutoUpdate=!0,this.matrixWorldNeedsUpdate=!1,this.visible=!0,this.receiveShadow=this.castShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}},THREE.Object3D.DefaultUp=new THREE.Vector3(0,1,0),THREE.Object3D.prototype={constructor:THREE.Object3D,get eulerOrder(){return THREE.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order."),this.rotation.order},set eulerOrder(e){THREE.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order."),this.rotation.order=e},get useQuaternion(){THREE.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set useQuaternion(e){THREE.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},applyMatrix:function(e){this.matrix.multiplyMatrices(e,this.matrix),this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(e,t){this.quaternion.setFromAxisAngle(e,t)},setRotationFromEuler:function(e){this.quaternion.setFromEuler(e,!0)},setRotationFromMatrix:function(e){this.quaternion.setFromRotationMatrix(e)},setRotationFromQuaternion:function(e){this.quaternion.copy(e)},rotateOnAxis:function(){var e=new THREE.Quaternion;return function(t,r){return e.setFromAxisAngle(t,r),this.quaternion.multiply(e),this}}(),rotateX:function(){var e=new THREE.Vector3(1,0,0);return function(t){return this.rotateOnAxis(e,t)}}(),rotateY:function(){var e=new THREE.Vector3(0,1,0);return function(t){return this.rotateOnAxis(e,t)}}(),rotateZ:function(){var e=new THREE.Vector3(0,0,1);return function(t){return this.rotateOnAxis(e,t)}}(),translateOnAxis:function(){var e=new THREE.Vector3;return function(t,r){return e.copy(t).applyQuaternion(this.quaternion),this.position.add(e.multiplyScalar(r)),this}}(),translate:function(e,t){return THREE.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,e)},translateX:function(){var e=new THREE.Vector3(1,0,0);return function(t){return this.translateOnAxis(e,t)}}(),translateY:function(){var e=new THREE.Vector3(0,1,0);return function(t){return this.translateOnAxis(e,t)}}(),translateZ:function(){var e=new THREE.Vector3(0,0,1);return function(t){return this.translateOnAxis(e,t)}}(),localToWorld:function(e){return e.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var e=new THREE.Matrix4;return function(t){return t.applyMatrix4(e.getInverse(this.matrixWorld))}}(),lookAt:function(){var e=new THREE.Matrix4;return function(t){e.lookAt(t,this.position,this.up),this.quaternion.setFromRotationMatrix(e)}}(),add:function(e){if(1<arguments.length){for(var t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(THREE.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e instanceof THREE.Object3D?(void 0!==e.parent&&e.parent.remove(e),e.parent=this,e.dispatchEvent({type:"added"}),this.children.push(e)):THREE.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)},remove:function(e){if(1<arguments.length)for(var t=0;t<arguments.length;t++)this.remove(arguments[t]);t=this.children.indexOf(e),-1!==t&&(e.parent=void 0,e.dispatchEvent({type:"removed"}),this.children.splice(t,1))},getChildByName:function(e){return THREE.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(e)},getObjectById:function(e){return this.getObjectByProperty("id",e)},getObjectByName:function(e){return this.getObjectByProperty("name",e)},getObjectByProperty:function(e,t){if(this[e]===t)return this;for(var r=0,i=this.children.length;i>r;r++){var n=this.children[r].getObjectByProperty(e,t);if(void 0!==n)return n}},getWorldPosition:function(e){return e=e||new THREE.Vector3,this.updateMatrixWorld(!0),e.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var e=new THREE.Vector3,t=new THREE.Vector3;return function(r){return r=r||new THREE.Quaternion,this.updateMatrixWorld(!0),this.matrixWorld.decompose(e,r,t),r}}(),getWorldRotation:function(){var e=new THREE.Quaternion;return function(t){return t=t||new THREE.Euler,this.getWorldQuaternion(e),t.setFromQuaternion(e,this.rotation.order,!1)}}(),getWorldScale:function(){var e=new THREE.Vector3,t=new THREE.Quaternion;return function(r){return r=r||new THREE.Vector3,this.updateMatrixWorld(!0),this.matrixWorld.decompose(e,t,r),r}}(),getWorldDirection:function(){var e=new THREE.Quaternion;return function(t){return t=t||new THREE.Vector3,this.getWorldQuaternion(e),t.set(0,0,1).applyQuaternion(e)}}(),raycast:function(){},traverse:function(e){e(this);for(var t=0,r=this.children.length;r>t;t++)this.children[t].traverse(e)},traverseVisible:function(e){if(!1!==this.visible){e(this);for(var t=0,r=this.children.length;r>t;t++)this.children[t].traverseVisible(e)}},traverseAncestors:function(e){this.parent&&(e(this.parent),this.parent.traverseAncestors(e))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(e){!0===this.matrixAutoUpdate&&this.updateMatrix(),(!0===this.matrixWorldNeedsUpdate||!0===e)&&(void 0===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);for(var t=0,r=this.children.length;r>t;t++)this.children[t].updateMatrixWorld(e)},toJSON:function(){var e={metadata:{version:4.3,type:"Object",generator:"ObjectExporter"}},t={},r={},i=function(t){if(void 0===e.materials&&(e.materials=[]),void 0===r[t.uuid]){var i=t.toJSON();delete i.metadata,r[t.uuid]=i,e.materials.push(i)}return t.uuid},n=function(r){var o={};if(o.uuid=r.uuid,o.type=r.type,""!==r.name&&(o.name=r.name),"{}"!==JSON.stringify(r.userData)&&(o.userData=r.userData),!0!==r.visible&&(o.visible=r.visible),r instanceof THREE.PerspectiveCamera)o.fov=r.fov,o.aspect=r.aspect,o.near=r.near,o.far=r.far;else if(r instanceof THREE.OrthographicCamera)o.left=r.left,o.right=r.right,o.top=r.top,o.bottom=r.bottom,o.near=r.near,o.far=r.far;else if(r instanceof THREE.AmbientLight)o.color=r.color.getHex();else if(r instanceof THREE.DirectionalLight)o.color=r.color.getHex(),o.intensity=r.intensity;else if(r instanceof THREE.PointLight)o.color=r.color.getHex(),o.intensity=r.intensity,o.distance=r.distance,o.decay=r.decay;else if(r instanceof THREE.SpotLight)o.color=r.color.getHex(),o.intensity=r.intensity,o.distance=r.distance,o.angle=r.angle,o.exponent=r.exponent,o.decay=r.decay;else if(r instanceof THREE.HemisphereLight)o.color=r.color.getHex(),o.groundColor=r.groundColor.getHex();else if(r instanceof THREE.Mesh||r instanceof THREE.Line||r instanceof THREE.PointCloud){var a=r.geometry;if(void 0===e.geometries&&(e.geometries=[]),void 0===t[a.uuid]){var s=a.toJSON();delete s.metadata,t[a.uuid]=s,e.geometries.push(s)}o.geometry=a.uuid,o.material=i(r.material),r instanceof THREE.Line&&(o.mode=r.mode)}else r instanceof THREE.Sprite&&(o.material=i(r.material));if(o.matrix=r.matrix.toArray(),0<r.children.length)for(o.children=[],a=0;a<r.children.length;a++)o.children.push(n(r.children[a]));return o};return e.object=n(this),e},clone:function(e,t){if(void 0===e&&(e=new THREE.Object3D),void 0===t&&(t=!0),e.name=this.name,e.up.copy(this.up),e.position.copy(this.position),e.quaternion.copy(this.quaternion),e.scale.copy(this.scale),e.rotationAutoUpdate=this.rotationAutoUpdate,e.matrix.copy(this.matrix),e.matrixWorld.copy(this.matrixWorld),e.matrixAutoUpdate=this.matrixAutoUpdate,e.matrixWorldNeedsUpdate=this.matrixWorldNeedsUpdate,e.visible=this.visible,e.castShadow=this.castShadow,e.receiveShadow=this.receiveShadow,e.frustumCulled=this.frustumCulled,e.userData=JSON.parse(JSON.stringify(this.userData)),!0===t)for(var r=0;r<this.children.length;r++)e.add(this.children[r].clone());return e}},THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype),THREE.Object3DIdCount=0,THREE.Face3=function(e,t,r,i,n,o){this.a=e,this.b=t,this.c=r,this.normal=i instanceof THREE.Vector3?i:new THREE.Vector3,this.vertexNormals=i instanceof Array?i:[],this.color=n instanceof THREE.Color?n:new THREE.Color,this.vertexColors=n instanceof Array?n:[],this.vertexTangents=[],this.materialIndex=void 0!==o?o:0},THREE.Face3.prototype={constructor:THREE.Face3,clone:function(){var e=new THREE.Face3(this.a,this.b,this.c);e.normal.copy(this.normal),e.color.copy(this.color),e.materialIndex=this.materialIndex;for(var t=0,r=this.vertexNormals.length;r>t;t++)e.vertexNormals[t]=this.vertexNormals[t].clone();for(t=0,r=this.vertexColors.length;r>t;t++)e.vertexColors[t]=this.vertexColors[t].clone();for(t=0,r=this.vertexTangents.length;r>t;t++)e.vertexTangents[t]=this.vertexTangents[t].clone();return e}},THREE.Face4=function(e,t,r,i,n,o,a){return THREE.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),new THREE.Face3(e,t,r,n,o,a)},THREE.BufferAttribute=function(e,t){this.array=e,this.itemSize=t,this.needsUpdate=!1},THREE.BufferAttribute.prototype={constructor:THREE.BufferAttribute,get length(){return this.array.length},copyAt:function(e,t,r){e*=this.itemSize,r*=t.itemSize;for(var i=0,n=this.itemSize;n>i;i++)this.array[e+i]=t.array[r+i];return this},set:function(e,t){return void 0===t&&(t=0),this.array.set(e,t),this},setX:function(e,t){return this.array[e*this.itemSize]=t,this},setY:function(e,t){return this.array[e*this.itemSize+1]=t,this},setZ:function(e,t){return this.array[e*this.itemSize+2]=t,this},setXY:function(e,t,r){return e*=this.itemSize,this.array[e]=t,this.array[e+1]=r,this},setXYZ:function(e,t,r,i){return e*=this.itemSize,this.array[e]=t,this.array[e+1]=r,this.array[e+2]=i,this},setXYZW:function(e,t,r,i,n){return e*=this.itemSize,this.array[e]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=n,this},clone:function(){return new THREE.BufferAttribute(new this.array.constructor(this.array),this.itemSize)}},THREE.Int8Attribute=function(e,t){return THREE.warn("THREE.Int8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."),new THREE.BufferAttribute(e,t)},THREE.Uint8Attribute=function(e,t){return THREE.warn("THREE.Uint8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."),new THREE.BufferAttribute(e,t)},THREE.Uint8ClampedAttribute=function(e,t){return THREE.warn("THREE.Uint8ClampedAttribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."),new THREE.BufferAttribute(e,t)},THREE.Int16Attribute=function(e,t){return THREE.warn("THREE.Int16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."),new THREE.BufferAttribute(e,t)},THREE.Uint16Attribute=function(e,t){return THREE.warn("THREE.Uint16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."),new THREE.BufferAttribute(e,t)},THREE.Int32Attribute=function(e,t){return THREE.warn("THREE.Int32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."),new THREE.BufferAttribute(e,t)},THREE.Uint32Attribute=function(e,t){return THREE.warn("THREE.Uint32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."),new THREE.BufferAttribute(e,t)},THREE.Float32Attribute=function(e,t){return THREE.warn("THREE.Float32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."),new THREE.BufferAttribute(e,t)},THREE.Float64Attribute=function(e,t){return THREE.warn("THREE.Float64Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."),new THREE.BufferAttribute(e,t)},THREE.DynamicBufferAttribute=function(e,t){THREE.BufferAttribute.call(this,e,t),this.updateRange={offset:0,count:-1}},THREE.DynamicBufferAttribute.prototype=Object.create(THREE.BufferAttribute.prototype),THREE.DynamicBufferAttribute.prototype.constructor=THREE.DynamicBufferAttribute,THREE.DynamicBufferAttribute.prototype.clone=function(){return new THREE.DynamicBufferAttribute(new this.array.constructor(this.array),this.itemSize)},THREE.BufferGeometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++}),this.uuid=THREE.Math.generateUUID(),this.name="",this.type="BufferGeometry",this.attributes={},this.attributesKeys=[],this.offsets=this.drawcalls=[],this.boundingSphere=this.boundingBox=null},THREE.BufferGeometry.prototype={constructor:THREE.BufferGeometry,addAttribute:function(e,t,r){!1==t instanceof THREE.BufferAttribute?(THREE.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.attributes[e]={array:t,itemSize:r}):(this.attributes[e]=t,this.attributesKeys=Object.keys(this.attributes))},getAttribute:function(e){return this.attributes[e]},addDrawCall:function(e,t,r){this.drawcalls.push({start:e,count:t,index:void 0!==r?r:0})},applyMatrix:function(e){var t=this.attributes.position;void 0!==t&&(e.applyToVector3Array(t.array),t.needsUpdate=!0),t=this.attributes.normal,void 0!==t&&((new THREE.Matrix3).getNormalMatrix(e).applyToVector3Array(t.array),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere()},center:function(){this.computeBoundingBox();var e=this.boundingBox.center().negate();return this.applyMatrix((new THREE.Matrix4).setPosition(e)),e},fromGeometry:function(e,t){t=t||{vertexColors:THREE.NoColors};var r=e.vertices,i=e.faces,n=e.faceVertexUvs,o=t.vertexColors,a=0<n[0].length,s=3==i[0].vertexNormals.length,h=new Float32Array(9*i.length);this.addAttribute("position",new THREE.BufferAttribute(h,3));var l=new Float32Array(9*i.length);if(this.addAttribute("normal",new THREE.BufferAttribute(l,3)),o!==THREE.NoColors){var c=new Float32Array(9*i.length);this.addAttribute("color",new THREE.BufferAttribute(c,3))}if(!0===a){var u=new Float32Array(6*i.length);this.addAttribute("uv",new THREE.BufferAttribute(u,2))}for(var E=0,p=0,d=0;E<i.length;E++,p+=6,d+=9){var f=i[E],m=r[f.a],T=r[f.b],g=r[f.c];h[d]=m.x,h[d+1]=m.y,h[d+2]=m.z,h[d+3]=T.x,h[d+4]=T.y,h[d+5]=T.z,h[d+6]=g.x,h[d+7]=g.y,h[d+8]=g.z,!0===s?(m=f.vertexNormals[0],T=f.vertexNormals[1],g=f.vertexNormals[2],l[d]=m.x,l[d+1]=m.y,l[d+2]=m.z,l[d+3]=T.x,l[d+4]=T.y,l[d+5]=T.z,l[d+6]=g.x,l[d+7]=g.y,l[d+8]=g.z):(m=f.normal,l[d]=m.x,l[d+1]=m.y,l[d+2]=m.z,l[d+3]=m.x,l[d+4]=m.y,l[d+5]=m.z,l[d+6]=m.x,l[d+7]=m.y,l[d+8]=m.z),o===THREE.FaceColors?(f=f.color,c[d]=f.r,c[d+1]=f.g,c[d+2]=f.b,c[d+3]=f.r,c[d+4]=f.g,c[d+5]=f.b,c[d+6]=f.r,c[d+7]=f.g,c[d+8]=f.b):o===THREE.VertexColors&&(m=f.vertexColors[0],T=f.vertexColors[1],f=f.vertexColors[2],c[d]=m.r,c[d+1]=m.g,c[d+2]=m.b,c[d+3]=T.r,c[d+4]=T.g,c[d+5]=T.b,c[d+6]=f.r,c[d+7]=f.g,c[d+8]=f.b),!0===a&&(f=n[0][E][0],m=n[0][E][1],T=n[0][E][2],u[p]=f.x,u[p+1]=f.y,u[p+2]=m.x,u[p+3]=m.y,u[p+4]=T.x,u[p+5]=T.y)}return this.computeBoundingSphere(),this},computeBoundingBox:function(){var e=new THREE.Vector3;return function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);var t=this.attributes.position.array;if(t){var r=this.boundingBox;r.makeEmpty();for(var i=0,n=t.length;n>i;i+=3)e.set(t[i],t[i+1],t[i+2]),r.expandByPoint(e)}(void 0===t||0===t.length)&&(this.boundingBox.min.set(0,0,0),this.boundingBox.max.set(0,0,0)),(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&THREE.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.')}}(),computeBoundingSphere:function(){var e=new THREE.Box3,t=new THREE.Vector3;return function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);var r=this.attributes.position.array;if(r){e.makeEmpty();for(var i=this.boundingSphere.center,n=0,o=r.length;o>n;n+=3)t.set(r[n],r[n+1],r[n+2]),e.expandByPoint(t);e.center(i);for(var a=0,n=0,o=r.length;o>n;n+=3)t.set(r[n],r[n+1],r[n+2]),a=Math.max(a,i.distanceToSquared(t));this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&THREE.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.')}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var e=this.attributes;if(e.position){var t=e.position.array;if(void 0===e.normal)this.addAttribute("normal",new THREE.BufferAttribute(new Float32Array(t.length),3));else for(var r=e.normal.array,i=0,n=r.length;n>i;i++)r[i]=0;var o,a,s,r=e.normal.array,h=new THREE.Vector3,l=new THREE.Vector3,c=new THREE.Vector3,u=new THREE.Vector3,E=new THREE.Vector3;if(e.index)for(var p=e.index.array,d=0<this.offsets.length?this.offsets:[{start:0,count:p.length,index:0}],f=0,m=d.length;m>f;++f){n=d[f].start,o=d[f].count;for(var T=d[f].index,i=n,n=n+o;n>i;i+=3)o=3*(T+p[i]),a=3*(T+p[i+1]),s=3*(T+p[i+2]),h.fromArray(t,o),l.fromArray(t,a),c.fromArray(t,s),u.subVectors(c,l),E.subVectors(h,l),u.cross(E),r[o]+=u.x,r[o+1]+=u.y,r[o+2]+=u.z,r[a]+=u.x,r[a+1]+=u.y,r[a+2]+=u.z,r[s]+=u.x,r[s+1]+=u.y,r[s+2]+=u.z}else for(i=0,n=t.length;n>i;i+=9)h.fromArray(t,i),l.fromArray(t,i+3),c.fromArray(t,i+6),u.subVectors(c,l),E.subVectors(h,l),u.cross(E),r[i]=u.x,r[i+1]=u.y,r[i+2]=u.z,r[i+3]=u.x,r[i+4]=u.y,r[i+5]=u.z,r[i+6]=u.x,r[i+7]=u.y,r[i+8]=u.z;this.normalizeNormals(),e.normal.needsUpdate=!0}},computeTangents:function(){function e(e,t,r){M.fromArray(i,3*e),S.fromArray(i,3*t),C.fromArray(i,3*r),A.fromArray(o,2*e),L.fromArray(o,2*t),P.fromArray(o,2*r),u=S.x-M.x,E=C.x-M.x,p=S.y-M.y,d=C.y-M.y,f=S.z-M.z,m=C.z-M.z,T=L.x-A.x,g=P.x-A.x,R=L.y-A.y,y=P.y-A.y,v=1/(T*y-g*R),F.set((y*u-R*E)*v,(y*p-R*d)*v,(y*f-R*m)*v),B.set((T*E-g*u)*v,(T*d-g*p)*v,(T*m-g*f)*v),h[e].add(F),h[t].add(F),h[r].add(F),l[e].add(B),l[t].add(B),l[r].add(B)}function t(e){G.fromArray(n,3*e),I.copy(G),z=h[e],N.copy(z),N.sub(G.multiplyScalar(G.dot(z))).normalize(),O.crossVectors(I,z),k=O.dot(l[e]),V=0>k?-1:1,s[4*e]=N.x,s[4*e+1]=N.y,s[4*e+2]=N.z,s[4*e+3]=V}if(void 0===this.attributes.index||void 0===this.attributes.position||void 0===this.attributes.normal||void 0===this.attributes.uv)THREE.warn("THREE.BufferGeometry: Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");else{var r=this.attributes.index.array,i=this.attributes.position.array,n=this.attributes.normal.array,o=this.attributes.uv.array,a=i.length/3;void 0===this.attributes.tangent&&this.addAttribute("tangent",new THREE.BufferAttribute(new Float32Array(4*a),4));for(var s=this.attributes.tangent.array,h=[],l=[],c=0;a>c;c++)h[c]=new THREE.Vector3,l[c]=new THREE.Vector3;var u,E,p,d,f,m,T,g,R,y,v,H,x,b,w,_,M=new THREE.Vector3,S=new THREE.Vector3,C=new THREE.Vector3,A=new THREE.Vector2,L=new THREE.Vector2,P=new THREE.Vector2,F=new THREE.Vector3,B=new THREE.Vector3;0===this.drawcalls.length&&this.addDrawCall(0,r.length,0);var U=this.drawcalls,c=0;for(x=U.length;x>c;++c){H=U[c].start,b=U[c].count;var D=U[c].index,a=H;for(H+=b;H>a;a+=3)b=D+r[a],w=D+r[a+1],_=D+r[a+2],e(b,w,_)}var V,z,k,N=new THREE.Vector3,O=new THREE.Vector3,G=new THREE.Vector3,I=new THREE.Vector3,c=0;for(x=U.length;x>c;++c)for(H=U[c].start,b=U[c].count,D=U[c].index,a=H,H+=b;H>a;a+=3)b=D+r[a],w=D+r[a+1],_=D+r[a+2],t(b),t(w),t(_)}},computeOffsets:function(e){void 0===e&&(e=65535);for(var t=this.attributes.index.array,r=this.attributes.position.array,i=t.length/3,n=new Uint16Array(t.length),o=0,a=0,s=[{start:0,count:0,index:0}],h=s[0],l=0,c=0,u=new Int32Array(6),E=new Int32Array(r.length),p=new Int32Array(r.length),d=0;d<r.length;d++)E[d]=-1,p[d]=-1;for(r=0;i>r;r++){for(var f=c=0;3>f;f++)d=t[3*r+f],-1==E[d]?(u[2*f]=d,u[2*f+1]=-1,c++):E[d]<h.index?(u[2*f]=d,u[2*f+1]=-1,l++):(u[2*f]=d,u[2*f+1]=E[d]);if(a+c>h.index+e)for(h={start:o,count:0,index:a},s.push(h),c=0;6>c;c+=2)f=u[c+1],f>-1&&f<h.index&&(u[c+1]=-1);for(c=0;6>c;c+=2)d=u[c],f=u[c+1],-1===f&&(f=a++),E[d]=f,p[f]=d,n[o++]=f-h.index,h.count++}return this.reorderBuffers(n,p,a),this.drawcalls=this.offsets=s},merge:function(e,t){if(!1!=e instanceof THREE.BufferGeometry){void 0===t&&(t=0);var r,i=this.attributes;for(r in i)if(void 0!==e.attributes[r])for(var n=i[r].array,o=e.attributes[r],a=o.array,s=0,o=o.itemSize*t;s<a.length;s++,o++)n[o]=a[s];return this}THREE.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e)},normalizeNormals:function(){for(var e,t,r,i=this.attributes.normal.array,n=0,o=i.length;o>n;n+=3)e=i[n],t=i[n+1],r=i[n+2],e=1/Math.sqrt(e*e+t*t+r*r),i[n]*=e,i[n+1]*=e,i[n+2]*=e},reorderBuffers:function(e,t,r){var i,n={};for(i in this.attributes)"index"!=i&&(n[i]=new this.attributes[i].array.constructor(this.attributes[i].itemSize*r));for(var o=0;r>o;o++){var a=t[o];for(i in this.attributes)if("index"!=i)for(var s=this.attributes[i].array,h=this.attributes[i].itemSize,l=n[i],c=0;h>c;c++)l[o*h+c]=s[a*h+c]}this.attributes.index.array=e;for(i in this.attributes)"index"!=i&&(this.attributes[i].array=n[i],this.attributes[i].numItems=this.attributes[i].itemSize*r)},toJSON:function(){var e,t={metadata:{version:4,type:"BufferGeometry",generator:"BufferGeometryExporter"},uuid:this.uuid,type:this.type,data:{attributes:{}}},r=this.attributes,i=this.offsets,n=this.boundingSphere;for(e in r){var o=r[e],a=Array.prototype.slice.call(o.array);t.data.attributes[e]={itemSize:o.itemSize,type:o.array.constructor.name,array:a}}return 0<i.length&&(t.data.offsets=JSON.parse(JSON.stringify(i))),null!==n&&(t.data.boundingSphere={center:n.center.toArray(),radius:n.radius}),t},clone:function(){var e,t=new THREE.BufferGeometry;for(e in this.attributes)t.addAttribute(e,this.attributes[e].clone());e=0;for(var r=this.offsets.length;r>e;e++){var i=this.offsets[e];t.offsets.push({start:i.start,index:i.index,count:i.count})}return t},dispose:function(){this.dispatchEvent({type:"dispose"})}},THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype),THREE.Geometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++}),this.uuid=THREE.Math.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],
this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphColors=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingSphere=this.boundingBox=null,this.hasTangents=!1,this.dynamic=!0,this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.tangentsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.elementsNeedUpdate=this.verticesNeedUpdate=!1},THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(e){for(var t=(new THREE.Matrix3).getNormalMatrix(e),r=0,i=this.vertices.length;i>r;r++)this.vertices[r].applyMatrix4(e);for(r=0,i=this.faces.length;i>r;r++){e=this.faces[r],e.normal.applyMatrix3(t).normalize();for(var n=0,o=e.vertexNormals.length;o>n;n++)e.vertexNormals[n].applyMatrix3(t).normalize()}null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this.normalsNeedUpdate=this.verticesNeedUpdate=!0},fromBufferGeometry:function(e){for(var t=this,r=e.attributes,i=r.position.array,n=void 0!==r.index?r.index.array:void 0,o=void 0!==r.normal?r.normal.array:void 0,a=void 0!==r.color?r.color.array:void 0,s=void 0!==r.uv?r.uv.array:void 0,h=[],l=[],c=r=0;r<i.length;r+=3,c+=2)t.vertices.push(new THREE.Vector3(i[r],i[r+1],i[r+2])),void 0!==o&&h.push(new THREE.Vector3(o[r],o[r+1],o[r+2])),void 0!==a&&t.colors.push(new THREE.Color(a[r],a[r+1],a[r+2])),void 0!==s&&l.push(new THREE.Vector2(s[c],s[c+1]));var u=function(e,r,i){var n=void 0!==o?[h[e].clone(),h[r].clone(),h[i].clone()]:[],c=void 0!==a?[t.colors[e].clone(),t.colors[r].clone(),t.colors[i].clone()]:[];t.faces.push(new THREE.Face3(e,r,i,n,c)),void 0!==s&&t.faceVertexUvs[0].push([l[e].clone(),l[r].clone(),l[i].clone()])};if(void 0!==n)if(i=e.drawcalls,0<i.length)for(r=0;r<i.length;r++)for(var c=i[r],E=c.start,p=c.count,d=c.index,c=E,E=E+p;E>c;c+=3)u(d+n[c],d+n[c+1],d+n[c+2]);else for(r=0;r<n.length;r+=3)u(n[r],n[r+1],n[r+2]);else for(r=0;r<i.length/3;r+=3)u(r,r+1,r+2);return this.computeFaceNormals(),null!==e.boundingBox&&(this.boundingBox=e.boundingBox.clone()),null!==e.boundingSphere&&(this.boundingSphere=e.boundingSphere.clone()),this},center:function(){this.computeBoundingBox();var e=this.boundingBox.center().negate();return this.applyMatrix((new THREE.Matrix4).setPosition(e)),e},computeFaceNormals:function(){for(var e=new THREE.Vector3,t=new THREE.Vector3,r=0,i=this.faces.length;i>r;r++){var n=this.faces[r],o=this.vertices[n.a],a=this.vertices[n.b];e.subVectors(this.vertices[n.c],a),t.subVectors(o,a),e.cross(t),e.normalize(),n.normal.copy(e)}},computeVertexNormals:function(e){var t,r,i;for(i=Array(this.vertices.length),t=0,r=this.vertices.length;r>t;t++)i[t]=new THREE.Vector3;if(e){var n,o,a,s=new THREE.Vector3,h=new THREE.Vector3;for(e=0,t=this.faces.length;t>e;e++)r=this.faces[e],n=this.vertices[r.a],o=this.vertices[r.b],a=this.vertices[r.c],s.subVectors(a,o),h.subVectors(n,o),s.cross(h),i[r.a].add(s),i[r.b].add(s),i[r.c].add(s)}else for(e=0,t=this.faces.length;t>e;e++)r=this.faces[e],i[r.a].add(r.normal),i[r.b].add(r.normal),i[r.c].add(r.normal);for(t=0,r=this.vertices.length;r>t;t++)i[t].normalize();for(e=0,t=this.faces.length;t>e;e++)r=this.faces[e],r.vertexNormals[0]=i[r.a].clone(),r.vertexNormals[1]=i[r.b].clone(),r.vertexNormals[2]=i[r.c].clone()},computeMorphNormals:function(){var e,t,r,i,n;for(r=0,i=this.faces.length;i>r;r++)for(n=this.faces[r],n.__originalFaceNormal?n.__originalFaceNormal.copy(n.normal):n.__originalFaceNormal=n.normal.clone(),n.__originalVertexNormals||(n.__originalVertexNormals=[]),e=0,t=n.vertexNormals.length;t>e;e++)n.__originalVertexNormals[e]?n.__originalVertexNormals[e].copy(n.vertexNormals[e]):n.__originalVertexNormals[e]=n.vertexNormals[e].clone();var o=new THREE.Geometry;for(o.faces=this.faces,e=0,t=this.morphTargets.length;t>e;e++){if(!this.morphNormals[e]){this.morphNormals[e]={},this.morphNormals[e].faceNormals=[],this.morphNormals[e].vertexNormals=[],n=this.morphNormals[e].faceNormals;var a,s,h=this.morphNormals[e].vertexNormals;for(r=0,i=this.faces.length;i>r;r++)a=new THREE.Vector3,s={a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3},n.push(a),h.push(s)}for(h=this.morphNormals[e],o.vertices=this.morphTargets[e].vertices,o.computeFaceNormals(),o.computeVertexNormals(),r=0,i=this.faces.length;i>r;r++)n=this.faces[r],a=h.faceNormals[r],s=h.vertexNormals[r],a.copy(n.normal),s.a.copy(n.vertexNormals[0]),s.b.copy(n.vertexNormals[1]),s.c.copy(n.vertexNormals[2])}for(r=0,i=this.faces.length;i>r;r++)n=this.faces[r],n.normal=n.__originalFaceNormal,n.vertexNormals=n.__originalVertexNormals},computeTangents:function(){var e,t,r,i,n,o,a,s,h,l,c,u,E,p,d,f,m,T=[],g=[];r=new THREE.Vector3;var R=new THREE.Vector3,y=new THREE.Vector3,v=new THREE.Vector3,H=new THREE.Vector3;for(e=0,t=this.vertices.length;t>e;e++)T[e]=new THREE.Vector3,g[e]=new THREE.Vector3;for(e=0,t=this.faces.length;t>e;e++)n=this.faces[e],o=this.faceVertexUvs[0][e],i=n.a,m=n.b,n=n.c,a=this.vertices[i],s=this.vertices[m],h=this.vertices[n],l=o[0],c=o[1],u=o[2],o=s.x-a.x,E=h.x-a.x,p=s.y-a.y,d=h.y-a.y,s=s.z-a.z,a=h.z-a.z,h=c.x-l.x,f=u.x-l.x,c=c.y-l.y,l=u.y-l.y,u=1/(h*l-f*c),r.set((l*o-c*E)*u,(l*p-c*d)*u,(l*s-c*a)*u),R.set((h*E-f*o)*u,(h*d-f*p)*u,(h*a-f*s)*u),T[i].add(r),T[m].add(r),T[n].add(r),g[i].add(R),g[m].add(R),g[n].add(R);for(R=["a","b","c","d"],e=0,t=this.faces.length;t>e;e++)for(n=this.faces[e],r=0;r<Math.min(n.vertexNormals.length,3);r++)H.copy(n.vertexNormals[r]),i=n[R[r]],m=T[i],y.copy(m),y.sub(H.multiplyScalar(H.dot(m))).normalize(),v.crossVectors(n.vertexNormals[r],m),i=v.dot(g[i]),i=0>i?-1:1,n.vertexTangents[r]=new THREE.Vector4(y.x,y.y,y.z,i);this.hasTangents=!0},computeLineDistances:function(){for(var e=0,t=this.vertices,r=0,i=t.length;i>r;r++)r>0&&(e+=t[r].distanceTo(t[r-1])),this.lineDistances[r]=e},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere),this.boundingSphere.setFromPoints(this.vertices)},merge:function(e,t,r){if(!1==e instanceof THREE.Geometry)THREE.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",e);else{var i,n=this.vertices.length,o=this.vertices,a=e.vertices,s=this.faces,h=e.faces,l=this.faceVertexUvs[0];e=e.faceVertexUvs[0],void 0===r&&(r=0),void 0!==t&&(i=(new THREE.Matrix3).getNormalMatrix(t));for(var c=0,u=a.length;u>c;c++){var E=a[c].clone();void 0!==t&&E.applyMatrix4(t),o.push(E)}for(c=0,u=h.length;u>c;c++){var p,a=h[c],d=a.vertexNormals,f=a.vertexColors,E=new THREE.Face3(a.a+n,a.b+n,a.c+n);for(E.normal.copy(a.normal),void 0!==i&&E.normal.applyMatrix3(i).normalize(),t=0,o=d.length;o>t;t++)p=d[t].clone(),void 0!==i&&p.applyMatrix3(i).normalize(),E.vertexNormals.push(p);for(E.color.copy(a.color),t=0,o=f.length;o>t;t++)p=f[t],E.vertexColors.push(p.clone());E.materialIndex=a.materialIndex+r,s.push(E)}for(c=0,u=e.length;u>c;c++)if(r=e[c],i=[],void 0!==r){for(t=0,o=r.length;o>t;t++)i.push(r[t].clone());l.push(i)}}},mergeMesh:function(e){!1==e instanceof THREE.Mesh?THREE.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",e):(e.matrixAutoUpdate&&e.updateMatrix(),this.merge(e.geometry,e.matrix))},mergeVertices:function(){var e,t,r,i={},n=[],o=[],a=Math.pow(10,4);for(t=0,r=this.vertices.length;r>t;t++)e=this.vertices[t],e=Math.round(e.x*a)+"_"+Math.round(e.y*a)+"_"+Math.round(e.z*a),void 0===i[e]?(i[e]=t,n.push(this.vertices[t]),o[t]=n.length-1):o[t]=o[i[e]];for(i=[],t=0,r=this.faces.length;r>t;t++)for(a=this.faces[t],a.a=o[a.a],a.b=o[a.b],a.c=o[a.c],a=[a.a,a.b,a.c],e=0;3>e;e++)if(a[e]==a[(e+1)%3]){i.push(t);break}for(t=i.length-1;t>=0;t--)for(a=i[t],this.faces.splice(a,1),o=0,r=this.faceVertexUvs.length;r>o;o++)this.faceVertexUvs[o].splice(a,1);return t=this.vertices.length-n.length,this.vertices=n,t},toJSON:function(){function e(e,t,r){return r?e|1<<t:e&~(1<<t)}function t(e){var t=e.x.toString()+e.y.toString()+e.z.toString();return void 0!==l[t]?l[t]:(l[t]=h.length/3,h.push(e.x,e.y,e.z),l[t])}function r(e){var t=e.r.toString()+e.g.toString()+e.b.toString();return void 0!==u[t]?u[t]:(u[t]=c.length,c.push(e.getHex()),u[t])}function i(e){var t=e.x.toString()+e.y.toString();return void 0!==p[t]?p[t]:(p[t]=E.length/2,E.push(e.x,e.y),p[t])}var n={metadata:{version:4,type:"BufferGeometry",generator:"BufferGeometryExporter"},uuid:this.uuid,type:this.type};if(""!==this.name&&(n.name=this.name),void 0!==this.parameters){var o,a=this.parameters;for(o in a)void 0!==a[o]&&(n[o]=a[o]);return n}for(a=[],o=0;o<this.vertices.length;o++){var s=this.vertices[o];a.push(s.x,s.y,s.z)}var s=[],h=[],l={},c=[],u={},E=[],p={};for(o=0;o<this.faces.length;o++){var d=this.faces[o],f=void 0!==this.faceVertexUvs[0][o],m=0<d.normal.length(),T=0<d.vertexNormals.length,g=1!==d.color.r||1!==d.color.g||1!==d.color.b,R=0<d.vertexColors.length,y=0,y=e(y,0,0),y=e(y,1,!1),y=e(y,2,!1),y=e(y,3,f),y=e(y,4,m),y=e(y,5,T),y=e(y,6,g),y=e(y,7,R);s.push(y),s.push(d.a,d.b,d.c),f&&(f=this.faceVertexUvs[0][o],s.push(i(f[0]),i(f[1]),i(f[2]))),m&&s.push(t(d.normal)),T&&(m=d.vertexNormals,s.push(t(m[0]),t(m[1]),t(m[2]))),g&&s.push(r(d.color)),R&&(d=d.vertexColors,s.push(r(d[0]),r(d[1]),r(d[2])))}return n.data={},n.data.vertices=a,n.data.normals=h,0<c.length&&(n.data.colors=c),0<E.length&&(n.data.uvs=[E]),n.data.faces=s,n},clone:function(){for(var e=new THREE.Geometry,t=this.vertices,r=0,i=t.length;i>r;r++)e.vertices.push(t[r].clone());for(t=this.faces,r=0,i=t.length;i>r;r++)e.faces.push(t[r].clone());for(r=0,i=this.faceVertexUvs.length;i>r;r++){t=this.faceVertexUvs[r],void 0===e.faceVertexUvs[r]&&(e.faceVertexUvs[r]=[]);for(var n=0,o=t.length;o>n;n++){for(var a=t[n],s=[],h=0,l=a.length;l>h;h++)s.push(a[h].clone());e.faceVertexUvs[r].push(s)}}return e},dispose:function(){this.dispatchEvent({type:"dispose"})}},THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype),THREE.GeometryIdCount=0,THREE.Camera=function(){THREE.Object3D.call(this),this.type="Camera",this.matrixWorldInverse=new THREE.Matrix4,this.projectionMatrix=new THREE.Matrix4},THREE.Camera.prototype=Object.create(THREE.Object3D.prototype),THREE.Camera.prototype.constructor=THREE.Camera,THREE.Camera.prototype.getWorldDirection=function(){var e=new THREE.Quaternion;return function(t){return t=t||new THREE.Vector3,this.getWorldQuaternion(e),t.set(0,0,-1).applyQuaternion(e)}}(),THREE.Camera.prototype.lookAt=function(){var e=new THREE.Matrix4;return function(t){e.lookAt(this.position,t,this.up),this.quaternion.setFromRotationMatrix(e)}}(),THREE.Camera.prototype.clone=function(e){return void 0===e&&(e=new THREE.Camera),THREE.Object3D.prototype.clone.call(this,e),e.matrixWorldInverse.copy(this.matrixWorldInverse),e.projectionMatrix.copy(this.projectionMatrix),e},THREE.CubeCamera=function(e,t,r){THREE.Object3D.call(this),this.type="CubeCamera";var i=new THREE.PerspectiveCamera(90,1,e,t);i.up.set(0,-1,0),i.lookAt(new THREE.Vector3(1,0,0)),this.add(i);var n=new THREE.PerspectiveCamera(90,1,e,t);n.up.set(0,-1,0),n.lookAt(new THREE.Vector3(-1,0,0)),this.add(n);var o=new THREE.PerspectiveCamera(90,1,e,t);o.up.set(0,0,1),o.lookAt(new THREE.Vector3(0,1,0)),this.add(o);var a=new THREE.PerspectiveCamera(90,1,e,t);a.up.set(0,0,-1),a.lookAt(new THREE.Vector3(0,-1,0)),this.add(a);var s=new THREE.PerspectiveCamera(90,1,e,t);s.up.set(0,-1,0),s.lookAt(new THREE.Vector3(0,0,1)),this.add(s);var h=new THREE.PerspectiveCamera(90,1,e,t);h.up.set(0,-1,0),h.lookAt(new THREE.Vector3(0,0,-1)),this.add(h),this.renderTarget=new THREE.WebGLRenderTargetCube(r,r,{format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter}),this.updateCubeMap=function(e,t){var r=this.renderTarget,l=r.generateMipmaps;r.generateMipmaps=!1,r.activeCubeFace=0,e.render(t,i,r),r.activeCubeFace=1,e.render(t,n,r),r.activeCubeFace=2,e.render(t,o,r),r.activeCubeFace=3,e.render(t,a,r),r.activeCubeFace=4,e.render(t,s,r),r.generateMipmaps=l,r.activeCubeFace=5,e.render(t,h,r)}},THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype),THREE.CubeCamera.prototype.constructor=THREE.CubeCamera,THREE.OrthographicCamera=function(e,t,r,i,n,o){THREE.Camera.call(this),this.type="OrthographicCamera",this.zoom=1,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=void 0!==n?n:.1,this.far=void 0!==o?o:2e3,this.updateProjectionMatrix()},THREE.OrthographicCamera.prototype=Object.create(THREE.Camera.prototype),THREE.OrthographicCamera.prototype.constructor=THREE.OrthographicCamera,THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){var e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;this.projectionMatrix.makeOrthographic(r-e,r+e,i+t,i-t,this.near,this.far)},THREE.OrthographicCamera.prototype.clone=function(){var e=new THREE.OrthographicCamera;return THREE.Camera.prototype.clone.call(this,e),e.zoom=this.zoom,e.left=this.left,e.right=this.right,e.top=this.top,e.bottom=this.bottom,e.near=this.near,e.far=this.far,e.projectionMatrix.copy(this.projectionMatrix),e},THREE.PerspectiveCamera=function(e,t,r,i){THREE.Camera.call(this),this.type="PerspectiveCamera",this.zoom=1,this.fov=void 0!==e?e:50,this.aspect=void 0!==t?t:1,this.near=void 0!==r?r:.1,this.far=void 0!==i?i:2e3,this.updateProjectionMatrix()},THREE.PerspectiveCamera.prototype=Object.create(THREE.Camera.prototype),THREE.PerspectiveCamera.prototype.constructor=THREE.PerspectiveCamera,THREE.PerspectiveCamera.prototype.setLens=function(e,t){void 0===t&&(t=24),this.fov=2*THREE.Math.radToDeg(Math.atan(t/(2*e))),this.updateProjectionMatrix()},THREE.PerspectiveCamera.prototype.setViewOffset=function(e,t,r,i,n,o){this.fullWidth=e,this.fullHeight=t,this.x=r,this.y=i,this.width=n,this.height=o,this.updateProjectionMatrix()},THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){var e=THREE.Math.radToDeg(2*Math.atan(Math.tan(.5*THREE.Math.degToRad(this.fov))/this.zoom));if(this.fullWidth){var t=this.fullWidth/this.fullHeight,e=Math.tan(THREE.Math.degToRad(.5*e))*this.near,r=-e,i=t*r,t=Math.abs(t*e-i),r=Math.abs(e-r);this.projectionMatrix.makeFrustum(i+this.x*t/this.fullWidth,i+(this.x+this.width)*t/this.fullWidth,e-(this.y+this.height)*r/this.fullHeight,e-this.y*r/this.fullHeight,this.near,this.far)}else this.projectionMatrix.makePerspective(e,this.aspect,this.near,this.far)},THREE.PerspectiveCamera.prototype.clone=function(){var e=new THREE.PerspectiveCamera;return THREE.Camera.prototype.clone.call(this,e),e.zoom=this.zoom,e.fov=this.fov,e.aspect=this.aspect,e.near=this.near,e.far=this.far,e.projectionMatrix.copy(this.projectionMatrix),e},THREE.Light=function(e){THREE.Object3D.call(this),this.type="Light",this.color=new THREE.Color(e)},THREE.Light.prototype=Object.create(THREE.Object3D.prototype),THREE.Light.prototype.constructor=THREE.Light,THREE.Light.prototype.clone=function(e){return void 0===e&&(e=new THREE.Light),THREE.Object3D.prototype.clone.call(this,e),e.color.copy(this.color),e},THREE.AmbientLight=function(e){THREE.Light.call(this,e),this.type="AmbientLight"},THREE.AmbientLight.prototype=Object.create(THREE.Light.prototype),THREE.AmbientLight.prototype.constructor=THREE.AmbientLight,THREE.AmbientLight.prototype.clone=function(){var e=new THREE.AmbientLight;return THREE.Light.prototype.clone.call(this,e),e},THREE.AreaLight=function(e,t){THREE.Light.call(this,e),this.type="AreaLight",this.normal=new THREE.Vector3(0,-1,0),this.right=new THREE.Vector3(1,0,0),this.intensity=void 0!==t?t:1,this.height=this.width=1,this.constantAttenuation=1.5,this.linearAttenuation=.5,this.quadraticAttenuation=.1},THREE.AreaLight.prototype=Object.create(THREE.Light.prototype),THREE.AreaLight.prototype.constructor=THREE.AreaLight,THREE.DirectionalLight=function(e,t){THREE.Light.call(this,e),this.type="DirectionalLight",this.position.set(0,1,0),this.target=new THREE.Object3D,this.intensity=void 0!==t?t:1,this.onlyShadow=this.castShadow=!1,this.shadowCameraNear=50,this.shadowCameraFar=5e3,this.shadowCameraLeft=-500,this.shadowCameraTop=this.shadowCameraRight=500,this.shadowCameraBottom=-500,this.shadowCameraVisible=!1,this.shadowBias=0,this.shadowDarkness=.5,this.shadowMapHeight=this.shadowMapWidth=512,this.shadowCascade=!1,this.shadowCascadeOffset=new THREE.Vector3(0,0,-1e3),this.shadowCascadeCount=2,this.shadowCascadeBias=[0,0,0],this.shadowCascadeWidth=[512,512,512],this.shadowCascadeHeight=[512,512,512],this.shadowCascadeNearZ=[-1,.99,.998],this.shadowCascadeFarZ=[.99,.998,1],this.shadowCascadeArray=[],this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null},THREE.DirectionalLight.prototype=Object.create(THREE.Light.prototype),THREE.DirectionalLight.prototype.constructor=THREE.DirectionalLight,THREE.DirectionalLight.prototype.clone=function(){var e=new THREE.DirectionalLight;return THREE.Light.prototype.clone.call(this,e),e.target=this.target.clone(),e.intensity=this.intensity,e.castShadow=this.castShadow,e.onlyShadow=this.onlyShadow,e.shadowCameraNear=this.shadowCameraNear,e.shadowCameraFar=this.shadowCameraFar,e.shadowCameraLeft=this.shadowCameraLeft,e.shadowCameraRight=this.shadowCameraRight,e.shadowCameraTop=this.shadowCameraTop,e.shadowCameraBottom=this.shadowCameraBottom,e.shadowCameraVisible=this.shadowCameraVisible,e.shadowBias=this.shadowBias,e.shadowDarkness=this.shadowDarkness,e.shadowMapWidth=this.shadowMapWidth,e.shadowMapHeight=this.shadowMapHeight,e.shadowCascade=this.shadowCascade,e.shadowCascadeOffset.copy(this.shadowCascadeOffset),e.shadowCascadeCount=this.shadowCascadeCount,e.shadowCascadeBias=this.shadowCascadeBias.slice(0),e.shadowCascadeWidth=this.shadowCascadeWidth.slice(0),e.shadowCascadeHeight=this.shadowCascadeHeight.slice(0),e.shadowCascadeNearZ=this.shadowCascadeNearZ.slice(0),e.shadowCascadeFarZ=this.shadowCascadeFarZ.slice(0),e},THREE.HemisphereLight=function(e,t,r){THREE.Light.call(this,e),this.type="HemisphereLight",this.position.set(0,100,0),this.groundColor=new THREE.Color(t),this.intensity=void 0!==r?r:1},THREE.HemisphereLight.prototype=Object.create(THREE.Light.prototype),THREE.HemisphereLight.prototype.constructor=THREE.HemisphereLight,THREE.HemisphereLight.prototype.clone=function(){var e=new THREE.HemisphereLight;return THREE.Light.prototype.clone.call(this,e),e.groundColor.copy(this.groundColor),e.intensity=this.intensity,e},THREE.PointLight=function(e,t,r,i){THREE.Light.call(this,e),this.type="PointLight",this.intensity=void 0!==t?t:1,this.distance=void 0!==r?r:0,this.decay=void 0!==i?i:1},THREE.PointLight.prototype=Object.create(THREE.Light.prototype),THREE.PointLight.prototype.constructor=THREE.PointLight,THREE.PointLight.prototype.clone=function(){var e=new THREE.PointLight;return THREE.Light.prototype.clone.call(this,e),e.intensity=this.intensity,e.distance=this.distance,e.decay=this.decay,e},THREE.SpotLight=function(e,t,r,i,n,o){THREE.Light.call(this,e),this.type="SpotLight",this.position.set(0,1,0),this.target=new THREE.Object3D,this.intensity=void 0!==t?t:1,this.distance=void 0!==r?r:0,this.angle=void 0!==i?i:Math.PI/3,this.exponent=void 0!==n?n:10,this.decay=void 0!==o?o:1,this.onlyShadow=this.castShadow=!1,this.shadowCameraNear=50,this.shadowCameraFar=5e3,this.shadowCameraFov=50,this.shadowCameraVisible=!1,this.shadowBias=0,this.shadowDarkness=.5,this.shadowMapHeight=this.shadowMapWidth=512,this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null},THREE.SpotLight.prototype=Object.create(THREE.Light.prototype),THREE.SpotLight.prototype.constructor=THREE.SpotLight,THREE.SpotLight.prototype.clone=function(){var e=new THREE.SpotLight;return THREE.Light.prototype.clone.call(this,e),e.target=this.target.clone(),e.intensity=this.intensity,e.distance=this.distance,e.angle=this.angle,e.exponent=this.exponent,e.decay=this.decay,e.castShadow=this.castShadow,e.onlyShadow=this.onlyShadow,e.shadowCameraNear=this.shadowCameraNear,e.shadowCameraFar=this.shadowCameraFar,e.shadowCameraFov=this.shadowCameraFov,e.shadowCameraVisible=this.shadowCameraVisible,e.shadowBias=this.shadowBias,e.shadowDarkness=this.shadowDarkness,e.shadowMapWidth=this.shadowMapWidth,e.shadowMapHeight=this.shadowMapHeight,e},THREE.Cache={files:{},add:function(e,t){this.files[e]=t},get:function(e){return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},THREE.Loader=function(e){this.statusDomElement=(this.showStatus=e)?THREE.Loader.prototype.addStatusElement():null,this.imageLoader=new THREE.ImageLoader,this.onLoadStart=function(){},this.onLoadProgress=function(){},this.onLoadComplete=function(){}},THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:void 0,addStatusElement:function(){var e=document.createElement("div");return e.style.position="absolute",e.style.right="0px",e.style.top="0px",e.style.fontSize="0.8em",e.style.textAlign="left",e.style.background="rgba(0,0,0,0.25)",e.style.color="#fff",e.style.width="120px",e.style.padding="0.5em 0.5em 0.5em 0.5em",e.style.zIndex=1e3,e.innerHTML="Loading ...",e},updateProgress:function(e){var t="Loaded ",t=e.total?t+((100*e.loaded/e.total).toFixed(0)+"%"):t+((e.loaded/1024).toFixed(2)+" KB");this.statusDomElement.innerHTML=t},extractUrlBase:function(e){return e=e.split("/"),1===e.length?"./":(e.pop(),e.join("/")+"/")},initMaterials:function(e,t){for(var r=[],i=0;i<e.length;++i)r[i]=this.createMaterial(e[i],t);return r},needsTangents:function(e){for(var t=0,r=e.length;r>t;t++)if(e[t]instanceof THREE.ShaderMaterial)return!0;return!1},createMaterial:function(e,t){function r(e){return e=Math.log(e)/Math.LN2,Math.pow(2,Math.round(e))}function i(e,i,n,a,s,h,l){var c,u=t+n,E=THREE.Loader.Handlers.get(u);null!==E?c=E.load(u):(c=new THREE.Texture,E=o.imageLoader,E.crossOrigin=o.crossOrigin,E.load(u,function(e){if(!1===THREE.Math.isPowerOfTwo(e.width)||!1===THREE.Math.isPowerOfTwo(e.height)){var t=r(e.width),i=r(e.height),n=document.createElement("canvas");n.width=t,n.height=i,n.getContext("2d").drawImage(e,0,0,t,i),c.image=n}else c.image=e;c.needsUpdate=!0})),c.sourceFile=n,a&&(c.repeat.set(a[0],a[1]),1!==a[0]&&(c.wrapS=THREE.RepeatWrapping),1!==a[1]&&(c.wrapT=THREE.RepeatWrapping)),s&&c.offset.set(s[0],s[1]),h&&(n={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==n[h[0]]&&(c.wrapS=n[h[0]]),void 0!==n[h[1]]&&(c.wrapT=n[h[1]])),l&&(c.anisotropy=l),e[i]=c}function n(e){return(255*e[0]<<16)+(255*e[1]<<8)+255*e[2]}var o=this,a="MeshLambertMaterial",s={color:15658734,opacity:1,map:null,lightMap:null,normalMap:null,bumpMap:null,wireframe:!1};if(e.shading){var h=e.shading.toLowerCase();"phong"===h?a="MeshPhongMaterial":"basic"===h&&(a="MeshBasicMaterial")}return void 0!==e.blending&&void 0!==THREE[e.blending]&&(s.blending=THREE[e.blending]),void 0!==e.transparent&&(s.transparent=e.transparent),void 0!==e.opacity&&1>e.opacity&&(s.transparent=!0),void 0!==e.depthTest&&(s.depthTest=e.depthTest),void 0!==e.depthWrite&&(s.depthWrite=e.depthWrite),void 0!==e.visible&&(s.visible=e.visible),void 0!==e.flipSided&&(s.side=THREE.BackSide),void 0!==e.doubleSided&&(s.side=THREE.DoubleSide),void 0!==e.wireframe&&(s.wireframe=e.wireframe),void 0!==e.vertexColors&&("face"===e.vertexColors?s.vertexColors=THREE.FaceColors:e.vertexColors&&(s.vertexColors=THREE.VertexColors)),e.colorDiffuse?s.color=n(e.colorDiffuse):e.DbgColor&&(s.color=e.DbgColor),e.colorSpecular&&(s.specular=n(e.colorSpecular)),e.colorEmissive&&(s.emissive=n(e.colorEmissive)),void 0!==e.transparency&&(console.warn("THREE.Loader: transparency has been renamed to opacity"),e.opacity=e.transparency),void 0!==e.opacity&&(s.opacity=e.opacity),e.specularCoef&&(s.shininess=e.specularCoef),e.mapDiffuse&&t&&i(s,"map",e.mapDiffuse,e.mapDiffuseRepeat,e.mapDiffuseOffset,e.mapDiffuseWrap,e.mapDiffuseAnisotropy),e.mapLight&&t&&i(s,"lightMap",e.mapLight,e.mapLightRepeat,e.mapLightOffset,e.mapLightWrap,e.mapLightAnisotropy),e.mapBump&&t&&i(s,"bumpMap",e.mapBump,e.mapBumpRepeat,e.mapBumpOffset,e.mapBumpWrap,e.mapBumpAnisotropy),e.mapNormal&&t&&i(s,"normalMap",e.mapNormal,e.mapNormalRepeat,e.mapNormalOffset,e.mapNormalWrap,e.mapNormalAnisotropy),e.mapSpecular&&t&&i(s,"specularMap",e.mapSpecular,e.mapSpecularRepeat,e.mapSpecularOffset,e.mapSpecularWrap,e.mapSpecularAnisotropy),e.mapAlpha&&t&&i(s,"alphaMap",e.mapAlpha,e.mapAlphaRepeat,e.mapAlphaOffset,e.mapAlphaWrap,e.mapAlphaAnisotropy),e.mapBumpScale&&(s.bumpScale=e.mapBumpScale),e.mapNormalFactor&&(s.normalScale=new THREE.Vector2(e.mapNormalFactor,e.mapNormalFactor)),a=new THREE[a](s),void 0!==e.DbgName&&(a.name=e.DbgName),a}},THREE.Loader.Handlers={handlers:[],add:function(e,t){this.handlers.push(e,t)},get:function(e){for(var t=0,r=this.handlers.length;r>t;t+=2){var i=this.handlers[t+1];if(this.handlers[t].test(e))return i}return null}},THREE.XHRLoader=function(e){this.manager=void 0!==e?e:THREE.DefaultLoadingManager},THREE.XHRLoader.prototype={constructor:THREE.XHRLoader,load:function(e,t,r,i){var n=this,o=THREE.Cache.get(e);void 0!==o?t&&t(o):(o=new XMLHttpRequest,o.open("GET",e,!0),o.addEventListener("load",function(r){THREE.Cache.add(e,this.response),t&&t(this.response),n.manager.itemEnd(e)},!1),void 0!==r&&o.addEventListener("progress",function(e){r(e)},!1),void 0!==i&&o.addEventListener("error",function(e){i(e)},!1),void 0!==this.crossOrigin&&(o.crossOrigin=this.crossOrigin),void 0!==this.responseType&&(o.responseType=this.responseType),o.send(null),n.manager.itemStart(e))},setResponseType:function(e){this.responseType=e},setCrossOrigin:function(e){this.crossOrigin=e}},THREE.ImageLoader=function(e){this.manager=void 0!==e?e:THREE.DefaultLoadingManager},THREE.ImageLoader.prototype={constructor:THREE.ImageLoader,load:function(e,t,r,i){var n=this,o=THREE.Cache.get(e);return void 0===o?(o=document.createElement("img"),o.addEventListener("load",function(r){THREE.Cache.add(e,this),t&&t(this),n.manager.itemEnd(e)},!1),void 0!==r&&o.addEventListener("progress",function(e){r(e)},!1),void 0!==i&&o.addEventListener("error",function(e){i(e)},!1),void 0!==this.crossOrigin&&(o.crossOrigin=this.crossOrigin),o.src=e,n.manager.itemStart(e),o):void t(o)},setCrossOrigin:function(e){this.crossOrigin=e}},THREE.JSONLoader=function(e){THREE.Loader.call(this,e),this.withCredentials=!1},THREE.JSONLoader.prototype=Object.create(THREE.Loader.prototype),THREE.JSONLoader.prototype.constructor=THREE.JSONLoader,THREE.JSONLoader.prototype.load=function(e,t,r){r=r&&"string"==typeof r?r:this.extractUrlBase(e),this.onLoadStart(),this.loadAjaxJSON(this,e,t,r)},THREE.JSONLoader.prototype.loadAjaxJSON=function(e,t,r,i,n){var o=new XMLHttpRequest,a=0;o.onreadystatechange=function(){if(o.readyState===o.DONE)if(200===o.status||0===o.status){if(o.responseText){var s=JSON.parse(o.responseText),h=s.metadata;if(void 0!==h){if("object"===h.type)return void THREE.error("THREE.JSONLoader: "+t+" should be loaded with THREE.ObjectLoader instead.");if("scene"===h.type)return void THREE.error("THREE.JSONLoader: "+t+" seems to be a Scene. Use THREE.SceneLoader instead.")}s=e.parse(s,i),r(s.geometry,s.materials)}else THREE.error("THREE.JSONLoader: "+t+" seems to be unreachable or the file is empty.");e.onLoadComplete()}else THREE.error("THREE.JSONLoader: Couldn't load "+t+" ("+o.status+")");else o.readyState===o.LOADING?n&&(0===a&&(a=o.getResponseHeader("Content-Length")),n({total:a,loaded:o.responseText.length})):o.readyState===o.HEADERS_RECEIVED&&void 0!==n&&(a=o.getResponseHeader("Content-Length"))},o.open("GET",t,!0),o.withCredentials=this.withCredentials,o.send(null)},THREE.JSONLoader.prototype.parse=function(e,t){var r=new THREE.Geometry,i=void 0!==e.scale?1/e.scale:1;return function(t){var i,n,o,a,s,h,l,c,u,E,p,d,f,m=e.faces;h=e.vertices;var T=e.normals,g=e.colors,R=0;if(void 0!==e.uvs){for(i=0;i<e.uvs.length;i++)e.uvs[i].length&&R++;for(i=0;R>i;i++)r.faceVertexUvs[i]=[]}for(a=0,s=h.length;s>a;)i=new THREE.Vector3,i.x=h[a++]*t,i.y=h[a++]*t,i.z=h[a++]*t,r.vertices.push(i);for(a=0,s=m.length;s>a;)if(t=m[a++],u=1&t,o=2&t,i=8&t,l=16&t,E=32&t,h=64&t,t&=128,u){if(u=new THREE.Face3,u.a=m[a],u.b=m[a+1],u.c=m[a+3],p=new THREE.Face3,p.a=m[a+1],p.b=m[a+2],p.c=m[a+3],a+=4,o&&(o=m[a++],u.materialIndex=o,p.materialIndex=o),o=r.faces.length,i)for(i=0;R>i;i++)for(d=e.uvs[i],r.faceVertexUvs[i][o]=[],r.faceVertexUvs[i][o+1]=[],n=0;4>n;n++)c=m[a++],f=d[2*c],c=d[2*c+1],f=new THREE.Vector2(f,c),2!==n&&r.faceVertexUvs[i][o].push(f),0!==n&&r.faceVertexUvs[i][o+1].push(f);if(l&&(l=3*m[a++],u.normal.set(T[l++],T[l++],T[l]),p.normal.copy(u.normal)),E)for(i=0;4>i;i++)l=3*m[a++],E=new THREE.Vector3(T[l++],T[l++],T[l]),2!==i&&u.vertexNormals.push(E),0!==i&&p.vertexNormals.push(E);if(h&&(h=m[a++],h=g[h],u.color.setHex(h),p.color.setHex(h)),t)for(i=0;4>i;i++)h=m[a++],h=g[h],2!==i&&u.vertexColors.push(new THREE.Color(h)),0!==i&&p.vertexColors.push(new THREE.Color(h));r.faces.push(u),r.faces.push(p)}else{if(u=new THREE.Face3,u.a=m[a++],u.b=m[a++],u.c=m[a++],o&&(o=m[a++],u.materialIndex=o),o=r.faces.length,i)for(i=0;R>i;i++)for(d=e.uvs[i],r.faceVertexUvs[i][o]=[],n=0;3>n;n++)c=m[a++],f=d[2*c],c=d[2*c+1],f=new THREE.Vector2(f,c),r.faceVertexUvs[i][o].push(f);if(l&&(l=3*m[a++],u.normal.set(T[l++],T[l++],T[l])),E)for(i=0;3>i;i++)l=3*m[a++],E=new THREE.Vector3(T[l++],T[l++],T[l]),u.vertexNormals.push(E);if(h&&(h=m[a++],u.color.setHex(g[h])),t)for(i=0;3>i;i++)h=m[a++],u.vertexColors.push(new THREE.Color(g[h]));r.faces.push(u)}}(i),function(){var t=void 0!==e.influencesPerVertex?e.influencesPerVertex:2;if(e.skinWeights)for(var i=0,n=e.skinWeights.length;n>i;i+=t)r.skinWeights.push(new THREE.Vector4(e.skinWeights[i],t>1?e.skinWeights[i+1]:0,t>2?e.skinWeights[i+2]:0,t>3?e.skinWeights[i+3]:0));if(e.skinIndices)for(i=0,n=e.skinIndices.length;n>i;i+=t)r.skinIndices.push(new THREE.Vector4(e.skinIndices[i],t>1?e.skinIndices[i+1]:0,t>2?e.skinIndices[i+2]:0,t>3?e.skinIndices[i+3]:0));r.bones=e.bones,r.bones&&0<r.bones.length&&(r.skinWeights.length!==r.skinIndices.length||r.skinIndices.length!==r.vertices.length)&&THREE.warn("THREE.JSONLoader: When skinning, number of vertices ("+r.vertices.length+"), skinIndices ("+r.skinIndices.length+"), and skinWeights ("+r.skinWeights.length+") should match."),r.animation=e.animation,r.animations=e.animations}(),function(t){if(void 0!==e.morphTargets){var i,n,o,a,s,h;for(i=0,n=e.morphTargets.length;n>i;i++)for(r.morphTargets[i]={},r.morphTargets[i].name=e.morphTargets[i].name,r.morphTargets[i].vertices=[],s=r.morphTargets[i].vertices,h=e.morphTargets[i].vertices,o=0,a=h.length;a>o;o+=3){var l=new THREE.Vector3;l.x=h[o]*t,l.y=h[o+1]*t,l.z=h[o+2]*t,s.push(l)}}if(void 0!==e.morphColors)for(i=0,n=e.morphColors.length;n>i;i++)for(r.morphColors[i]={},r.morphColors[i].name=e.morphColors[i].name,r.morphColors[i].colors=[],a=r.morphColors[i].colors,s=e.morphColors[i].colors,t=0,o=s.length;o>t;t+=3)h=new THREE.Color(16755200),h.setRGB(s[t],s[t+1],s[t+2]),a.push(h)}(i),r.computeFaceNormals(),r.computeBoundingSphere(),void 0===e.materials||0===e.materials.length?{geometry:r}:(i=this.initMaterials(e.materials,t),this.needsTangents(i)&&r.computeTangents(),{geometry:r,materials:i})},THREE.LoadingManager=function(e,t,r){var i=this,n=0,o=0;this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(e){o++},this.itemEnd=function(e){n++,void 0!==i.onProgress&&i.onProgress(e,n,o),n===o&&void 0!==i.onLoad&&i.onLoad()}},THREE.DefaultLoadingManager=new THREE.LoadingManager,THREE.BufferGeometryLoader=function(e){this.manager=void 0!==e?e:THREE.DefaultLoadingManager},THREE.BufferGeometryLoader.prototype={constructor:THREE.BufferGeometryLoader,load:function(e,t,r,i){var n=this,o=new THREE.XHRLoader(n.manager);o.setCrossOrigin(this.crossOrigin),o.load(e,function(e){t(n.parse(JSON.parse(e)))},r,i)},setCrossOrigin:function(e){this.crossOrigin=e},parse:function(e){var t,r=new THREE.BufferGeometry,i=e.data.attributes;for(t in i){var n=i[t],o=new self[n.type](n.array);r.addAttribute(t,new THREE.BufferAttribute(o,n.itemSize))}return i=e.data.offsets,
void 0!==i&&(r.offsets=JSON.parse(JSON.stringify(i))),e=e.data.boundingSphere,void 0!==e&&(i=new THREE.Vector3,void 0!==e.center&&i.fromArray(e.center),r.boundingSphere=new THREE.Sphere(i,e.radius)),r}},THREE.MaterialLoader=function(e){this.manager=void 0!==e?e:THREE.DefaultLoadingManager},THREE.MaterialLoader.prototype={constructor:THREE.MaterialLoader,load:function(e,t,r,i){var n=this,o=new THREE.XHRLoader(n.manager);o.setCrossOrigin(this.crossOrigin),o.load(e,function(e){t(n.parse(JSON.parse(e)))},r,i)},setCrossOrigin:function(e){this.crossOrigin=e},parse:function(e){var t=new THREE[e.type];if(void 0!==e.color&&t.color.setHex(e.color),void 0!==e.emissive&&t.emissive.setHex(e.emissive),void 0!==e.specular&&t.specular.setHex(e.specular),void 0!==e.shininess&&(t.shininess=e.shininess),void 0!==e.uniforms&&(t.uniforms=e.uniforms),void 0!==e.vertexShader&&(t.vertexShader=e.vertexShader),void 0!==e.fragmentShader&&(t.fragmentShader=e.fragmentShader),void 0!==e.vertexColors&&(t.vertexColors=e.vertexColors),void 0!==e.shading&&(t.shading=e.shading),void 0!==e.blending&&(t.blending=e.blending),void 0!==e.side&&(t.side=e.side),void 0!==e.opacity&&(t.opacity=e.opacity),void 0!==e.transparent&&(t.transparent=e.transparent),void 0!==e.wireframe&&(t.wireframe=e.wireframe),void 0!==e.size&&(t.size=e.size),void 0!==e.sizeAttenuation&&(t.sizeAttenuation=e.sizeAttenuation),void 0!==e.materials)for(var r=0,i=e.materials.length;i>r;r++)t.materials.push(this.parse(e.materials[r]));return t}},THREE.ObjectLoader=function(e){this.manager=void 0!==e?e:THREE.DefaultLoadingManager,this.texturePath=""},THREE.ObjectLoader.prototype={constructor:THREE.ObjectLoader,load:function(e,t,r,i){""===this.texturePath&&(this.texturePath=e.substring(0,e.lastIndexOf("/")+1));var n=this,o=new THREE.XHRLoader(n.manager);o.setCrossOrigin(this.crossOrigin),o.load(e,function(e){n.parse(JSON.parse(e),t)},r,i)},setTexturePath:function(e){this.texturePath=e},setCrossOrigin:function(e){this.crossOrigin=e},parse:function(e,t){var r=this.parseGeometries(e.geometries),i=this.parseImages(e.images,function(){void 0!==t&&t(n)}),i=this.parseTextures(e.textures,i),i=this.parseMaterials(e.materials,i),n=this.parseObject(e.object,r,i);return void 0!==e.images&&0!==e.images.length||void 0===t||t(n),n},parseGeometries:function(e){var t={};if(void 0!==e)for(var r=new THREE.JSONLoader,i=new THREE.BufferGeometryLoader,n=0,o=e.length;o>n;n++){var a,s=e[n];switch(s.type){case"PlaneGeometry":case"PlaneBufferGeometry":a=new THREE[s.type](s.width,s.height,s.widthSegments,s.heightSegments);break;case"BoxGeometry":case"CubeGeometry":a=new THREE.BoxGeometry(s.width,s.height,s.depth,s.widthSegments,s.heightSegments,s.depthSegments);break;case"CircleGeometry":a=new THREE.CircleGeometry(s.radius,s.segments);break;case"CylinderGeometry":a=new THREE.CylinderGeometry(s.radiusTop,s.radiusBottom,s.height,s.radialSegments,s.heightSegments,s.openEnded);break;case"SphereGeometry":a=new THREE.SphereGeometry(s.radius,s.widthSegments,s.heightSegments,s.phiStart,s.phiLength,s.thetaStart,s.thetaLength);break;case"IcosahedronGeometry":a=new THREE.IcosahedronGeometry(s.radius,s.detail);break;case"TorusGeometry":a=new THREE.TorusGeometry(s.radius,s.tube,s.radialSegments,s.tubularSegments,s.arc);break;case"TorusKnotGeometry":a=new THREE.TorusKnotGeometry(s.radius,s.tube,s.radialSegments,s.tubularSegments,s.p,s.q,s.heightScale);break;case"BufferGeometry":a=i.parse(s);break;case"Geometry":a=r.parse(s.data).geometry}a.uuid=s.uuid,void 0!==s.name&&(a.name=s.name),t[s.uuid]=a}return t},parseMaterials:function(e,t){var r={};if(void 0!==e)for(var i=function(e){return void 0===t[e]&&THREE.warn("THREE.ObjectLoader: Undefined texture",e),t[e]},n=new THREE.MaterialLoader,o=0,a=e.length;a>o;o++){var s=e[o],h=n.parse(s);h.uuid=s.uuid,void 0!==s.name&&(h.name=s.name),void 0!==s.map&&(h.map=i(s.map)),void 0!==s.bumpMap&&(h.bumpMap=i(s.bumpMap),s.bumpScale&&(h.bumpScale=new THREE.Vector2(s.bumpScale,s.bumpScale))),void 0!==s.alphaMap&&(h.alphaMap=i(s.alphaMap)),void 0!==s.envMap&&(h.envMap=i(s.envMap)),void 0!==s.normalMap&&(h.normalMap=i(s.normalMap),s.normalScale&&(h.normalScale=new THREE.Vector2(s.normalScale,s.normalScale))),void 0!==s.lightMap&&(h.lightMap=i(s.lightMap)),void 0!==s.specularMap&&(h.specularMap=i(s.specularMap)),r[s.uuid]=h}return r},parseImages:function(e,t){var r=this,i={};if(void 0!==e&&0<e.length){var n=new THREE.LoadingManager(t),o=new THREE.ImageLoader(n);o.setCrossOrigin(this.crossOrigin);for(var n=function(e){return r.manager.itemStart(e),o.load(e,function(){r.manager.itemEnd(e)})},a=0,s=e.length;s>a;a++){var h=e[a],l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url)?h.url:r.texturePath+h.url;i[h.uuid]=n(l)}}return i},parseTextures:function(e,t){var r={};if(void 0!==e)for(var i=0,n=e.length;n>i;i++){var o=e[i];void 0===o.image&&THREE.warn('THREE.ObjectLoader: No "image" speficied for',o.uuid),void 0===t[o.image]&&THREE.warn("THREE.ObjectLoader: Undefined image",o.image);var a=new THREE.Texture(t[o.image]);a.needsUpdate=!0,a.uuid=o.uuid,void 0!==o.name&&(a.name=o.name),void 0!==o.repeat&&(a.repeat=new THREE.Vector2(o.repeat[0],o.repeat[1])),void 0!==o.minFilter&&(a.minFilter=THREE[o.minFilter]),void 0!==o.magFilter&&(a.magFilter=THREE[o.magFilter]),void 0!==o.anisotropy&&(a.anisotropy=o.anisotropy),o.wrap instanceof Array&&(a.wrapS=THREE[o.wrap[0]],a.wrapT=THREE[o.wrap[1]]),r[o.uuid]=a}return r},parseObject:function(){var e=new THREE.Matrix4;return function(t,r,i){var n;n=function(e){return void 0===r[e]&&THREE.warn("THREE.ObjectLoader: Undefined geometry",e),r[e]};var o=function(e){return void 0===i[e]&&THREE.warn("THREE.ObjectLoader: Undefined material",e),i[e]};switch(t.type){case"Scene":n=new THREE.Scene;break;case"PerspectiveCamera":n=new THREE.PerspectiveCamera(t.fov,t.aspect,t.near,t.far);break;case"OrthographicCamera":n=new THREE.OrthographicCamera(t.left,t.right,t.top,t.bottom,t.near,t.far);break;case"AmbientLight":n=new THREE.AmbientLight(t.color);break;case"DirectionalLight":n=new THREE.DirectionalLight(t.color,t.intensity);break;case"PointLight":n=new THREE.PointLight(t.color,t.intensity,t.distance,t.decay);break;case"SpotLight":n=new THREE.SpotLight(t.color,t.intensity,t.distance,t.angle,t.exponent,t.decay);break;case"HemisphereLight":n=new THREE.HemisphereLight(t.color,t.groundColor,t.intensity);break;case"Mesh":n=new THREE.Mesh(n(t.geometry),o(t.material));break;case"Line":n=new THREE.Line(n(t.geometry),o(t.material),t.mode);break;case"PointCloud":n=new THREE.PointCloud(n(t.geometry),o(t.material));break;case"Sprite":n=new THREE.Sprite(o(t.material));break;case"Group":n=new THREE.Group;break;default:n=new THREE.Object3D}if(n.uuid=t.uuid,void 0!==t.name&&(n.name=t.name),void 0!==t.matrix?(e.fromArray(t.matrix),e.decompose(n.position,n.quaternion,n.scale)):(void 0!==t.position&&n.position.fromArray(t.position),void 0!==t.rotation&&n.rotation.fromArray(t.rotation),void 0!==t.scale&&n.scale.fromArray(t.scale)),void 0!==t.visible&&(n.visible=t.visible),void 0!==t.userData&&(n.userData=t.userData),void 0!==t.children)for(var a in t.children)n.add(this.parseObject(t.children[a],r,i));return n}}()},THREE.TextureLoader=function(e){this.manager=void 0!==e?e:THREE.DefaultLoadingManager},THREE.TextureLoader.prototype={constructor:THREE.TextureLoader,load:function(e,t,r,i){var n=new THREE.ImageLoader(this.manager);n.setCrossOrigin(this.crossOrigin),n.load(e,function(e){e=new THREE.Texture(e),e.needsUpdate=!0,void 0!==t&&t(e)},r,i)},setCrossOrigin:function(e){this.crossOrigin=e}},THREE.DataTextureLoader=THREE.BinaryTextureLoader=function(){this._parser=null},THREE.BinaryTextureLoader.prototype={constructor:THREE.BinaryTextureLoader,load:function(e,t,r,i){var n=this,o=new THREE.DataTexture,a=new THREE.XHRLoader;return a.setResponseType("arraybuffer"),a.load(e,function(e){(e=n._parser(e))&&(void 0!==e.image?o.image=e.image:void 0!==e.data&&(o.image.width=e.width,o.image.height=e.height,o.image.data=e.data),o.wrapS=void 0!==e.wrapS?e.wrapS:THREE.ClampToEdgeWrapping,o.wrapT=void 0!==e.wrapT?e.wrapT:THREE.ClampToEdgeWrapping,o.magFilter=void 0!==e.magFilter?e.magFilter:THREE.LinearFilter,o.minFilter=void 0!==e.minFilter?e.minFilter:THREE.LinearMipMapLinearFilter,o.anisotropy=void 0!==e.anisotropy?e.anisotropy:1,void 0!==e.format&&(o.format=e.format),void 0!==e.type&&(o.type=e.type),void 0!==e.mipmaps&&(o.mipmaps=e.mipmaps),1===e.mipmapCount&&(o.minFilter=THREE.LinearFilter),o.needsUpdate=!0,t&&t(o,e))},r,i),o}},THREE.CompressedTextureLoader=function(){this._parser=null},THREE.CompressedTextureLoader.prototype={constructor:THREE.CompressedTextureLoader,load:function(e,t,r){var i=this,n=[],o=new THREE.CompressedTexture;o.image=n;var a=new THREE.XHRLoader;if(a.setResponseType("arraybuffer"),e instanceof Array){var s=0;r=function(r){a.load(e[r],function(e){e=i._parser(e,!0),n[r]={width:e.width,height:e.height,format:e.format,mipmaps:e.mipmaps},s+=1,6===s&&(1==e.mipmapCount&&(o.minFilter=THREE.LinearFilter),o.format=e.format,o.needsUpdate=!0,t&&t(o))})};for(var h=0,l=e.length;l>h;++h)r(h)}else a.load(e,function(e){if(e=i._parser(e,!0),e.isCubemap)for(var r=e.mipmaps.length/e.mipmapCount,a=0;r>a;a++){n[a]={mipmaps:[]};for(var s=0;s<e.mipmapCount;s++)n[a].mipmaps.push(e.mipmaps[a*e.mipmapCount+s]),n[a].format=e.format,n[a].width=e.width,n[a].height=e.height}else o.image.width=e.width,o.image.height=e.height,o.mipmaps=e.mipmaps;1===e.mipmapCount&&(o.minFilter=THREE.LinearFilter),o.format=e.format,o.needsUpdate=!0,t&&t(o)});return o}},THREE.Material=function(){Object.defineProperty(this,"id",{value:THREE.MaterialIdCount++}),this.uuid=THREE.Math.generateUUID(),this.name="",this.type="Material",this.side=THREE.FrontSide,this.opacity=1,this.transparent=!1,this.blending=THREE.NormalBlending,this.blendSrc=THREE.SrcAlphaFactor,this.blendDst=THREE.OneMinusSrcAlphaFactor,this.blendEquation=THREE.AddEquation,this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null,this.colorWrite=this.depthWrite=this.depthTest=!0,this.polygonOffset=!1,this.overdraw=this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0,this._needsUpdate=this.visible=!0},THREE.Material.prototype={constructor:THREE.Material,get needsUpdate(){return this._needsUpdate},set needsUpdate(e){!0===e&&this.update(),this._needsUpdate=e},setValues:function(e){if(void 0!==e)for(var t in e){var r=e[t];if(void 0===r)THREE.warn("THREE.Material: '"+t+"' parameter is undefined.");else if(t in this){var i=this[t];i instanceof THREE.Color?i.set(r):i instanceof THREE.Vector3&&r instanceof THREE.Vector3?i.copy(r):this[t]="overdraw"==t?Number(r):r}}},toJSON:function(){var e={metadata:{version:4.2,type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type};return""!==this.name&&(e.name=this.name),this instanceof THREE.MeshBasicMaterial?(e.color=this.color.getHex(),this.vertexColors!==THREE.NoColors&&(e.vertexColors=this.vertexColors),this.blending!==THREE.NormalBlending&&(e.blending=this.blending),this.side!==THREE.FrontSide&&(e.side=this.side)):this instanceof THREE.MeshLambertMaterial?(e.color=this.color.getHex(),e.emissive=this.emissive.getHex(),this.vertexColors!==THREE.NoColors&&(e.vertexColors=this.vertexColors),this.shading!==THREE.SmoothShading&&(e.shading=this.shading),this.blending!==THREE.NormalBlending&&(e.blending=this.blending),this.side!==THREE.FrontSide&&(e.side=this.side)):this instanceof THREE.MeshPhongMaterial?(e.color=this.color.getHex(),e.emissive=this.emissive.getHex(),e.specular=this.specular.getHex(),e.shininess=this.shininess,this.vertexColors!==THREE.NoColors&&(e.vertexColors=this.vertexColors),this.shading!==THREE.SmoothShading&&(e.shading=this.shading),this.blending!==THREE.NormalBlending&&(e.blending=this.blending),this.side!==THREE.FrontSide&&(e.side=this.side)):this instanceof THREE.MeshNormalMaterial?(this.blending!==THREE.NormalBlending&&(e.blending=this.blending),this.side!==THREE.FrontSide&&(e.side=this.side)):this instanceof THREE.MeshDepthMaterial?(this.blending!==THREE.NormalBlending&&(e.blending=this.blending),this.side!==THREE.FrontSide&&(e.side=this.side)):this instanceof THREE.PointCloudMaterial?(e.size=this.size,e.sizeAttenuation=this.sizeAttenuation,e.color=this.color.getHex(),this.vertexColors!==THREE.NoColors&&(e.vertexColors=this.vertexColors),this.blending!==THREE.NormalBlending&&(e.blending=this.blending)):this instanceof THREE.ShaderMaterial?(e.uniforms=this.uniforms,e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader):this instanceof THREE.SpriteMaterial&&(e.color=this.color.getHex()),1>this.opacity&&(e.opacity=this.opacity),!1!==this.transparent&&(e.transparent=this.transparent),!1!==this.wireframe&&(e.wireframe=this.wireframe),e},clone:function(e){return void 0===e&&(e=new THREE.Material),e.name=this.name,e.side=this.side,e.opacity=this.opacity,e.transparent=this.transparent,e.blending=this.blending,e.blendSrc=this.blendSrc,e.blendDst=this.blendDst,e.blendEquation=this.blendEquation,e.blendSrcAlpha=this.blendSrcAlpha,e.blendDstAlpha=this.blendDstAlpha,e.blendEquationAlpha=this.blendEquationAlpha,e.depthTest=this.depthTest,e.depthWrite=this.depthWrite,e.polygonOffset=this.polygonOffset,e.polygonOffsetFactor=this.polygonOffsetFactor,e.polygonOffsetUnits=this.polygonOffsetUnits,e.alphaTest=this.alphaTest,e.overdraw=this.overdraw,e.visible=this.visible,e},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}},THREE.EventDispatcher.prototype.apply(THREE.Material.prototype),THREE.MaterialIdCount=0,THREE.LineBasicMaterial=function(e){THREE.Material.call(this),this.type="LineBasicMaterial",this.color=new THREE.Color(16777215),this.linewidth=1,this.linejoin=this.linecap="round",this.vertexColors=THREE.NoColors,this.fog=!0,this.setValues(e)},THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype),THREE.LineBasicMaterial.prototype.constructor=THREE.LineBasicMaterial,THREE.LineBasicMaterial.prototype.clone=function(){var e=new THREE.LineBasicMaterial;return THREE.Material.prototype.clone.call(this,e),e.color.copy(this.color),e.linewidth=this.linewidth,e.linecap=this.linecap,e.linejoin=this.linejoin,e.vertexColors=this.vertexColors,e.fog=this.fog,e},THREE.LineDashedMaterial=function(e){THREE.Material.call(this),this.type="LineDashedMaterial",this.color=new THREE.Color(16777215),this.scale=this.linewidth=1,this.dashSize=3,this.gapSize=1,this.vertexColors=!1,this.fog=!0,this.setValues(e)},THREE.LineDashedMaterial.prototype=Object.create(THREE.Material.prototype),THREE.LineDashedMaterial.prototype.constructor=THREE.LineDashedMaterial,THREE.LineDashedMaterial.prototype.clone=function(){var e=new THREE.LineDashedMaterial;return THREE.Material.prototype.clone.call(this,e),e.color.copy(this.color),e.linewidth=this.linewidth,e.scale=this.scale,e.dashSize=this.dashSize,e.gapSize=this.gapSize,e.vertexColors=this.vertexColors,e.fog=this.fog,e},THREE.MeshBasicMaterial=function(e){THREE.Material.call(this),this.type="MeshBasicMaterial",this.color=new THREE.Color(16777215),this.envMap=this.alphaMap=this.specularMap=this.lightMap=this.map=null,this.combine=THREE.MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.fog=!0,this.shading=THREE.SmoothShading,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinejoin=this.wireframeLinecap="round",this.vertexColors=THREE.NoColors,this.morphTargets=this.skinning=!1,this.setValues(e)},THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype),THREE.MeshBasicMaterial.prototype.constructor=THREE.MeshBasicMaterial,THREE.MeshBasicMaterial.prototype.clone=function(){var e=new THREE.MeshBasicMaterial;return THREE.Material.prototype.clone.call(this,e),e.color.copy(this.color),e.map=this.map,e.lightMap=this.lightMap,e.specularMap=this.specularMap,e.alphaMap=this.alphaMap,e.envMap=this.envMap,e.combine=this.combine,e.reflectivity=this.reflectivity,e.refractionRatio=this.refractionRatio,e.fog=this.fog,e.shading=this.shading,e.wireframe=this.wireframe,e.wireframeLinewidth=this.wireframeLinewidth,e.wireframeLinecap=this.wireframeLinecap,e.wireframeLinejoin=this.wireframeLinejoin,e.vertexColors=this.vertexColors,e.skinning=this.skinning,e.morphTargets=this.morphTargets,e},THREE.MeshLambertMaterial=function(e){THREE.Material.call(this),this.type="MeshLambertMaterial",this.color=new THREE.Color(16777215),this.emissive=new THREE.Color(0),this.wrapAround=!1,this.wrapRGB=new THREE.Vector3(1,1,1),this.envMap=this.alphaMap=this.specularMap=this.lightMap=this.map=null,this.combine=THREE.MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.fog=!0,this.shading=THREE.SmoothShading,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinejoin=this.wireframeLinecap="round",this.vertexColors=THREE.NoColors,this.morphNormals=this.morphTargets=this.skinning=!1,this.setValues(e)},THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype),THREE.MeshLambertMaterial.prototype.constructor=THREE.MeshLambertMaterial,THREE.MeshLambertMaterial.prototype.clone=function(){var e=new THREE.MeshLambertMaterial;return THREE.Material.prototype.clone.call(this,e),e.color.copy(this.color),e.emissive.copy(this.emissive),e.wrapAround=this.wrapAround,e.wrapRGB.copy(this.wrapRGB),e.map=this.map,e.lightMap=this.lightMap,e.specularMap=this.specularMap,e.alphaMap=this.alphaMap,e.envMap=this.envMap,e.combine=this.combine,e.reflectivity=this.reflectivity,e.refractionRatio=this.refractionRatio,e.fog=this.fog,e.shading=this.shading,e.wireframe=this.wireframe,e.wireframeLinewidth=this.wireframeLinewidth,e.wireframeLinecap=this.wireframeLinecap,e.wireframeLinejoin=this.wireframeLinejoin,e.vertexColors=this.vertexColors,e.skinning=this.skinning,e.morphTargets=this.morphTargets,e.morphNormals=this.morphNormals,e},THREE.MeshPhongMaterial=function(e){THREE.Material.call(this),this.type="MeshPhongMaterial",this.color=new THREE.Color(16777215),this.emissive=new THREE.Color(0),this.specular=new THREE.Color(1118481),this.shininess=30,this.wrapAround=this.metal=!1,this.wrapRGB=new THREE.Vector3(1,1,1),this.bumpMap=this.lightMap=this.map=null,this.bumpScale=1,this.normalMap=null,this.normalScale=new THREE.Vector2(1,1),this.envMap=this.alphaMap=this.specularMap=null,this.combine=THREE.MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.fog=!0,this.shading=THREE.SmoothShading,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinejoin=this.wireframeLinecap="round",this.vertexColors=THREE.NoColors,this.morphNormals=this.morphTargets=this.skinning=!1,this.setValues(e)},THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype),THREE.MeshPhongMaterial.prototype.constructor=THREE.MeshPhongMaterial,THREE.MeshPhongMaterial.prototype.clone=function(){var e=new THREE.MeshPhongMaterial;return THREE.Material.prototype.clone.call(this,e),e.color.copy(this.color),e.emissive.copy(this.emissive),e.specular.copy(this.specular),e.shininess=this.shininess,e.metal=this.metal,e.wrapAround=this.wrapAround,e.wrapRGB.copy(this.wrapRGB),e.map=this.map,e.lightMap=this.lightMap,e.bumpMap=this.bumpMap,e.bumpScale=this.bumpScale,e.normalMap=this.normalMap,e.normalScale.copy(this.normalScale),e.specularMap=this.specularMap,e.alphaMap=this.alphaMap,e.envMap=this.envMap,e.combine=this.combine,e.reflectivity=this.reflectivity,e.refractionRatio=this.refractionRatio,e.fog=this.fog,e.shading=this.shading,e.wireframe=this.wireframe,e.wireframeLinewidth=this.wireframeLinewidth,e.wireframeLinecap=this.wireframeLinecap,e.wireframeLinejoin=this.wireframeLinejoin,e.vertexColors=this.vertexColors,e.skinning=this.skinning,e.morphTargets=this.morphTargets,e.morphNormals=this.morphNormals,e},THREE.MeshDepthMaterial=function(e){THREE.Material.call(this),this.type="MeshDepthMaterial",this.wireframe=this.morphTargets=!1,this.wireframeLinewidth=1,this.setValues(e)},THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype),THREE.MeshDepthMaterial.prototype.constructor=THREE.MeshDepthMaterial,THREE.MeshDepthMaterial.prototype.clone=function(){var e=new THREE.MeshDepthMaterial;return THREE.Material.prototype.clone.call(this,e),e.wireframe=this.wireframe,e.wireframeLinewidth=this.wireframeLinewidth,e},THREE.MeshNormalMaterial=function(e){THREE.Material.call(this,e),this.type="MeshNormalMaterial",this.wireframe=!1,this.wireframeLinewidth=1,this.morphTargets=!1,this.setValues(e)},THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype),THREE.MeshNormalMaterial.prototype.constructor=THREE.MeshNormalMaterial,THREE.MeshNormalMaterial.prototype.clone=function(){var e=new THREE.MeshNormalMaterial;return THREE.Material.prototype.clone.call(this,e),e.wireframe=this.wireframe,e.wireframeLinewidth=this.wireframeLinewidth,e},THREE.MeshFaceMaterial=function(e){this.uuid=THREE.Math.generateUUID(),this.type="MeshFaceMaterial",this.materials=e instanceof Array?e:[]},THREE.MeshFaceMaterial.prototype={constructor:THREE.MeshFaceMaterial,toJSON:function(){for(var e={metadata:{version:4.2,type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type,materials:[]},t=0,r=this.materials.length;r>t;t++)e.materials.push(this.materials[t].toJSON());return e},clone:function(){for(var e=new THREE.MeshFaceMaterial,t=0;t<this.materials.length;t++)e.materials.push(this.materials[t].clone());return e}},THREE.PointCloudMaterial=function(e){THREE.Material.call(this),this.type="PointCloudMaterial",this.color=new THREE.Color(16777215),this.map=null,this.size=1,this.sizeAttenuation=!0,this.vertexColors=THREE.NoColors,this.fog=!0,this.setValues(e)},THREE.PointCloudMaterial.prototype=Object.create(THREE.Material.prototype),THREE.PointCloudMaterial.prototype.constructor=THREE.PointCloudMaterial,THREE.PointCloudMaterial.prototype.clone=function(){var e=new THREE.PointCloudMaterial;return THREE.Material.prototype.clone.call(this,e),e.color.copy(this.color),e.map=this.map,e.size=this.size,e.sizeAttenuation=this.sizeAttenuation,e.vertexColors=this.vertexColors,e.fog=this.fog,e},THREE.ParticleBasicMaterial=function(e){return THREE.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointCloudMaterial."),new THREE.PointCloudMaterial(e)},THREE.ParticleSystemMaterial=function(e){return THREE.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointCloudMaterial."),new THREE.PointCloudMaterial(e)},THREE.ShaderMaterial=function(e){THREE.Material.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.attributes=null,this.vertexShader="void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",this.fragmentShader="void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",this.shading=THREE.SmoothShading,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.lights=this.fog=!1,this.vertexColors=THREE.NoColors,this.morphNormals=this.morphTargets=this.skinning=!1,this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.setValues(e)},THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype),THREE.ShaderMaterial.prototype.constructor=THREE.ShaderMaterial,THREE.ShaderMaterial.prototype.clone=function(){var e=new THREE.ShaderMaterial;return THREE.Material.prototype.clone.call(this,e),e.fragmentShader=this.fragmentShader,e.vertexShader=this.vertexShader,e.uniforms=THREE.UniformsUtils.clone(this.uniforms),e.attributes=this.attributes,e.defines=this.defines,e.shading=this.shading,e.wireframe=this.wireframe,e.wireframeLinewidth=this.wireframeLinewidth,e.fog=this.fog,e.lights=this.lights,e.vertexColors=this.vertexColors,e.skinning=this.skinning,e.morphTargets=this.morphTargets,e.morphNormals=this.morphNormals,e},THREE.RawShaderMaterial=function(e){THREE.ShaderMaterial.call(this,e),this.type="RawShaderMaterial"},THREE.RawShaderMaterial.prototype=Object.create(THREE.ShaderMaterial.prototype),THREE.RawShaderMaterial.prototype.constructor=THREE.RawShaderMaterial,THREE.RawShaderMaterial.prototype.clone=function(){var e=new THREE.RawShaderMaterial;return THREE.ShaderMaterial.prototype.clone.call(this,e),e},THREE.SpriteMaterial=function(e){THREE.Material.call(this),this.type="SpriteMaterial",this.color=new THREE.Color(16777215),this.map=null,this.rotation=0,this.fog=!1,this.setValues(e)},THREE.SpriteMaterial.prototype=Object.create(THREE.Material.prototype),THREE.SpriteMaterial.prototype.constructor=THREE.SpriteMaterial,THREE.SpriteMaterial.prototype.clone=function(){var e=new THREE.SpriteMaterial;return THREE.Material.prototype.clone.call(this,e),e.color.copy(this.color),e.map=this.map,e.rotation=this.rotation,e.fog=this.fog,e},THREE.Texture=function(e,t,r,i,n,o,a,s,h){Object.defineProperty(this,"id",{value:THREE.TextureIdCount++}),this.uuid=THREE.Math.generateUUID(),this.sourceFile=this.name="",this.image=void 0!==e?e:THREE.Texture.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=void 0!==t?t:THREE.Texture.DEFAULT_MAPPING,this.wrapS=void 0!==r?r:THREE.ClampToEdgeWrapping,this.wrapT=void 0!==i?i:THREE.ClampToEdgeWrapping,this.magFilter=void 0!==n?n:THREE.LinearFilter,this.minFilter=void 0!==o?o:THREE.LinearMipMapLinearFilter,this.anisotropy=void 0!==h?h:1,this.format=void 0!==a?a:THREE.RGBAFormat,this.type=void 0!==s?s:THREE.UnsignedByteType,this.offset=new THREE.Vector2(0,0),this.repeat=new THREE.Vector2(1,1),this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this._needsUpdate=!1,this.onUpdate=null},THREE.Texture.DEFAULT_IMAGE=void 0,THREE.Texture.DEFAULT_MAPPING=THREE.UVMapping,THREE.Texture.prototype={constructor:THREE.Texture,get needsUpdate(){return this._needsUpdate},set needsUpdate(e){!0===e&&this.update(),this._needsUpdate=e},clone:function(e){return void 0===e&&(e=new THREE.Texture),e.image=this.image,e.mipmaps=this.mipmaps.slice(0),e.mapping=this.mapping,e.wrapS=this.wrapS,e.wrapT=this.wrapT,e.magFilter=this.magFilter,e.minFilter=this.minFilter,e.anisotropy=this.anisotropy,e.format=this.format,e.type=this.type,e.offset.copy(this.offset),e.repeat.copy(this.repeat),e.generateMipmaps=this.generateMipmaps,e.premultiplyAlpha=this.premultiplyAlpha,e.flipY=this.flipY,e.unpackAlignment=this.unpackAlignment,e},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}},THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype),THREE.TextureIdCount=0,THREE.CubeTexture=function(e,t,r,i,n,o,a,s,h){t=void 0!==t?t:THREE.CubeReflectionMapping,THREE.Texture.call(this,e,t,r,i,n,o,a,s,h),this.images=e},THREE.CubeTexture.prototype=Object.create(THREE.Texture.prototype),THREE.CubeTexture.prototype.constructor=THREE.CubeTexture,THREE.CubeTexture.clone=function(e){return void 0===e&&(e=new THREE.CubeTexture),THREE.Texture.prototype.clone.call(this,e),e.images=this.images,e},THREE.CompressedTexture=function(e,t,r,i,n,o,a,s,h,l,c){THREE.Texture.call(this,null,o,a,s,h,l,i,n,c),this.image={width:t,height:r},this.mipmaps=e,this.generateMipmaps=this.flipY=!1},THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype),THREE.CompressedTexture.prototype.constructor=THREE.CompressedTexture,THREE.CompressedTexture.prototype.clone=function(){var e=new THREE.CompressedTexture;return THREE.Texture.prototype.clone.call(this,e),e},THREE.DataTexture=function(e,t,r,i,n,o,a,s,h,l,c){THREE.Texture.call(this,null,o,a,s,h,l,i,n,c),this.image={data:e,width:t,height:r}},THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype),THREE.DataTexture.prototype.constructor=THREE.DataTexture,THREE.DataTexture.prototype.clone=function(){var e=new THREE.DataTexture;return THREE.Texture.prototype.clone.call(this,e),e},THREE.VideoTexture=function(e,t,r,i,n,o,a,s,h){THREE.Texture.call(this,e,t,r,i,n,o,a,s,h),this.generateMipmaps=!1;var l=this,c=function(){requestAnimationFrame(c),e.readyState===e.HAVE_ENOUGH_DATA&&(l.needsUpdate=!0)};c()},THREE.VideoTexture.prototype=Object.create(THREE.Texture.prototype),THREE.VideoTexture.prototype.constructor=THREE.VideoTexture,THREE.Group=function(){THREE.Object3D.call(this),this.type="Group"},THREE.Group.prototype=Object.create(THREE.Object3D.prototype),THREE.Group.prototype.constructor=THREE.Group,THREE.PointCloud=function(e,t){THREE.Object3D.call(this),this.type="PointCloud",this.geometry=void 0!==e?e:new THREE.Geometry,this.material=void 0!==t?t:new THREE.PointCloudMaterial({color:16777215*Math.random()})},THREE.PointCloud.prototype=Object.create(THREE.Object3D.prototype),THREE.PointCloud.prototype.constructor=THREE.PointCloud,THREE.PointCloud.prototype.raycast=function(){var e=new THREE.Matrix4,t=new THREE.Ray;return function(r,i){var n=this,o=n.geometry,a=r.params.PointCloud.threshold;if(e.getInverse(this.matrixWorld),t.copy(r.ray).applyMatrix4(e),null===o.boundingBox||!1!==t.isIntersectionBox(o.boundingBox)){var s=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=new THREE.Vector3,a=function(e,o){var a=t.distanceToPoint(e);if(s>a){var h=t.closestPointToPoint(e);h.applyMatrix4(n.matrixWorld);var l=r.ray.origin.distanceTo(h);i.push({distance:l,distanceToRay:a,point:h.clone(),index:o,face:null,object:n})}};if(o instanceof THREE.BufferGeometry){var l=o.attributes,c=l.position.array;if(void 0!==l.index){var l=l.index.array,u=o.offsets;0===u.length&&(u=[{start:0,count:l.length,index:0}]);for(var E=0,p=u.length;p>E;++E)for(var d=u[E].start,f=u[E].index,o=d,d=d+u[E].count;d>o;o++){var m=f+l[o];h.fromArray(c,3*m),a(h,m)}}else for(l=c.length/3,o=0;l>o;o++)h.set(c[3*o],c[3*o+1],c[3*o+2]),a(h,o)}else for(h=this.geometry.vertices,o=0;o<h.length;o++)a(h[o],o)}}}(),THREE.PointCloud.prototype.clone=function(e){return void 0===e&&(e=new THREE.PointCloud(this.geometry,this.material)),THREE.Object3D.prototype.clone.call(this,e),e},THREE.ParticleSystem=function(e,t){return THREE.warn("THREE.ParticleSystem has been renamed to THREE.PointCloud."),new THREE.PointCloud(e,t)},THREE.Line=function(e,t,r){THREE.Object3D.call(this),this.type="Line",this.geometry=void 0!==e?e:new THREE.Geometry,this.material=void 0!==t?t:new THREE.LineBasicMaterial({color:16777215*Math.random()}),this.mode=void 0!==r?r:THREE.LineStrip},THREE.LineStrip=0,THREE.LinePieces=1,THREE.Line.prototype=Object.create(THREE.Object3D.prototype),THREE.Line.prototype.constructor=THREE.Line,THREE.Line.prototype.raycast=function(){var e=new THREE.Matrix4,t=new THREE.Ray,r=new THREE.Sphere;return function(i,n){var o=i.linePrecision,o=o*o,a=this.geometry;if(null===a.boundingSphere&&a.computeBoundingSphere(),r.copy(a.boundingSphere),r.applyMatrix4(this.matrixWorld),!1!==i.ray.isIntersectionSphere(r)){e.getInverse(this.matrixWorld),t.copy(i.ray).applyMatrix4(e);var s=new THREE.Vector3,h=new THREE.Vector3,l=new THREE.Vector3,c=new THREE.Vector3,u=this.mode===THREE.LineStrip?1:2;if(a instanceof THREE.BufferGeometry){var E=a.attributes;if(void 0!==E.index){var p=E.index.array,E=E.position.array,d=a.offsets;0===d.length&&(d=[{start:0,count:p.length,index:0}]);for(var f=0;f<d.length;f++)for(var m=d[f].start,T=d[f].count,g=d[f].index,a=m;m+T-1>a;a+=u){var R=g+p[a+1];s.fromArray(E,3*(g+p[a])),h.fromArray(E,3*R),R=t.distanceSqToSegment(s,h,c,l),R>o||(R=t.origin.distanceTo(c),R<i.near||R>i.far||n.push({distance:R,point:l.clone().applyMatrix4(this.matrixWorld),index:a,offsetIndex:f,face:null,faceIndex:null,object:this}))}}else for(E=E.position.array,a=0;a<E.length/3-1;a+=u)s.fromArray(E,3*a),h.fromArray(E,3*a+3),R=t.distanceSqToSegment(s,h,c,l),R>o||(R=t.origin.distanceTo(c),R<i.near||R>i.far||n.push({distance:R,point:l.clone().applyMatrix4(this.matrixWorld),index:a,face:null,faceIndex:null,object:this}))}else if(a instanceof THREE.Geometry)for(s=a.vertices,h=s.length,a=0;h-1>a;a+=u)R=t.distanceSqToSegment(s[a],s[a+1],c,l),R>o||(R=t.origin.distanceTo(c),R<i.near||R>i.far||n.push({distance:R,point:l.clone().applyMatrix4(this.matrixWorld),index:a,face:null,faceIndex:null,object:this}))}}}(),THREE.Line.prototype.clone=function(e){return void 0===e&&(e=new THREE.Line(this.geometry,this.material,this.mode)),THREE.Object3D.prototype.clone.call(this,e),
e},THREE.Mesh=function(e,t){THREE.Object3D.call(this),this.type="Mesh",this.geometry=void 0!==e?e:new THREE.Geometry,this.material=void 0!==t?t:new THREE.MeshBasicMaterial({color:16777215*Math.random()}),this.updateMorphTargets()},THREE.Mesh.prototype=Object.create(THREE.Object3D.prototype),THREE.Mesh.prototype.constructor=THREE.Mesh,THREE.Mesh.prototype.updateMorphTargets=function(){if(void 0!==this.geometry.morphTargets&&0<this.geometry.morphTargets.length){this.morphTargetBase=-1,this.morphTargetForcedOrder=[],this.morphTargetInfluences=[],this.morphTargetDictionary={};for(var e=0,t=this.geometry.morphTargets.length;t>e;e++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[this.geometry.morphTargets[e].name]=e}},THREE.Mesh.prototype.getMorphTargetIndexByName=function(e){return void 0!==this.morphTargetDictionary[e]?this.morphTargetDictionary[e]:(THREE.warn("THREE.Mesh.getMorphTargetIndexByName: morph target "+e+" does not exist. Returning 0."),0)},THREE.Mesh.prototype.raycast=function(){var e=new THREE.Matrix4,t=new THREE.Ray,r=new THREE.Sphere,i=new THREE.Vector3,n=new THREE.Vector3,o=new THREE.Vector3;return function(a,s){var h=this.geometry;if(null===h.boundingSphere&&h.computeBoundingSphere(),r.copy(h.boundingSphere),r.applyMatrix4(this.matrixWorld),!1!==a.ray.isIntersectionSphere(r)&&(e.getInverse(this.matrixWorld),t.copy(a.ray).applyMatrix4(e),null===h.boundingBox||!1!==t.isIntersectionBox(h.boundingBox)))if(h instanceof THREE.BufferGeometry){var l=this.material;if(void 0!==l){var c,u,E=h.attributes,p=a.precision;if(void 0!==E.index){var d=E.index.array,f=E.position.array,m=h.offsets;0===m.length&&(m=[{start:0,count:d.length,index:0}]);for(var T=0,g=m.length;g>T;++T)for(var E=m[T].start,R=m[T].index,h=E,y=E+m[T].count;y>h;h+=3){E=R+d[h],c=R+d[h+1],u=R+d[h+2],i.fromArray(f,3*E),n.fromArray(f,3*c),o.fromArray(f,3*u);var v=l.side===THREE.BackSide?t.intersectTriangle(o,n,i,!0):t.intersectTriangle(i,n,o,l.side!==THREE.DoubleSide);if(null!==v){v.applyMatrix4(this.matrixWorld);var H=a.ray.origin.distanceTo(v);p>H||H<a.near||H>a.far||s.push({distance:H,point:v,face:new THREE.Face3(E,c,u,THREE.Triangle.normal(i,n,o)),faceIndex:null,object:this})}}}else for(f=E.position.array,d=h=0,y=f.length;y>h;h+=3,d+=9)E=h,c=h+1,u=h+2,i.fromArray(f,d),n.fromArray(f,d+3),o.fromArray(f,d+6),v=l.side===THREE.BackSide?t.intersectTriangle(o,n,i,!0):t.intersectTriangle(i,n,o,l.side!==THREE.DoubleSide),null!==v&&(v.applyMatrix4(this.matrixWorld),H=a.ray.origin.distanceTo(v),p>H||H<a.near||H>a.far||s.push({distance:H,point:v,face:new THREE.Face3(E,c,u,THREE.Triangle.normal(i,n,o)),faceIndex:null,object:this}))}}else if(h instanceof THREE.Geometry)for(d=this.material instanceof THREE.MeshFaceMaterial,f=!0===d?this.material.materials:null,p=a.precision,m=h.vertices,T=0,g=h.faces.length;g>T;T++)if(R=h.faces[T],l=!0===d?f[R.materialIndex]:this.material,void 0!==l){if(E=m[R.a],c=m[R.b],u=m[R.c],!0===l.morphTargets){v=h.morphTargets,H=this.morphTargetInfluences,i.set(0,0,0),n.set(0,0,0),o.set(0,0,0);for(var y=0,x=v.length;x>y;y++){var b=H[y];if(0!==b){var w=v[y].vertices;i.x+=(w[R.a].x-E.x)*b,i.y+=(w[R.a].y-E.y)*b,i.z+=(w[R.a].z-E.z)*b,n.x+=(w[R.b].x-c.x)*b,n.y+=(w[R.b].y-c.y)*b,n.z+=(w[R.b].z-c.z)*b,o.x+=(w[R.c].x-u.x)*b,o.y+=(w[R.c].y-u.y)*b,o.z+=(w[R.c].z-u.z)*b}}i.add(E),n.add(c),o.add(u),E=i,c=n,u=o}v=l.side===THREE.BackSide?t.intersectTriangle(u,c,E,!0):t.intersectTriangle(E,c,u,l.side!==THREE.DoubleSide),null!==v&&(v.applyMatrix4(this.matrixWorld),H=a.ray.origin.distanceTo(v),p>H||H<a.near||H>a.far||s.push({distance:H,point:v,face:R,faceIndex:T,object:this}))}}}(),THREE.Mesh.prototype.clone=function(e,t){return void 0===e&&(e=new THREE.Mesh(this.geometry,this.material)),THREE.Object3D.prototype.clone.call(this,e,t),e},THREE.Bone=function(e){THREE.Object3D.call(this),this.type="Bone",this.skin=e},THREE.Bone.prototype=Object.create(THREE.Object3D.prototype),THREE.Bone.prototype.constructor=THREE.Bone,THREE.Skeleton=function(e,t,r){if(this.useVertexTexture=void 0!==r?r:!0,this.identityMatrix=new THREE.Matrix4,e=e||[],this.bones=e.slice(0),this.useVertexTexture?(this.boneTextureHeight=this.boneTextureWidth=e=256<this.bones.length?64:64<this.bones.length?32:16<this.bones.length?16:8,this.boneMatrices=new Float32Array(this.boneTextureWidth*this.boneTextureHeight*4),this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType),this.boneTexture.minFilter=THREE.NearestFilter,this.boneTexture.magFilter=THREE.NearestFilter,this.boneTexture.generateMipmaps=!1,this.boneTexture.flipY=!1):this.boneMatrices=new Float32Array(16*this.bones.length),void 0===t)this.calculateInverses();else if(this.bones.length===t.length)this.boneInverses=t.slice(0);else for(THREE.warn("THREE.Skeleton bonInverses is the wrong length."),this.boneInverses=[],t=0,e=this.bones.length;e>t;t++)this.boneInverses.push(new THREE.Matrix4)},THREE.Skeleton.prototype.calculateInverses=function(){this.boneInverses=[];for(var e=0,t=this.bones.length;t>e;e++){var r=new THREE.Matrix4;this.bones[e]&&r.getInverse(this.bones[e].matrixWorld),this.boneInverses.push(r)}},THREE.Skeleton.prototype.pose=function(){for(var e,t=0,r=this.bones.length;r>t;t++)(e=this.bones[t])&&e.matrixWorld.getInverse(this.boneInverses[t]);for(t=0,r=this.bones.length;r>t;t++)(e=this.bones[t])&&(e.parent?(e.matrix.getInverse(e.parent.matrixWorld),e.matrix.multiply(e.matrixWorld)):e.matrix.copy(e.matrixWorld),e.matrix.decompose(e.position,e.quaternion,e.scale))},THREE.Skeleton.prototype.update=function(){var e=new THREE.Matrix4;return function(){for(var t=0,r=this.bones.length;r>t;t++)e.multiplyMatrices(this.bones[t]?this.bones[t].matrixWorld:this.identityMatrix,this.boneInverses[t]),e.flattenToArrayOffset(this.boneMatrices,16*t);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}(),THREE.SkinnedMesh=function(e,t,r){if(THREE.Mesh.call(this,e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new THREE.Matrix4,this.bindMatrixInverse=new THREE.Matrix4,e=[],this.geometry&&void 0!==this.geometry.bones){for(var i,n,o,a,s=0,h=this.geometry.bones.length;h>s;++s)i=this.geometry.bones[s],n=i.pos,o=i.rotq,a=i.scl,t=new THREE.Bone(this),e.push(t),t.name=i.name,t.position.set(n[0],n[1],n[2]),t.quaternion.set(o[0],o[1],o[2],o[3]),void 0!==a?t.scale.set(a[0],a[1],a[2]):t.scale.set(1,1,1);for(s=0,h=this.geometry.bones.length;h>s;++s)i=this.geometry.bones[s],-1!==i.parent?e[i.parent].add(e[s]):this.add(e[s])}this.normalizeSkinWeights(),this.updateMatrixWorld(!0),this.bind(new THREE.Skeleton(e,void 0,r))},THREE.SkinnedMesh.prototype=Object.create(THREE.Mesh.prototype),THREE.SkinnedMesh.prototype.constructor=THREE.SkinnedMesh,THREE.SkinnedMesh.prototype.bind=function(e,t){this.skeleton=e,void 0===t&&(this.updateMatrixWorld(!0),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.getInverse(t)},THREE.SkinnedMesh.prototype.pose=function(){this.skeleton.pose()},THREE.SkinnedMesh.prototype.normalizeSkinWeights=function(){if(this.geometry instanceof THREE.Geometry)for(var e=0;e<this.geometry.skinIndices.length;e++){var t=this.geometry.skinWeights[e],r=1/t.lengthManhattan();1/0!==r?t.multiplyScalar(r):t.set(1)}},THREE.SkinnedMesh.prototype.updateMatrixWorld=function(e){THREE.Mesh.prototype.updateMatrixWorld.call(this,!0),"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):THREE.warn("THREE.SkinnedMesh unreckognized bindMode: "+this.bindMode)},THREE.SkinnedMesh.prototype.clone=function(e){return void 0===e&&(e=new THREE.SkinnedMesh(this.geometry,this.material,this.useVertexTexture)),THREE.Mesh.prototype.clone.call(this,e),e},THREE.MorphAnimMesh=function(e,t){THREE.Mesh.call(this,e,t),this.type="MorphAnimMesh",this.duration=1e3,this.mirroredLoop=!1,this.currentKeyframe=this.lastKeyframe=this.time=0,this.direction=1,this.directionBackwards=!1,this.setFrameRange(0,this.geometry.morphTargets.length-1)},THREE.MorphAnimMesh.prototype=Object.create(THREE.Mesh.prototype),THREE.MorphAnimMesh.prototype.constructor=THREE.MorphAnimMesh,THREE.MorphAnimMesh.prototype.setFrameRange=function(e,t){this.startKeyframe=e,this.endKeyframe=t,this.length=this.endKeyframe-this.startKeyframe+1},THREE.MorphAnimMesh.prototype.setDirectionForward=function(){this.direction=1,this.directionBackwards=!1},THREE.MorphAnimMesh.prototype.setDirectionBackward=function(){this.direction=-1,this.directionBackwards=!0},THREE.MorphAnimMesh.prototype.parseAnimations=function(){var e=this.geometry;e.animations||(e.animations={});for(var t,r=e.animations,i=/([a-z]+)_?(\d+)/,n=0,o=e.morphTargets.length;o>n;n++){var a=e.morphTargets[n].name.match(i);if(a&&1<a.length){a=a[1],r[a]||(r[a]={start:1/0,end:-(1/0)});var s=r[a];n<s.start&&(s.start=n),n>s.end&&(s.end=n),t||(t=a)}}e.firstAnimation=t},THREE.MorphAnimMesh.prototype.setAnimationLabel=function(e,t,r){this.geometry.animations||(this.geometry.animations={}),this.geometry.animations[e]={start:t,end:r}},THREE.MorphAnimMesh.prototype.playAnimation=function(e,t){var r=this.geometry.animations[e];r?(this.setFrameRange(r.start,r.end),this.duration=(r.end-r.start)/t*1e3,this.time=0):THREE.warn("THREE.MorphAnimMesh: animation["+e+"] undefined in .playAnimation()")},THREE.MorphAnimMesh.prototype.updateAnimation=function(e){var t=this.duration/this.length;this.time+=this.direction*e,this.mirroredLoop?(this.time>this.duration||0>this.time)&&(this.direction*=-1,this.time>this.duration&&(this.time=this.duration,this.directionBackwards=!0),0>this.time&&(this.time=0,this.directionBackwards=!1)):(this.time%=this.duration,0>this.time&&(this.time+=this.duration)),e=this.startKeyframe+THREE.Math.clamp(Math.floor(this.time/t),0,this.length-1),e!==this.currentKeyframe&&(this.morphTargetInfluences[this.lastKeyframe]=0,this.morphTargetInfluences[this.currentKeyframe]=1,this.morphTargetInfluences[e]=0,this.lastKeyframe=this.currentKeyframe,this.currentKeyframe=e),t=this.time%t/t,this.directionBackwards&&(t=1-t),this.morphTargetInfluences[this.currentKeyframe]=t,this.morphTargetInfluences[this.lastKeyframe]=1-t},THREE.MorphAnimMesh.prototype.interpolateTargets=function(e,t,r){for(var i=this.morphTargetInfluences,n=0,o=i.length;o>n;n++)i[n]=0;e>-1&&(i[e]=1-r),t>-1&&(i[t]=r)},THREE.MorphAnimMesh.prototype.clone=function(e){return void 0===e&&(e=new THREE.MorphAnimMesh(this.geometry,this.material)),e.duration=this.duration,e.mirroredLoop=this.mirroredLoop,e.time=this.time,e.lastKeyframe=this.lastKeyframe,e.currentKeyframe=this.currentKeyframe,e.direction=this.direction,e.directionBackwards=this.directionBackwards,THREE.Mesh.prototype.clone.call(this,e),e},THREE.LOD=function(){THREE.Object3D.call(this),this.objects=[]},THREE.LOD.prototype=Object.create(THREE.Object3D.prototype),THREE.LOD.prototype.constructor=THREE.LOD,THREE.LOD.prototype.addLevel=function(e,t){void 0===t&&(t=0),t=Math.abs(t);for(var r=0;r<this.objects.length&&!(t<this.objects[r].distance);r++);this.objects.splice(r,0,{distance:t,object:e}),this.add(e)},THREE.LOD.prototype.getObjectForDistance=function(e){for(var t=1,r=this.objects.length;r>t&&!(e<this.objects[t].distance);t++);return this.objects[t-1].object},THREE.LOD.prototype.raycast=function(){var e=new THREE.Vector3;return function(t,r){e.setFromMatrixPosition(this.matrixWorld);var i=t.ray.origin.distanceTo(e);this.getObjectForDistance(i).raycast(t,r)}}(),THREE.LOD.prototype.update=function(){var e=new THREE.Vector3,t=new THREE.Vector3;return function(r){if(1<this.objects.length){e.setFromMatrixPosition(r.matrixWorld),t.setFromMatrixPosition(this.matrixWorld),r=e.distanceTo(t),this.objects[0].object.visible=!0;for(var i=1,n=this.objects.length;n>i&&r>=this.objects[i].distance;i++)this.objects[i-1].object.visible=!1,this.objects[i].object.visible=!0;for(;n>i;i++)this.objects[i].object.visible=!1}}}(),THREE.LOD.prototype.clone=function(e){void 0===e&&(e=new THREE.LOD),THREE.Object3D.prototype.clone.call(this,e);for(var t=0,r=this.objects.length;r>t;t++){var i=this.objects[t].object.clone();i.visible=0===t,e.addLevel(i,this.objects[t].distance)}return e},THREE.Sprite=function(){var e=new Uint16Array([0,1,2,0,2,3]),t=new Float32Array([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0]),r=new Float32Array([0,0,1,0,1,1,0,1]),i=new THREE.BufferGeometry;return i.addAttribute("index",new THREE.BufferAttribute(e,1)),i.addAttribute("position",new THREE.BufferAttribute(t,3)),i.addAttribute("uv",new THREE.BufferAttribute(r,2)),function(e){THREE.Object3D.call(this),this.type="Sprite",this.geometry=i,this.material=void 0!==e?e:new THREE.SpriteMaterial}}(),THREE.Sprite.prototype=Object.create(THREE.Object3D.prototype),THREE.Sprite.prototype.constructor=THREE.Sprite,THREE.Sprite.prototype.raycast=function(){var e=new THREE.Vector3;return function(t,r){e.setFromMatrixPosition(this.matrixWorld);var i=t.ray.distanceToPoint(e);i>this.scale.x||r.push({distance:i,point:this.position,face:null,object:this})}}(),THREE.Sprite.prototype.clone=function(e){return void 0===e&&(e=new THREE.Sprite(this.material)),THREE.Object3D.prototype.clone.call(this,e),e},THREE.Particle=THREE.Sprite,THREE.LensFlare=function(e,t,r,i,n){THREE.Object3D.call(this),this.lensFlares=[],this.positionScreen=new THREE.Vector3,this.customUpdateCallback=void 0,void 0!==e&&this.add(e,t,r,i,n)},THREE.LensFlare.prototype=Object.create(THREE.Object3D.prototype),THREE.LensFlare.prototype.constructor=THREE.LensFlare,THREE.LensFlare.prototype.add=function(e,t,r,i,n,o){void 0===t&&(t=-1),void 0===r&&(r=0),void 0===o&&(o=1),void 0===n&&(n=new THREE.Color(16777215)),void 0===i&&(i=THREE.NormalBlending),r=Math.min(r,Math.max(0,r)),this.lensFlares.push({texture:e,size:t,distance:r,x:0,y:0,z:0,scale:1,rotation:1,opacity:o,color:n,blending:i})},THREE.LensFlare.prototype.updateLensFlares=function(){var e,t,r=this.lensFlares.length,i=2*-this.positionScreen.x,n=2*-this.positionScreen.y;for(e=0;r>e;e++)t=this.lensFlares[e],t.x=this.positionScreen.x+i*t.distance,t.y=this.positionScreen.y+n*t.distance,t.wantedRotation=t.x*Math.PI*.25,t.rotation+=.25*(t.wantedRotation-t.rotation)},THREE.Scene=function(){THREE.Object3D.call(this),this.type="Scene",this.overrideMaterial=this.fog=null,this.autoUpdate=!0},THREE.Scene.prototype=Object.create(THREE.Object3D.prototype),THREE.Scene.prototype.constructor=THREE.Scene,THREE.Scene.prototype.clone=function(e){return void 0===e&&(e=new THREE.Scene),THREE.Object3D.prototype.clone.call(this,e),null!==this.fog&&(e.fog=this.fog.clone()),null!==this.overrideMaterial&&(e.overrideMaterial=this.overrideMaterial.clone()),e.autoUpdate=this.autoUpdate,e.matrixAutoUpdate=this.matrixAutoUpdate,e},THREE.Fog=function(e,t,r){this.name="",this.color=new THREE.Color(e),this.near=void 0!==t?t:1,this.far=void 0!==r?r:1e3},THREE.Fog.prototype.clone=function(){return new THREE.Fog(this.color.getHex(),this.near,this.far)},THREE.FogExp2=function(e,t){this.name="",this.color=new THREE.Color(e),this.density=void 0!==t?t:25e-5},THREE.FogExp2.prototype.clone=function(){return new THREE.FogExp2(this.color.getHex(),this.density)},THREE.ShaderChunk={},THREE.ShaderChunk.common="#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\nfloat square( in float a ) { return a*a; }\nvec2  square( in vec2 a )  { return vec2( a.x*a.x, a.y*a.y ); }\nvec3  square( in vec3 a )  { return vec3( a.x*a.x, a.y*a.y, a.z*a.z ); }\nvec4  square( in vec4 a )  { return vec4( a.x*a.x, a.y*a.y, a.z*a.z, a.w*a.w ); }\nfloat saturate( in float a ) { return clamp( a, 0.0, 1.0 ); }\nvec2  saturate( in vec2 a )  { return clamp( a, 0.0, 1.0 ); }\nvec3  saturate( in vec3 a )  { return clamp( a, 0.0, 1.0 ); }\nvec4  saturate( in vec4 a )  { return clamp( a, 0.0, 1.0 ); }\nfloat average( in float a ) { return a; }\nfloat average( in vec2 a )  { return ( a.x + a.y) * 0.5; }\nfloat average( in vec3 a )  { return ( a.x + a.y + a.z) / 3.0; }\nfloat average( in vec4 a )  { return ( a.x + a.y + a.z + a.w) * 0.25; }\nfloat whiteCompliment( in float a ) { return saturate( 1.0 - a ); }\nvec2  whiteCompliment( in vec2 a )  { return saturate( vec2(1.0) - a ); }\nvec3  whiteCompliment( in vec3 a )  { return saturate( vec3(1.0) - a ); }\nvec4  whiteCompliment( in vec4 a )  { return saturate( vec4(1.0) - a ); }\nvec3 transformDirection( in vec3 normal, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( normal, 0.0 ) ).xyz );\n}\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n	return normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal) {\n	float distance = dot( planeNormal, point-pointOnPlane );\n	return point - distance * planeNormal;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return pointOnLine + lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) );\n}\nfloat calcLightAttenuation( float lightDistance, float cutoffDistance, float decayExponent ) {\n	if ( decayExponent > 0.0 ) {\n	  return pow( saturate( 1.0 - lightDistance / cutoffDistance ), decayExponent );\n	}\n	return 1.0;\n}\n\nvec3 inputToLinear( in vec3 a ) {\n#ifdef GAMMA_INPUT\n	return pow( a, vec3( float( GAMMA_FACTOR ) ) );\n#else\n	return a;\n#endif\n}\nvec3 linearToOutput( in vec3 a ) {\n#ifdef GAMMA_OUTPUT\n	return pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n#else\n	return a;\n#endif\n}\n",THREE.ShaderChunk.alphatest_fragment="#ifdef ALPHATEST\n\n	if ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n",THREE.ShaderChunk.lights_lambert_vertex="vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n	vLightBack = vec3( 0.0 );\n\n#endif\n\ntransformedNormal = normalize( transformedNormal );\n\n#if MAX_DIR_LIGHTS > 0\n\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n	vec3 dirVector = transformDirection( directionalLightDirection[ i ], viewMatrix );\n\n	float dotProduct = dot( transformedNormal, dirVector );\n	vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n	#ifdef DOUBLE_SIDED\n\n		vec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n		#ifdef WRAP_AROUND\n\n			vec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n		#endif\n\n	#endif\n\n	#ifdef WRAP_AROUND\n\n		vec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n		directionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n\n		#ifdef DOUBLE_SIDED\n\n			directionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n\n		#endif\n\n	#endif\n\n	vLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n\n	#ifdef DOUBLE_SIDED\n\n		vLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n\n	#endif\n\n}\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	for( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n		vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n		vec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n		float attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n		lVector = normalize( lVector );\n		float dotProduct = dot( transformedNormal, lVector );\n\n		vec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n		#ifdef DOUBLE_SIDED\n\n			vec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n			#ifdef WRAP_AROUND\n\n				vec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n			#endif\n\n		#endif\n\n		#ifdef WRAP_AROUND\n\n			vec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n			pointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n\n			#ifdef DOUBLE_SIDED\n\n				pointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n\n			#endif\n\n		#endif\n\n		vLightFront += pointLightColor[ i ] * pointLightWeighting * attenuation;\n\n		#ifdef DOUBLE_SIDED\n\n			vLightBack += pointLightColor[ i ] * pointLightWeightingBack * attenuation;\n\n		#endif\n\n	}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	for( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n		vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n		vec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n		float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\n\n		if ( spotEffect > spotLightAngleCos[ i ] ) {\n\n			spotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n			float attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n			lVector = normalize( lVector );\n\n			float dotProduct = dot( transformedNormal, lVector );\n			vec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n			#ifdef DOUBLE_SIDED\n\n				vec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n				#ifdef WRAP_AROUND\n\n					vec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n				#endif\n\n			#endif\n\n			#ifdef WRAP_AROUND\n\n				vec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n				spotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n\n				#ifdef DOUBLE_SIDED\n\n					spotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n\n				#endif\n\n			#endif\n\n			vLightFront += spotLightColor[ i ] * spotLightWeighting * attenuation * spotEffect;\n\n			#ifdef DOUBLE_SIDED\n\n				vLightBack += spotLightColor[ i ] * spotLightWeightingBack * attenuation * spotEffect;\n\n			#endif\n\n		}\n\n	}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n		vec3 lVector = transformDirection( hemisphereLightDirection[ i ], viewMatrix );\n\n		float dotProduct = dot( transformedNormal, lVector );\n\n		float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n		float hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\n\n		vLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n		#ifdef DOUBLE_SIDED\n\n			vLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n		#endif\n\n	}\n\n#endif\n\nvLightFront += ambientLightColor;\n\n#ifdef DOUBLE_SIDED\n\n	vLightBack += ambientLightColor;\n\n#endif\n",THREE.ShaderChunk.map_particle_pars_fragment="#ifdef USE_MAP\n\n	uniform vec4 offsetRepeat;\n	uniform sampler2D map;\n\n#endif\n",THREE.ShaderChunk.default_vertex="#ifdef USE_SKINNING\n\n	vec4 mvPosition = modelViewMatrix * skinned;\n\n#elif defined( USE_MORPHTARGETS )\n\n	vec4 mvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n\n#else\n\n	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n",THREE.ShaderChunk.map_pars_fragment="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n	varying vec2 vUv;\n\n#endif\n\n#ifdef USE_MAP\n\n	uniform sampler2D map;\n\n#endif",THREE.ShaderChunk.skinnormal_vertex="#ifdef USE_SKINNING\n\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n	#ifdef USE_MORPHNORMALS\n\n	vec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n\n	#else\n\n	vec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n\n	#endif\n\n#endif\n",THREE.ShaderChunk.logdepthbuf_pars_vertex="#ifdef USE_LOGDEPTHBUF\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		varying float vFragDepth;\n\n	#endif\n\n	uniform float logDepthBufFC;\n\n#endif",THREE.ShaderChunk.lightmap_pars_vertex="#ifdef USE_LIGHTMAP\n\n	varying vec2 vUv2;\n\n#endif",THREE.ShaderChunk.lights_phong_fragment="#ifndef FLAT_SHADED\n\n	vec3 normal = normalize( vNormal );\n\n	#ifdef DOUBLE_SIDED\n\n		normal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n	#endif\n\n#else\n\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n\n#endif\n\nvec3 viewPosition = normalize( vViewPosition );\n\n#ifdef USE_NORMALMAP\n\n	normal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\nvec3 totalDiffuseLight = vec3( 0.0 );\nvec3 totalSpecularLight = vec3( 0.0 );\n\n#if MAX_POINT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n		vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n		vec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n		float attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n		lVector = normalize( lVector );\n\n		// diffuse\n\n		float dotProduct = dot( normal, lVector );\n\n		#ifdef WRAP_AROUND\n\n			float pointDiffuseWeightFull = max( dotProduct, 0.0 );\n			float pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n			vec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\n		#else\n\n			float pointDiffuseWeight = max( dotProduct, 0.0 );\n\n		#endif\n\n		totalDiffuseLight += pointLightColor[ i ] * pointDiffuseWeight * attenuation;\n\n				// specular\n\n		vec3 pointHalfVector = normalize( lVector + viewPosition );\n		float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n		float pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\n		float specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n		vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );\n		totalSpecularLight += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * attenuation * specularNormalization;\n\n	}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n		vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n		vec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n		float attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n		lVector = normalize( lVector );\n\n		float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\n		if ( spotEffect > spotLightAngleCos[ i ] ) {\n\n			spotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n			// diffuse\n\n			float dotProduct = dot( normal, lVector );\n\n			#ifdef WRAP_AROUND\n\n				float spotDiffuseWeightFull = max( dotProduct, 0.0 );\n				float spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n				vec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\n			#else\n\n				float spotDiffuseWeight = max( dotProduct, 0.0 );\n\n			#endif\n\n			totalDiffuseLight += spotLightColor[ i ] * spotDiffuseWeight * attenuation * spotEffect;\n\n			// specular\n\n			vec3 spotHalfVector = normalize( lVector + viewPosition );\n			float spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n			float spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\n			float specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n			vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, spotHalfVector ), 0.0 ), 5.0 );\n			totalSpecularLight += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * attenuation * specularNormalization * spotEffect;\n\n		}\n\n	}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n	for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n		vec3 dirVector = transformDirection( directionalLightDirection[ i ], viewMatrix );\n\n		// diffuse\n\n		float dotProduct = dot( normal, dirVector );\n\n		#ifdef WRAP_AROUND\n\n			float dirDiffuseWeightFull = max( dotProduct, 0.0 );\n			float dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n			vec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n\n		#else\n\n			float dirDiffuseWeight = max( dotProduct, 0.0 );\n\n		#endif\n\n		totalDiffuseLight += directionalLightColor[ i ] * dirDiffuseWeight;\n\n		// specular\n\n		vec3 dirHalfVector = normalize( dirVector + viewPosition );\n		float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n		float dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\n		/*\n		// fresnel term from skin shader\n		const float F0 = 0.128;\n\n		float base = 1.0 - dot( viewPosition, dirHalfVector );\n		float exponential = pow( base, 5.0 );\n\n		float fresnel = exponential + F0 * ( 1.0 - exponential );\n		*/\n\n		/*\n		// fresnel term from fresnel shader\n		const float mFresnelBias = 0.08;\n		const float mFresnelScale = 0.3;\n		const float mFresnelPower = 5.0;\n\n		float fresnel = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( -viewPosition ), normal ), mFresnelPower );\n		*/\n\n		float specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n		// 		dirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization * fresnel;\n\n		vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n		totalSpecularLight += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\n\n	}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n		vec3 lVector = transformDirection( hemisphereLightDirection[ i ], viewMatrix );\n\n		// diffuse\n\n		float dotProduct = dot( normal, lVector );\n		float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n		vec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n		totalDiffuseLight += hemiColor;\n\n		// specular (sky light)\n\n		vec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n		float hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n		float hemiSpecularWeightSky = specularStrength * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\n		// specular (ground light)\n\n		vec3 lVectorGround = -lVector;\n\n		vec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n		float hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n		float hemiSpecularWeightGround = specularStrength * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\n		float dotProductGround = dot( normal, lVectorGround );\n\n		float specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n		vec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n		vec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n		totalSpecularLight += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\n	}\n\n#endif\n\n#ifdef METAL\n\n	outgoingLight += diffuseColor.rgb * ( totalDiffuseLight + ambientLightColor ) * specular + totalSpecularLight + emissive;\n\n#else\n\n	outgoingLight += diffuseColor.rgb * ( totalDiffuseLight + ambientLightColor ) + totalSpecularLight + emissive;\n\n#endif\n",THREE.ShaderChunk.fog_pars_fragment="#ifdef USE_FOG\n\n	uniform vec3 fogColor;\n\n	#ifdef FOG_EXP2\n\n		uniform float fogDensity;\n\n	#else\n\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n\n#endif",
THREE.ShaderChunk.morphnormal_vertex="#ifdef USE_MORPHNORMALS\n\n	vec3 morphedNormal = vec3( 0.0 );\n\n	morphedNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n	morphedNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n	morphedNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n	morphedNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n	morphedNormal += normal;\n\n#endif",THREE.ShaderChunk.envmap_pars_fragment="#ifdef USE_ENVMAP\n\n	uniform float reflectivity;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	uniform float flipEnvMap;\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n		uniform float refractionRatio;\n\n	#else\n\n		varying vec3 vReflect;\n\n	#endif\n\n#endif\n",THREE.ShaderChunk.logdepthbuf_fragment="#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n	gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif",THREE.ShaderChunk.normalmap_pars_fragment="#ifdef USE_NORMALMAP\n\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n\n	// Per-Pixel Tangent Space Normal Mapping\n	// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n\n		vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n		vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n		vec3 N = normalize( surf_norm );\n\n		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n		mapN.xy = normalScale * mapN.xy;\n		mat3 tsn = mat3( S, T, N );\n		return normalize( tsn * mapN );\n\n	}\n\n#endif\n",THREE.ShaderChunk.lights_phong_pars_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n	varying vec3 vWorldPosition;\n\n#endif\n",THREE.ShaderChunk.lightmap_pars_fragment="#ifdef USE_LIGHTMAP\n\n	varying vec2 vUv2;\n	uniform sampler2D lightMap;\n\n#endif",THREE.ShaderChunk.shadowmap_vertex="#ifdef USE_SHADOWMAP\n\n	for( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n		vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n	}\n\n#endif",THREE.ShaderChunk.lights_phong_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n	vWorldPosition = worldPosition.xyz;\n\n#endif",THREE.ShaderChunk.map_fragment="#ifdef USE_MAP\n\n	vec4 texelColor = texture2D( map, vUv );\n\n	texelColor.xyz = inputToLinear( texelColor.xyz );\n\n	diffuseColor *= texelColor;\n\n#endif",THREE.ShaderChunk.lightmap_vertex="#ifdef USE_LIGHTMAP\n\n	vUv2 = uv2;\n\n#endif",THREE.ShaderChunk.map_particle_fragment="#ifdef USE_MAP\n\n	diffuseColor *= texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\n#endif\n",THREE.ShaderChunk.color_pars_fragment="#ifdef USE_COLOR\n\n	varying vec3 vColor;\n\n#endif\n",THREE.ShaderChunk.color_vertex="#ifdef USE_COLOR\n\n	vColor.xyz = inputToLinear( color.xyz );\n\n#endif",THREE.ShaderChunk.skinning_vertex="#ifdef USE_SKINNING\n\n	#ifdef USE_MORPHTARGETS\n\n	vec4 skinVertex = bindMatrix * vec4( morphed, 1.0 );\n\n	#else\n\n	vec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\n	#endif\n\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	skinned  = bindMatrixInverse * skinned;\n\n#endif\n",THREE.ShaderChunk.envmap_pars_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n	varying vec3 vReflect;\n\n	uniform float refractionRatio;\n\n#endif\n",THREE.ShaderChunk.linear_to_gamma_fragment="\n	outgoingLight = linearToOutput( outgoingLight );\n",THREE.ShaderChunk.color_pars_vertex="#ifdef USE_COLOR\n\n	varying vec3 vColor;\n\n#endif",THREE.ShaderChunk.lights_lambert_pars_vertex="uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n	uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n	uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n	uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#ifdef WRAP_AROUND\n\n	uniform vec3 wrapRGB;\n\n#endif\n",THREE.ShaderChunk.map_pars_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n	varying vec2 vUv;\n	uniform vec4 offsetRepeat;\n\n#endif\n",THREE.ShaderChunk.envmap_fragment="#ifdef USE_ENVMAP\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n		// Transforming Normal Vectors with the Inverse Transformation\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n		#ifdef ENVMAP_MODE_REFLECTION\n\n			vec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n		#else\n\n			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n		#endif\n\n	#else\n\n		vec3 reflectVec = vReflect;\n\n	#endif\n\n	#ifdef DOUBLE_SIDED\n		float flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n	#else\n		float flipNormal = 1.0;\n	#endif\n\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n	#elif defined( ENVMAP_TYPE_EQUIREC )\n		vec2 sampleUV;\n		sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n		sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n		vec4 envColor = texture2D( envMap, sampleUV );\n\n	#elif defined( ENVMAP_TYPE_SPHERE )\n		vec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n	#endif\n\n	envColor.xyz = inputToLinear( envColor.xyz );\n\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n	#elif defined( ENVMAP_BLENDING_MIX )\n\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n	#elif defined( ENVMAP_BLENDING_ADD )\n\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n	#endif\n\n#endif\n",THREE.ShaderChunk.specularmap_pars_fragment="#ifdef USE_SPECULARMAP\n\n	uniform sampler2D specularMap;\n\n#endif",THREE.ShaderChunk.logdepthbuf_vertex="#ifdef USE_LOGDEPTHBUF\n\n	gl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		vFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n		gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n	#endif\n\n#endif",THREE.ShaderChunk.morphtarget_pars_vertex="#ifdef USE_MORPHTARGETS\n\n	#ifndef USE_MORPHNORMALS\n\n	uniform float morphTargetInfluences[ 8 ];\n\n	#else\n\n	uniform float morphTargetInfluences[ 4 ];\n\n	#endif\n\n#endif",THREE.ShaderChunk.specularmap_fragment="float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n\n#else\n\n	specularStrength = 1.0;\n\n#endif",THREE.ShaderChunk.fog_fragment="#ifdef USE_FOG\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		float depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n	#else\n\n		float depth = gl_FragCoord.z / gl_FragCoord.w;\n\n	#endif\n\n	#ifdef FOG_EXP2\n\n		float fogFactor = exp2( - square( fogDensity ) * square( depth ) * LOG2 );\n		fogFactor = whiteCompliment( fogFactor );\n\n	#else\n\n		float fogFactor = smoothstep( fogNear, fogFar, depth );\n\n	#endif\n	\n	outgoingLight = mix( outgoingLight, fogColor, fogFactor );\n\n#endif",THREE.ShaderChunk.bumpmap_pars_fragment="#ifdef USE_BUMPMAP\n\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n\n	// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n	// http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n	vec2 dHdxy_fwd() {\n\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n		return vec2( dBx, dBy );\n\n	}\n\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n		vec3 vSigmaX = dFdx( surf_pos );\n		vec3 vSigmaY = dFdy( surf_pos );\n		vec3 vN = surf_norm;		// normalized\n\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n\n		float fDet = dot( vSigmaX, R1 );\n\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n\n	}\n\n#endif\n",THREE.ShaderChunk.defaultnormal_vertex="#ifdef USE_SKINNING\n\n	vec3 objectNormal = skinnedNormal.xyz;\n\n#elif defined( USE_MORPHNORMALS )\n\n	vec3 objectNormal = morphedNormal;\n\n#else\n\n	vec3 objectNormal = normal;\n\n#endif\n\n#ifdef FLIP_SIDED\n\n	objectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n",THREE.ShaderChunk.lights_phong_pars_fragment="uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n	uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n	uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n	uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n	varying vec3 vWorldPosition;\n\n#endif\n\n#ifdef WRAP_AROUND\n\n	uniform vec3 wrapRGB;\n\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n	varying vec3 vNormal;\n\n#endif\n",THREE.ShaderChunk.skinbase_vertex="#ifdef USE_SKINNING\n\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif",THREE.ShaderChunk.map_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n	vUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif",THREE.ShaderChunk.lightmap_fragment="#ifdef USE_LIGHTMAP\n\n	outgoingLight *= diffuseColor.xyz * texture2D( lightMap, vUv2 ).xyz;\n\n#endif",THREE.ShaderChunk.shadowmap_pars_vertex="#ifdef USE_SHADOWMAP\n\n	varying vec4 vShadowCoord[ MAX_SHADOWS ];\n	uniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif",THREE.ShaderChunk.color_fragment="#ifdef USE_COLOR\n\n	diffuseColor.rgb *= vColor;\n\n#endif",THREE.ShaderChunk.morphtarget_vertex="#ifdef USE_MORPHTARGETS\n\n	vec3 morphed = vec3( 0.0 );\n	morphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n	morphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n	morphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n	morphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n	#ifndef USE_MORPHNORMALS\n\n	morphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n	morphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n	morphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n	morphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n	#endif\n\n	morphed += position;\n\n#endif",THREE.ShaderChunk.envmap_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n	vec3 worldNormal = transformDirection( objectNormal, modelMatrix );\n\n	vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n	#ifdef ENVMAP_MODE_REFLECTION\n\n		vReflect = reflect( cameraToVertex, worldNormal );\n\n	#else\n\n		vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n	#endif\n\n#endif\n",THREE.ShaderChunk.shadowmap_fragment="#ifdef USE_SHADOWMAP\n\n	#ifdef SHADOWMAP_DEBUG\n\n		vec3 frustumColors[3];\n		frustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n		frustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n		frustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n	#endif\n\n	#ifdef SHADOWMAP_CASCADE\n\n		int inFrustumCount = 0;\n\n	#endif\n\n	float fDepth;\n	vec3 shadowColor = vec3( 1.0 );\n\n	for( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n		vec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n				// if ( something && something ) breaks ATI OpenGL shader compiler\n				// if ( all( something, something ) ) using this instead\n\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n\n				// don't shadow pixels outside of light frustum\n				// use just first frustum (for cascades)\n				// don't shadow pixels behind far plane of light frustum\n\n		#ifdef SHADOWMAP_CASCADE\n\n			inFrustumCount += int( inFrustum );\n			bvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n\n		#else\n\n			bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n		#endif\n\n		bool frustumTest = all( frustumTestVec );\n\n		if ( frustumTest ) {\n\n			shadowCoord.z += shadowBias[ i ];\n\n			#if defined( SHADOWMAP_TYPE_PCF )\n\n						// Percentage-close filtering\n						// (9 pixel kernel)\n						// http://fabiensanglard.net/shadowmappingPCF/\n\n				float shadow = 0.0;\n\n		/*\n						// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n						// must enroll loop manually\n\n				for ( float y = -1.25; y <= 1.25; y += 1.25 )\n					for ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n						vec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n								// doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n								//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n						float fDepth = unpackDepth( rgbaDepth );\n\n						if ( fDepth < shadowCoord.z )\n							shadow += 1.0;\n\n				}\n\n				shadow /= 9.0;\n\n		*/\n\n				const float shadowDelta = 1.0 / 9.0;\n\n				float xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n				float yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n				float dx0 = -1.25 * xPixelOffset;\n				float dy0 = -1.25 * yPixelOffset;\n				float dx1 = 1.25 * xPixelOffset;\n				float dy1 = 1.25 * yPixelOffset;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n			#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n						// Percentage-close filtering\n						// (9 pixel kernel)\n						// http://fabiensanglard.net/shadowmappingPCF/\n\n				float shadow = 0.0;\n\n				float xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n				float yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n				float dx0 = -1.0 * xPixelOffset;\n				float dy0 = -1.0 * yPixelOffset;\n				float dx1 = 1.0 * xPixelOffset;\n				float dy1 = 1.0 * yPixelOffset;\n\n				mat3 shadowKernel;\n				mat3 depthKernel;\n\n				depthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n				depthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n				depthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n				depthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n				depthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n				depthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n				depthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n				depthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n				depthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n				vec3 shadowZ = vec3( shadowCoord.z );\n				shadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n				shadowKernel[0] *= vec3(0.25);\n\n				shadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n				shadowKernel[1] *= vec3(0.25);\n\n				shadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n				shadowKernel[2] *= vec3(0.25);\n\n				vec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n				shadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n				shadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n				vec4 shadowValues;\n				shadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n				shadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n				shadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n				shadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n				shadow = dot( shadowValues, vec4( 1.0 ) );\n\n				shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n			#else\n\n				vec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n				float fDepth = unpackDepth( rgbaDepth );\n\n				if ( fDepth < shadowCoord.z )\n\n		// spot with multiple shadows is darker\n\n					shadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n		// spot with multiple shadows has the same color as single shadow spot\n\n		// 					shadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n			#endif\n\n		}\n\n\n		#ifdef SHADOWMAP_DEBUG\n\n			#ifdef SHADOWMAP_CASCADE\n\n				if ( inFrustum && inFrustumCount == 1 ) outgoingLight *= frustumColors[ i ];\n\n			#else\n\n				if ( inFrustum ) outgoingLight *= frustumColors[ i ];\n\n			#endif\n\n		#endif\n\n	}\n\n	// NOTE: I am unsure if this is correct in linear space.  -bhouston, Dec 29, 2014\n	shadowColor = inputToLinear( shadowColor );\n\n	outgoingLight = outgoingLight * shadowColor;\n\n#endif\n",THREE.ShaderChunk.worldpos_vertex="#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n	#ifdef USE_SKINNING\n\n		vec4 worldPosition = modelMatrix * skinned;\n\n	#elif defined( USE_MORPHTARGETS )\n\n		vec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n\n	#else\n\n		vec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n	#endif\n\n#endif\n",THREE.ShaderChunk.shadowmap_pars_fragment="#ifdef USE_SHADOWMAP\n\n	uniform sampler2D shadowMap[ MAX_SHADOWS ];\n	uniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n	uniform float shadowDarkness[ MAX_SHADOWS ];\n	uniform float shadowBias[ MAX_SHADOWS ];\n\n	varying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n	float unpackDepth( const in vec4 rgba_depth ) {\n\n		const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n		float depth = dot( rgba_depth, bit_shift );\n		return depth;\n\n	}\n\n#endif",THREE.ShaderChunk.skinning_pars_vertex="#ifdef USE_SKINNING\n\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n\n	#ifdef BONE_TEXTURE\n\n		uniform sampler2D boneTexture;\n		uniform int boneTextureWidth;\n		uniform int boneTextureHeight;\n\n		mat4 getBoneMatrix( const in float i ) {\n\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureWidth ) );\n			float y = floor( j / float( boneTextureWidth ) );\n\n			float dx = 1.0 / float( boneTextureWidth );\n			float dy = 1.0 / float( boneTextureHeight );\n\n			y = dy * ( y + 0.5 );\n\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n			mat4 bone = mat4( v1, v2, v3, v4 );\n\n			return bone;\n\n		}\n\n	#else\n\n		uniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n		mat4 getBoneMatrix( const in float i ) {\n\n			mat4 bone = boneGlobalMatrices[ int(i) ];\n			return bone;\n\n		}\n\n	#endif\n\n#endif\n",THREE.ShaderChunk.logdepthbuf_pars_fragment="#ifdef USE_LOGDEPTHBUF\n\n	uniform float logDepthBufFC;\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		#extension GL_EXT_frag_depth : enable\n		varying float vFragDepth;\n\n	#endif\n\n#endif",THREE.ShaderChunk.alphamap_fragment="#ifdef USE_ALPHAMAP\n\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n",THREE.ShaderChunk.alphamap_pars_fragment="#ifdef USE_ALPHAMAP\n\n	uniform sampler2D alphaMap;\n\n#endif\n",THREE.UniformsUtils={merge:function(e){for(var t={},r=0;r<e.length;r++){var i,n=this.clone(e[r]);for(i in n)t[i]=n[i]}return t},clone:function(e){var t,r={};for(t in e){r[t]={};for(var i in e[t]){var n=e[t][i];r[t][i]=n instanceof THREE.Color||n instanceof THREE.Vector2||n instanceof THREE.Vector3||n instanceof THREE.Vector4||n instanceof THREE.Matrix4||n instanceof THREE.Texture?n.clone():n instanceof Array?n.slice():n}}return r}},THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},lightMap:{type:"t",value:null},specularMap:{type:"t",value:null},alphaMap:{type:"t",value:null},envMap:{type:"t",value:null},flipEnvMap:{type:"f",value:-1},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:.98},morphTargetInfluences:{type:"f",value:0}},bump:{bumpMap:{type:"t",value:null},bumpScale:{type:"f",value:1}},normalmap:{normalMap:{type:"t",value:null},normalScale:{type:"v2",value:new THREE.Vector2(1,1)}},fog:{fogDensity:{type:"f",value:25e-5},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2e3},fogColor:{type:"c",value:new THREE.Color(16777215)}},lights:{ambientLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]},directionalLightColor:{type:"fv",value:[]},hemisphereLightDirection:{type:"fv",value:[]},hemisphereLightSkyColor:{type:"fv",value:[]},hemisphereLightGroundColor:{type:"fv",value:[]},pointLightColor:{type:"fv",value:[]},pointLightPosition:{type:"fv",value:[]},pointLightDistance:{type:"fv1",value:[]},pointLightDecay:{type:"fv1",value:[]},spotLightColor:{type:"fv",value:[]},spotLightPosition:{type:"fv",value:[]},spotLightDirection:{type:"fv",value:[]},spotLightDistance:{type:"fv1",value:[]},spotLightAngleCos:{type:"fv1",value:[]},spotLightExponent:{type:"fv1",value:[]},spotLightDecay:{type:"fv1",value:[]}},particle:{psColor:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},size:{type:"f",value:1},scale:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},fogDensity:{type:"f",value:25e-5},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2e3},fogColor:{type:"c",value:new THREE.Color(16777215)}},shadowmap:{shadowMap:{type:"tv",value:[]},shadowMapSize:{type:"v2v",value:[]},shadowBias:{type:"fv1",value:[]},shadowDarkness:{type:"fv1",value:[]},shadowMatrix:{type:"m4v",value:[]}}},THREE.ShaderLib={basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.shadowmap]),vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.skinbase_vertex,"	#ifdef USE_ENVMAP",THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"	#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"	outgoingLight = diffuseColor.rgb;",THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{emissive:{type:"c",value:new THREE.Color(0)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n#endif",THREE.ShaderChunk.common,THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_lambert_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_lambert_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n#endif",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"	#ifdef DOUBLE_SIDED\n		if ( gl_FrontFacing )\n			outgoingLight += diffuseColor.rgb * vLightFront + emissive;\n		else\n			outgoingLight += diffuseColor.rgb * vLightBack + emissive;\n	#else\n		outgoingLight += diffuseColor.rgb * vLightFront + emissive;\n	#endif",THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.bump,THREE.UniformsLib.normalmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{emissive:{type:"c",value:new THREE.Color(0)},specular:{type:"c",value:new THREE.Color(1118481)},shininess:{type:"f",value:30},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif",THREE.ShaderChunk.common,THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_phong_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"	vViewPosition = -mvPosition.xyz;",THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_phong_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),
fragmentShader:["#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_phong_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.bumpmap_pars_fragment,THREE.ShaderChunk.normalmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lights_phong_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},particle_basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.particle,THREE.UniformsLib.shadowmap]),vertexShader:["uniform float size;\nuniform float scale;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n	#ifdef USE_SIZEATTENUATION\n		gl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n	#else\n		gl_PointSize = size;\n	#endif\n	gl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 psColor;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( psColor, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_particle_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphatest_fragment,"	outgoingLight = diffuseColor.rgb;",THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.fog_fragment,"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},dashed:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,{scale:{type:"f",value:1},dashSize:{type:"f",value:1},totalSize:{type:"f",value:2}}]),vertexShader:["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"	vLineDistance = scale * lineDistance;\n	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n	gl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.color_fragment,"	outgoingLight = diffuseColor.rgb;",THREE.ShaderChunk.fog_fragment,"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2e3},opacity:{type:"f",value:1}},vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float mNear;\nuniform float mFar;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {",THREE.ShaderChunk.logdepthbuf_fragment,"	#ifdef USE_LOGDEPTHBUF_EXT\n		float depth = gl_FragDepthEXT / gl_FragCoord.w;\n	#else\n		float depth = gl_FragCoord.z / gl_FragCoord.w;\n	#endif\n	float color = 1.0 - smoothstep( mNear, mFar, depth );\n	gl_FragColor = vec4( vec3( color ), opacity );\n}"].join("\n")},normal:{uniforms:{opacity:{type:"f",value:1}},vertexShader:["varying vec3 vNormal;",THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n	vNormal = normalize( normalMatrix * normal );",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vNormal;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n	gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},cube:{uniforms:{tCube:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:["varying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n	vWorldPosition = transformDirection( position, modelMatrix );\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},equirect:{uniforms:{tEquirect:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:["varying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n	vWorldPosition = transformDirection( position, modelMatrix );\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\nvec3 direction = normalize( vWorldPosition );\nvec2 sampleUV;\nsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\nsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\ngl_FragColor = texture2D( tEquirect, sampleUV );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},depthRGBA:{uniforms:{},vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"vec4 pack_depth( const in float depth ) {\n	const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n	const vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n	vec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n	res -= res.xxyz * bit_mask;\n	return res;\n}\nvoid main() {",THREE.ShaderChunk.logdepthbuf_fragment,"	#ifdef USE_LOGDEPTHBUF_EXT\n		gl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n	#else\n		gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n	#endif\n}"].join("\n")}},THREE.WebGLRenderer=function(e){function t(e){var t=e.geometry;e=e.material;var r=t.vertices.length;if(e.attributes){void 0===t.__webglCustomAttributesList&&(t.__webglCustomAttributesList=[]);for(var i in e.attributes){var n=e.attributes[i];if(!n.__webglInitialized||n.createUniqueBuffers){n.__webglInitialized=!0;var o=1;"v2"===n.type?o=2:"v3"===n.type?o=3:"v4"===n.type?o=4:"c"===n.type&&(o=3),n.size=o,n.array=new Float32Array(r*o),n.buffer=Y.createBuffer(),n.buffer.belongsToAttribute=i,n.needsUpdate=!0}t.__webglCustomAttributesList.push(n)}}}function r(e,t){return e.material instanceof THREE.MeshFaceMaterial?e.material.materials[t.materialIndex]:e.material}function i(e,t,r,i){r=r.attributes;var n=t.attributes;t=t.attributesKeys;for(var o=0,a=t.length;a>o;o++){var s=t[o],h=n[s];if(h>=0){var l=r[s];void 0!==l?(s=l.itemSize,Y.bindBuffer(Y.ARRAY_BUFFER,l.buffer),Te.enableAttribute(h),Y.vertexAttribPointer(h,s,Y.FLOAT,!1,0,i*s*4)):void 0!==e.defaultAttributeValues&&(2===e.defaultAttributeValues[s].length?Y.vertexAttrib2fv(h,e.defaultAttributeValues[s]):3===e.defaultAttributeValues[s].length&&Y.vertexAttrib3fv(h,e.defaultAttributeValues[s]))}}Te.disableUnusedAttributes()}function n(e,t){return e.object.renderOrder!==t.object.renderOrder?e.object.renderOrder-t.object.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function o(e,t){return e.object.renderOrder!==t.object.renderOrder?e.object.renderOrder-t.object.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function a(e,t){return t[0]-e[0]}function s(e){if(!1!==e.visible){if(!(e instanceof THREE.Scene||e instanceof THREE.Group)){void 0===e.__webglInit&&(e.__webglInit=!0,e._modelViewMatrix=new THREE.Matrix4,e._normalMatrix=new THREE.Matrix3,e.addEventListener("removed",ze));var r=e.geometry;if(void 0!==r&&void 0===r.__webglInit)if(r.__webglInit=!0,r.addEventListener("dispose",ke),r instanceof THREE.BufferGeometry)K.info.memory.geometries++;else if(e instanceof THREE.Mesh)u(e,r);else if(e instanceof THREE.Line){if(void 0===r.__webglVertexBuffer){r.__webglVertexBuffer=Y.createBuffer(),r.__webglColorBuffer=Y.createBuffer(),r.__webglLineDistanceBuffer=Y.createBuffer(),K.info.memory.geometries++;var i=r.vertices.length;r.__vertexArray=new Float32Array(3*i),r.__colorArray=new Float32Array(3*i),r.__lineDistanceArray=new Float32Array(1*i),r.__webglLineCount=i,t(e),r.verticesNeedUpdate=!0,r.colorsNeedUpdate=!0,r.lineDistancesNeedUpdate=!0}}else e instanceof THREE.PointCloud&&void 0===r.__webglVertexBuffer&&(r.__webglVertexBuffer=Y.createBuffer(),r.__webglColorBuffer=Y.createBuffer(),K.info.memory.geometries++,i=r.vertices.length,r.__vertexArray=new Float32Array(3*i),r.__colorArray=new Float32Array(3*i),r.__webglParticleCount=i,t(e),r.verticesNeedUpdate=!0,r.colorsNeedUpdate=!0);if(void 0===e.__webglActive)if(e.__webglActive=!0,e instanceof THREE.Mesh){if(r instanceof THREE.BufferGeometry)E(G,r,e);else if(r instanceof THREE.Geometry)for(var r=je[r.id],i=0,n=r.length;n>i;i++)E(G,r[i],e)}else e instanceof THREE.Line||e instanceof THREE.PointCloud?E(G,r,e):(e instanceof THREE.ImmediateRenderObject||e.immediateRenderCallback)&&I.push({id:null,object:e,opaque:null,transparent:null,z:0});if(e instanceof THREE.Light)O.push(e);else if(e instanceof THREE.Sprite)X.push(e);else if(e instanceof THREE.LensFlare)q.push(e);else if((r=G[e.id])&&(!1===e.frustumCulled||!0===le.intersectsObject(e)))for(i=0,n=r.length;n>i;i++){var o=r[i],a=o,h=a.object,l=a.buffer,c=h.geometry,h=h.material;h instanceof THREE.MeshFaceMaterial?(h=h.materials[c instanceof THREE.BufferGeometry?0:l.materialIndex],a.material=h,h.transparent?j.push(a):W.push(a)):h&&(a.material=h,h.transparent?j.push(a):W.push(a)),o.render=!0,!0===K.sortObjects&&(ue.setFromMatrixPosition(e.matrixWorld),ue.applyProjection(ce),o.z=ue.z)}}for(i=0,n=e.children.length;n>i;i++)s(e.children[i])}}function h(e,t,r,i,n){for(var o,a=0,s=e.length;s>a;a++){o=e[a];var h=o.object,l=o.buffer;if(y(h,t),n)o=n;else{if(o=o.material,!o)continue;m(o)}K.setMaterialFaces(o),l instanceof THREE.BufferGeometry?K.renderBufferDirect(t,r,i,o,l,h):K.renderBuffer(t,r,i,o,l,h)}}function l(e,t,r,i,n,o){for(var a,s=0,h=e.length;h>s;s++){a=e[s];var l=a.object;if(l.visible){if(o)a=o;else{if(a=a[t],!a)continue;m(a)}K.renderImmediateObject(r,i,n,a,l)}}}function c(e){var t=e.object.material;t.transparent?(e.transparent=t,e.opaque=null):(e.opaque=t,e.transparent=null)}function u(e,t){var i=e.material,n=!1;if(void 0===je[t.id]||!0===t.groupsNeedUpdate){delete G[e.id];for(var o,a,s=je,h=t.id,i=i instanceof THREE.MeshFaceMaterial,l=ge.get("OES_element_index_uint")?4294967296:65535,n={},c=t.morphTargets.length,u=t.morphNormals.length,p={},d=[],f=0,m=t.faces.length;m>f;f++){o=t.faces[f];var T=i?o.materialIndex:0;T in n||(n[T]={hash:T,counter:0}),o=n[T].hash+"_"+n[T].counter,o in p||(a={id:Xe++,faces3:[],materialIndex:T,vertices:0,numMorphTargets:c,numMorphNormals:u},p[o]=a,d.push(a)),p[o].vertices+3>l&&(n[T].counter+=1,o=n[T].hash+"_"+n[T].counter,o in p||(a={id:Xe++,faces3:[],materialIndex:T,vertices:0,numMorphTargets:c,numMorphNormals:u},p[o]=a,d.push(a))),p[o].faces3.push(f),p[o].vertices+=3}s[h]=d,t.groupsNeedUpdate=!1}for(s=je[t.id],h=0,i=s.length;i>h;h++){if(l=s[h],void 0===l.__webglVertexBuffer){if(n=l,n.__webglVertexBuffer=Y.createBuffer(),n.__webglNormalBuffer=Y.createBuffer(),n.__webglTangentBuffer=Y.createBuffer(),n.__webglColorBuffer=Y.createBuffer(),n.__webglUVBuffer=Y.createBuffer(),n.__webglUV2Buffer=Y.createBuffer(),n.__webglSkinIndicesBuffer=Y.createBuffer(),n.__webglSkinWeightsBuffer=Y.createBuffer(),n.__webglFaceBuffer=Y.createBuffer(),n.__webglLineBuffer=Y.createBuffer(),u=n.numMorphTargets)for(n.__webglMorphTargetsBuffers=[],c=0;u>c;c++)n.__webglMorphTargetsBuffers.push(Y.createBuffer());if(u=n.numMorphNormals)for(n.__webglMorphNormalsBuffers=[],c=0;u>c;c++)n.__webglMorphNormalsBuffers.push(Y.createBuffer());if(K.info.memory.geometries++,n=l,f=e,m=f.geometry,u=n.faces3,c=3*u.length,p=1*u.length,d=3*u.length,u=r(f,n),n.__vertexArray=new Float32Array(3*c),n.__normalArray=new Float32Array(3*c),n.__colorArray=new Float32Array(3*c),n.__uvArray=new Float32Array(2*c),1<m.faceVertexUvs.length&&(n.__uv2Array=new Float32Array(2*c)),m.hasTangents&&(n.__tangentArray=new Float32Array(4*c)),f.geometry.skinWeights.length&&f.geometry.skinIndices.length&&(n.__skinIndexArray=new Float32Array(4*c),n.__skinWeightArray=new Float32Array(4*c)),f=null!==ge.get("OES_element_index_uint")&&p>21845?Uint32Array:Uint16Array,n.__typeArray=f,n.__faceArray=new f(3*p),n.__lineArray=new f(2*d),m=n.numMorphTargets)for(n.__morphTargetsArrays=[],f=0;m>f;f++)n.__morphTargetsArrays.push(new Float32Array(3*c));if(m=n.numMorphNormals)for(n.__morphNormalsArrays=[],f=0;m>f;f++)n.__morphNormalsArrays.push(new Float32Array(3*c));if(n.__webglFaceCount=3*p,n.__webglLineCount=2*d,u.attributes)for(p in void 0===n.__webglCustomAttributesList&&(n.__webglCustomAttributesList=[]),p=void 0,u.attributes){var g,d=u.attributes[p],f={};for(g in d)f[g]=d[g];(!f.__webglInitialized||f.createUniqueBuffers)&&(f.__webglInitialized=!0,m=1,"v2"===f.type?m=2:"v3"===f.type?m=3:"v4"===f.type?m=4:"c"===f.type&&(m=3),f.size=m,f.array=new Float32Array(c*m),f.buffer=Y.createBuffer(),f.buffer.belongsToAttribute=p,d.needsUpdate=!0,f.__original=d),n.__webglCustomAttributesList.push(f)}n.__inittedArrays=!0,t.verticesNeedUpdate=!0,t.morphTargetsNeedUpdate=!0,t.elementsNeedUpdate=!0,t.uvsNeedUpdate=!0,t.normalsNeedUpdate=!0,t.tangentsNeedUpdate=!0,n=t.colorsNeedUpdate=!0}else n=!1;(n||void 0===e.__webglActive)&&E(G,l,e)}e.__webglActive=!0}function E(e,t,r){var i=r.id;e[i]=e[i]||[],e[i].push({id:i,buffer:t,object:r,material:null,z:0})}function p(e){var t=e.geometry;if(t instanceof THREE.BufferGeometry)for(var i=t.attributes,n=t.attributesKeys,o=0,a=n.length;a>o;o++){var s=n[o],h=i[s],l="index"===s?Y.ELEMENT_ARRAY_BUFFER:Y.ARRAY_BUFFER;void 0===h.buffer?(h.buffer=Y.createBuffer(),Y.bindBuffer(l,h.buffer),Y.bufferData(l,h.array,h instanceof THREE.DynamicBufferAttribute?Y.DYNAMIC_DRAW:Y.STATIC_DRAW),h.needsUpdate=!1):!0===h.needsUpdate&&(Y.bindBuffer(l,h.buffer),void 0===h.updateRange||-1===h.updateRange.count?Y.bufferSubData(l,0,h.array):0===h.updateRange.count?console.error("THREE.WebGLRenderer.updateObject: using updateRange for THREE.DynamicBufferAttribute and marked as needsUpdate but count is 0, ensure you are using set methods or updating manually."):(Y.bufferSubData(l,h.updateRange.offset*h.array.BYTES_PER_ELEMENT,h.array.subarray(h.updateRange.offset,h.updateRange.offset+h.updateRange.count)),h.updateRange.count=0),h.needsUpdate=!1)}else if(e instanceof THREE.Mesh){!0===t.groupsNeedUpdate&&u(e,t);for(var c=je[t.id],o=0,E=c.length;E>o;o++){var p=c[o],m=r(e,p),T=m.attributes&&d(m);if(t.verticesNeedUpdate||t.morphTargetsNeedUpdate||t.elementsNeedUpdate||t.uvsNeedUpdate||t.normalsNeedUpdate||t.colorsNeedUpdate||t.tangentsNeedUpdate||T){var g=p,R=e,y=Y.DYNAMIC_DRAW,v=!t.dynamic,H=m;if(g.__inittedArrays){var x=!1==H instanceof THREE.MeshPhongMaterial&&H.shading===THREE.FlatShading,b=void 0,w=void 0,_=void 0,M=void 0,S=void 0,C=void 0,A=void 0,L=void 0,P=void 0,F=void 0,B=void 0,U=void 0,D=void 0,V=void 0,z=void 0,k=void 0,N=void 0,O=void 0,G=void 0,I=void 0,W=void 0,j=void 0,X=void 0,q=void 0,K=void 0,Q=void 0,Z=void 0,J=void 0,$=void 0,ee=void 0,te=void 0,re=void 0,ie=void 0,ne=void 0,oe=void 0,ae=void 0,se=void 0,he=void 0,le=void 0,ce=void 0,ue=0,Ee=0,pe=0,de=0,fe=0,me=0,Te=0,ge=0,Re=0,ye=0,ve=0,He=0,xe=void 0,be=g.__vertexArray,we=g.__uvArray,_e=g.__uv2Array,Me=g.__normalArray,Se=g.__tangentArray,Ce=g.__colorArray,Ae=g.__skinIndexArray,Le=g.__skinWeightArray,Pe=g.__morphTargetsArrays,Fe=g.__morphNormalsArrays,Be=g.__webglCustomAttributesList,Ue=void 0,De=g.__faceArray,Ve=g.__lineArray,ze=R.geometry,ke=ze.elementsNeedUpdate,Ne=ze.uvsNeedUpdate,Oe=ze.normalsNeedUpdate,Ge=ze.tangentsNeedUpdate,Ie=ze.colorsNeedUpdate,We=ze.morphTargetsNeedUpdate,Xe=ze.vertices,qe=g.faces3,Ye=ze.faces,Ke=ze.faceVertexUvs[0],Qe=ze.faceVertexUvs[1],Ze=ze.skinIndices,Je=ze.skinWeights,$e=ze.morphTargets,et=ze.morphNormals;if(ze.verticesNeedUpdate){for(b=0,w=qe.length;w>b;b++)M=Ye[qe[b]],U=Xe[M.a],D=Xe[M.b],V=Xe[M.c],be[Ee]=U.x,be[Ee+1]=U.y,be[Ee+2]=U.z,be[Ee+3]=D.x,be[Ee+4]=D.y,be[Ee+5]=D.z,be[Ee+6]=V.x,be[Ee+7]=V.y,be[Ee+8]=V.z,Ee+=9;Y.bindBuffer(Y.ARRAY_BUFFER,g.__webglVertexBuffer),Y.bufferData(Y.ARRAY_BUFFER,be,y)}if(We)for(oe=0,ae=$e.length;ae>oe;oe++){for(b=ve=0,w=qe.length;w>b;b++)le=qe[b],M=Ye[le],U=$e[oe].vertices[M.a],D=$e[oe].vertices[M.b],V=$e[oe].vertices[M.c],se=Pe[oe],se[ve]=U.x,se[ve+1]=U.y,se[ve+2]=U.z,se[ve+3]=D.x,se[ve+4]=D.y,se[ve+5]=D.z,se[ve+6]=V.x,se[ve+7]=V.y,se[ve+8]=V.z,H.morphNormals&&(x?I=G=O=et[oe].faceNormals[le]:(ce=et[oe].vertexNormals[le],O=ce.a,G=ce.b,I=ce.c),he=Fe[oe],he[ve]=O.x,he[ve+1]=O.y,he[ve+2]=O.z,he[ve+3]=G.x,he[ve+4]=G.y,he[ve+5]=G.z,he[ve+6]=I.x,he[ve+7]=I.y,he[ve+8]=I.z),ve+=9;Y.bindBuffer(Y.ARRAY_BUFFER,g.__webglMorphTargetsBuffers[oe]),Y.bufferData(Y.ARRAY_BUFFER,Pe[oe],y),H.morphNormals&&(Y.bindBuffer(Y.ARRAY_BUFFER,g.__webglMorphNormalsBuffers[oe]),Y.bufferData(Y.ARRAY_BUFFER,Fe[oe],y))}if(Je.length){for(b=0,w=qe.length;w>b;b++)M=Ye[qe[b]],q=Je[M.a],K=Je[M.b],Q=Je[M.c],Le[ye]=q.x,Le[ye+1]=q.y,Le[ye+2]=q.z,Le[ye+3]=q.w,Le[ye+4]=K.x,Le[ye+5]=K.y,Le[ye+6]=K.z,Le[ye+7]=K.w,Le[ye+8]=Q.x,Le[ye+9]=Q.y,Le[ye+10]=Q.z,Le[ye+11]=Q.w,Z=Ze[M.a],J=Ze[M.b],$=Ze[M.c],Ae[ye]=Z.x,Ae[ye+1]=Z.y,Ae[ye+2]=Z.z,Ae[ye+3]=Z.w,Ae[ye+4]=J.x,Ae[ye+5]=J.y,Ae[ye+6]=J.z,Ae[ye+7]=J.w,Ae[ye+8]=$.x,Ae[ye+9]=$.y,Ae[ye+10]=$.z,Ae[ye+11]=$.w,ye+=12;ye>0&&(Y.bindBuffer(Y.ARRAY_BUFFER,g.__webglSkinIndicesBuffer),Y.bufferData(Y.ARRAY_BUFFER,Ae,y),Y.bindBuffer(Y.ARRAY_BUFFER,g.__webglSkinWeightsBuffer),Y.bufferData(Y.ARRAY_BUFFER,Le,y))}if(Ie){for(b=0,w=qe.length;w>b;b++)M=Ye[qe[b]],A=M.vertexColors,L=M.color,3===A.length&&H.vertexColors===THREE.VertexColors?(W=A[0],j=A[1],X=A[2]):X=j=W=L,Ce[Re]=W.r,Ce[Re+1]=W.g,Ce[Re+2]=W.b,Ce[Re+3]=j.r,Ce[Re+4]=j.g,Ce[Re+5]=j.b,Ce[Re+6]=X.r,Ce[Re+7]=X.g,Ce[Re+8]=X.b,Re+=9;Re>0&&(Y.bindBuffer(Y.ARRAY_BUFFER,g.__webglColorBuffer),Y.bufferData(Y.ARRAY_BUFFER,Ce,y))}if(Ge&&ze.hasTangents){for(b=0,w=qe.length;w>b;b++)M=Ye[qe[b]],P=M.vertexTangents,z=P[0],k=P[1],N=P[2],Se[Te]=z.x,Se[Te+1]=z.y,Se[Te+2]=z.z,Se[Te+3]=z.w,Se[Te+4]=k.x,Se[Te+5]=k.y,Se[Te+6]=k.z,Se[Te+7]=k.w,Se[Te+8]=N.x,Se[Te+9]=N.y,Se[Te+10]=N.z,Se[Te+11]=N.w,Te+=12;Y.bindBuffer(Y.ARRAY_BUFFER,g.__webglTangentBuffer),Y.bufferData(Y.ARRAY_BUFFER,Se,y)}if(Oe){for(b=0,w=qe.length;w>b;b++)if(M=Ye[qe[b]],S=M.vertexNormals,C=M.normal,3===S.length&&!1===x)for(ee=0;3>ee;ee++)re=S[ee],Me[me]=re.x,Me[me+1]=re.y,Me[me+2]=re.z,me+=3;else for(ee=0;3>ee;ee++)Me[me]=C.x,Me[me+1]=C.y,Me[me+2]=C.z,me+=3;Y.bindBuffer(Y.ARRAY_BUFFER,g.__webglNormalBuffer),Y.bufferData(Y.ARRAY_BUFFER,Me,y)}if(Ne&&Ke){for(b=0,w=qe.length;w>b;b++)if(_=qe[b],F=Ke[_],void 0!==F)for(ee=0;3>ee;ee++)ie=F[ee],we[pe]=ie.x,we[pe+1]=ie.y,pe+=2;pe>0&&(Y.bindBuffer(Y.ARRAY_BUFFER,g.__webglUVBuffer),Y.bufferData(Y.ARRAY_BUFFER,we,y))}if(Ne&&Qe){for(b=0,w=qe.length;w>b;b++)if(_=qe[b],B=Qe[_],void 0!==B)for(ee=0;3>ee;ee++)ne=B[ee],_e[de]=ne.x,_e[de+1]=ne.y,de+=2;de>0&&(Y.bindBuffer(Y.ARRAY_BUFFER,g.__webglUV2Buffer),Y.bufferData(Y.ARRAY_BUFFER,_e,y))}if(ke){for(b=0,w=qe.length;w>b;b++)De[fe]=ue,De[fe+1]=ue+1,De[fe+2]=ue+2,fe+=3,Ve[ge]=ue,Ve[ge+1]=ue+1,Ve[ge+2]=ue,Ve[ge+3]=ue+2,Ve[ge+4]=ue+1,Ve[ge+5]=ue+2,ge+=6,ue+=3;Y.bindBuffer(Y.ELEMENT_ARRAY_BUFFER,g.__webglFaceBuffer),Y.bufferData(Y.ELEMENT_ARRAY_BUFFER,De,y),Y.bindBuffer(Y.ELEMENT_ARRAY_BUFFER,g.__webglLineBuffer),Y.bufferData(Y.ELEMENT_ARRAY_BUFFER,Ve,y)}if(Be)for(ee=0,te=Be.length;te>ee;ee++)if(Ue=Be[ee],Ue.__original.needsUpdate){if(He=0,1===Ue.size){if(void 0===Ue.boundTo||"vertices"===Ue.boundTo)for(b=0,w=qe.length;w>b;b++)M=Ye[qe[b]],Ue.array[He]=Ue.value[M.a],Ue.array[He+1]=Ue.value[M.b],Ue.array[He+2]=Ue.value[M.c],He+=3;else if("faces"===Ue.boundTo)for(b=0,w=qe.length;w>b;b++)xe=Ue.value[qe[b]],Ue.array[He]=xe,Ue.array[He+1]=xe,Ue.array[He+2]=xe,He+=3}else if(2===Ue.size){if(void 0===Ue.boundTo||"vertices"===Ue.boundTo)for(b=0,w=qe.length;w>b;b++)M=Ye[qe[b]],U=Ue.value[M.a],D=Ue.value[M.b],V=Ue.value[M.c],Ue.array[He]=U.x,Ue.array[He+1]=U.y,Ue.array[He+2]=D.x,Ue.array[He+3]=D.y,Ue.array[He+4]=V.x,Ue.array[He+5]=V.y,He+=6;else if("faces"===Ue.boundTo)for(b=0,w=qe.length;w>b;b++)V=D=U=xe=Ue.value[qe[b]],Ue.array[He]=U.x,Ue.array[He+1]=U.y,Ue.array[He+2]=D.x,Ue.array[He+3]=D.y,Ue.array[He+4]=V.x,Ue.array[He+5]=V.y,He+=6}else if(3===Ue.size){var tt;if(tt="c"===Ue.type?["r","g","b"]:["x","y","z"],void 0===Ue.boundTo||"vertices"===Ue.boundTo)for(b=0,w=qe.length;w>b;b++)M=Ye[qe[b]],U=Ue.value[M.a],D=Ue.value[M.b],V=Ue.value[M.c],Ue.array[He]=U[tt[0]],Ue.array[He+1]=U[tt[1]],Ue.array[He+2]=U[tt[2]],Ue.array[He+3]=D[tt[0]],Ue.array[He+4]=D[tt[1]],Ue.array[He+5]=D[tt[2]],Ue.array[He+6]=V[tt[0]],Ue.array[He+7]=V[tt[1]],Ue.array[He+8]=V[tt[2]],He+=9;else if("faces"===Ue.boundTo)for(b=0,w=qe.length;w>b;b++)V=D=U=xe=Ue.value[qe[b]],Ue.array[He]=U[tt[0]],Ue.array[He+1]=U[tt[1]],Ue.array[He+2]=U[tt[2]],Ue.array[He+3]=D[tt[0]],Ue.array[He+4]=D[tt[1]],Ue.array[He+5]=D[tt[2]],Ue.array[He+6]=V[tt[0]],Ue.array[He+7]=V[tt[1]],Ue.array[He+8]=V[tt[2]],He+=9;else if("faceVertices"===Ue.boundTo)for(b=0,w=qe.length;w>b;b++)xe=Ue.value[qe[b]],U=xe[0],D=xe[1],V=xe[2],Ue.array[He]=U[tt[0]],Ue.array[He+1]=U[tt[1]],Ue.array[He+2]=U[tt[2]],Ue.array[He+3]=D[tt[0]],Ue.array[He+4]=D[tt[1]],Ue.array[He+5]=D[tt[2]],Ue.array[He+6]=V[tt[0]],Ue.array[He+7]=V[tt[1]],Ue.array[He+8]=V[tt[2]],He+=9}else if(4===Ue.size)if(void 0===Ue.boundTo||"vertices"===Ue.boundTo)for(b=0,w=qe.length;w>b;b++)M=Ye[qe[b]],U=Ue.value[M.a],D=Ue.value[M.b],V=Ue.value[M.c],Ue.array[He]=U.x,Ue.array[He+1]=U.y,Ue.array[He+2]=U.z,Ue.array[He+3]=U.w,Ue.array[He+4]=D.x,Ue.array[He+5]=D.y,Ue.array[He+6]=D.z,Ue.array[He+7]=D.w,Ue.array[He+8]=V.x,Ue.array[He+9]=V.y,Ue.array[He+10]=V.z,Ue.array[He+11]=V.w,He+=12;else if("faces"===Ue.boundTo)for(b=0,w=qe.length;w>b;b++)V=D=U=xe=Ue.value[qe[b]],Ue.array[He]=U.x,Ue.array[He+1]=U.y,Ue.array[He+2]=U.z,Ue.array[He+3]=U.w,Ue.array[He+4]=D.x,Ue.array[He+5]=D.y,Ue.array[He+6]=D.z,Ue.array[He+7]=D.w,Ue.array[He+8]=V.x,Ue.array[He+9]=V.y,Ue.array[He+10]=V.z,Ue.array[He+11]=V.w,He+=12;else if("faceVertices"===Ue.boundTo)for(b=0,w=qe.length;w>b;b++)xe=Ue.value[qe[b]],U=xe[0],D=xe[1],V=xe[2],Ue.array[He]=U.x,Ue.array[He+1]=U.y,Ue.array[He+2]=U.z,Ue.array[He+3]=U.w,Ue.array[He+4]=D.x,Ue.array[He+5]=D.y,Ue.array[He+6]=D.z,Ue.array[He+7]=D.w,Ue.array[He+8]=V.x,Ue.array[He+9]=V.y,Ue.array[He+10]=V.z,Ue.array[He+11]=V.w,He+=12;Y.bindBuffer(Y.ARRAY_BUFFER,Ue.buffer),Y.bufferData(Y.ARRAY_BUFFER,Ue.array,y)}v&&(delete g.__inittedArrays,delete g.__colorArray,delete g.__normalArray,delete g.__tangentArray,delete g.__uvArray,delete g.__uv2Array,delete g.__faceArray,delete g.__vertexArray,delete g.__lineArray,delete g.__skinIndexArray,delete g.__skinWeightArray)}}}t.verticesNeedUpdate=!1,t.morphTargetsNeedUpdate=!1,t.elementsNeedUpdate=!1,t.uvsNeedUpdate=!1,t.normalsNeedUpdate=!1,t.colorsNeedUpdate=!1,t.tangentsNeedUpdate=!1,m.attributes&&f(m)}else if(e instanceof THREE.Line){if(m=r(e,t),T=m.attributes&&d(m),t.verticesNeedUpdate||t.colorsNeedUpdate||t.lineDistancesNeedUpdate||T){var rt,it,nt,ot,at,st,ht,lt,ct,ut,Et,pt,dt=Y.DYNAMIC_DRAW,ft=t.vertices,mt=t.colors,Tt=t.lineDistances,gt=ft.length,Rt=mt.length,yt=Tt.length,vt=t.__vertexArray,Ht=t.__colorArray,xt=t.__lineDistanceArray,bt=t.colorsNeedUpdate,wt=t.lineDistancesNeedUpdate,_t=t.__webglCustomAttributesList;if(t.verticesNeedUpdate){for(rt=0;gt>rt;rt++)ot=ft[rt],at=3*rt,vt[at]=ot.x,vt[at+1]=ot.y,vt[at+2]=ot.z;Y.bindBuffer(Y.ARRAY_BUFFER,t.__webglVertexBuffer),Y.bufferData(Y.ARRAY_BUFFER,vt,dt)}if(bt){for(it=0;Rt>it;it++)st=mt[it],at=3*it,Ht[at]=st.r,Ht[at+1]=st.g,Ht[at+2]=st.b;Y.bindBuffer(Y.ARRAY_BUFFER,t.__webglColorBuffer),Y.bufferData(Y.ARRAY_BUFFER,Ht,dt)}if(wt){for(nt=0;yt>nt;nt++)xt[nt]=Tt[nt];Y.bindBuffer(Y.ARRAY_BUFFER,t.__webglLineDistanceBuffer),Y.bufferData(Y.ARRAY_BUFFER,xt,dt)}if(_t)for(ht=0,lt=_t.length;lt>ht;ht++)if(pt=_t[ht],pt.needsUpdate&&(void 0===pt.boundTo||"vertices"===pt.boundTo)){if(at=0,ut=pt.value.length,1===pt.size)for(ct=0;ut>ct;ct++)pt.array[ct]=pt.value[ct];else if(2===pt.size)for(ct=0;ut>ct;ct++)Et=pt.value[ct],pt.array[at]=Et.x,pt.array[at+1]=Et.y,at+=2;else if(3===pt.size)if("c"===pt.type)for(ct=0;ut>ct;ct++)Et=pt.value[ct],pt.array[at]=Et.r,pt.array[at+1]=Et.g,pt.array[at+2]=Et.b,at+=3;else for(ct=0;ut>ct;ct++)Et=pt.value[ct],pt.array[at]=Et.x,pt.array[at+1]=Et.y,pt.array[at+2]=Et.z,at+=3;else if(4===pt.size)for(ct=0;ut>ct;ct++)Et=pt.value[ct],pt.array[at]=Et.x,pt.array[at+1]=Et.y,pt.array[at+2]=Et.z,pt.array[at+3]=Et.w,at+=4;Y.bindBuffer(Y.ARRAY_BUFFER,pt.buffer),Y.bufferData(Y.ARRAY_BUFFER,pt.array,dt),pt.needsUpdate=!1}}t.verticesNeedUpdate=!1,t.colorsNeedUpdate=!1,t.lineDistancesNeedUpdate=!1,m.attributes&&f(m)}else if(e instanceof THREE.PointCloud){if(m=r(e,t),T=m.attributes&&d(m),t.verticesNeedUpdate||t.colorsNeedUpdate||T){var Mt,St,Ct,At,Lt,Pt,Ft,Bt,Ut,Dt,Vt,zt=Y.DYNAMIC_DRAW,kt=t.vertices,Nt=kt.length,Ot=t.colors,Gt=Ot.length,It=t.__vertexArray,Wt=t.__colorArray,jt=t.colorsNeedUpdate,Xt=t.__webglCustomAttributesList;if(t.verticesNeedUpdate){for(Mt=0;Nt>Mt;Mt++)Ct=kt[Mt],At=3*Mt,It[At]=Ct.x,It[At+1]=Ct.y,It[At+2]=Ct.z;Y.bindBuffer(Y.ARRAY_BUFFER,t.__webglVertexBuffer),Y.bufferData(Y.ARRAY_BUFFER,It,zt)}if(jt){for(St=0;Gt>St;St++)Lt=Ot[St],At=3*St,Wt[At]=Lt.r,Wt[At+1]=Lt.g,Wt[At+2]=Lt.b;Y.bindBuffer(Y.ARRAY_BUFFER,t.__webglColorBuffer),Y.bufferData(Y.ARRAY_BUFFER,Wt,zt)}if(Xt)for(Pt=0,Ft=Xt.length;Ft>Pt;Pt++){if(Vt=Xt[Pt],Vt.needsUpdate&&(void 0===Vt.boundTo||"vertices"===Vt.boundTo))if(Ut=Vt.value.length,At=0,1===Vt.size)for(Bt=0;Ut>Bt;Bt++)Vt.array[Bt]=Vt.value[Bt];else if(2===Vt.size)for(Bt=0;Ut>Bt;Bt++)Dt=Vt.value[Bt],Vt.array[At]=Dt.x,Vt.array[At+1]=Dt.y,At+=2;else if(3===Vt.size)if("c"===Vt.type)for(Bt=0;Ut>Bt;Bt++)Dt=Vt.value[Bt],Vt.array[At]=Dt.r,Vt.array[At+1]=Dt.g,Vt.array[At+2]=Dt.b,At+=3;else for(Bt=0;Ut>Bt;Bt++)Dt=Vt.value[Bt],Vt.array[At]=Dt.x,Vt.array[At+1]=Dt.y,Vt.array[At+2]=Dt.z,At+=3;else if(4===Vt.size)for(Bt=0;Ut>Bt;Bt++)Dt=Vt.value[Bt],Vt.array[At]=Dt.x,Vt.array[At+1]=Dt.y,Vt.array[At+2]=Dt.z,Vt.array[At+3]=Dt.w,At+=4;Y.bindBuffer(Y.ARRAY_BUFFER,Vt.buffer),Y.bufferData(Y.ARRAY_BUFFER,Vt.array,zt),Vt.needsUpdate=!1}}t.verticesNeedUpdate=!1,t.colorsNeedUpdate=!1,m.attributes&&f(m)}}function d(e){for(var t in e.attributes)if(e.attributes[t].needsUpdate)return!0;return!1}function f(e){for(var t in e.attributes)e.attributes[t].needsUpdate=!1}function m(e){!0===e.transparent?Te.setBlending(e.blending,e.blendEquation,e.blendSrc,e.blendDst,e.blendEquationAlpha,e.blendSrcAlpha,e.blendDstAlpha):Te.setBlending(THREE.NoBlending),Te.setDepthTest(e.depthTest),Te.setDepthWrite(e.depthWrite),Te.setColorWrite(e.colorWrite),Te.setPolygonOffset(e.polygonOffset,e.polygonOffsetFactor,e.polygonOffsetUnits)}function T(e,t,r,i,n){var o,a,s,h;if(re=0,i.needsUpdate){i.program&&We(i),i.addEventListener("dispose",Ge);var l=qe[i.type];if(l){var c=THREE.ShaderLib[l];i.__webglShader={uniforms:THREE.UniformsUtils.clone(c.uniforms),vertexShader:c.vertexShader,fragmentShader:c.fragmentShader}}else i.__webglShader={uniforms:i.uniforms,vertexShader:i.vertexShader,fragmentShader:i.fragmentShader};for(var u=0,E=0,p=0,d=0,f=0,m=t.length;m>f;f++){var T=t[f];T.onlyShadow||!1===T.visible||(T instanceof THREE.DirectionalLight&&u++,T instanceof THREE.PointLight&&E++,T instanceof THREE.SpotLight&&p++,T instanceof THREE.HemisphereLight&&d++)}o=u,a=E,s=p,h=d;for(var y,b=0,w=0,_=t.length;_>w;w++){var C=t[w];C.castShadow&&(C instanceof THREE.SpotLight&&b++,C instanceof THREE.DirectionalLight&&!C.shadowCascade&&b++)}y=b;var A;if(Me&&n&&n.skeleton&&n.skeleton.useVertexTexture)A=1024;else{var P=Y.getParameter(Y.MAX_VERTEX_UNIFORM_VECTORS),F=Math.floor((P-20)/4);void 0!==n&&n instanceof THREE.SkinnedMesh&&(F=Math.min(n.skeleton.bones.length,F),F<n.skeleton.bones.length&&THREE.warn("WebGLRenderer: too many bones - "+n.skeleton.bones.length+", this GPU supports just "+F+" (try OpenGL instead of ANGLE)")),A=F}var B={precision:L,supportsVertexTextures:_e,map:!!i.map,envMap:!!i.envMap,envMapMode:i.envMap&&i.envMap.mapping,lightMap:!!i.lightMap,bumpMap:!!i.bumpMap,normalMap:!!i.normalMap,specularMap:!!i.specularMap,alphaMap:!!i.alphaMap,combine:i.combine,vertexColors:i.vertexColors,fog:r,useFog:i.fog,fogExp:r instanceof THREE.FogExp2,flatShading:i.shading===THREE.FlatShading,sizeAttenuation:i.sizeAttenuation,logarithmicDepthBuffer:z,skinning:i.skinning,maxBones:A,useVertexTexture:Me&&n&&n.skeleton&&n.skeleton.useVertexTexture,morphTargets:i.morphTargets,morphNormals:i.morphNormals,maxMorphTargets:K.maxMorphTargets,maxMorphNormals:K.maxMorphNormals,maxDirLights:o,maxPointLights:a,maxSpotLights:s,maxHemiLights:h,maxShadows:y,shadowMapEnabled:K.shadowMapEnabled&&n.receiveShadow&&y>0,shadowMapType:K.shadowMapType,shadowMapDebug:K.shadowMapDebug,shadowMapCascade:K.shadowMapCascade,alphaTest:i.alphaTest,metal:i.metal,wrapAround:i.wrapAround,doubleSided:i.side===THREE.DoubleSide,flipSided:i.side===THREE.BackSide},U=[];if(l?U.push(l):(U.push(i.fragmentShader),U.push(i.vertexShader)),void 0!==i.defines)for(var D in i.defines)U.push(D),U.push(i.defines[D]);for(D in B)U.push(D),U.push(B[D]);for(var V,k=U.join(),N=0,O=Q.length;O>N;N++){var G=Q[N];if(G.code===k){V=G,V.usedTimes++;break}}void 0===V&&(V=new THREE.WebGLProgram(K,k,i,B),Q.push(V),K.info.memory.programs=Q.length),i.program=V;var I=V.attributes;if(i.morphTargets){i.numSupportedMorphTargets=0;for(var W,j="morphTarget",X=0;X<K.maxMorphTargets;X++)W=j+X,0<=I[W]&&i.numSupportedMorphTargets++}if(i.morphNormals)for(i.numSupportedMorphNormals=0,j="morphNormal",X=0;X<K.maxMorphNormals;X++)W=j+X,0<=I[W]&&i.numSupportedMorphNormals++;i.uniformsList=[];for(var q in i.__webglShader.uniforms){
var J=i.program.uniforms[q];J&&i.uniformsList.push([i.__webglShader.uniforms[q],J])}i.needsUpdate=!1}i.morphTargets&&!n.__webglMorphTargetInfluences&&(n.__webglMorphTargetInfluences=new Float32Array(K.maxMorphTargets));var ee=!1,ie=!1,ne=!1,oe=i.program,ae=oe.uniforms,se=i.__webglShader.uniforms;if(oe.id!==Z&&(Y.useProgram(oe.program),Z=oe.id,ne=ie=ee=!0),i.id!==$&&(-1===$&&(ne=!0),$=i.id,ie=!0),(ee||e!==te)&&(Y.uniformMatrix4fv(ae.projectionMatrix,!1,e.projectionMatrix.elements),z&&Y.uniform1f(ae.logDepthBufFC,2/(Math.log(e.far+1)/Math.LN2)),e!==te&&(te=e),(i instanceof THREE.ShaderMaterial||i instanceof THREE.MeshPhongMaterial||i.envMap)&&null!==ae.cameraPosition&&(ue.setFromMatrixPosition(e.matrixWorld),Y.uniform3f(ae.cameraPosition,ue.x,ue.y,ue.z)),(i instanceof THREE.MeshPhongMaterial||i instanceof THREE.MeshLambertMaterial||i instanceof THREE.MeshBasicMaterial||i instanceof THREE.ShaderMaterial||i.skinning)&&null!==ae.viewMatrix&&Y.uniformMatrix4fv(ae.viewMatrix,!1,e.matrixWorldInverse.elements)),i.skinning)if(n.bindMatrix&&null!==ae.bindMatrix&&Y.uniformMatrix4fv(ae.bindMatrix,!1,n.bindMatrix.elements),n.bindMatrixInverse&&null!==ae.bindMatrixInverse&&Y.uniformMatrix4fv(ae.bindMatrixInverse,!1,n.bindMatrixInverse.elements),Me&&n.skeleton&&n.skeleton.useVertexTexture){if(null!==ae.boneTexture){var he=R();Y.uniform1i(ae.boneTexture,he),K.setTexture(n.skeleton.boneTexture,he)}null!==ae.boneTextureWidth&&Y.uniform1i(ae.boneTextureWidth,n.skeleton.boneTextureWidth),null!==ae.boneTextureHeight&&Y.uniform1i(ae.boneTextureHeight,n.skeleton.boneTextureHeight)}else n.skeleton&&n.skeleton.boneMatrices&&null!==ae.boneGlobalMatrices&&Y.uniformMatrix4fv(ae.boneGlobalMatrices,!1,n.skeleton.boneMatrices);if(ie){if(r&&i.fog&&(se.fogColor.value=r.color,r instanceof THREE.Fog?(se.fogNear.value=r.near,se.fogFar.value=r.far):r instanceof THREE.FogExp2&&(se.fogDensity.value=r.density)),i instanceof THREE.MeshPhongMaterial||i instanceof THREE.MeshLambertMaterial||i.lights){if(pe){var le,ce,fe,me,Te,ge,Re,ye,ne=!0,ve=0,He=0,xe=0,be=de,Se=be.directional.colors,Ce=be.directional.positions,Ae=be.point.colors,Le=be.point.positions,Fe=be.point.distances,Be=be.point.decays,Ue=be.spot.colors,De=be.spot.positions,Ve=be.spot.distances,ze=be.spot.directions,ke=be.spot.anglesCos,Oe=be.spot.exponents,Ie=be.spot.decays,je=be.hemi.skyColors,Xe=be.hemi.groundColors,Ye=be.hemi.positions,Ke=0,Qe=0,Ze=0,Je=0,$e=0,et=0,tt=0,rt=0,it=0,nt=0,ot=0,at=0;for(le=0,ce=t.length;ce>le;le++)fe=t[le],fe.onlyShadow||(me=fe.color,Re=fe.intensity,ye=fe.distance,fe instanceof THREE.AmbientLight?fe.visible&&(ve+=me.r,He+=me.g,xe+=me.b):fe instanceof THREE.DirectionalLight?($e+=1,fe.visible&&(Ee.setFromMatrixPosition(fe.matrixWorld),ue.setFromMatrixPosition(fe.target.matrixWorld),Ee.sub(ue),Ee.normalize(),it=3*Ke,Ce[it]=Ee.x,Ce[it+1]=Ee.y,Ce[it+2]=Ee.z,v(Se,it,me,Re),Ke+=1)):fe instanceof THREE.PointLight?(et+=1,fe.visible&&(nt=3*Qe,v(Ae,nt,me,Re),ue.setFromMatrixPosition(fe.matrixWorld),Le[nt]=ue.x,Le[nt+1]=ue.y,Le[nt+2]=ue.z,Fe[Qe]=ye,Be[Qe]=0===fe.distance?0:fe.decay,Qe+=1)):fe instanceof THREE.SpotLight?(tt+=1,fe.visible&&(ot=3*Ze,v(Ue,ot,me,Re),Ee.setFromMatrixPosition(fe.matrixWorld),De[ot]=Ee.x,De[ot+1]=Ee.y,De[ot+2]=Ee.z,Ve[Ze]=ye,ue.setFromMatrixPosition(fe.target.matrixWorld),Ee.sub(ue),Ee.normalize(),ze[ot]=Ee.x,ze[ot+1]=Ee.y,ze[ot+2]=Ee.z,ke[Ze]=Math.cos(fe.angle),Oe[Ze]=fe.exponent,Ie[Ze]=0===fe.distance?0:fe.decay,Ze+=1)):fe instanceof THREE.HemisphereLight&&(rt+=1,fe.visible&&(Ee.setFromMatrixPosition(fe.matrixWorld),Ee.normalize(),at=3*Je,Ye[at]=Ee.x,Ye[at+1]=Ee.y,Ye[at+2]=Ee.z,Te=fe.color,ge=fe.groundColor,v(je,at,Te,Re),v(Xe,at,ge,Re),Je+=1)));for(le=3*Ke,ce=Math.max(Se.length,3*$e);ce>le;le++)Se[le]=0;for(le=3*Qe,ce=Math.max(Ae.length,3*et);ce>le;le++)Ae[le]=0;for(le=3*Ze,ce=Math.max(Ue.length,3*tt);ce>le;le++)Ue[le]=0;for(le=3*Je,ce=Math.max(je.length,3*rt);ce>le;le++)je[le]=0;for(le=3*Je,ce=Math.max(Xe.length,3*rt);ce>le;le++)Xe[le]=0;be.directional.length=Ke,be.point.length=Qe,be.spot.length=Ze,be.hemi.length=Je,be.ambient[0]=ve,be.ambient[1]=He,be.ambient[2]=xe,pe=!1}if(ne){var st=de;se.ambientLightColor.value=st.ambient,se.directionalLightColor.value=st.directional.colors,se.directionalLightDirection.value=st.directional.positions,se.pointLightColor.value=st.point.colors,se.pointLightPosition.value=st.point.positions,se.pointLightDistance.value=st.point.distances,se.pointLightDecay.value=st.point.decays,se.spotLightColor.value=st.spot.colors,se.spotLightPosition.value=st.spot.positions,se.spotLightDistance.value=st.spot.distances,se.spotLightDirection.value=st.spot.directions,se.spotLightAngleCos.value=st.spot.anglesCos,se.spotLightExponent.value=st.spot.exponents,se.spotLightDecay.value=st.spot.decays,se.hemisphereLightSkyColor.value=st.hemi.skyColors,se.hemisphereLightGroundColor.value=st.hemi.groundColors,se.hemisphereLightDirection.value=st.hemi.positions,g(se,!0)}else g(se,!1)}if(i instanceof THREE.MeshBasicMaterial||i instanceof THREE.MeshLambertMaterial||i instanceof THREE.MeshPhongMaterial){se.opacity.value=i.opacity,se.diffuse.value=i.color,se.map.value=i.map,se.lightMap.value=i.lightMap,se.specularMap.value=i.specularMap,se.alphaMap.value=i.alphaMap,i.bumpMap&&(se.bumpMap.value=i.bumpMap,se.bumpScale.value=i.bumpScale),i.normalMap&&(se.normalMap.value=i.normalMap,se.normalScale.value.copy(i.normalScale));var ht;if(i.map?ht=i.map:i.specularMap?ht=i.specularMap:i.normalMap?ht=i.normalMap:i.bumpMap?ht=i.bumpMap:i.alphaMap&&(ht=i.alphaMap),void 0!==ht){var lt=ht.offset,ct=ht.repeat;se.offsetRepeat.value.set(lt.x,lt.y,ct.x,ct.y)}se.envMap.value=i.envMap,se.flipEnvMap.value=i.envMap instanceof THREE.WebGLRenderTargetCube?1:-1,se.reflectivity.value=i.reflectivity,se.refractionRatio.value=i.refractionRatio}if(i instanceof THREE.LineBasicMaterial)se.diffuse.value=i.color,se.opacity.value=i.opacity;else if(i instanceof THREE.LineDashedMaterial)se.diffuse.value=i.color,se.opacity.value=i.opacity,se.dashSize.value=i.dashSize,se.totalSize.value=i.dashSize+i.gapSize,se.scale.value=i.scale;else if(i instanceof THREE.PointCloudMaterial){if(se.psColor.value=i.color,se.opacity.value=i.opacity,se.size.value=i.size,se.scale.value=S.height/2,se.map.value=i.map,null!==i.map){var ut=i.map.offset,Et=i.map.repeat;se.offsetRepeat.value.set(ut.x,ut.y,Et.x,Et.y)}}else i instanceof THREE.MeshPhongMaterial?(se.shininess.value=i.shininess,se.emissive.value=i.emissive,se.specular.value=i.specular,i.wrapAround&&se.wrapRGB.value.copy(i.wrapRGB)):i instanceof THREE.MeshLambertMaterial?(se.emissive.value=i.emissive,i.wrapAround&&se.wrapRGB.value.copy(i.wrapRGB)):i instanceof THREE.MeshDepthMaterial?(se.mNear.value=e.near,se.mFar.value=e.far,se.opacity.value=i.opacity):i instanceof THREE.MeshNormalMaterial&&(se.opacity.value=i.opacity);if(n.receiveShadow&&!i._shadowPass&&se.shadowMatrix)for(var pt=0,dt=0,ft=t.length;ft>dt;dt++){var mt=t[dt];mt.castShadow&&(mt instanceof THREE.SpotLight||mt instanceof THREE.DirectionalLight&&!mt.shadowCascade)&&(se.shadowMap.value[pt]=mt.shadowMap,se.shadowMapSize.value[pt]=mt.shadowMapSize,se.shadowMatrix.value[pt]=mt.shadowMatrix,se.shadowDarkness.value[pt]=mt.shadowDarkness,se.shadowBias.value[pt]=mt.shadowBias,pt++)}for(var Tt,gt,Rt,yt=i.uniformsList,vt=0,Ht=yt.length;Ht>vt;vt++){var xt=yt[vt][0];if(!1!==xt.needsUpdate){var bt=xt.type,wt=xt.value,_t=yt[vt][1];switch(bt){case"1i":Y.uniform1i(_t,wt);break;case"1f":Y.uniform1f(_t,wt);break;case"2f":Y.uniform2f(_t,wt[0],wt[1]);break;case"3f":Y.uniform3f(_t,wt[0],wt[1],wt[2]);break;case"4f":Y.uniform4f(_t,wt[0],wt[1],wt[2],wt[3]);break;case"1iv":Y.uniform1iv(_t,wt);break;case"3iv":Y.uniform3iv(_t,wt);break;case"1fv":Y.uniform1fv(_t,wt);break;case"2fv":Y.uniform2fv(_t,wt);break;case"3fv":Y.uniform3fv(_t,wt);break;case"4fv":Y.uniform4fv(_t,wt);break;case"Matrix3fv":Y.uniformMatrix3fv(_t,!1,wt);break;case"Matrix4fv":Y.uniformMatrix4fv(_t,!1,wt);break;case"i":Y.uniform1i(_t,wt);break;case"f":Y.uniform1f(_t,wt);break;case"v2":Y.uniform2f(_t,wt.x,wt.y);break;case"v3":Y.uniform3f(_t,wt.x,wt.y,wt.z);break;case"v4":Y.uniform4f(_t,wt.x,wt.y,wt.z,wt.w);break;case"c":Y.uniform3f(_t,wt.r,wt.g,wt.b);break;case"iv1":Y.uniform1iv(_t,wt);break;case"iv":Y.uniform3iv(_t,wt);break;case"fv1":Y.uniform1fv(_t,wt);break;case"fv":Y.uniform3fv(_t,wt);break;case"v2v":void 0===xt._array&&(xt._array=new Float32Array(2*wt.length));for(var Mt=0,St=wt.length;St>Mt;Mt++)Rt=2*Mt,xt._array[Rt]=wt[Mt].x,xt._array[Rt+1]=wt[Mt].y;Y.uniform2fv(_t,xt._array);break;case"v3v":for(void 0===xt._array&&(xt._array=new Float32Array(3*wt.length)),Mt=0,St=wt.length;St>Mt;Mt++)Rt=3*Mt,xt._array[Rt]=wt[Mt].x,xt._array[Rt+1]=wt[Mt].y,xt._array[Rt+2]=wt[Mt].z;Y.uniform3fv(_t,xt._array);break;case"v4v":for(void 0===xt._array&&(xt._array=new Float32Array(4*wt.length)),Mt=0,St=wt.length;St>Mt;Mt++)Rt=4*Mt,xt._array[Rt]=wt[Mt].x,xt._array[Rt+1]=wt[Mt].y,xt._array[Rt+2]=wt[Mt].z,xt._array[Rt+3]=wt[Mt].w;Y.uniform4fv(_t,xt._array);break;case"m3":Y.uniformMatrix3fv(_t,!1,wt.elements);break;case"m3v":for(void 0===xt._array&&(xt._array=new Float32Array(9*wt.length)),Mt=0,St=wt.length;St>Mt;Mt++)wt[Mt].flattenToArrayOffset(xt._array,9*Mt);Y.uniformMatrix3fv(_t,!1,xt._array);break;case"m4":Y.uniformMatrix4fv(_t,!1,wt.elements);break;case"m4v":for(void 0===xt._array&&(xt._array=new Float32Array(16*wt.length)),Mt=0,St=wt.length;St>Mt;Mt++)wt[Mt].flattenToArrayOffset(xt._array,16*Mt);Y.uniformMatrix4fv(_t,!1,xt._array);break;case"t":if(Tt=wt,gt=R(),Y.uniform1i(_t,gt),!Tt)continue;if(Tt instanceof THREE.CubeTexture||Tt.image instanceof Array&&6===Tt.image.length){var Ct=Tt,At=gt;if(6===Ct.image.length)if(Ct.needsUpdate){Ct.image.__webglTextureCube||(Ct.addEventListener("dispose",Ne),Ct.image.__webglTextureCube=Y.createTexture(),K.info.memory.textures++),Y.activeTexture(Y.TEXTURE0+At),Y.bindTexture(Y.TEXTURE_CUBE_MAP,Ct.image.__webglTextureCube),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Ct.flipY);for(var Lt=Ct instanceof THREE.CompressedTexture,Pt=Ct.image[0]instanceof THREE.DataTexture,Ft=[],Bt=0;6>Bt;Bt++)Ft[Bt]=!K.autoScaleCubemaps||Lt||Pt?Pt?Ct.image[Bt].image:Ct.image[Bt]:x(Ct.image[Bt],we);var Ut=Ft[0],Dt=THREE.Math.isPowerOfTwo(Ut.width)&&THREE.Math.isPowerOfTwo(Ut.height),Vt=M(Ct.format),zt=M(Ct.type);for(H(Y.TEXTURE_CUBE_MAP,Ct,Dt),Bt=0;6>Bt;Bt++)if(Lt)for(var kt,Nt=Ft[Bt].mipmaps,Ot=0,Gt=Nt.length;Gt>Ot;Ot++)kt=Nt[Ot],Ct.format!==THREE.RGBAFormat&&Ct.format!==THREE.RGBFormat?-1<Pe().indexOf(Vt)?Y.compressedTexImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,Ot,Vt,kt.width,kt.height,0,kt.data):THREE.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()"):Y.texImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,Ot,Vt,kt.width,kt.height,0,Vt,zt,kt.data);else Pt?Y.texImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,Vt,Ft[Bt].width,Ft[Bt].height,0,Vt,zt,Ft[Bt].data):Y.texImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,Vt,Vt,zt,Ft[Bt]);Ct.generateMipmaps&&Dt&&Y.generateMipmap(Y.TEXTURE_CUBE_MAP),Ct.needsUpdate=!1,Ct.onUpdate&&Ct.onUpdate()}else Y.activeTexture(Y.TEXTURE0+At),Y.bindTexture(Y.TEXTURE_CUBE_MAP,Ct.image.__webglTextureCube)}else if(Tt instanceof THREE.WebGLRenderTargetCube){var It=Tt;Y.activeTexture(Y.TEXTURE0+gt),Y.bindTexture(Y.TEXTURE_CUBE_MAP,It.__webglTexture)}else K.setTexture(Tt,gt);break;case"tv":for(void 0===xt._array&&(xt._array=[]),Mt=0,St=xt.value.length;St>Mt;Mt++)xt._array[Mt]=R();for(Y.uniform1iv(_t,xt._array),Mt=0,St=xt.value.length;St>Mt;Mt++)Tt=xt.value[Mt],gt=xt._array[Mt],Tt&&K.setTexture(Tt,gt);break;default:THREE.warn("THREE.WebGLRenderer: Unknown uniform type: "+bt)}}}}return Y.uniformMatrix4fv(ae.modelViewMatrix,!1,n._modelViewMatrix.elements),ae.normalMatrix&&Y.uniformMatrix3fv(ae.normalMatrix,!1,n._normalMatrix.elements),null!==ae.modelMatrix&&Y.uniformMatrix4fv(ae.modelMatrix,!1,n.matrixWorld.elements),oe}function g(e,t){e.ambientLightColor.needsUpdate=t,e.directionalLightColor.needsUpdate=t,e.directionalLightDirection.needsUpdate=t,e.pointLightColor.needsUpdate=t,e.pointLightPosition.needsUpdate=t,e.pointLightDistance.needsUpdate=t,e.pointLightDecay.needsUpdate=t,e.spotLightColor.needsUpdate=t,e.spotLightPosition.needsUpdate=t,e.spotLightDistance.needsUpdate=t,e.spotLightDirection.needsUpdate=t,e.spotLightAngleCos.needsUpdate=t,e.spotLightExponent.needsUpdate=t,e.spotLightDecay.needsUpdate=t,e.hemisphereLightSkyColor.needsUpdate=t,e.hemisphereLightGroundColor.needsUpdate=t,e.hemisphereLightDirection.needsUpdate=t}function R(){var e=re;return e>=He&&THREE.warn("WebGLRenderer: trying to use "+e+" texture units while this GPU supports only "+He),re+=1,e}function y(e,t){e._modelViewMatrix.multiplyMatrices(t.matrixWorldInverse,e.matrixWorld),e._normalMatrix.getNormalMatrix(e._modelViewMatrix)}function v(e,t,r,i){e[t]=r.r*i,e[t+1]=r.g*i,e[t+2]=r.b*i}function H(e,t,r){r?(Y.texParameteri(e,Y.TEXTURE_WRAP_S,M(t.wrapS)),Y.texParameteri(e,Y.TEXTURE_WRAP_T,M(t.wrapT)),Y.texParameteri(e,Y.TEXTURE_MAG_FILTER,M(t.magFilter)),Y.texParameteri(e,Y.TEXTURE_MIN_FILTER,M(t.minFilter))):(Y.texParameteri(e,Y.TEXTURE_WRAP_S,Y.CLAMP_TO_EDGE),Y.texParameteri(e,Y.TEXTURE_WRAP_T,Y.CLAMP_TO_EDGE),t.wrapS===THREE.ClampToEdgeWrapping&&t.wrapT===THREE.ClampToEdgeWrapping||THREE.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping. ( "+t.sourceFile+" )"),Y.texParameteri(e,Y.TEXTURE_MAG_FILTER,_(t.magFilter)),Y.texParameteri(e,Y.TEXTURE_MIN_FILTER,_(t.minFilter)),t.minFilter!==THREE.NearestFilter&&t.minFilter!==THREE.LinearFilter&&THREE.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter. ( "+t.sourceFile+" )")),(r=ge.get("EXT_texture_filter_anisotropic"))&&t.type!==THREE.FloatType&&t.type!==THREE.HalfFloatType&&(1<t.anisotropy||t.__currentAnisotropy)&&(Y.texParameterf(e,r.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,K.getMaxAnisotropy())),t.__currentAnisotropy=t.anisotropy)}function x(e,t){if(e.width>t||e.height>t){var r=t/Math.max(e.width,e.height),i=document.createElement("canvas");return i.width=Math.floor(e.width*r),i.height=Math.floor(e.height*r),i.getContext("2d").drawImage(e,0,0,e.width,e.height,0,0,i.width,i.height),THREE.warn("THREE.WebGLRenderer: image is too big ("+e.width+"x"+e.height+"). Resized to "+i.width+"x"+i.height,e),i}return e}function b(e,t){Y.bindRenderbuffer(Y.RENDERBUFFER,e),t.depthBuffer&&!t.stencilBuffer?(Y.renderbufferStorage(Y.RENDERBUFFER,Y.DEPTH_COMPONENT16,t.width,t.height),Y.framebufferRenderbuffer(Y.FRAMEBUFFER,Y.DEPTH_ATTACHMENT,Y.RENDERBUFFER,e)):t.depthBuffer&&t.stencilBuffer?(Y.renderbufferStorage(Y.RENDERBUFFER,Y.DEPTH_STENCIL,t.width,t.height),Y.framebufferRenderbuffer(Y.FRAMEBUFFER,Y.DEPTH_STENCIL_ATTACHMENT,Y.RENDERBUFFER,e)):Y.renderbufferStorage(Y.RENDERBUFFER,Y.RGBA4,t.width,t.height)}function w(e){e instanceof THREE.WebGLRenderTargetCube?(Y.bindTexture(Y.TEXTURE_CUBE_MAP,e.__webglTexture),Y.generateMipmap(Y.TEXTURE_CUBE_MAP),Y.bindTexture(Y.TEXTURE_CUBE_MAP,null)):(Y.bindTexture(Y.TEXTURE_2D,e.__webglTexture),Y.generateMipmap(Y.TEXTURE_2D),Y.bindTexture(Y.TEXTURE_2D,null))}function _(e){return e===THREE.NearestFilter||e===THREE.NearestMipMapNearestFilter||e===THREE.NearestMipMapLinearFilter?Y.NEAREST:Y.LINEAR}function M(e){var t;if(e===THREE.RepeatWrapping)return Y.REPEAT;if(e===THREE.ClampToEdgeWrapping)return Y.CLAMP_TO_EDGE;if(e===THREE.MirroredRepeatWrapping)return Y.MIRRORED_REPEAT;if(e===THREE.NearestFilter)return Y.NEAREST;if(e===THREE.NearestMipMapNearestFilter)return Y.NEAREST_MIPMAP_NEAREST;if(e===THREE.NearestMipMapLinearFilter)return Y.NEAREST_MIPMAP_LINEAR;if(e===THREE.LinearFilter)return Y.LINEAR;if(e===THREE.LinearMipMapNearestFilter)return Y.LINEAR_MIPMAP_NEAREST;if(e===THREE.LinearMipMapLinearFilter)return Y.LINEAR_MIPMAP_LINEAR;if(e===THREE.UnsignedByteType)return Y.UNSIGNED_BYTE;if(e===THREE.UnsignedShort4444Type)return Y.UNSIGNED_SHORT_4_4_4_4;if(e===THREE.UnsignedShort5551Type)return Y.UNSIGNED_SHORT_5_5_5_1;if(e===THREE.UnsignedShort565Type)return Y.UNSIGNED_SHORT_5_6_5;if(e===THREE.ByteType)return Y.BYTE;if(e===THREE.ShortType)return Y.SHORT;if(e===THREE.UnsignedShortType)return Y.UNSIGNED_SHORT;if(e===THREE.IntType)return Y.INT;if(e===THREE.UnsignedIntType)return Y.UNSIGNED_INT;if(e===THREE.FloatType)return Y.FLOAT;if(t=ge.get("OES_texture_half_float"),null!==t&&e===THREE.HalfFloatType)return t.HALF_FLOAT_OES;if(e===THREE.AlphaFormat)return Y.ALPHA;if(e===THREE.RGBFormat)return Y.RGB;if(e===THREE.RGBAFormat)return Y.RGBA;if(e===THREE.LuminanceFormat)return Y.LUMINANCE;if(e===THREE.LuminanceAlphaFormat)return Y.LUMINANCE_ALPHA;if(e===THREE.AddEquation)return Y.FUNC_ADD;if(e===THREE.SubtractEquation)return Y.FUNC_SUBTRACT;if(e===THREE.ReverseSubtractEquation)return Y.FUNC_REVERSE_SUBTRACT;if(e===THREE.ZeroFactor)return Y.ZERO;if(e===THREE.OneFactor)return Y.ONE;if(e===THREE.SrcColorFactor)return Y.SRC_COLOR;if(e===THREE.OneMinusSrcColorFactor)return Y.ONE_MINUS_SRC_COLOR;if(e===THREE.SrcAlphaFactor)return Y.SRC_ALPHA;if(e===THREE.OneMinusSrcAlphaFactor)return Y.ONE_MINUS_SRC_ALPHA;if(e===THREE.DstAlphaFactor)return Y.DST_ALPHA;if(e===THREE.OneMinusDstAlphaFactor)return Y.ONE_MINUS_DST_ALPHA;if(e===THREE.DstColorFactor)return Y.DST_COLOR;if(e===THREE.OneMinusDstColorFactor)return Y.ONE_MINUS_DST_COLOR;if(e===THREE.SrcAlphaSaturateFactor)return Y.SRC_ALPHA_SATURATE;if(t=ge.get("WEBGL_compressed_texture_s3tc"),null!==t){if(e===THREE.RGB_S3TC_DXT1_Format)return t.COMPRESSED_RGB_S3TC_DXT1_EXT;if(e===THREE.RGBA_S3TC_DXT1_Format)return t.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(e===THREE.RGBA_S3TC_DXT3_Format)return t.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(e===THREE.RGBA_S3TC_DXT5_Format)return t.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t=ge.get("WEBGL_compressed_texture_pvrtc"),null!==t){if(e===THREE.RGB_PVRTC_4BPPV1_Format)return t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(e===THREE.RGB_PVRTC_2BPPV1_Format)return t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(e===THREE.RGBA_PVRTC_4BPPV1_Format)return t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(e===THREE.RGBA_PVRTC_2BPPV1_Format)return t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t=ge.get("EXT_blend_minmax"),null!==t){if(e===THREE.MinEquation)return t.MIN_EXT;if(e===THREE.MaxEquation)return t.MAX_EXT}return 0}console.log("THREE.WebGLRenderer",THREE.REVISION),e=e||{};var S=void 0!==e.canvas?e.canvas:document.createElement("canvas"),C=void 0!==e.context?e.context:null,A=1,L=void 0!==e.precision?e.precision:"highp",P=void 0!==e.alpha?e.alpha:!1,F=void 0!==e.depth?e.depth:!0,B=void 0!==e.stencil?e.stencil:!0,U=void 0!==e.antialias?e.antialias:!1,D=void 0!==e.premultipliedAlpha?e.premultipliedAlpha:!0,V=void 0!==e.preserveDrawingBuffer?e.preserveDrawingBuffer:!1,z=void 0!==e.logarithmicDepthBuffer?e.logarithmicDepthBuffer:!1,k=new THREE.Color(0),N=0,O=[],G={},I=[],W=[],j=[],X=[],q=[];this.domElement=S,this.context=null,this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0,this.gammaFactor=2,this.shadowMapEnabled=this.gammaOutput=this.gammaInput=!1,this.shadowMapType=THREE.PCFShadowMap,this.shadowMapCullFace=THREE.CullFaceFront,this.shadowMapCascade=this.shadowMapDebug=!1,this.maxMorphTargets=8,this.maxMorphNormals=4,this.autoScaleCubemaps=!0,this.info={memory:{programs:0,geometries:0,textures:0},render:{calls:0,vertices:0,faces:0,points:0}};var Y,K=this,Q=[],Z=null,J=null,$=-1,ee="",te=null,re=0,ie=0,ne=0,oe=S.width,ae=S.height,se=0,he=0,le=new THREE.Frustum,ce=new THREE.Matrix4,ue=new THREE.Vector3,Ee=new THREE.Vector3,pe=!0,de={ambient:[0,0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],positions:[],distances:[],decays:[]},spot:{length:0,colors:[],positions:[],distances:[],directions:[],anglesCos:[],exponents:[],decays:[]},hemi:{length:0,skyColors:[],groundColors:[],positions:[]}};try{var fe={alpha:P,depth:F,stencil:B,antialias:U,premultipliedAlpha:D,preserveDrawingBuffer:V};if(Y=C||S.getContext("webgl",fe)||S.getContext("experimental-webgl",fe),null===Y){if(null!==S.getContext("webgl"))throw"Error creating WebGL context with your selected attributes.";throw"Error creating WebGL context."}S.addEventListener("webglcontextlost",function(e){e.preventDefault(),ve(),ye(),G={}},!1)}catch(me){THREE.error("THREE.WebGLRenderer: "+me)}var Te=new THREE.WebGLState(Y,M);void 0===Y.getShaderPrecisionFormat&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}});var ge=new THREE.WebGLExtensions(Y);ge.get("OES_texture_float"),ge.get("OES_texture_float_linear"),ge.get("OES_texture_half_float"),ge.get("OES_texture_half_float_linear"),ge.get("OES_standard_derivatives"),z&&ge.get("EXT_frag_depth");var Re=function(e,t,r,i){!0===D&&(e*=i,t*=i,r*=i),Y.clearColor(e,t,r,i)},ye=function(){Y.clearColor(0,0,0,1),Y.clearDepth(1),Y.clearStencil(0),Y.enable(Y.DEPTH_TEST),Y.depthFunc(Y.LEQUAL),Y.frontFace(Y.CCW),Y.cullFace(Y.BACK),Y.enable(Y.CULL_FACE),Y.enable(Y.BLEND),Y.blendEquation(Y.FUNC_ADD),Y.blendFunc(Y.SRC_ALPHA,Y.ONE_MINUS_SRC_ALPHA),Y.viewport(ie,ne,oe,ae),Re(k.r,k.g,k.b,N)},ve=function(){te=Z=null,ee="",$=-1,pe=!0,Te.reset()};ye(),this.context=Y,this.state=Te;var He=Y.getParameter(Y.MAX_TEXTURE_IMAGE_UNITS),xe=Y.getParameter(Y.MAX_VERTEX_TEXTURE_IMAGE_UNITS),be=Y.getParameter(Y.MAX_TEXTURE_SIZE),we=Y.getParameter(Y.MAX_CUBE_MAP_TEXTURE_SIZE),_e=xe>0,Me=_e&&ge.get("OES_texture_float"),Se=Y.getShaderPrecisionFormat(Y.VERTEX_SHADER,Y.HIGH_FLOAT),Ce=Y.getShaderPrecisionFormat(Y.VERTEX_SHADER,Y.MEDIUM_FLOAT),Ae=Y.getShaderPrecisionFormat(Y.FRAGMENT_SHADER,Y.HIGH_FLOAT),Le=Y.getShaderPrecisionFormat(Y.FRAGMENT_SHADER,Y.MEDIUM_FLOAT),Pe=function(){var e;return function(){if(void 0!==e)return e;if(e=[],ge.get("WEBGL_compressed_texture_pvrtc")||ge.get("WEBGL_compressed_texture_s3tc"))for(var t=Y.getParameter(Y.COMPRESSED_TEXTURE_FORMATS),r=0;r<t.length;r++)e.push(t[r]);return e}}(),Fe=0<Se.precision&&0<Ae.precision,Be=0<Ce.precision&&0<Le.precision;"highp"!==L||Fe||(Be?(L="mediump",THREE.warn("THREE.WebGLRenderer: highp not supported, using mediump.")):(L="lowp",THREE.warn("THREE.WebGLRenderer: highp and mediump not supported, using lowp."))),"mediump"!==L||Be||(L="lowp",THREE.warn("THREE.WebGLRenderer: mediump not supported, using lowp."));var Ue=new THREE.ShadowMapPlugin(this,O,G,I),De=new THREE.SpritePlugin(this,X),Ve=new THREE.LensFlarePlugin(this,q);this.getContext=function(){return Y},this.forceContextLoss=function(){ge.get("WEBGL_lose_context").loseContext()},this.supportsVertexTextures=function(){return _e},this.supportsFloatTextures=function(){return ge.get("OES_texture_float")},this.supportsHalfFloatTextures=function(){return ge.get("OES_texture_half_float")},this.supportsStandardDerivatives=function(){return ge.get("OES_standard_derivatives")},this.supportsCompressedTextureS3TC=function(){return ge.get("WEBGL_compressed_texture_s3tc")},this.supportsCompressedTexturePVRTC=function(){return ge.get("WEBGL_compressed_texture_pvrtc")},this.supportsBlendMinMax=function(){return ge.get("EXT_blend_minmax")},this.getMaxAnisotropy=function(){var e;return function(){if(void 0!==e)return e;var t=ge.get("EXT_texture_filter_anisotropic");return e=null!==t?Y.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}}(),this.getPrecision=function(){return L},this.getPixelRatio=function(){return A},this.setPixelRatio=function(e){A=e},this.setSize=function(e,t,r){S.width=e*A,S.height=t*A,!1!==r&&(S.style.width=e+"px",S.style.height=t+"px"),this.setViewport(0,0,e,t)},this.setViewport=function(e,t,r,i){ie=e*A,ne=t*A,oe=r*A,ae=i*A,Y.viewport(ie,ne,oe,ae)},this.setScissor=function(e,t,r,i){Y.scissor(e*A,t*A,r*A,i*A)},this.enableScissorTest=function(e){e?Y.enable(Y.SCISSOR_TEST):Y.disable(Y.SCISSOR_TEST)},this.getClearColor=function(){return k},this.setClearColor=function(e,t){k.set(e),N=void 0!==t?t:1,Re(k.r,k.g,k.b,N)},this.getClearAlpha=function(){return N},this.setClearAlpha=function(e){N=e,Re(k.r,k.g,k.b,N)},this.clear=function(e,t,r){var i=0;(void 0===e||e)&&(i|=Y.COLOR_BUFFER_BIT),(void 0===t||t)&&(i|=Y.DEPTH_BUFFER_BIT),(void 0===r||r)&&(i|=Y.STENCIL_BUFFER_BIT),Y.clear(i)},this.clearColor=function(){Y.clear(Y.COLOR_BUFFER_BIT)},this.clearDepth=function(){Y.clear(Y.DEPTH_BUFFER_BIT)},this.clearStencil=function(){Y.clear(Y.STENCIL_BUFFER_BIT)},this.clearTarget=function(e,t,r,i){this.setRenderTarget(e),this.clear(t,r,i)},this.resetGLState=ve;var ze=function(e){e.target.traverse(function(e){if(e.removeEventListener("remove",ze),e instanceof THREE.Mesh||e instanceof THREE.PointCloud||e instanceof THREE.Line)delete G[e.id];else if(e instanceof THREE.ImmediateRenderObject||e.immediateRenderCallback)for(var t=I,r=t.length-1;r>=0;r--)t[r].object===e&&t.splice(r,1);delete e.__webglInit,delete e._modelViewMatrix,delete e._normalMatrix,delete e.__webglActive})},ke=function(e){if(e=e.target,e.removeEventListener("dispose",ke),delete e.__webglInit,e instanceof THREE.BufferGeometry){for(var t in e.attributes){var r=e.attributes[t];void 0!==r.buffer&&(Y.deleteBuffer(r.buffer),delete r.buffer)}K.info.memory.geometries--}else if(t=je[e.id],void 0!==t){for(var r=0,i=t.length;i>r;r++){var n=t[r];if(void 0!==n.numMorphTargets){for(var o=0,a=n.numMorphTargets;a>o;o++)Y.deleteBuffer(n.__webglMorphTargetsBuffers[o]);delete n.__webglMorphTargetsBuffers}if(void 0!==n.numMorphNormals){for(o=0,a=n.numMorphNormals;a>o;o++)Y.deleteBuffer(n.__webglMorphNormalsBuffers[o]);delete n.__webglMorphNormalsBuffers}Ie(n)}delete je[e.id]}else Ie(e);ee=""},Ne=function(e){e=e.target,e.removeEventListener("dispose",Ne),e.image&&e.image.__webglTextureCube?(Y.deleteTexture(e.image.__webglTextureCube),delete e.image.__webglTextureCube):void 0!==e.__webglInit&&(Y.deleteTexture(e.__webglTexture),delete e.__webglTexture,delete e.__webglInit),K.info.memory.textures--},Oe=function(e){if(e=e.target,e.removeEventListener("dispose",Oe),e&&void 0!==e.__webglTexture){if(Y.deleteTexture(e.__webglTexture),delete e.__webglTexture,e instanceof THREE.WebGLRenderTargetCube)for(var t=0;6>t;t++)Y.deleteFramebuffer(e.__webglFramebuffer[t]),Y.deleteRenderbuffer(e.__webglRenderbuffer[t]);else Y.deleteFramebuffer(e.__webglFramebuffer),Y.deleteRenderbuffer(e.__webglRenderbuffer);delete e.__webglFramebuffer,delete e.__webglRenderbuffer}K.info.memory.textures--},Ge=function(e){e=e.target,e.removeEventListener("dispose",Ge),We(e)},Ie=function(e){for(var t="__webglVertexBuffer __webglNormalBuffer __webglTangentBuffer __webglColorBuffer __webglUVBuffer __webglUV2Buffer __webglSkinIndicesBuffer __webglSkinWeightsBuffer __webglFaceBuffer __webglLineBuffer __webglLineDistanceBuffer".split(" "),r=0,i=t.length;i>r;r++){var n=t[r];void 0!==e[n]&&(Y.deleteBuffer(e[n]),delete e[n])}if(void 0!==e.__webglCustomAttributesList){for(n in e.__webglCustomAttributesList)Y.deleteBuffer(e.__webglCustomAttributesList[n].buffer);delete e.__webglCustomAttributesList}K.info.memory.geometries--},We=function(e){var t=e.program.program;if(void 0!==t){e.program=void 0;var r,i,n=!1;for(e=0,r=Q.length;r>e;e++)if(i=Q[e],i.program===t){i.usedTimes--,0===i.usedTimes&&(n=!0);break}if(!0===n){for(n=[],e=0,r=Q.length;r>e;e++)i=Q[e],i.program!==t&&n.push(i);Q=n,Y.deleteProgram(t),K.info.memory.programs--}}};this.renderBufferImmediate=function(e,t,r){if(Te.initAttributes(),e.hasPositions&&!e.__webglVertexBuffer&&(e.__webglVertexBuffer=Y.createBuffer()),e.hasNormals&&!e.__webglNormalBuffer&&(e.__webglNormalBuffer=Y.createBuffer()),e.hasUvs&&!e.__webglUvBuffer&&(e.__webglUvBuffer=Y.createBuffer()),e.hasColors&&!e.__webglColorBuffer&&(e.__webglColorBuffer=Y.createBuffer()),e.hasPositions&&(Y.bindBuffer(Y.ARRAY_BUFFER,e.__webglVertexBuffer),Y.bufferData(Y.ARRAY_BUFFER,e.positionArray,Y.DYNAMIC_DRAW),Te.enableAttribute(t.attributes.position),Y.vertexAttribPointer(t.attributes.position,3,Y.FLOAT,!1,0,0)),e.hasNormals){if(Y.bindBuffer(Y.ARRAY_BUFFER,e.__webglNormalBuffer),!1==r instanceof THREE.MeshPhongMaterial&&r.shading===THREE.FlatShading){var i,n,o,a,s,h,l,c,u,E,p,d=3*e.count;for(p=0;d>p;p+=9)E=e.normalArray,i=E[p],n=E[p+1],o=E[p+2],a=E[p+3],h=E[p+4],c=E[p+5],s=E[p+6],l=E[p+7],u=E[p+8],i=(i+a+s)/3,n=(n+h+l)/3,o=(o+c+u)/3,E[p]=i,E[p+1]=n,E[p+2]=o,E[p+3]=i,E[p+4]=n,E[p+5]=o,E[p+6]=i,E[p+7]=n,E[p+8]=o}Y.bufferData(Y.ARRAY_BUFFER,e.normalArray,Y.DYNAMIC_DRAW),Te.enableAttribute(t.attributes.normal),Y.vertexAttribPointer(t.attributes.normal,3,Y.FLOAT,!1,0,0)}e.hasUvs&&r.map&&(Y.bindBuffer(Y.ARRAY_BUFFER,e.__webglUvBuffer),Y.bufferData(Y.ARRAY_BUFFER,e.uvArray,Y.DYNAMIC_DRAW),Te.enableAttribute(t.attributes.uv),Y.vertexAttribPointer(t.attributes.uv,2,Y.FLOAT,!1,0,0)),e.hasColors&&r.vertexColors!==THREE.NoColors&&(Y.bindBuffer(Y.ARRAY_BUFFER,e.__webglColorBuffer),Y.bufferData(Y.ARRAY_BUFFER,e.colorArray,Y.DYNAMIC_DRAW),Te.enableAttribute(t.attributes.color),Y.vertexAttribPointer(t.attributes.color,3,Y.FLOAT,!1,0,0)),Te.disableUnusedAttributes(),Y.drawArrays(Y.TRIANGLES,0,e.count),e.count=0},this.renderBufferDirect=function(e,t,r,n,o,a){if(!1!==n.visible)if(p(a),e=T(e,t,r,n,a),t=!1,r="direct_"+o.id+"_"+e.id+"_"+(n.wireframe?1:0),r!==ee&&(ee=r,t=!0),t&&Te.initAttributes(),a instanceof THREE.Mesh){a=!0===n.wireframe?Y.LINES:Y.TRIANGLES;var s=o.attributes.index;if(s){var h,l;if(s.array instanceof Uint32Array&&ge.get("OES_element_index_uint")?(h=Y.UNSIGNED_INT,l=4):(h=Y.UNSIGNED_SHORT,l=2),r=o.offsets,0===r.length)t&&(i(n,e,o,0),Y.bindBuffer(Y.ELEMENT_ARRAY_BUFFER,s.buffer)),Y.drawElements(a,s.array.length,h,0),K.info.render.calls++,K.info.render.vertices+=s.array.length,K.info.render.faces+=s.array.length/3;else{t=!0;for(var c=0,u=r.length;u>c;c++){var E=r[c].index;t&&(i(n,e,o,E),Y.bindBuffer(Y.ELEMENT_ARRAY_BUFFER,s.buffer)),Y.drawElements(a,r[c].count,h,r[c].start*l),K.info.render.calls++,K.info.render.vertices+=r[c].count,K.info.render.faces+=r[c].count/3}}}else t&&i(n,e,o,0),n=o.attributes.position,Y.drawArrays(a,0,n.array.length/n.itemSize),K.info.render.calls++,K.info.render.vertices+=n.array.length/n.itemSize,K.info.render.faces+=n.array.length/(3*n.itemSize)}else if(a instanceof THREE.PointCloud)if(a=Y.POINTS,s=o.attributes.index)if(s.array instanceof Uint32Array&&ge.get("OES_element_index_uint")?(h=Y.UNSIGNED_INT,l=4):(h=Y.UNSIGNED_SHORT,l=2),r=o.offsets,0===r.length)t&&(i(n,e,o,0),Y.bindBuffer(Y.ELEMENT_ARRAY_BUFFER,s.buffer)),Y.drawElements(a,s.array.length,h,0),K.info.render.calls++,K.info.render.points+=s.array.length;else for(1<r.length&&(t=!0),c=0,u=r.length;u>c;c++)E=r[c].index,t&&(i(n,e,o,E),Y.bindBuffer(Y.ELEMENT_ARRAY_BUFFER,s.buffer)),Y.drawElements(a,r[c].count,h,r[c].start*l),K.info.render.calls++,K.info.render.points+=r[c].count;else if(t&&i(n,e,o,0),n=o.attributes.position,r=o.offsets,0===r.length)Y.drawArrays(a,0,n.array.length/3),K.info.render.calls++,K.info.render.points+=n.array.length/3;else for(c=0,u=r.length;u>c;c++)Y.drawArrays(a,r[c].index,r[c].count),K.info.render.calls++,K.info.render.points+=r[c].count;else if(a instanceof THREE.Line)if(a=a.mode===THREE.LineStrip?Y.LINE_STRIP:Y.LINES,Te.setLineWidth(n.linewidth*A),s=o.attributes.index)if(s.array instanceof Uint32Array?(h=Y.UNSIGNED_INT,l=4):(h=Y.UNSIGNED_SHORT,l=2),r=o.offsets,0===r.length)t&&(i(n,e,o,0),Y.bindBuffer(Y.ELEMENT_ARRAY_BUFFER,s.buffer)),Y.drawElements(a,s.array.length,h,0),K.info.render.calls++,K.info.render.vertices+=s.array.length;else for(1<r.length&&(t=!0),c=0,u=r.length;u>c;c++)E=r[c].index,t&&(i(n,e,o,E),Y.bindBuffer(Y.ELEMENT_ARRAY_BUFFER,s.buffer)),Y.drawElements(a,r[c].count,h,r[c].start*l),K.info.render.calls++,K.info.render.vertices+=r[c].count;else if(t&&i(n,e,o,0),n=o.attributes.position,r=o.offsets,0===r.length)Y.drawArrays(a,0,n.array.length/3),K.info.render.calls++,K.info.render.vertices+=n.array.length/3;else for(c=0,u=r.length;u>c;c++)Y.drawArrays(a,r[c].index,r[c].count),K.info.render.calls++,K.info.render.vertices+=r[c].count},this.renderBuffer=function(e,t,r,i,n,o){if(!1!==i.visible){if(p(o),r=T(e,t,r,i,o),t=r.attributes,e=!1,r=n.id+"_"+r.id+"_"+(i.wireframe?1:0),r!==ee&&(ee=r,e=!0),e&&Te.initAttributes(),!i.morphTargets&&0<=t.position)e&&(Y.bindBuffer(Y.ARRAY_BUFFER,n.__webglVertexBuffer),
Te.enableAttribute(t.position),Y.vertexAttribPointer(t.position,3,Y.FLOAT,!1,0,0));else if(o.morphTargetBase){if(r=i.program.attributes,-1!==o.morphTargetBase&&0<=r.position?(Y.bindBuffer(Y.ARRAY_BUFFER,n.__webglMorphTargetsBuffers[o.morphTargetBase]),Te.enableAttribute(r.position),Y.vertexAttribPointer(r.position,3,Y.FLOAT,!1,0,0)):0<=r.position&&(Y.bindBuffer(Y.ARRAY_BUFFER,n.__webglVertexBuffer),Te.enableAttribute(r.position),Y.vertexAttribPointer(r.position,3,Y.FLOAT,!1,0,0)),o.morphTargetForcedOrder.length)for(var s,h=0,l=o.morphTargetForcedOrder,c=o.morphTargetInfluences;h<i.numSupportedMorphTargets&&h<l.length;)s=r["morphTarget"+h],s>=0&&(Y.bindBuffer(Y.ARRAY_BUFFER,n.__webglMorphTargetsBuffers[l[h]]),Te.enableAttribute(s),Y.vertexAttribPointer(s,3,Y.FLOAT,!1,0,0)),s=r["morphNormal"+h],s>=0&&i.morphNormals&&(Y.bindBuffer(Y.ARRAY_BUFFER,n.__webglMorphNormalsBuffers[l[h]]),Te.enableAttribute(s),Y.vertexAttribPointer(s,3,Y.FLOAT,!1,0,0)),o.__webglMorphTargetInfluences[h]=c[l[h]],h++;else{for(l=[],c=o.morphTargetInfluences,h=o.geometry.morphTargets,c.length>h.length&&(console.warn("THREE.WebGLRenderer: Influences array is bigger than morphTargets array."),c.length=h.length),h=0,s=c.length;s>h;h++)l.push([c[h],h]);l.length>i.numSupportedMorphTargets?(l.sort(a),l.length=i.numSupportedMorphTargets):l.length>i.numSupportedMorphNormals?l.sort(a):0===l.length&&l.push([0,0]);for(var h=0,u=i.numSupportedMorphTargets;u>h;h++)if(l[h]){var E=l[h][1];s=r["morphTarget"+h],s>=0&&(Y.bindBuffer(Y.ARRAY_BUFFER,n.__webglMorphTargetsBuffers[E]),Te.enableAttribute(s),Y.vertexAttribPointer(s,3,Y.FLOAT,!1,0,0)),s=r["morphNormal"+h],s>=0&&i.morphNormals&&(Y.bindBuffer(Y.ARRAY_BUFFER,n.__webglMorphNormalsBuffers[E]),Te.enableAttribute(s),Y.vertexAttribPointer(s,3,Y.FLOAT,!1,0,0)),o.__webglMorphTargetInfluences[h]=c[E]}else o.__webglMorphTargetInfluences[h]=0}null!==i.program.uniforms.morphTargetInfluences&&Y.uniform1fv(i.program.uniforms.morphTargetInfluences,o.__webglMorphTargetInfluences)}if(e){if(n.__webglCustomAttributesList)for(r=0,c=n.__webglCustomAttributesList.length;c>r;r++)l=n.__webglCustomAttributesList[r],0<=t[l.buffer.belongsToAttribute]&&(Y.bindBuffer(Y.ARRAY_BUFFER,l.buffer),Te.enableAttribute(t[l.buffer.belongsToAttribute]),Y.vertexAttribPointer(t[l.buffer.belongsToAttribute],l.size,Y.FLOAT,!1,0,0));0<=t.color&&(0<o.geometry.colors.length||0<o.geometry.faces.length?(Y.bindBuffer(Y.ARRAY_BUFFER,n.__webglColorBuffer),Te.enableAttribute(t.color),Y.vertexAttribPointer(t.color,3,Y.FLOAT,!1,0,0)):void 0!==i.defaultAttributeValues&&Y.vertexAttrib3fv(t.color,i.defaultAttributeValues.color)),0<=t.normal&&(Y.bindBuffer(Y.ARRAY_BUFFER,n.__webglNormalBuffer),Te.enableAttribute(t.normal),Y.vertexAttribPointer(t.normal,3,Y.FLOAT,!1,0,0)),0<=t.tangent&&(Y.bindBuffer(Y.ARRAY_BUFFER,n.__webglTangentBuffer),Te.enableAttribute(t.tangent),Y.vertexAttribPointer(t.tangent,4,Y.FLOAT,!1,0,0)),0<=t.uv&&(o.geometry.faceVertexUvs[0]?(Y.bindBuffer(Y.ARRAY_BUFFER,n.__webglUVBuffer),Te.enableAttribute(t.uv),Y.vertexAttribPointer(t.uv,2,Y.FLOAT,!1,0,0)):void 0!==i.defaultAttributeValues&&Y.vertexAttrib2fv(t.uv,i.defaultAttributeValues.uv)),0<=t.uv2&&(o.geometry.faceVertexUvs[1]?(Y.bindBuffer(Y.ARRAY_BUFFER,n.__webglUV2Buffer),Te.enableAttribute(t.uv2),Y.vertexAttribPointer(t.uv2,2,Y.FLOAT,!1,0,0)):void 0!==i.defaultAttributeValues&&Y.vertexAttrib2fv(t.uv2,i.defaultAttributeValues.uv2)),i.skinning&&0<=t.skinIndex&&0<=t.skinWeight&&(Y.bindBuffer(Y.ARRAY_BUFFER,n.__webglSkinIndicesBuffer),Te.enableAttribute(t.skinIndex),Y.vertexAttribPointer(t.skinIndex,4,Y.FLOAT,!1,0,0),Y.bindBuffer(Y.ARRAY_BUFFER,n.__webglSkinWeightsBuffer),Te.enableAttribute(t.skinWeight),Y.vertexAttribPointer(t.skinWeight,4,Y.FLOAT,!1,0,0)),0<=t.lineDistance&&(Y.bindBuffer(Y.ARRAY_BUFFER,n.__webglLineDistanceBuffer),Te.enableAttribute(t.lineDistance),Y.vertexAttribPointer(t.lineDistance,1,Y.FLOAT,!1,0,0))}Te.disableUnusedAttributes(),o instanceof THREE.Mesh?(o=n.__typeArray===Uint32Array?Y.UNSIGNED_INT:Y.UNSIGNED_SHORT,i.wireframe?(Te.setLineWidth(i.wireframeLinewidth*A),e&&Y.bindBuffer(Y.ELEMENT_ARRAY_BUFFER,n.__webglLineBuffer),Y.drawElements(Y.LINES,n.__webglLineCount,o,0)):(e&&Y.bindBuffer(Y.ELEMENT_ARRAY_BUFFER,n.__webglFaceBuffer),Y.drawElements(Y.TRIANGLES,n.__webglFaceCount,o,0)),K.info.render.calls++,K.info.render.vertices+=n.__webglFaceCount,K.info.render.faces+=n.__webglFaceCount/3):o instanceof THREE.Line?(o=o.mode===THREE.LineStrip?Y.LINE_STRIP:Y.LINES,Te.setLineWidth(i.linewidth*A),Y.drawArrays(o,0,n.__webglLineCount),K.info.render.calls++):o instanceof THREE.PointCloud&&(Y.drawArrays(Y.POINTS,0,n.__webglParticleCount),K.info.render.calls++,K.info.render.points+=n.__webglParticleCount)}},this.render=function(e,t,r,i){if(!1==t instanceof THREE.Camera)THREE.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{var a=e.fog;ee="",$=-1,te=null,pe=!0,!0===e.autoUpdate&&e.updateMatrixWorld(),void 0===t.parent&&t.updateMatrixWorld(),e.traverse(function(e){e instanceof THREE.SkinnedMesh&&e.skeleton.update()}),t.matrixWorldInverse.getInverse(t.matrixWorld),ce.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),le.setFromMatrix(ce),O.length=0,W.length=0,j.length=0,X.length=0,q.length=0,s(e),!0===K.sortObjects&&(W.sort(n),j.sort(o)),Ue.render(e,t),K.info.render.calls=0,K.info.render.vertices=0,K.info.render.faces=0,K.info.render.points=0,this.setRenderTarget(r),(this.autoClear||i)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil),i=0;for(var u=I.length;u>i;i++){var E=I[i],p=E.object;p.visible&&(y(p,t),c(E))}e.overrideMaterial?(i=e.overrideMaterial,m(i),h(W,t,O,a,i),h(j,t,O,a,i),l(I,"",t,O,a,i)):(Te.setBlending(THREE.NoBlending),h(W,t,O,a,null),l(I,"opaque",t,O,a,null),h(j,t,O,a,null),l(I,"transparent",t,O,a,null)),De.render(e,t),Ve.render(e,t,se,he),r&&r.generateMipmaps&&r.minFilter!==THREE.NearestFilter&&r.minFilter!==THREE.LinearFilter&&w(r),Te.setDepthTest(!0),Te.setDepthWrite(!0),Te.setColorWrite(!0)}},this.renderImmediateObject=function(e,t,r,i,n){var o=T(e,t,r,i,n);ee="",K.setMaterialFaces(i),n.immediateRenderCallback?n.immediateRenderCallback(o,Y,le):n.render(function(e){K.renderBufferImmediate(e,o,i)})};var je={},Xe=0,qe={MeshDepthMaterial:"depth",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointCloudMaterial:"particle_basic"};this.setFaceCulling=function(e,t){e===THREE.CullFaceNone?Y.disable(Y.CULL_FACE):(t===THREE.FrontFaceDirectionCW?Y.frontFace(Y.CW):Y.frontFace(Y.CCW),e===THREE.CullFaceBack?Y.cullFace(Y.BACK):e===THREE.CullFaceFront?Y.cullFace(Y.FRONT):Y.cullFace(Y.FRONT_AND_BACK),Y.enable(Y.CULL_FACE))},this.setMaterialFaces=function(e){Te.setDoubleSided(e.side===THREE.DoubleSide),Te.setFlipSided(e.side===THREE.BackSide)},this.uploadTexture=function(e){void 0===e.__webglInit&&(e.__webglInit=!0,e.addEventListener("dispose",Ne),e.__webglTexture=Y.createTexture(),K.info.memory.textures++),Y.bindTexture(Y.TEXTURE_2D,e.__webglTexture),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,e.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,e.unpackAlignment),e.image=x(e.image,be);var t=e.image,r=THREE.Math.isPowerOfTwo(t.width)&&THREE.Math.isPowerOfTwo(t.height),i=M(e.format),n=M(e.type);H(Y.TEXTURE_2D,e,r);var o=e.mipmaps;if(e instanceof THREE.DataTexture)if(0<o.length&&r){for(var a=0,s=o.length;s>a;a++)t=o[a],Y.texImage2D(Y.TEXTURE_2D,a,i,t.width,t.height,0,i,n,t.data);e.generateMipmaps=!1}else Y.texImage2D(Y.TEXTURE_2D,0,i,t.width,t.height,0,i,n,t.data);else if(e instanceof THREE.CompressedTexture)for(a=0,s=o.length;s>a;a++)t=o[a],e.format!==THREE.RGBAFormat&&e.format!==THREE.RGBFormat?-1<Pe().indexOf(i)?Y.compressedTexImage2D(Y.TEXTURE_2D,a,i,t.width,t.height,0,t.data):THREE.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y.texImage2D(Y.TEXTURE_2D,a,i,t.width,t.height,0,i,n,t.data);else if(0<o.length&&r){for(a=0,s=o.length;s>a;a++)t=o[a],Y.texImage2D(Y.TEXTURE_2D,a,i,i,n,t);e.generateMipmaps=!1}else Y.texImage2D(Y.TEXTURE_2D,0,i,i,n,e.image);e.generateMipmaps&&r&&Y.generateMipmap(Y.TEXTURE_2D),e.needsUpdate=!1,e.onUpdate&&e.onUpdate()},this.setTexture=function(e,t){Y.activeTexture(Y.TEXTURE0+t),e.needsUpdate?K.uploadTexture(e):Y.bindTexture(Y.TEXTURE_2D,e.__webglTexture)},this.setRenderTarget=function(e){var t=e instanceof THREE.WebGLRenderTargetCube;if(e&&void 0===e.__webglFramebuffer){void 0===e.depthBuffer&&(e.depthBuffer=!0),void 0===e.stencilBuffer&&(e.stencilBuffer=!0),e.addEventListener("dispose",Oe),e.__webglTexture=Y.createTexture(),K.info.memory.textures++;var r=THREE.Math.isPowerOfTwo(e.width)&&THREE.Math.isPowerOfTwo(e.height),i=M(e.format),n=M(e.type);if(t){e.__webglFramebuffer=[],e.__webglRenderbuffer=[],Y.bindTexture(Y.TEXTURE_CUBE_MAP,e.__webglTexture),H(Y.TEXTURE_CUBE_MAP,e,r);for(var o=0;6>o;o++){e.__webglFramebuffer[o]=Y.createFramebuffer(),e.__webglRenderbuffer[o]=Y.createRenderbuffer(),Y.texImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,i,e.width,e.height,0,i,n,null);var a=e,s=Y.TEXTURE_CUBE_MAP_POSITIVE_X+o;Y.bindFramebuffer(Y.FRAMEBUFFER,e.__webglFramebuffer[o]),Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,s,a.__webglTexture,0),b(e.__webglRenderbuffer[o],e)}r&&Y.generateMipmap(Y.TEXTURE_CUBE_MAP)}else e.__webglFramebuffer=Y.createFramebuffer(),e.__webglRenderbuffer=e.shareDepthFrom?e.shareDepthFrom.__webglRenderbuffer:Y.createRenderbuffer(),Y.bindTexture(Y.TEXTURE_2D,e.__webglTexture),H(Y.TEXTURE_2D,e,r),Y.texImage2D(Y.TEXTURE_2D,0,i,e.width,e.height,0,i,n,null),i=Y.TEXTURE_2D,Y.bindFramebuffer(Y.FRAMEBUFFER,e.__webglFramebuffer),Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,i,e.__webglTexture,0),e.shareDepthFrom?e.depthBuffer&&!e.stencilBuffer?Y.framebufferRenderbuffer(Y.FRAMEBUFFER,Y.DEPTH_ATTACHMENT,Y.RENDERBUFFER,e.__webglRenderbuffer):e.depthBuffer&&e.stencilBuffer&&Y.framebufferRenderbuffer(Y.FRAMEBUFFER,Y.DEPTH_STENCIL_ATTACHMENT,Y.RENDERBUFFER,e.__webglRenderbuffer):b(e.__webglRenderbuffer,e),r&&Y.generateMipmap(Y.TEXTURE_2D);t?Y.bindTexture(Y.TEXTURE_CUBE_MAP,null):Y.bindTexture(Y.TEXTURE_2D,null),Y.bindRenderbuffer(Y.RENDERBUFFER,null),Y.bindFramebuffer(Y.FRAMEBUFFER,null)}e?(t=t?e.__webglFramebuffer[e.activeCubeFace]:e.__webglFramebuffer,r=e.width,e=e.height,n=i=0):(t=null,r=oe,e=ae,i=ie,n=ne),t!==J&&(Y.bindFramebuffer(Y.FRAMEBUFFER,t),Y.viewport(i,n,r,e),J=t),se=r,he=e},this.readRenderTargetPixels=function(e,t,r,i,n,o){if(e instanceof THREE.WebGLRenderTarget){if(e.__webglFramebuffer)if(e.format!==THREE.RGBAFormat)console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA format. readPixels can read only RGBA format.");else{var a=!1;e.__webglFramebuffer!==J&&(Y.bindFramebuffer(Y.FRAMEBUFFER,e.__webglFramebuffer),a=!0),Y.checkFramebufferStatus(Y.FRAMEBUFFER)===Y.FRAMEBUFFER_COMPLETE?Y.readPixels(t,r,i,n,Y.RGBA,Y.UNSIGNED_BYTE,o):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."),a&&Y.bindFramebuffer(Y.FRAMEBUFFER,J)}}else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")},this.initMaterial=function(){THREE.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},this.addPrePlugin=function(){THREE.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},this.addPostPlugin=function(){THREE.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},this.updateShadowMap=function(){THREE.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")}},THREE.WebGLRenderTarget=function(e,t,r){this.width=e,this.height=t,r=r||{},this.wrapS=void 0!==r.wrapS?r.wrapS:THREE.ClampToEdgeWrapping,this.wrapT=void 0!==r.wrapT?r.wrapT:THREE.ClampToEdgeWrapping,this.magFilter=void 0!==r.magFilter?r.magFilter:THREE.LinearFilter,this.minFilter=void 0!==r.minFilter?r.minFilter:THREE.LinearMipMapLinearFilter,this.anisotropy=void 0!==r.anisotropy?r.anisotropy:1,this.offset=new THREE.Vector2(0,0),this.repeat=new THREE.Vector2(1,1),this.format=void 0!==r.format?r.format:THREE.RGBAFormat,this.type=void 0!==r.type?r.type:THREE.UnsignedByteType,this.depthBuffer=void 0!==r.depthBuffer?r.depthBuffer:!0,this.stencilBuffer=void 0!==r.stencilBuffer?r.stencilBuffer:!0,this.generateMipmaps=!0,this.shareDepthFrom=void 0!==r.shareDepthFrom?r.shareDepthFrom:null},THREE.WebGLRenderTarget.prototype={constructor:THREE.WebGLRenderTarget,setSize:function(e,t){this.width=e,this.height=t},clone:function(){var e=new THREE.WebGLRenderTarget(this.width,this.height);return e.wrapS=this.wrapS,e.wrapT=this.wrapT,e.magFilter=this.magFilter,e.minFilter=this.minFilter,e.anisotropy=this.anisotropy,e.offset.copy(this.offset),e.repeat.copy(this.repeat),e.format=this.format,e.type=this.type,e.depthBuffer=this.depthBuffer,e.stencilBuffer=this.stencilBuffer,e.generateMipmaps=this.generateMipmaps,e.shareDepthFrom=this.shareDepthFrom,e},dispose:function(){this.dispatchEvent({type:"dispose"})}},THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype),THREE.WebGLRenderTargetCube=function(e,t,r){THREE.WebGLRenderTarget.call(this,e,t,r),this.activeCubeFace=0},THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype),THREE.WebGLRenderTargetCube.prototype.constructor=THREE.WebGLRenderTargetCube,THREE.WebGLExtensions=function(e){var t={};this.get=function(r){if(void 0!==t[r])return t[r];var i;switch(r){case"EXT_texture_filter_anisotropic":i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=e.getExtension(r)}return null===i&&THREE.warn("THREE.WebGLRenderer: "+r+" extension not supported."),t[r]=i}},THREE.WebGLProgram=function(){var e=0;return function(t,r,i,n){var o=t.context,a=i.defines,s=i.__webglShader.uniforms,h=i.attributes,l=i.__webglShader.vertexShader,c=i.__webglShader.fragmentShader,u=i.index0AttributeName;void 0===u&&!0===n.morphTargets&&(u="position");var E="SHADOWMAP_TYPE_BASIC";n.shadowMapType===THREE.PCFShadowMap?E="SHADOWMAP_TYPE_PCF":n.shadowMapType===THREE.PCFSoftShadowMap&&(E="SHADOWMAP_TYPE_PCF_SOFT");var p="ENVMAP_TYPE_CUBE",d="ENVMAP_MODE_REFLECTION",f="ENVMAP_BLENDING_MULTIPLY";if(n.envMap){switch(i.envMap.mapping){case THREE.CubeReflectionMapping:case THREE.CubeRefractionMapping:p="ENVMAP_TYPE_CUBE";break;case THREE.EquirectangularReflectionMapping:case THREE.EquirectangularRefractionMapping:p="ENVMAP_TYPE_EQUIREC";break;case THREE.SphericalReflectionMapping:p="ENVMAP_TYPE_SPHERE"}switch(i.envMap.mapping){case THREE.CubeRefractionMapping:case THREE.EquirectangularRefractionMapping:d="ENVMAP_MODE_REFRACTION"}switch(i.combine){case THREE.MultiplyOperation:f="ENVMAP_BLENDING_MULTIPLY";break;case THREE.MixOperation:f="ENVMAP_BLENDING_MIX";break;case THREE.AddOperation:f="ENVMAP_BLENDING_ADD"}}var m,T,g=0<t.gammaFactor?t.gammaFactor:1;m=[];for(var R in a)T=a[R],!1!==T&&(T="#define "+R+" "+T,m.push(T));m=m.join("\n"),a=o.createProgram(),i instanceof THREE.RawShaderMaterial?t=i="":(i=["precision "+n.precision+" float;","precision "+n.precision+" int;",m,n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.gammaInput?"#define GAMMA_INPUT":"",t.gammaOutput?"#define GAMMA_OUTPUT":"","#define GAMMA_FACTOR "+g,"#define MAX_DIR_LIGHTS "+n.maxDirLights,"#define MAX_POINT_LIGHTS "+n.maxPointLights,"#define MAX_SPOT_LIGHTS "+n.maxSpotLights,"#define MAX_HEMI_LIGHTS "+n.maxHemiLights,"#define MAX_SHADOWS "+n.maxShadows,"#define MAX_BONES "+n.maxBones,n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.vertexColors?"#define USE_COLOR":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals?"#define USE_MORPHNORMALS":"",n.wrapAround?"#define WRAP_AROUND":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+E:"",n.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",n.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\n	attribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\n	attribute vec3 morphTarget0;\n	attribute vec3 morphTarget1;\n	attribute vec3 morphTarget2;\n	attribute vec3 morphTarget3;\n	#ifdef USE_MORPHNORMALS\n		attribute vec3 morphNormal0;\n		attribute vec3 morphNormal1;\n		attribute vec3 morphNormal2;\n		attribute vec3 morphNormal3;\n	#else\n		attribute vec3 morphTarget4;\n		attribute vec3 morphTarget5;\n		attribute vec3 morphTarget6;\n		attribute vec3 morphTarget7;\n	#endif\n#endif\n#ifdef USE_SKINNING\n	attribute vec4 skinIndex;\n	attribute vec4 skinWeight;\n#endif\n"].join("\n"),t=["precision "+n.precision+" float;","precision "+n.precision+" int;",n.bumpMap||n.normalMap||n.flatShading?"#extension GL_OES_standard_derivatives : enable":"",m,"#define MAX_DIR_LIGHTS "+n.maxDirLights,"#define MAX_POINT_LIGHTS "+n.maxPointLights,"#define MAX_SPOT_LIGHTS "+n.maxSpotLights,"#define MAX_HEMI_LIGHTS "+n.maxHemiLights,"#define MAX_SHADOWS "+n.maxShadows,n.alphaTest?"#define ALPHATEST "+n.alphaTest:"",t.gammaInput?"#define GAMMA_INPUT":"",t.gammaOutput?"#define GAMMA_OUTPUT":"","#define GAMMA_FACTOR "+g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.vertexColors?"#define USE_COLOR":"",n.flatShading?"#define FLAT_SHADED":"",n.metal?"#define METAL":"",n.wrapAround?"#define WRAP_AROUND":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+E:"",n.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",n.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n")),l=new THREE.WebGLShader(o,o.VERTEX_SHADER,i+l),c=new THREE.WebGLShader(o,o.FRAGMENT_SHADER,t+c),o.attachShader(a,l),o.attachShader(a,c),void 0!==u&&o.bindAttribLocation(a,0,u),o.linkProgram(a),u=o.getProgramInfoLog(a),!1===o.getProgramParameter(a,o.LINK_STATUS)&&THREE.error("THREE.WebGLProgram: shader error: "+o.getError(),"gl.VALIDATE_STATUS",o.getProgramParameter(a,o.VALIDATE_STATUS),"gl.getPRogramInfoLog",u),""!==u&&THREE.warn("THREE.WebGLProgram: gl.getProgramInfoLog()"+u),o.deleteShader(l),o.deleteShader(c),u="viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences bindMatrix bindMatrixInverse".split(" "),n.useVertexTexture?(u.push("boneTexture"),u.push("boneTextureWidth"),u.push("boneTextureHeight")):u.push("boneGlobalMatrices"),n.logarithmicDepthBuffer&&u.push("logDepthBufFC");for(var y in s)u.push(y);for(s=u,y={},u=0,t=s.length;t>u;u++)E=s[u],y[E]=o.getUniformLocation(a,E);for(this.uniforms=y,u="position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" "),s=0;s<n.maxMorphTargets;s++)u.push("morphTarget"+s);for(s=0;s<n.maxMorphNormals;s++)u.push("morphNormal"+s);for(var v in h)u.push(v);for(n=u,h={},v=0,s=n.length;s>v;v++)y=n[v],h[y]=o.getAttribLocation(a,y);return this.attributes=h,this.attributesKeys=Object.keys(this.attributes),this.id=e++,this.code=r,this.usedTimes=1,this.program=a,this.vertexShader=l,this.fragmentShader=c,this}}(),THREE.WebGLShader=function(){var e=function(e){e=e.split("\n");for(var t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join("\n")};return function(t,r,i){return r=t.createShader(r),t.shaderSource(r,i),t.compileShader(r),!1===t.getShaderParameter(r,t.COMPILE_STATUS)&&THREE.error("THREE.WebGLShader: Shader couldn't compile."),""!==t.getShaderInfoLog(r)&&THREE.warn("THREE.WebGLShader: gl.getShaderInfoLog()",t.getShaderInfoLog(r),e(i)),r}}(),THREE.WebGLState=function(e,t){var r=new Uint8Array(16),i=new Uint8Array(16),n=null,o=null,a=null,s=null,h=null,l=null,c=null,u=null,E=null,p=null,d=null,f=null,m=null,T=null,g=null,R=null;this.initAttributes=function(){for(var e=0,t=r.length;t>e;e++)r[e]=0},this.enableAttribute=function(t){r[t]=1,0===i[t]&&(e.enableVertexAttribArray(t),i[t]=1)},this.disableUnusedAttributes=function(){for(var t=0,n=i.length;n>t;t++)i[t]!==r[t]&&(e.disableVertexAttribArray(t),i[t]=0)},this.setBlending=function(r,i,u,E,p,d,f){r!==n&&(r===THREE.NoBlending?e.disable(e.BLEND):r===THREE.AdditiveBlending?(e.enable(e.BLEND),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE)):r===THREE.SubtractiveBlending?(e.enable(e.BLEND),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ZERO,e.ONE_MINUS_SRC_COLOR)):r===THREE.MultiplyBlending?(e.enable(e.BLEND),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ZERO,e.SRC_COLOR)):r===THREE.CustomBlending?e.enable(e.BLEND):(e.enable(e.BLEND),e.blendEquationSeparate(e.FUNC_ADD,e.FUNC_ADD),e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA)),n=r),r===THREE.CustomBlending?(p=p||i,d=d||u,f=f||E,(i!==o||p!==h)&&(e.blendEquationSeparate(t(i),t(p)),o=i,h=p),(u!==a||E!==s||d!==l||f!==c)&&(e.blendFuncSeparate(t(u),t(E),t(d),t(f)),a=u,s=E,l=d,c=f)):c=l=h=s=a=o=null},this.setDepthTest=function(t){u!==t&&(t?e.enable(e.DEPTH_TEST):e.disable(e.DEPTH_TEST),u=t)},this.setDepthWrite=function(t){E!==t&&(e.depthMask(t),E=t)},this.setColorWrite=function(t){p!==t&&(e.colorMask(t,t,t,t),p=t)},this.setDoubleSided=function(t){d!==t&&(t?e.disable(e.CULL_FACE):e.enable(e.CULL_FACE),d=t)},this.setFlipSided=function(t){f!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),f=t)},this.setLineWidth=function(t){t!==m&&(e.lineWidth(t),m=t)},this.setPolygonOffset=function(t,r,i){T!==t&&(t?e.enable(e.POLYGON_OFFSET_FILL):e.disable(e.POLYGON_OFFSET_FILL),T=t),!t||g===r&&R===i||(e.polygonOffset(r,i),g=r,R=i)},this.reset=function(){for(var e=0;e<i.length;e++)i[e]=0;f=d=p=E=u=n=null}},THREE.LensFlarePlugin=function(e,t){var r,i,n,o,a,s,h,l,c,u,E,p,d,f,m,T,g=e.context;this.render=function(R,y,v,H){if(0!==t.length){R=new THREE.Vector3;var x=H/v,b=.5*v,w=.5*H,_=16/H,M=new THREE.Vector2(_*x,_),S=new THREE.Vector3(1,1,0),C=new THREE.Vector2(1,1);if(void 0===d){var _=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),A=new Uint16Array([0,1,2,0,2,3]);E=g.createBuffer(),p=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,E),g.bufferData(g.ARRAY_BUFFER,_,g.STATIC_DRAW),g.bindBuffer(g.ELEMENT_ARRAY_BUFFER,p),g.bufferData(g.ELEMENT_ARRAY_BUFFER,A,g.STATIC_DRAW),m=g.createTexture(),T=g.createTexture(),g.bindTexture(g.TEXTURE_2D,m),g.texImage2D(g.TEXTURE_2D,0,g.RGB,16,16,0,g.RGB,g.UNSIGNED_BYTE,null),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_S,g.CLAMP_TO_EDGE),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_T,g.CLAMP_TO_EDGE),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MAG_FILTER,g.NEAREST),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.NEAREST),g.bindTexture(g.TEXTURE_2D,T),g.texImage2D(g.TEXTURE_2D,0,g.RGBA,16,16,0,g.RGBA,g.UNSIGNED_BYTE,null),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_S,g.CLAMP_TO_EDGE),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_T,g.CLAMP_TO_EDGE),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MAG_FILTER,g.NEAREST),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.NEAREST);var _=(f=0<g.getParameter(g.MAX_VERTEX_TEXTURE_IMAGE_UNITS))?{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"}:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",fragmentShader:"precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},A=g.createProgram(),L=g.createShader(g.FRAGMENT_SHADER),P=g.createShader(g.VERTEX_SHADER),F="precision "+e.getPrecision()+" float;\n";g.shaderSource(L,F+_.fragmentShader),g.shaderSource(P,F+_.vertexShader),g.compileShader(L),g.compileShader(P),g.attachShader(A,L),g.attachShader(A,P),g.linkProgram(A),d=A,c=g.getAttribLocation(d,"position"),u=g.getAttribLocation(d,"uv"),r=g.getUniformLocation(d,"renderType"),i=g.getUniformLocation(d,"map"),n=g.getUniformLocation(d,"occlusionMap"),o=g.getUniformLocation(d,"opacity"),a=g.getUniformLocation(d,"color"),s=g.getUniformLocation(d,"scale"),h=g.getUniformLocation(d,"rotation"),l=g.getUniformLocation(d,"screenPosition")}for(g.useProgram(d),g.enableVertexAttribArray(c),g.enableVertexAttribArray(u),g.uniform1i(n,0),g.uniform1i(i,1),g.bindBuffer(g.ARRAY_BUFFER,E),g.vertexAttribPointer(c,2,g.FLOAT,!1,16,0),g.vertexAttribPointer(u,2,g.FLOAT,!1,16,8),g.bindBuffer(g.ELEMENT_ARRAY_BUFFER,p),g.disable(g.CULL_FACE),g.depthMask(!1),A=0,L=t.length;L>A;A++)if(_=16/H,M.set(_*x,_),P=t[A],R.set(P.matrixWorld.elements[12],P.matrixWorld.elements[13],P.matrixWorld.elements[14]),R.applyMatrix4(y.matrixWorldInverse),R.applyProjection(y.projectionMatrix),S.copy(R),C.x=S.x*b+b,C.y=S.y*w+w,f||0<C.x&&C.x<v&&0<C.y&&C.y<H){g.activeTexture(g.TEXTURE1),g.bindTexture(g.TEXTURE_2D,m),g.copyTexImage2D(g.TEXTURE_2D,0,g.RGB,C.x-8,C.y-8,16,16,0),g.uniform1i(r,0),g.uniform2f(s,M.x,M.y),g.uniform3f(l,S.x,S.y,S.z),g.disable(g.BLEND),g.enable(g.DEPTH_TEST),g.drawElements(g.TRIANGLES,6,g.UNSIGNED_SHORT,0),g.activeTexture(g.TEXTURE0),g.bindTexture(g.TEXTURE_2D,T),g.copyTexImage2D(g.TEXTURE_2D,0,g.RGBA,C.x-8,C.y-8,16,16,0),g.uniform1i(r,1),g.disable(g.DEPTH_TEST),g.activeTexture(g.TEXTURE1),g.bindTexture(g.TEXTURE_2D,m),g.drawElements(g.TRIANGLES,6,g.UNSIGNED_SHORT,0),P.positionScreen.copy(S),P.customUpdateCallback?P.customUpdateCallback(P):P.updateLensFlares(),g.uniform1i(r,2),g.enable(g.BLEND);for(var F=0,B=P.lensFlares.length;B>F;F++){var U=P.lensFlares[F];.001<U.opacity&&.001<U.scale&&(S.x=U.x,S.y=U.y,S.z=U.z,_=U.size*U.scale/H,M.x=_*x,M.y=_,g.uniform3f(l,S.x,S.y,S.z),g.uniform2f(s,M.x,M.y),g.uniform1f(h,U.rotation),g.uniform1f(o,U.opacity),g.uniform3f(a,U.color.r,U.color.g,U.color.b),e.state.setBlending(U.blending,U.blendEquation,U.blendSrc,U.blendDst),e.setTexture(U.texture,1),g.drawElements(g.TRIANGLES,6,g.UNSIGNED_SHORT,0))}}g.enable(g.CULL_FACE),g.enable(g.DEPTH_TEST),g.depthMask(!0),e.resetGLState()}}},THREE.ShadowMapPlugin=function(e,t,r,i){function n(e,t,i){if(t.visible){var o=r[t.id];if(o&&t.castShadow&&(!1===t.frustumCulled||!0===c.intersectsObject(t)))for(var a=0,s=o.length;s>a;a++){var h=o[a];t._modelViewMatrix.multiplyMatrices(i.matrixWorldInverse,t.matrixWorld),f.push(h)}for(a=0,s=t.children.length;s>a;a++)n(e,t.children[a],i)}}var o,a,s,h,l=e.context,c=new THREE.Frustum,u=new THREE.Matrix4,E=new THREE.Vector3,p=new THREE.Vector3,d=new THREE.Vector3,f=[],m=THREE.ShaderLib.depthRGBA,T=THREE.UniformsUtils.clone(m.uniforms);o=new THREE.ShaderMaterial({uniforms:T,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader}),a=new THREE.ShaderMaterial({uniforms:T,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,morphTargets:!0}),s=new THREE.ShaderMaterial({uniforms:T,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,skinning:!0}),h=new THREE.ShaderMaterial({uniforms:T,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,morphTargets:!0,skinning:!0}),o._shadowPass=!0,a._shadowPass=!0,s._shadowPass=!0,h._shadowPass=!0,this.render=function(r,m){if(!1!==e.shadowMapEnabled){var T,g,R,y,v,H,x,b,w=[];for(y=0,l.clearColor(1,1,1,1),l.disable(l.BLEND),l.enable(l.CULL_FACE),l.frontFace(l.CCW),e.shadowMapCullFace===THREE.CullFaceFront?l.cullFace(l.FRONT):l.cullFace(l.BACK),e.state.setDepthTest(!0),T=0,g=t.length;g>T;T++)if(R=t[T],R.castShadow)if(R instanceof THREE.DirectionalLight&&R.shadowCascade)for(v=0;v<R.shadowCascadeCount;v++){var _;if(R.shadowCascadeArray[v])_=R.shadowCascadeArray[v];else{x=R;var M=v;_=new THREE.DirectionalLight,_.isVirtual=!0,_.onlyShadow=!0,_.castShadow=!0,_.shadowCameraNear=x.shadowCameraNear,_.shadowCameraFar=x.shadowCameraFar,_.shadowCameraLeft=x.shadowCameraLeft,_.shadowCameraRight=x.shadowCameraRight,_.shadowCameraBottom=x.shadowCameraBottom,_.shadowCameraTop=x.shadowCameraTop,_.shadowCameraVisible=x.shadowCameraVisible,_.shadowDarkness=x.shadowDarkness,_.shadowBias=x.shadowCascadeBias[M],
_.shadowMapWidth=x.shadowCascadeWidth[M],_.shadowMapHeight=x.shadowCascadeHeight[M],_.pointsWorld=[],_.pointsFrustum=[],b=_.pointsWorld,H=_.pointsFrustum;for(var S=0;8>S;S++)b[S]=new THREE.Vector3,H[S]=new THREE.Vector3;b=x.shadowCascadeNearZ[M],x=x.shadowCascadeFarZ[M],H[0].set(-1,-1,b),H[1].set(1,-1,b),H[2].set(-1,1,b),H[3].set(1,1,b),H[4].set(-1,-1,x),H[5].set(1,-1,x),H[6].set(-1,1,x),H[7].set(1,1,x),_.originalCamera=m,H=new THREE.Gyroscope,H.position.copy(R.shadowCascadeOffset),H.add(_),H.add(_.target),m.add(H),R.shadowCascadeArray[v]=_}M=R,b=v,x=M.shadowCascadeArray[b],x.position.copy(M.position),x.target.position.copy(M.target.position),x.lookAt(x.target),x.shadowCameraVisible=M.shadowCameraVisible,x.shadowDarkness=M.shadowDarkness,x.shadowBias=M.shadowCascadeBias[b],H=M.shadowCascadeNearZ[b],M=M.shadowCascadeFarZ[b],x=x.pointsFrustum,x[0].z=H,x[1].z=H,x[2].z=H,x[3].z=H,x[4].z=M,x[5].z=M,x[6].z=M,x[7].z=M,w[y]=_,y++}else w[y]=R,y++;for(T=0,g=w.length;g>T;T++){if(R=w[T],R.shadowMap||(v=THREE.LinearFilter,e.shadowMapType===THREE.PCFSoftShadowMap&&(v=THREE.NearestFilter),R.shadowMap=new THREE.WebGLRenderTarget(R.shadowMapWidth,R.shadowMapHeight,{minFilter:v,magFilter:v,format:THREE.RGBAFormat}),R.shadowMapSize=new THREE.Vector2(R.shadowMapWidth,R.shadowMapHeight),R.shadowMatrix=new THREE.Matrix4),!R.shadowCamera){if(R instanceof THREE.SpotLight)R.shadowCamera=new THREE.PerspectiveCamera(R.shadowCameraFov,R.shadowMapWidth/R.shadowMapHeight,R.shadowCameraNear,R.shadowCameraFar);else{if(!(R instanceof THREE.DirectionalLight)){THREE.error("THREE.ShadowMapPlugin: Unsupported light type for shadow",R);continue}R.shadowCamera=new THREE.OrthographicCamera(R.shadowCameraLeft,R.shadowCameraRight,R.shadowCameraTop,R.shadowCameraBottom,R.shadowCameraNear,R.shadowCameraFar)}r.add(R.shadowCamera),!0===r.autoUpdate&&r.updateMatrixWorld()}if(R.shadowCameraVisible&&!R.cameraHelper&&(R.cameraHelper=new THREE.CameraHelper(R.shadowCamera),r.add(R.cameraHelper)),R.isVirtual&&_.originalCamera==m){for(v=m,y=R.shadowCamera,H=R.pointsFrustum,x=R.pointsWorld,E.set(1/0,1/0,1/0),p.set(-(1/0),-(1/0),-(1/0)),M=0;8>M;M++)b=x[M],b.copy(H[M]),b.unproject(v),b.applyMatrix4(y.matrixWorldInverse),b.x<E.x&&(E.x=b.x),b.x>p.x&&(p.x=b.x),b.y<E.y&&(E.y=b.y),b.y>p.y&&(p.y=b.y),b.z<E.z&&(E.z=b.z),b.z>p.z&&(p.z=b.z);y.left=E.x,y.right=p.x,y.top=p.y,y.bottom=E.y,y.updateProjectionMatrix()}for(y=R.shadowMap,H=R.shadowMatrix,v=R.shadowCamera,v.position.setFromMatrixPosition(R.matrixWorld),d.setFromMatrixPosition(R.target.matrixWorld),v.lookAt(d),v.updateMatrixWorld(),v.matrixWorldInverse.getInverse(v.matrixWorld),R.cameraHelper&&(R.cameraHelper.visible=R.shadowCameraVisible),R.shadowCameraVisible&&R.cameraHelper.update(),H.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),H.multiply(v.projectionMatrix),H.multiply(v.matrixWorldInverse),u.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),c.setFromMatrix(u),e.setRenderTarget(y),e.clear(),f.length=0,n(r,r,v),R=0,y=f.length;y>R;R++)x=f[R],H=x.object,x=x.buffer,M=H.material instanceof THREE.MeshFaceMaterial?H.material.materials[0]:H.material,b=void 0!==H.geometry.morphTargets&&0<H.geometry.morphTargets.length&&M.morphTargets,S=H instanceof THREE.SkinnedMesh&&M.skinning,b=H.customDepthMaterial?H.customDepthMaterial:S?b?h:s:b?a:o,e.setMaterialFaces(M),x instanceof THREE.BufferGeometry?e.renderBufferDirect(v,t,null,b,x,H):e.renderBuffer(v,t,null,b,x,H);for(R=0,y=i.length;y>R;R++)x=i[R],H=x.object,H.visible&&H.castShadow&&(H._modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,H.matrixWorld),e.renderImmediateObject(v,t,null,o,H))}T=e.getClearColor(),g=e.getClearAlpha(),l.clearColor(T.r,T.g,T.b,g),l.enable(l.BLEND),e.shadowMapCullFace===THREE.CullFaceFront&&l.cullFace(l.BACK),e.resetGLState()}}},THREE.SpritePlugin=function(e,t){function r(e,t){return e.z!==t.z?t.z-e.z:t.id-e.id}var i,n,o,a,s,h,l,c,u,E,p,d,f,m,T,g,R,y,v,H,x,b=e.context,w=new THREE.Vector3,_=new THREE.Quaternion,M=new THREE.Vector3;this.render=function(S,C){if(0!==t.length){if(void 0===H){var A=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),L=new Uint16Array([0,1,2,0,2,3]);y=b.createBuffer(),v=b.createBuffer(),b.bindBuffer(b.ARRAY_BUFFER,y),b.bufferData(b.ARRAY_BUFFER,A,b.STATIC_DRAW),b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,v),b.bufferData(b.ELEMENT_ARRAY_BUFFER,L,b.STATIC_DRAW);var A=b.createProgram(),L=b.createShader(b.VERTEX_SHADER),P=b.createShader(b.FRAGMENT_SHADER);b.shaderSource(L,["precision "+e.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n")),b.shaderSource(P,["precision "+e.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n")),b.compileShader(L),b.compileShader(P),b.attachShader(A,L),b.attachShader(A,P),b.linkProgram(A),H=A,g=b.getAttribLocation(H,"position"),R=b.getAttribLocation(H,"uv"),i=b.getUniformLocation(H,"uvOffset"),n=b.getUniformLocation(H,"uvScale"),o=b.getUniformLocation(H,"rotation"),a=b.getUniformLocation(H,"scale"),s=b.getUniformLocation(H,"color"),h=b.getUniformLocation(H,"map"),l=b.getUniformLocation(H,"opacity"),c=b.getUniformLocation(H,"modelViewMatrix"),u=b.getUniformLocation(H,"projectionMatrix"),E=b.getUniformLocation(H,"fogType"),p=b.getUniformLocation(H,"fogDensity"),d=b.getUniformLocation(H,"fogNear"),f=b.getUniformLocation(H,"fogFar"),m=b.getUniformLocation(H,"fogColor"),T=b.getUniformLocation(H,"alphaTest"),A=document.createElement("canvas"),A.width=8,A.height=8,L=A.getContext("2d"),L.fillStyle="white",L.fillRect(0,0,8,8),x=new THREE.Texture(A),x.needsUpdate=!0}b.useProgram(H),b.enableVertexAttribArray(g),b.enableVertexAttribArray(R),b.disable(b.CULL_FACE),b.enable(b.BLEND),b.bindBuffer(b.ARRAY_BUFFER,y),b.vertexAttribPointer(g,2,b.FLOAT,!1,16,0),b.vertexAttribPointer(R,2,b.FLOAT,!1,16,8),b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,v),b.uniformMatrix4fv(u,!1,C.projectionMatrix.elements),b.activeTexture(b.TEXTURE0),b.uniform1i(h,0),L=A=0,(P=S.fog)?(b.uniform3f(m,P.color.r,P.color.g,P.color.b),P instanceof THREE.Fog?(b.uniform1f(d,P.near),b.uniform1f(f,P.far),b.uniform1i(E,1),L=A=1):P instanceof THREE.FogExp2&&(b.uniform1f(p,P.density),b.uniform1i(E,2),L=A=2)):(b.uniform1i(E,0),L=A=0);for(var P=0,F=t.length;F>P;P++){var B=t[P];B._modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,B.matrixWorld),B.z=-B._modelViewMatrix.elements[14]}t.sort(r);for(var U=[],P=0,F=t.length;F>P;P++){var B=t[P],D=B.material;b.uniform1f(T,D.alphaTest),b.uniformMatrix4fv(c,!1,B._modelViewMatrix.elements),B.matrixWorld.decompose(w,_,M),U[0]=M.x,U[1]=M.y,B=0,S.fog&&D.fog&&(B=L),A!==B&&(b.uniform1i(E,B),A=B),null!==D.map?(b.uniform2f(i,D.map.offset.x,D.map.offset.y),b.uniform2f(n,D.map.repeat.x,D.map.repeat.y)):(b.uniform2f(i,0,0),b.uniform2f(n,1,1)),b.uniform1f(l,D.opacity),b.uniform3f(s,D.color.r,D.color.g,D.color.b),b.uniform1f(o,D.rotation),b.uniform2fv(a,U),e.state.setBlending(D.blending,D.blendEquation,D.blendSrc,D.blendDst),e.state.setDepthTest(D.depthTest),e.state.setDepthWrite(D.depthWrite),D.map&&D.map.image&&D.map.image.width?e.setTexture(D.map,0):e.setTexture(x,0),b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0)}b.enable(b.CULL_FACE),e.resetGLState()}}},THREE.GeometryUtils={merge:function(e,t,r){THREE.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");var i;t instanceof THREE.Mesh&&(t.matrixAutoUpdate&&t.updateMatrix(),i=t.matrix,t=t.geometry),e.merge(t,i,r)},center:function(e){return THREE.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),e.center()}},THREE.ImageUtils={crossOrigin:void 0,loadTexture:function(e,t,r,i){var n=new THREE.ImageLoader;n.crossOrigin=this.crossOrigin;var o=new THREE.Texture(void 0,t);return n.load(e,function(e){o.image=e,o.needsUpdate=!0,r&&r(o)},void 0,function(e){i&&i(e)}),o.sourceFile=e,o},loadTextureCube:function(e,t,r,i){var n=new THREE.ImageLoader;n.crossOrigin=this.crossOrigin;var o=new THREE.CubeTexture([],t);o.flipY=!1;var a=0;t=function(t){n.load(e[t],function(e){o.images[t]=e,a+=1,6===a&&(o.needsUpdate=!0,r&&r(o))},void 0,i)};for(var s=0,h=e.length;h>s;++s)t(s);return o},loadCompressedTexture:function(){THREE.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){THREE.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},getNormalMap:function(e,t){var r=function(e){var t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);return[e[0]/t,e[1]/t,e[2]/t]};t|=1;var i=e.width,n=e.height,o=document.createElement("canvas");o.width=i,o.height=n;var a=o.getContext("2d");a.drawImage(e,0,0);for(var s=a.getImageData(0,0,i,n).data,h=a.createImageData(i,n),l=h.data,c=0;i>c;c++)for(var u=0;n>u;u++){var E=0>u-1?0:u-1,p=u+1>n-1?n-1:u+1,d=0>c-1?0:c-1,f=c+1>i-1?i-1:c+1,m=[],T=[0,0,s[4*(u*i+c)]/255*t];for(m.push([-1,0,s[4*(u*i+d)]/255*t]),m.push([-1,-1,s[4*(E*i+d)]/255*t]),m.push([0,-1,s[4*(E*i+c)]/255*t]),m.push([1,-1,s[4*(E*i+f)]/255*t]),m.push([1,0,s[4*(u*i+f)]/255*t]),m.push([1,1,s[4*(p*i+f)]/255*t]),m.push([0,1,s[4*(p*i+c)]/255*t]),m.push([-1,1,s[4*(p*i+d)]/255*t]),E=[],d=m.length,p=0;d>p;p++){var f=m[p],g=m[(p+1)%d],f=[f[0]-T[0],f[1]-T[1],f[2]-T[2]],g=[g[0]-T[0],g[1]-T[1],g[2]-T[2]];E.push(r([f[1]*g[2]-f[2]*g[1],f[2]*g[0]-f[0]*g[2],f[0]*g[1]-f[1]*g[0]]))}for(m=[0,0,0],p=0;p<E.length;p++)m[0]+=E[p][0],m[1]+=E[p][1],m[2]+=E[p][2];m[0]/=E.length,m[1]/=E.length,m[2]/=E.length,T=4*(u*i+c),l[T]=(m[0]+1)/2*255|0,l[T+1]=(m[1]+1)/2*255|0,l[T+2]=255*m[2]|0,l[T+3]=255}return a.putImageData(h,0,0),o},generateDataTexture:function(e,t,r){var i=e*t,n=new Uint8Array(3*i),o=Math.floor(255*r.r),a=Math.floor(255*r.g);r=Math.floor(255*r.b);for(var s=0;i>s;s++)n[3*s]=o,n[3*s+1]=a,n[3*s+2]=r;return e=new THREE.DataTexture(n,e,t,THREE.RGBFormat),e.needsUpdate=!0,e}},THREE.SceneUtils={createMultiMaterialObject:function(e,t){for(var r=new THREE.Object3D,i=0,n=t.length;n>i;i++)r.add(new THREE.Mesh(e,t[i]));return r},detach:function(e,t,r){e.applyMatrix(t.matrixWorld),t.remove(e),r.add(e)},attach:function(e,t,r){var i=new THREE.Matrix4;i.getInverse(r.matrixWorld),e.applyMatrix(i),t.remove(e),r.add(e)}},THREE.FontUtils={faces:{},face:"helvetiker",weight:"normal",style:"normal",size:150,divisions:10,getFace:function(){try{return this.faces[this.face][this.weight][this.style]}catch(e){throw"The font "+this.face+" with "+this.weight+" weight and "+this.style+" style is missing."}},loadFace:function(e){var t=e.familyName.toLowerCase();return this.faces[t]=this.faces[t]||{},this.faces[t][e.cssFontWeight]=this.faces[t][e.cssFontWeight]||{},this.faces[t][e.cssFontWeight][e.cssFontStyle]=e,this.faces[t][e.cssFontWeight][e.cssFontStyle]=e},drawText:function(e){var t=this.getFace(),r=this.size/t.resolution,i=0,n=String(e).split(""),o=n.length,a=[];for(e=0;o>e;e++){var s=new THREE.Path,s=this.extractGlyphPoints(n[e],t,r,i,s),i=i+s.offset;a.push(s.path)}return{paths:a,offset:i/2}},extractGlyphPoints:function(e,t,r,i,n){var o,a,s,h,l,c,u,E,p,d,f,m=[],T=t.glyphs[e]||t.glyphs["?"];if(T){if(T.o)for(t=T._cachedOutline||(T._cachedOutline=T.o.split(" ")),h=t.length,e=0;h>e;)switch(s=t[e++]){case"m":s=t[e++]*r+i,l=t[e++]*r,n.moveTo(s,l);break;case"l":s=t[e++]*r+i,l=t[e++]*r,n.lineTo(s,l);break;case"q":if(s=t[e++]*r+i,l=t[e++]*r,E=t[e++]*r+i,p=t[e++]*r,n.quadraticCurveTo(E,p,s,l),o=m[m.length-1])for(c=o.x,u=o.y,o=1,a=this.divisions;a>=o;o++){var g=o/a;THREE.Shape.Utils.b2(g,c,E,s),THREE.Shape.Utils.b2(g,u,p,l)}break;case"b":if(s=t[e++]*r+i,l=t[e++]*r,E=t[e++]*r+i,p=t[e++]*r,d=t[e++]*r+i,f=t[e++]*r,n.bezierCurveTo(E,p,d,f,s,l),o=m[m.length-1])for(c=o.x,u=o.y,o=1,a=this.divisions;a>=o;o++)g=o/a,THREE.Shape.Utils.b3(g,c,E,d,s),THREE.Shape.Utils.b3(g,u,p,f,l)}return{offset:T.ha*r,path:n}}}},THREE.FontUtils.generateShapes=function(e,t){t=t||{};var r=void 0!==t.curveSegments?t.curveSegments:4,i=void 0!==t.font?t.font:"helvetiker",n=void 0!==t.weight?t.weight:"normal",o=void 0!==t.style?t.style:"normal";for(THREE.FontUtils.size=void 0!==t.size?t.size:100,THREE.FontUtils.divisions=r,THREE.FontUtils.face=i,THREE.FontUtils.weight=n,THREE.FontUtils.style=o,r=THREE.FontUtils.drawText(e).paths,i=[],n=0,o=r.length;o>n;n++)Array.prototype.push.apply(i,r[n].toShapes());return i},function(e){var t=function(e){for(var t=e.length,r=0,i=t-1,n=0;t>n;i=n++)r+=e[i].x*e[n].y-e[n].x*e[i].y;return.5*r};return e.Triangulate=function(e,r){var i=e.length;if(3>i)return null;var n,o,a,s=[],h=[],l=[];if(0<t(e))for(o=0;i>o;o++)h[o]=o;else for(o=0;i>o;o++)h[o]=i-1-o;var c=2*i;for(o=i-1;i>2;){if(0>=c--){THREE.warn("THREE.FontUtils: Warning, unable to triangulate polygon! in Triangulate.process()");break}n=o,n>=i&&(n=0),o=n+1,o>=i&&(o=0),a=o+1,a>=i&&(a=0);var u;e:{var E=u=void 0,p=void 0,d=void 0,f=void 0,m=void 0,T=void 0,g=void 0,R=void 0,E=e[h[n]].x,p=e[h[n]].y,d=e[h[o]].x,f=e[h[o]].y,m=e[h[a]].x,T=e[h[a]].y;if(1e-10>(d-E)*(T-p)-(f-p)*(m-E))u=!1;else{var y=void 0,v=void 0,H=void 0,x=void 0,b=void 0,w=void 0,_=void 0,M=void 0,S=void 0,C=void 0,S=M=_=R=g=void 0,y=m-d,v=T-f,H=E-m,x=p-T,b=d-E,w=f-p;for(u=0;i>u;u++)if(g=e[h[u]].x,R=e[h[u]].y,!(g===E&&R===p||g===d&&R===f||g===m&&R===T)&&(_=g-E,M=R-p,S=g-d,C=R-f,g-=m,R-=T,S=y*C-v*S,_=b*M-w*_,M=H*R-x*g,S>=-1e-10&&M>=-1e-10&&_>=-1e-10)){u=!1;break e}u=!0}}if(u){for(s.push([e[h[n]],e[h[o]],e[h[a]]]),l.push([h[n],h[o],h[a]]),n=o,a=o+1;i>a;n++,a++)h[n]=h[a];i--,c=2*i}}return r?l:s},e.Triangulate.area=t,e}(THREE.FontUtils),self._typeface_js={faces:THREE.FontUtils.faces,loadFace:THREE.FontUtils.loadFace},THREE.typeface_js=self._typeface_js,THREE.Audio=function(e){THREE.Object3D.call(this),this.type="Audio",this.context=e.context,this.source=this.context.createBufferSource(),this.source.onended=this.onEnded.bind(this),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.panner=this.context.createPanner(),this.panner.connect(this.gain),this.autoplay=!1,this.startTime=0,this.isPlaying=!1},THREE.Audio.prototype=Object.create(THREE.Object3D.prototype),THREE.Audio.prototype.constructor=THREE.Audio,THREE.Audio.prototype.load=function(e){var t=this,r=new XMLHttpRequest;return r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=function(e){t.context.decodeAudioData(this.response,function(e){t.source.buffer=e,t.autoplay&&t.play()})},r.send(),this},THREE.Audio.prototype.play=function(){if(!0===this.isPlaying)THREE.warn("THREE.Audio: Audio is already playing.");else{var e=this.context.createBufferSource();e.buffer=this.source.buffer,e.loop=this.source.loop,e.onended=this.source.onended,e.connect(this.panner),e.start(0,this.startTime),this.isPlaying=!0,this.source=e}},THREE.Audio.prototype.pause=function(){this.source.stop(),this.startTime=this.context.currentTime},THREE.Audio.prototype.stop=function(){this.source.stop(),this.startTime=0},THREE.Audio.prototype.onEnded=function(){this.isPlaying=!1},THREE.Audio.prototype.setLoop=function(e){this.source.loop=e},THREE.Audio.prototype.setRefDistance=function(e){this.panner.refDistance=e},THREE.Audio.prototype.setRolloffFactor=function(e){this.panner.rolloffFactor=e},THREE.Audio.prototype.setVolume=function(e){this.gain.gain.value=e},THREE.Audio.prototype.updateMatrixWorld=function(){var e=new THREE.Vector3;return function(t){THREE.Object3D.prototype.updateMatrixWorld.call(this,t),e.setFromMatrixPosition(this.matrixWorld),this.panner.setPosition(e.x,e.y,e.z)}}(),THREE.AudioListener=function(){THREE.Object3D.call(this),this.type="AudioListener",this.context=new(window.AudioContext||window.webkitAudioContext)},THREE.AudioListener.prototype=Object.create(THREE.Object3D.prototype),THREE.AudioListener.prototype.constructor=THREE.AudioListener,THREE.AudioListener.prototype.updateMatrixWorld=function(){var e=new THREE.Vector3,t=new THREE.Quaternion,r=new THREE.Vector3,i=new THREE.Vector3,n=new THREE.Vector3,o=new THREE.Vector3;return function(a){THREE.Object3D.prototype.updateMatrixWorld.call(this,a),a=this.context.listener;var s=this.up;this.matrixWorld.decompose(e,t,r),i.set(0,0,-1).applyQuaternion(t),n.subVectors(e,o),a.setPosition(e.x,e.y,e.z),a.setOrientation(i.x,i.y,i.z,s.x,s.y,s.z),a.setVelocity(n.x,n.y,n.z),o.copy(e)}}(),THREE.Curve=function(){},THREE.Curve.prototype.getPoint=function(e){return THREE.warn("THREE.Curve: Warning, getPoint() not implemented!"),null},THREE.Curve.prototype.getPointAt=function(e){return e=this.getUtoTmapping(e),this.getPoint(e)},THREE.Curve.prototype.getPoints=function(e){e||(e=5);var t,r=[];for(t=0;e>=t;t++)r.push(this.getPoint(t/e));return r},THREE.Curve.prototype.getSpacedPoints=function(e){e||(e=5);var t,r=[];for(t=0;e>=t;t++)r.push(this.getPointAt(t/e));return r},THREE.Curve.prototype.getLength=function(){var e=this.getLengths();return e[e.length-1]},THREE.Curve.prototype.getLengths=function(e){if(e||(e=this.__arcLengthDivisions?this.__arcLengthDivisions:200),this.cacheArcLengths&&this.cacheArcLengths.length==e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var t,r,i=[],n=this.getPoint(0),o=0;for(i.push(0),r=1;e>=r;r++)t=this.getPoint(r/e),o+=t.distanceTo(n),i.push(o),n=t;return this.cacheArcLengths=i},THREE.Curve.prototype.updateArcLengths=function(){this.needsUpdate=!0,this.getLengths()},THREE.Curve.prototype.getUtoTmapping=function(e,t){var r,i=this.getLengths(),n=0,o=i.length;r=t?t:e*i[o-1];for(var a,s=0,h=o-1;h>=s;)if(n=Math.floor(s+(h-s)/2),a=i[n]-r,0>a)s=n+1;else{if(!(a>0)){h=n;break}h=n-1}return n=h,i[n]==r?n/(o-1):(s=i[n],i=(n+(r-s)/(i[n+1]-s))/(o-1))},THREE.Curve.prototype.getTangent=function(e){var t=e-1e-4;return e+=1e-4,0>t&&(t=0),e>1&&(e=1),t=this.getPoint(t),this.getPoint(e).clone().sub(t).normalize()},THREE.Curve.prototype.getTangentAt=function(e){return e=this.getUtoTmapping(e),this.getTangent(e)},THREE.Curve.Utils={tangentQuadraticBezier:function(e,t,r,i){return 2*(1-e)*(r-t)+2*e*(i-r)},tangentCubicBezier:function(e,t,r,i,n){return-3*t*(1-e)*(1-e)+3*r*(1-e)*(1-e)-6*e*r*(1-e)+6*e*i*(1-e)-3*e*e*i+3*e*e*n},tangentSpline:function(e,t,r,i,n){return 6*e*e-6*e+(3*e*e-4*e+1)+(-6*e*e+6*e)+(3*e*e-2*e)},interpolate:function(e,t,r,i,n){e=.5*(r-e),i=.5*(i-t);var o=n*n;return(2*t-2*r+e+i)*n*o+(-3*t+3*r-2*e-i)*o+e*n+t}},THREE.Curve.create=function(e,t){return e.prototype=Object.create(THREE.Curve.prototype),e.prototype.constructor=e,e.prototype.getPoint=t,e},THREE.CurvePath=function(){this.curves=[],this.bends=[],this.autoClose=!1},THREE.CurvePath.prototype=Object.create(THREE.Curve.prototype),THREE.CurvePath.prototype.constructor=THREE.CurvePath,THREE.CurvePath.prototype.add=function(e){this.curves.push(e)},THREE.CurvePath.prototype.checkConnection=function(){},THREE.CurvePath.prototype.closePath=function(){var e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new THREE.LineCurve(t,e))},THREE.CurvePath.prototype.getPoint=function(e){var t=e*this.getLength(),r=this.getCurveLengths();for(e=0;e<r.length;){if(r[e]>=t)return t=r[e]-t,e=this.curves[e],t=1-t/e.getLength(),e.getPointAt(t);e++}return null},THREE.CurvePath.prototype.getLength=function(){var e=this.getCurveLengths();return e[e.length-1]},THREE.CurvePath.prototype.getCurveLengths=function(){if(this.cacheLengths&&this.cacheLengths.length==this.curves.length)return this.cacheLengths;var e,t=[],r=0,i=this.curves.length;for(e=0;i>e;e++)r+=this.curves[e].getLength(),t.push(r);return this.cacheLengths=t},THREE.CurvePath.prototype.getBoundingBox=function(){var e,t,r,i,n,o,a=this.getPoints();e=t=Number.NEGATIVE_INFINITY,i=n=Number.POSITIVE_INFINITY;var s,h,l,c,u=a[0]instanceof THREE.Vector3;for(c=u?new THREE.Vector3:new THREE.Vector2,h=0,l=a.length;l>h;h++)s=a[h],s.x>e?e=s.x:s.x<i&&(i=s.x),s.y>t?t=s.y:s.y<n&&(n=s.y),u&&(s.z>r?r=s.z:s.z<o&&(o=s.z)),c.add(s);return a={minX:i,minY:n,maxX:e,maxY:t},u&&(a.maxZ=r,a.minZ=o),a},THREE.CurvePath.prototype.createPointsGeometry=function(e){return e=this.getPoints(e,!0),this.createGeometry(e)},THREE.CurvePath.prototype.createSpacedPointsGeometry=function(e){return e=this.getSpacedPoints(e,!0),this.createGeometry(e)},THREE.CurvePath.prototype.createGeometry=function(e){for(var t=new THREE.Geometry,r=0;r<e.length;r++)t.vertices.push(new THREE.Vector3(e[r].x,e[r].y,e[r].z||0));return t},THREE.CurvePath.prototype.addWrapPath=function(e){this.bends.push(e)},THREE.CurvePath.prototype.getTransformedPoints=function(e,t){var r,i,n=this.getPoints(e);for(t||(t=this.bends),r=0,i=t.length;i>r;r++)n=this.getWrapPoints(n,t[r]);return n},THREE.CurvePath.prototype.getTransformedSpacedPoints=function(e,t){var r,i,n=this.getSpacedPoints(e);for(t||(t=this.bends),r=0,i=t.length;i>r;r++)n=this.getWrapPoints(n,t[r]);return n},THREE.CurvePath.prototype.getWrapPoints=function(e,t){var r,i,n,o,a,s,h=this.getBoundingBox();for(r=0,i=e.length;i>r;r++)n=e[r],o=n.x,a=n.y,s=o/h.maxX,s=t.getUtoTmapping(s,o),o=t.getPoint(s),s=t.getTangent(s),s.set(-s.y,s.x).multiplyScalar(a),n.x=o.x+s.x,n.y=o.y+s.y;return e},THREE.Gyroscope=function(){THREE.Object3D.call(this)},THREE.Gyroscope.prototype=Object.create(THREE.Object3D.prototype),THREE.Gyroscope.prototype.constructor=THREE.Gyroscope,THREE.Gyroscope.prototype.updateMatrixWorld=function(){var e=new THREE.Vector3,t=new THREE.Quaternion,r=new THREE.Vector3,i=new THREE.Vector3,n=new THREE.Quaternion,o=new THREE.Vector3;return function(a){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.parent?(this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorld.decompose(i,n,o),this.matrix.decompose(e,t,r),this.matrixWorld.compose(i,t,o)):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0);for(var s=0,h=this.children.length;h>s;s++)this.children[s].updateMatrixWorld(a)}}(),THREE.Path=function(e){THREE.CurvePath.call(this),this.actions=[],e&&this.fromPoints(e)},THREE.Path.prototype=Object.create(THREE.CurvePath.prototype),THREE.Path.prototype.constructor=THREE.Path,THREE.PathActions={MOVE_TO:"moveTo",LINE_TO:"lineTo",QUADRATIC_CURVE_TO:"quadraticCurveTo",BEZIER_CURVE_TO:"bezierCurveTo",CSPLINE_THRU:"splineThru",ARC:"arc",ELLIPSE:"ellipse"},THREE.Path.prototype.fromPoints=function(e){this.moveTo(e[0].x,e[0].y);for(var t=1,r=e.length;r>t;t++)this.lineTo(e[t].x,e[t].y)},THREE.Path.prototype.moveTo=function(e,t){var r=Array.prototype.slice.call(arguments);this.actions.push({action:THREE.PathActions.MOVE_TO,args:r})},THREE.Path.prototype.lineTo=function(e,t){var r=Array.prototype.slice.call(arguments),i=this.actions[this.actions.length-1].args,i=new THREE.LineCurve(new THREE.Vector2(i[i.length-2],i[i.length-1]),new THREE.Vector2(e,t));this.curves.push(i),this.actions.push({action:THREE.PathActions.LINE_TO,args:r})},THREE.Path.prototype.quadraticCurveTo=function(e,t,r,i){var n=Array.prototype.slice.call(arguments),o=this.actions[this.actions.length-1].args,o=new THREE.QuadraticBezierCurve(new THREE.Vector2(o[o.length-2],o[o.length-1]),new THREE.Vector2(e,t),new THREE.Vector2(r,i));this.curves.push(o),this.actions.push({action:THREE.PathActions.QUADRATIC_CURVE_TO,args:n})},THREE.Path.prototype.bezierCurveTo=function(e,t,r,i,n,o){var a=Array.prototype.slice.call(arguments),s=this.actions[this.actions.length-1].args,s=new THREE.CubicBezierCurve(new THREE.Vector2(s[s.length-2],s[s.length-1]),new THREE.Vector2(e,t),new THREE.Vector2(r,i),new THREE.Vector2(n,o));this.curves.push(s),this.actions.push({action:THREE.PathActions.BEZIER_CURVE_TO,args:a})},THREE.Path.prototype.splineThru=function(e){var t=Array.prototype.slice.call(arguments),r=this.actions[this.actions.length-1].args,r=[new THREE.Vector2(r[r.length-2],r[r.length-1])];Array.prototype.push.apply(r,e),r=new THREE.SplineCurve(r),this.curves.push(r),this.actions.push({action:THREE.PathActions.CSPLINE_THRU,args:t})},THREE.Path.prototype.arc=function(e,t,r,i,n,o){var a=this.actions[this.actions.length-1].args;this.absarc(e+a[a.length-2],t+a[a.length-1],r,i,n,o)},THREE.Path.prototype.absarc=function(e,t,r,i,n,o){this.absellipse(e,t,r,r,i,n,o)},THREE.Path.prototype.ellipse=function(e,t,r,i,n,o,a){var s=this.actions[this.actions.length-1].args;this.absellipse(e+s[s.length-2],t+s[s.length-1],r,i,n,o,a)},THREE.Path.prototype.absellipse=function(e,t,r,i,n,o,a){var s=Array.prototype.slice.call(arguments),h=new THREE.EllipseCurve(e,t,r,i,n,o,a);this.curves.push(h),h=h.getPoint(1),s.push(h.x),s.push(h.y),this.actions.push({action:THREE.PathActions.ELLIPSE,args:s})},THREE.Path.prototype.getSpacedPoints=function(e,t){e||(e=40);for(var r=[],i=0;e>i;i++)r.push(this.getPoint(i/e));return r},THREE.Path.prototype.getPoints=function(e,t){if(this.useSpacedPoints)return console.log("tata"),this.getSpacedPoints(e,t);e=e||12;var r,i,n,o,a,s,h,l,c,u,E,p,d,f=[];for(r=0,i=this.actions.length;i>r;r++)switch(n=this.actions[r],o=n.action,n=n.args,o){case THREE.PathActions.MOVE_TO:f.push(new THREE.Vector2(n[0],n[1]));break;case THREE.PathActions.LINE_TO:f.push(new THREE.Vector2(n[0],n[1]));break;case THREE.PathActions.QUADRATIC_CURVE_TO:for(a=n[2],s=n[3],c=n[0],u=n[1],0<f.length?(o=f[f.length-1],E=o.x,p=o.y):(o=this.actions[r-1].args,E=o[o.length-2],p=o[o.length-1]),n=1;e>=n;n++)d=n/e,o=THREE.Shape.Utils.b2(d,E,c,a),d=THREE.Shape.Utils.b2(d,p,u,s),f.push(new THREE.Vector2(o,d));break;case THREE.PathActions.BEZIER_CURVE_TO:for(a=n[4],s=n[5],c=n[0],u=n[1],h=n[2],l=n[3],0<f.length?(o=f[f.length-1],E=o.x,p=o.y):(o=this.actions[r-1].args,E=o[o.length-2],p=o[o.length-1]),n=1;e>=n;n++)d=n/e,o=THREE.Shape.Utils.b3(d,E,c,h,a),d=THREE.Shape.Utils.b3(d,p,u,l,s),f.push(new THREE.Vector2(o,d));break;case THREE.PathActions.CSPLINE_THRU:for(o=this.actions[r-1].args,d=[new THREE.Vector2(o[o.length-2],o[o.length-1])],o=e*n[0].length,d=d.concat(n[0]),d=new THREE.SplineCurve(d),n=1;o>=n;n++)f.push(d.getPointAt(n/o));break;case THREE.PathActions.ARC:for(a=n[0],s=n[1],u=n[2],h=n[3],o=n[4],c=!!n[5],E=o-h,p=2*e,n=1;p>=n;n++)d=n/p,c||(d=1-d),d=h+d*E,o=a+u*Math.cos(d),d=s+u*Math.sin(d),f.push(new THREE.Vector2(o,d));break;case THREE.PathActions.ELLIPSE:for(a=n[0],s=n[1],u=n[2],l=n[3],h=n[4],o=n[5],c=!!n[6],E=o-h,p=2*e,n=1;p>=n;n++)d=n/p,c||(d=1-d),d=h+d*E,o=a+u*Math.cos(d),d=s+l*Math.sin(d),f.push(new THREE.Vector2(o,d))}return r=f[f.length-1],1e-10>Math.abs(r.x-f[0].x)&&1e-10>Math.abs(r.y-f[0].y)&&f.splice(f.length-1,1),t&&f.push(f[0]),f},THREE.Path.prototype.toShapes=function(e,t){function r(e){for(var t=[],r=0,i=e.length;i>r;r++){var n=e[r],o=new THREE.Shape;o.actions=n.actions,o.curves=n.curves,t.push(o)}return t}function i(e,t){for(var r=t.length,i=!1,n=r-1,o=0;r>o;n=o++){var a=t[n],s=t[o],h=s.x-a.x,l=s.y-a.y;if(1e-10<Math.abs(l)){if(0>l&&(a=t[o],h=-h,s=t[n],l=-l),!(e.y<a.y||e.y>s.y))if(e.y==a.y){if(e.x==a.x)return!0}else{if(n=l*(e.x-a.x)-h*(e.y-a.y),0==n)return!0;0>n||(i=!i)}}else if(e.y==a.y&&(s.x<=e.x&&e.x<=a.x||a.x<=e.x&&e.x<=s.x))return!0}return i}var n=function(e){var t,r,i,n,o=[],a=new THREE.Path;for(t=0,r=e.length;r>t;t++)i=e[t],n=i.args,i=i.action,i==THREE.PathActions.MOVE_TO&&0!=a.actions.length&&(o.push(a),a=new THREE.Path),a[i].apply(a,n);return 0!=a.actions.length&&o.push(a),o}(this.actions);if(0==n.length)return[];if(!0===t)return r(n);var o,a,s,h=[];if(1==n.length)return a=n[0],s=new THREE.Shape,s.actions=a.actions,s.curves=a.curves,h.push(s),h;var l=!THREE.Shape.Utils.isClockWise(n[0].getPoints()),l=e?!l:l;s=[];var c,u=[],E=[],p=0;u[p]=void 0,E[p]=[];var d,f;for(d=0,f=n.length;f>d;d++)a=n[d],c=a.getPoints(),o=THREE.Shape.Utils.isClockWise(c),(o=e?!o:o)?(!l&&u[p]&&p++,u[p]={s:new THREE.Shape,p:c},u[p].s.actions=a.actions,u[p].s.curves=a.curves,l&&p++,E[p]=[]):E[p].push({h:a,p:c[0]});if(!u[0])return r(n);if(1<u.length){for(d=!1,f=[],a=0,n=u.length;n>a;a++)s[a]=[];for(a=0,n=u.length;n>a;a++)for(o=E[a],l=0;l<o.length;l++){p=o[l],c=!0;for(var m=0;m<u.length;m++)i(p.p,u[m].p)&&(a!=m&&f.push({froms:a,tos:m,hole:l}),c?(c=!1,s[m].push(p)):d=!0);c&&s[a].push(p)}0<f.length&&(d||(E=s))}for(d=0,f=u.length;f>d;d++)for(s=u[d].s,h.push(s),a=E[d],n=0,o=a.length;o>n;n++)s.holes.push(a[n].h);return h},THREE.Shape=function(){THREE.Path.apply(this,arguments),this.holes=[]},THREE.Shape.prototype=Object.create(THREE.Path.prototype),THREE.Shape.prototype.constructor=THREE.Shape,THREE.Shape.prototype.extrude=function(e){return new THREE.ExtrudeGeometry(this,e)},THREE.Shape.prototype.makeGeometry=function(e){return new THREE.ShapeGeometry(this,e)},THREE.Shape.prototype.getPointsHoles=function(e){var t,r=this.holes.length,i=[];for(t=0;r>t;t++)i[t]=this.holes[t].getTransformedPoints(e,this.bends);return i},THREE.Shape.prototype.getSpacedPointsHoles=function(e){var t,r=this.holes.length,i=[];for(t=0;r>t;t++)i[t]=this.holes[t].getTransformedSpacedPoints(e,this.bends);return i},THREE.Shape.prototype.extractAllPoints=function(e){return{shape:this.getTransformedPoints(e),holes:this.getPointsHoles(e)}},THREE.Shape.prototype.extractPoints=function(e){return this.useSpacedPoints?this.extractAllSpacedPoints(e):this.extractAllPoints(e)},THREE.Shape.prototype.extractAllSpacedPoints=function(e){return{shape:this.getTransformedSpacedPoints(e),holes:this.getSpacedPointsHoles(e)}},THREE.Shape.Utils={triangulateShape:function(e,t){function r(e,t,r){return e.x!=t.x?e.x<t.x?e.x<=r.x&&r.x<=t.x:t.x<=r.x&&r.x<=e.x:e.y<t.y?e.y<=r.y&&r.y<=t.y:t.y<=r.y&&r.y<=e.y}function i(e,t,i,n,o){var a=t.x-e.x,s=t.y-e.y,h=n.x-i.x,l=n.y-i.y,c=e.x-i.x,u=e.y-i.y,E=s*h-a*l,p=s*c-a*u;if(1e-10<Math.abs(E)){if(E>0){if(0>p||p>E)return[];if(h=l*c-h*u,0>h||h>E)return[]}else{if(p>0||E>p)return[];if(h=l*c-h*u,h>0||E>h)return[]}return 0==h?!o||0!=p&&p!=E?[e]:[]:h==E?!o||0!=p&&p!=E?[t]:[]:0==p?[i]:p==E?[n]:(o=h/E,[{x:e.x+o*a,y:e.y+o*s}])}return 0!=p||l*c!=h*u?[]:(s=0==a&&0==s,h=0==h&&0==l,s&&h?e.x!=i.x||e.y!=i.y?[]:[e]:s?r(i,n,e)?[e]:[]:h?r(e,t,i)?[i]:[]:(0!=a?(e.x<t.x?(a=e,h=e.x,s=t,e=t.x):(a=t,h=t.x,s=e,e=e.x),i.x<n.x?(t=i,E=i.x,l=n,i=n.x):(t=n,E=n.x,l=i,i=i.x)):(e.y<t.y?(a=e,h=e.y,s=t,e=t.y):(a=t,h=t.y,s=e,e=e.y),i.y<n.y?(t=i,E=i.y,l=n,i=n.y):(t=n,E=n.y,l=i,i=i.y)),E>=h?E>e?[]:e==E?o?[]:[t]:i>=e?[t,s]:[t,l]:h>i?[]:h==i?o?[]:[a]:i>=e?[a,s]:[a,l]))}function n(e,t,r,i){var n=t.x-e.x,o=t.y-e.y;t=r.x-e.x,r=r.y-e.y;var a=i.x-e.x;return i=i.y-e.y,e=n*r-o*t,n=n*i-o*a,1e-10<Math.abs(e)?(t=a*r-i*t,e>0?n>=0&&t>=0:n>=0||t>=0):n>0}var o,a,s,h,l,c={};for(s=e.concat(),o=0,a=t.length;a>o;o++)Array.prototype.push.apply(s,t[o]);for(o=0,a=s.length;a>o;o++)l=s[o].x+":"+s[o].y,void 0!==c[l]&&THREE.warn("THREE.Shape: Duplicate point",l),c[l]=o;o=function(e,t){function r(e,t){var r=m.length-1,i=e-1;0>i&&(i=r);var o=e+1;return o>r&&(o=0),(r=n(m[e],m[i],m[o],s[t]))?(r=s.length-1,i=t-1,0>i&&(i=r),o=t+1,o>r&&(o=0),(r=n(s[t],s[i],s[o],m[e]))?!0:!1):!1;
}function o(e,t){var r,n;for(r=0;r<m.length;r++)if(n=r+1,n%=m.length,n=i(e,t,m[r],m[n],!0),0<n.length)return!0;return!1}function a(e,r){var n,o,a,s;for(n=0;n<T.length;n++)for(o=t[T[n]],a=0;a<o.length;a++)if(s=a+1,s%=o.length,s=i(e,r,o[a],o[s],!0),0<s.length)return!0;return!1}var s,h,l,c,u,E,p,d,f,m=e.concat(),T=[],g=[],R=0;for(h=t.length;h>R;R++)T.push(R);p=0;for(var y=2*T.length;0<T.length;){if(y--,0>y){console.log("Infinite Loop! Holes left:"+T.length+", Probably Hole outside Shape!");break}for(l=p;l<m.length;l++){for(c=m[l],h=-1,R=0;R<T.length;R++)if(u=T[R],E=c.x+":"+c.y+":"+u,void 0===g[E]){for(s=t[u],d=0;d<s.length;d++)if(u=s[d],r(l,d)&&!o(c,u)&&!a(c,u)){h=d,T.splice(R,1),p=m.slice(0,l+1),u=m.slice(l),d=s.slice(h),f=s.slice(0,h+1),m=p.concat(d).concat(f).concat(u),p=l;break}if(h>=0)break;g[E]=!0}if(h>=0)break}}return m}(e,t);var u=THREE.FontUtils.Triangulate(o,!1);for(o=0,a=u.length;a>o;o++)for(h=u[o],s=0;3>s;s++)l=h[s].x+":"+h[s].y,l=c[l],void 0!==l&&(h[s]=l);return u.concat()},isClockWise:function(e){return 0>THREE.FontUtils.Triangulate.area(e)},b2p0:function(e,t){var r=1-e;return r*r*t},b2p1:function(e,t){return 2*(1-e)*e*t},b2p2:function(e,t){return e*e*t},b2:function(e,t,r,i){return this.b2p0(e,t)+this.b2p1(e,r)+this.b2p2(e,i)},b3p0:function(e,t){var r=1-e;return r*r*r*t},b3p1:function(e,t){var r=1-e;return 3*r*r*e*t},b3p2:function(e,t){return 3*(1-e)*e*e*t},b3p3:function(e,t){return e*e*e*t},b3:function(e,t,r,i,n){return this.b3p0(e,t)+this.b3p1(e,r)+this.b3p2(e,i)+this.b3p3(e,n)}},THREE.LineCurve=function(e,t){this.v1=e,this.v2=t},THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype),THREE.LineCurve.prototype.constructor=THREE.LineCurve,THREE.LineCurve.prototype.getPoint=function(e){var t=this.v2.clone().sub(this.v1);return t.multiplyScalar(e).add(this.v1),t},THREE.LineCurve.prototype.getPointAt=function(e){return this.getPoint(e)},THREE.LineCurve.prototype.getTangent=function(e){return this.v2.clone().sub(this.v1).normalize()},THREE.QuadraticBezierCurve=function(e,t,r){this.v0=e,this.v1=t,this.v2=r},THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype),THREE.QuadraticBezierCurve.prototype.constructor=THREE.QuadraticBezierCurve,THREE.QuadraticBezierCurve.prototype.getPoint=function(e){var t=new THREE.Vector2;return t.x=THREE.Shape.Utils.b2(e,this.v0.x,this.v1.x,this.v2.x),t.y=THREE.Shape.Utils.b2(e,this.v0.y,this.v1.y,this.v2.y),t},THREE.QuadraticBezierCurve.prototype.getTangent=function(e){var t=new THREE.Vector2;return t.x=THREE.Curve.Utils.tangentQuadraticBezier(e,this.v0.x,this.v1.x,this.v2.x),t.y=THREE.Curve.Utils.tangentQuadraticBezier(e,this.v0.y,this.v1.y,this.v2.y),t.normalize()},THREE.CubicBezierCurve=function(e,t,r,i){this.v0=e,this.v1=t,this.v2=r,this.v3=i},THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype),THREE.CubicBezierCurve.prototype.constructor=THREE.CubicBezierCurve,THREE.CubicBezierCurve.prototype.getPoint=function(e){var t;return t=THREE.Shape.Utils.b3(e,this.v0.x,this.v1.x,this.v2.x,this.v3.x),e=THREE.Shape.Utils.b3(e,this.v0.y,this.v1.y,this.v2.y,this.v3.y),new THREE.Vector2(t,e)},THREE.CubicBezierCurve.prototype.getTangent=function(e){var t;return t=THREE.Curve.Utils.tangentCubicBezier(e,this.v0.x,this.v1.x,this.v2.x,this.v3.x),e=THREE.Curve.Utils.tangentCubicBezier(e,this.v0.y,this.v1.y,this.v2.y,this.v3.y),t=new THREE.Vector2(t,e),t.normalize(),t},THREE.SplineCurve=function(e){this.points=void 0==e?[]:e},THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype),THREE.SplineCurve.prototype.constructor=THREE.SplineCurve,THREE.SplineCurve.prototype.getPoint=function(e){var t=this.points;e*=t.length-1;var r=Math.floor(e);e-=r;var i=t[0==r?r:r-1],n=t[r],o=t[r>t.length-2?t.length-1:r+1],t=t[r>t.length-3?t.length-1:r+2],r=new THREE.Vector2;return r.x=THREE.Curve.Utils.interpolate(i.x,n.x,o.x,t.x,e),r.y=THREE.Curve.Utils.interpolate(i.y,n.y,o.y,t.y,e),r},THREE.EllipseCurve=function(e,t,r,i,n,o,a){this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=i,this.aStartAngle=n,this.aEndAngle=o,this.aClockwise=a},THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype),THREE.EllipseCurve.prototype.constructor=THREE.EllipseCurve,THREE.EllipseCurve.prototype.getPoint=function(e){var t=this.aEndAngle-this.aStartAngle;return 0>t&&(t+=2*Math.PI),t>2*Math.PI&&(t-=2*Math.PI),e=!0===this.aClockwise?this.aEndAngle+(1-e)*(2*Math.PI-t):this.aStartAngle+e*t,t=new THREE.Vector2,t.x=this.aX+this.xRadius*Math.cos(e),t.y=this.aY+this.yRadius*Math.sin(e),t},THREE.ArcCurve=function(e,t,r,i,n,o){THREE.EllipseCurve.call(this,e,t,r,r,i,n,o)},THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype),THREE.ArcCurve.prototype.constructor=THREE.ArcCurve,THREE.LineCurve3=THREE.Curve.create(function(e,t){this.v1=e,this.v2=t},function(e){var t=new THREE.Vector3;return t.subVectors(this.v2,this.v1),t.multiplyScalar(e),t.add(this.v1),t}),THREE.QuadraticBezierCurve3=THREE.Curve.create(function(e,t,r){this.v0=e,this.v1=t,this.v2=r},function(e){var t=new THREE.Vector3;return t.x=THREE.Shape.Utils.b2(e,this.v0.x,this.v1.x,this.v2.x),t.y=THREE.Shape.Utils.b2(e,this.v0.y,this.v1.y,this.v2.y),t.z=THREE.Shape.Utils.b2(e,this.v0.z,this.v1.z,this.v2.z),t}),THREE.CubicBezierCurve3=THREE.Curve.create(function(e,t,r,i){this.v0=e,this.v1=t,this.v2=r,this.v3=i},function(e){var t=new THREE.Vector3;return t.x=THREE.Shape.Utils.b3(e,this.v0.x,this.v1.x,this.v2.x,this.v3.x),t.y=THREE.Shape.Utils.b3(e,this.v0.y,this.v1.y,this.v2.y,this.v3.y),t.z=THREE.Shape.Utils.b3(e,this.v0.z,this.v1.z,this.v2.z,this.v3.z),t}),THREE.SplineCurve3=THREE.Curve.create(function(e){this.points=void 0==e?[]:e},function(e){var t=this.points;e*=t.length-1;var r=Math.floor(e);e-=r;var i=t[0==r?r:r-1],n=t[r],o=t[r>t.length-2?t.length-1:r+1],t=t[r>t.length-3?t.length-1:r+2],r=new THREE.Vector3;return r.x=THREE.Curve.Utils.interpolate(i.x,n.x,o.x,t.x,e),r.y=THREE.Curve.Utils.interpolate(i.y,n.y,o.y,t.y,e),r.z=THREE.Curve.Utils.interpolate(i.z,n.z,o.z,t.z,e),r}),THREE.ClosedSplineCurve3=THREE.Curve.create(function(e){this.points=void 0==e?[]:e},function(e){var t=this.points;e*=t.length-0;var r=Math.floor(e);e-=r;var r=r+(r>0?0:(Math.floor(Math.abs(r)/t.length)+1)*t.length),i=t[(r-1)%t.length],n=t[r%t.length],o=t[(r+1)%t.length],t=t[(r+2)%t.length],r=new THREE.Vector3;return r.x=THREE.Curve.Utils.interpolate(i.x,n.x,o.x,t.x,e),r.y=THREE.Curve.Utils.interpolate(i.y,n.y,o.y,t.y,e),r.z=THREE.Curve.Utils.interpolate(i.z,n.z,o.z,t.z,e),r}),THREE.AnimationHandler={LINEAR:0,CATMULLROM:1,CATMULLROM_FORWARD:2,add:function(){THREE.warn("THREE.AnimationHandler.add() has been deprecated.")},get:function(){THREE.warn("THREE.AnimationHandler.get() has been deprecated.")},remove:function(){THREE.warn("THREE.AnimationHandler.remove() has been deprecated.")},animations:[],init:function(e){if(!0===e.initialized)return e;for(var t=0;t<e.hierarchy.length;t++){for(var r=0;r<e.hierarchy[t].keys.length;r++)if(0>e.hierarchy[t].keys[r].time&&(e.hierarchy[t].keys[r].time=0),void 0!==e.hierarchy[t].keys[r].rot&&!(e.hierarchy[t].keys[r].rot instanceof THREE.Quaternion)){var i=e.hierarchy[t].keys[r].rot;e.hierarchy[t].keys[r].rot=(new THREE.Quaternion).fromArray(i)}if(e.hierarchy[t].keys.length&&void 0!==e.hierarchy[t].keys[0].morphTargets){for(i={},r=0;r<e.hierarchy[t].keys.length;r++)for(var n=0;n<e.hierarchy[t].keys[r].morphTargets.length;n++){var o=e.hierarchy[t].keys[r].morphTargets[n];i[o]=-1}for(e.hierarchy[t].usedMorphTargets=i,r=0;r<e.hierarchy[t].keys.length;r++){var a={};for(o in i){for(n=0;n<e.hierarchy[t].keys[r].morphTargets.length;n++)if(e.hierarchy[t].keys[r].morphTargets[n]===o){a[o]=e.hierarchy[t].keys[r].morphTargetsInfluences[n];break}n===e.hierarchy[t].keys[r].morphTargets.length&&(a[o]=0)}e.hierarchy[t].keys[r].morphTargetsInfluences=a}}for(r=1;r<e.hierarchy[t].keys.length;r++)e.hierarchy[t].keys[r].time===e.hierarchy[t].keys[r-1].time&&(e.hierarchy[t].keys.splice(r,1),r--);for(r=0;r<e.hierarchy[t].keys.length;r++)e.hierarchy[t].keys[r].index=r}return e.initialized=!0,e},parse:function(e){var t=function(e,r){r.push(e);for(var i=0;i<e.children.length;i++)t(e.children[i],r)},r=[];if(e instanceof THREE.SkinnedMesh)for(var i=0;i<e.skeleton.bones.length;i++)r.push(e.skeleton.bones[i]);else t(e,r);return r},play:function(e){-1===this.animations.indexOf(e)&&this.animations.push(e)},stop:function(e){e=this.animations.indexOf(e),-1!==e&&this.animations.splice(e,1)},update:function(e){for(var t=0;t<this.animations.length;t++)this.animations[t].resetBlendWeights();for(t=0;t<this.animations.length;t++)this.animations[t].update(e)}},THREE.Animation=function(e,t){this.root=e,this.data=THREE.AnimationHandler.init(t),this.hierarchy=THREE.AnimationHandler.parse(e),this.currentTime=0,this.timeScale=1,this.isPlaying=!1,this.loop=!0,this.weight=0,this.interpolationType=THREE.AnimationHandler.LINEAR},THREE.Animation.prototype={constructor:THREE.Animation,keyTypes:["pos","rot","scl"],play:function(e,t){this.currentTime=void 0!==e?e:0,this.weight=void 0!==t?t:1,this.isPlaying=!0,this.reset(),THREE.AnimationHandler.play(this)},stop:function(){this.isPlaying=!1,THREE.AnimationHandler.stop(this)},reset:function(){for(var e=0,t=this.hierarchy.length;t>e;e++){var r=this.hierarchy[e];void 0===r.animationCache&&(r.animationCache={animations:{},blending:{positionWeight:0,quaternionWeight:0,scaleWeight:0}});var i=this.data.name,n=r.animationCache.animations,o=n[i];for(void 0===o&&(o={prevKey:{pos:0,rot:0,scl:0},nextKey:{pos:0,rot:0,scl:0},originalMatrix:r.matrix},n[i]=o),r=0;3>r;r++){for(var i=this.keyTypes[r],n=this.data.hierarchy[e].keys[0],a=this.getNextKeyWith(i,e,1);a.time<this.currentTime&&a.index>n.index;)n=a,a=this.getNextKeyWith(i,e,a.index+1);o.prevKey[i]=n,o.nextKey[i]=a}}},resetBlendWeights:function(){for(var e=0,t=this.hierarchy.length;t>e;e++){var r=this.hierarchy[e].animationCache;void 0!==r&&(r=r.blending,r.positionWeight=0,r.quaternionWeight=0,r.scaleWeight=0)}},update:function(){var e=[],t=new THREE.Vector3,r=new THREE.Vector3,i=new THREE.Quaternion,n=function(e,t){var r,i,n,a,s,h,l=[],c=[];return r=(e.length-1)*t,i=Math.floor(r),r-=i,l[0]=0===i?i:i-1,l[1]=i,l[2]=i>e.length-2?i:i+1,l[3]=i>e.length-3?i:i+2,i=e[l[0]],a=e[l[1]],s=e[l[2]],h=e[l[3]],l=r*r,n=r*l,c[0]=o(i[0],a[0],s[0],h[0],r,l,n),c[1]=o(i[1],a[1],s[1],h[1],r,l,n),c[2]=o(i[2],a[2],s[2],h[2],r,l,n),c},o=function(e,t,r,i,n,o,a){return e=.5*(r-e),i=.5*(i-t),(2*(t-r)+e+i)*a+(-3*(t-r)-2*e-i)*o+e*n+t};return function(o){if(!1!==this.isPlaying&&(this.currentTime+=o*this.timeScale,0!==this.weight)){o=this.data.length,(this.currentTime>o||0>this.currentTime)&&(this.loop?(this.currentTime%=o,0>this.currentTime&&(this.currentTime+=o),this.reset()):this.stop()),o=0;for(var a=this.hierarchy.length;a>o;o++)for(var s=this.hierarchy[o],h=s.animationCache.animations[this.data.name],l=s.animationCache.blending,c=0;3>c;c++){var u=this.keyTypes[c],E=h.prevKey[u],p=h.nextKey[u];if(0<this.timeScale&&p.time<=this.currentTime||0>this.timeScale&&E.time>=this.currentTime){for(E=this.data.hierarchy[o].keys[0],p=this.getNextKeyWith(u,o,1);p.time<this.currentTime&&p.index>E.index;)E=p,p=this.getNextKeyWith(u,o,p.index+1);h.prevKey[u]=E,h.nextKey[u]=p}var d=(this.currentTime-E.time)/(p.time-E.time),f=E[u],m=p[u];0>d&&(d=0),d>1&&(d=1),"pos"===u?this.interpolationType===THREE.AnimationHandler.LINEAR?(r.x=f[0]+(m[0]-f[0])*d,r.y=f[1]+(m[1]-f[1])*d,r.z=f[2]+(m[2]-f[2])*d,E=this.weight/(this.weight+l.positionWeight),s.position.lerp(r,E),l.positionWeight+=this.weight):(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD)&&(e[0]=this.getPrevKeyWith("pos",o,E.index-1).pos,e[1]=f,e[2]=m,e[3]=this.getNextKeyWith("pos",o,p.index+1).pos,d=.33*d+.33,p=n(e,d),E=this.weight/(this.weight+l.positionWeight),l.positionWeight+=this.weight,u=s.position,u.x+=(p[0]-u.x)*E,u.y+=(p[1]-u.y)*E,u.z+=(p[2]-u.z)*E,this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD&&(d=n(e,1.01*d),t.set(d[0],d[1],d[2]),t.sub(u),t.y=0,t.normalize(),d=Math.atan2(t.x,t.z),s.rotation.set(0,d,0))):"rot"===u?(THREE.Quaternion.slerp(f,m,i,d),0===l.quaternionWeight?(s.quaternion.copy(i),l.quaternionWeight=this.weight):(E=this.weight/(this.weight+l.quaternionWeight),THREE.Quaternion.slerp(s.quaternion,i,s.quaternion,E),l.quaternionWeight+=this.weight)):"scl"===u&&(r.x=f[0]+(m[0]-f[0])*d,r.y=f[1]+(m[1]-f[1])*d,r.z=f[2]+(m[2]-f[2])*d,E=this.weight/(this.weight+l.scaleWeight),s.scale.lerp(r,E),l.scaleWeight+=this.weight)}return!0}}}(),getNextKeyWith:function(e,t,r){var i=this.data.hierarchy[t].keys;for(r=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?r<i.length-1?r:i.length-1:r%i.length;r<i.length;r++)if(void 0!==i[r][e])return i[r];return this.data.hierarchy[t].keys[0]},getPrevKeyWith:function(e,t,r){var i=this.data.hierarchy[t].keys;for(r=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?r>0?r:0:r>=0?r:r+i.length;r>=0;r--)if(void 0!==i[r][e])return i[r];return this.data.hierarchy[t].keys[i.length-1]}},THREE.KeyFrameAnimation=function(e){this.root=e.node,this.data=THREE.AnimationHandler.init(e),this.hierarchy=THREE.AnimationHandler.parse(this.root),this.currentTime=0,this.timeScale=.001,this.isPlaying=!1,this.loop=this.isPaused=!0,e=0;for(var t=this.hierarchy.length;t>e;e++){var r=this.data.hierarchy[e].sids,i=this.hierarchy[e];if(this.data.hierarchy[e].keys.length&&r){for(var n=0;n<r.length;n++){var o=r[n],a=this.getNextKeyWith(o,e,0);a&&a.apply(o)}i.matrixAutoUpdate=!1,this.data.hierarchy[e].node.updateMatrix(),i.matrixWorldNeedsUpdate=!0}}},THREE.KeyFrameAnimation.prototype={constructor:THREE.KeyFrameAnimation,play:function(e){if(this.currentTime=void 0!==e?e:0,!1===this.isPlaying){this.isPlaying=!0;var t,r,i=this.hierarchy.length;for(e=0;i>e;e++)t=this.hierarchy[e],r=this.data.hierarchy[e],void 0===r.animationCache&&(r.animationCache={},r.animationCache.prevKey=null,r.animationCache.nextKey=null,r.animationCache.originalMatrix=t.matrix),t=this.data.hierarchy[e].keys,t.length&&(r.animationCache.prevKey=t[0],r.animationCache.nextKey=t[1],this.startTime=Math.min(t[0].time,this.startTime),this.endTime=Math.max(t[t.length-1].time,this.endTime));this.update(0)}this.isPaused=!1,THREE.AnimationHandler.play(this)},stop:function(){this.isPaused=this.isPlaying=!1,THREE.AnimationHandler.stop(this);for(var e=0;e<this.data.hierarchy.length;e++){var t=this.hierarchy[e],r=this.data.hierarchy[e];if(void 0!==r.animationCache){var i=r.animationCache.originalMatrix;i.copy(t.matrix),t.matrix=i,delete r.animationCache}}},update:function(e){if(!1!==this.isPlaying){this.currentTime+=e*this.timeScale,e=this.data.length,!0===this.loop&&this.currentTime>e&&(this.currentTime%=e),this.currentTime=Math.min(this.currentTime,e),e=0;for(var t=this.hierarchy.length;t>e;e++){var r=this.hierarchy[e],i=this.data.hierarchy[e],n=i.keys,i=i.animationCache;if(n.length){var o=i.prevKey,a=i.nextKey;if(a.time<=this.currentTime){for(;a.time<this.currentTime&&a.index>o.index;)o=a,a=n[o.index+1];i.prevKey=o,i.nextKey=a}a.time>=this.currentTime?o.interpolate(a,this.currentTime):o.interpolate(a,a.time),this.data.hierarchy[e].node.updateMatrix(),r.matrixWorldNeedsUpdate=!0}}}},getNextKeyWith:function(e,t,r){for(t=this.data.hierarchy[t].keys,r%=t.length;r<t.length;r++)if(t[r].hasTarget(e))return t[r];return t[0]},getPrevKeyWith:function(e,t,r){for(t=this.data.hierarchy[t].keys,r=r>=0?r:r+t.length;r>=0;r--)if(t[r].hasTarget(e))return t[r];return t[t.length-1]}},THREE.MorphAnimation=function(e){this.mesh=e,this.frames=e.morphTargetInfluences.length,this.currentTime=0,this.duration=1e3,this.loop=!0,this.currentFrame=this.lastFrame=0,this.isPlaying=!1},THREE.MorphAnimation.prototype={constructor:THREE.MorphAnimation,play:function(){this.isPlaying=!0},pause:function(){this.isPlaying=!1},update:function(e){if(!1!==this.isPlaying){this.currentTime+=e,!0===this.loop&&this.currentTime>this.duration&&(this.currentTime%=this.duration),this.currentTime=Math.min(this.currentTime,this.duration),e=this.duration/this.frames;var t=Math.floor(this.currentTime/e),r=this.mesh.morphTargetInfluences;t!=this.currentFrame&&(r[this.lastFrame]=0,r[this.currentFrame]=1,r[t]=0,this.lastFrame=this.currentFrame,this.currentFrame=t),r[t]=this.currentTime%e/e,r[this.lastFrame]=1-r[t]}}},THREE.BoxGeometry=function(e,t,r,i,n,o){function a(e,t,r,i,n,o,a,h){var l,c=s.widthSegments,u=s.heightSegments,E=n/2,p=o/2,d=s.vertices.length;"x"===e&&"y"===t||"y"===e&&"x"===t?l="z":"x"===e&&"z"===t||"z"===e&&"x"===t?(l="y",u=s.depthSegments):("z"===e&&"y"===t||"y"===e&&"z"===t)&&(l="x",c=s.depthSegments);var f=c+1,m=u+1,T=n/c,g=o/u,R=new THREE.Vector3;for(R[l]=a>0?1:-1,n=0;m>n;n++)for(o=0;f>o;o++){var y=new THREE.Vector3;y[e]=(o*T-E)*r,y[t]=(n*g-p)*i,y[l]=a,s.vertices.push(y)}for(n=0;u>n;n++)for(o=0;c>o;o++)p=o+f*n,e=o+f*(n+1),t=o+1+f*(n+1),r=o+1+f*n,i=new THREE.Vector2(o/c,1-n/u),a=new THREE.Vector2(o/c,1-(n+1)/u),l=new THREE.Vector2((o+1)/c,1-(n+1)/u),E=new THREE.Vector2((o+1)/c,1-n/u),p=new THREE.Face3(p+d,e+d,r+d),p.normal.copy(R),p.vertexNormals.push(R.clone(),R.clone(),R.clone()),p.materialIndex=h,s.faces.push(p),s.faceVertexUvs[0].push([i,a,E]),p=new THREE.Face3(e+d,t+d,r+d),p.normal.copy(R),p.vertexNormals.push(R.clone(),R.clone(),R.clone()),p.materialIndex=h,s.faces.push(p),s.faceVertexUvs[0].push([a.clone(),l,E.clone()])}THREE.Geometry.call(this),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:n,depthSegments:o},this.widthSegments=i||1,this.heightSegments=n||1,this.depthSegments=o||1;var s=this;i=e/2,n=t/2,o=r/2,a("z","y",-1,-1,r,t,i,0),a("z","y",1,-1,r,t,-i,1),a("x","z",1,1,e,r,n,2),a("x","z",1,-1,e,r,-n,3),a("x","y",1,-1,e,t,o,4),a("x","y",-1,-1,e,t,-o,5),this.mergeVertices()},THREE.BoxGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.BoxGeometry.prototype.constructor=THREE.BoxGeometry,THREE.CircleGeometry=function(e,t,r,i){THREE.Geometry.call(this),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:i},e=e||50,t=void 0!==t?Math.max(3,t):8,r=void 0!==r?r:0,i=void 0!==i?i:2*Math.PI;var n,o=[];n=new THREE.Vector3;var a=new THREE.Vector2(.5,.5);for(this.vertices.push(n),o.push(a),n=0;t>=n;n++){var s=new THREE.Vector3,h=r+n/t*i;s.x=e*Math.cos(h),s.y=e*Math.sin(h),this.vertices.push(s),o.push(new THREE.Vector2((s.x/e+1)/2,(s.y/e+1)/2))}for(r=new THREE.Vector3(0,0,1),n=1;t>=n;n++)this.faces.push(new THREE.Face3(n,n+1,0,[r.clone(),r.clone(),r.clone()])),this.faceVertexUvs[0].push([o[n].clone(),o[n+1].clone(),a.clone()]);this.computeFaceNormals(),this.boundingSphere=new THREE.Sphere(new THREE.Vector3,e)},THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.CircleGeometry.prototype.constructor=THREE.CircleGeometry,THREE.CubeGeometry=function(e,t,r,i,n,o){return THREE.warn("THREE.CubeGeometry has been renamed to THREE.BoxGeometry."),new THREE.BoxGeometry(e,t,r,i,n,o)},THREE.CylinderGeometry=function(e,t,r,i,n,o,a,s){THREE.Geometry.call(this),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:i,heightSegments:n,openEnded:o,thetaStart:a,thetaLength:s},e=void 0!==e?e:20,t=void 0!==t?t:20,r=void 0!==r?r:100,i=i||8,n=n||1,o=void 0!==o?o:!1,a=void 0!==a?a:0,s=void 0!==s?s:2*Math.PI;var h,l,c=r/2,u=[],E=[];for(l=0;n>=l;l++){var p=[],d=[],f=l/n,m=f*(t-e)+e;for(h=0;i>=h;h++){var T=h/i,g=new THREE.Vector3;g.x=m*Math.sin(T*s+a),g.y=-f*r+c,g.z=m*Math.cos(T*s+a),this.vertices.push(g),p.push(this.vertices.length-1),d.push(new THREE.Vector2(T,1-f))}u.push(p),E.push(d)}for(r=(t-e)/r,h=0;i>h;h++)for(0!==e?(a=this.vertices[u[0][h]].clone(),s=this.vertices[u[0][h+1]].clone()):(a=this.vertices[u[1][h]].clone(),s=this.vertices[u[1][h+1]].clone()),a.setY(Math.sqrt(a.x*a.x+a.z*a.z)*r).normalize(),s.setY(Math.sqrt(s.x*s.x+s.z*s.z)*r).normalize(),l=0;n>l;l++){var p=u[l][h],d=u[l+1][h],f=u[l+1][h+1],m=u[l][h+1],T=a.clone(),g=a.clone(),R=s.clone(),y=s.clone(),v=E[l][h].clone(),H=E[l+1][h].clone(),x=E[l+1][h+1].clone(),b=E[l][h+1].clone();this.faces.push(new THREE.Face3(p,d,m,[T,g,y])),this.faceVertexUvs[0].push([v,H,b]),this.faces.push(new THREE.Face3(d,f,m,[g.clone(),R,y.clone()])),this.faceVertexUvs[0].push([H.clone(),x,b.clone()])}if(!1===o&&e>0)for(this.vertices.push(new THREE.Vector3(0,c,0)),h=0;i>h;h++)p=u[0][h],d=u[0][h+1],f=this.vertices.length-1,T=new THREE.Vector3(0,1,0),g=new THREE.Vector3(0,1,0),R=new THREE.Vector3(0,1,0),v=E[0][h].clone(),H=E[0][h+1].clone(),x=new THREE.Vector2(H.x,0),this.faces.push(new THREE.Face3(p,d,f,[T,g,R])),this.faceVertexUvs[0].push([v,H,x]);if(!1===o&&t>0)for(this.vertices.push(new THREE.Vector3(0,-c,0)),h=0;i>h;h++)p=u[n][h+1],d=u[n][h],f=this.vertices.length-1,T=new THREE.Vector3(0,-1,0),g=new THREE.Vector3(0,-1,0),R=new THREE.Vector3(0,-1,0),v=E[n][h+1].clone(),H=E[n][h].clone(),x=new THREE.Vector2(H.x,1),this.faces.push(new THREE.Face3(p,d,f,[T,g,R])),this.faceVertexUvs[0].push([v,H,x]);this.computeFaceNormals()},THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.CylinderGeometry.prototype.constructor=THREE.CylinderGeometry,THREE.ExtrudeGeometry=function(e,t){"undefined"!=typeof e&&(THREE.Geometry.call(this),this.type="ExtrudeGeometry",e=e instanceof Array?e:[e],this.addShapeList(e,t),this.computeFaceNormals())},THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.ExtrudeGeometry.prototype.constructor=THREE.ExtrudeGeometry,THREE.ExtrudeGeometry.prototype.addShapeList=function(e,t){for(var r=e.length,i=0;r>i;i++)this.addShape(e[i],t)},THREE.ExtrudeGeometry.prototype.addShape=function(e,t){function r(e,t,r){return t||THREE.error("THREE.ExtrudeGeometry: vec does not exist"),t.clone().multiplyScalar(r).add(e)}function i(e,t,r){var i=1,i=e.x-t.x,n=e.y-t.y,o=r.x-e.x,a=r.y-e.y,s=i*i+n*n;if(1e-10<Math.abs(i*a-n*o)){var h=Math.sqrt(s),l=Math.sqrt(o*o+a*a),s=t.x-n/h;if(t=t.y+i/h,o=((r.x-a/l-s)*a-(r.y+o/l-t)*o)/(i*a-n*o),r=s+i*o-e.x,e=t+n*o-e.y,i=r*r+e*e,2>=i)return new THREE.Vector2(r,e);i=Math.sqrt(i/2)}else e=!1,i>1e-10?o>1e-10&&(e=!0):-1e-10>i?-1e-10>o&&(e=!0):Math.sign(n)==Math.sign(a)&&(e=!0),e?(r=-n,e=i,i=Math.sqrt(s)):(r=i,e=n,i=Math.sqrt(s/2));return new THREE.Vector2(r/i,e/i)}function n(e,t){var r,i;for(N=e.length;0<=--N;){r=N,i=N-1,0>i&&(i=e.length-1);for(var n=0,o=g+2*f,n=0;o>n;n++){var a=z*n,s=z*(n+1),h=t+r+a,a=t+i+a,l=t+i+s,s=t+r+s,h=h+S,a=a+S,l=l+S,s=s+S;M.faces.push(new THREE.Face3(h,a,s,null,null,H)),M.faces.push(new THREE.Face3(a,l,s,null,null,H)),h=x.generateSideWallUV(M,h,a,l,s),M.faceVertexUvs[0].push([h[0],h[1],h[3]]),M.faceVertexUvs[0].push([h[1],h[2],h[3]])}}}function o(e,t,r){M.vertices.push(new THREE.Vector3(e,t,r))}function a(e,t,r){e+=S,t+=S,r+=S,M.faces.push(new THREE.Face3(e,t,r,null,null,v)),e=x.generateTopUV(M,e,t,r),M.faceVertexUvs[0].push(e)}var s,h,l,c,u,E=void 0!==t.amount?t.amount:100,p=void 0!==t.bevelThickness?t.bevelThickness:6,d=void 0!==t.bevelSize?t.bevelSize:p-2,f=void 0!==t.bevelSegments?t.bevelSegments:3,m=void 0!==t.bevelEnabled?t.bevelEnabled:!0,T=void 0!==t.curveSegments?t.curveSegments:12,g=void 0!==t.steps?t.steps:1,R=t.extrudePath,y=!1,v=t.material,H=t.extrudeMaterial,x=void 0!==t.UVGenerator?t.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator;R&&(s=R.getSpacedPoints(g),y=!0,m=!1,h=void 0!==t.frames?t.frames:new THREE.TubeGeometry.FrenetFrames(R,g,!1),l=new THREE.Vector3,c=new THREE.Vector3,u=new THREE.Vector3),m||(d=p=f=0);var b,w,_,M=this,S=this.vertices.length,R=e.extractPoints(T),T=R.shape,C=R.holes;if(R=!THREE.Shape.Utils.isClockWise(T)){for(T=T.reverse(),w=0,_=C.length;_>w;w++)b=C[w],THREE.Shape.Utils.isClockWise(b)&&(C[w]=b.reverse());R=!1}var A=THREE.Shape.Utils.triangulateShape(T,C),L=T;for(w=0,_=C.length;_>w;w++)b=C[w],T=T.concat(b);var P,F,B,U,D,V,z=T.length,k=A.length,R=[],N=0;for(B=L.length,P=B-1,F=N+1;B>N;N++,P++,F++)P===B&&(P=0),F===B&&(F=0),R[N]=i(L[N],L[P],L[F]);var O,G=[],I=R.concat();for(w=0,_=C.length;_>w;w++){for(b=C[w],O=[],N=0,B=b.length,P=B-1,F=N+1;B>N;N++,P++,F++)P===B&&(P=0),F===B&&(F=0),O[N]=i(b[N],b[P],b[F]);G.push(O),I=I.concat(O)}for(P=0;f>P;P++){for(B=P/f,U=p*(1-B),F=d*Math.sin(B*Math.PI/2),N=0,B=L.length;B>N;N++)D=r(L[N],R[N],F),o(D.x,D.y,-U);for(w=0,_=C.length;_>w;w++)for(b=C[w],O=G[w],N=0,B=b.length;B>N;N++)D=r(b[N],O[N],F),o(D.x,D.y,-U)}for(F=d,N=0;z>N;N++)D=m?r(T[N],I[N],F):T[N],y?(c.copy(h.normals[0]).multiplyScalar(D.x),l.copy(h.binormals[0]).multiplyScalar(D.y),u.copy(s[0]).add(c).add(l),o(u.x,u.y,u.z)):o(D.x,D.y,0);for(B=1;g>=B;B++)for(N=0;z>N;N++)D=m?r(T[N],I[N],F):T[N],y?(c.copy(h.normals[B]).multiplyScalar(D.x),l.copy(h.binormals[B]).multiplyScalar(D.y),u.copy(s[B]).add(c).add(l),o(u.x,u.y,u.z)):o(D.x,D.y,E/g*B);for(P=f-1;P>=0;P--){for(B=P/f,U=p*(1-B),F=d*Math.sin(B*Math.PI/2),N=0,B=L.length;B>N;N++)D=r(L[N],R[N],F),o(D.x,D.y,E+U);for(w=0,_=C.length;_>w;w++)for(b=C[w],O=G[w],N=0,B=b.length;B>N;N++)D=r(b[N],O[N],F),y?o(D.x,D.y+s[g-1].y,s[g-1].x+U):o(D.x,D.y,E+U)}!function(){if(m){var e;for(e=0*z,N=0;k>N;N++)V=A[N],a(V[2]+e,V[1]+e,V[0]+e);for(e=g+2*f,e*=z,N=0;k>N;N++)V=A[N],a(V[0]+e,V[1]+e,V[2]+e)}else{for(N=0;k>N;N++)V=A[N],a(V[2],V[1],V[0]);for(N=0;k>N;N++)V=A[N],a(V[0]+z*g,V[1]+z*g,V[2]+z*g)}}(),function(){var e=0;for(n(L,e),e+=L.length,w=0,_=C.length;_>w;w++)b=C[w],n(b,e),e+=b.length}()},THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function(e,t,r,i){return e=e.vertices,t=e[t],r=e[r],i=e[i],[new THREE.Vector2(t.x,t.y),new THREE.Vector2(r.x,r.y),new THREE.Vector2(i.x,i.y)]},generateSideWallUV:function(e,t,r,i,n){return e=e.vertices,t=e[t],r=e[r],i=e[i],n=e[n],.01>Math.abs(t.y-r.y)?[new THREE.Vector2(t.x,1-t.z),new THREE.Vector2(r.x,1-r.z),new THREE.Vector2(i.x,1-i.z),new THREE.Vector2(n.x,1-n.z)]:[new THREE.Vector2(t.y,1-t.z),new THREE.Vector2(r.y,1-r.z),new THREE.Vector2(i.y,1-i.z),new THREE.Vector2(n.y,1-n.z)]}},THREE.ShapeGeometry=function(e,t){THREE.Geometry.call(this),this.type="ShapeGeometry",!1==e instanceof Array&&(e=[e]),this.addShapeList(e,t),this.computeFaceNormals()},THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.ShapeGeometry.prototype.constructor=THREE.ShapeGeometry,THREE.ShapeGeometry.prototype.addShapeList=function(e,t){for(var r=0,i=e.length;i>r;r++)this.addShape(e[r],t);return this},THREE.ShapeGeometry.prototype.addShape=function(e,t){void 0===t&&(t={});var r,i,n,o=t.material,a=void 0===t.UVGenerator?THREE.ExtrudeGeometry.WorldUVGenerator:t.UVGenerator,s=this.vertices.length;r=e.extractPoints(void 0!==t.curveSegments?t.curveSegments:12);var h=r.shape,l=r.holes;if(!THREE.Shape.Utils.isClockWise(h))for(h=h.reverse(),r=0,i=l.length;i>r;r++)n=l[r],THREE.Shape.Utils.isClockWise(n)&&(l[r]=n.reverse());var c=THREE.Shape.Utils.triangulateShape(h,l);for(r=0,i=l.length;i>r;r++)n=l[r],h=h.concat(n);for(l=h.length,i=c.length,r=0;l>r;r++)n=h[r],this.vertices.push(new THREE.Vector3(n.x,n.y,0));for(r=0;i>r;r++)l=c[r],h=l[0]+s,n=l[1]+s,l=l[2]+s,this.faces.push(new THREE.Face3(h,n,l,null,null,o)),this.faceVertexUvs[0].push(a.generateTopUV(this,h,n,l))},THREE.LatheGeometry=function(e,t,r,i){THREE.Geometry.call(this),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:r,phiLength:i},t=t||12,r=r||0,i=i||2*Math.PI;for(var n=1/(e.length-1),o=1/t,a=0,s=t;s>=a;a++)for(var h=r+a*o*i,l=Math.cos(h),c=Math.sin(h),h=0,u=e.length;u>h;h++){var E=e[h],p=new THREE.Vector3;p.x=l*E.x-c*E.y,p.y=c*E.x+l*E.y,p.z=E.z,this.vertices.push(p)}for(r=e.length,a=0,s=t;s>a;a++)for(h=0,u=e.length-1;u>h;h++){t=c=h+r*a,i=c+r;var l=c+1+r,c=c+1,E=a*o,p=h*n,d=E+o,f=p+n;this.faces.push(new THREE.Face3(t,i,c)),this.faceVertexUvs[0].push([new THREE.Vector2(E,p),new THREE.Vector2(d,p),new THREE.Vector2(E,f)]),this.faces.push(new THREE.Face3(i,l,c)),this.faceVertexUvs[0].push([new THREE.Vector2(d,p),new THREE.Vector2(d,f),new THREE.Vector2(E,f)])}this.mergeVertices(),this.computeFaceNormals(),this.computeVertexNormals()},THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.LatheGeometry.prototype.constructor=THREE.LatheGeometry,THREE.PlaneGeometry=function(e,t,r,i){console.info("THREE.PlaneGeometry: Consider using THREE.PlaneBufferGeometry for lower memory footprint."),THREE.Geometry.call(this),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i},this.fromBufferGeometry(new THREE.PlaneBufferGeometry(e,t,r,i))},THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.PlaneGeometry.prototype.constructor=THREE.PlaneGeometry,THREE.PlaneBufferGeometry=function(e,t,r,i){THREE.BufferGeometry.call(this),this.type="PlaneBufferGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i};var n=e/2,o=t/2;r=r||1,i=i||1;var a=r+1,s=i+1,h=e/r,l=t/i;t=new Float32Array(a*s*3),e=new Float32Array(a*s*3);for(var c=new Float32Array(a*s*2),u=0,E=0,p=0;s>p;p++)for(var d=p*l-o,f=0;a>f;f++)t[u]=f*h-n,t[u+1]=-d,e[u+2]=1,c[E]=f/r,c[E+1]=1-p/i,u+=3,E+=2;for(u=0,n=new(65535<t.length/3?Uint32Array:Uint16Array)(r*i*6),p=0;i>p;p++)for(f=0;r>f;f++)o=f+a*(p+1),s=f+1+a*(p+1),h=f+1+a*p,n[u]=f+a*p,n[u+1]=o,n[u+2]=h,n[u+3]=o,n[u+4]=s,n[u+5]=h,u+=6;this.addAttribute("index",new THREE.BufferAttribute(n,1)),this.addAttribute("position",new THREE.BufferAttribute(t,3)),this.addAttribute("normal",new THREE.BufferAttribute(e,3)),this.addAttribute("uv",new THREE.BufferAttribute(c,2))},THREE.PlaneBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype),THREE.PlaneBufferGeometry.prototype.constructor=THREE.PlaneBufferGeometry,THREE.RingGeometry=function(e,t,r,i,n,o){THREE.Geometry.call(this),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:i,thetaStart:n,thetaLength:o},e=e||0,t=t||50,n=void 0!==n?n:0,o=void 0!==o?o:2*Math.PI,r=void 0!==r?Math.max(3,r):8,i=void 0!==i?Math.max(1,i):8;var a,s=[],h=e,l=(t-e)/i;for(e=0;i+1>e;e++){for(a=0;r+1>a;a++){var c=new THREE.Vector3,u=n+a/r*o;c.x=h*Math.cos(u),c.y=h*Math.sin(u),this.vertices.push(c),s.push(new THREE.Vector2((c.x/t+1)/2,(c.y/t+1)/2))}h+=l}for(t=new THREE.Vector3(0,0,1),e=0;i>e;e++)for(n=e*(r+1),a=0;r>a;a++)o=u=a+n,l=u+r+1,c=u+r+2,this.faces.push(new THREE.Face3(o,l,c,[t.clone(),t.clone(),t.clone()])),this.faceVertexUvs[0].push([s[o].clone(),s[l].clone(),s[c].clone()]),o=u,l=u+r+2,c=u+1,this.faces.push(new THREE.Face3(o,l,c,[t.clone(),t.clone(),t.clone()])),this.faceVertexUvs[0].push([s[o].clone(),s[l].clone(),s[c].clone()]);this.computeFaceNormals(),this.boundingSphere=new THREE.Sphere(new THREE.Vector3,h)},THREE.RingGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.RingGeometry.prototype.constructor=THREE.RingGeometry,THREE.SphereGeometry=function(e,t,r,i,n,o,a){THREE.Geometry.call(this),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:i,phiLength:n,thetaStart:o,thetaLength:a},e=e||50,t=Math.max(3,Math.floor(t)||8),r=Math.max(2,Math.floor(r)||6),i=void 0!==i?i:0,n=void 0!==n?n:2*Math.PI,o=void 0!==o?o:0,a=void 0!==a?a:Math.PI;var s,h,l=[],c=[];for(h=0;r>=h;h++){var u=[],E=[];for(s=0;t>=s;s++){var p=s/t,d=h/r,f=new THREE.Vector3;f.x=-e*Math.cos(i+p*n)*Math.sin(o+d*a),f.y=e*Math.cos(o+d*a),f.z=e*Math.sin(i+p*n)*Math.sin(o+d*a),this.vertices.push(f),u.push(this.vertices.length-1),E.push(new THREE.Vector2(p,1-d))}l.push(u),c.push(E)}for(h=0;r>h;h++)for(s=0;t>s;s++){i=l[h][s+1],n=l[h][s],o=l[h+1][s],a=l[h+1][s+1];var u=this.vertices[i].clone().normalize(),E=this.vertices[n].clone().normalize(),p=this.vertices[o].clone().normalize(),d=this.vertices[a].clone().normalize(),f=c[h][s+1].clone(),m=c[h][s].clone(),T=c[h+1][s].clone(),g=c[h+1][s+1].clone();Math.abs(this.vertices[i].y)===e?(f.x=(f.x+m.x)/2,this.faces.push(new THREE.Face3(i,o,a,[u,p,d])),this.faceVertexUvs[0].push([f,T,g])):Math.abs(this.vertices[o].y)===e?(T.x=(T.x+g.x)/2,this.faces.push(new THREE.Face3(i,n,o,[u,E,p])),this.faceVertexUvs[0].push([f,m,T])):(this.faces.push(new THREE.Face3(i,n,a,[u,E,d])),
this.faceVertexUvs[0].push([f,m,g]),this.faces.push(new THREE.Face3(n,o,a,[E.clone(),p,d.clone()])),this.faceVertexUvs[0].push([m.clone(),T,g.clone()]))}this.computeFaceNormals(),this.boundingSphere=new THREE.Sphere(new THREE.Vector3,e)},THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.SphereGeometry.prototype.constructor=THREE.SphereGeometry,THREE.TextGeometry=function(e,t){t=t||{};var r=THREE.FontUtils.generateShapes(e,t);t.amount=void 0!==t.height?t.height:50,void 0===t.bevelThickness&&(t.bevelThickness=10),void 0===t.bevelSize&&(t.bevelSize=8),void 0===t.bevelEnabled&&(t.bevelEnabled=!1),THREE.ExtrudeGeometry.call(this,r,t),this.type="TextGeometry"},THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype),THREE.TextGeometry.prototype.constructor=THREE.TextGeometry,THREE.TorusGeometry=function(e,t,r,i,n){THREE.Geometry.call(this),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:i,arc:n},e=e||100,t=t||40,r=r||8,i=i||6,n=n||2*Math.PI;for(var o=new THREE.Vector3,a=[],s=[],h=0;r>=h;h++)for(var l=0;i>=l;l++){var c=l/i*n,u=h/r*Math.PI*2;o.x=e*Math.cos(c),o.y=e*Math.sin(c);var E=new THREE.Vector3;E.x=(e+t*Math.cos(u))*Math.cos(c),E.y=(e+t*Math.cos(u))*Math.sin(c),E.z=t*Math.sin(u),this.vertices.push(E),a.push(new THREE.Vector2(l/i,h/r)),s.push(E.clone().sub(o).normalize())}for(h=1;r>=h;h++)for(l=1;i>=l;l++)e=(i+1)*h+l-1,t=(i+1)*(h-1)+l-1,n=(i+1)*(h-1)+l,o=(i+1)*h+l,c=new THREE.Face3(e,t,o,[s[e].clone(),s[t].clone(),s[o].clone()]),this.faces.push(c),this.faceVertexUvs[0].push([a[e].clone(),a[t].clone(),a[o].clone()]),c=new THREE.Face3(t,n,o,[s[t].clone(),s[n].clone(),s[o].clone()]),this.faces.push(c),this.faceVertexUvs[0].push([a[t].clone(),a[n].clone(),a[o].clone()]);this.computeFaceNormals()},THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.TorusGeometry.prototype.constructor=THREE.TorusGeometry,THREE.TorusKnotGeometry=function(e,t,r,i,n,o,a){function s(e,t,r,i,n){var o=Math.cos(e),a=Math.sin(e);return e*=t/r,t=Math.cos(e),o*=i*(2+t)*.5,a=i*(2+t)*a*.5,i=n*i*Math.sin(e)*.5,new THREE.Vector3(o,a,i)}THREE.Geometry.call(this),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:i,p:n,q:o,heightScale:a},e=e||100,t=t||40,r=r||64,i=i||8,n=n||2,o=o||3,a=a||1;for(var h=Array(r),l=new THREE.Vector3,c=new THREE.Vector3,u=new THREE.Vector3,E=0;r>E;++E){h[E]=Array(i);var p=E/r*2*n*Math.PI,d=s(p,o,n,e,a),p=s(p+.01,o,n,e,a);for(l.subVectors(p,d),c.addVectors(p,d),u.crossVectors(l,c),c.crossVectors(u,l),u.normalize(),c.normalize(),p=0;i>p;++p){var f=p/i*2*Math.PI,m=-t*Math.cos(f),f=t*Math.sin(f),T=new THREE.Vector3;T.x=d.x+m*c.x+f*u.x,T.y=d.y+m*c.y+f*u.y,T.z=d.z+m*c.z+f*u.z,h[E][p]=this.vertices.push(T)-1}}for(E=0;r>E;++E)for(p=0;i>p;++p)n=(E+1)%r,o=(p+1)%i,e=h[E][p],t=h[n][p],n=h[n][o],o=h[E][o],a=new THREE.Vector2(E/r,p/i),l=new THREE.Vector2((E+1)/r,p/i),c=new THREE.Vector2((E+1)/r,(p+1)/i),u=new THREE.Vector2(E/r,(p+1)/i),this.faces.push(new THREE.Face3(e,t,o)),this.faceVertexUvs[0].push([a,l,u]),this.faces.push(new THREE.Face3(t,n,o)),this.faceVertexUvs[0].push([l.clone(),c,u.clone()]);this.computeFaceNormals(),this.computeVertexNormals()},THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.TorusKnotGeometry.prototype.constructor=THREE.TorusKnotGeometry,THREE.TubeGeometry=function(e,t,r,i,n,o){THREE.Geometry.call(this),this.type="TubeGeometry",this.parameters={path:e,segments:t,radius:r,radialSegments:i,closed:n},t=t||64,r=r||1,i=i||8,n=n||!1,o=o||THREE.TubeGeometry.NoTaper;var a,s,h,l,c,u,E,p,d,f,m=[],T=t+1,g=new THREE.Vector3;for(p=new THREE.TubeGeometry.FrenetFrames(e,t,n),d=p.normals,f=p.binormals,this.tangents=p.tangents,this.normals=d,this.binormals=f,p=0;T>p;p++)for(m[p]=[],h=p/(T-1),E=e.getPointAt(h),a=d[p],s=f[p],c=r*o(h),h=0;i>h;h++)l=h/i*2*Math.PI,u=-c*Math.cos(l),l=c*Math.sin(l),g.copy(E),g.x+=u*a.x+l*s.x,g.y+=u*a.y+l*s.y,g.z+=u*a.z+l*s.z,m[p][h]=this.vertices.push(new THREE.Vector3(g.x,g.y,g.z))-1;for(p=0;t>p;p++)for(h=0;i>h;h++)o=n?(p+1)%t:p+1,T=(h+1)%i,e=m[p][h],r=m[o][h],o=m[o][T],T=m[p][T],g=new THREE.Vector2(p/t,h/i),d=new THREE.Vector2((p+1)/t,h/i),f=new THREE.Vector2((p+1)/t,(h+1)/i),a=new THREE.Vector2(p/t,(h+1)/i),this.faces.push(new THREE.Face3(e,r,T)),this.faceVertexUvs[0].push([g,d,a]),this.faces.push(new THREE.Face3(r,o,T)),this.faceVertexUvs[0].push([d.clone(),f,a.clone()]);this.computeFaceNormals(),this.computeVertexNormals()},THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.TubeGeometry.prototype.constructor=THREE.TubeGeometry,THREE.TubeGeometry.NoTaper=function(e){return 1},THREE.TubeGeometry.SinusoidalTaper=function(e){return Math.sin(Math.PI*e)},THREE.TubeGeometry.FrenetFrames=function(e,t,r){var i=new THREE.Vector3,n=[],o=[],a=[],s=new THREE.Vector3,h=new THREE.Matrix4;t+=1;var l,c,u;for(this.tangents=n,this.normals=o,this.binormals=a,l=0;t>l;l++)c=l/(t-1),n[l]=e.getTangentAt(c),n[l].normalize();for(o[0]=new THREE.Vector3,a[0]=new THREE.Vector3,e=Number.MAX_VALUE,l=Math.abs(n[0].x),c=Math.abs(n[0].y),u=Math.abs(n[0].z),e>=l&&(e=l,i.set(1,0,0)),e>=c&&(e=c,i.set(0,1,0)),e>=u&&i.set(0,0,1),s.crossVectors(n[0],i).normalize(),o[0].crossVectors(n[0],s),a[0].crossVectors(n[0],o[0]),l=1;t>l;l++)o[l]=o[l-1].clone(),a[l]=a[l-1].clone(),s.crossVectors(n[l-1],n[l]),1e-4<s.length()&&(s.normalize(),i=Math.acos(THREE.Math.clamp(n[l-1].dot(n[l]),-1,1)),o[l].applyMatrix4(h.makeRotationAxis(s,i))),a[l].crossVectors(n[l],o[l]);if(r)for(i=Math.acos(THREE.Math.clamp(o[0].dot(o[t-1]),-1,1)),i/=t-1,0<n[0].dot(s.crossVectors(o[0],o[t-1]))&&(i=-i),l=1;t>l;l++)o[l].applyMatrix4(h.makeRotationAxis(n[l],i*l)),a[l].crossVectors(n[l],o[l])},THREE.PolyhedronGeometry=function(e,t,r,i){function n(e){var t=e.normalize().clone();t.index=h.vertices.push(t)-1;var r=Math.atan2(e.z,-e.x)/2/Math.PI+.5;return e=Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))/Math.PI+.5,t.uv=new THREE.Vector2(r,1-e),t}function o(e,t,r){var i=new THREE.Face3(e.index,t.index,r.index,[e.clone(),t.clone(),r.clone()]);h.faces.push(i),m.copy(e).add(t).add(r).divideScalar(3),i=Math.atan2(m.z,-m.x),h.faceVertexUvs[0].push([s(e.uv,e,i),s(t.uv,t,i),s(r.uv,r,i)])}function a(e,t){for(var r=Math.pow(2,t),i=n(h.vertices[e.a]),a=n(h.vertices[e.b]),s=n(h.vertices[e.c]),l=[],c=0;r>=c;c++){l[c]=[];for(var u=n(i.clone().lerp(s,c/r)),E=n(a.clone().lerp(s,c/r)),p=r-c,d=0;p>=d;d++)l[c][d]=0==d&&c==r?u:n(u.clone().lerp(E,d/p))}for(c=0;r>c;c++)for(d=0;2*(r-c)-1>d;d++)i=Math.floor(d/2),0==d%2?o(l[c][i+1],l[c+1][i],l[c][i]):o(l[c][i+1],l[c+1][i+1],l[c+1][i])}function s(e,t,r){return 0>r&&1===e.x&&(e=new THREE.Vector2(e.x-1,e.y)),0===t.x&&0===t.z&&(e=new THREE.Vector2(r/2/Math.PI+.5,e.y)),e.clone()}THREE.Geometry.call(this),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:i},r=r||1,i=i||0;for(var h=this,l=0,c=e.length;c>l;l+=3)n(new THREE.Vector3(e[l],e[l+1],e[l+2]));e=this.vertices;for(var u=[],E=l=0,c=t.length;c>l;l+=3,E++){var p=e[t[l]],d=e[t[l+1]],f=e[t[l+2]];u[E]=new THREE.Face3(p.index,d.index,f.index,[p.clone(),d.clone(),f.clone()])}for(var m=new THREE.Vector3,l=0,c=u.length;c>l;l++)a(u[l],i);for(l=0,c=this.faceVertexUvs[0].length;c>l;l++)t=this.faceVertexUvs[0][l],i=t[0].x,e=t[1].x,u=t[2].x,E=Math.max(i,Math.max(e,u)),p=Math.min(i,Math.min(e,u)),E>.9&&.1>p&&(.2>i&&(t[0].x+=1),.2>e&&(t[1].x+=1),.2>u&&(t[2].x+=1));for(l=0,c=this.vertices.length;c>l;l++)this.vertices[l].multiplyScalar(r);this.mergeVertices(),this.computeFaceNormals(),this.boundingSphere=new THREE.Sphere(new THREE.Vector3,r)},THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.PolyhedronGeometry.prototype.constructor=THREE.PolyhedronGeometry,THREE.DodecahedronGeometry=function(e,t){this.parameters={radius:e,detail:t};var r=(1+Math.sqrt(5))/2,i=1/r;THREE.PolyhedronGeometry.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-r,0,-i,r,0,i,-r,0,i,r,-i,-r,0,-i,r,0,i,-r,0,i,r,0,-r,0,-i,r,0,-i,-r,0,i,r,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t)},THREE.DodecahedronGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.DodecahedronGeometry.prototype.constructor=THREE.DodecahedronGeometry,THREE.IcosahedronGeometry=function(e,t){var r=(1+Math.sqrt(5))/2;THREE.PolyhedronGeometry.call(this,[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}},THREE.IcosahedronGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.IcosahedronGeometry.prototype.constructor=THREE.IcosahedronGeometry,THREE.OctahedronGeometry=function(e,t){this.parameters={radius:e,detail:t},THREE.PolyhedronGeometry.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}},THREE.OctahedronGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.OctahedronGeometry.prototype.constructor=THREE.OctahedronGeometry,THREE.TetrahedronGeometry=function(e,t){THREE.PolyhedronGeometry.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}},THREE.TetrahedronGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.TetrahedronGeometry.prototype.constructor=THREE.TetrahedronGeometry,THREE.ParametricGeometry=function(e,t,r){THREE.Geometry.call(this),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:r};var i,n,o,a,s=this.vertices,h=this.faces,l=this.faceVertexUvs[0],c=t+1;for(i=0;r>=i;i++)for(a=i/r,n=0;t>=n;n++)o=n/t,o=e(o,a),s.push(o);var u,E,p,d;for(i=0;r>i;i++)for(n=0;t>n;n++)e=i*c+n,s=i*c+n+1,a=(i+1)*c+n+1,o=(i+1)*c+n,u=new THREE.Vector2(n/t,i/r),E=new THREE.Vector2((n+1)/t,i/r),p=new THREE.Vector2((n+1)/t,(i+1)/r),d=new THREE.Vector2(n/t,(i+1)/r),h.push(new THREE.Face3(e,s,o)),l.push([u,E,d]),h.push(new THREE.Face3(s,a,o)),l.push([E.clone(),p,d.clone()]);this.computeFaceNormals(),this.computeVertexNormals()},THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.ParametricGeometry.prototype.constructor=THREE.ParametricGeometry,THREE.AxisHelper=function(e){e=e||1;var t=new Float32Array([0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e]),r=new Float32Array([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1]);e=new THREE.BufferGeometry,e.addAttribute("position",new THREE.BufferAttribute(t,3)),e.addAttribute("color",new THREE.BufferAttribute(r,3)),t=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors}),THREE.Line.call(this,e,t,THREE.LinePieces)},THREE.AxisHelper.prototype=Object.create(THREE.Line.prototype),THREE.AxisHelper.prototype.constructor=THREE.AxisHelper,THREE.ArrowHelper=function(){var e=new THREE.Geometry;e.vertices.push(new THREE.Vector3(0,0,0),new THREE.Vector3(0,1,0));var t=new THREE.CylinderGeometry(0,.5,1,5,1);return t.applyMatrix((new THREE.Matrix4).makeTranslation(0,-.5,0)),function(r,i,n,o,a,s){THREE.Object3D.call(this),void 0===o&&(o=16776960),void 0===n&&(n=1),void 0===a&&(a=.2*n),void 0===s&&(s=.2*a),this.position.copy(i),this.line=new THREE.Line(e,new THREE.LineBasicMaterial({color:o})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new THREE.Mesh(t,new THREE.MeshBasicMaterial({color:o})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(r),this.setLength(n,a,s)}}(),THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype),THREE.ArrowHelper.prototype.constructor=THREE.ArrowHelper,THREE.ArrowHelper.prototype.setDirection=function(){var e,t=new THREE.Vector3;return function(r){.99999<r.y?this.quaternion.set(0,0,0,1):-.99999>r.y?this.quaternion.set(1,0,0,0):(t.set(r.z,0,-r.x).normalize(),e=Math.acos(r.y),this.quaternion.setFromAxisAngle(t,e))}}(),THREE.ArrowHelper.prototype.setLength=function(e,t,r){void 0===t&&(t=.2*e),void 0===r&&(r=.2*t),this.line.scale.set(1,e-t,1),this.line.updateMatrix(),this.cone.scale.set(r,t,r),this.cone.position.y=e,this.cone.updateMatrix()},THREE.ArrowHelper.prototype.setColor=function(e){this.line.material.color.set(e),this.cone.material.color.set(e)},THREE.BoxHelper=function(e){var t=new THREE.BufferGeometry;t.addAttribute("position",new THREE.BufferAttribute(new Float32Array(72),3)),THREE.Line.call(this,t,new THREE.LineBasicMaterial({color:16776960}),THREE.LinePieces),void 0!==e&&this.update(e)},THREE.BoxHelper.prototype=Object.create(THREE.Line.prototype),THREE.BoxHelper.prototype.constructor=THREE.BoxHelper,THREE.BoxHelper.prototype.update=function(e){var t=e.geometry;null===t.boundingBox&&t.computeBoundingBox();var r=t.boundingBox.min,t=t.boundingBox.max,i=this.geometry.attributes.position.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=r.x,i[4]=t.y,i[5]=t.z,i[6]=r.x,i[7]=t.y,i[8]=t.z,i[9]=r.x,i[10]=r.y,i[11]=t.z,i[12]=r.x,i[13]=r.y,i[14]=t.z,i[15]=t.x,i[16]=r.y,i[17]=t.z,i[18]=t.x,i[19]=r.y,i[20]=t.z,i[21]=t.x,i[22]=t.y,i[23]=t.z,i[24]=t.x,i[25]=t.y,i[26]=r.z,i[27]=r.x,i[28]=t.y,i[29]=r.z,i[30]=r.x,i[31]=t.y,i[32]=r.z,i[33]=r.x,i[34]=r.y,i[35]=r.z,i[36]=r.x,i[37]=r.y,i[38]=r.z,i[39]=t.x,i[40]=r.y,i[41]=r.z,i[42]=t.x,i[43]=r.y,i[44]=r.z,i[45]=t.x,i[46]=t.y,i[47]=r.z,i[48]=t.x,i[49]=t.y,i[50]=t.z,i[51]=t.x,i[52]=t.y,i[53]=r.z,i[54]=r.x,i[55]=t.y,i[56]=t.z,i[57]=r.x,i[58]=t.y,i[59]=r.z,i[60]=r.x,i[61]=r.y,i[62]=t.z,i[63]=r.x,i[64]=r.y,i[65]=r.z,i[66]=t.x,i[67]=r.y,i[68]=t.z,i[69]=t.x,i[70]=r.y,i[71]=r.z,this.geometry.attributes.position.needsUpdate=!0,this.geometry.computeBoundingSphere(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1},THREE.BoundingBoxHelper=function(e,t){var r=void 0!==t?t:8947848;this.object=e,this.box=new THREE.Box3,THREE.Mesh.call(this,new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:r,wireframe:!0}))},THREE.BoundingBoxHelper.prototype=Object.create(THREE.Mesh.prototype),THREE.BoundingBoxHelper.prototype.constructor=THREE.BoundingBoxHelper,THREE.BoundingBoxHelper.prototype.update=function(){this.box.setFromObject(this.object),this.box.size(this.scale),this.box.center(this.position)},THREE.CameraHelper=function(e){function t(e,t,i){r(e,i),r(t,i)}function r(e,t){i.vertices.push(new THREE.Vector3),i.colors.push(new THREE.Color(t)),void 0===o[e]&&(o[e]=[]),o[e].push(i.vertices.length-1)}var i=new THREE.Geometry,n=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors}),o={};t("n1","n2",16755200),t("n2","n4",16755200),t("n4","n3",16755200),t("n3","n1",16755200),t("f1","f2",16755200),t("f2","f4",16755200),t("f4","f3",16755200),t("f3","f1",16755200),t("n1","f1",16755200),t("n2","f2",16755200),t("n3","f3",16755200),t("n4","f4",16755200),t("p","n1",16711680),t("p","n2",16711680),t("p","n3",16711680),t("p","n4",16711680),t("u1","u2",43775),t("u2","u3",43775),t("u3","u1",43775),t("c","t",16777215),t("p","c",3355443),t("cn1","cn2",3355443),t("cn3","cn4",3355443),t("cf1","cf2",3355443),t("cf3","cf4",3355443),THREE.Line.call(this,i,n,THREE.LinePieces),this.camera=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update()},THREE.CameraHelper.prototype=Object.create(THREE.Line.prototype),THREE.CameraHelper.prototype.constructor=THREE.CameraHelper,THREE.CameraHelper.prototype.update=function(){var e,t,r=new THREE.Vector3,i=new THREE.Camera,n=function(n,o,a,s){if(r.set(o,a,s).unproject(i),n=t[n],void 0!==n)for(o=0,a=n.length;a>o;o++)e.vertices[n[o]].copy(r)};return function(){e=this.geometry,t=this.pointMap,i.projectionMatrix.copy(this.camera.projectionMatrix),n("c",0,0,-1),n("t",0,0,1),n("n1",-1,-1,-1),n("n2",1,-1,-1),n("n3",-1,1,-1),n("n4",1,1,-1),n("f1",-1,-1,1),n("f2",1,-1,1),n("f3",-1,1,1),n("f4",1,1,1),n("u1",.7,1.1,-1),n("u2",-.7,1.1,-1),n("u3",0,2,-1),n("cf1",-1,0,1),n("cf2",1,0,1),n("cf3",0,-1,1),n("cf4",0,1,1),n("cn1",-1,0,-1),n("cn2",1,0,-1),n("cn3",0,-1,-1),n("cn4",0,1,-1),e.verticesNeedUpdate=!0}}(),THREE.DirectionalLightHelper=function(e,t){THREE.Object3D.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,t=t||1;var r=new THREE.Geometry;r.vertices.push(new THREE.Vector3(-t,t,0),new THREE.Vector3(t,t,0),new THREE.Vector3(t,-t,0),new THREE.Vector3(-t,-t,0),new THREE.Vector3(-t,t,0));var i=new THREE.LineBasicMaterial({fog:!1});i.color.copy(this.light.color).multiplyScalar(this.light.intensity),this.lightPlane=new THREE.Line(r,i),this.add(this.lightPlane),r=new THREE.Geometry,r.vertices.push(new THREE.Vector3,new THREE.Vector3),i=new THREE.LineBasicMaterial({fog:!1}),i.color.copy(this.light.color).multiplyScalar(this.light.intensity),this.targetLine=new THREE.Line(r,i),this.add(this.targetLine),this.update()},THREE.DirectionalLightHelper.prototype=Object.create(THREE.Object3D.prototype),THREE.DirectionalLightHelper.prototype.constructor=THREE.DirectionalLightHelper,THREE.DirectionalLightHelper.prototype.dispose=function(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()},THREE.DirectionalLightHelper.prototype.update=function(){var e=new THREE.Vector3,t=new THREE.Vector3,r=new THREE.Vector3;return function(){e.setFromMatrixPosition(this.light.matrixWorld),t.setFromMatrixPosition(this.light.target.matrixWorld),r.subVectors(t,e),this.lightPlane.lookAt(r),this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity),this.targetLine.geometry.vertices[1].copy(r),this.targetLine.geometry.verticesNeedUpdate=!0,this.targetLine.material.color.copy(this.lightPlane.material.color)}}(),THREE.EdgesHelper=function(e,t,r){t=void 0!==t?t:16777215,r=Math.cos(THREE.Math.degToRad(void 0!==r?r:1));var i,n=[0,0],o={},a=function(e,t){return e-t},s=["a","b","c"],h=new THREE.BufferGeometry;e.geometry instanceof THREE.BufferGeometry?(i=new THREE.Geometry,i.fromBufferGeometry(e.geometry)):i=e.geometry.clone(),i.mergeVertices(),i.computeFaceNormals();var l=i.vertices;i=i.faces;for(var c=0,u=0,E=i.length;E>u;u++)for(var p=i[u],d=0;3>d;d++){n[0]=p[s[d]],n[1]=p[s[(d+1)%3]],n.sort(a);var f=n.toString();void 0===o[f]?(o[f]={vert1:n[0],vert2:n[1],face1:u,face2:void 0},c++):o[f].face2=u}n=new Float32Array(6*c),a=0;for(f in o)s=o[f],(void 0===s.face2||i[s.face1].normal.dot(i[s.face2].normal)<=r)&&(c=l[s.vert1],n[a++]=c.x,n[a++]=c.y,n[a++]=c.z,c=l[s.vert2],n[a++]=c.x,n[a++]=c.y,n[a++]=c.z);h.addAttribute("position",new THREE.BufferAttribute(n,3)),THREE.Line.call(this,h,new THREE.LineBasicMaterial({color:t}),THREE.LinePieces),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1},THREE.EdgesHelper.prototype=Object.create(THREE.Line.prototype),THREE.EdgesHelper.prototype.constructor=THREE.EdgesHelper,THREE.FaceNormalsHelper=function(e,t,r,i){this.object=e,this.size=void 0!==t?t:1,e=void 0!==r?r:16776960,i=void 0!==i?i:1,t=new THREE.Geometry,r=0;for(var n=this.object.geometry.faces.length;n>r;r++)t.vertices.push(new THREE.Vector3,new THREE.Vector3);THREE.Line.call(this,t,new THREE.LineBasicMaterial({color:e,linewidth:i}),THREE.LinePieces),this.matrixAutoUpdate=!1,this.normalMatrix=new THREE.Matrix3,this.update()},THREE.FaceNormalsHelper.prototype=Object.create(THREE.Line.prototype),THREE.FaceNormalsHelper.prototype.constructor=THREE.FaceNormalsHelper,THREE.FaceNormalsHelper.prototype.update=function(){var e=this.geometry.vertices,t=this.object,r=t.geometry.vertices,i=t.geometry.faces,n=t.matrixWorld;t.updateMatrixWorld(!0),this.normalMatrix.getNormalMatrix(n);for(var o=t=0,a=i.length;a>t;t++,o+=2){var s=i[t];e[o].copy(r[s.a]).add(r[s.b]).add(r[s.c]).divideScalar(3).applyMatrix4(n),e[o+1].copy(s.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size).add(e[o])}return this.geometry.verticesNeedUpdate=!0,this},THREE.GridHelper=function(e,t){var r=new THREE.Geometry,i=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});this.color1=new THREE.Color(4473924),this.color2=new THREE.Color(8947848);for(var n=-e;e>=n;n+=t){r.vertices.push(new THREE.Vector3(-e,0,n),new THREE.Vector3(e,0,n),new THREE.Vector3(n,0,-e),new THREE.Vector3(n,0,e));var o=0===n?this.color1:this.color2;r.colors.push(o,o,o,o)}THREE.Line.call(this,r,i,THREE.LinePieces)},THREE.GridHelper.prototype=Object.create(THREE.Line.prototype),THREE.GridHelper.prototype.constructor=THREE.GridHelper,THREE.GridHelper.prototype.setColors=function(e,t){this.color1.set(e),this.color2.set(t),this.geometry.colorsNeedUpdate=!0},THREE.HemisphereLightHelper=function(e,t){THREE.Object3D.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.colors=[new THREE.Color,new THREE.Color];var r=new THREE.SphereGeometry(t,4,2);r.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));for(var i=0;8>i;i++)r.faces[i].color=this.colors[4>i?0:1];i=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors,wireframe:!0}),this.lightSphere=new THREE.Mesh(r,i),this.add(this.lightSphere),this.update()},THREE.HemisphereLightHelper.prototype=Object.create(THREE.Object3D.prototype),THREE.HemisphereLightHelper.prototype.constructor=THREE.HemisphereLightHelper,THREE.HemisphereLightHelper.prototype.dispose=function(){this.lightSphere.geometry.dispose(),this.lightSphere.material.dispose()},THREE.HemisphereLightHelper.prototype.update=function(){var e=new THREE.Vector3;return function(){this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity),this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity),this.lightSphere.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate()),this.lightSphere.geometry.colorsNeedUpdate=!0}}(),THREE.PointLightHelper=function(e,t){this.light=e,this.light.updateMatrixWorld();var r=new THREE.SphereGeometry(t,4,2),i=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});i.color.copy(this.light.color).multiplyScalar(this.light.intensity),THREE.Mesh.call(this,r,i),this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1},THREE.PointLightHelper.prototype=Object.create(THREE.Mesh.prototype),THREE.PointLightHelper.prototype.constructor=THREE.PointLightHelper,THREE.PointLightHelper.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose()},THREE.PointLightHelper.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)},THREE.SkeletonHelper=function(e){this.bones=this.getBoneList(e);for(var t=new THREE.Geometry,r=0;r<this.bones.length;r++)this.bones[r].parent instanceof THREE.Bone&&(t.vertices.push(new THREE.Vector3),t.vertices.push(new THREE.Vector3),t.colors.push(new THREE.Color(0,0,1)),t.colors.push(new THREE.Color(0,1,0)));r=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors,depthTest:!1,depthWrite:!1,transparent:!0}),THREE.Line.call(this,t,r,THREE.LinePieces),this.root=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.update()},THREE.SkeletonHelper.prototype=Object.create(THREE.Line.prototype),THREE.SkeletonHelper.prototype.constructor=THREE.SkeletonHelper,THREE.SkeletonHelper.prototype.getBoneList=function(e){var t=[];e instanceof THREE.Bone&&t.push(e);for(var r=0;r<e.children.length;r++)t.push.apply(t,this.getBoneList(e.children[r]));return t},THREE.SkeletonHelper.prototype.update=function(){for(var e=this.geometry,t=(new THREE.Matrix4).getInverse(this.root.matrixWorld),r=new THREE.Matrix4,i=0,n=0;n<this.bones.length;n++){var o=this.bones[n];o.parent instanceof THREE.Bone&&(r.multiplyMatrices(t,o.matrixWorld),e.vertices[i].setFromMatrixPosition(r),r.multiplyMatrices(t,o.parent.matrixWorld),e.vertices[i+1].setFromMatrixPosition(r),i+=2)}e.verticesNeedUpdate=!0,e.computeBoundingSphere()},THREE.SpotLightHelper=function(e){THREE.Object3D.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,e=new THREE.CylinderGeometry(0,1,1,8,1,!0),e.applyMatrix((new THREE.Matrix4).makeTranslation(0,-.5,0)),e.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));var t=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});this.cone=new THREE.Mesh(e,t),this.add(this.cone),this.update()},THREE.SpotLightHelper.prototype=Object.create(THREE.Object3D.prototype),THREE.SpotLightHelper.prototype.constructor=THREE.SpotLightHelper,THREE.SpotLightHelper.prototype.dispose=function(){this.cone.geometry.dispose(),this.cone.material.dispose()},THREE.SpotLightHelper.prototype.update=function(){var e=new THREE.Vector3,t=new THREE.Vector3;return function(){var r=this.light.distance?this.light.distance:1e4,i=r*Math.tan(this.light.angle);this.cone.scale.set(i,i,r),e.setFromMatrixPosition(this.light.matrixWorld),t.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(t.sub(e)),this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}(),THREE.VertexNormalsHelper=function(e,t,r,i){this.object=e,this.size=void 0!==t?t:1,t=void 0!==r?r:16711680,i=void 0!==i?i:1,r=new THREE.Geometry,e=e.geometry.faces;for(var n=0,o=e.length;o>n;n++)for(var a=0,s=e[n].vertexNormals.length;s>a;a++)r.vertices.push(new THREE.Vector3,new THREE.Vector3);THREE.Line.call(this,r,new THREE.LineBasicMaterial({color:t,linewidth:i}),THREE.LinePieces),this.matrixAutoUpdate=!1,this.normalMatrix=new THREE.Matrix3,this.update()},THREE.VertexNormalsHelper.prototype=Object.create(THREE.Line.prototype),THREE.VertexNormalsHelper.prototype.constructor=THREE.VertexNormalsHelper,THREE.VertexNormalsHelper.prototype.update=function(e){var t=new THREE.Vector3;return function(e){e=["a","b","c","d"],this.object.updateMatrixWorld(!0),this.normalMatrix.getNormalMatrix(this.object.matrixWorld);for(var r=this.geometry.vertices,i=this.object.geometry.vertices,n=this.object.geometry.faces,o=this.object.matrixWorld,a=0,s=0,h=n.length;h>s;s++)for(var l=n[s],c=0,u=l.vertexNormals.length;u>c;c++){var E=l.vertexNormals[c];r[a].copy(i[l[e[c]]]).applyMatrix4(o),t.copy(E).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size),t.add(r[a]),a+=1,r[a].copy(t),a+=1}return this.geometry.verticesNeedUpdate=!0,this}}(),THREE.VertexTangentsHelper=function(e,t,r,i){this.object=e,this.size=void 0!==t?t:1,t=void 0!==r?r:255,i=void 0!==i?i:1,r=new THREE.Geometry,e=e.geometry.faces;for(var n=0,o=e.length;o>n;n++)for(var a=0,s=e[n].vertexTangents.length;s>a;a++)r.vertices.push(new THREE.Vector3),r.vertices.push(new THREE.Vector3);THREE.Line.call(this,r,new THREE.LineBasicMaterial({color:t,linewidth:i}),THREE.LinePieces),this.matrixAutoUpdate=!1,this.update()},THREE.VertexTangentsHelper.prototype=Object.create(THREE.Line.prototype),THREE.VertexTangentsHelper.prototype.constructor=THREE.VertexTangentsHelper,THREE.VertexTangentsHelper.prototype.update=function(e){var t=new THREE.Vector3;return function(e){e=["a","b","c","d"],this.object.updateMatrixWorld(!0);for(var r=this.geometry.vertices,i=this.object.geometry.vertices,n=this.object.geometry.faces,o=this.object.matrixWorld,a=0,s=0,h=n.length;h>s;s++)for(var l=n[s],c=0,u=l.vertexTangents.length;u>c;c++){var E=l.vertexTangents[c];r[a].copy(i[l[e[c]]]).applyMatrix4(o),t.copy(E).transformDirection(o).multiplyScalar(this.size),t.add(r[a]),a+=1,r[a].copy(t),a+=1}return this.geometry.verticesNeedUpdate=!0,this}}(),THREE.WireframeHelper=function(e,t){var r=void 0!==t?t:16777215,i=[0,0],n={},o=function(e,t){return e-t},a=["a","b","c"],s=new THREE.BufferGeometry;if(e.geometry instanceof THREE.Geometry){for(var h=e.geometry.vertices,l=e.geometry.faces,c=0,u=new Uint32Array(6*l.length),E=0,p=l.length;p>E;E++)for(var d=l[E],f=0;3>f;f++){i[0]=d[a[f]],i[1]=d[a[(f+1)%3]],i.sort(o);var m=i.toString();void 0===n[m]&&(u[2*c]=i[0],u[2*c+1]=i[1],n[m]=!0,c++)}for(i=new Float32Array(6*c),E=0,p=c;p>E;E++)for(f=0;2>f;f++)c=h[u[2*E+f]],a=6*E+3*f,i[a+0]=c.x,i[a+1]=c.y,i[a+2]=c.z;s.addAttribute("position",new THREE.BufferAttribute(i,3))}else if(e.geometry instanceof THREE.BufferGeometry){if(void 0!==e.geometry.attributes.index){h=e.geometry.attributes.position.array,p=e.geometry.attributes.index.array,l=e.geometry.drawcalls,c=0,0===l.length&&(l=[{count:p.length,index:0,start:0}]);for(var u=new Uint32Array(2*p.length),d=0,T=l.length;T>d;++d)for(var f=l[d].start,m=l[d].count,a=l[d].index,E=f,g=f+m;g>E;E+=3)for(f=0;3>f;f++)i[0]=a+p[E+f],i[1]=a+p[E+(f+1)%3],i.sort(o),m=i.toString(),void 0===n[m]&&(u[2*c]=i[0],u[2*c+1]=i[1],n[m]=!0,c++);for(i=new Float32Array(6*c),E=0,p=c;p>E;E++)for(f=0;2>f;f++)a=6*E+3*f,c=3*u[2*E+f],i[a+0]=h[c],i[a+1]=h[c+1],i[a+2]=h[c+2]}else for(h=e.geometry.attributes.position.array,c=h.length/3,u=c/3,i=new Float32Array(6*c),E=0,p=u;p>E;E++)for(f=0;3>f;f++)a=18*E+6*f,u=9*E+3*f,i[a+0]=h[u],i[a+1]=h[u+1],i[a+2]=h[u+2],c=9*E+(f+1)%3*3,i[a+3]=h[c],i[a+4]=h[c+1],i[a+5]=h[c+2];s.addAttribute("position",new THREE.BufferAttribute(i,3))}THREE.Line.call(this,s,new THREE.LineBasicMaterial({color:r}),THREE.LinePieces),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1},THREE.WireframeHelper.prototype=Object.create(THREE.Line.prototype),THREE.WireframeHelper.prototype.constructor=THREE.WireframeHelper,THREE.ImmediateRenderObject=function(){THREE.Object3D.call(this),this.render=function(e){}},THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype),THREE.ImmediateRenderObject.prototype.constructor=THREE.ImmediateRenderObject,THREE.MorphBlendMesh=function(e,t){THREE.Mesh.call(this,e,t),this.animationsMap={},this.animationsList=[];var r=this.geometry.morphTargets.length;this.createAnimation("__default",0,r-1,r/1),this.setAnimationWeight("__default",1)},THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype),THREE.MorphBlendMesh.prototype.constructor=THREE.MorphBlendMesh,THREE.MorphBlendMesh.prototype.createAnimation=function(e,t,r,i){t={startFrame:t,endFrame:r,length:r-t+1,fps:i,duration:(r-t)/i,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1},this.animationsMap[e]=t,this.animationsList.push(t)},THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(e){for(var t,r=/([a-z]+)_?(\d+)/,i={},n=this.geometry,o=0,a=n.morphTargets.length;a>o;o++){var s=n.morphTargets[o].name.match(r);if(s&&1<s.length){var h=s[1];i[h]||(i[h]={start:1/0,end:-(1/0)}),s=i[h],o<s.start&&(s.start=o),o>s.end&&(s.end=o),t||(t=h)}}for(h in i)s=i[h],this.createAnimation(h,s.start,s.end,e);this.firstAnimation=t},THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(e){(e=this.animationsMap[e])&&(e.direction=1,e.directionBackwards=!1)},THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(e){(e=this.animationsMap[e])&&(e.direction=-1,e.directionBackwards=!0)},THREE.MorphBlendMesh.prototype.setAnimationFPS=function(e,t){var r=this.animationsMap[e];r&&(r.fps=t,r.duration=(r.end-r.start)/r.fps)},THREE.MorphBlendMesh.prototype.setAnimationDuration=function(e,t){var r=this.animationsMap[e];r&&(r.duration=t,r.fps=(r.end-r.start)/r.duration)},THREE.MorphBlendMesh.prototype.setAnimationWeight=function(e,t){var r=this.animationsMap[e];r&&(r.weight=t)},THREE.MorphBlendMesh.prototype.setAnimationTime=function(e,t){var r=this.animationsMap[e];r&&(r.time=t)},THREE.MorphBlendMesh.prototype.getAnimationTime=function(e){var t=0;return(e=this.animationsMap[e])&&(t=e.time),t},THREE.MorphBlendMesh.prototype.getAnimationDuration=function(e){var t=-1;return(e=this.animationsMap[e])&&(t=e.duration),t},THREE.MorphBlendMesh.prototype.playAnimation=function(e){var t=this.animationsMap[e];t?(t.time=0,t.active=!0):THREE.warn("THREE.MorphBlendMesh: animation["+e+"] undefined in .playAnimation()")},THREE.MorphBlendMesh.prototype.stopAnimation=function(e){(e=this.animationsMap[e])&&(e.active=!1)},THREE.MorphBlendMesh.prototype.update=function(e){for(var t=0,r=this.animationsList.length;r>t;t++){var i=this.animationsList[t];
if(i.active){var n=i.duration/i.length;i.time+=i.direction*e,i.mirroredLoop?(i.time>i.duration||0>i.time)&&(i.direction*=-1,i.time>i.duration&&(i.time=i.duration,i.directionBackwards=!0),0>i.time&&(i.time=0,i.directionBackwards=!1)):(i.time%=i.duration,0>i.time&&(i.time+=i.duration));var o=i.startFrame+THREE.Math.clamp(Math.floor(i.time/n),0,i.length-1),a=i.weight;o!==i.currentFrame&&(this.morphTargetInfluences[i.lastFrame]=0,this.morphTargetInfluences[i.currentFrame]=1*a,this.morphTargetInfluences[o]=0,i.lastFrame=i.currentFrame,i.currentFrame=o),n=i.time%n/n,i.directionBackwards&&(n=1-n),this.morphTargetInfluences[i.currentFrame]=n*a,this.morphTargetInfluences[i.lastFrame]=(1-n)*a}}},THREE.SpriteCanvasMaterial=function(e){THREE.Material.call(this),this.type="SpriteCanvasMaterial",this.color=new THREE.Color(16777215),this.program=function(e,t){},this.setValues(e)},THREE.SpriteCanvasMaterial.prototype=Object.create(THREE.Material.prototype),THREE.SpriteCanvasMaterial.prototype.constructor=THREE.SpriteCanvasMaterial,THREE.SpriteCanvasMaterial.prototype.clone=function(){var e=new THREE.SpriteCanvasMaterial;return THREE.Material.prototype.clone.call(this,e),e.color.copy(this.color),e.program=this.program,e},THREE.CanvasRenderer=function(e){function t(){Re.setRGB(0,0,0),ye.setRGB(0,0,0),ve.setRGB(0,0,0);for(var e=0,t=b.length;t>e;e++){var r=b[e],i=r.color;r instanceof THREE.AmbientLight?Re.add(i):r instanceof THREE.DirectionalLight?ye.add(i):r instanceof THREE.PointLight&&ve.add(i)}}function r(e,t,r){for(var i=0,n=b.length;n>i;i++){var o=b[i];if(de.copy(o.color),o instanceof THREE.DirectionalLight){var a=He.setFromMatrixPosition(o.matrixWorld).normalize(),s=t.dot(a);if(0>=s)continue;s*=o.intensity,r.add(de.multiplyScalar(s))}else if(o instanceof THREE.PointLight){var a=He.setFromMatrixPosition(o.matrixWorld),s=t.dot(He.subVectors(a,e).normalize());if(0>=s)continue;if(s*=0==o.distance?1:1-Math.min(e.distanceTo(a)/o.distance,1),0==s)continue;s*=o.intensity,r.add(de.multiplyScalar(s))}}}function i(e,t,r){p(r.opacity),d(r.blending);var i=t.scale.x*q,n=t.scale.y*Y,o=.5*Math.sqrt(i*i+n*n);if(ge.min.set(e.x-o,e.y-o),ge.max.set(e.x+o,e.y+o),r instanceof THREE.SpriteMaterial){var a=r.map;if(null!==a&&void 0!==a.image){a.hasEventListener("update",l)===!1&&(a.image.width>0&&c(a),a.addEventListener("update",l));var s=fe[a.id];R(void 0!==s?s:"rgba( 0, 0, 0, 1 )");var h=a.image,u=h.width*a.offset.x,E=h.height*a.offset.y,f=h.width*a.repeat.x,m=h.height*a.repeat.y,T=i/f,y=n/m;ee.save(),ee.translate(e.x,e.y),0!==r.rotation&&ee.rotate(r.rotation),ee.translate(-i/2,-n/2),ee.scale(T,y),ee.translate(-u,-E),ee.fillRect(u,E,f,m),ee.restore()}else R(r.color.getStyle()),ee.save(),ee.translate(e.x,e.y),0!==r.rotation&&ee.rotate(r.rotation),ee.scale(i,-n),ee.fillRect(-.5,-.5,1,1),ee.restore()}else r instanceof THREE.SpriteCanvasMaterial&&(g(r.color.getStyle()),R(r.color.getStyle()),ee.save(),ee.translate(e.x,e.y),0!==r.rotation&&ee.rotate(r.rotation),ee.scale(i,n),r.program(ee),ee.restore())}function n(e,t,r,i){if(p(i.opacity),d(i.blending),ee.beginPath(),ee.moveTo(e.positionScreen.x,e.positionScreen.y),ee.lineTo(t.positionScreen.x,t.positionScreen.y),i instanceof THREE.LineBasicMaterial){if(f(i.linewidth),m(i.linecap),T(i.linejoin),i.vertexColors!==THREE.VertexColors)g(i.color.getStyle());else{var n=r.vertexColors[0].getStyle(),o=r.vertexColors[1].getStyle();if(n===o)g(n);else{try{var a=ee.createLinearGradient(e.positionScreen.x,e.positionScreen.y,t.positionScreen.x,t.positionScreen.y);a.addColorStop(0,n),a.addColorStop(1,o)}catch(s){a=n}g(a)}}ee.stroke(),ge.expandByScalar(2*i.linewidth)}else i instanceof THREE.LineDashedMaterial&&(f(i.linewidth),m(i.linecap),T(i.linejoin),g(i.color.getStyle()),y([i.dashSize,i.gapSize]),ee.stroke(),ge.expandByScalar(2*i.linewidth),y([]))}function o(e,t,i,n,o,l,c,E){if(G.info.render.vertices+=3,G.info.render.faces++,p(E.opacity),d(E.blending),C=e.positionScreen.x,A=e.positionScreen.y,L=t.positionScreen.x,P=t.positionScreen.y,F=i.positionScreen.x,B=i.positionScreen.y,a(C,A,L,P,F,B),(E instanceof THREE.MeshLambertMaterial||E instanceof THREE.MeshPhongMaterial)&&null===E.map)Ee.copy(E.color),pe.copy(E.emissive),E.vertexColors===THREE.FaceColors&&Ee.multiply(c.color),ue.copy(Re),xe.copy(e.positionWorld).add(t.positionWorld).add(i.positionWorld).divideScalar(3),r(xe,c.normalModel,ue),ue.multiply(Ee).add(pe),E.wireframe===!0?s(ue,E.wireframeLinewidth,E.wireframeLinecap,E.wireframeLinejoin):h(ue);else if(E instanceof THREE.MeshBasicMaterial||E instanceof THREE.MeshLambertMaterial||E instanceof THREE.MeshPhongMaterial)if(null!==E.map){var f=E.map.mapping;f===THREE.UVMapping&&(U=c.uvs,u(C,A,L,P,F,B,U[n].x,U[n].y,U[o].x,U[o].y,U[l].x,U[l].y,E.map))}else null!==E.envMap?E.envMap.mapping===THREE.SphericalReflectionMapping&&(be.copy(c.vertexNormalsModel[n]).applyMatrix3(we),D=.5*be.x+.5,V=.5*be.y+.5,be.copy(c.vertexNormalsModel[o]).applyMatrix3(we),z=.5*be.x+.5,k=.5*be.y+.5,be.copy(c.vertexNormalsModel[l]).applyMatrix3(we),N=.5*be.x+.5,O=.5*be.y+.5,u(C,A,L,P,F,B,D,V,z,k,N,O,E.envMap)):(ue.copy(E.color),E.vertexColors===THREE.FaceColors&&ue.multiply(c.color),E.wireframe===!0?s(ue,E.wireframeLinewidth,E.wireframeLinecap,E.wireframeLinejoin):h(ue));else E instanceof THREE.MeshDepthMaterial?(ue.r=ue.g=ue.b=1-v(e.positionScreen.z*e.positionScreen.w,w.near,w.far),E.wireframe===!0?s(ue,E.wireframeLinewidth,E.wireframeLinecap,E.wireframeLinejoin):h(ue)):E instanceof THREE.MeshNormalMaterial?(be.copy(c.normalModel).applyMatrix3(we),ue.setRGB(be.x,be.y,be.z).multiplyScalar(.5).addScalar(.5),E.wireframe===!0?s(ue,E.wireframeLinewidth,E.wireframeLinecap,E.wireframeLinejoin):h(ue)):(ue.setRGB(1,1,1),E.wireframe===!0?s(ue,E.wireframeLinewidth,E.wireframeLinecap,E.wireframeLinejoin):h(ue))}function a(e,t,r,i,n,o){ee.beginPath(),ee.moveTo(e,t),ee.lineTo(r,i),ee.lineTo(n,o),ee.closePath()}function s(e,t,r,i){f(t),m(r),T(i),g(e.getStyle()),ee.stroke(),ge.expandByScalar(2*t)}function h(e){R(e.getStyle()),ee.fill()}function l(e){c(e.target)}function c(e){if(!(e instanceof THREE.CompressedTexture)){var t=e.wrapS===THREE.RepeatWrapping,r=e.wrapT===THREE.RepeatWrapping,i=e.image,n=document.createElement("canvas");n.width=i.width,n.height=i.height;var o=n.getContext("2d");o.setTransform(1,0,0,-1,0,i.height),o.drawImage(i,0,0),fe[e.id]=ee.createPattern(n,t===!0&&r===!0?"repeat":t===!0&&r===!1?"repeat-x":t===!1&&r===!0?"repeat-y":"no-repeat")}}function u(e,t,r,i,n,o,a,s,h,u,E,p,d){if(!(d instanceof THREE.DataTexture)){d.hasEventListener("update",l)===!1&&(void 0!==d.image&&d.image.width>0&&c(d),d.addEventListener("update",l));var f=fe[d.id];if(void 0===f)return R("rgba(0,0,0,1)"),void ee.fill();R(f);var m,T,g,y,v,H,x,b,w=d.offset.x/d.repeat.x,_=d.offset.y/d.repeat.y,M=d.image.width*d.repeat.x,S=d.image.height*d.repeat.y;a=(a+w)*M,s=(s+_)*S,h=(h+w)*M,u=(u+_)*S,E=(E+w)*M,p=(p+_)*S,r-=e,i-=t,n-=e,o-=t,h-=a,u-=s,E-=a,p-=s,x=h*p-E*u,0!==x&&(b=1/x,m=(p*r-u*n)*b,T=(p*i-u*o)*b,g=(h*n-E*r)*b,y=(h*o-E*i)*b,v=e-m*a-g*s,H=t-T*a-y*s,ee.save(),ee.transform(m,T,g,y,v,H),ee.fill(),ee.restore())}}function E(e,t,r){var i,n=t.x-e.x,o=t.y-e.y,a=n*n+o*o;0!==a&&(i=r/Math.sqrt(a),n*=i,o*=i,t.x+=n,t.y+=o,e.x-=n,e.y-=o)}function p(e){ie!==e&&(ee.globalAlpha=e,ie=e)}function d(e){ne!==e&&(e===THREE.NormalBlending?ee.globalCompositeOperation="source-over":e===THREE.AdditiveBlending?ee.globalCompositeOperation="lighter":e===THREE.SubtractiveBlending&&(ee.globalCompositeOperation="darker"),ne=e)}function f(e){se!==e&&(ee.lineWidth=e,se=e)}function m(e){he!==e&&(ee.lineCap=e,he=e)}function T(e){le!==e&&(ee.lineJoin=e,le=e)}function g(e){oe!==e&&(ee.strokeStyle=e,oe=e)}function R(e){ae!==e&&(ee.fillStyle=e,ae=e)}function y(e){ce.length!==e.length&&(ee.setLineDash(e),ce=e)}console.log("THREE.CanvasRenderer",THREE.REVISION);var v=THREE.Math.smoothstep;e=e||{};var H,x,b,w,_,M,S,C,A,L,P,F,B,U,D,V,z,k,N,O,G=this,I=new THREE.Projector,W=void 0!==e.canvas?e.canvas:document.createElement("canvas"),j=W.width,X=W.height,q=Math.floor(j/2),Y=Math.floor(X/2),K=0,Q=0,Z=j,J=X,$=1,ee=W.getContext("2d",{alpha:e.alpha===!0}),te=new THREE.Color(0),re=e.alpha===!0?0:1,ie=1,ne=0,oe=null,ae=null,se=null,he=null,le=null,ce=[],ue=(new THREE.RenderableVertex,new THREE.RenderableVertex,new THREE.Color),Ee=(new THREE.Color,new THREE.Color,new THREE.Color,new THREE.Color,new THREE.Color),pe=new THREE.Color,de=new THREE.Color,fe={},me=new THREE.Box2,Te=new THREE.Box2,ge=new THREE.Box2,Re=new THREE.Color,ye=new THREE.Color,ve=new THREE.Color,He=new THREE.Vector3,xe=new THREE.Vector3,be=new THREE.Vector3,we=new THREE.Matrix3;void 0===ee.setLineDash&&(ee.setLineDash=function(){}),this.domElement=W,this.autoClear=!0,this.sortObjects=!0,this.sortElements=!0,this.info={render:{vertices:0,faces:0}},this.supportsVertexTextures=function(){},this.setFaceCulling=function(){},this.getPixelRatio=function(){return $},this.setPixelRatio=function(e){$=e},this.setSize=function(e,t,r){j=e*$,X=t*$,W.width=j,W.height=X,q=Math.floor(j/2),Y=Math.floor(X/2),r!==!1&&(W.style.width=e+"px",W.style.height=t+"px"),me.min.set(-q,-Y),me.max.set(q,Y),Te.min.set(-q,-Y),Te.max.set(q,Y),ie=1,ne=0,oe=null,ae=null,se=null,he=null,le=null,this.setViewport(0,0,e,t)},this.setViewport=function(e,t,r,i){K=e*$,Q=t*$,Z=r*$,J=i*$},this.setScissor=function(){},this.enableScissorTest=function(){},this.setClearColor=function(e,t){te.set(e),re=void 0!==t?t:1,Te.min.set(-q,-Y),Te.max.set(q,Y)},this.setClearColorHex=function(e,t){console.warn("THREE.CanvasRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead."),this.setClearColor(e,t)},this.getClearColor=function(){return te},this.getClearAlpha=function(){return re},this.getMaxAnisotropy=function(){return 0},this.clear=function(){Te.empty()===!1&&(Te.intersect(me),Te.expandByScalar(2),Te.min.x=Te.min.x+q,Te.min.y=-Te.min.y+Y,Te.max.x=Te.max.x+q,Te.max.y=-Te.max.y+Y,1>re&&ee.clearRect(0|Te.min.x,0|Te.max.y,Te.max.x-Te.min.x|0,Te.min.y-Te.max.y|0),re>0&&(d(THREE.NormalBlending),p(1),R("rgba("+Math.floor(255*te.r)+","+Math.floor(255*te.g)+","+Math.floor(255*te.b)+","+re+")"),ee.fillRect(0|Te.min.x,0|Te.max.y,Te.max.x-Te.min.x|0,Te.min.y-Te.max.y|0)),Te.makeEmpty())},this.clearColor=function(){},this.clearDepth=function(){},this.clearStencil=function(){},this.render=function(e,r){if(r instanceof THREE.Camera==!1)return void console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");this.autoClear===!0&&this.clear(),G.info.render.vertices=0,G.info.render.faces=0,ee.setTransform(Z/j,0,0,-J/X,K,X-Q),ee.translate(q,Y),H=I.projectScene(e,r,this.sortObjects,this.sortElements),x=H.elements,b=H.lights,w=r,we.getNormalMatrix(r.matrixWorldInverse),t();for(var a=0,s=x.length;s>a;a++){var h=x[a],l=h.material;if(void 0!==l&&0!==l.opacity){if(ge.makeEmpty(),h instanceof THREE.RenderableSprite)_=h,_.x*=q,_.y*=Y,i(_,h,l);else if(h instanceof THREE.RenderableLine)_=h.v1,M=h.v2,_.positionScreen.x*=q,_.positionScreen.y*=Y,M.positionScreen.x*=q,M.positionScreen.y*=Y,ge.setFromPoints([_.positionScreen,M.positionScreen]),me.isIntersectionBox(ge)===!0&&n(_,M,h,l);else if(h instanceof THREE.RenderableFace){if(_=h.v1,M=h.v2,S=h.v3,_.positionScreen.z<-1||_.positionScreen.z>1)continue;if(M.positionScreen.z<-1||M.positionScreen.z>1)continue;if(S.positionScreen.z<-1||S.positionScreen.z>1)continue;_.positionScreen.x*=q,_.positionScreen.y*=Y,M.positionScreen.x*=q,M.positionScreen.y*=Y,S.positionScreen.x*=q,S.positionScreen.y*=Y,l.overdraw>0&&(E(_.positionScreen,M.positionScreen,l.overdraw),E(M.positionScreen,S.positionScreen,l.overdraw),E(S.positionScreen,_.positionScreen,l.overdraw)),ge.setFromPoints([_.positionScreen,M.positionScreen,S.positionScreen]),me.isIntersectionBox(ge)===!0&&o(_,M,S,0,1,2,h,l)}Te.union(ge)}}ee.setTransform(1,0,0,1,0,0)}},THREE.RenderableObject=function(){this.id=0,this.object=null,this.z=0},THREE.RenderableFace=function(){this.id=0,this.v1=new THREE.RenderableVertex,this.v2=new THREE.RenderableVertex,this.v3=new THREE.RenderableVertex,this.normalModel=new THREE.Vector3,this.vertexNormalsModel=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3],this.vertexNormalsLength=0,this.color=new THREE.Color,this.material=null,this.uvs=[new THREE.Vector2,new THREE.Vector2,new THREE.Vector2],this.z=0},THREE.RenderableVertex=function(){this.position=new THREE.Vector3,this.positionWorld=new THREE.Vector3,this.positionScreen=new THREE.Vector4,this.visible=!0},THREE.RenderableVertex.prototype.copy=function(e){this.positionWorld.copy(e.positionWorld),this.positionScreen.copy(e.positionScreen)},THREE.RenderableLine=function(){this.id=0,this.v1=new THREE.RenderableVertex,this.v2=new THREE.RenderableVertex,this.vertexColors=[new THREE.Color,new THREE.Color],this.material=null,this.z=0},THREE.RenderableSprite=function(){this.id=0,this.object=null,this.x=0,this.y=0,this.z=0,this.rotation=0,this.scale=new THREE.Vector2,this.material=null},THREE.Projector=function(){function e(){if(h===R){var e=new THREE.RenderableObject;return g.push(e),R++,h++,e}return g[h++]}function t(){if(c===v){var e=new THREE.RenderableVertex;return y.push(e),v++,c++,e}return y[c++]}function r(){if(E===x){var e=new THREE.RenderableFace;return H.push(e),x++,E++,e}return H[E++]}function i(){if(d===w){var e=new THREE.RenderableLine;return b.push(e),w++,d++,e}return b[d++]}function n(){if(m===M){var e=new THREE.RenderableSprite;return _.push(e),M++,m++,e}return _[m++]}function o(e,t){return e.z!==t.z?t.z-e.z:e.id!==t.id?e.id-t.id:0}function a(e,t){var r=0,i=1,n=e.z+e.w,o=t.z+t.w,a=-e.z+e.w,s=-t.z+t.w;return n>=0&&o>=0&&a>=0&&s>=0?!0:0>n&&0>o||0>a&&0>s?!1:(0>n?r=Math.max(r,n/(n-o)):0>o&&(i=Math.min(i,n/(n-o))),0>a?r=Math.max(r,a/(a-s)):0>s&&(i=Math.min(i,a/(a-s))),r>i?!1:(e.lerp(t,r),t.lerp(e,1-i),!0))}var s,h,l,c,u,E,p,d,f,m,T,g=[],R=0,y=[],v=0,H=[],x=0,b=[],w=0,_=[],M=0,S={objects:[],lights:[],elements:[]},C=new THREE.Vector3,A=new THREE.Vector4,L=new THREE.Box3(new THREE.Vector3(-1,-1,-1),new THREE.Vector3(1,1,1)),P=new THREE.Box3,F=new Array(3),B=(new Array(4),new THREE.Matrix4),U=new THREE.Matrix4,D=new THREE.Matrix4,V=new THREE.Matrix3,z=new THREE.Frustum,k=new THREE.Vector4,N=new THREE.Vector4;this.projectVector=function(e,t){console.warn("THREE.Projector: .projectVector() is now vector.project()."),e.project(t)},this.unprojectVector=function(e,t){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),e.unproject(t)},this.pickingRay=function(e,t){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")};var O=function(){var e=[],n=[],o=null,a=null,s=new THREE.Matrix3,h=function(t){o=t,a=o.material,s.getNormalMatrix(o.matrixWorld),e.length=0,n.length=0},c=function(e){var t=e.position,r=e.positionWorld,i=e.positionScreen;r.copy(t).applyMatrix4(T),i.copy(r).applyMatrix4(U);var n=1/i.w;i.x*=n,i.y*=n,i.z*=n,e.visible=i.x>=-1&&i.x<=1&&i.y>=-1&&i.y<=1&&i.z>=-1&&i.z<=1},E=function(e,r,i){l=t(),l.position.set(e,r,i),c(l)},d=function(t,r,i){e.push(t,r,i)},f=function(e,t){n.push(e,t)},m=function(e,t,r){return e.visible===!0||t.visible===!0||r.visible===!0?!0:(F[0]=e.positionScreen,F[1]=t.positionScreen,F[2]=r.positionScreen,L.isIntersectionBox(P.setFromPoints(F)))},g=function(e,t,r){return(r.positionScreen.x-e.positionScreen.x)*(t.positionScreen.y-e.positionScreen.y)-(r.positionScreen.y-e.positionScreen.y)*(t.positionScreen.x-e.positionScreen.x)<0},R=function(e,t){var r=y[e],n=y[t];p=i(),p.id=o.id,p.v1.copy(r),p.v2.copy(n),p.z=(r.positionScreen.z+n.positionScreen.z)/2,p.material=o.material,S.elements.push(p)},v=function(t,i,h){var l=y[t],c=y[i],E=y[h];if(m(l,c,E)!==!1&&(a.side===THREE.DoubleSide||g(l,c,E)===!0)){u=r(),u.id=o.id,u.v1.copy(l),u.v2.copy(c),u.v3.copy(E),u.z=(l.positionScreen.z+c.positionScreen.z+E.positionScreen.z)/3;for(var p=0;3>p;p++){var d=3*arguments[p],f=u.vertexNormalsModel[p];f.set(e[d],e[d+1],e[d+2]),f.applyMatrix3(s).normalize();var T=2*arguments[p],R=u.uvs[p];R.set(n[T],n[T+1])}u.vertexNormalsLength=3,u.material=o.material,S.elements.push(u)}};return{setObject:h,projectVertex:c,checkTriangleVisibility:m,checkBackfaceCulling:g,pushVertex:E,pushNormal:d,pushUv:f,pushLine:R,pushTriangle:v}},G=new O;this.projectScene=function(l,g,R,v){E=0,d=0,m=0,S.elements.length=0,l.autoUpdate===!0&&l.updateMatrixWorld(),void 0===g.parent&&g.updateMatrixWorld(),B.copy(g.matrixWorldInverse.getInverse(g.matrixWorld)),U.multiplyMatrices(g.projectionMatrix,B),z.setFromMatrix(U),h=0,S.objects.length=0,S.lights.length=0,l.traverseVisible(function(t){if(t instanceof THREE.Light)S.lights.push(t);else if(t instanceof THREE.Mesh||t instanceof THREE.Line||t instanceof THREE.Sprite){if(t.material.visible===!1)return;(t.frustumCulled===!1||z.intersectsObject(t)===!0)&&(s=e(),s.id=t.id,s.object=t,C.setFromMatrixPosition(t.matrixWorld),C.applyProjection(U),s.z=C.z,S.objects.push(s))}}),R===!0&&S.objects.sort(o);for(var H=0,x=S.objects.length;x>H;H++){var b=S.objects[H].object,w=b.geometry;if(G.setObject(b),T=b.matrixWorld,c=0,b instanceof THREE.Mesh){if(w instanceof THREE.BufferGeometry){var _=w.attributes,M=w.offsets;if(void 0===_.position)continue;for(var L=_.position.array,P=0,F=L.length;F>P;P+=3)G.pushVertex(L[P],L[P+1],L[P+2]);if(void 0!==_.normal)for(var O=_.normal.array,P=0,F=O.length;F>P;P+=3)G.pushNormal(O[P],O[P+1],O[P+2]);if(void 0!==_.uv)for(var I=_.uv.array,P=0,F=I.length;F>P;P+=2)G.pushUv(I[P],I[P+1]);if(void 0!==_.index){var W=_.index.array;if(M.length>0)for(var H=0;H<M.length;H++)for(var j=M[H],X=j.index,P=j.start,F=j.start+j.count;F>P;P+=3)G.pushTriangle(W[P]+X,W[P+1]+X,W[P+2]+X);else for(var P=0,F=W.length;F>P;P+=3)G.pushTriangle(W[P],W[P+1],W[P+2])}else for(var P=0,F=L.length/3;F>P;P+=3)G.pushTriangle(P,P+1,P+2)}else if(w instanceof THREE.Geometry){var q=w.vertices,Y=w.faces,K=w.faceVertexUvs[0];V.getNormalMatrix(T);for(var Q=b.material,Z=Q instanceof THREE.MeshFaceMaterial,J=Z===!0?b.material:null,$=0,ee=q.length;ee>$;$++){var te=q[$];if(C.copy(te),Q.morphTargets===!0)for(var re=w.morphTargets,ie=b.morphTargetInfluences,ne=0,oe=re.length;oe>ne;ne++){var ae=ie[ne];if(0!==ae){var se=re[ne],he=se.vertices[$];C.x+=(he.x-te.x)*ae,C.y+=(he.y-te.y)*ae,C.z+=(he.z-te.z)*ae}}G.pushVertex(C.x,C.y,C.z)}for(var le=0,ce=Y.length;ce>le;le++){var ue=Y[le],Q=Z===!0?J.materials[ue.materialIndex]:b.material;if(void 0!==Q){var Ee=Q.side,pe=y[ue.a],de=y[ue.b],fe=y[ue.c];if(G.checkTriangleVisibility(pe,de,fe)!==!1){var me=G.checkBackfaceCulling(pe,de,fe);if(Ee!==THREE.DoubleSide){if(Ee===THREE.FrontSide&&me===!1)continue;if(Ee===THREE.BackSide&&me===!0)continue}u=r(),u.id=b.id,u.v1.copy(pe),u.v2.copy(de),u.v3.copy(fe),u.normalModel.copy(ue.normal),me!==!1||Ee!==THREE.BackSide&&Ee!==THREE.DoubleSide||u.normalModel.negate(),u.normalModel.applyMatrix3(V).normalize();for(var Te=ue.vertexNormals,ge=0,Re=Math.min(Te.length,3);Re>ge;ge++){var ye=u.vertexNormalsModel[ge];ye.copy(Te[ge]),me!==!1||Ee!==THREE.BackSide&&Ee!==THREE.DoubleSide||ye.negate(),ye.applyMatrix3(V).normalize()}u.vertexNormalsLength=Te.length;var ve=K[le];if(void 0!==ve)for(var He=0;3>He;He++)u.uvs[He].copy(ve[He]);u.color=ue.color,u.material=Q,u.z=(pe.positionScreen.z+de.positionScreen.z+fe.positionScreen.z)/3,S.elements.push(u)}}}}}else if(b instanceof THREE.Line){if(w instanceof THREE.BufferGeometry){var _=w.attributes;if(void 0!==_.position){for(var L=_.position.array,P=0,F=L.length;F>P;P+=3)G.pushVertex(L[P],L[P+1],L[P+2]);if(void 0!==_.index)for(var W=_.index.array,P=0,F=W.length;F>P;P+=2)G.pushLine(W[P],W[P+1]);else for(var xe=b.mode===THREE.LinePieces?2:1,P=0,F=L.length/3-1;F>P;P+=xe)G.pushLine(P,P+1)}}else if(w instanceof THREE.Geometry){D.multiplyMatrices(U,T);var q=b.geometry.vertices;if(0===q.length)continue;pe=t(),pe.positionScreen.copy(q[0]).applyMatrix4(D);for(var xe=b.mode===THREE.LinePieces?2:1,$=1,ee=q.length;ee>$;$++)pe=t(),pe.positionScreen.copy(q[$]).applyMatrix4(D),($+1)%xe>0||(de=y[c-2],k.copy(pe.positionScreen),N.copy(de.positionScreen),a(k,N)===!0&&(k.multiplyScalar(1/k.w),N.multiplyScalar(1/N.w),p=i(),p.id=b.id,p.v1.positionScreen.copy(k),p.v2.positionScreen.copy(N),p.z=Math.max(k.z,N.z),p.material=b.material,b.material.vertexColors===THREE.VertexColors&&(p.vertexColors[0].copy(b.geometry.colors[$]),p.vertexColors[1].copy(b.geometry.colors[$-1])),S.elements.push(p)))}}else if(b instanceof THREE.Sprite){A.set(T.elements[12],T.elements[13],T.elements[14],1),A.applyMatrix4(U);var be=1/A.w;A.z*=be,A.z>=-1&&A.z<=1&&(f=n(),f.id=b.id,f.x=A.x*be,f.y=A.y*be,f.z=A.z,f.object=b,f.rotation=b.rotation,f.scale.x=b.scale.x*Math.abs(f.x-(A.x+g.projectionMatrix.elements[0])/(A.w+g.projectionMatrix.elements[12])),f.scale.y=b.scale.y*Math.abs(f.y-(A.y+g.projectionMatrix.elements[5])/(A.w+g.projectionMatrix.elements[13])),f.material=b.material,S.elements.push(f))}}return v===!0&&S.elements.sort(o),S}},THREE.StereoEffect=function(e){var t=this;this.eyeSeparation=3,this.focalLength=15,Object.defineProperties(this,{separation:{get:function(){return t.eyeSeparation},set:function(e){console.warn("THREE.StereoEffect: .separation is now .eyeSeparation."),t.eyeSeparation=e}},targetDistance:{get:function(){return t.focalLength},set:function(e){console.warn("THREE.StereoEffect: .targetDistance is now .focalLength."),t.focalLength=e}}});var r,i,n,o,a,s,h,l,c,u,E,p,d=new THREE.Vector3,f=new THREE.Quaternion,m=new THREE.Vector3,T=new THREE.PerspectiveCamera,g=new THREE.PerspectiveCamera;e.autoClear=!1,this.setSize=function(t,n){r=t/2,i=n,e.setSize(t,n)},this.render=function(t,R){t.updateMatrixWorld(),void 0===R.parent&&R.updateMatrixWorld(),R.matrixWorld.decompose(d,f,m),n=THREE.Math.radToDeg(2*Math.atan(Math.tan(.5*THREE.Math.degToRad(R.fov))/R.zoom)),l=R.near/this.focalLength,u=Math.tan(.5*THREE.Math.degToRad(n))*this.focalLength,c=.5*u*R.aspect,s=u*l,h=-s,E=(c+this.eyeSeparation/2)/(2*c),p=1-E,o=2*c*l*p,a=2*c*l*E,T.projectionMatrix.makeFrustum(-o,a,h,s,R.near,R.far),T.position.copy(d),T.quaternion.copy(f),T.translateX(-this.eyeSeparation/2),g.projectionMatrix.makeFrustum(-a,o,h,s,R.near,R.far),g.position.copy(d),g.quaternion.copy(f),g.translateX(this.eyeSeparation/2),e.clear(),e.enableScissorTest(!0),e.setScissor(0,0,r,i),e.setViewport(0,0,r,i),e.render(t,T),e.setScissor(r,0,r,i),e.setViewport(r,0,r,i),e.render(t,g),e.enableScissorTest(!1)}};
;var PhotoSphereViewer=function(args){var isCanvasSupported=function(){var canvas=document.createElement("canvas");return!!(canvas.getContext&&canvas.getContext("2d"))};var isWebGLSupported=function(){var canvas=document.createElement("canvas");return!!(window.WebGLRenderingContext&&canvas.getContext("webgl"))};var addEvent=function(elt,evt,f){if(!!elt.addEventListener)elt.addEventListener(evt,f,false);else elt.attachEvent("on"+evt,f)};var stayBetween=function(x,min,max){return Math.max(min,Math.min(max,x))};var dist=function(x1,y1,x2,y2){var x=x2-x1;var y=y2-y1;return x*x+y*y};var getAngleMeasure=function(angle,is_2pi_allowed){is_2pi_allowed=is_2pi_allowed!==undefined?!!is_2pi_allowed:false;return is_2pi_allowed&&angle==2*Math.PI?2*Math.PI:angle-Math.floor(angle/(2*Math.PI))*2*Math.PI};this.load=function(){container.innerHTML="";if(!!loading_html&&loading_html.nodeType===1)container.appendChild(loading_html);else if(!!loading_html&&typeof loading_html=="string")container.innerHTML=loading_html;else if(!!loading_img){var loading=document.createElement("img");loading.setAttribute("src",loading_img);loading.setAttribute("alt",loading_msg);container.appendChild(loading)}else container.textContent=loading_msg;root=document.createElement("div");root.style.width="100%";root.style.height="100%";root.style.position="relative";root.style.overflow="hidden";if(!isCanvasSupported()){container.textContent="Canvas is not supported, update your browser!";return}if(window.THREE===undefined){console.log("PhotoSphereViewer: Three.js is not loaded.");return}viewer_size={width:0,height:0,ratio:0};if(readxmp&&!panorama.match(/^data:image\/[a-z]+;base64/))loadXMP();else createBuffer()};var getXMPData=function(file){var a=0,b=0;var data="";while((a=file.indexOf("<x:xmpmeta",b))!=-1&&(b=file.indexOf("</x:xmpmeta>",a))!=-1){data=file.substring(a,b);if(data.indexOf("GPano:")!=-1)return data}return""};var getAttribute=function(data,attr){var a=data.indexOf("GPano:"+attr)+attr.length+8,b=data.indexOf('"',a);if(b==-1){a=data.indexOf("GPano:"+attr)+attr.length+7;b=data.indexOf("<",a)}return data.substring(a,b)};var loadXMP=function(){var xhr=null;if(window.XMLHttpRequest)xhr=new XMLHttpRequest;else if(window.ActiveXObject){try{xhr=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){xhr=new ActiveXObject("Microsoft.XMLHTTP")}}else{container.textContent="XHR is not supported, update your browser!";return}xhr.onreadystatechange=function(){if(xhr.readyState==4&&xhr.status==200){var data=getXMPData(xhr.responseText);if(!data.length){createBuffer();return}pano_size={full_width:parseInt(getAttribute(data,"FullPanoWidthPixels")),full_height:parseInt(getAttribute(data,"FullPanoHeightPixels")),cropped_width:parseInt(getAttribute(data,"CroppedAreaImageWidthPixels")),cropped_height:parseInt(getAttribute(data,"CroppedAreaImageHeightPixels")),cropped_x:parseInt(getAttribute(data,"CroppedAreaLeftPixels")),cropped_y:parseInt(getAttribute(data,"CroppedAreaTopPixels"))};recalculate_coords=true;createBuffer()}};xhr.open("GET",panorama,true);xhr.send(null)};var createBuffer=function(){var img=new Image;img.onload=function(){var default_pano_size={full_width:img.width,full_height:img.height,cropped_width:img.width,cropped_height:img.height,cropped_x:null,cropped_y:null};if(captured_view.horizontal_fov!=360||captured_view.vertical_fov!=180){pano_size.cropped_width=default_pano_size.cropped_width;pano_size.cropped_height=default_pano_size.cropped_height;pano_size.full_width=default_pano_size.full_width;pano_size.full_height=default_pano_size.full_height;if(captured_view.horizontal_fov!=360){var rh=captured_view.horizontal_fov/360;pano_size.full_width=pano_size.cropped_width/rh}if(captured_view.vertical_fov!=180){var rv=captured_view.vertical_fov/180;pano_size.full_height=pano_size.cropped_height/rv}}else{for(var attr in pano_size){if(pano_size[attr]===null&&default_pano_size[attr]!==undefined)pano_size[attr]=default_pano_size[attr]}if(recalculate_coords){if(pano_size.cropped_width!=default_pano_size.cropped_width){var rx=default_pano_size.cropped_width/pano_size.cropped_width;pano_size.cropped_width=default_pano_size.cropped_width;pano_size.full_width*=rx;pano_size.cropped_x*=rx}if(pano_size.cropped_height!=default_pano_size.cropped_height){var ry=default_pano_size.cropped_height/pano_size.cropped_height;pano_size.cropped_height=default_pano_size.cropped_height;pano_size.full_height*=ry;pano_size.cropped_y*=ry}}}if(pano_size.cropped_x===null)pano_size.cropped_x=(pano_size.full_width-pano_size.cropped_width)/2;if(pano_size.cropped_y===null)pano_size.cropped_y=(pano_size.full_height-pano_size.cropped_height)/2;var max_width=2048;if(isWebGLSupported()){var canvas_tmp=document.createElement("canvas");var ctx_tmp=canvas_tmp.getContext("webgl");max_width=ctx_tmp.getParameter(ctx_tmp.MAX_TEXTURE_SIZE)}var new_width=Math.min(pano_size.full_width,max_width);var r=new_width/pano_size.full_width;pano_size.full_width=new_width;pano_size.cropped_width*=r;pano_size.cropped_x*=r;img.width=pano_size.cropped_width;pano_size.full_height*=r;pano_size.cropped_height*=r;pano_size.cropped_y*=r;img.height=pano_size.cropped_height;var buffer=document.createElement("canvas");buffer.width=pano_size.full_width;buffer.height=pano_size.full_height;var ctx=buffer.getContext("2d");ctx.drawImage(img,pano_size.cropped_x,pano_size.cropped_y,pano_size.cropped_width,pano_size.cropped_height);loadTexture(buffer.toDataURL("image/jpeg"))};if(cors_anonymous&&!panorama.match(/^data:image\/[a-z]+;base64/))img.setAttribute("crossOrigin","anonymous");img.src=panorama};var loadTexture=function(path){var texture=new THREE.Texture;var loader=new THREE.ImageLoader;var onLoad=function(img){texture.needsUpdate=true;texture.image=img;createScene(texture)};loader.load(path,onLoad)};var createScene=function(texture){if(new_viewer_size.width!==undefined)container.style.width=new_viewer_size.width.css;if(new_viewer_size.height!==undefined)container.style.height=new_viewer_size.height.css;fitToContainer();renderer=isWebGLSupported()?new THREE.WebGLRenderer:new THREE.CanvasRenderer;renderer.setSize(viewer_size.width,viewer_size.height);scene=new THREE.Scene;camera=new THREE.PerspectiveCamera(PSV_FOV_MAX,viewer_size.ratio,1,300);camera.position.set(0,0,0);scene.add(camera);var geometry=new THREE.SphereGeometry(200,rings,segments);var material=new THREE.MeshBasicMaterial({map:texture,overdraw:true});var mesh=new THREE.Mesh(geometry,material);mesh.scale.x=-1;scene.add(mesh);canvas_container=document.createElement("div");canvas_container.style.position="absolute";canvas_container.style.zIndex=0;root.appendChild(canvas_container);if(display_navbar){navbar.setStyle(navbar_style);navbar.create();root.appendChild(navbar.getBar())}if(overlay!==null){var overlay_img=document.createElement("img");overlay_img.onload=function(){overlay_img.style.display="block";overlay_img.style.position="absolute";overlay_img.style[overlay.position.x]="5px";overlay_img.style[overlay.position.y]="5px";if(overlay.position.y=="bottom"&&display_navbar)overlay_img.style.bottom=navbar.getBar().offsetHeight+5+"px";if(overlay.size!==undefined){overlay_img.style.width=overlay.size.width;overlay_img.style.height=overlay.size.height}root.appendChild(overlay_img)};overlay_img.src=overlay.image}addEvent(window,"resize",fitToContainer);if(user_interactions_allowed){addEvent(canvas_container,"mousedown",onMouseDown);addEvent(document,"mousemove",onMouseMove);addEvent(canvas_container,"mousemove",showNavbar);addEvent(document,"mouseup",onMouseUp);addEvent(canvas_container,"touchstart",onTouchStart);addEvent(document,"touchend",onMouseUp);addEvent(document,"touchmove",onTouchMove);if(scroll_to_zoom){addEvent(canvas_container,"mousewheel",onMouseWheel);addEvent(canvas_container,"DOMMouseScroll",onMouseWheel)}self.addAction("fullscreen-mode",toggleArrowKeys)}addEvent(document,"fullscreenchange",fullscreenToggled);addEvent(document,"mozfullscreenchange",fullscreenToggled);addEvent(document,"webkitfullscreenchange",fullscreenToggled);addEvent(document,"MSFullscreenChange",fullscreenToggled);sphoords.addListener(onDeviceOrientation);container.innerHTML="";container.appendChild(root);var canvas=renderer.domElement;canvas.style.display="block";canvas_container.appendChild(canvas);render();if(zoom_lvl>0)zoom(zoom_lvl);anim();triggerAction("ready")};var render=function(){var point=new THREE.Vector3;point.setX(Math.cos(lat)*Math.sin(long));point.setY(Math.sin(lat));point.setZ(Math.cos(lat)*Math.cos(long));camera.lookAt(point);if(stereo_effect!==null)stereo_effect.render(scene,camera);else renderer.render(scene,camera)};var startStereo=function(){stereo_effect=new THREE.StereoEffect(renderer);stereo_effect.eyeSeparation=eyes_offset;stereo_effect.setSize(viewer_size.width,viewer_size.height);startDeviceOrientation();enableFullscreen();navbar.mustBeHidden();render();triggerAction("stereo-effect",true)};var stopStereo=function(){stereo_effect=null;renderer.setSize(viewer_size.width,viewer_size.height);navbar.mustBeHidden(false);render();triggerAction("stereo-effect",false)};this.toggleStereo=function(){if(stereo_effect!==null)stopStereo();else startStereo()};var anim=function(){if(anim_delay!==false)anim_timeout=setTimeout(startAutorotate,anim_delay)};var autorotate=function(){lat-=(lat-anim_lat_target)*anim_lat_offset;long+=anim_long_offset;var again=true;if(!whole_circle){long=stayBetween(long,PSV_MIN_LONGITUDE,PSV_MAX_LONGITUDE);if(long==PSV_MIN_LONGITUDE||long==PSV_MAX_LONGITUDE){if(reverse_anim)anim_long_offset*=-1;else{stopAutorotate();again=false}}}long=getAngleMeasure(long,true);triggerAction("position-updated",{longitude:long,latitude:lat});render();if(again)autorotate_timeout=setTimeout(autorotate,PSV_ANIM_TIMEOUT)};var startAutorotate=function(){autorotate();triggerAction("autorotate",true)};var stopAutorotate=function(){clearTimeout(anim_timeout);anim_timeout=null;clearTimeout(autorotate_timeout);autorotate_timeout=null;triggerAction("autorotate",false)};this.toggleAutorotate=function(){clearTimeout(anim_timeout);if(!!autorotate_timeout)stopAutorotate();else startAutorotate()};var fitToContainer=function(){if(container.clientWidth!=viewer_size.width||container.clientHeight!=viewer_size.height){resize({width:container.clientWidth,height:container.clientHeight})}};this.fitToContainer=function(){fitToContainer()};var resize=function(size){viewer_size.width=size.width!==undefined?parseInt(size.width):viewer_size.width;viewer_size.height=size.height!==undefined?parseInt(size.height):viewer_size.height;viewer_size.ratio=viewer_size.width/viewer_size.height;if(!!camera){camera.aspect=viewer_size.ratio;camera.updateProjectionMatrix()}if(!!renderer){renderer.setSize(viewer_size.width,viewer_size.height);render()}if(!!stereo_effect){stereo_effect.setSize(viewer_size.width,viewer_size.height);render()}};this.getPosition=function(){return{longitude:long,latitude:lat}};this.getPositionInDegrees=function(){return{longitude:long*180/Math.PI,latitude:lat*180/Math.PI}};var moveTo=function(longitude,latitude){var long_tmp=parseAngle(longitude);if(!whole_circle)long_tmp=stayBetween(long_tmp,PSV_MIN_LONGITUDE,PSV_MAX_LONGITUDE);var lat_tmp=parseAngle(latitude);if(lat_tmp>Math.PI)lat_tmp-=2*Math.PI;lat_tmp=stayBetween(lat_tmp,PSV_TILT_DOWN_MAX,PSV_TILT_UP_MAX);long=long_tmp;lat=lat_tmp;triggerAction("position-updated",{longitude:long,latitude:lat});render()};this.moveTo=function(longitude,latitude){moveTo(longitude,latitude)};var rotate=function(dlong,dlat){dlong=parseAngle(dlong);dlat=parseAngle(dlat);moveTo(long+dlong,lat+dlat)};this.rotate=function(dlong,dlat){rotate(dlong,dlat)};var toggleArrowKeys=function(attach){var action=attach?window.addEventListener:window.removeEventListener;action("keydown",keyDown)};var retrieveKey=function(evt){if(evt.key){var key=/^Arrow/.test(evt.key)?evt.key:"Arrow"+evt.key;return key}if(evt.keyCode||evt.which){var key_code=evt.keyCode?evt.keyCode:evt.which;var keycodes_map={38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",37:"ArrowLeft"};if(keycodes_map[key_code]!==undefined)return keycodes_map[key_code]}return""};var keyDown=function(evt){var dlong=0,dlat=0;switch(retrieveKey(evt)){case"ArrowUp":dlat=PSV_KEYBOARD_LAT_OFFSET;break;case"ArrowRight":dlong=-PSV_KEYBOARD_LONG_OFFSET;break;case"ArrowDown":dlat=-PSV_KEYBOARD_LAT_OFFSET;break;case"ArrowLeft":dlong=PSV_KEYBOARD_LONG_OFFSET;break}rotate(dlong,dlat)};var onMouseDown=function(evt){startMove(parseInt(evt.clientX),parseInt(evt.clientY))};var onTouchStart=function(evt){if(evt.touches.length==1){var touch=evt.touches[0];if(touch.target.parentNode==canvas_container)startMove(parseInt(touch.clientX),parseInt(touch.clientY))}else if(evt.touches.length==2){onMouseUp();if(evt.touches[0].target.parentNode==canvas_container&&evt.touches[1].target.parentNode==canvas_container)startTouchZoom(dist(evt.touches[0].clientX,evt.touches[0].clientY,evt.touches[1].clientX,evt.touches[1].clientY))}showNavbar()};var startMove=function(x,y){mouse_x=x;mouse_y=y;stopAutorotate();mousedown=true};var startTouchZoom=function(d){touchzoom_dist=d;touchzoom=true};var onMouseUp=function(evt){mousedown=false;touchzoom=false};var onMouseMove=function(evt){evt.preventDefault();move(parseInt(evt.clientX),parseInt(evt.clientY))};var onTouchMove=function(evt){if(evt.touches.length==1&&mousedown){var touch=evt.touches[0];if(touch.target.parentNode==canvas_container){evt.preventDefault();move(parseInt(touch.clientX),parseInt(touch.clientY))}}else if(evt.touches.length==2){if(evt.touches[0].target.parentNode==canvas_container&&evt.touches[1].target.parentNode==canvas_container&&touchzoom){evt.preventDefault();var d=dist(evt.touches[0].clientX,evt.touches[0].clientY,evt.touches[1].clientX,evt.touches[1].clientY);var diff=d-touchzoom_dist;if(diff!==0){var direction=diff/Math.abs(diff);zoom(zoom_lvl+direction*zoom_speed);touchzoom_dist=d}}}};var move=function(x,y){if(mousedown){if(smooth_user_moves){long+=(x-mouse_x)/viewer_size.height*fov*Math.PI/180;lat+=(y-mouse_y)/viewer_size.height*fov*Math.PI/180}else{long+=(x-mouse_x)*PSV_LONG_OFFSET;lat+=(y-mouse_y)*PSV_LAT_OFFSET}mouse_x=x;mouse_y=y;if(!whole_circle)long=stayBetween(long,PSV_MIN_LONGITUDE,PSV_MAX_LONGITUDE);long=getAngleMeasure(long,true);lat=stayBetween(lat,PSV_TILT_DOWN_MAX,PSV_TILT_UP_MAX);triggerAction("position-updated",{longitude:long,latitude:lat});render()}};var startDeviceOrientation=function(){sphoords.start();stopAutorotate();triggerAction("device-orientation",true)};var stopDeviceOrientation=function(){sphoords.stop();triggerAction("device-orientation",false)};this.toggleDeviceOrientation=function(){if(sphoords.isEventAttached())stopDeviceOrientation();else startDeviceOrientation()};var onDeviceOrientation=function(coords){long=stayBetween(coords.longitude,PSV_MIN_LONGITUDE,PSV_MAX_LONGITUDE);lat=stayBetween(coords.latitude,PSV_TILT_DOWN_MAX,PSV_TILT_UP_MAX);triggerAction("position-updated",{longitude:long,latitude:lat});render()};var onMouseWheel=function(evt){evt.preventDefault();evt.stopPropagation();var delta=evt.detail?-evt.detail:evt.wheelDelta;if(delta!==0){var direction=parseInt(delta/Math.abs(delta));zoom(zoom_lvl+direction*zoom_speed)}};this.mouseWheel=function(evt){onMouseWheel(evt)};var zoom=function(level){zoom_lvl=stayBetween(level,0,100);fov=PSV_FOV_MAX+zoom_lvl/100*(PSV_FOV_MIN-PSV_FOV_MAX);camera.fov=fov;camera.updateProjectionMatrix();render();triggerAction("zoom-updated",zoom_lvl)};this.getZoomLevel=function(){return zoom_lvl};this.zoom=function(level){zoom(level)};this.zoomIn=function(){if(zoom_lvl<100)zoom(zoom_lvl+zoom_speed)};this.zoomOut=function(){if(zoom_lvl>0)zoom(zoom_lvl-zoom_speed)};var isFullscreenEnabled=function(){return!!document.fullscreenElement||!!document.mozFullScreenElement||!!document.webkitFullscreenElement||!!document.msFullscreenElement};var fullscreenToggled=function(){if(!!document.webkitFullscreenElement||!!document.msFullscreenElement){real_viewer_size.width=container.style.width;real_viewer_size.height=container.style.height;container.style.width="100%";container.style.height="100%";fitToContainer()}else if(!!container.webkitRequestFullscreen||!!container.msRequestFullscreen){container.style.width=real_viewer_size.width;container.style.height=real_viewer_size.height;fitToContainer()}triggerAction("fullscreen-mode",isFullscreenEnabled())};var enableFullscreen=function(){if(!!container.requestFullscreen)container.requestFullscreen();else if(!!container.mozRequestFullScreen)container.mozRequestFullScreen();else if(!!container.webkitRequestFullscreen)container.webkitRequestFullscreen();else if(!!container.msRequestFullscreen)container.msRequestFullscreen()};var disableFullscreen=function(){if(!!document.exitFullscreen)document.exitFullscreen();else if(!!document.mozCancelFullScreen)document.mozCancelFullScreen();else if(!!document.webkitExitFullscreen)document.webkitExitFullscreen();else if(!!document.msExitFullscreen)document.msExitFullscreen()};this.toggleFullscreen=function(){if(!isFullscreenEnabled())enableFullscreen();else disableFullscreen()};var showNavbar=function(){if(display_navbar)navbar.show()};var parseAnimationSpeed=function(speed){speed=speed.toString().trim();var speed_value=parseFloat(speed.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));var speed_unit=speed.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();if(speed_unit.match(/(pm|per minute)$/))speed_value/=60;var rad_per_second=0;switch(speed_unit){case"rpm":case"rev per minute":case"revolutions per minute":case"rps":case"rev per second":case"revolutions per second":rad_per_second=speed_value*2*Math.PI;break;case"dpm":case"deg per minute":case"degrees per minute":case"dps":case"deg per second":case"degrees per second":rad_per_second=speed_value*Math.PI/180;break;case"rad per minute":case"radians per minute":case"rad per second":case"radians per second":rad_per_second=speed_value;break;default:m_anim=false}return rad_per_second*PSV_ANIM_TIMEOUT/1e3};var parseAngle=function(angle){angle=angle.toString().trim();var angle_value=parseFloat(angle.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));var angle_unit=angle.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();if(angle_unit=="deg")angle_value*=Math.PI/180;return getAngleMeasure(angle_value)};var setNewViewerSize=function(size){for(var dim in size){if(dim=="width"||dim=="height"){var size_str=size[dim].toString().trim();var size_value=parseFloat(size_str.replace(/^([0-9]+(?:\.[0-9]*)?).*$/,"$1"));var size_unit=size_str.replace(/^[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();if(size_unit!="%")size_unit="px";new_viewer_size[dim]={css:size_value+size_unit,unit:size_unit}}}};this.addAction=function(name,f){if(!(name in actions))actions[name]=[];actions[name].push(f)};var triggerAction=function(name,arg){if(name in actions&&!!actions[name].length){for(var i=0,l=actions[name].length;i<l;++i){if(arg!==undefined)actions[name][i](arg);else actions[name][i]()}}};if(args===undefined||args.panorama===undefined||args.container===undefined){console.log("PhotoSphereViewer: no value given for panorama or container");return}var smooth_user_moves=args.smooth_user_moves!==undefined?!!args.smooth_user_moves:true;var PSV_LONG_OFFSET=args.long_offset!==undefined?parseAngle(args.long_offset):Math.PI/360;var PSV_LAT_OFFSET=args.lat_offset!==undefined?parseAngle(args.lat_offset):Math.PI/180;var PSV_KEYBOARD_LONG_OFFSET=args.keyboard_long_offset!==undefined?parseAngle(args.keyboard_long_offset):Math.PI/60;var PSV_KEYBOARD_LAT_OFFSET=args.keyboard_lat_offset!==undefined?parseAngle(args.keyboard_lat_offset):Math.PI/120;var PSV_FOV_MIN=args.min_fov!==undefined?stayBetween(parseFloat(args.min_fov),1,179):30;var PSV_FOV_MAX=args.max_fov!==undefined?stayBetween(parseFloat(args.max_fov),1,179):90;var PSV_TILT_UP_MAX=args.tilt_up_max!==undefined?stayBetween(parseAngle(args.tilt_up_max),0,Math.PI/2):Math.PI/2;var PSV_TILT_DOWN_MAX=args.tilt_down_max!==undefined?-stayBetween(parseAngle(args.tilt_down_max),0,Math.PI/2):-Math.PI/2;var min_long=args.min_longitude!==undefined?parseAngle(args.min_longitude):0;var max_long=args.max_longitude!==undefined?parseAngle(args.max_longitude):0;var whole_circle=min_long==max_long;if(whole_circle){min_long=0;max_long=2*Math.PI}else if(max_long===0)max_long=2*Math.PI;var PSV_MIN_LONGITUDE,PSV_MAX_LONGITUDE;if(min_long<max_long){PSV_MIN_LONGITUDE=min_long;PSV_MAX_LONGITUDE=max_long}else{PSV_MIN_LONGITUDE=max_long;PSV_MAX_LONGITUDE=min_long}var lat=0,long=PSV_MIN_LONGITUDE;if(args.default_position!==undefined){if(args.default_position.lat!==undefined){var lat_angle=parseAngle(args.default_position.lat);if(lat_angle>Math.PI)lat_angle-=2*Math.PI;lat=stayBetween(lat_angle,PSV_TILT_DOWN_MAX,PSV_TILT_UP_MAX)}if(args.default_position.long!==undefined)long=stayBetween(parseAngle(args.default_position.long),PSV_MIN_LONGITUDE,PSV_MAX_LONGITUDE)}var segments=args.segments!==undefined?parseInt(args.segments):100;var rings=args.rings!==undefined?parseInt(args.rings):100;var zoom_lvl=0;if(args.zoom_level!==undefined)zoom_lvl=stayBetween(parseInt(Math.round(args.zoom_level)),0,100);var fov=PSV_FOV_MAX+zoom_lvl/100*(PSV_FOV_MIN-PSV_FOV_MAX);var PSV_FRAMES_PER_SECOND=60;var PSV_ANIM_TIMEOUT=1e3/PSV_FRAMES_PER_SECOND;var anim_delay=2e3;if(args.time_anim!==undefined){if(typeof args.time_anim=="number"&&args.time_anim>=0)anim_delay=args.time_anim;else anim_delay=false}var anim_long_offset=args.anim_speed!==undefined?parseAnimationSpeed(args.anim_speed):parseAnimationSpeed("2rpm");var reverse_anim=true;if(args.reverse_anim!==undefined)reverse_anim=!!args.reverse_anim;var anim_lat_offset=args.vertical_anim_speed!==undefined?parseAnimationSpeed(args.vertical_anim_speed):parseAnimationSpeed("2rpm");var anim_lat_target=0;if(args.vertical_anim_target!==undefined){var lat_target_angle=parseAngle(args.vertical_anim_target);if(lat_target_angle>Math.PI)lat_target_angle-=2*Math.PI;anim_lat_target=stayBetween(lat_target_angle,PSV_TILT_DOWN_MAX,PSV_TILT_UP_MAX)}var navbar=new PSVNavBar(this);var display_navbar=args.navbar!==undefined?!!args.navbar:false;var navbar_style=args.navbar_style!==undefined?args.navbar_style:{};var user_interactions_allowed=args.allow_user_interactions!==undefined?!!args.allow_user_interactions:true;if(!user_interactions_allowed)display_navbar=false;var scroll_to_zoom=args.allow_scroll_to_zoom!==undefined?!!args.allow_scroll_to_zoom:true;var zoom_speed=args.zoom_speed!==undefined?parseFloat(args.zoom_speed):1;var eyes_offset=args.eyes_offset!==undefined?parseFloat(args.eyes_offset):5;var container=typeof args.container=="string"?document.getElementById(args.container):args.container;var viewer_size,new_viewer_size={},real_viewer_size={};if(args.size!==undefined)setNewViewerSize(args.size);var panorama=args.panorama;var root,canvas_container;var renderer=null,scene=null,camera=null,stereo_effect=null;var mousedown=false,mouse_x=0,mouse_y=0;var touchzoom=false,touchzoom_dist=0;var autorotate_timeout=null,anim_timeout=null;var sphoords=new Sphoords;var actions={};var readxmp=args.usexmpdata!==undefined?!!args.usexmpdata:true;var cors_anonymous=args.cors_anonymous!==undefined?!!args.cors_anonymous:true;var pano_size={full_width:null,full_height:null,cropped_width:null,cropped_height:null,cropped_x:null,cropped_y:null};if(args.pano_size!==undefined){for(var attr in pano_size){if(args.pano_size[attr]!==undefined)pano_size[attr]=parseInt(args.pano_size[attr])}readxmp=false}var captured_view={horizontal_fov:360,vertical_fov:180};if(args.captured_view!==undefined){for(var attr in captured_view){if(args.captured_view[attr]!==undefined)captured_view[attr]=parseFloat(args.captured_view[attr])}readxmp=false}var recalculate_coords=false;var loading_msg=args.loading_msg!==undefined?args.loading_msg.toString():"Loading…";var loading_img=args.loading_img!==undefined?args.loading_img.toString():null;var loading_html=args.loading_html!==undefined?args.loading_html:null;var overlay=null;if(args.overlay!==undefined){if(args.overlay.image!==undefined){overlay={image:args.overlay.image,position:{x:"left",y:"bottom"}};if(args.overlay.position!==undefined){if(args.overlay.position.x!==undefined&&(args.overlay.position.x=="left"||args.overlay.position.x=="right"))overlay.position.x=args.overlay.position.x;if(args.overlay.position.y!==undefined&&(args.overlay.position.y=="top"||args.overlay.position.y=="bottom"))overlay.position.y=args.overlay.position.y}if(args.overlay.size!==undefined){overlay.size={width:args.overlay.size.width!==undefined?args.overlay.size.width:"auto",height:args.overlay.size.height!==undefined?args.overlay.size.height:"auto"}}}}var self=this;if(args.onready!==undefined)this.addAction("ready",args.onready);var autoload=args.autoload!==undefined?!!args.autoload:true;if(autoload)this.load()};var PSVNavBar=function(psv){var inArray=function(searched,array){for(var i=0,l=array.length;i<l;++i){if(array[i]==searched)return true}return false};var checkValue=function(property,value){return inArray(property,colors)&&typeof value=="string"&&(value=="transparent"||!!value.match(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/)||!!value.match(/^rgb\((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])(,\s*(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}\)$/)||!!value.match(/^rgba\(((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s*){3}(0(\.[0-9]*)?|1)\)$/))||inArray(property,numbers)&&!isNaN(parseFloat(value))&&isFinite(value)&&value>=0};this.setStyle=function(new_style){for(var property in new_style){if(property in style&&checkValue(property,new_style[property]))style[property]=new_style[property]}};this.create=function(){container=document.createElement("div");container.style.backgroundColor=style.backgroundColor;container.style.position="absolute";container.style.zIndex=10;container.style.bottom=0;container.style.width="100%";container.style.boxSizing="content-box";container.style.transition="bottom 0.4s ease-out";autorotate=new PSVNavBarButton(psv,"autorotate",style);container.appendChild(autorotate.getButton());zoom=new PSVNavBarButton(psv,"zoom",style);container.appendChild(zoom.getButton());fullscreen=new PSVNavBarButton(psv,"fullscreen",style);container.appendChild(fullscreen.getButton());if(Sphoords.isDeviceOrientationSupported){orientation=new PSVNavBarButton(psv,"orientation",style);container.appendChild(orientation.getButton());vr=new PSVNavBarButton(psv,"virtual-reality",style);container.appendChild(vr.getButton())}};this.getBar=function(){return container};var show=function(){if(!!must_hide_timeout){clearTimeout(must_hide_timeout);if(!hidden&&must_be_hidden)must_hide_timeout=setTimeout(hide,5e3)}if(hidden){container.style.bottom=0;hidden=false;if(must_be_hidden)must_hide_timeout=setTimeout(hide,5e3)}};this.show=function(){show()};var hide=function(){if(!hidden){container.style.bottom=-container.offsetHeight+1+"px";hidden=true}};this.hide=function(){hide()};this.isHidden=function(){return hidden};this.mustBeHidden=function(state){must_be_hidden=state!==undefined?!!state:true;if(must_be_hidden)hide();else show()};var style={backgroundColor:"rgba(61, 61, 61, 0.5)",buttonsColor:"rgba(255, 255, 255, 0.7)",buttonsBackgroundColor:"transparent",activeButtonsBackgroundColor:"rgba(255, 255, 255, 0.1)",buttonsHeight:20,autorotateThickness:1,zoomRangeWidth:50,zoomRangeThickness:1,zoomRangeDisk:7,fullscreenRatio:4/3,fullscreenThickness:2,gyroscopeThickness:1,virtualRealityRatio:4/3,virtualRealityBorderRadius:2};var colors=["backgroundColor","buttonsColor","buttonsBackgroundColor","activeButtonsBackgroundColor"];var numbers=["buttonsHeight","autorotateThickness","zoomRangeWidth","zoomRangeThickness","zoomRangeDisk","fullscreenRatio","fullscreenThickness"];var container;var autorotate,zoom,fullscreen,orientation,vr;var must_hide_timeout=null;var hidden=false,must_be_hidden=false};var PSVNavBarButton=function(psv,type,style){var addEvent=function(elt,evt,f){if(!!elt.addEventListener)elt.addEventListener(evt,f,false);else elt.attachEvent("on"+evt,f)};var create=function(){switch(type){case"autorotate":var autorotate_sphere_width=style.buttonsHeight-style.autorotateThickness*2;var autorotate_equator_height=autorotate_sphere_width/10;button=document.createElement("div");button.style.cssFloat="left";button.style.boxSizing="inherit";button.style.padding="10px";button.style.width=style.buttonsHeight+"px";button.style.height=style.buttonsHeight+"px";button.style.backgroundColor=style.buttonsBackgroundColor;button.style.position="relative";button.style.cursor="pointer";addEvent(button,"click",function(){psv.toggleAutorotate()});var autorotate_sphere=document.createElement("div");autorotate_sphere.style.boxSizing="inherit";autorotate_sphere.style.width=autorotate_sphere_width+"px";autorotate_sphere.style.height=autorotate_sphere_width+"px";autorotate_sphere.style.borderRadius="50%";autorotate_sphere.style.border=style.autorotateThickness+"px solid "+style.buttonsColor;button.appendChild(autorotate_sphere);var autorotate_equator=document.createElement("div");autorotate_equator.style.boxSizing="inherit";autorotate_equator.style.width=autorotate_sphere_width+"px";autorotate_equator.style.height=autorotate_equator_height+"px";autorotate_equator.style.borderRadius="50%";autorotate_equator.style.border=style.autorotateThickness+"px solid "+style.buttonsColor;autorotate_equator.style.position="absolute";autorotate_equator.style.top="50%";autorotate_equator.style.marginTop=-(autorotate_equator_height/2+style.autorotateThickness)+"px";button.appendChild(autorotate_equator);psv.addAction("autorotate",toggleActive);break;case"zoom":button=document.createElement("div");button.style.cssFloat="left";button.style.boxSizing="inherit";var zoom_minus=document.createElement("div");zoom_minus.style.cssFloat="left";zoom_minus.style.boxSizing="inherit";zoom_minus.style.padding="10px";zoom_minus.style.height=style.buttonsHeight+"px";zoom_minus.style.backgroundColor=style.buttonsBackgroundColor;zoom_minus.style.lineHeight=style.buttonsHeight+"px";zoom_minus.style.color=style.buttonsColor;zoom_minus.style.cursor="pointer";zoom_minus.textContent="-";addEvent(zoom_minus,"click",function(){psv.zoomOut()});button.appendChild(zoom_minus);zoom_range_bg=document.createElement("div");zoom_range_bg.style.cssFloat="left";zoom_range_bg.style.boxSizing="inherit";zoom_range_bg.style.padding=10+(style.buttonsHeight-style.zoomRangeThickness)/2+"px 5px";zoom_range_bg.style.backgroundColor=style.buttonsBackgroundColor;zoom_range_bg.style.cursor="pointer";button.appendChild(zoom_range_bg);zoom_range=document.createElement("div");zoom_range.style.boxSizing="inherit";zoom_range.style.width=style.zoomRangeWidth+"px";zoom_range.style.height=style.zoomRangeThickness+"px";zoom_range.style.backgroundColor=style.buttonsColor;zoom_range.style.position="relative";zoom_range_bg.appendChild(zoom_range);zoom_value=document.createElement("div");zoom_value.style.position="absolute";zoom_value.style.top=(style.zoomRangeThickness-style.zoomRangeDisk)/2+"px";zoom_value.style.left=-(style.zoomRangeDisk/2)+"px";zoom_value.style.boxSizing="inherit";zoom_value.style.width=style.zoomRangeDisk+"px";zoom_value.style.height=style.zoomRangeDisk+"px";zoom_value.style.borderRadius="50%";zoom_value.style.backgroundColor=style.buttonsColor;psv.addAction("zoom-updated",moveZoomValue);addEvent(zoom_range_bg,"mousedown",initZoomChangeWithMouse);addEvent(zoom_range_bg,"touchstart",initZoomChangeByTouch);addEvent(document,"mousemove",changeZoomWithMouse);addEvent(document,"touchmove",changeZoomByTouch);addEvent(document,"mouseup",stopZoomChange);addEvent(document,"touchend",stopZoomChange);addEvent(zoom_range_bg,"mousewheel",changeZoomOnMouseWheel);addEvent(zoom_range_bg,"DOMMouseScroll",changeZoomOnMouseWheel);zoom_range.appendChild(zoom_value);var zoom_plus=document.createElement("div");zoom_plus.style.cssFloat="left";zoom_plus.style.boxSizing="inherit";zoom_plus.style.padding="10px";zoom_plus.style.height=style.buttonsHeight+"px";zoom_plus.style.backgroundColor=style.buttonsBackgroundColor;zoom_plus.style.lineHeight=style.buttonsHeight+"px";zoom_plus.style.color=style.buttonsColor;
zoom_plus.style.cursor="pointer";zoom_plus.textContent="+";addEvent(zoom_plus,"click",function(){psv.zoomIn()});button.appendChild(zoom_plus);break;case"fullscreen":var fullscreen_width=style.buttonsHeight*style.fullscreenRatio;var fullscreen_vertical_space=style.buttonsHeight*.3;var fullscreen_vertical_border=(style.buttonsHeight-fullscreen_vertical_space)/2;var fullscreen_horizontal_space=fullscreen_width*.3;var fullscreen_horizontal_border=(fullscreen_width-fullscreen_horizontal_space)/2-style.fullscreenThickness;var fullscreen_vertical_int=style.buttonsHeight-style.fullscreenThickness*2;button=document.createElement("div");button.style.cssFloat="right";button.style.boxSizing="inherit";button.style.padding="10px";button.style.width=fullscreen_width+"px";button.style.height=style.buttonsHeight+"px";button.style.backgroundColor=style.buttonsBackgroundColor;button.style.cursor="pointer";addEvent(button,"click",function(){psv.toggleFullscreen()});var fullscreen_left=document.createElement("div");fullscreen_left.style.cssFloat="left";fullscreen_left.style.boxSizing="inherit";fullscreen_left.style.width=style.fullscreenThickness+"px";fullscreen_left.style.height=fullscreen_vertical_space+"px";fullscreen_left.style.borderStyle="solid";fullscreen_left.style.borderColor=style.buttonsColor+" transparent";fullscreen_left.style.borderWidth=fullscreen_vertical_border+"px 0";button.appendChild(fullscreen_left);var fullscreen_tb_1=document.createElement("div");fullscreen_tb_1.style.cssFloat="left";fullscreen_tb_1.style.boxSizing="inherit";fullscreen_tb_1.style.width=fullscreen_horizontal_border+"px";fullscreen_tb_1.style.height=fullscreen_vertical_int+"px";fullscreen_tb_1.style.borderStyle="solid";fullscreen_tb_1.style.borderColor=style.buttonsColor+" transparent";fullscreen_tb_1.style.borderWidth=style.fullscreenThickness+"px 0";button.appendChild(fullscreen_tb_1);var fullscreen_tb_2=document.createElement("div");fullscreen_tb_2.style.cssFloat="left";fullscreen_tb_2.style.boxSizing="inherit";fullscreen_tb_2.style.marginLeft=fullscreen_horizontal_space+"px";fullscreen_tb_2.style.width=fullscreen_horizontal_border+"px";fullscreen_tb_2.style.height=fullscreen_vertical_int+"px";fullscreen_tb_2.style.borderStyle="solid";fullscreen_tb_2.style.borderColor=style.buttonsColor+" transparent";fullscreen_tb_2.style.borderWidth=style.fullscreenThickness+"px 0";button.appendChild(fullscreen_tb_2);var fullscreen_right=document.createElement("div");fullscreen_right.style.cssFloat="left";fullscreen_right.style.boxSizing="inherit";fullscreen_right.style.width=style.fullscreenThickness+"px";fullscreen_right.style.height=fullscreen_vertical_space+"px";fullscreen_right.style.borderStyle="solid";fullscreen_right.style.borderColor=style.buttonsColor+" transparent";fullscreen_right.style.borderWidth=fullscreen_vertical_border+"px 0";button.appendChild(fullscreen_right);var fullscreen_clearer=document.createElement("div");fullscreen_clearer.style.clear="left";button.appendChild(fullscreen_clearer);psv.addAction("fullscreen-mode",toggleActive);break;case"orientation":var gyroscope_sphere_width=style.buttonsHeight-style.gyroscopeThickness*2;var gyroscope_ellipses_big_axis=gyroscope_sphere_width-style.gyroscopeThickness*4;var gyroscope_ellipses_little_axis=gyroscope_sphere_width/10;button=document.createElement("div");button.style.cssFloat="right";button.style.boxSizing="inherit";button.style.padding="10px";button.style.width=style.buttonsHeight+"px";button.style.height=style.buttonsHeight+"px";button.style.backgroundColor=style.buttonsBackgroundColor;button.style.position="relative";button.style.cursor="pointer";addEvent(button,"click",function(){psv.toggleDeviceOrientation()});var gyroscope_sphere=document.createElement("div");gyroscope_sphere.style.boxSizing="inherit";gyroscope_sphere.style.width=gyroscope_sphere_width+"px";gyroscope_sphere.style.height=gyroscope_sphere_width+"px";gyroscope_sphere.style.borderRadius="50%";gyroscope_sphere.style.border=style.gyroscopeThickness+"px solid "+style.buttonsColor;button.appendChild(gyroscope_sphere);var gyroscope_hor_ellipsis=document.createElement("div");gyroscope_hor_ellipsis.style.boxSizing="inherit";gyroscope_hor_ellipsis.style.width=gyroscope_ellipses_big_axis+"px";gyroscope_hor_ellipsis.style.height=gyroscope_ellipses_little_axis+"px";gyroscope_hor_ellipsis.style.borderRadius="50%";gyroscope_hor_ellipsis.style.border=style.gyroscopeThickness+"px solid "+style.buttonsColor;gyroscope_hor_ellipsis.style.position="absolute";gyroscope_hor_ellipsis.style.top="50%";gyroscope_hor_ellipsis.style.left="50%";gyroscope_hor_ellipsis.style.marginTop=-(gyroscope_ellipses_little_axis/2+style.gyroscopeThickness)+"px";gyroscope_hor_ellipsis.style.marginLeft=-(gyroscope_ellipses_big_axis/2+style.gyroscopeThickness)+"px";button.appendChild(gyroscope_hor_ellipsis);var gyroscope_ver_ellipsis=document.createElement("div");gyroscope_ver_ellipsis.style.boxSizing="inherit";gyroscope_ver_ellipsis.style.width=gyroscope_ellipses_little_axis+"px";gyroscope_ver_ellipsis.style.height=gyroscope_ellipses_big_axis+"px";gyroscope_ver_ellipsis.style.borderRadius="50%";gyroscope_ver_ellipsis.style.border=style.gyroscopeThickness+"px solid "+style.buttonsColor;gyroscope_ver_ellipsis.style.position="absolute";gyroscope_ver_ellipsis.style.top="50%";gyroscope_ver_ellipsis.style.left="50%";gyroscope_ver_ellipsis.style.marginTop=-(gyroscope_ellipses_big_axis/2+style.gyroscopeThickness)+"px";gyroscope_ver_ellipsis.style.marginLeft=-(gyroscope_ellipses_little_axis/2+style.gyroscopeThickness)+"px";button.appendChild(gyroscope_ver_ellipsis);psv.addAction("device-orientation",toggleActive);break;case"virtual-reality":var vr_width=style.buttonsHeight*style.virtualRealityRatio;var vr_eye_diameter=vr_width/4;var vr_eye_offset=vr_eye_diameter/2;button=document.createElement("div");button.style.cssFloat="right";button.style.position="relative";button.style.boxSizing="inherit";button.style.padding="10px";button.style.width=vr_width+"px";button.style.height=style.buttonsHeight+"px";button.style.backgroundColor=style.buttonsBackgroundColor;button.style.cursor="pointer";addEvent(button,"click",function(){psv.toggleStereo()});var vr_rect=document.createElement("div");vr_rect.style.boxSizing="inherit";vr_rect.style.width=vr_width+"px";vr_rect.style.height=style.buttonsHeight+"px";vr_rect.style.borderRadius=style.virtualRealityBorderRadius+"px";vr_rect.style.backgroundColor=style.buttonsColor;button.appendChild(vr_rect);var left_eye=document.createElement("div");left_eye.style.boxSizing="inherit";left_eye.style.width=vr_eye_diameter+"px";left_eye.style.height=vr_eye_diameter+"px";left_eye.style.position="absolute";left_eye.style.top=vr_eye_offset+10+"px";left_eye.style.left=vr_eye_offset+10+"px";left_eye.style.borderRadius="50%";left_eye.style.backgroundColor=style.backgroundColor;button.appendChild(left_eye);var right_eye=document.createElement("div");right_eye.style.boxSizing="inherit";right_eye.style.width=vr_eye_diameter+"px";right_eye.style.height=vr_eye_diameter+"px";right_eye.style.position="absolute";right_eye.style.top=vr_eye_offset+10+"px";right_eye.style.right=vr_eye_offset+10+"px";right_eye.style.borderRadius="50%";right_eye.style.backgroundColor=style.backgroundColor;button.appendChild(right_eye);var nose=document.createElement("div");nose.style.boxSizing="inherit";nose.style.width=vr_eye_diameter+"px";nose.style.height=style.buttonsHeight/2+"px";nose.style.position="absolute";nose.style.left="50%";nose.style.bottom="10px";nose.style.marginLeft=-(vr_eye_diameter/2)+"px";nose.style.borderTopLeftRadius="50% 60%";nose.style.borderTopRightRadius="50% 60%";nose.style.backgroundColor=style.backgroundColor;button.appendChild(nose);psv.addAction("stereo-effect",toggleActive);break}};this.getButton=function(){return button};var toggleActive=function(active){if(active)button.style.backgroundColor=style.activeButtonsBackgroundColor;else button.style.backgroundColor=style.buttonsBackgroundColor};var moveZoomValue=function(level){zoom_value.style.left=level/100*style.zoomRangeWidth-style.zoomRangeDisk/2+"px"};var initZoomChangeWithMouse=function(evt){initZoomChange(parseInt(evt.clientX))};var initZoomChangeByTouch=function(evt){var touch=evt.touches[0];if(touch.target==zoom_range_bg||touch.target==zoom_range||touch.target==zoom_value)initZoomChange(parseInt(touch.clientX))};var initZoomChange=function(x){mousedown=true;changeZoom(x)};var stopZoomChange=function(evt){mousedown=false};var changeZoomWithMouse=function(evt){evt.preventDefault();changeZoom(parseInt(evt.clientX))};var changeZoomByTouch=function(evt){var touch=evt.touches[0];if(touch.target==zoom_range_bg||touch.target==zoom_range||touch.target==zoom_value){evt.preventDefault();changeZoom(parseInt(touch.clientX))}};var changeZoom=function(x){if(mousedown){var user_input=x-zoom_range.getBoundingClientRect().left;var zoom_level=user_input/style.zoomRangeWidth*100;psv.zoom(zoom_level)}};var changeZoomOnMouseWheel=function(evt){psv.mouseWheel(evt)};var zoom_range_bg,zoom_range,zoom_value;var mousedown=false;var button;create()};var Sphoords=function(){var detectBrowserEngine=function(){var ua=navigator.userAgent;if(/Gecko\/[0-9.]+/.test(ua))return"Gecko";if(/Chrome\/[0-9.]+/.test(ua))return"Blink";if(/AppleWebKit\/[0-9.]+/.test(ua))return"WebKit";if(/Trident\/[0-9.]+/.test(ua))return"Trident";if(/Opera\/[0-9.]+/.test(ua))return"Presto";return"Gecko"};var getPrincipalAngle=function(angle){return angle-Math.floor(angle/360)*360};this.start=function(){if(Sphoords.isDeviceOrientationSupported){window.addEventListener("deviceorientation",onDeviceOrientation,false);recording=true;return true}else{console.log("Device Orientation API not supported");return false}};this.stop=function(){if(recording){window.removeEventListener("deviceorientation",onDeviceOrientation,false);recording=false}};this.toggle=function(){if(recording)this.stop();else this.start()};this.isEventAttached=function(){return recording};var onDeviceOrientation=function(evt){orientation=Sphoords.getScreenOrientation();var theta=0,phi=0;switch(orientation){case"portrait-primary":theta=evt.alpha+evt.gamma;phi=evt.beta-90;break;case"landscape-primary":theta=evt.alpha+evt.beta-90;phi=-evt.gamma-90;if(Math.abs(evt.beta)>90){switch(engine){case"Blink":phi+=180;break;case"Gecko":default:phi=-phi;break}}if(engine==="WebKit"&&!!window.orientation){if(phi<0){phi=(phi+180)*-1}if(theta>=180){theta=theta-180}else{theta=theta+180}}break;case"landscape-secondary":theta=evt.alpha-evt.beta+90;phi=evt.gamma-90;if(Math.abs(evt.beta)>90){switch(engine){case"Blink":phi+=180;break;case"Gecko":default:phi=-phi;break}}if(engine==="WebKit"&&!!window.orientation){if(phi<0){phi=(phi+180)*-1}if(theta>=180){theta=theta-180}else{theta=theta+180}}break;case"portrait-secondary":theta=evt.alpha-evt.gamma;phi=180-(evt.beta-90);phi=270-evt.beta;break}phi=getPrincipalAngle(phi);if(phi>=180)phi-=360;long_deg=getPrincipalAngle(theta);lat_deg=Math.max(-90,Math.min(90,phi));long=long_deg*DEG_TO_RAD;lat=lat_deg*DEG_TO_RAD;executeListeners()};this.getCoordinates=function(){return{longitude:long,latitude:lat}};this.getCoordinatesInDegrees=function(){return{longitude:long_deg,latitude:lat_deg}};this.getScreenOrientation=function(){return orientation};this.addListener=function(f){listeners.push(f)};var executeListeners=function(){if(!!listeners.length){for(var i=0,l=listeners.length;i<l;++i){listeners[i]({longitude:long,latitude:lat})}}};var recording=false;var long_deg=0,lat_deg=0;var long=0,lat=0;var DEG_TO_RAD=Math.PI/180;var orientation=Sphoords.getScreenOrientation();var engine=detectBrowserEngine();var listeners=[]};Sphoords.getScreenOrientation=function(){var screen_orientation=null;if(!!screen.orientation)screen_orientation=screen.orientation;else if(!!screen.mozOrientation)screen_orientation=screen.mozOrientation;else if(!!screen.msOrientation)screen_orientation=screen.msOrientation;else if(!!window.orientation||window.orientation===0)switch(window.orientation){case 0:screen_orientation="portrait-primary";break;case 180:screen_orientation="portrait-secondary";break;case-90:screen_orientation="landscape-primary";break;case 90:screen_orientation="landscape-secondary";break}return screen_orientation!==null&&typeof screen_orientation=="object"?screen_orientation.type:screen_orientation};Sphoords.isDeviceOrientationSupported=false;(function(){if(!!window.DeviceOrientationEvent&&Sphoords.getScreenOrientation()!==null){function testDeviceOrientation(evt){if(evt!==null&&evt.alpha!==null){Sphoords.isDeviceOrientationSupported=true;window.removeEventListener("deviceorientation",testDeviceOrientation)}}window.addEventListener("deviceorientation",testDeviceOrientation)}})();
;/*
	软件名称：ckplayer
	软件版本：X1
	软件作者：niandeng
	软件网站：http://www.ckplayer.com
	--------------------------------------------------------------------------------------------------------------------
	开发说明：
	使用的主要程序语言：javascript(js)及actionscript3.0(as3.0)(as3.0主要用于flashplayer部分的开发，不在该页面呈现)
	功能：播放视频
	特点：兼容HTML5-VIDEO(优先)以及FlashPlayer
	--------------------------------------------------------------------------------------------------------------------
	使用开源代码部分：
	1：flashls-http://flashls.org/
	=====================================================================================================================
*/
function ckplayerConfig() {
	return {
		flashvars: {},//用来补充flashvars里的对象
		languagePath: '',//语言包文件地址
		stylePath: '',//风格包文件地址
		config: {
			fullInteractive: true,//是否开启交互功能
			delay: 30,//延迟加载视频，单位：毫秒
			timeFrequency: 100,//计算当前播放时间和加载量的时间频率，单位：毫秒
			autoLoad: true,//视频是否自动加载
			loadNext: 0,//多段视频预加载的段数，设置成0则全部加载
			definition: true,//是否使用清晰度组件
			subtitle:false,//是否使用多字幕切换组件
			playbackRate:true,//是否使用倍速播放组件
			smartRemove: true,//是否使用智能清理，使用该功能则在多段时当前播放段之前的段都会被清除出内存，减少对内存的使用
			bufferTime: 200,//缓存区的长度，单位：毫秒,不要小于10
			rtmpBufferTime:0,//rtmp视频缓存区长度，单位：毫秒
			click: true,//是否支持屏幕单击暂停
			doubleClick: true,//是否支持屏幕双击全屏
			doubleClickInterval: 200,//判断双击的标准，即二次单击间隔的时间差之内判断为是双击，单位：毫秒
			keyDown: {
				space: true,//是否启用空格键切换播放/暂停
				left: true,//是否启用左方向键快退
				right: true,//是否启用右方向键快进
				up: true,//是否支持上方向键增加音量
				down: true //是否支持下方向键减少音量
			},
			timeJump: 10,//快进快退时的秒数
			volumeJump: 0.1,//音量调整的数量，大于0小于1的小数
			timeScheduleAdjust: 1,//是否可调节调节栏,0不启用，1是启用，2是只能前进（向右拖动），3是只能后退，4是只能前进但能回到第一次拖动时的位置，5是看过的地方可以随意拖动
			previewDefaultLoad: true,//预览图片是否默认加载，优点是鼠标第一次经过进度条即可显示预览图片
			promptSpotTime: false,//提示点文字是否在前面加上对应时间
			buttonMode: {
				player: false,//鼠标在播放器上是否显示可点击形态
				controlBar: false,//鼠标在控制栏上是否显示可点击形态
				timeSchedule: true,//鼠标在时间进度条上是否显示可点击形态
				volumeSchedule: true //鼠标在音量调节栏上是否显示可点击形态
			},
			liveAndVod: { //直播+点播=回播功能
				open: false,//是否开启，开启该功能需要设置flashvars里live=true
				vodTime: 2,//可以回看的整点数
				start: 'start' //回看请求参数
			},
			usehardwareeecoder:false,//是否采用硬件加速，只针对flashplayer有效
			errorNum: 3,//错误重连次数
			playCorrect: false,//是否需要错误修正，这是针对rtmp的
			timeCorrect: true,//http视频播放时间错误纠正，有些因为视频格式的问题导致视频没有实际播放结束视频文件就返回了stop命令
			m3u8Definition: { //m3u8自动清晰度时按关键字来进行判断
				//tags:['200k','110k','400k','600k','1000k']
			},
			m3u8MaxBufferLength: 30,//m3u8每次缓冲时间，单位：秒数
			split: '|',//当视频地址采用字符形式并且需要使用逗号或其它符号来切割数组里定义
			timeStamp: '',//一个地址，用来请求当前时间戳，用于播放器内部时间效准
			mobileVolumeBarShow: false,//在移动端是否显示音量调节按钮
			addCallback: 'adPlay,adPause,playOrPause,videoPlay,videoPause,videoMute,videoEscMute,videoClear,changeVolume,fastBack,fastNext,videoSeek,newVideo,getMetaDate,videoRotation,videoBrightness,videoContrast,videoSaturation,videoHue,videoZoom,videoProportion,videoError,addListener,removeListener,addElement,getElement,deleteElement,elementShow,animate,animateResume,animatePause,deleteAnimate,changeConfig,getConfig,openUrl,fullScreen,quitFullScreen,switchFull,screenshot,custom,changeControlBarShow,getCurrentSrc,changeDefinition,changeSubtitles,changeSubtitlesSize'//需要支持的事件
		},
		menu: { //版权名称支持
			ckkey: '',
			name: '',
			link: '',
			version: '',
			domain: '',
			more: []
		},
		style: { //风格部分内容配置，这里主要配置loading和logo以及广告的部分内容
			loading: { //视频加载前显示在播放器中间的图片，如果不需要可以删除该属性
				file: 'data:image/swf;base64,Q1dTCrUjAAB4nKWZBzRc/bf3BwmJJEgQoo0SEd3odRA1iU70PjqjzYg6SESITiJatKiJMLroRIsuehC999FHveT/PBn3/p/33vu+71rG+pzf2fu7z3ef39nrzBorAFACgF0FAJBjAaRvkwMAAB/iK1cBAFFnMwthNWlZWjeonT1M+PxIjN4KDncU5uR0dXXlcOXhcHC25AQJCQlxcnFzcnOzn0eww9zt4SZu7PYwBnow7W8FaXMYxNnaEW7tYE97cWxi6uACF6On/0vWDer4R9YexmFi5mBqzgFxgHK6mThygji4OC90zoOEpZzNTeAOzhoODnZgyYsoWlk7E5gVrYqzg4U5DHYub2JHK6XOJ8r5X6Mv5ZtLn3/A3FwgbnYuAXZuIQ0QvzAvjzBIgJVLUJiL61LuvyL/lapoDjcxM4GbYJIv/ng0QHzCfOdpQpeT/1PsX+kOZtYW7v+rZEwkrSjnf+ne/7qfior/fUehUM6/o2FwNXOL/z4apuHuaM6pZg5zcHGGmJ+HM/x1RxQVhR/bw+Am9hDzx9Lg8wUOa2szYUkuLhnQIyFBWUleXhluEOiRAA+vlJS0AJ8UnwA/D8+j30b/c+rfatIOEBeouT38LzWz/wu1S6l/qyk7W1tan++Jf1AV4OLi5+PjluGTlBaSAYFAQtx80o94QYICQtz8/FJ/3Yx/lvhzrebO1s/NzWSdHaC/74KjiTPM/KJTYvR/t+qiTb/7K2z9720Skv2fjP1b6t9qZv9gSOh/MvRvqX+rOfz/tOn/KEH758Zg+vT/vKXNIH92qKOLs93vsWMG4TS3M7+oBjvfpaDfU8IMImzh4Aw1gYNNHB3trCEmF4KcbuwwKweIravJc3N2i4uJIcqJCfzHS+L8a/CBaQFS2OfjsJb05vl/LMDch4r5OCQtCAAQv75JfrFy9TuAC+A2spaI56XxbK+FKa4/7vFGNXGv/CO8q69or8TIBNHeEX7R4+l7hYsu4hH2FUnhhzJXtDQ0tVVJTu+SPPJ4CScpoP2YnULPtnk0weOQJDqh5K4uMZy4jR7r7qhyXuhM2K6uhXVVv/1uNh/3NjGU7X6dzqAYuwQ/zOal3cmynJmnq2sM8LCWaS2HYN8lW7C/ZWrylGlWpMzlHTuHQvQtahK6p4rOMeXMc9wicQNf9iYsnQdFDdbMf1Vc+f4kWHdEw7vXyGUmJm7qq0Ev1jAXkZs796YsQT4T0K0IMCxGOAy+q412HUsa3Zn2pwvScoUX3uPh1r1LnKrGY8GXcyIQGx6A0+dr9bNGzAd2ONfyKVVCh8l4hmgSyPOi2r/Os/0F4RB2gNEVGyOcsFqcD8grefqAPEPsGiGC/lXTjlnsp5UfhJKmNHX79Qer4gI6VE+HfGpwNqoa8mKKCuLi4gi/ucyaWVrqiW3U81PMVLpcL5jYlnVFJ1Kqn/heba2L6upoqcSWgfqinSSeX+MaoIydxVKA4z3wxOrD8XUvkHAX3lzmnVzkn6SHzMZsvHBQxpErxV45TBbn6Rdz1XzJNjzR2hYQHR7Q5iVGbbY9X+x4uL6i2rGQBTpLbhKMXSdUcMTihvqmchtfs/WTYfcrkfwilma94/GOfSZwqauQ13iBJOWQdHLnqK5yTsI64MQhY9TFo3Hot+Q3epzoUpHS56beieZ4IbB53QfbqNt2o46KaQtxzvOqSnVuV/sItDLp7FcjS64/sT+y8jROZ2/5QYvFSUwOe6odUhozxxzAj5UglyTO0ws5mHwYN3ahizd8x65aan9hP2TmOPmAvLPYlMQTrNbQaNXceIW0747RHvvrIvIc5k077ODqKN9jiy+M2O4othob7A6TI8tCbdsgJohCPYpXoeFaCVvzL+67OdUgMjfr4xLWvm8WCo/f/RzVRudvoSZ1qkJdF/EKO8h+fJncTZCTlbHhfdSAu4Rn3WB3l2kO5I2v5ivDrm37yXoV/U0j70fNS7OwGNHmrqKQVP3BiQ4JJYjsqBOFNIgCxd2nbLDw7fBF7Ykou91I+qujzwya4C8W3x+ZcYw7MOPG1Fdn3yns3R4a6TLc1pu55tAVzqxJT53i5SXJw6HMhLsY6aZS9ON4vdQrk9FdQS7JXHjLjqoFb+k63/R9kQhIaOyMi3WImKvdEkTLJ5aEy9mqOJowR4xonr4Ipj83DKMQDWadfOZF8nn6s0jhN3Xx/fh41+1pcsL3CUc2XmIv+nBMU/IZtRpY7NuTyiy8uGTx1cpPSGCdoSYT3BAT++LXt/aEBYJmGJhe9qUugdnWnaenBUo0fzpSzTN6o386lnVRH4ecsv2Ympqa1RM3qPG6h53zKTu7Zw6mdmAVHR/Psgob6koUqR4bG4Oj+XYZxpRkkbsoJn9CD+URpnU9t/G+k8Nd4mS5UTRkESZfHvOtO2etAu15gl7qy/IfkkBai/j4wH++HsjRCj7Kss3aWJakYOKe6/Qc32Q7AJyaP3PkzHv1VPXqhxs5G4Ix/WfctpKnubYaDYmUTWiwtbSqiD2BWSukbmtnApm7uL+LJpVS5ucAPjN6lnT+aUvi9Nrq1XKndkqIjSdunmNpfMJRUG/YbeLVYXHSZSwaMtTfKGszLdSmZYFbVYkMEOXt0dlaeMjOwvISK22jSi+GwyBkSqoDF4Gs6Mqy7ZmrfKRZgg6jA78C23/P5pzy7IFNWfY0R/RY1W4mvUFqLZcsbjuAgLzz5LBTRGsLtKph2eCBvVRPL4XbuQnbH6oPb4R/s0WpSotPOLJuoZttM7qVqk+O7OZb0ApSQXEWbN6zXaHmSy02MSHaXOIrS7X7i710BdZvyYGEhIRy5fpKob+Uhx5EmtD96hvJZGsDbn4ns7QEIVrNQzreTG7t6dTrf5ARar3pwzFOAW1HSUJf4gu0lHckvKW3JlAdrR6wnN1WO0gBqQmCewsOj3U/32Zo3pQcMl/1DEQ+Www3bd5F5x1oM89EkADJagK0/WiugD+YlW7dabGfIdI0DA1csJnS7SiQDJFmQ0p+++whjRRGbWS253gjmB2u2XdvQzyItLTiEsBuxuFKJpIvXqhNsLJ9n3Dt/brTj+xWtm1r0kxntgGTU/J4ffUYvh8aZmZjmuvUZfSh09EqcvVTmQNKW7aGaQ/m1MG4Q23gJW8iRQaE3/oGij+8w8N2ur6LoqsiMCigB3F6E04JSlQw8zXfGWdNHcd38a9lMmXvvQt7w6fXEaDic6vJfL9dDXr8sRaVWEbWOcRf52PNRxLMkqIPJ6lh6woy0An4urBCzuASqI+4w558dLCXhK7GJ9tRunl9k8edm5OZg95toTTkCkcXPXWrRQVvQ0yC34f5JlN2xphwFQaxeyv56enRHTrKP7RiJmyDY/xbtmrSQgkPw1455dd4N3n1uLIx4pIcZXOAFyv8T/psEfvaRsccO3oGoPcRWMKGQ+jXvN97Toi3U0NTa9uozPlL/ZUM5NKaKnCLRzY/6fIEEgrskdd8wS3oHjqtv+Z57Kqi0xk4y1H98Dn3frWYvkbQVmHNG33wI2HuhvAlPAiExfatzjpoMHLGD25W3OkPwzG7XmAfNW0mVcNAZeQ+cXvb5Cbl9PYtdEiNaJ3aLmvqxBsdUpvcPFvSJM4qgtTTwPIffDRLvdyIjW1a7diOgYXYiQ7qxZKZ+9PaVHPF+Y/eumrQ2bizm2r2f7w+k9YaJHyFIzeeen9f9b1+wnqeGouhp7kbt9bCR9HEadZpP2dYPMM9iKsAWes7xQQSB0fRBxNl0oghcn4FlC00RDeKEHHzGkJTK4RxVktw/NpGCTj0nYdD8QCShsRTN2l4TjOhhI98r1nHRVTGKxu/fDjoINArDHLfTGe3/mBpJZogLGzksHXxF/Iscu3Mw2H/M5lR2PXwQK55inhpXLTBIUvlvSw6jZXE2a4tOGkZmLE9KcfSSXhrfPRX6BafOppoyL9kwL5jTirm7MlaADLHJgcSrJggew1N1qL9SOxu+K3mQYniubuEOMB3MUiVYyjF6w1wQD0y2f9zNnbQN3wX7/XadPwpNgHCBfLy9drFtP7JWMHEid0+HfX8mkORVWFUw254l2FHMlhEayk7kRHK72Q3dF9JXF6kWWTCoC/qU5yej2zn942h17+KysWkdpmkKuC1BykHjcO6cfzgnaVgcDJfhlLWhi6NBviROQcYeKQ8Eni8XysdHqP8TTKN2p4C/Kjdtn+XtbZwWSuq+f3P0eFFhbCsLEIaPydPcMtOWTfEfE6mCrHeAnOgzltDaetqMQ9NLy1/1FWLGkB+ESwa+nhMt4Texs0QSxDJ3z7+YNk733lvmI/pqCC/vGjGfBsW/0sAvMiH/uiYUIN+eVQfwLxrYOAVQbMcVPDK4/5gZ20Q4aGB4YRhauFLS3WzPiam7/RS0WcFyaV93jbTJWQ78RSJLUCpk0iXpcWzFv6aCSa7j6Neox93AEkih7fau8PrvSWv6r/yyj8WtdPphIbLAF1DFOwzNiq71oXsqGRPttkOz2Z4+9KKYnfXr34R9Ihcat0/0y5ebqIFGvm9nTwdHx9PysvLIygtLW0+LM2YYTVRoAspYwYOkFreaw/IEzS0OQkSVx7yfNxa778famlErmfdp/B0zFb9wCp7PTesAHnKdRDu9c6NNm1iGDXqfyQu2jMTvr0kNOD26ugT9Ff/lDLy020B2Bz167HF6gyCnJxaGZJ2Hqq7VKpDyOznc+q6/pPmA++ygOHff87lqXzeQTRfxWEyg2zVdHMZD93bGXcKmjvK4vItiNqdX4h13WxnDd4Htiv4sEgl45azkAQZ+/j4mDY2/fypMzU5OWnn4LBh1tJxzahIw5uDyjKjnyd0TmoIVVF64yQxr0UlVAkf+OjuAeTV6WdFTnYnZOgcpKlw0KY2A5UIf0mxsbLzwcvoazLvZOdQ32kjkc9NlIRsy6aoyhmcxqkZWNRarsyRuSoUTLbMUXRc+bpJiwrYb0Ug5mjNN0cvoqfwcGBhyAytHJrw5s3ZIZUfrxd81AM70fCAhJofEdRS9kGiNjFr4+aEy/Sv1Aw9CLZUiTcynRILDAaPr6+v03BwcDQGt7W2vtkil4p35lyurDgcepYm8JoQwadscEKuhxf9LYDr/TSEDWVb8GaBLKNjZinnqvyUH/DIXxZ0u+np7NBsXzrntNvTbDpRYHGiwPLb0usQPtOwsF8rQl7Md4GHFAmUNVJ1vSyChcd+Cw3BqKna9PikmGJq4b4eM7muCVklaVxI2sLeW/mJ53cM+IFyR4otPc4IBrUhXloXKMOIg+jr4s4WpFj5Jw+1I3BDI+zhzsvBzAjvr8zRT3qJTP3g0k86XDjn8VxAGexdd5KUT1PCVU2MpvkeVBwQJUGsvP3Bb/uFRFNpFhN4fvCJW2XvsdPoNe4r4gOntR93XEdSj5hyb7nSAU3XG/V/8NsA0Ypjvnx8Mfknfe2bet9QkgXRT28n+2k0FH210a30ZriFnu9o4WlOwYOk/ZKdTokUo5HKuRUS6nJL3lA9vHFgN9DoWbjFaiS0dnvxcESZxujA2dRYOiQf2EuQRGgo8rCGHnyzSXt6bEBt5SnciXEPCHVnrU6OIIaWMKHcWBhrektwpYYOwQivQFuiinnUDlq0VlNrDOlmrz/qEtuGB7REOd1pkjdlQEyeGJEBp73R0GSVNRu9GfOq/Z/KywdtNZPXWvDmFr9c5QaL4ou32pzN0kp5dazzm1FV2AuFkTTjgCIr3tsy2waG497PtZGgn/Gbp7XmSAp7o6Pq2Q49PVLOAA9KcQTulpy/MYe+c38MtXVnKwCrxoQvC0/0lwPOr2thrDPXaCnIB56bwAvnvBmXN/KaBHygL2WVTja7kQ4sVqbyQY2p0JjiA/Gqmr98mz9szz7a02rM+xLwCzuMMNoCatrD3Rse1Lp2SCAAR86Lg5yD4glN6eKa1Bpl2nSVROR5orTTXMLSGRrlrwQviM7TZN9I2HxUbKSSrSL+cJ9oS1JIeCmg/yr7vg2ikt/oTh6SaKj2Jrow70DGiIbBEIJ0MMgHoWKHhzIGM9IHE5pWVm+hJHUlwE/QhRFXR2RLGNtEDkQlY2v7bEfkhISS9Tb59CHo4U9U2r5bQcGCJw0OVl3NsFGvW8Av5TEa9MVVd5MYo/3XAhRiKOchhb6EYbdsOrNzp2jeRGay2t7Wh+/Y1K36RGfuJX/Od3UkmgeaguVFDg7aVEIlRscKM3yAGew0Uwjl1aFjh9hGW+03NxC2m+mz6JHDjG6WY4N3/cf6omQf2eUiPjKO7PT1WA404W20p9+qerOSTyKAOlb50DSUcyB7fG1BImQO8gZRhiqDTQj5cXpXhHF0lEG3CXNc/A6M9Wmrql57nxVUdzZyS9W4a4lfscvehUCrPSiX5O+3O3ltgW3kP5yqHW0enAVC14obtbxCtWy8drVGGo4rtU3EOu/wjXqak/Dc5pkul0R5J1HC7L4qOofnNJQNTbXn1M4saSk3vF7Cm6PhiD8kza01BWlC9dfb7fEzemmB4Q4ipwtjUonBvIVjaWHWzZHJfvOriJq1HioBS//BGnmmQMJU781tYPNyQDThjAL5W7D8SvvZk6eRaNlEr+IDxQ8VXtTq+4kBXvUmD8meWe2k4at2D6S0to1MnASL25FFx35GIqfHiedTRkuJ2ZRspWHvfYr1lUt+4fKaCIU4jKcezsZx7spb9akafZjPU/uUXdPeoj19PBZL1dgWACduDlYbzDlDxiZ0jLtrbQbeqdo+f0REG+MKpqoi9CCPasWzhHYPBlyuMSN/9gvbptagKr8SzqQdDc7YPNDNtQzJd2P5kj49FDGG4IRTGRBNTs1BFz1WeYW+N9gQMgDf5ZAfHt04y5E9jc1djH1R2DBh3B3Hek1XNzfP5BMvn6FuZUK+rkH4iVDmbMNByrVEH7us9I1Gqt1juZVbLT12MtQv8QmonyZWz8RpWotldKy586ACrzm5EhI+d8YnfP78btl3FX96FgUOVy0dNNfQq+2J6cOc6CBxPZHRyQOgJ1Q05ERBqpcfGMC2kR9PaG7i74G43qmj8ovZQ2bNNjfznTo4JTe5qZpp/uNMcDJ9YfGWhfRpfa5BC5ncVdyAJz/8AokytvxwHj8ekIt6m0MgYP2tJDb2c8OPH9HJ0rJqOWJPkNVVwsWejrCIgDhCZlvnU7JO9fnsMWoum+v8AwbfVk+M6lJ9gwusCBqLZh9O69gnFr4HFWZOae70BhUwK4um5YYVP0CYYnnhEyTbJ1XaHqQpizLulgE5up4/P/NS5MBbXQVYWkpkYJPg17Ved3ScLB0dURP5Ke/yPkBa/IFy0nH+puQuCyvlSGjzftZaVIXxDmVWfunyHVPNQUnDulz19NofEtvLGsE2XZ2Q46j81ZmaN9QVb2CRj61PAhzWwNZO2w+c3qit5Ofhex5Fzz1hnJzCOjgAGBqOwVxd65qupiAab/J5Hun0iYnlnrm22eyPHpvj75elPfiisUDXvSp8K0tGrh8V/SQxC0bR64FI88g1aRt5bTTznjq+d7rV5LVNzeGXx+kJo3mJ6aSN0sa0kys33DwnzF/N5wTetqGhcYne2ytQ7Z0IP7hbe1dAPU9v2X1kXHmZT15Ma6JEe2t7u4XC81bFegxoKGXFC5JncOydORbgvYdK9N4oyiUQ2jBI0ZeitkRRTOtp5uaNlv4czp5Pb6poFnFiZdkHR1VXQBXUWHIZ3nlUG9o/mYuNrK8n44w4Iyaur5eQqEtGp8geMXeZjtp7uCvGpai1du5ApvghXuqrDO+nv5MA+aLNoVXkDf5CM68+ga27SlYq8dSOJezWufGaPCawyskPm4XOX3x0T/Y/PZbS5w1RyVNacbLuFM5Vz2qZ5QutlUF+/hkZGf026X3UHZrVjY3z7wvWYOW8N7++ComTxbxrjIhYtUahFrqJbsyemZhIWD3Moj6fiOIPMz8iFBNqdi0cHfNrExM/zZSCvBYrwzPDEipqjJgRscIWlNOj2uAd6+/VX3ERyaNjG/Uk4O93ZsEmJZFFpZC6HMv+lewPN8Kz0SmZxgWadVE2u8eyAWThqTOZuOmrX33lBKgaTlvwjo/KeibVW0aK3V2NspRESjOzHH4OV+6zcmZkUI9N1JxYZkVF2RswnTFNEF7HMjUF6HZLjNwmaURNbXSDppda52aLxdjX2rtNIUDP/vb2MUH5BOSE7QnXLFlm44PMsOT5LZNlbfuH/DwPZHmbythJjVCD7aD1yPaCJryI0rkrL3Xsu5Bzcy6Nnk58aoP9H9feq8t771J+iVPDvd+M7fRFRgYWL+GtfKrkrRxqKCfrrK8SHDgZliZbRXTD29s3h1XC9sT6LN+k9mTs88DXH+vrzc6p7WWdKCbYNL56rZF6sfLysHXe87hvX/nFuBcqi+EdzAPNwsUeW7oKSwHLfGXFBO0ZixwMO2WkA7WqRvtCuOxjoRujxVhRCdhrI1i5ejjsetjFhnRCcbaPH0t4iRJRthfc7iQPCpomn+R7Bffn9RtOObXornGpdt3wdz89zTw10lPfVofOhAihBoyaAvKGe8dE2zTO316EMr28YeQCclLfGbOES4GO7OkHiFccSNVuv01EOekzidId9a8cX+rWG7vYlPMthet4aekiZz66w1JkbqyDGK9aDYYs3RglI2sBPfIiIksn02gpKVv4SisrG4o9mNvQGRLCyKiqytHVfEZNDD21CyGIfXtjvP2gjSSPLdIndvsem44fjz/h08H6YlBUE3xWb8P9aDIL7UObt7M/88SGVs+JgthjYfJ1x/ttKCWlPTjcRukdRL1K2ok42W8bddco5iNkSdRmp0pPwHjbYnJ3CGlEzWVcf1wnEf0WZUdOTBYX5ROrPlRFNpNVDqkVcg9OrdmhtlxfEODb59qt7LcUW4svzoFT116niZ8gbXufKNHWn3jQ1nmUF25ry7ugCCLmiweSbTBp9va9uEXp2yw7PTPWGkbNE+DpKTLcpsCP8JIPRSpMrRkOuire42S/TakTz/N0ABCKsn46iITrqFMiJ10METDvZ+zC6WElz9PTJwZuIUICKeeW00lvkGEHEOLEcGABEfAFWc1BVk70Yam1yemZZ37jcfI7qjNvVGowDOasqn48emeXFTJu9OSD3eruBCv4uz6U6sMhumzZAy69cHNMg+UrKhmpjCogHrCwXn9Jg9blmKNDHALm5iQMqDdnwuuiWetSpSSe76WeBYfRvD//crPGURR4L76IS068I1HgfVv+pxLlTyfya0Ztsey7PNoVpbY3k99/2aAolDeSW/hEbPAMbxy1d4oS+SwZeaa+FkROzoMbC8L53o3X1ubLrufrh/ei7UlKDY3bEZSWc2Pan4Da0LPpF2KRljJBYiLgSACoWRQ/vGgk6F7+cxhup+zjQ0tr3DI4PKwMllcCuxZCRzc495Zd1toi6IbyQihcdgNuM3AgBmrPWpu7Eq1PDm+s6Bu0hL5vVXtrBf0YfSNHbHjvbKIQJVgLYAIAANgAq4sfjLEmAVhSWICfEoCr54sAIlJkCg1e4U2qApyCHSokAPAaFxfrPBZQC6A9P43zO0k+SskXC3B2dgYguoVMua9ceJOC5TnYT7YOEIgri30edK5VCyg/j78CcAQQpgAACAA2UfkOXg+BQSPi/GQcoEPQogMQ0gEADJ51AM7e49f/Pn0Tgdfzj2cBtKRdnhRf+qC9Go0Akg4uLGhuCf/4qO/1AHlArPWDUbWo3EoxAElRHSBKTZGZmRGA6ykPsCz9eT9o8HOJbuZo+qdAAHOsMfaong20ugxATBCBxdWrWJrBqPfcA8Bs6Yt1Pz1eTe0J4OZeBKAbWvgYcHadCHBhA+tfDbgCAEicH59dHzo3hwt4Bgi6WL0KoMQFXJwJxL2KBaC8tonhG5MYJujB8O1LTFKHYbJ8DFOkYJg6AsO0vhhmcMTwg0vMbIxhNhUMc0pgmJsLw3y0GBYkwrDIJQZf8ihxyaPUJY+yl3w9vuRL4ZIv5Uusdsnjs0setS951Lvky/CSL5NLvswuseUljzaXPEIveXS85At2yZfLJV9ul9jzkkfv3x4DLvgeju8fvG78Bwkl/iAp7R+kxCAdRuHB5B9kq/uD3Cl/UBBTAowpIY3BJ5hqKpgSmpgSepgSJpgSlpgSUAzCMNXcMSV8/pQgw8fg3T8lyOj+6JKxY1DojxiZDCZNFZOmj4m1wsTC/8SSAv6skpL/SSPlxKzKYVYNMavP/6wSU2LwKQY9LvD1Bd5W+5sIjX8/3G9wcXHOn+27AIZJ8Wvn2wqA92fYYRPlRmD74dDdr7v4Hfl88v0elXmO2H4G+Y+5Lq0BaC8G4lqa5ZWpj1k4tCK4kvRyMkrXG2S7cC+K4eKei/4u9h8UUd6/',
				align: 'center',
				vAlign: 'middle',
				offsetX: -100,
				offsetY: -40
			},
			logo: { //显示在右上角的logo图片，如果不需要可以删除该属性
				file: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAUCAYAAAD4BKGuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAVTSURBVHja1Fl/aJVVGP4cw/mH5tUWi3I53cA0WbeIzMgaq6lQoVawm0S6glHhIKM/TELICotqCxMSGWQRdFfRLEhc9mMxqA0rbdS2wsV0GkZXuaKUWlHvgeeNh7f3u1du3Ft74eGcnXu+c873vD/Pt0nZbDZyZL2gWZAQTBH8IjggeEjgPZASPIB+g/P7EsGT6J/BfHfjHFIv2Jpjj/+dlDskvCm42Jk7X3C7YJOgw/z2oOBGwdEYRW0RVAjOCZ4ugNggqwU3CTLRBJFyQ+xuwVRY14igB78tE9QKpgmeEHwkGKRnq9AeMesHRWwEsYGUxwSdBZ51ecweE4Lct0DsOVjaZvptA8jfC4JfghWpXIJ2jMY+EDShf1pwh6DvX5x1GtpDE43cNFlfhyFWpQ9xd5FgFo3fRi++C+2nCBNBRgU3O6RsEyyEQv4QLMb4CcE9RlFBLqS1WZ6BZ83A35ofVhuvfE5QJrjWebdgCJOx51qM1QgewbMzsO57MDQrB9DeC8ObHd5Xyb2eiNiQQxmtgkZBr+OuZwV7BIcF1RgbF1wTE2MbEccX48VY9sMzBilhTke/m+b1Q9lefpgruI7OsYhIGzPJuAnn3+6EM7vu1YKl5vkrYRSfCGZivCxoMklk7M5j6eFlXyRNRSAvAoFf0Fo/CC7LkbwuQjsZsf0qwbuI9wlYgIqGl6NEzDYibJ/gbmAfxpKoMDRcaSK8xZzjZbK+NMhSYoNSngV5e+ksKXp+JdqZwDDmdpSbsqa9gNAyi5JalSGv3iQ+dtNK9HvI+sNBh2AhvNYVaH+msRtAdsa4ehoKCuQsoP2PY8+kCSkJ5IRWjD2FZ4/BOFSWYv9KhI40eUKQ31CqdnLM1c1OOnHufKSS+iEZvgHNhji8g1yT5VZKdCnHO+ajvrYK/I7GkuSWjwvq8Mzl5M79NF89aCHaBNXmWv0sQVUUZEDwsDnbr2i9s31lKyGuFs7kITEBC+snJaToRYIFrRN0CeYgoSUxJ23WUm85eB41b4IUuIvGtyIMVMY8lzHGMoYworF7J/onKYk10/wVQL6zXYr+Zq9aOEhuXZPDel8Q3If+HMzTeHPKlForEK+mws3SMfH2UMxNLIJbasKsoIQZwVLbKFkN4T1C3HxUMM+EkCAfgjwNV40Y304KriOP+jIHqa+jvYsqnH/kqzKaGCFZxWnoTqooxky8+dHUsOGwr6Jfi9jmlVVTHGLnot9L3qGWqCToWYYRF5fDa96mtb93yI2g8B0IWxlTHWmi/hOG00D4mEJfJ5WhQX7ySCsDUaNkJeud6+sgXCgs3OLEG2/xdZSh10JBeiB1zQU0HuQdSib60rOdm9kFToIL8hmFiRHzm1YM0ylet5k579OFpcUk4I0oD0/QuJ7tcBy5ERY6ixdrh5uNwN3bUV7pd4E+J958HmPxbRRydqK/in6vxj5aH9din/udEPKtuU1GqBL24xJwBInQWiHLcbQVKBXTzkVpHP0tWHsIpZUqPeWcrScXuX2ImRkqlufBhdQl15ig3WLKH0/SeAmtD+uprBqGx1ThhlWN5LKG4lcNKbDblFDjVDU0wWK7yLLqnPNk6cKzKsfXt1GQmQQXSuwymhd3tr9lkvPJMUV152kc2PsmUEMxtzdPRk2SNX2DQ3Vhr02Is18LXjHVAz/bG0NEK8johus3UBiwyfkYlDkQUyLaWrwZBrbHMaB8Z3PJLaYk8IIVKKPSJdxbv3ecynNzLNr33GKLV1YVW4IyfycXfq0UxP4X5HJdXCqX4Wv0AKqYkkipw4LG6WxMNi+GhAtH+M/K8wVe7wuWvwQYAFT+UsGCXmX3AAAAAElFTkSuQmCC',
				align: 'right',
				vAlign: 'top',
				offsetX: -100,
				offsetY: 10
			},
			advertisement: { //广告相关的配置
				time: 5,//广告默认播放时长以及多个广告时每个广告默认播放时间，单位：秒
				method: 'get',//广告监测地址默认请求方式，get/post
				videoForce: false,//视频广告是否强制播放结束
				videoVolume: 0.8,//视频音量
				skipButtonShow: true,//是否显示跳过广告按钮
				linkButtonShow: true,//是否显示广告链接按钮，如果选择显示，只有在提供了广告链接地址时才会显示
				muteButtonShow: true,//是否在视频广告时显示静音按钮
				closeButtonShow: true,//暂停时是否显示关闭广告按钮
				closeOtherButtonShow: true,//其它广告是否需要关闭广告按钮
				frontSkipButtonDelay: 1,//前置广告跳过广告按钮延时显示的时间，单位：秒
				insertSkipButtonDelay: 0,//插入广告跳过广告按钮延时显示的时间，单位：秒
				endSkipButtonDelay: 0,//后置广告跳过广告按钮延时显示的时间，单位：秒
				frontStretched: 2,//前置广告拉伸方式，0=原始大小，1=自动缩放，2=只有当广告的宽或高大于播放器宽高时才进行缩放，3=参考播放器宽高，4=宽度参考播放器宽、高度自动，5=高度参考播放器高、宽度自动
				insertStretched: 2,//插入广告拉伸方式，0=原始大小，1=自动缩放，2=只有当广告的宽或高大于播放器宽高时才进行缩放，3=参考播放器宽高，4=宽度参考播放器宽、高度自动，5=高度参考播放器高、宽度自动
				pauseStretched: 2,//暂停广告拉伸方式，0=原始大小，1=自动缩放，2=只有当广告的宽或高大于播放器宽高时才进行缩放，3=参考播放器宽高，4=宽度参考播放器宽、高度自动，5=高度参考播放器高、宽度自动
				endStretched: 2 //结束广告拉伸方式，0=原始大小，1=自动缩放，2=只有当广告的宽或高大于播放器宽高时才进行缩放，3=参考播放器宽高，4=宽度参考播放器宽、高度自动，5=高度参考播放器高、宽度自动
			},
			video: { //视频的默认比例，当视频元数据里没有宽和高属性时默认使用该宽高
				defaultWidth: 16,//宽度
				defaultHeight: 9 //高度
			}
		}
	};
}
!(function() {
	var javascriptPath = '';
	!function() {
		var scriptList = document.scripts,
		thisPath = scriptList[scriptList.length - 1].src;
		javascriptPath = thisPath.substring(0, thisPath.lastIndexOf('/') + 1);
	} ();
	var ckplayer = function(obj) {
		/*
			javascript部分开发所用的注释说明：
			1：初始化-程序调用时即运行的代码部分
			2：定义样式-定义容器（div,p,canvas等）的样式表，即css
			3：监听动作-监听元素节点（单击-click，鼠标进入-mouseover，鼠标离开-mouseout，鼠标移动-mousemove等）事件
			4：监听事件-监听视频的状态（播放，暂停，全屏，音量调节等）事件
			5：共用函数-这类函数在外部也可以使用
			6：全局变量-定义成全局使用的变量
			7：其它相关注释
			全局变量说明：
			在本软件中所使用到的全局变量（变量（类型）包括Boolean，String，Int，Object（包含元素对象和变量对象），Array，Function等）
			下面列出重要的全局变量：
				V:Object：视频对象
				VA:Array：视频列表（包括视频地址，类型，清晰度说明）
				ID:String：视频ID
				CB:Object：控制栏各元素的集合对象
				PD:Object：内部视频容器对象
			---------------------------------------------------------------------------------------------
			程序开始
			下面为需要初始化配置的全局变量
			初始化配置
			config：全局变量定义一些基本配置
		*/
		this.config = {
			videoDbClick: true,//是否支持双击全屏/退出全屏动作
			errorTime: 100,//延迟判断失败的时间，单位：毫秒
			videoDrawImage: false,//是否使用视频drawImage功能，注意，该功能在移动端表现不了
			adSkipClick: 'javaScript->adjump' //h5环境中点击跳过广告按钮触发的功能
		};
		//全局变量：播放器默认配置，在外部传递过来相应配置后，则进行相关替换
		this.varsConfig = {
			playerID: '',//播放器ID
			container: '',//视频容器的ID
			variable: 'ckplayer',//播放函数(变量)名称
			volume: 0.8,//默认音量，范围0-1
			poster: '',//封面图片地址
			autoplay: false,//是否自动播放
			loop: false,//是否需要循环播放
			live: false,//是否是直播
			duration: 0,//指定总时间
			forceduration:0,//强制使用该时间为总时间
			seek: 0,//默认需要跳转的秒数
			drag: '',//拖动时支持的前置参数
			front: '',//前一集按钮动作
			next: '',//下一集按钮动作
			loaded: '',//加载播放器后调用的函数
			flashplayer: false,//设置成true则强制使用flashplayer
			html5m3u8: false,//PC平台上是否使用h5播放器播放m3u8
			track: null,//字幕轨道
			cktrack: null,//ck字幕
			cktrackdelay:0,//字幕显示延迟时间
			preview: null,//预览图片对象
			prompt: null,//提示点功能
			video: null,//视频地址
			config: '',//调用配置函数名称
			type: '',//视频格式
			crossorigin: '',//设置html5视频的crossOrigin属性
			crossdomain: '',//安全策略文件地址
			unescape: false,//默认flashplayer里需要解码
			mobileCkControls: false,//移动端h5显示控制栏
			mobileAutoFull: true,//移动端是否默认全屏播放
			playbackrate: 1,//默认倍速
			h5container: '',//h5环境中使用自定义容器
			debug: false,//是否开启调试模式
			overspread:true,//是否让视频铺满播放器
			//以下为广告相关配置
			adfront: '',
			adfronttime: '',
			adfrontlink: '',
			adpause: '',
			adpausetime: '',
			adpauselink: '',
			adinsert: '',
			adinserttime: '',
			adinsertlink: '',
			inserttime: '',
			adend: '',
			adendtime: '',
			adendlink: '',
			advertisements: ''
		};
		this.vars = {};//全局变量：语言配置
		this.language = {
			volume: '音量：',
			play: '点击播放',
			pause: '点击暂停',
			full: '点击全屏',
			escFull: '退出全屏',
			mute: '点击静音',
			escMute: '取消静音',
			front: '上一集',
			next: '下一集',
			definition: '点击选择清晰度',
			playbackRate: '点击选择速度',
			subtitles: '点击选择字幕',
			error: '加载出错',
			adTime: '广告{$second}秒',
			skipAd: '跳过广告',
			skipAdTime: '{$second}秒后可跳过广告',
			adLink: '查看详情',
			noLoadShockwaveFlash:'您的浏览器不支持FlashPlayer插件或没有启用该插件',
			downLoadShockwaveFlash:'点击下载FlashPlayer插件'
		};
		//全局变量：右键菜单：[菜单标题,类型(link:链接，default:灰色，function：调用函数，javascript:调用js函数),执行内容(包含链接地址，函数名称),[line(间隔线)]]
		this.contextMenu = [['ckplayer', 'link', 'http://www.ckplayer.com', '_blank'], ['version:X1', 'default', 'line']];
		//全局变量：错误提示列表
		this.errorList = [['000', 'Object does not exist'], ['001', 'Variables type is not a object'], ['002', 'Video object does not exist'], ['003', 'Video object format error'], ['004', 'Video object format error'], ['005', 'Video object format error'], ['006', '[error] does not exist '], ['007', 'Ajax error'], ['008', 'Ajax error'], ['009', 'Ajax object format error'], ['010', 'Ajax.status:[error]']];
		//全局变量：HTML5变速播放的值数组/如果不需要可以设置成null
		this.playbackRateArr = [[0.5, '0.5倍'], [1, '正常'], [1.25, '1.25倍'], [1.5, '1.5倍'], [2, '2倍速'], [4, '4倍速']];
		//全局变量：保存倍速
		this.playbackRateTemp=1;
		//全局变量：HTML5默认变速播放的值
		this.playbackRateDefault = 1;
		//全局变量：HTML5当前显示的字幕编号
		this.subtitlesTemp=-1;
		//全局变量：定义logo
		this.logo = '';
		//全局变量：是否加载了播放器
		this.loaded = false;
		//全局变量：计时器，监听视频加载出错的状态
		this.timerError = null;
		//全局变量：是否出错
		this.error = false;
		//全局变量：出错地址的数组
		this.errorUrl = [];
		//全局变量：计时器，监听全屏与非全屏状态
		this.timerFull = null;
		//全局变量：是否全屏状态
		this.full = false;
		//全局变量：计时器，监听当前的月/日 时=分=秒
		this.timerTime = null;
		//全局变量：计时器，监听视频加载
		this.timerBuffer = null;
		//全局变量：设置进度按钮及进度条是否跟着时间变化，该属性主要用来在按下进度按钮时暂停进度按钮移动和进度条的长度变化
		this.isTimeButtonMove = true;
		//全局变量：进度栏是否有效，如果是直播，则不需要监听时间让进度按钮和进度条变化
		this.isTimeButtonDown = false;
		//全局变量：用来模拟双击功能的判断
		this.isClick = false;
		//全局变量：计时器，用来模拟双击功能的计时器
		this.timerClick = null;
		//全局变量：计时器，旋转loading
		this.timerLoading = null;
		//全局变量：计时器，监听鼠标在视频上移动显示控制栏
		this.timerCBar = null;
		//全局变量：播放视频时如果该变量的值大于0，则进行跳转后设置该值为0
		this.needSeek = 0;
		//全局变量：当前音量
		this.volume = 0;
		//全局变量：静音时保存临时音量
		this.volumeTemp = 0;
		//全局变量/变量类型：Number/功能：当前播放时间
		this.time = 0;
		//全局变量：定义首次调用
		this.isFirst = true;
		//全局变量：是否使用HTML5-VIDEO播放
		this.html5Video = true;
		//全局变量记录视频容器节点的x;y
		this.pdCoor = {
			x: 0,
			y: 0
		};
		//全局变量：判断当前使用的播放器类型，html5video或flashplayer
		this.playerType = '';
		//全局变量：加载进度条的长度
		this.loadTime = 0;
		//全局变量：body对象
		this.body = document.body || document.documentElement;
		//全局变量：播放器
		this.V = null;
		//全局变量：保存外部js监听事件数组
		this.listenerJsArr = [];
		//全局变量：保存控制栏显示元素的总宽度
		this.buttonLen = 0;
		//全局变量：保存控制栏显示元素的数组
		this.buttonArr = [];
		//全局变量：保存按钮元素的宽
		this.buttonWidth = {};
		//全局变量：保存播放器上新增元件的数组
		this.elementArr = [];
		//全局变量：保存播放器上弹幕的临时数组
		this.elementTempArr = [];
		//全局变量：字幕内容
		this.track = [];
		//全局变量：字幕索引
		this.trackIndex = 0;
		//全局变量：当前显示的字幕内容
		this.nowTrackShow = {
			sn: ''
		};
		//全局变量：保存字幕元件数组
		this.trackElement = [];
		//全局变量：将视频转换为图片
		this.timerVCanvas = null;
		//全局变量：animate，缓动对象数组
		this.animateArray = [];
		//全局变量：保存animate的元件
		this.animateElementArray = [];
		//全局变量：保存需要在暂停时停止缓动的数组
		this.animatePauseArray = [];
		//全局变量：预览图片加载状态/0=没有加载，1=正在加载，2=加载完成
		this.previewStart = 0;
		//全局变量：预览图片容器
		this.previewDiv = null;
		//全局变量：预览框
		this.previewTop = null;
		//全局变量：预览框的宽
		this.previewWidth = 120;
		//全局变量：预览图片容器缓动函数
		this.previewTween = null;
		//全局变量：是否是m3u8格式，是的话则可以加载hls.js
		this.isM3u8 = false;
		//全局变量：保存提示点数组
		this.promptArr = [];
		//全局变量：显示提示点文件的容器
		this.promptElement = null;
		//全局变量：配置文件函数
		this.ckplayerConfig = {};
		//全局变量：控制栏是否显示
		this.showFace = true;
		//全局变量：是否监听过h5的错误
		this.errorAdd = false;
		//全局变量：是否发送了错误
		this.errorSend = false;
		//全局变量：控制栏是否隐藏
		this.controlBarIsShow = true;
		//全局变量，保存当前缩放比例
		this.videoScale = 1;
		//全局变量：设置字体
		this.fontFamily = '"Microsoft YaHei"; YaHei; "\5FAE\8F6F\96C5\9ED1"; SimHei; "\9ED1\4F53";Arial';
		//全局变量：设置字幕的文字大小
		this.trackFontSize=16;
		//全局变量：设置字幕的行距
		this.trackLineHeight=30;
		//全局变量：记录第一次拖动进度按钮时的位置
		this.timeSliderLeftTemp = 0;
		//全局变量：判断是否记录了总时间
		this.durationSendJS = false;
		//全局变量：初始化广告分析是否结束设置
		this.adAnalysisEnd = false;
		//全局变量：广告变量
		this.advertisements = {};
		//全局变量：是否是第一次播放视频
		this.isFirstTimePlay = true;
		//全局变量：当前需要播放的广告类型
		this.adType = '';
		//全局变量：播放广告计数
		this.adI = 0;
		//全局变量：要播放的临时地址
		this.videoTemp = {
			src: '',
			source: '',
			currentSrc: '',
			loop: false
		};
		//全局变量：当前要播放的广告组总时间
		this.adTimeAllTotal = 0;
		//全局变量：肖前要播放的广告时间
		this.adTimeTotal = 0;
		//全局变量：用来做倒计时
		this.adCountDownObj = null;
		//全局变量：前置，中插，结尾广告是否已开始运行
		this.adPlayStart = false;
		//全局变量：目前是否在播放广告
		this.adPlayerPlay = false;
		//全局变量：当前广告是否暂停
		this.adIsPause = false;
		//全局变量：视频广告是否静音
		this.adVideoMute = false;
		//全局变量：是否需要记录当前播放的时间供广告播放结束后进行跳转
		this.adIsVideoTime = false;
		//全局变量：后置广告是否播放
		this.endAdPlay = false;
		//全局变量：暂停广告是否在显示
		this.adPauseShow = false;
		//全局变量：是否需要重置广告以实现重新播放时再播放一次
		this.adReset = false;
		//全局变量：记录鼠标在视频上点击时的坐标
		this.videoClickXy={x:0,y:0};
		//全局变量：是否在播放广告时播放过视频广告
		this.adVideoPlay = false;
		if (obj) {
			this.embed(obj);
		}
		//全局变量：临时存储已加载时间的变量
		this.loadTimeTemp=0;
		//全局变量，临时存储hls形式下首次加载时是否需要暂停或播放的判断
		this.hlsAutoPlay=true;
	};
	ckplayer.prototype = {
		/*
			主要函数部分开始
			主接口函数：
			调用播放器需初始化该函数
		*/
		embed: function(c) {
			//c:Object：是调用接口传递的属性对象
			if (window.location.href.substr(0, 7) == 'file://') {//如果是使用的file协议打网页则弹出提示
				alert('Please use the HTTP protocol to open the page');
				return;
			}
			if (c == undefined || !c) {
				this.eject(this.errorList[0]);
				return;
			}
			if (typeof(c) != 'object') {
				this.eject(this.errorList[1]);
			}
			this.vars = this.standardization(this.varsConfig, c);
			if (!this.vars['mobileCkControls'] && this.isMobile()) {
				this.vars['flashplayer'] = false;
				this.showFace = false;
			}
			var videoString = this.vars['video'];
			if (!videoString) {
				this.eject(this.errorList[2]);
				return;
			}
			if (typeof(videoString) == 'string') {
				if (videoString.substr(0, 3) == 'CK:' || videoString.substr(0, 3) == 'CE:' || videoString.substr(8, 3) == 'CK:' || videoString.substr(8, 3) == 'CE:') {
					this.vars['flashplayer'] = true;
				}
			}
			if (typeof(videoString) == 'object') {
				if (videoString.length > 1) {
					if (videoString[0][0].substr(0, 3) == 'CK:' || videoString[0][0].substr(0, 3) == 'CE:' || videoString[0][0].substr(8, 3) == 'CK:' || videoString[0][0].substr(8, 3) == 'CE:') {
						this.vars['flashplayer'] = true;
					}
				}
			}
			if (this.vars['config']) {
				this.ckplayerConfig = eval(this.vars['config'] + '()');
			} else {
				this.ckplayerConfig = ckplayerConfig();
			}
			if ((!this.supportVideo() && this.vars['flashplayer'] != '') || (this.vars['flashplayer'] && this.uploadFlash()) || !this.isMsie()) {
				this.html5Video = false;
				this.getVideo();
			} else if (videoString) {
				//判断视频数据类型
				this.analysedVideoUrl(videoString);
				return this;
			} else {
				this.eject(this.errorList[2]);
			}
		},
		/*
			内部函数
			根据外部传递过来的video开始分析视频地址
		*/
		analysedVideoUrl: function(video) {
			var i = 0,
			y = 0;
			var thisTemp = this;
			this.VA = [];//定义全局变量VA：视频列表（包括视频地址，类型，清晰度说明）
			if (this.typeString(video) == 'string') { //如果是字符形式的则判断后缀进行填充
				if (video.substr(0, 8) != 'website:') {
					this.VA = [[video, '', '', 0]];
					var fileExt = this.getFileExt(video);
					switch (fileExt) {
					case '.mp4':
						this.VA[0][1] = 'video/mp4';
						break;
					case '.ogg':
						this.VA[0][1] = 'video/ogg';
						break;
					case '.webm':
						this.VA[0][1] = 'video/webm';
						break;
					default:
						break;
					}
					this.getVideo();
				} else {
					if (this.html5Video) {
						var ajaxObj = {
							url: video.substr(8),
							success: function(data) {
								if (data) {
									thisTemp.analysedUrl(data);
								} else {
									thisTemp.eject(thisTemp.errorList[5]);
									this.VA = video;
									thisTemp.getVideo();
								}
							}
						};
						this.ajax(ajaxObj);
					} else {
						this.VA = video;
						this.getVideo();
					}

				}
			} 
			else if(this.typeString(video)=='array'){//如果视频地址是数组
				if (!this.isUndefined(typeof(video[0].length))) { //如果视频地址是二维数组
					this.VA = video;
				}
				this.getVideo();
			}
			else if(this.typeString(video)=='object'){
				/*
					如果video格式是对象形式，则分二种
					如果video对象里包含type，则直接播放
				*/
				if (!this.isUndefined(video['type'])) {
					this.VA.push([video['file'], video['type'], '', 0]);
					this.getVideo();
				} else {
					this.eject(this.errorList[5]);
				}
			}
			else {
				this.eject(this.errorList[4]);
			}
		},
		/*
			对请求到的视频地址进行重新分析
		*/
		analysedUrl: function(data) {
			this.vars = this.standardization(this.vars, data);
			if (!this.isUndefined(data['video'])) {
				this.vars['video'] = data['video'];
			}
			this.analysedVideoUrl(this.vars['video']);
		},
		/*
			内部函数
			检查浏览器支持的视频格式，如果是则将支持的视频格式重新分组给播放列表
		*/
		getHtml5Video: function() {
			var va = this.VA;
			var nva = [];
			var mobile = false;
			var video = document.createElement('video');
			var codecs = function(type) {
				var cod = '';
				switch (type) {
				case 'video/mp4':
					cod = 'avc1.4D401E, mp4a.40.2';
					break;
				case 'video/ogg':
					cod = 'theora, vorbis';
					break;
				case 'video/webm':
					cod = 'vp8.0, vorbis';
					break;
				default:
					break;
				}
				return cod;
			};
			var supportType = function(vidType, codType) {
				if (!video.canPlayType) {
					this.html5Video = false;
					return;
				}
				var isSupp = video.canPlayType(vidType + ';codecs="' + codType + '"');
				if (isSupp == '') {
					return false
				}
				return true;
			};
			if (this.vars['flashplayer'] || !this.isMsie()) {
				this.html5Video = false;
				return;
			}
			if (this.isMobile()) {
				mobile = true;
			}
			for (var i = 0; i < va.length; i++) {
				var v = va[i];
				if (v) {
					if (v[1] != '' && !mobile && supportType(v[1], codecs(v[1])) && v[0].substr(0, 4) != 'rtmp') {
						nva.push(v);
					}
					if ((this.getFileExt(v[0]) == '.m3u8' || this.vars['type'] == 'video/m3u8' || this.vars['type'] == 'm3u8' || v[1] == 'video/m3u8' || v[1] == 'm3u8') && this.vars['html5m3u8'] && !mobile) {
						this.isM3u8 = true;
						nva.push(v);
					}
				}
			}
			if (nva.length > 0) {
				this.VA = nva;
			} else {
				if (!mobile) {
					this.html5Video = false;
				}
			}
		},
		/*
			内部函数
			根据视频地址开始构建播放器
		*/
		getVideo: function() {
			var thisTemp = this;
			var v = this.vars;
			//如果存在广告字段则开始分析广告
			if (!this.adAnalysisEnd && (v['adfront'] != '' || v['adpause'] != '' || v['adinsert'] != '' || v['adend'] != '' || v['advertisements'] != '')) {
				this.adAnalysisEnd = true;
				this.adAnalysis();
				return;
			}
			//如果存在字幕则加载
			if (this.V) { //如果播放器已存在，则认为是从newVideo函数发送过来的请求
				this.changeVideo();
				return;
			}
			if (this.vars['cktrack']) {
				this.loadTrack();
			}
			if (this.supportVideo() && !this.vars['flashplayer']) {
				this.getHtml5Video(); //判断浏览器支持的视频格式
			}
			var src = '',
			source = '',
			poster = '',
			loop = '',
			autoplay = '',
			track = '';
			var video = v['video'];
			var i = 0;
			this.CD = this.getByElement(v['container']);
			volume = v['volume'];
			if (!this.CD) {
				this.eject(this.errorList[6], v['container']);
				return false;
			}
			//开始构建播放器容器
			this.V = undefined;
			var thisPd = null;
			if (v['h5container'] != '') {
				thisPd = this.getByElement(v['h5container']);
				if (this.isUndefined(thisPd)) {
					thisPd = null;
				}
			}
			var isVideoH5 = null; //isUndefined  thisPd
			if (v['playerID'] != '') {
				isVideoH5 = this.getByElement('#' + v['playerID']);
				if (this.isUndefined(isVideoH5)) {
					isVideoH5 = null;
				}
			}
			if (thisPd != null && isVideoH5 != null) {
				this.PD = thisPd; //PD:定义播放器容器对象全局变量
			} else {
				var playerID = 'ckplayer' + this.randomString();
				var playerDiv = document.createElement('div');
				playerDiv.className = playerID;
				this.CD.innerHTML = '';
				this.CD.appendChild(playerDiv);
				this.PD = this.getByElement(playerID); //PD:定义播放器容器对象全局变量
			}
			this.css(this.CD, {
				backgroundColor: '#000000',
				overflow: 'hidden',
				position: 'relative'
			});
			this.css(this.PD, {
				backgroundColor: '#000000',
				width: '100%',
				height: '100%',
				fontFamily: this.fontFamily
			});
			if (this.html5Video) { //如果支持HTML5-VIDEO则默认使用HTML5-VIDEO播放器
				//禁止播放器容器上鼠标选择文本
				this.PD.onselectstart = this.PD.ondrag = function() {
					return false;
				};
				//播放器容器构建完成并且设置好样式
				//构建播放器
				if (this.VA.length == 1) {
					this.videoTemp['src'] = decodeURIComponent(this.VA[0][0]);
					src = ' src="' + this.videoTemp['src'] + '"';

				} else {
					var videoArr = this.VA.slice(0);
					videoArr = this.arrSort(videoArr);
					for (i = 0; i < videoArr.length; i++) {
						var type = '';
						var va = videoArr[i];
						if (va[1]) {
							type = ' type="' + va[1] + '"';
							if (type == ' type="video/m3u8"' || type == ' type="m3u8"') {
								type = '';
							}
						}
						source += '<source src="' + decodeURIComponent(va[0]) + '"' + type + '>';
					}
					this.videoTemp['source'] = source;
				}
				//分析视频地址结束
				if (v['autoplay']) {
					autoplay = ' autoplay="autoplay"';
				}
				if (v['poster']) {
					poster = ' poster="' + v['poster'] + '"';
				}
				if (v['loop']) {
					loop = ' loop="loop"';
				}
				if (v['seek'] > 0) {
					this.needSeek = v['seek'];
				}
				if (v['track'] != null && v['cktrack'] == null) {
					var trackArr = v['track'];
					var trackDefault = '';
					var defaultHave = false;
					for (i = 0; i < trackArr.length; i++) {
						var trackObj = trackArr[i];
						if (trackObj['default'] && !defaultHave) {
							trackDefault = ' default';
							defaultHave = true;
						} else {
							trackDefault = '';
						}
						track += '<track kind="' + trackObj['kind'] + '" src="' + trackObj['src'] + '" srclang="' + trackObj['srclang'] + '" label="' + trackObj['label'] + '"' + trackDefault + '>';
					}
				}
				var autoLoad = this.ckplayerConfig['config']['autoLoad'];
				var preload = '';
				if (!autoLoad) {
					preload = ' preload="meta"';
				}
				var vid = this.randomString();
				var controls = '';
				if (!this.showFace) {
					controls = ' controls="controls"';
				}
				var mobileAutoFull = v['mobileAutoFull'];
				var mobileautofull = '';
				if (!mobileAutoFull) {
					mobileautofull = ' x-webkit-airplay="true" playsinline  webkit-playsinline="true"  x5-video-player-type="h5"';
				}
				if (isVideoH5 != null && thisPd != null) {
					this.V = isVideoH5;
					if (v['poster']) {
						this.V.poster = v['poster'];
					}
				} else {
					var html = '';
					if (!this.isM3u8) {
						html = '<video id="' + vid + '"' + src + ' width="100%" height="100%"' + autoplay + poster + loop + preload + controls + mobileautofull + track + '>' + source + '</video>';
					} else {
						html = '<video id="' + vid + '" width="100%" height="100%"' + poster + loop + preload + controls + mobileautofull + track + '></video>';
					}
					this.PD.innerHTML = html;
					this.V = this.getByElement('#' + vid); //V：定义播放器对象全局变量
				}
				if (this.vars['crossorigin']) {
					this.V.crossOrigin = this.vars['crossorigin'];
				}
				try {
					this.V.volume = volume; //定义音量
					if (this.playbackRateArr && this.vars['playbackrate'] > -1) {
						if (this.vars['playbackrate'] < this.playbackRateArr.length) {
							this.playbackRateDefault = this.vars['playbackrate'];
						}
						this.V.playbackRate = this.playbackRateArr[this.playbackRateDefault][0]; //定义倍速
					}
				} catch(error) {}
				this.css(this.V, {
					width: '100%',
					height: '100%'
				});
				if (this.isM3u8) {
					var loadJsHandler = function() {
						thisTemp.embedHls(thisTemp.VA[0][0], v['autoplay']);
					};
					this.loadJs(javascriptPath + 'hls/hls.min.js', loadJsHandler);
				}
				this.css(this.V, 'backgroundColor', '#000000');
				//创建一个画布容器
				if (this.config['videoDrawImage']) {
					var canvasID = 'vcanvas' + this.randomString();
					var canvasDiv = document.createElement('div');
					canvasDiv.className = canvasID;
					this.PD.appendChild(canvasDiv);
					this.MD = this.getByElement(canvasID); //定义画布存储容器
					this.css(this.MD, {
						backgroundColor: '#000000',
						width: '100%',
						height: '100%',
						position: 'absolute',
						display: 'none',
						cursor: 'pointer',
						left: '0px',
						top: '0px',
						zIndex: '10'
					});
					var cvid = 'ccanvas' + this.randomString();
					this.MD.innerHTML = this.newCanvas(cvid, this.PD.offsetWidth, this.PD.offsetHeight);
					this.MDC = this.getByElement(cvid + '-canvas');
					this.MDCX = this.MDC.getContext('2d');
				}
				this.playerType = 'html5video';
				//播放器构建完成并且设置好样式
				//建立播放器的监听函数，包含操作监听及事件监听
				this.addVEvent();
				//根据清晰度的值构建清晰度切换按钮
				if (this.showFace) {
					this.definition();
					if (!this.vars['live'] && this.playbackRateArr && this.vars['playbackrate'] > -1) {
						this.playbackRate();
					}
					if (v['autoplay']) {
						this.loadingStart(true);
					}
					this.subtitleSwitch();
				}
				this.playerLoad();
			} else { //如果不支持HTML5-VIDEO则调用flashplayer
				this.embedSWF();
			}
		},
		/*
			分析广告数据
		*/
		adAnalysis: function() {
			var thisTemp = this;
			var v = this.vars;
			var isAdvShow = [];
			var i = 0;
			if (v['advertisements'] != '' && v['advertisements'].substr(0, 8) == 'website:') {
				var ajaxObj = {
					url: v['advertisements'].substr(8),
					success: function(data) {
						if (data) {
							var newData = {};
							var val = null;
							//对广告进行分析
							try {
								if (!thisTemp.isUndefined(data['front']) || !thisTemp.isUndefined(data['pause']) || !thisTemp.isUndefined(data['end']) || !thisTemp.isUndefined(data['insert']) || !thisTemp.isUndefined(data['other'])) {
									val = thisTemp.arrayDel(data['front']);
									if (!thisTemp.isUndefined(val)) {
										newData['front'] = val;
									}
									val = thisTemp.arrayDel(data['pause']);
									if (!thisTemp.isUndefined(val)) {
										newData['pause'] = val;
									}
									val = thisTemp.arrayDel(data['insert']);
									if (!thisTemp.isUndefined(val)) {
										newData['insert'] = val;
										if (!thisTemp.isUndefined(data['inserttime'])) {
											newData['inserttime'] = thisTemp.arrayInt(data['inserttime']);
											isAdvShow = [];
											for (i = 0; i < newData['inserttime'].length; i++) {
												isAdvShow.push(false);
											}
											newData['insertPlay'] = isAdvShow;
										}
									}
									val = thisTemp.arrayDel(data['end']);
									if (!thisTemp.isUndefined(val)) {
										newData['end'] = val;
									}
									val = thisTemp.arrayDel(data['other']);
									if (!thisTemp.isUndefined(val)) {
										newData['other'] = val;
										isAdvShow = [];
										var arrTemp = [];
										for (i = 0; i < val.length; i++) {
											isAdvShow.push(false);
											arrTemp.push(parseInt('0' + val[i]['startTime']));
										}
										newData['othertime'] = arrTemp;
										newData['otherPlay'] = isAdvShow;
									}
								}
							} catch(event) {
								thisTemp.log(event)
							}
							thisTemp.advertisements = newData;
							//对广告进行分析结束
						}
						thisTemp.getVideo();
					}
				};
				this.ajax(ajaxObj);
			} else {
				//根据广告分析
				this.adAnalysisOne('front', 'adfront', 'adfronttime', 'adfrontlink', 'adfronttype');
				this.adAnalysisOne('pause', 'adpause', 'adpausetime', 'adpauselink', 'adpausetype');
				this.adAnalysisOne('insert', 'adinsert', 'adinserttime', 'adinsertlink', 'adinserttype');
				this.adAnalysisOne('end', 'adend', 'adendtime', 'adendlink', 'adendtype');
				if (!this.isUndefined(this.advertisements['insert'])) {
					if (!this.isUndefined(v['inserttime'])) {
						thisTemp.advertisements['inserttime'] = v['inserttime'];
					}
				}
				if (!this.isUndefined(thisTemp.advertisements['inserttime'])) {
					thisTemp.advertisements['inserttime'] = thisTemp.arrayInt(thisTemp.advertisements['inserttime']);
					isInsert = [];
					for (i = 0; i < thisTemp.advertisements['inserttime'].length; i++) {
						isInsert.push(false);
					}
					thisTemp.advertisements['insertPlay'] = isInsert;
				}
				thisTemp.getVideo();
			}
		},
		/*
			将广告数组数据里不是视频和图片的去除
		*/
		arrayDel: function(arr) {
			if(this.isUndefined(arr)){
				return arr;
			}
			if (arr.length == 0) {
				return null;
			}
			var newArr = [];
			for (var i = 0; i < arr.length; i++) {
				var type = arr[i]['type'];
				if (type == 'mp4' || type == 'mov' || this.isStrImage(type)) {
					newArr.push(arr[i]);
				}
			}
			if (newArr.length > 0) {
				return newArr;
			}
			return null;
		},
		/*分析单个类型的广告*/
		adAnalysisOne: function(adType, adName, adTime, adLink, adStype) {
			var v = this.vars;
			if (this.isUndefined(v[adName])) {
				v[adName] = '';
			}
			if (this.isUndefined(v[adTime])) {
				v[adTime] = '';
			}
			if (this.isUndefined(v[adLink])) {
				v[adLink] = '';
			}
			if (this.isUndefined(v[adStype])) {
				v[adStype] = '';
			}
			if (v[adName] != '') {
				var adList = [];
				var ad = v[adName].split(',');
				var adtime = v[adTime].split(',');
				var adlink = v[adLink].split(',');
				var adstype = v[adStype].split(',');
				var i = 0;
				if (ad.length > 0) {
					var adLinkLen = adlink.length,
					adTimeLen = adtime.length;
					if (v[adLink] == '') {
						adLinkLen = 0;
						adlink = [];
					}
					if (v[adTime] == '') {
						adTimeLen = 0;
						adtime = [];
					}
					if (adLinkLen < ad.length) {
						for (i = adLinkLen; i < ad.length; i++) {
							adlink.push('');
						}
					}
					if (adTimeLen < ad.length) {
						for (i = adTimeLen; i < ad.length; i++) {
							adtime.push('');
						}
					}
					var adstypeLen = adstype.length;
					if (v[adStype] == '') {
						adstypeLen = 0;
						adstype = [];
					}
					if (adstypeLen < ad.length) {
						for (i = adstypeLen; i < ad.length; i++) {
							adstype.push(this.getFileExt(ad[i]).replace('.', ''));
						}
					}
					for (i = 0; i < ad.length; i++) {
						var type = adstype[i];
						if (type == 'mp4' || type == 'mov' || this.isStrImage(type)) {
							var obj = {
								file: ad[i],
								type: type,
								time: parseInt(adtime[i]) > 0 ? parseInt(adtime[i]) : this.ckplayerConfig['style']['advertisement']['time'],
								link: adlink[i]
							};
							adList.push(obj);
						}

					}
					if (this.isUndefined(this.advertisements)) {
						this.advertisements = {};
					}
					if (adList.length > 0) {
						this.advertisements[adType] = adList;
					}
				}
			}
		},
		/*
			内部函数
			发送播放器加载成功的消息
		*/
		playerLoad: function() {
			var thisTemp = this;
			if (this.isFirst) {
				this.isFirst = false;
				setTimeout(function() {
					thisTemp.loadedHandler();
				},1);
			}
		},
		/*
			内部函数
			建立播放器的监听函数，包含操作监听及事件监听
		*/
		addVEvent: function() {
			var thisTemp = this;
			var duration=0;
			//监听视频单击事件
			var eventVideoClick = function(event) {
				thisTemp.videoClickXy={x:event.clientX,y:event.clientY};
				thisTemp.videoClick();
			};
			this.addListenerInside('click', eventVideoClick);
			this.addListenerInside('click', eventVideoClick, this.MDC);
			//延迟计算加载失败事件
			this.timerErrorFun();
			//监听视频加载到元数据事件
			var eventJudgeIsLive = function(event) {
				thisTemp.sendJS('loadedmetadata');
				if (typeof(thisTemp.V.duration) == 'number' && thisTemp.V.duration > 1) {
					duration = thisTemp.V.duration;
					if(!duration){
						if(thisTemp.vars['duration']>0){
							duration=thisTemp.vars['duration'];
						}
					}
					if(thisTemp.vars['forceduration']>0){
						duration=thisTemp.vars['forceduration'];
					}
					thisTemp.sendJS('duration', duration);
					thisTemp.formatInserttime(duration);
					if (thisTemp.adPlayerPlay) {
						thisTemp.advertisementsTime(duration + 1);
					}
					thisTemp.durationSendJS = true;
				}
				thisTemp.judgeIsLive();
			};
			this.addListenerInside('loadedmetadata', eventJudgeIsLive);
			//监听视频播放事件
			var eventPlaying = function(event) {
				thisTemp.playingHandler();
				thisTemp.sendJS('play');
				thisTemp.sendJS('paused', false);
				if (!thisTemp.durationSendJS && typeof(thisTemp.V.duration) == 'number' && thisTemp.V.duration > 0) {
					duration = thisTemp.V.duration;
					if(!duration){
						if(thisTemp.vars['duration']>0){
							duration=thisTemp.vars['duration'];
						}
					}
					if(thisTemp.vars['forceduration']>0){
						duration=thisTemp.vars['forceduration'];
					}
					thisTemp.durationSendJS = true;
					thisTemp.sendJS('duration', duration);
					thisTemp.formatInserttime(duration);
				}
			};
			this.addListenerInside('playing', eventPlaying);
			//监听视频暂停事件
			var eventPause = function(event) {
				thisTemp.pauseHandler();
				thisTemp.sendJS('pause');
				thisTemp.sendJS('paused', true);
			};
			this.addListenerInside('pause', eventPause);
			//监听视频播放结束事件
			var eventEnded = function(event) {
				thisTemp.endedHandler();
			};
			this.addListenerInside('ended', eventEnded);
			//监听视频播放时间事件
			var eventTimeupdate = function(event) {
				if (thisTemp.timerLoading != null) {
					thisTemp.loadingStart(false);
				}
				if (thisTemp.time) {
					if (!thisTemp.adPlayerPlay) {
						thisTemp.sendJS('time', thisTemp.time);
						//监听中间插入广告是否需要播放
						if (!thisTemp.isUndefined(thisTemp.advertisements['insert'])) {
							thisTemp.checkAdInsert(thisTemp.time);
						}
						//监听其它广告
						if (!thisTemp.isUndefined(thisTemp.advertisements['other'])) {
							thisTemp.checkAdOther(thisTemp.time);
						}
						if (thisTemp.time < 3 && thisTemp.adReset) {
							thisTemp.adReset = false;
							thisTemp.endedAdReset();
						}
					} else { //如果是广告则进行广告倒计时
						thisTemp.adPlayerTimeHandler(thisTemp.time);
					}

				}
			};
			this.addListenerInside('timeupdate', eventTimeupdate);
			//监听视频缓冲事件
			var eventWaiting = function(event) {
				thisTemp.loadingStart(true);
			};
			this.addListenerInside('waiting', eventWaiting);
			//监听视频seek开始事件
			var eventSeeking = function(event) {
				thisTemp.sendJS('seek', 'start');
			};
			this.addListenerInside('seeking', eventSeeking);
			//监听视频seek结束事件
			var eventSeeked = function(event) {
				thisTemp.seekedHandler();
				thisTemp.sendJS('seek', 'ended');
			};
			this.addListenerInside('seeked', eventSeeked);
			//监听视频音量
			var eventVolumeChange = function(event) {
				try {
					thisTemp.volumechangeHandler();
					thisTemp.sendJS('volume', thisTemp.volume || thisTemp.V.volume);
				} catch(event) {}
			};
			this.addListenerInside('volumechange', eventVolumeChange);
			//监听全屏事件
			var eventFullChange = function(event) {
				var fullState = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
				thisTemp.sendJS('full', fullState);
			};
			this.addListenerInside('fullscreenchange', eventFullChange);
			this.addListenerInside('webkitfullscreenchange', eventFullChange);
			this.addListenerInside('mozfullscreenchange', eventFullChange);
			//建立界面
			if (this.showFace) {
				this.interFace();
			}
		},
		/*
			内部函数
			重置界面元素
		*/
		resetPlayer: function() {
			this.timeTextHandler();
			if (this.showFace) {
				this.timeProgress(0, 1); //改变时间进度条宽
				this.changeLoad(0);
				this.initPlayPause(); //判断显示播放或暂停按钮
				this.definition(); //构建清晰度按钮
				this.showFrontNext(); //构建上一集下一集按钮
				this.deletePrompt(); //删除提示点
				this.deletePreview(); //删除预览图
				this.trackHide(); //重置字幕
				this.resetTrack();
				this.trackElement = [];
				this.track = [];
			}
		},
		/*
			内部函数
			构建界面元素
		 */
		interFace: function() {
			this.showFace = true;
			var thisTemp = this;
			var html = ''; //控制栏内容
			var i = 0;
			var bWidth = 38,//按钮的宽
			bHeight = 38; //按钮的高
			var bBgColor = '#FFFFFF',//按钮元素默认颜色
			bOverColor = '#0782F5'; //按钮元素鼠标经过时的颜色
			var timeInto = this.formatTime(0) + ' / ' + this.formatTime(this.vars['duration']); //时间显示框默认显示内容
			var randomS = this.randomString(10); //获取一个随机字符串
			/*
				以下定义界面各元素的ID，统一以ID结束
			*/
			var controlBarBgID = 'controlbgbar' + randomS,//控制栏背景
			controlBarID = 'controlbar' + randomS,//控制栏容器
			timeProgressBgID = 'timeprogressbg' + randomS,//播放进度条背景
			loadProgressID = 'loadprogress' + randomS,//加载进度条
			timeProgressID = 'timeprogress' + randomS,//播放进度条
			timeBOBGID = 'timebobg' + randomS,//播放进度按钮容器，该元素为一个透明覆盖在播放进度条上
			timeBOID = 'timebo' + randomS,//播放进度可拖动按钮外框
			timeBWID = 'timebw' + randomS,//播放进度可拖动按钮内框
			timeTextID = 'timetext' + randomS,//时间文本框
			playID = 'play' + randomS,//播放按钮
			pauseID = 'pause' + randomS,//暂停按钮
			frontID = 'front' + randomS,//前一集按钮
			nextID = 'next' + randomS,//下一集按钮
			fullID = 'full' + randomS,//全屏按钮
			escFullID = 'escfull' + randomS,//退出全屏按钮
			muteID = 'mute' + randomS,//静音按钮
			escMuteID = 'escmute' + randomS,//取消静音按钮				
			volumeID = 'volume' + randomS,//音量调节框容器
			volumeDbgID = 'volumedbg' + randomS,//音量调节框容器背景
			volumeBgID = 'volumebg' + randomS,//音量调节框背景层
			volumeUpID = 'volumeup' + randomS,//音量调节框可变宽度层
			volumeBOID = 'volumebo' + randomS,//音量调节按钮外框
			volumeBWID = 'volumebw' + randomS,//音量调节按钮内框
			definitionID = 'definition' + randomS,//清晰度容器
			definitionPID = 'definitionp' + randomS,//清晰度列表容器
			playbackRateID = 'playbackrate' + randomS,//倍速容器
			playbackRatePID = 'playbackratep' + randomS,//倍速列表容器
			subtitlesID = 'subtitles' + randomS,//多字幕容器
			subtitlesPID = 'subtitlesp' + randomS,//多字幕列表容器
			promptBgID = 'promptbg' + randomS,//提示框背景
			promptID = 'prompt' + randomS,//提示框
			dlineID = 'dline' + randomS,//分隔线共用前缀
			menuID = 'menu' + randomS,//右键容器
			pauseCenterID = 'pausecenter' + randomS,//中间暂停按钮
			loadingID = 'loading' + randomS,//缓冲
			errorTextID = 'errortext' + randomS,//错误文本框
			logoID = 'logo' + randomS,//logo
			adBackgroundID = 'background' + randomS,//广告背景图片
			adElementID = 'adelement' + randomS,//广告容器
			adBarID = 'adBar' + randomS,//广告顶部倒计时，跳过广告，静音按钮容器
			adSkipID = 'adskip' + randomS,//跳过广告按钮
			adTimeID = 'adtime' + randomS,//倒计时按钮
			adLinkID = 'adlink' + randomS,//广告链接按钮
			adMuteID = 'admute' + randomS,//广告静音按钮
			adEscMuteID = 'adescmute' + randomS,//广告取消静音按钮
			adPauseCloseID = 'adpauseclose' + randomS; //暂停广场的关闭按钮
			/*
				构建一些PD（播放器容器）里使用的元素
			*/
			var controlBarBg = document.createElement('div'),
			controlBar = document.createElement('div'),
			timeProgressBg = document.createElement('div'),
			timeBoBg = document.createElement('div'),
			pauseCenter = document.createElement('div'),
			errorText = document.createElement('div'),
			promptBg = document.createElement('div'),
			prompt = document.createElement('div'),
			menuDiv = document.createElement('div'),
			definitionP = document.createElement('div'),
			playbackrateP = document.createElement('div'),
			subtitlesP = document.createElement('div'),
			loading = document.createElement('div'),
			logo = document.createElement('div'),
			adBackground = document.createElement('div'),
			adElement = document.createElement('div'),
			adBar = document.createElement('div'),
			adLink = document.createElement('div'),
			adPauseClose = document.createElement('div');
			/*
				定义各节点的样式 
			*/
			controlBarBg.className = controlBarBgID;
			controlBar.className = controlBarID;
			timeProgressBg.className = timeProgressBgID;
			timeBoBg.className = timeBOBGID;
			promptBg.className = promptBgID;
			prompt.className = promptID;
			menuDiv.className = menuID;
			definitionP.className = definitionPID;
			playbackrateP.className = playbackRatePID;
			subtitlesP.className = subtitlesPID;
			pauseCenter.className = pauseCenterID;
			loading.className = loadingID;
			logo.className = logoID;
			errorText.className = errorTextID;
			adBackground.className = adBackgroundID;
			adElement.className = adElementID;
			adBar.className = adBarID;
			adLink.className = adLinkID;
			adPauseClose.className = adPauseCloseID;
			/*
				加载节点到播放器容器中
			*/
			this.PD.appendChild(controlBarBg);
			this.PD.appendChild(controlBar);
			this.PD.appendChild(timeProgressBg);
			this.PD.appendChild(timeBoBg);
			this.PD.appendChild(promptBg);
			this.PD.appendChild(prompt);
			this.PD.appendChild(definitionP);
			this.PD.appendChild(playbackrateP);
			this.PD.appendChild(subtitlesP);
			this.PD.appendChild(pauseCenter);
			this.PD.appendChild(loading);
			this.PD.appendChild(errorText);
			this.PD.appendChild(logo);
			this.PD.appendChild(adBackground);
			this.PD.appendChild(adElement);
			this.PD.appendChild(adBar);
			this.PD.appendChild(adLink);
			this.PD.appendChild(adPauseClose);
			this.body.appendChild(menuDiv);
			if (this.vars['live']) { //如果是直播，时间显示文本框里显示当前系统时间
				timeInto = this.getNowDate();
			}
			/*
				构建控制栏的内容 
			*/
			html += '<div class="' + playID + '" data-title="' + thisTemp.language['play'] + '">' + this.newCanvas(playID, bWidth, bHeight) + '</div>'; //播放按钮
			html += '<div class="' + pauseID + '" data-title="' + thisTemp.language['pause'] + '">' + this.newCanvas(pauseID, bWidth, bHeight) + '</div>'; //暂停按钮
			html += '<div class="' + dlineID + '-la"></div>'; //分隔线
			html += '<div class="' + frontID + '" data-title="' + thisTemp.language['front'] + '">' + this.newCanvas(frontID, bWidth, bHeight) + '</div>'; //前一集按钮
			html += '<div class="' + dlineID + '-lb"></div>'; //分隔线
			html += '<div class="' + nextID + '" data-title="' + thisTemp.language['next'] + '">' + this.newCanvas(nextID, bWidth, bHeight) + '</div>'; //下一集按钮
			html += '<div class="' + dlineID + '-lc"></div>'; //分隔线
			html += '<div class="' + timeTextID + '">' + timeInto + '</div>'; //时间文本
			html += '<div class="' + fullID + '" data-title="' + thisTemp.language['full'] + '">' + this.newCanvas(fullID, bWidth, bHeight) + '</div>'; //全屏按钮
			html += '<div class="' + escFullID + '" data-title="' + thisTemp.language['escFull'] + '">' + this.newCanvas(escFullID, bWidth, bHeight) + '</div>'; //退出全屏按钮
			html += '<div class="' + dlineID + '-ra"></div>'; //分隔线
			html += '<div class="' + definitionID + '" data-title="' + thisTemp.language['definition'] + '"></div>'; //清晰度容器
			html += '<div class="' + dlineID + '-rb"></div>'; //分隔线
			html += '<div class="' + playbackRateID + '" data-title="' + thisTemp.language['playbackRate'] + '"></div>'; //倍速
			html += '<div class="' + dlineID + '-rc"></div>'; //分隔线
			html += '<div class="' + subtitlesID + '" data-title="' + thisTemp.language['subtitles'] + '"></div>'; //字幕
			html += '<div class="' + dlineID + '-rd"></div>'; //分隔线
			html += '<div class="' + volumeID + '"><div class="' + volumeDbgID + '"><div class="' + volumeBgID + '"><div class="' + volumeUpID + '"></div></div><div class="' + volumeBOID + '"><div class="' + volumeBWID + '"></div></div></div></div>'; //音量调节框,音量调节按钮
			html += '<div class="' + muteID + '" data-title="' + thisTemp.language['mute'] + '">' + this.newCanvas(muteID, bWidth, bHeight) + '</div>'; //静音按钮
			html += '<div class="' + escMuteID + '" data-title="' + thisTemp.language['escMute'] + '">' + this.newCanvas(escMuteID, bWidth, bHeight) + '</div>'; //退出静音按钮
			html += '<div class="' + dlineID + '-re"></div>'; //分隔线
			this.getByElement(controlBarID).innerHTML = html;
			//构建进度条内容
			this.getByElement(timeProgressBgID).innerHTML = '<div class="' + loadProgressID + '"></div><div class="' + timeProgressID + '"></div>';
			this.getByElement(timeBOBGID).innerHTML = '<div class="' + timeBOID + '"><div class="' + timeBWID + '"></div></div>';
			//构建进度条内容结束
			this.getByElement(pauseCenterID).innerHTML = this.newCanvas(pauseCenterID, 80, 80); //构建中间暂停按钮
			this.getByElement(loadingID).innerHTML = this.newCanvas(loadingID, 60, 60); //构建中间缓冲时显示的图标
			this.getByElement(errorTextID).innerHTML = this.language['error']; //构建错误时显示的文本框
			//构建广告相关
			html = '<div class="' + adTimeID + '">' + this.language['adTime'].replace('{$second}', 0) + '</div>';
			html += '<div class="' + adMuteID + '">' + this.newCanvas(adMuteID, 30, 30) + '</div>';
			html += '<div class="' + adEscMuteID + '">' + this.newCanvas(adEscMuteID, 30, 30) + '</div>';
			html += '<div class="' + adSkipID + '"></div>';
			this.getByElement(adBarID).innerHTML = html;
			this.getByElement(adLinkID).innerHTML = this.language['adLink'];
			this.getByElement(adPauseCloseID).innerHTML = this.newCanvas(adPauseCloseID, 20, 20);
			if (this.ckplayerConfig['style']['logo']) {
				if (this.ckplayerConfig['style']['logo']['file']) {
					var logoFile = this.ckplayerConfig['style']['logo']['file'];
					if (logoFile.substr(0, 15) == 'data:image/png;' || logoFile.substr(0, 15) == 'data:image/jpg;' || logoFile.substr(0, 16) == 'data:image/jpeg;') {
						this.getByElement(logoID).innerHTML = '<img src="' + logoFile + '" border="0">'; //构建logo
					}
				}
			} else {
				this.getByElement(logoID).innerHTML = this.vars['logo'] || this.logo || ''; //构建logo
			}
			var pd = this.PD;
			//CB:Object：全局变量，将一些全局需要用到的元素统一放在CB对象里
			this.CB = {
				controlBarBg: this.getByElement(controlBarBgID, pd),
				controlBar: this.getByElement(controlBarID, pd),
				promptBg: this.getByElement(promptBgID, pd),
				prompt: this.getByElement(promptID, pd),
				timeProgressBg: this.getByElement(timeProgressBgID, pd),
				loadProgress: this.getByElement(loadProgressID, pd),
				timeProgress: this.getByElement(timeProgressID, pd),
				timeBoBg: this.getByElement(timeBOBGID, pd),
				timeButton: this.getByElement(timeBOID, pd),
				timeText: this.getByElement(timeTextID, pd),
				play: this.getByElement(playID, pd),
				front: this.getByElement(frontID, pd),
				next: this.getByElement(nextID, pd),
				pause: this.getByElement(pauseID, pd),
				definition: this.getByElement(definitionID, pd),
				definitionP: this.getByElement(definitionPID, pd),
				definitionLine: this.getByElement(dlineID + '-rb', pd),
				playbackrate: this.getByElement(playbackRateID, pd),
				playbackrateP: this.getByElement(playbackRatePID, pd),
				playbackrateLine: this.getByElement(dlineID + '-rc', pd),
				subtitles: this.getByElement(subtitlesID, pd),
				subtitlesP: this.getByElement(subtitlesPID, pd),
				subtitlesLine: this.getByElement(dlineID + '-rd', pd),
				full: this.getByElement(fullID, pd),
				escFull: this.getByElement(escFullID, pd),
				mute: this.getByElement(muteID, pd),
				escMute: this.getByElement(escMuteID, pd),
				volume: this.getByElement(volumeID, pd),
				volumeBg: this.getByElement(volumeBgID, pd),
				volumeUp: this.getByElement(volumeUpID, pd),
				volumeBO: this.getByElement(volumeBOID, pd),
				pauseCenter: this.getByElement(pauseCenterID, pd),
				menu: this.getByElement(menuID),
				loading: this.getByElement(loadingID, pd),
				loadingCanvas: this.getByElement(loadingID + '-canvas', pd),
				errorText: this.getByElement(errorTextID, pd),
				logo: this.getByElement(logoID, pd),
				playLine: this.getByElement(dlineID + '-la', pd),
				frontLine: this.getByElement(dlineID + '-lb', pd),
				nextLine: this.getByElement(dlineID + '-lc', pd),
				fullLine: this.getByElement(dlineID + '-ra'),
				muteLine: this.getByElement(dlineID + '-re', pd),
				adBackground: this.getByElement(adBackgroundID, pd),
				adElement: this.getByElement(adElementID, pd),
				adBar: this.getByElement(adBarID, pd),
				adSkip: this.getByElement(adSkipID, pd),
				adTime: this.getByElement(adTimeID, pd),
				adLink: this.getByElement(adLinkID, pd),
				adMute: this.getByElement(adMuteID, pd),
				adEscMute: this.getByElement(adEscMuteID, pd),
				adPauseClose: this.getByElement(adPauseCloseID, pd)
			};
			this.buttonWidth = {
				play: bWidth,
				full: bWidth,
				front: bWidth,
				next: bWidth,
				mute: bWidth
			};
			//定义界面元素的样式
			//控制栏背景
			this.css(controlBarBgID, {
				width: '100%',
				height: bHeight + 'px',
				backgroundColor: '#000000',
				position: 'absolute',
				bottom: '0px',
				filter: 'alpha(opacity:0.8)',
				opacity: '0.8',
				zIndex: '990'
			});
			//控制栏容器
			this.css(controlBarID, {
				width: '100%',
				height: bHeight + 'px',
				position: 'absolute',
				bottom: '0px',
				zIndex: '990'
			});
			//中间暂停按钮
			this.css(pauseCenterID, {
				width: '80px',
				height: '80px',
				borderRadius: '50%',
				position: 'absolute',
				display: 'none',
				cursor: 'pointer',
				zIndex: '996'
			});
			//loading
			this.css(loadingID, {
				width: '60px',
				height: '60px',
				position: 'absolute',
				display: 'none',
				zIndex: '996'
			});
			//出错文本框
			this.css(errorTextID, {
				width: '120px',
				height: '30px',
				lineHeight: '30px',
				color: '#FFFFFF',
				fontSize: '14px',
				textAlign: 'center',
				position: 'absolute',
				display: 'none',
				zIndex: '101',
				cursor: 'default',
				zIndex: '996'
			});
			//定义logo文字的样式
			this.css(logoID, {
				height: '30px',
				lineHeight: '30px',
				color: '#FFFFFF',
				fontFamily: 'Arial',
				fontSize: '28px',
				textAlign: 'center',
				position: 'absolute',
				float: 'left',
				left: '-1000px',
				top: '20px',
				zIndex: '996',
				filter: 'alpha(opacity:0.8)',
				opacity: '0.8',
				cursor: 'default'
			});

			this.css(this.CB['loadingCanvas'], {
				transform: 'rotate(0deg)',
				msTransform: 'rotate(0deg)',
				mozTransform: 'rotate(0deg)',
				webkitTransform: 'rotate(0deg)',
				oTransform: 'rotate(0deg)'
			});
			//定义提示语的样式
			this.css([promptBgID, promptID], {
				height: '30px',
				lineHeight: '30px',
				color: '#FFFFFF',
				fontSize: '14px',
				textAlign: 'center',
				position: 'absolute',
				borderRadius: '5px',
				paddingLeft: '5px',
				paddingRight: '5px',
				bottom: '0px',
				display: 'none',
				zIndex: '995'
			});
			this.css(promptBgID, {
				backgroundColor: '#000000',
				filter: 'alpha(opacity:0.5)',
				opacity: '0.5'
			});
			//时间进度条背景容器
			this.css(timeProgressBgID, {
				width: '100%',
				height: '6px',
				backgroundColor: '#3F3F3F',
				overflow: 'hidden',
				position: 'absolute',
				bottom: '38px',
				zIndex: '888'
			});
			//加载进度和时间进度
			this.css([loadProgressID, timeProgressID], {
				width: '1px',
				height: '6px',
				position: 'absolute',
				bottom: '38px',
				top: '0px',
				zIndex: '991'
			});
			this.css(loadProgressID, 'backgroundColor', '#6F6F6F');
			this.css(timeProgressID, 'backgroundColor', bOverColor);
			//时间进度按钮
			this.css(timeBOBGID, {
				width: '100%',
				height: '14px',
				overflow: 'hidden',
				position: 'absolute',
				bottom: '34px',
				cursor: 'pointer',
				zIndex: '992'
			});
			this.css(timeBOID, {
				width: '14px',
				height: '14px',
				overflow: 'hidden',
				borderRadius: '50%',
				backgroundColor: bBgColor,
				cursor: 'pointer',
				position: 'absolute',
				top: '0px',
				zIndex: '200'
			});
			this.css(timeBWID, {
				width: '8px',
				height: '8px',
				overflow: 'hidden',
				borderRadius: '50%',
				position: 'absolute',
				backgroundColor: bOverColor,
				left: '3px',
				top: '3px'
			});
			this.css(timeTextID, {
				lineHeight: bHeight + 'px',
				color: '#FFFFFF',
				fontFamily: 'arial',
				fontSize: '16px',
				paddingLeft: '10px',
				float: 'left',
				overflow: 'hidden',
				cursor: 'default'
			});
			//分隔线
			this.css([dlineID + '-la', dlineID + '-lb', dlineID + '-lc', dlineID + '-ra', dlineID + '-rb', dlineID + '-rc', dlineID + '-rd', dlineID + '-re'], {
				width: '0px',
				height: bHeight + 'px',
				overflow: 'hidden',
				borderLeft: '1px solid #303030',
				borderRight: '1px solid #151515',
				filter: 'alpha(opacity:0.9)',
				opacity: '0.9'
			});
			this.css([dlineID + '-la', dlineID + '-lb', dlineID + '-lc'], 'float', 'left');
			this.css([dlineID + '-ra', dlineID + '-rb', dlineID + '-rc', dlineID + '-rd', dlineID + '-re'], 'float', 'right');
			this.css([dlineID + '-lb', dlineID + '-lc', dlineID + '-rb', dlineID + '-rc', dlineID + '-rd'], 'display', 'none');
			//播放/暂停/上一集/下一集按钮
			this.css([playID, pauseID, frontID, nextID], {
				width: bWidth + 'px',
				height: bHeight + 'px',
				float: 'left',
				overflow: 'hidden',
				cursor: 'pointer'
			});
			this.css([frontID, nextID], 'display', 'none');
			//初始化判断播放/暂停按钮隐藏项
			this.initPlayPause();

			//设置静音/取消静音的按钮样式
			this.css([muteID, escMuteID], {
				width: bWidth + 'px',
				height: bHeight + 'px',
				float: 'right',
				overflow: 'hidden',
				cursor: 'pointer'
			});
			if (this.vars['volume'] > 0) {
				this.css(escMuteID, 'display', 'none');
			} else {
				this.css(muteID, 'display', 'none');
			}
			if (!this.ckplayerConfig['config']['mobileVolumeBarShow'] && this.isMobile()) {
				this.css([muteID, escMuteID, volumeID, volumeDbgID, dlineID + '-re'], {
					display: 'none'
				});
			}
			//音量调节框
			this.css([volumeID, volumeDbgID], {
				width: '70px',
				height: bHeight + 'px',
				overflow: 'hidden',
				float: 'right'
			});
			this.css(volumeDbgID, {
				position: 'absolute'
			});
			this.css([volumeBgID, volumeUpID], {
				width: '60px',
				height: '6px',
				overflow: 'hidden',
				borderRadius: '5px',
				cursor: 'pointer'
			});
			this.css(volumeBgID, {
				position: 'absolute',
				top: '16px'
			});
			this.css(volumeBgID, 'backgroundColor', '#666666');
			this.css(volumeUpID, 'backgroundColor', bOverColor);
			this.buttonWidth['volume'] = 100;
			//音量调节按钮
			this.css(volumeBOID, {
				width: '12px',
				height: '12px',
				overflow: 'hidden',
				borderRadius: '50%',
				position: 'absolute',
				backgroundColor: bBgColor,
				top: '13px',
				left: '0px',
				cursor: 'pointer'
			});
			this.css(volumeBWID, {
				width: '6px',
				height: '6px',
				overflow: 'hidden',
				borderRadius: '50%',
				position: 'absolute',
				backgroundColor: bOverColor,
				left: '3px',
				top: '3px'
			});
			//清晰度容器
			this.css(definitionID, {
				lineHeight: bHeight + 'px',
				color: '#FFFFFF',
				float: 'right',
				fontSize: '14px',
				textAlign: 'center',
				overflow: 'hidden',
				display: 'none',
				cursor: 'pointer'
			});
			this.css(definitionPID, {
				lineHeight: (bHeight - 8) + 'px',
				color: '#FFFFFF',
				overflow: 'hidden',
				position: 'absolute',
				bottom: '4px',
				backgroundColor: '#000000',
				textAlign: 'center',
				zIndex: '995',
				cursor: 'pointer',
				display: 'none'
			});
			//倍速容器
			this.css(playbackRateID, {
				lineHeight: bHeight + 'px',
				color: '#FFFFFF',
				float: 'right',
				fontSize: '14px',
				textAlign: 'center',
				overflow: 'hidden',
				display: 'none',
				cursor: 'pointer'
			});
			this.css(playbackRatePID, {
				lineHeight: (bHeight - 8) + 'px',
				color: '#FFFFFF',
				overflow: 'hidden',
				position: 'absolute',
				bottom: '4px',
				backgroundColor: '#000000',
				textAlign: 'center',
				zIndex: '995',
				cursor: 'pointer',
				display: 'none'
			});
			//字幕容器
			this.css(subtitlesID, {
				lineHeight: bHeight + 'px',
				color: '#FFFFFF',
				float: 'right',
				fontSize: '14px',
				textAlign: 'center',
				overflow: 'hidden',
				display: 'none',
				cursor: 'pointer'
			});
			this.css(subtitlesPID, {
				lineHeight: (bHeight - 8) + 'px',
				color: '#FFFFFF',
				overflow: 'hidden',
				position: 'absolute',
				bottom: '4px',
				backgroundColor: '#000000',
				textAlign: 'center',
				zIndex: '995',
				cursor: 'pointer',
				display: 'none'
			});
			//设置全屏/退出全屏按钮样式
			this.css([fullID, escFullID], {
				width: bWidth + 'px',
				height: bHeight + 'px',
				float: 'right',
				overflow: 'hidden',
				cursor: 'pointer'
			});
			this.css(escFullID, 'display', 'none');
			//设置广告背景层样式
			this.css(adBackgroundID, {
				width: '100%',
				height: '100%',
				backgroundColor: '#000000',
				position: 'absolute',
				top: '0px',
				zIndex: '997',
				display: 'none'
			});
			this.css(adElementID, {
				position: 'absolute',
				overflow: 'hidden',
				top: '0px',
				zIndex: '998',
				float: 'center',
				display: 'none'
			});
			this.css(adBarID, {
				position: 'absolute',
				overflow: 'hidden',
				top: '10px',
				right: '10px',
				zIndex: '999',
				textAlign: 'right',
				display: 'none'
			});
			this.css(adTimeID, {
				backgroundColor: '#000000',
				color: '#FF0000',
				paddingLeft: '10px',
				paddingRight: '10px',
				lineHeight: (bHeight - 8) + 'px',
				marginLeft: '5px',
				float: 'right',
				cursor: 'pointer'
			});
			this.css([adMuteID, adEscMuteID], {
				backgroundColor: '#000000',
				width: '30px',
				height: '30px',
				marginLeft: '5px',
				float: 'right',
				display: 'none',
				cursor: 'pointer'
			});
			this.css(adSkipID, {
				backgroundColor: '#000000',
				lineHeight: (bHeight - 8) + 'px',
				color: '#FFFFFF',
				paddingLeft: '10px',
				paddingRight: '10px',
				float: 'right',
				display: 'none',
				cursor: 'pointer'
			});
			this.css(adLinkID, {
				backgroundColor: '#ea5503',
				lineHeight: (bHeight - 8) + 'px',
				color: '#FFFFFF',
				paddingLeft: '10px',
				paddingRight: '10px',
				position: 'absolute',
				overflow: 'hidden',
				bottom: '10px',
				right: '10px',
				zIndex: '999',
				display: 'none'
			});
			this.css(adPauseCloseID, {
				backgroundColor: '#f7f7f7',
				//f8f7f7
				widht: '20px',
				height: '20px',
				position: 'absolute',
				overflow: 'hidden',
				zIndex: '999',
				top: '60px',
				left: '30px',
				borderRadius: '20px',
				display: 'none',
				cursor: 'pointer'
			});
			//构建各按钮的形状
			//播放按钮
			var cPlay = this.getByElement(playID + '-canvas').getContext('2d');
			var cPlayFillRect = function() {
				thisTemp.canvasFill(cPlay, [[12, 10], [29, 19], [12, 28]]);
			};
			cPlay.fillStyle = bBgColor;
			cPlayFillRect();
			var cPlayOver = function(event) {
				cPlay.clearRect(0, 0, bWidth, bHeight);
				cPlay.fillStyle = bOverColor;
				cPlayFillRect();
			};
			var cPlayOut = function(event) {
				cPlay.clearRect(0, 0, bWidth, bHeight);
				cPlay.fillStyle = bBgColor;
				cPlayFillRect();
			};

			this.addListenerInside('mouseover', cPlayOver, this.getByElement(playID + '-canvas'));
			this.addListenerInside('mouseout', cPlayOut, this.getByElement(playID + '-canvas'));
			//暂停按钮
			var cPause = this.getByElement(pauseID + '-canvas').getContext('2d');
			var cPauseFillRect = function() {
				thisTemp.canvasFillRect(cPause, [[10, 10, 5, 18], [22, 10, 5, 18]]);
			};
			cPause.fillStyle = bBgColor;
			cPauseFillRect();
			var cPauseOver = function(event) {
				cPause.clearRect(0, 0, bWidth, bHeight);
				cPause.fillStyle = bOverColor;
				cPauseFillRect();
			};
			var cPauseOut = function(event) {
				cPause.clearRect(0, 0, bWidth, bHeight);
				cPause.fillStyle = bBgColor;
				cPauseFillRect();
			};
			this.addListenerInside('mouseover', cPauseOver, this.getByElement(pauseID + '-canvas'));
			this.addListenerInside('mouseout', cPauseOut, this.getByElement(pauseID + '-canvas'));
			//前一集按钮
			var cFront = this.getByElement(frontID + '-canvas').getContext('2d');
			var cFrontFillRect = function() {
				thisTemp.canvasFill(cFront, [[16, 19], [30, 10], [30, 28]]);
				thisTemp.canvasFillRect(cFront, [[8, 10, 5, 18]]);
			};
			cFront.fillStyle = bBgColor;
			cFrontFillRect();
			var cFrontOver = function(event) {
				cFront.clearRect(0, 0, bWidth, bHeight);
				cFront.fillStyle = bOverColor;
				cFrontFillRect();
			};
			var cFrontOut = function(event) {
				cFront.clearRect(0, 0, bWidth, bHeight);
				cFront.fillStyle = bBgColor;
				cFrontFillRect();
			};

			this.addListenerInside('mouseover', cFrontOver, this.getByElement(frontID + '-canvas'));
			this.addListenerInside('mouseout', cFrontOut, this.getByElement(frontID + '-canvas'));
			//下一集按钮
			var cNext = this.getByElement(nextID + '-canvas').getContext('2d');
			var cNextFillRect = function() {
				thisTemp.canvasFill(cNext, [[8, 10], [22, 19], [8, 28]]);
				thisTemp.canvasFillRect(cNext, [[25, 10, 5, 18]]);
			};
			cNext.fillStyle = bBgColor;
			cNextFillRect();
			var cNextOver = function(event) {
				cNext.clearRect(0, 0, bWidth, bHeight);
				cNext.fillStyle = bOverColor;
				cNextFillRect();
			};
			var cNextOut = function(event) {
				cNext.clearRect(0, 0, bWidth, bHeight);
				cNext.fillStyle = bBgColor;
				cNextFillRect();
			};
			this.addListenerInside('mouseover', cNextOver, this.getByElement(nextID + '-canvas'));
			this.addListenerInside('mouseout', cNextOut, this.getByElement(nextID + '-canvas'));
			//全屏按钮
			var cFull = this.getByElement(fullID + '-canvas').getContext('2d');
			var cFullFillRect = function() {
				thisTemp.canvasFillRect(cFull, [[19, 10, 9, 3], [25, 13, 3, 6], [10, 19, 3, 9], [13, 25, 6, 3]]);
			};
			cFull.fillStyle = bBgColor;
			cFullFillRect();
			var cFullOver = function() {
				cFull.clearRect(0, 0, bWidth, bHeight);
				cFull.fillStyle = bOverColor;
				cFullFillRect();
			};
			var cFullOut = function() {
				cFull.clearRect(0, 0, bWidth, bHeight);
				cFull.fillStyle = bBgColor;
				cFullFillRect();
			};
			this.addListenerInside('mouseover', cFullOver, this.getByElement(fullID + '-canvas'));
			this.addListenerInside('mouseout', cFullOut, this.getByElement(fullID + '-canvas'));
			//定义退出全屏按钮样式
			var cEscFull = this.getByElement(escFullID + '-canvas').getContext('2d');
			var cEscFullFillRect = function() {
				thisTemp.canvasFillRect(cEscFull, [[20, 9, 3, 9], [23, 15, 6, 3], [9, 20, 9, 3], [15, 23, 3, 6]]);
			};
			cEscFull.fillStyle = bBgColor;
			cEscFullFillRect();
			var cEscFullOver = function() {
				cEscFull.clearRect(0, 0, bWidth, bHeight);
				cEscFull.fillStyle = bOverColor;
				cEscFullFillRect();
			};
			var cEscFullOut = function() {
				cEscFull.clearRect(0, 0, bWidth, bHeight);
				cEscFull.fillStyle = bBgColor;
				cEscFullFillRect();
			};
			this.addListenerInside('mouseover', cEscFullOver, this.getByElement(escFullID + '-canvas'));
			this.addListenerInside('mouseout', cEscFullOut, this.getByElement(escFullID + '-canvas'));
			//定义静音按钮的样式
			var cMute = this.getByElement(muteID + '-canvas').getContext('2d');
			var cMuteFillRect = function() {
				thisTemp.canvasFill(cMute, [[10, 15], [15, 15], [21, 10], [21, 28], [15, 23], [10, 23]]);
				thisTemp.canvasFillRect(cMute, [[23, 15, 2, 8], [27, 10, 2, 18]]);
			};
			cMute.fillStyle = bBgColor;
			cMuteFillRect();
			var cMuteOver = function() {
				cMute.clearRect(0, 0, bWidth, bHeight);
				cMute.fillStyle = bOverColor;
				cMuteFillRect();
			};
			var cMuteOut = function() {
				cMute.clearRect(0, 0, bWidth, bHeight);
				cMute.fillStyle = bBgColor;
				cMuteFillRect();
			};
			this.addListenerInside('mouseover', cMuteOver, this.getByElement(muteID + '-canvas'));
			this.addListenerInside('mouseout', cMuteOut, this.getByElement(muteID + '-canvas'));
			//定义取消广告静音按钮样式
			var cEscMute = this.getByElement(escMuteID + '-canvas').getContext('2d');
			var cEscMuteFillRect = function() {
				thisTemp.canvasFill(cEscMute, [[10, 15], [15, 15], [21, 10], [21, 28], [15, 23], [10, 23]]);
				thisTemp.canvasFill(cEscMute, [[23, 13], [24, 13], [33, 25], [32, 25]]);
				thisTemp.canvasFill(cEscMute, [[32, 13], [33, 13], [24, 25], [23, 25]]);
			};
			cEscMute.fillStyle = bBgColor;
			cEscMuteFillRect();
			var cEscMuteOver = function() {
				cEscMute.clearRect(0, 0, bWidth, bHeight);
				cEscMute.fillStyle = bOverColor;
				cEscMuteFillRect();
			};
			var cEscMuteOut = function() {
				cEscMute.clearRect(0, 0, bWidth, bHeight);
				cEscMute.fillStyle = bBgColor;
				cEscMuteFillRect();
			};
			this.addListenerInside('mouseover', cEscMuteOver, this.getByElement(escMuteID + '-canvas'));
			this.addListenerInside('mouseout', cEscMuteOut, this.getByElement(escMuteID + '-canvas'));
			//定义广告静音按钮的样式
			var cAdMute = this.getByElement(adMuteID + '-canvas').getContext('2d');
			var cAdMuteFillRect = function() {
				thisTemp.canvasFill(cAdMute, [[8, 12], [12, 12], [16, 8], [16, 21], [12, 18], [8, 18]]);
				thisTemp.canvasFillRect(cAdMute, [[18, 12, 2, 6], [21, 8, 2, 14]]);
			};
			cAdMute.fillStyle = bBgColor;
			cAdMuteFillRect();
			var cAdMuteOver = function() {
				cAdMute.clearRect(0, 0, bWidth, bHeight);
				cAdMute.fillStyle = bOverColor;
				cAdMuteFillRect();
			};
			var cAdMuteOut = function() {
				cAdMute.clearRect(0, 0, bWidth, bHeight);
				cAdMute.fillStyle = bBgColor;
				cAdMuteFillRect();
			};
			this.addListenerInside('mouseover', cAdMuteOver, this.getByElement(adMuteID + '-canvas'));
			this.addListenerInside('mouseout', cAdMuteOut, this.getByElement(adMuteID + '-canvas'));
			//定义取消静音广告按钮样式
			var cAdEscMute = this.getByElement(adEscMuteID + '-canvas').getContext('2d');
			var cAdEscMuteFillRect = function() {
				thisTemp.canvasFill(cAdEscMute, [[8, 12], [12, 12], [16, 8], [16, 21], [12, 18], [8, 18]]);
				thisTemp.canvasFill(cAdEscMute, [[18, 10], [20, 10], [26, 20], [24, 20]]);
				thisTemp.canvasFill(cAdEscMute, [[25, 10], [27, 10], [20, 20], [18, 20]]);
			};
			cAdEscMute.fillStyle = bBgColor;
			cAdEscMuteFillRect();
			var cAdEscMuteOver = function() {
				cAdEscMute.clearRect(0, 0, bWidth, bHeight);
				cAdEscMute.fillStyle = bOverColor;
				cAdEscMuteFillRect();
			};
			var cAdEscMuteOut = function() {
				cAdEscMute.clearRect(0, 0, bWidth, bHeight);
				cAdEscMute.fillStyle = bBgColor;
				cAdEscMuteFillRect();
			};
			this.addListenerInside('mouseover', cAdEscMuteOver, this.getByElement(adEscMuteID + '-canvas'));
			this.addListenerInside('mouseout', cAdEscMuteOut, this.getByElement(adEscMuteID + '-canvas'));
			//定义暂停广告关闭按钮
			var adPauseClose = this.getByElement(adPauseCloseID + '-canvas').getContext('2d');
			var adPauseCloseFillRect = function() {
				thisTemp.canvasFill(adPauseClose, [[4, 6], [6, 6], [16, 15], [14, 15]]);
				thisTemp.canvasFill(adPauseClose, [[14, 6], [16, 6], [6, 15], [4, 15]]);
			};
			adPauseClose.fillStyle = '#404856';
			adPauseCloseFillRect();
			var adPauseCloseOver = function() {
				adPauseClose.clearRect(0, 0, bWidth, bHeight);
				adPauseClose.fillStyle = bOverColor;
				adPauseCloseFillRect();
			};
			var adPauseCloseOut = function() {
				adPauseClose.clearRect(0, 0, bWidth, bHeight);
				adPauseClose.fillStyle = '#404856';
				adPauseCloseFillRect();
			};
			this.addListenerInside('mouseover', adPauseCloseOver, this.getByElement(adPauseCloseID + '-canvas'));
			this.addListenerInside('mouseout', adPauseCloseOut, this.getByElement(adPauseCloseID + '-canvas'));
			//定义loading样式
			var cLoading = this.getByElement(loadingID + '-canvas').getContext('2d');
			var cLoadingFillRect = function() {
				cLoading.save();
				var grad = cLoading.createLinearGradient(0, 0, 60, 60);
				grad.addColorStop(0, bBgColor);
				var grad2 = cLoading.createLinearGradient(0, 0, 80, 60);
				grad2.addColorStop(1, bOverColor);
				var grad3 = cLoading.createLinearGradient(0, 0, 80, 60);
				grad3.addColorStop(1, '#FF9900');
				var grad4 = cLoading.createLinearGradient(0, 0, 80, 60);
				grad4.addColorStop(1, '#CC3300');
				cLoading.strokeStyle = grad; //设置描边样式
				cLoading.lineWidth = 8; //设置线宽
				cLoading.beginPath(); //路径开始
				cLoading.arc(30, 30, 25, 0, 0.4 * Math.PI, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
				cLoading.stroke(); //绘制
				cLoading.closePath(); //路径结束
				cLoading.beginPath(); //路径开始
				cLoading.strokeStyle = grad2; //设置描边样式
				cLoading.arc(30, 30, 25, 0.5 * Math.PI, 0.9 * Math.PI, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
				cLoading.stroke(); //绘制
				cLoading.beginPath(); //路径开始
				cLoading.strokeStyle = grad3; //设置描边样式
				cLoading.arc(30, 30, 25, Math.PI, 1.4 * Math.PI, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
				cLoading.stroke(); //绘制
				cLoading.beginPath(); //路径开始
				cLoading.strokeStyle = grad4; //设置描边样式
				cLoading.arc(30, 30, 25, 1.5 * Math.PI, 1.9 * Math.PI, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
				cLoading.stroke(); //绘制
				cLoading.closePath(); //路径结束
				cLoading.restore();
			};
			cLoading.fillStyle = bBgColor;
			cLoadingFillRect();
			//定义中间暂停按钮的样式
			var cPauseCenter = this.getByElement(pauseCenterID + '-canvas').getContext('2d');
			var cPauseCenterFillRect = function() {
				thisTemp.canvasFill(cPauseCenter, [[28, 22], [59, 38], [28, 58]]);
				/* 指定几个颜色 */
				cPauseCenter.save();
				cPauseCenter.lineWidth = 5; //设置线宽
				cPauseCenter.beginPath(); //路径开始
				cPauseCenter.arc(40, 40, 35, 0, 2 * Math.PI, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
				cPauseCenter.stroke(); //绘制
				cPauseCenter.closePath(); //路径结束
				cPauseCenter.restore();
			};
			cPauseCenter.fillStyle = bBgColor;
			cPauseCenter.strokeStyle = bBgColor;
			cPauseCenterFillRect();
			var cPauseCenterOver = function() {
				cPauseCenter.clearRect(0, 0, 80, 80);
				cPauseCenter.fillStyle = bOverColor;
				cPauseCenter.strokeStyle = bOverColor;
				cPauseCenterFillRect();
			};
			var cPauseCenterOut = function() {
				cPauseCenter.clearRect(0, 0, 80, 80);
				cPauseCenter.fillStyle = bBgColor;
				cPauseCenter.strokeStyle = bBgColor;
				cPauseCenterFillRect();
			};
			this.addListenerInside('mouseover', cPauseCenterOver, this.getByElement(pauseCenterID + '-canvas'));
			this.addListenerInside('mouseout', cPauseCenterOut, this.getByElement(pauseCenterID + '-canvas'));

			//鼠标经过/离开音量调节按钮
			var volumeBOOver = function() {
				thisTemp.css(volumeBOID, 'backgroundColor', bOverColor);
				thisTemp.css(volumeBWID, 'backgroundColor', bBgColor);
			};
			var volumeBOOut = function() {
				thisTemp.css(volumeBOID, 'backgroundColor', bBgColor);
				thisTemp.css(volumeBWID, 'backgroundColor', bOverColor);
			};
			this.addListenerInside('mouseover', volumeBOOver, this.getByElement(volumeBOID));
			this.addListenerInside('mouseout', volumeBOOut, this.getByElement(volumeBOID));
			//鼠标经过/离开进度按钮
			var timeBOOver = function() {
				thisTemp.css(timeBOID, 'backgroundColor', bOverColor);
				thisTemp.css(timeBWID, 'backgroundColor', bBgColor);
			};
			var timeBOOut = function() {
				thisTemp.css(timeBOID, 'backgroundColor', bBgColor);
				thisTemp.css(timeBWID, 'backgroundColor', bOverColor);
			};
			this.addListenerInside('mouseover', timeBOOver, this.getByElement(timeBOID));
			this.addListenerInside('mouseout', timeBOOut, this.getByElement(timeBOID));

			this.addButtonEvent(); //注册按钮及音量调节，进度操作事件
			this.newMenu(); //单独设置右键的样式和事件
			this.controlBarHide(); //单独注册控制栏隐藏事件
			this.keypress(); //单独注册键盘事件
			//初始化音量调节框
			this.changeVolume(this.vars['volume']);
			//初始化判断是否需要显示上一集和下一集按钮
			this.showFrontNext();
			setTimeout(function() {
				thisTemp.elementCoordinate(); //调整中间暂停按钮/loading的位置/error的位置
			},
			100);
			this.checkBarWidth();
			var resize = function() {
				thisTemp.elementCoordinate();
				thisTemp.timeUpdateHandler();
				thisTemp.changeLoad();
				thisTemp.checkBarWidth();
				thisTemp.changeElementCoor(); //修改新加元件的坐标
				thisTemp.changePrompt();
				thisTemp.adPauseCoor();
				thisTemp.adOtherCoor();
			};
			this.addListenerInside('resize', resize, window);
		},
		/*
			内部函数
			创建按钮，使用canvas画布
		*/
		newCanvas: function(id, width, height) {
			return '<canvas class="' + id + '-canvas" width="' + width + '" height="' + height + '"></canvas>';
		},
		/*
			内部函数
			注册按钮，音量调节框，进度操作框事件
		*/
		addButtonEvent: function() {
			var thisTemp = this;
			//定义按钮的单击事件
			var playClick = function(event) {
				thisTemp.videoPlay();
				thisTemp.sendJS('clickEvent', 'actionScript->videoPlay');
			};
			this.addListenerInside('click', playClick, this.CB['play']);
			this.addListenerInside('click', playClick, this.CB['pauseCenter']);
			var pauseClick = function(event) {
				thisTemp.videoPause();
				thisTemp.sendJS('clickEvent', 'actionScript->videoPause');
			};
			this.addListenerInside('click', pauseClick, this.CB['pause']);
			var frontClick = function(event) {
				if (thisTemp.vars['front']) {
					eval(thisTemp.vars['front'] + '()');
					thisTemp.sendJS('clickEvent', 'actionScript->' + thisTemp.vars['front']);
				}
			};
			this.addListenerInside('click', frontClick, this.CB['front']);
			var nextClick = function(event) {
				if (thisTemp.vars['next']) {
					eval(thisTemp.vars['next'] + '()');
					thisTemp.sendJS('clickEvent', 'actionScript->' + thisTemp.vars['next']);
				}
			};
			this.addListenerInside('click', nextClick, this.CB['next']);
			var muteClick = function(event) {
				thisTemp.videoMute();
				thisTemp.sendJS('clickEvent', 'actionScript->videoMute');
			};
			this.addListenerInside('click', muteClick, this.CB['mute']);
			var escMuteClick = function(event) {
				thisTemp.videoEscMute();
				thisTemp.sendJS('clickEvent', 'actionScript->videoEscMute');
			};
			this.addListenerInside('click', escMuteClick, this.CB['escMute']);
			var fullClick = function(event) {
				thisTemp.fullScreen();
				thisTemp.sendJS('clickEvent', 'actionScript->fullScreen');
			};
			this.addListenerInside('click', fullClick, this.CB['full']);
			var escFullClick = function(event) {
				thisTemp.quitFullScreen();
				thisTemp.sendJS('clickEvent', 'actionScript->quitFullScreen');
			};
			this.addListenerInside('click', escFullClick, this.CB['escFull']);
			var adSkipClick = function(event) {
				if (thisTemp.CB['adSkip'].innerHTML == thisTemp.language['skipAd']) {
					thisTemp.runFunction(thisTemp.config['adSkipClick']);
				}
			};
			this.addListenerInside('click', adSkipClick, this.CB['adSkip']);
			var adMuteClick = function(event) {
				thisTemp.adMuteFunction();
			};
			this.addListenerInside('click', adMuteClick, this.CB['adMute']);
			var adEscMuteClick = function(event) {
				thisTemp.adEscMuteFunction();
			};
			this.addListenerInside('click', adEscMuteClick, this.CB['adEscMute']);
			var adPauseCloseClick = function(event) {
				thisTemp.adPauseCloseFunction();
			};
			this.addListenerInside('click', adPauseCloseClick, this.CB['adPauseClose']);
			//定义各个按钮的鼠标经过/离开事件
			var promptHide = function(event) {
				thisTemp.promptShow(false);
			};
			var playOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['play']);
			};
			this.addListenerInside('mouseover', playOver, this.CB['play']);
			this.addListenerInside('mouseout', promptHide, this.CB['play']);
			var pauseOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['pause']);
			};
			this.addListenerInside('mouseover', pauseOver, this.CB['pause']);
			this.addListenerInside('mouseout', promptHide, this.CB['pause']);
			var frontOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['front']);
			};
			this.addListenerInside('mouseover', frontOver, this.CB['front']);
			this.addListenerInside('mouseout', promptHide, this.CB['front']);
			var nextOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['next']);
			};
			this.addListenerInside('mouseover', nextOver, this.CB['next']);
			this.addListenerInside('mouseout', promptHide, this.CB['next']);
			var muteOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['mute']);
			};
			this.addListenerInside('mouseover', muteOver, this.CB['mute']);
			this.addListenerInside('mouseout', promptHide, this.CB['mute']);
			var escMuteOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['escMute']);
			};
			this.addListenerInside('mouseover', escMuteOver, this.CB['escMute']);
			this.addListenerInside('mouseout', promptHide, this.CB['escMute']);
			var fullOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['full']);
			};
			this.addListenerInside('mouseover', fullOver, this.CB['full']);
			this.addListenerInside('mouseout', promptHide, this.CB['full']);
			var escFullOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['escFull']);
			};
			this.addListenerInside('mouseover', escFullOver, this.CB['escFull']);
			this.addListenerInside('mouseout', promptHide, this.CB['escFull']);
			var definitionOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['definition']);
			};
			this.addListenerInside('mouseover', definitionOver, this.CB['definition']);
			this.addListenerInside('mouseout', promptHide, this.CB['definition']);
			var playbackrateOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['playbackrate']);
			};
			this.addListenerInside('mouseover', playbackrateOver, this.CB['playbackrate']);
			this.addListenerInside('mouseout', promptHide, this.CB['playbackrate']);
			var subtitlesOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['subtitles']);
			};
			this.addListenerInside('mouseover', subtitlesOver, this.CB['subtitles']);
			this.addListenerInside('mouseout', promptHide, this.CB['subtitles']);
			//定义音量和进度按钮的滑块事件
			var volumePrompt = function(vol) {
				var volumeBOXY = thisTemp.getCoor(thisTemp.CB['volumeBO']);
				var promptObj = {
					title: thisTemp.language['volume'] + vol + '%',
					x: volumeBOXY['x'] + thisTemp.CB['volumeBO'].offsetWidth * 0.5,
					y: volumeBOXY['y']
				};
				thisTemp.promptShow(false, promptObj);
			};
			var volumeObj = {
				slider: this.CB['volumeBO'],
				follow: this.CB['volumeUp'],
				refer: this.CB['volumeBg'],
				grossValue: 'volume',
				pd: true,
				startFun: function(vol) {},
				monitorFun: function(vol) {
					thisTemp.changeVolume(vol * 0.01, false, false);
					volumePrompt(vol);
				},
				endFun: function(vol) {},
				overFun: function(vol) {
					volumePrompt(vol);
				}
			};
			this.slider(volumeObj);
			var volumeClickObj = {
				refer: this.CB['volumeBg'],
				grossValue: 'volume',
				fun: function(vol) {
					thisTemp.changeVolume(vol * 0.01, true, true);
				}
			};
			this.progressClick(volumeClickObj);
			this.timeButtonMouseDown(); //用单击的函数来判断是否需要建立控制栏监听
			//鼠标经过/离开音量调节框时的
			var volumeBgMove = function(event) {
				var volumeBgXY = thisTemp.getCoor(thisTemp.CB['volumeBg']);
				var eventX = thisTemp.client(event)['x'];
				var eventVolume = parseInt((eventX - volumeBgXY['x']) * 100 / thisTemp.CB['volumeBg'].offsetWidth);
				var buttonPromptObj = {
					title: thisTemp.language['volume'] + eventVolume + '%',
					x: eventX,
					y: volumeBgXY['y']
				};
				thisTemp.promptShow(false, buttonPromptObj);
			};
			this.addListenerInside('mousemove', volumeBgMove, this.CB['volumeBg']);
			this.addListenerInside('mouseout', promptHide, this.CB['volumeBg']);
			this.addListenerInside('mouseout', promptHide, this.CB['volumeBO']);
			//注册清晰度相关事件
			this.addDefListener();
			//注册倍速相关事件
			this.addPlaybackrate();
			//注册多字幕事件
			this.addSubtitles();
		},
		/*
			内部函数
			注册单击视频动作
		*/
		videoClick: function() {
			var thisTemp = this;
			var clearTimerClick = function() {
				if (thisTemp.timerClick != null) {
					if (thisTemp.timerClick.runing) {
						thisTemp.timerClick.stop();
					}
					thisTemp.timerClick = null;
				}
			};
			var timerClickFun = function() {
				clearTimerClick();
				thisTemp.isClick = false;
				thisTemp.sendJS('videoClick',thisTemp.videoClickXy);
				if (thisTemp.adPlayerPlay) {
					var ad = thisTemp.getNowAdvertisements();
					try {
						if (ad['link'] != '') {
							window.open(ad['link']);
						}
						thisTemp.ajaxSuccessNull(ad['clickMonitor']);
					} catch(event) {}
				} else {
					if (thisTemp.ckplayerConfig['config']['click']) {
						thisTemp.playOrPause();
					}
				}

			};
			clearTimerClick();
			if (this.isClick) {
				this.isClick = false;
				thisTemp.sendJS('videoDoubleClick',thisTemp.videoClickXy);
				if (thisTemp.ckplayerConfig['config']['doubleClick']) {
					if (!this.full) {
						thisTemp.fullScreen();
					} else {
						thisTemp.quitFullScreen();
					}
				}

			} else {
				this.isClick = true;
				this.timerClick = new this.timer(300, timerClickFun, 1)
				//this.timerClick.start();
			}

		},
		/*
			内部函数
			注册鼠标经过进度滑块的事件
		*/
		timeButtonMouseDown: function() {
			var thisTemp = this;
			var timePrompt = function(time) {
				if (isNaN(time)) {
					time = 0;
				}
				var timeButtonXY = thisTemp.getCoor(thisTemp.CB['timeButton']);
				var promptObj = {
					title: thisTemp.formatTime(time),
					x: timeButtonXY['x'] - thisTemp.pdCoor['x'] + thisTemp.CB['timeButton'].offsetWidth * 0.5,
					y: timeButtonXY['y'] - thisTemp.pdCoor['y']
				};
				thisTemp.promptShow(false, promptObj);
			};
			var timeObj = {
				slider: this.CB['timeButton'],
				follow: this.CB['timeProgress'],
				refer: this.CB['timeBoBg'],
				grossValue: 'time',
				pd: false,
				startFun: function(time) {
					thisTemp.isTimeButtonMove = false;
				},
				monitorFun: function(time) {},
				endFun: function(time) {
					if (thisTemp.V) {
						if (thisTemp.V.duration > 0) {
							thisTemp.needSeek = 0;
							thisTemp.videoSeek(parseInt(time));
						}
					}
				},
				overFun: function(time) {
					timePrompt(time);
				}
			};
			var timeClickObj = {
				refer: this.CB['timeBoBg'],
				grossValue: 'time',
				fun: function(time) {
					if (thisTemp.V) {
						if (thisTemp.V.duration > 0) {
							thisTemp.needSeek = 0;
							thisTemp.videoSeek(parseInt(time));
						}
					}
				}
			};
			var timeBoBgmousemove = function(event) {
				var timeBoBgXY = thisTemp.getCoor(thisTemp.CB['timeBoBg']);
				var eventX = thisTemp.client(event)['x'];
				var duration=thisTemp.V.duration;
				if (isNaN(duration) || parseInt(duration) < 0.2) {
					duration = thisTemp.vars['duration'];
				}
				if(thisTemp.vars['forceduration']>0){
					duration=thisTemp.vars['forceduration'];
				}
				var eventTime = parseInt((eventX - timeBoBgXY['x']) * duration / thisTemp.CB['timeBoBg'].offsetWidth);
				var buttonPromptObj = {
					title: thisTemp.formatTime(eventTime),
					x: eventX,
					y: timeBoBgXY['y']
				};
				thisTemp.promptShow(false, buttonPromptObj);
				var def = false;
				if (!thisTemp.isUndefined(thisTemp.CB['definitionP'])) {
					if (thisTemp.css(thisTemp.CB['definitionP'], 'display') != 'block') {
						def = true;
					}
				}
				if (thisTemp.vars['preview'] != null && def) {
					buttonPromptObj['time'] = eventTime;
					thisTemp.preview(buttonPromptObj);
				}
			};
			var promptHide = function(event) {
				thisTemp.promptShow(false);
				if (thisTemp.previewDiv != null) {
					thisTemp.css([thisTemp.previewDiv, thisTemp.previewTop], 'display', 'none');
				}
			};
			if (!this.vars['live']) { //如果不是直播
				this.isTimeButtonDown = true;
				this.addListenerInside('mousemove', timeBoBgmousemove, this.CB['timeBoBg']);
				this.addListenerInside('mouseout', promptHide, this.CB['timeBoBg']);
			} else {
				this.isTimeButtonDown = false;
				timeObj['removeListenerInside'] = true;
				timeClickObj['removeListenerInside'] = true;
			}
			this.slider(timeObj);
			this.progressClick(timeClickObj);

		},
		/*
			内部函数
			注册调节框上单击事件，包含音量调节框和播放时度调节框
		*/
		progressClick: function(obj) {
			/*
				refer:参考对象
				fun:返回函数
				refer:参考元素，即背景
				grossValue:调用的参考值类型
				pd:
			*/
			//建立参考元素的mouseClick事件，用来做为鼠标在其上按下时触发的状态
			var thisTemp = this;
			var referMouseClick = function(event) {
				var referX = thisTemp.client(event)['x'] - thisTemp.getCoor(obj['refer'])['x'];
				var rWidth = obj['refer'].offsetWidth;
				var grossValue = 0;
				if (obj['grossValue'] == 'volume') {
					grossValue = 100;
				} else {
					if (thisTemp.V) {
						grossValue = thisTemp.V.duration;
						if (isNaN(grossValue) || parseInt(grossValue) < 0.2) {
							grossValue = thisTemp.vars['duration'];
						}
						if(thisTemp.vars['forceduration']>0){
							grossValue=thisTemp.vars['forceduration'];
						}
					}
				}
				var nowZ = parseInt(referX * grossValue / rWidth);
				if (obj['fun']) {
					if (obj['grossValue'] === 'time') {
						var sliderXY = thisTemp.getCoor(thisTemp.CB['timeButton']);
						sliderLeft = sliderXY['x'];
						if (!thisTemp.checkSlideLeft(referX, sliderLeft, rWidth)) {
							return;
						}
						var bimeButtonWB = thisTemp.CB['timeButton'].offsetWidth * 0.5;
						thisTemp.css(thisTemp.CB['timeButton'], 'left', (referX - bimeButtonWB) + 'px');
						thisTemp.css(thisTemp.CB['timeProgress'], 'width', (referX) + 'px');
					}
					obj['fun'](nowZ);
				}
			};
			if (this.isUndefined(obj['removeListenerInside'])) {
				this.addListenerInside('click', referMouseClick, obj['refer']);
			} else {
				this.removeListenerInside('click', referMouseClick, obj['refer']);
			}

		},

		/*
			内部函数
			共用的注册滑块事件
		*/
		slider: function(obj) {
			/*
				obj={
					slider:滑块元素
					follow:跟随滑块的元素
					refer:参考元素，即背景
					grossValue:调用的参考值类型
					startFun:开始调用的元素
					monitorFun:监听函数
					endFun:结束调用的函数
					overFun:鼠标放上去后调用的函数
					pd:是否需要修正
				}
			*/
			var thisTemp = this;
			var clientX = 0,
			criterionWidth = 0,
			sliderLeft = 0,
			referLeft = 0;
			var value = 0;
			var calculation = function() { //根据滑块的left计算百分比
				var sLeft = parseInt(thisTemp.css(obj['slider'], 'left'));
				var rWidth = obj['refer'].offsetWidth - obj['slider'].offsetWidth;
				var grossValue = 0;
				if (thisTemp.isUndefined(sLeft) || isNaN(sLeft)) {
					sLeft = 0;
				}
				if (obj['grossValue'] == 'volume') {
					grossValue = 100;
				} else {
					if (thisTemp.V) {
						grossValue = thisTemp.V.duration;
					}
				}
				return parseInt(sLeft * grossValue / rWidth);
			};
			var mDown = function(event) {
				thisTemp.addListenerInside('mousemove', mMove, document);
				thisTemp.addListenerInside('mouseup', mUp, document);
				var referXY = thisTemp.getCoor(obj['refer']);
				var sliderXY = thisTemp.getCoor(obj['slider']);
				clientX = thisTemp.client(event)['x'];
				referLeft = referXY['x'];
				sliderLeft = sliderXY['x'];
				criterionWidth = clientX - sliderLeft;
				if (obj['startFun']) {
					obj['startFun'](calculation());
				}
			};
			var mMove = function(event) {
				clientX = thisTemp.client(event)['x'];
				var newX = clientX - criterionWidth - referLeft;
				if (newX < 0) {
					newX = 0;
				}
				if (newX > obj['refer'].offsetWidth - obj['slider'].offsetWidth) {
					newX = obj['refer'].offsetWidth - obj['slider'].offsetWidth;
				}
				if (obj['slider'] === thisTemp.CB['timeButton']) {
					if (!thisTemp.checkSlideLeft(newX, sliderLeft, obj['refer'].offsetWidth)) {
						return;
					}
				}
				thisTemp.css(obj['slider'], 'left', newX + 'px');
				thisTemp.css(obj['follow'], 'width', (newX + obj['slider'].offsetWidth * 0.5) + 'px');
				var nowZ = calculation();
				if (obj['monitorFun']) {
					obj['monitorFun'](nowZ);
				}
			};
			var mUp = function(event) {
				thisTemp.removeListenerInside('mousemove', mMove, document);
				thisTemp.removeListenerInside('mouseup', mUp, document);
				if (obj['endFun']) {
					obj['endFun'](calculation());
				}
			};
			var mOver = function(event) {
				if (obj['overFun']) {
					obj['overFun'](calculation());
				}

			};
			if (this.isUndefined(obj['removeListenerInside'])) {
				this.addListenerInside('mousedown', mDown, obj['slider']);
				this.addListenerInside('mouseover', mOver, obj['slider']);
			} else {
				this.removeListenerInside('mousedown', mDown, obj['slider']);
				this.removeListenerInside('mouseover', mOver, obj['slider']);
			}
		},
		/*
			内部函数
			判断是否可以拖动进度按钮或点击进度栏
		*/
		checkSlideLeft: function(newX, sliderLeft, refer) {
			var timeSA = this.ckplayerConfig['config']['timeScheduleAdjust'];
			switch (timeSA) {
			case 0:
				return false;
				break;
			case 2:
				if (newX < sliderLeft) {
					return false;
				}
				break;
			case 3:
				if (newX > sliderLeft) {
					return false;
				}
				break;
			case 4:
				if (!this.timeSliderLeftTemp) {
					this.timeSliderLeftTemp = sliderLeft / refer;
				}
				if (newX < this.timeSliderLeftTemp * refer) {
					return false;
				}
				break;
			case 5:
				if (!this.timeSliderLeftTemp) {
					this.timeSliderLeftTemp = sliderLeft / refer;
				} else {
					var timeSliderMax = sliderLeft / refer;
					if (timeSliderMax > this.timeSliderLeftTemp) {
						this.timeSliderLeftTemp = timeSliderMax;
					}
				}
				if (newX > this.timeSliderLeftTemp * refer) {
					return false;
				}
				break;
			default:
				return true;
				break;
			}
			return true;
		},
		/*
			内部函数
			显示loading
		*/
		loadingStart: function(rot) {
			var thisTemp = this;
			if (this.isUndefined(rot)) {
				rot = true;
			}
			if (this.showFace) {
				this.css(thisTemp.CB['loading'], 'display', 'none');
			}
			if (this.timerLoading != null) {
				if (this.timerLoading.runing) {
					this.timerLoading.stop();
				}
				this.timerLoading = null;
			}
			var buffer = 0;
			var loadingFun = function() {
				var nowRotate = '0';
				try {
					nowRotate = thisTemp.css(thisTemp.CB['loadingCanvas'], 'transform') || thisTemp.css(thisTemp.CB['loadingCanvas'], '-ms-transform') || thisTemp.css(thisTemp.CB['loadingCanvas'], '-moz-transform') || thisTemp.css(thisTemp.CB['loadingCanvas'], '-webkit-transform') || thisTemp.css(thisTemp.CB['loadingCanvas'], '-o-transform') || '0';
				} catch(event) {}
				nowRotate = parseInt(nowRotate.replace('rotate(', '').replace('deg);', ''));
				nowRotate += 4;
				if (nowRotate > 360) {
					nowRotate = 0;
				}
				if (thisTemp.showFace) {
					thisTemp.css(thisTemp.CB['loadingCanvas'], {
						transform: 'rotate(' + nowRotate + 'deg)',
						msTransform: 'rotate(' + nowRotate + 'deg)',
						mozTransform: 'rotate(' + nowRotate + 'deg)',
						webkitTransform: 'rotate(' + nowRotate + 'deg)',
						oTransform: 'rotate(' + nowRotate + 'deg)'
					});
				}
				buffer++;
				if (buffer >= 99) {
					buffer = 99;
				}
				thisTemp.sendJS('buffer', buffer);
			};
			if (rot) {
				this.timerLoading = new this.timer(10, loadingFun);
				//this.timerLoading.start();
				if (this.showFace) {
					this.css(thisTemp.CB['loading'], 'display', 'block');
				}
			} else {
				thisTemp.sendJS('buffer', 100);
			}
		},
		/*
			内部函数
			判断是否需要显示上一集和下一集
		*/
		showFrontNext: function() {
			if (!this.showFace) {
				return;
			}
			if (this.vars['front']) {
				this.css([this.CB['front'], this.CB['frontLine']], 'display', 'block');
			} else {
				this.css([this.CB['front'], this.CB['frontLine']], 'display', 'none');
			}
			if (this.vars['next']) {
				this.css([this.CB['next'], this.CB['nextLine']], 'display', 'block');
			} else {
				this.css([this.CB['next'], this.CB['nextLine']], 'display', 'none');
			}
		},
		/*
			内部函数
			显示提示语
		*/
		promptShow: function(ele, data) {
			if (!this.showFace) {
				return;
			}
			var obj = {};
			if (ele || data) {
				if (!this.isUndefined(data)) {
					obj = data;
				} else {
					var offsetCoor = this.getCoor(ele);
					obj = {
						title: this.getDataset(ele, 'title'),
						x: offsetCoor['x'] + ele.offsetWidth * 0.5,
						y: offsetCoor['y']
					};
				}
				this.CB['prompt'].innerHTML = obj['title'];
				this.css(this.CB['prompt'], 'display', 'block');
				var promoptWidth = this.getStringLen(obj['title']) * 10;
				this.css(this.CB['promptBg'], 'width', promoptWidth + 'px');
				this.css(this.CB['prompt'], 'width', promoptWidth + 'px');
				promoptWidth += 10;
				var x = obj['x'] - (promoptWidth * 0.5);
				var y = this.PD.offsetHeight - obj['y'] + 8;
				if (x < 0) {
					x = 0;
				}
				if (x > this.PD.offsetWidth - promoptWidth) {
					x = this.PD.offsetWidth - promoptWidth;
				}
				this.css([this.CB['promptBg'], this.CB['prompt']], {
					display: 'block',
					left: x + 'px',
					bottom: y + 'px'
				});
			} else {
				this.css([this.CB['promptBg'], this.CB['prompt']], {
					display: 'none'
				});
			}
		},
		/*
			内部函数
			监听错误
		*/
		timerErrorFun: function() {
			var thisTemp = this;
			this.errorSend = false;
			var clearIntervalError = function(event) {
				if (thisTemp.timerError != null) {
					if (thisTemp.timerError.runing) {
						thisTemp.timerError.stop();
					}
					thisTemp.timerError = null;
				}
			};
			var errorFun = function(event) {
				clearIntervalError();
				thisTemp.error = true;
				//提取错误播放地址
				thisTemp.errorUrl = thisTemp.getVideoUrl();
				//提取错误播放地址结束
				if (!thisTemp.errorSend) {
					thisTemp.errorSend = true;
					thisTemp.sendJS('error');
				}
				if (thisTemp.showFace) {
					thisTemp.css(thisTemp.CB['errorText'], 'display', 'block');
					thisTemp.css(thisTemp.CB['pauseCenter'], 'display', 'none');
					thisTemp.css(thisTemp.CB['loading'], 'display', 'none');
				}
				thisTemp.V.removeAttribute('poster');
				thisTemp.resetPlayer();
			};
			var errorListenerFun = function(event) {
				setTimeout(function() {
					if (isNaN(thisTemp.V.duration)) {
						errorFun(event);
					}
				},
				500);

			};
			if (!this.errorAdd) {
				this.errorAdd = true;
				this.addListenerInside('error', errorListenerFun, this.V);
			}
			clearIntervalError();
			var timerErrorFun = function() {
				if (thisTemp.V && parseInt(thisTemp.V.networkState) == 3) {
					errorFun();
				}
			};
			this.timerError = new this.timer(this.config['errorTime'], timerErrorFun);
			//this.timerError.start();
		},
		/*
			内部函数
			构建判断全屏还是非全屏的判断
		*/
		judgeFullScreen: function() {
			var thisTemp = this;
			if (this.timerFull != null) {
				if (this.timerFull.runing) {
					this.timerFull.stop();
				}
				this.timerFull = null;
			}
			var fullFun = function() {
				thisTemp.isFullScreen();
			};
			this.timerFull = new this.timer(20, fullFun);
		},
		/*
			内部函数
			判断是否是全屏
		*/
		isFullScreen: function() {
			if (!this.showFace) {
				return;
			}
			var fullState = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement;
			if (fullState && !this.full) {
				this.full = true;
				this.sendJS('full', true);
				this.elementCoordinate();
				this.css(this.CB['full'], 'display', 'none');
				this.css(this.CB['escFull'], 'display', 'block');
				if (this.vars['live'] == 0) {
					this.timeUpdateHandler();
				}
				this.PD.appendChild(this.CB['menu']);
			}
			if (!fullState && this.full) {
				this.full = false;
				this.sendJS('full', false);
				this.elementCoordinate();
				this.css(this.CB['full'], 'display', 'block');
				this.css(this.CB['escFull'], 'display', 'none');
				if (this.timerFull != null) {
					if (this.timerFull.runing) {
						this.timerFull.stop();
					}
					this.timerFull = null;
				}
				if (this.vars['live'] == 0) {
					this.timeUpdateHandler();
				}
				this.body.appendChild(this.CB['menu']);
			}
		},
		/*
			内部函数
			构建右键内容及注册相关动作事件
		*/
		newMenu: function() {
			var thisTemp = this;
			var i = 0;
			this.css(this.CB['menu'], {
				backgroundColor: '#FFFFFF',
				padding: '5px',
				position: 'absolute',
				left: '10px',
				top: '20px',
				display: 'none',
				zIndex: '999',
				color: '#A1A9BE',
				boxShadow: '2px 2px 3px #AAAAAA'
			});
			var mArr = this.contextMenu;
			var cMenu = this.ckplayerConfig['menu'];
			if (cMenu['name']) {
				if (cMenu['link']) {
					mArr[0] = [cMenu['name'], 'link', cMenu['link']];
				} else {
					mArr[0] = [cMenu['name'], 'default'];
				}
			}
			if (cMenu['version']) {
				mArr[1] = [cMenu['version'], 'default', 'line'];
			}
			if (cMenu['more']) {
				if (typeof(cMenu['more']) == 'object') {
					if (cMenu['more'].length > 0) {
						var moreArr = cMenu['more'];
						for (i = 0; i < moreArr.length; i++) {
							var mTemp = moreArr[i];
							var arrTemp = [];
							if (mTemp['name']) {
								arrTemp.push(mTemp['name']);
							}
							if (mTemp['clickEvent'] && mTemp['clickEvent'] != 'none') {
								var eveObj = this.clickEvent(mTemp['clickEvent']);
								arrTemp.push(eveObj['type']);
								if (eveObj['fun']) {
									arrTemp.push(eveObj['fun']);
								}
								if (eveObj['link']) {
									arrTemp.push(eveObj['link']);
								}
								if (eveObj['target']) {
									arrTemp.push(' target="' + eveObj['target'] + '"');
								}
							}
							if (mTemp['separatorBefore']) {
								arrTemp.push('line');
							}
							mArr.push(arrTemp);
						}
					}
				}
			}
			var html = '';
			for (i = 0; i < mArr.length; i++) {
				var me = mArr[i];
				switch (me[1]) {
				case 'default':
					html += '<p>' + me[0] + '</p>';
					break;
				case 'link':
					if (me[3]) {
						me[3] = 'target="' + me[3] + '"';
					}
					html += '<p><a href="' + me[2] + '"' + me[3] + '>' + me[0] + '</a></p>';
					break;
				case 'javaScript':
					html += '<p><a href="javascript:' + me[2] + '">' + me[0] + '</a></p>';
					break;
				case 'actionScript':
					html += '<p><a href="javascript:' + this.vars['variable'] + me[2].replace('thisTemp', '') + '">' + me[0] + '</a></p>';
					break;
				default:
					break;
				}
			}
			this.CB['menu'].innerHTML = html;
			var pArr = this.CB['menu'].childNodes;
			for (i = 0; i < pArr.length; i++) {
				this.css(pArr[i], {
					height: '30px',
					lineHeight: '30px',
					margin: '0px',
					fontFamily: this.fontFamily,
					fontSize: '12px',
					paddingLeft: '10px',
					paddingRight: '30px'
				});
				if (mArr[i][mArr[i].length - 1] == 'line') {
					this.css(pArr[i], 'borderBottom', '1px solid #e9e9e9');
				}
				var aArr = pArr[i].childNodes;
				for (var n = 0; n < aArr.length; n++) {
					if (aArr[n].localName == 'a') {
						this.css(aArr[n], {
							color: '#000000',
							textDecoration: 'none'
						});
					}
				}
			}
			this.PD.oncontextmenu = function(event) {
				var eve = event || window.event;
				var client = thisTemp.client(event);
				if (eve.button == 2) {
					eve.returnvalue = false;
					var x = client['x'] + thisTemp.pdCoor['x'] - 2;
					var y = client['y'] + thisTemp.pdCoor['y'] - 2;
					thisTemp.css(thisTemp.CB['menu'], {
						display: 'block',
						left: x + 'px',
						top: y + 'px'
					});
					return false;
				}
				return true;
			};
			var setTimeOutPClose = function() {
				if (setTimeOutP) {
					window.clearTimeout(setTimeOutP);
					setTimeOutP = null;
				}
			};
			var setTimeOutP = null;
			var mouseOut = function(event) {
				setTimeOutPClose();
				setTimeOutP = setTimeout(function(event) {
					thisTemp.css(thisTemp.CB['menu'], 'display', 'none');
				},
				500);
			};
			this.addListenerInside('mouseout', mouseOut, thisTemp.CB['menu']);
			var mouseOver = function(event) {
				setTimeOutPClose();
			};
			this.addListenerInside('mouseover', mouseOver, thisTemp.CB['menu']);

		},
		/*
			内部函数
			构建控制栏隐藏事件
		*/
		controlBarHide: function(hide) {
			var thisTemp = this;
			var client = {
				x: 0,
				y: 0
			},
			oldClient = {
				x: 0,
				y: 0
			};
			var cShow = true,
			force = false;
			var oldCoor = [0, 0];
			var controlBarShow = function(show) {
				if (show && !cShow && thisTemp.controlBarIsShow) {
					cShow = true;
					thisTemp.sendJS('controlBar', true);
					thisTemp.css(thisTemp.CB['controlBarBg'], 'display', 'block');
					thisTemp.css(thisTemp.CB['controlBar'], 'display', 'block');
					thisTemp.css(thisTemp.CB['timeProgressBg'], 'display', 'block');
					thisTemp.css(thisTemp.CB['timeBoBg'], 'display', 'block');
					thisTemp.changeVolume(thisTemp.volume);
					thisTemp.changeLoad();
					if (!thisTemp.timerBuffer) {
						thisTemp.bufferEdHandler();
					}
				} else {
					if (cShow) {
						cShow = false;
						var paused = thisTemp.getMetaDate()['paused'];
						if (force) {
							paused = false;
						}
						if (!paused) {
							thisTemp.sendJS('controlBar', false);
							thisTemp.css(thisTemp.CB['controlBarBg'], 'display', 'none');
							thisTemp.css(thisTemp.CB['controlBar'], 'display', 'none');
							thisTemp.css(thisTemp.CB['timeProgressBg'], 'display', 'none');
							thisTemp.css(thisTemp.CB['timeBoBg'], 'display', 'none');
							thisTemp.promptShow(false);

						}
					}
				}
			};
			var cbarFun = function(event) {
				if (client['x'] == oldClient['x'] && client['y'] == oldClient['y']) {
					var cdH = parseInt(thisTemp.CD.offsetHeight);
					if ((client['y'] < cdH - 50 || client['y'] > cdH - 2) && cShow && !thisTemp.getMetaDate()['paused']) {
						controlBarShow(false);
					}
				} else {
					if (!cShow) {
						controlBarShow(true);
					}
				}
				oldClient = {
					x: client['x'],
					y: client['y']
				}
			};
			this.timerCBar = new this.timer(2000, cbarFun);
			var cdMove = function(event) {
				var getClient = thisTemp.client(event);
				client['x'] = getClient['x'];
				client['y'] = getClient['y'];
				if (!cShow) {
					controlBarShow(true);
				}
			};
			this.addListenerInside('mousemove', cdMove, thisTemp.CD);
			this.addListenerInside('ended', cdMove);
			this.addListenerInside('resize', cdMove, window);
			if (hide === true) {
				cShow = true;
				force = true;
				controlBarShow(false);
			}
			if (hide === false) {
				cShow = false;
				force = true;
				controlBarShow(true);
			}
		},

		/*
			内部函数
			注册键盘按键事件
		*/
		keypress: function() {
			var thisTemp = this;
			var keyDown = function(eve) {
				var keycode = eve.keyCode || eve.which;
				if (thisTemp.adPlayerPlay) {
					return;
				}
				switch (keycode) {
					case 32:
						thisTemp.playOrPause();
						break;
					case 37:
						thisTemp.fastBack();
						break;
					case 39:
						thisTemp.fastNext();
						break;
					case 38:
						now = thisTemp.volume + thisTemp.ckplayerConfig['config']['volumeJump'];
						thisTemp.changeVolume(now > 1 ? 1 : now);
						break;
					case 40:
						now = thisTemp.volume - thisTemp.ckplayerConfig['config']['volumeJump'];
						thisTemp.changeVolume(now < 0 ? 0 : now);
						break;
					default:
						break;
				}
			};
			this.addListenerInside('keydown', keyDown, window || document);
		},
		/*
			内部函数
			注册倍速相关
		*/
		playbackRate: function() {
			if (!this.showFace || !this.ckplayerConfig['config']['playbackRate']) {
				return;
			}
			var thisTemp = this;
			var vArr = this.playbackRateArr;
			var html = '';
			var nowD = ''; //当前的倍速
			var i = 0;
			if (!nowD) {
				nowD = vArr[this.playbackRateDefault][1];
			}
			if (vArr.length > 1) {
				var zlen = 0;
				for (i = 0; i < vArr.length; i++) {
					html = '<p>' + vArr[i][1] + '</p>' + html;
					var dlen = this.getStringLen(vArr[i][1]);
					if (dlen > zlen) {
						zlen = dlen;
					}
				}
				if (html) {
					html += '<p>' + nowD + '</p>';
				}
				this.CB['playbackrate'].innerHTML = nowD;
				this.CB['playbackrateP'].innerHTML = html;
				this.css([this.CB['playbackrate'], this.CB['playbackrateLine']], 'display', 'block');
				var pArr = this.CB['playbackrateP'].childNodes;
				for (var i = 0; i < pArr.length; i++) {
					var fontColor = '#FFFFFF';
					if (pArr[i].innerHTML == nowD) {
						fontColor = '#0782F5';
					}
					this.css(pArr[i], {
						color: fontColor,
						margin: '0px',
						padding: '0px',
						fontSize: '14px',
						textAlign:'center'
					});
					if (i < pArr.length - 1) {
						this.css(pArr[i], 'borderBottom', '1px solid #282828')
					}
					var defClick = function(event) {
						if (nowD != this.innerHTML) {
							thisTemp.css(thisTemp.CB['playbackrateP'], 'display', 'none');
							thisTemp.newPlaybackrate(this.innerHTML);
							thisTemp.sendJS('clickEvent', 'actionScript->newPlaybackrate');
						}
					};
					this.addListenerInside('click', defClick, pArr[i]);

				}
				var pW = (zlen * 10) + 10;
				this.css(this.CB['playbackrateP'], {
					width: pW + 'px'
				});
				this.css(this.CB['playbackrate'], {
					width: pW + 'px'
				});
				this.buttonWidth['playbackrate'] = this.CB['playbackrate'].offsetWidth;
			} else {
				this.CB['playbackrate'].innerHTML = '';
				this.CB['playbackrateP'].innerHTML = '';
				this.css([this.CB['playbackrate'], this.CB['playbackrateLine']], 'display', 'none');
			}
		},
		/*
			内部函数
			注册切换倍速播放相关事件
		*/
		addPlaybackrate: function() {
			var thisTemp = this;
			var setTimeOutP = null;
			var defClick = function(event) {
				thisTemp.css(thisTemp.CB['playbackrateP'], {
					left: thisTemp.getCoor(thisTemp.CB['playbackrate'])['x'] + 'px',
					display: 'block'
				});
			};
			this.addListenerInside('click', defClick, this.CB['playbackrate']);
			var defMouseOut = function(event) {
				if (setTimeOutP) {
					window.clearTimeout(setTimeOutP);
					setTimeOutP = null;
				}
				setTimeOutP = setTimeout(function(event) {
					thisTemp.css(thisTemp.CB['playbackrateP'], 'display', 'none');
				},
				500);
			};
			this.addListenerInside('mouseout', defMouseOut, thisTemp.CB['playbackrateP']);
			var defMouseOver = function(event) {
				if (setTimeOutP) {
					window.clearTimeout(setTimeOutP);
					setTimeOutP = null;
				}
			};
			this.addListenerInside('mouseover', defMouseOver, thisTemp.CB['playbackrateP']);
		},
		/*
			内部函数
			切换倍速后发生的动作
		*/
		newPlaybackrate: function(title) {
			var vArr = this.playbackRateArr;
			var nVArr = [];
			var i = 0;
			for (i = 0; i < vArr.length; i++) {
				var v = vArr[i];
				if (v[1] == title) {
					this.playbackRateDefault = i;
					this.V.playbackRate = v[0];
					if (this.showFace) {
						this.CB['playbackrate'].innerHTML = v[1];
						this.playbackRate();
					}
					this.sendJS('playbackRate', v);
					this.playbackRateTemp=v[0];
				}
			}
		},
		/*
			内部函数
			注册多字幕切换相关
		*/
		subtitleSwitch: function() {
			if (!this.showFace || !this.ckplayerConfig['config']['subtitle']) {
				return;
			}
			var thisTemp = this;
			var vArr = this.vars['cktrack'];//字幕数组
			if(this.typeString(vArr)!='array'){
				return;
			}
			if(vArr[0][1]==''){
				return;
			}
			var html = '';
			var nowD = ''; //当前的字幕
			var i = 0;
			if (!nowD) {
				if(this.subtitlesTemp==-1){
					var indexN=0;
					for(var i=0;i<vArr.length;i++){
						var li=vArr[i];
						if(li.length==3 && li[2]>indexN){
							indexN=li[2];
							this.subtitlesTemp=i;
						}
					}
				}
				nowD = vArr[this.subtitlesTemp][1];
			}
			if (vArr.length > 1) {
				var zlen = 0;
				for (i = 0; i < vArr.length; i++) {
					html += '<p>' + vArr[i][1] + '</p>';
					var dlen = this.getStringLen(vArr[i][1]);
					if (dlen > zlen) {
						zlen = dlen;
					}
				}
				if (html) {
					html += '<p>' + nowD + '</p>';
				}
				
				this.CB['subtitles'].innerHTML = nowD;
				this.CB['subtitlesP'].innerHTML = html;
				this.css([this.CB['subtitles'], this.CB['subtitlesLine']], 'display', 'block');
				var pArr = this.CB['subtitlesP'].childNodes;
				for (var i = 0; i < pArr.length; i++) {
					var fontColor = '#FFFFFF';
					if (pArr[i].innerHTML == nowD) {
						fontColor = '#0782F5';
					}
					this.css(pArr[i], {
						color: fontColor,
						margin: '0px',
						padding: '0px',
						fontSize: '14px'
					});
					if (i < pArr.length - 1) {
						this.css(pArr[i], 'borderBottom', '1px solid #282828')
					}
					var defClick = function(event) {
						if (nowD != this.innerHTML) {
							thisTemp.css(thisTemp.CB['subtitlesP'], 'display', 'none');
							thisTemp.newSubtitles(this.innerHTML);
							thisTemp.sendJS('clickEvent', 'actionScript->newPlaybackrate');
						}
					};
					this.addListenerInside('click', defClick, pArr[i]);

				}
				var pW = (zlen * 10) + 10;
				this.css(this.CB['subtitlesP'], {
					width: pW + 'px'
				});
				this.css(this.CB['subtitles'], {
					width: pW + 'px'
				});
				this.buttonWidth['subtitles'] = this.CB['subtitles'].offsetWidth;
			} else {
				this.CB['subtitles'].innerHTML = '';
				this.CB['subtitlesP'].innerHTML = '';
				this.css([this.CB['subtitles'], this.CB['subtitlesLine']], 'display', 'none');
			}
		},
		/*
			内部函数
			注册多字幕切换事件
		*/
		addSubtitles:function(){
			var thisTemp = this;
			var setTimeOutP = null;
			var defClick = function(event) {
				thisTemp.css(thisTemp.CB['subtitlesP'], {
					left: thisTemp.getCoor(thisTemp.CB['subtitles'])['x'] + 'px',
					display: 'block'
				});
			};
			this.addListenerInside('click', defClick, this.CB['subtitles']);
			var defMouseOut = function(event) {
				if (setTimeOutP) {
					window.clearTimeout(setTimeOutP);
					setTimeOutP = null;
				}
				setTimeOutP = setTimeout(function(event) {
					thisTemp.css(thisTemp.CB['subtitlesP'], 'display', 'none');
				},
				500);
			};
			this.addListenerInside('mouseout', defMouseOut, thisTemp.CB['subtitlesP']);
			var defMouseOver = function(event) {
				if (setTimeOutP) {
					window.clearTimeout(setTimeOutP);
					setTimeOutP = null;
				}
			};
			this.addListenerInside('mouseover', defMouseOver, thisTemp.CB['subtitlesP']);
		},
		/*
			接口函数:修改字幕，按数组编号来
			提供给外部api
		*/
		changeSubtitles: function(n) {
			if (!this.loaded || n < 0) {
				return;
			}
			var vArr = this.vars['cktrack'];//字幕数组
			if(this.typeString(vArr)!='array'){
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.changeSubtitles(n);
				return;
			}
			if (vArr.length > n) {
				var arr = vArr[n];
				if (arr.length > 2) {
					var title = arr[1];
					if (title) {
						this.newSubtitles(title);
					}
				}
			}
		},
		/*
			接口函数：修改字幕大小
			提供给外部api
		*/
		changeSubtitlesSize:function(n,m){
			if (!this.loaded || n < 0) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.changeSubtitlesSize(n,m);
				return;
			}
			this.trackFontSize=n;
			if(!this.isUndefined(m)){
				this.trackLineHeight=m;
			}
			this.trackShowAgain();
		},
		/*
			当切换字幕时的动作 
		*/
		newSubtitles:function(title){
			var vArr = this.vars['cktrack'];//字幕数组
			var i = 0;
			for (i = 0; i < vArr.length; i++) {
				var v = vArr[i];
				if (v[1] == title) {
					this.subtitlesTemp=i;
					if (this.showFace) {
						this.CB['subtitles'].innerHTML = v[1];
						this.subtitleSwitch();
						this.loadTrack(i);
					}
					this.sendJS('subtitles', v);
				}
			}
		},
		/*
			内部函数
			构建清晰度按钮及切换事件(Click事件)
		*/
		definition: function() {
			if (!this.showFace || !this.ckplayerConfig['config']['definition']) {
				return;
			}
			var thisTemp = this;
			var vArr = this.VA;
			var dArr = [];
			var html = '';
			var nowD = ''; //当前的清晰度
			var i = 0;
			for (i = 0; i < vArr.length; i++) {
				var d = vArr[i][2];
				if (dArr.indexOf(d) == -1) {
					dArr.push(d);
				}
				if (this.V) {
					if (vArr[i][0] == this.V.currentSrc) {
						nowD = d;
					}
				}
			}
			if (!nowD) {
				nowD = dArr[0];
			}
			if (dArr.length > 1) {
				var zlen = 0;
				for (i = dArr.length - 1; i > -1; i--) {
					html = '<p>' + dArr[i] + '</p>' + html;
					var dlen = this.getStringLen(dArr[i]);
					if (dlen > zlen) {
						zlen = dlen;
					}
				}
				if (html) {
					html += '<p>' + nowD + '</p>';
				}
				this.CB['definition'].innerHTML = nowD;
				this.CB['definitionP'].innerHTML = html;
				this.css([this.CB['definition'], this.CB['definitionLine']], 'display', 'block');
				var pArr = this.CB['definitionP'].childNodes;
				for (var i = 0; i < pArr.length; i++) {
					var fontColor = '#FFFFFF';
					if (pArr[i].innerHTML == nowD) {
						fontColor = '#0782F5';
					}
					this.css(pArr[i], {
						color: fontColor,
						margin: '0px',
						padding: '0px',
						fontSize: '14px'
					});
					if (i < pArr.length - 1) {
						this.css(pArr[i], 'borderBottom', '1px solid #282828')
					}
					var defClick = function() {
						if (nowD != this.innerHTML) {
							thisTemp.css(thisTemp.CB['definitionP'], 'display', 'none');
							thisTemp.newDefinition(this.innerHTML);
						}
					};
					this.addListenerInside('click', defClick, pArr[i]);

				}
				var pW = (zlen * 10) + 10;
				this.css(this.CB['definitionP'], {
					width: pW + 'px'
				});
				this.css(this.CB['definition'], {
					width: pW + 'px'
				});
				this.buttonWidth['definition'] = this.CB['definition'].offsetWidth;
			} else {
				this.CB['definition'].innerHTML = '';
				this.CB['definitionP'].innerHTML = '';
				this.css([this.CB['definition'], this.CB['definitionLine']], 'display', 'none');
			}
		},
		/*
			内部函数
			注册清晰度相关事件
		*/
		addDefListener: function() {
			var thisTemp = this;
			var setTimeOutP = null;
			var defClick = function(event) {
				thisTemp.css(thisTemp.CB['definitionP'], {
					left: thisTemp.getCoor(thisTemp.CB['definition'])['x'] + 'px',
					display: 'block'
				});
			};
			this.addListenerInside('click', defClick, this.CB['definition']);
			var defMouseOut = function(event) {
				if (setTimeOutP) {
					window.clearTimeout(setTimeOutP);
					setTimeOutP = null;
				}
				setTimeOutP = setTimeout(function(event) {
					thisTemp.css(thisTemp.CB['definitionP'], 'display', 'none');
				},
				500);
			};
			this.addListenerInside('mouseout', defMouseOut, thisTemp.CB['definitionP']);
			var defMouseOver = function(event) {
				if (setTimeOutP) {
					window.clearTimeout(setTimeOutP);
					setTimeOutP = null;
				}
			};
			this.addListenerInside('mouseover', defMouseOver, thisTemp.CB['definitionP']);
		},
		/*
			接口函数
			提供给外部api
		*/
		changeDefinition: function(n) {
			if (!this.loaded || n < 0) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.changeDefinition(n);
				return;
			}
			if (this.VA.length > n) {
				var arr = this.VA[n];
				if (arr.length > 3) {
					var title = arr[2];
					if (title) {
						this.newDefinition(title);
					}
				}
			}
		},
		/*
			内部函数
			切换清晰度后发生的动作
		*/
		newDefinition: function(title) {
			var vArr = this.VA;
			var nVArr = [];
			var i = 0;
			for (i = 0; i < vArr.length; i++) {
				var v = vArr[i];
				if (v[2] == title) {
					nVArr.push(v);
					this.sendJS('definitionChange', i + '');
				}
			}
			if (nVArr.length < 1) {
				return;
			}
			if (this.V != null && this.needSeek == 0) {
				this.needSeek = this.V.currentTime;
			}
			if (this.getFileExt(nVArr[0][0]) != '.m3u8') {
				this.isM3u8 = false;
			}
			if (!this.isM3u8) {
				if (nVArr.length == 1) {
					this.V.innerHTML = '';
					this.V.src = nVArr[0][0];
					this.V.currentSrc = nVArr[0][0];
				} else {
					var source = '';
					nVArr = this.arrSort(nVArr);
					for (i = 0; i < nVArr.length; i++) {
						var type = '';
						var va = nVArr[i];
						if (va[1]) {
							type = ' type="' + va[1] + '"';
						}
						source += '<source src="' + va[0] + '"' + type + '>';
					}
					this.V.removeAttribute('src');
					this.V.innerHTML = source;
					this.V.currentSrc = nVArr[0][0];
				}
			} else {
				this.embedHls(vArr[0][0], this.vars['autoplay']);
			}
			this.V.autoplay = 'autoplay';
			this.V.load();
			if (this.playbackRateTemp!=1) {
				this.V.playbackRate = this.playbackRateTemp; //定义倍速
			}
			this.timerErrorFun();
		},
		/*
			内置函数
			播放hls
		*/
		embedHls: function(url, autoplay) {
			var thisTemp = this;
			thisTemp.hlsAutoPlay=autoplay;
			if (Hls.isSupported()) {
				var hls = new Hls();
				hls.loadSource(url);
				hls.attachMedia(this.V);
				hls.on(Hls.Events.MANIFEST_PARSED,
				function() {
					thisTemp.playerLoad();
					if (autoplay) {
						thisTemp.videoPlay();
					}
				});
			}
		},
		/*
			内部函数
			构建提示点
		*/
		prompt: function() {
			if (!this.showFace) {
				return;
			}
			var thisTemp = this;
			var prompt = this.vars['promptSpot'];
			if (prompt == null || this.promptArr.length > 0) {
				return;
			}
			var showPrompt = function(event) {
				if (thisTemp.promptElement == null) {
					var random2 = 'prompte' + thisTemp.randomString(5);
					var ele2 = document.createElement('div');
					ele2.className = random2;
					thisTemp.PD.appendChild(ele2);
					thisTemp.promptElement = thisTemp.getByElement(random2);
					thisTemp.css(thisTemp.promptElement, {
						overflowX: 'hidden',
						lineHeight: '22px',
						fontSize: '14px',
						color: '#FFFFFF',
						position: 'absolute',
						display: 'block',
						zIndex: '90'
					});
				}
				var pcon = thisTemp.getPromptTest();
				var pW = pcon['pW'],
				pT = pcon['pT'],
				pL = parseInt(thisTemp.css(this, 'left')) - parseInt(pW * 0.5);
				if (pcon['pL'] > 10) {
					pL = pcon['pL'];
				}
				if (pL < 0) {
					pL = 0;
				}
				thisTemp.css(thisTemp.promptElement, {
					width: pW + 'px',
					left: ( - pW - 10) + 'px',
					display: 'block'
				});
				thisTemp.promptElement.innerHTML = thisTemp.getDataset(this, 'words');
				thisTemp.css(thisTemp.promptElement, {
					left: pL + 'px',
					top: (pT - thisTemp.promptElement.offsetHeight - 10) + 'px'
				});
			};
			var hidePrompt = function(event) {
				if (thisTemp.promptElement != null) {
					thisTemp.css(thisTemp.promptElement, {
						display: 'none'
					});
				}
			};
			var i = 0;
			for (i = 0; i < prompt.length; i++) {
				var pr = prompt[i];
				var words = pr['words'];
				var time = pr['time'];
				var random = 'prompt' + this.randomString(5);
				var ele = document.createElement('div');
				ele.className = random;
				this.CB['timeBoBg'].appendChild(ele);
				var div = this.getByElement(random);
				div.setAttribute('data-time', time);
				div.setAttribute('data-words', words);
				this.css(div, {
					width: '6px',
					height: '6px',
					backgroundColor: '#FFFFFF',
					position: 'absolute',
					top: '4px',
					left: '-100px',
					display: 'none',
					zIndex: '1',
					borderRadius: '6px'
				});

				this.addListenerInside('mouseover', showPrompt, div);
				this.addListenerInside('mouseout', hidePrompt, div);
				this.promptArr.push(div);
			}
			this.changePrompt();
		},
		/*
			内部函数
			计算提示文本的位置
		*/
		getPromptTest: function() {
			var pW = this.previewWidth,
			pT = this.getCoor(this.CB['timeButton'])['y'],
			pL = 0;
			if (this.previewTop != null) {
				pT -= parseInt(this.css(this.previewTop, 'height'));
				pL = parseInt(this.css(this.previewTop, 'left'));
			} else {
				pT -= 35;
			}
			pL += 2;
			if (pL < 0) {
				pL = 0;
			}
			if (pL > this.PD.offsetWidth - pW) {
				pL = this.PD.offsetWidth - pW;
			}
			return {
				pW: pW,
				pT: pT,
				pL: pL
			};
		},
		/*
			内部函数
			删除提示点
		*/
		deletePrompt: function() {
			var arr = this.promptArr;
			if (arr.length > 0) {
				for (var i = 0; i < arr.length; i++) {
					if (arr[i]) {
						this.deleteChild(arr[i]);
					}
				}
			}
			this.promptArr = [];
		},
		/*
			内部函数
			计算提示点坐标
		*/
		changePrompt: function() {
			if (this.promptArr.length == 0) {
				return;
			}
			var arr = this.promptArr;
			var duration = this.getMetaDate()['duration'];
			var bw = this.CB['timeBoBg'].offsetWidth;
			for (var i = 0; i < arr.length; i++) {
				var time = parseInt(this.getDataset(arr[i], 'time'));
				var left = parseInt(time * bw / duration) - parseInt(arr[i].offsetWidth * 0.5);
				if (left < 0) {
					left = 0;
				}
				if (left > bw - parseInt(arr[i].offsetWidth * 0.5)) {
					left = bw - parseInt(arr[i].offsetWidth * 0.5);
				}
				this.css(arr[i], {
					left: left + 'px',
					display: 'block'
				});
			}
		},
		/*
			内部函数
			构建预览图片效果
		*/
		preview: function(obj) {
			var thisTemp = this;
			var preview = {
				file: null,
				scale: 0
			};
			preview = this.standardization(preview, this.vars['preview']);
			if (preview['file'] == null || preview['scale'] <= 0) {
				return;
			}
			var srcArr = preview['file'];
			if (this.previewStart == 0) { //如果还没有构建，则先进行构建
				this.previewStart = 1;
				if (srcArr.length > 0) {
					var i = 0;
					var imgW = 0,
					imgH = 0;
					var random = thisTemp.randomString(10);
					var loadNum = 0;
					var loadImg = function(i) {
						srcArr[i] = thisTemp.getNewUrl(srcArr[i]);
						var n = 0;
						var img = new Image();
						img.src = srcArr[i];
						img.className = random + i;
						img.onload = function(event) {
							loadNum++;
							if (thisTemp.previewDiv == null) { //如果没有建立DIV，则建
								imgW = img.width;
								imgH = img.height;
								thisTemp.previewWidth = parseInt(imgW * 0.1);
								var ele = document.createElement('div');
								ele.className = random;
								thisTemp.PD.appendChild(ele);
								thisTemp.previewDiv = thisTemp.getByElement(random);
								var eleTop = (obj['y'] - parseInt(imgH * 0.1) + 2);
								thisTemp.css(thisTemp.previewDiv, {
									width: srcArr.length * imgW * 10 + 'px',
									height: parseInt(imgH * 0.1) + 'px',
									backgroundColor: '#000000',
									position: 'absolute',
									left: '0px',
									top: eleTop + 'px',
									display: 'none',
									zIndex: '80'
								});
								ele.setAttribute('data-x', '0');
								ele.setAttribute('data-y', eleTop);
								var ele2 = document.createElement('div');
								ele2.className = random + 'd2';
								thisTemp.PD.appendChild(ele2);
								thisTemp.previewTop = thisTemp.getByElement(ele2.className);
								thisTemp.css(thisTemp.previewTop, {
									width: parseInt(imgW * 0.1) + 'px',
									height: parseInt(imgH * 0.1) + 'px',
									position: 'absolute',
									border: '5px solid ' + thisTemp.css(thisTemp.CB['timeProgress'], 'backgroundColor'),
									left: '0px',
									top: (obj['y'] - parseInt(imgH * 0.1) + 2) + 'px',
									display: 'none',
									zIndex: '81'
								});
								var html = '';
								for (n = 0; n < srcArr.length; n++) {
									html += thisTemp.newCanvas(random + n, imgW * 10, parseInt(imgH * 0.1))
								}
								thisTemp.previewDiv.innerHTML = html;
							}
							thisTemp.previewDiv.appendChild(img);
							var cimg = thisTemp.getByElement(img.className);
							var canvas = thisTemp.getByElement(img.className + '-canvas');
							var context = canvas.getContext('2d');
							var sx = 0,
							sy = 0,
							x = 0,
							h = parseInt(imgH * 0.1);
							for (n = 0; n < 100; n++) {
								x = parseInt(n * imgW * 0.1);
								context.drawImage(cimg, sx, sy, parseInt(imgW * 0.1), h, x, 0, parseInt(imgW * 0.1), h);
								sx += parseInt(imgW * 0.1);
								if (sx >= imgW) {
									sx = 0;
									sy += h;
								}
								thisTemp.css(cimg, 'display', 'none');
							}
							if (loadNum == srcArr.length) {
								thisTemp.previewStart = 2;
							} else {
								i++;
								loadImg(i);
							}
						};
					};
				}
				loadImg(i);
				return;
			}
			if (this.previewStart == 2) {
				var isTween = true;
				var nowNum = parseInt(obj['time'] / this.vars['preview']['scale']);
				var numTotal = parseInt(thisTemp.getMetaDate()['duration'] / this.vars['preview']['scale']);
				if (thisTemp.css(thisTemp.previewDiv, 'display') == 'none') {
					isTween = false;
				}
				thisTemp.css(thisTemp.previewDiv, 'display', 'block');
				var imgWidth = thisTemp.previewDiv.offsetWidth * 0.01 / srcArr.length;
				var left = (imgWidth * nowNum) - obj['x'] + parseInt(imgWidth * 0.5),
				top = obj['y'] - thisTemp.previewDiv.offsetHeight;
				thisTemp.css(thisTemp.previewDiv, 'top', top + 2 + 'px');
				var topLeft = obj['x'] - parseInt(imgWidth * 0.5);
				var timepieces = 0;
				if (topLeft < 0) {
					topLeft = 0;
					timepieces = obj['x'] - topLeft - imgWidth * 0.5;
				}
				if (topLeft > thisTemp.PD.offsetWidth - imgWidth) {
					topLeft = thisTemp.PD.offsetWidth - imgWidth;
					timepieces = obj['x'] - topLeft - imgWidth * 0.5;
				}
				if (left < 0) {
					left = 0;
				}
				if (left > numTotal * imgWidth - thisTemp.PD.offsetWidth) {
					left = numTotal * imgWidth - thisTemp.PD.offsetWidth;
				}
				thisTemp.css(thisTemp.previewTop, {
					left: topLeft + 'px',
					top: top + 2 + 'px',
					display: 'block'
				});
				if (thisTemp.previewTop.offsetHeight > thisTemp.previewDiv.offsetHeight) {
					thisTemp.css(thisTemp.previewTop, {
						height: thisTemp.previewDiv.offsetHeight - (thisTemp.previewTop.offsetHeight - thisTemp.previewDiv.offsetHeight) + 'px'
					});
				}
				if (this.previewTween != null) {
					this.animatePause(this.previewTween);
					this.previewTween = null
				}
				var nowLeft = parseInt(thisTemp.css(thisTemp.previewDiv, 'left'));
				var leftC = nowLeft + left;
				if (nowLeft == -(left + timepieces)) {
					return;
				}
				if (isTween) {
					var obj = {
						element: thisTemp.previewDiv,
						start: null,
						end: -(left + timepieces),
						speed: 0.3
					};
					this.previewTween = this.animate(obj);
				} else {
					thisTemp.css(thisTemp.previewDiv, 'left', -(left + timepieces) + 'px')
				}
			}
		},
		/*
			内部函数
			删除预览图节点
		*/
		deletePreview: function() {
			if (this.previewDiv != null) {
				this.deleteChild(this.previewDiv);
				this.previewDiv = null;
				this.previewStart = 0;
			}
		},
		/*
			内部函数
			修改视频地址，属性
		*/
		changeVideo: function() {
			if (!this.html5Video) {
				this.getVarsObject();
				this.V.newVideo(this.vars);
				return;
			}
			var vArr = this.VA;
			var v = this.vars;
			var i = 0;
			if (vArr.length < 1) {
				return;
			}
			if (this.V != null && this.needSeek == 0) {
				this.needSeek = this.V.currentTime;
			}
			if (v['poster']) {
				this.V.poster = v['poster'];
			} else {
				this.V.removeAttribute('poster');
			}
			if (v['loop']) {
				this.V.loop = 'loop';
			} else {
				this.V.removeAttribute('loop');
			}
			if (v['seek'] > 0) {
				this.needSeek = v['seek'];
			} else {
				this.needSeek = 0;
			}
			if (this.getFileExt(vArr[0][0]) != '.m3u8') {
				this.isM3u8 = false;
			}
			if (!this.isM3u8) {
				if (vArr.length == 1) {
					this.V.innerHTML = '';
					this.V.src = vArr[0][0];
				} else {
					var source = '';
					vArr = this.arrSort(vArr);
					for (i = 0; i < vArr.length; i++) {
						var type = '';
						var va = vArr[i];
						if (va[1]) {
							type = ' type="' + va[1] + '"';
						}
						source += '<source src="' + va[0] + '"' + type + '>';
					}
					this.V.removeAttribute('src');
					this.V.innerHTML = source;
				}
				//分析视频地址结束
				if (v['autoplay']) {
					this.V.autoplay = 'autoplay';
				} else {
					this.V.removeAttribute('autoplay');
				}
				this.V.load();
			} else {
				this.embedHls(vArr[0][0], v['autoplay']);
			}
			if (!this.isUndefined(v['volume'])) {
				this.changeVolume(v['volume']);
			}
			this.resetPlayer(); //重置界面元素
			this.timerErrorFun();
			//如果存在字幕则加载
			if (this.vars['cktrack']) {
				this.loadTrack();
			}
		},
		/*
			内部函数
			调整中间暂停按钮,缓冲loading，错误提示文本框的位置
		*/
		elementCoordinate: function() {
			this.pdCoor = this.getXY(this.PD);
			try {
				this.css(this.CB['pauseCenter'], {
					left: parseInt((this.PD.offsetWidth - 80) * 0.5) + 'px',
					top: parseInt((this.PD.offsetHeight - 80) * 0.5) + 'px'
				});
			} catch(event) {}
			try {
				this.css(this.CB['loading'], {
					left: parseInt((this.PD.offsetWidth - 60) * 0.5) + 'px',
					top: parseInt((this.PD.offsetHeight - 60) * 0.5) + 'px'
				});
			} catch(event) {}
			try {
				this.css(this.CB['errorText'], {
					left: parseInt((this.PD.offsetWidth - 120) * 0.5) + 'px',
					top: parseInt((this.PD.offsetHeight - 30) * 0.5) + 'px'
				});
			} catch(event) {}
			try {
				this.css(this.CB['logo'], {
					left: parseInt(this.PD.offsetWidth - this.CB['logo'].offsetWidth - 20) + 'px',
					top: '20px'
				});
			} catch(event) {}
			this.checkBarWidth();
		},
		/*
			内部函数
			当播放器尺寸变化时，显示和隐藏相关节点
		*/
		checkBarWidth: function() {
			if (!this.showFace) {
				return;
			}
			var controlBarW = this.CB['controlBar'].offsetWidth;
			var ele = [];
			ele.push([[this.CB['full'], this.CB['escFull'], this.CB['fullLine']], this.buttonWidth['full'] + 2, 'full']);
			if (this.vars['front'] != '') {
				ele.push([[this.CB['front'], this.CB['frontLine']], this.buttonWidth['front'] + 2]);
			}
			if (this.vars['next'] != '') {
				ele.push([[this.CB['next'], this.CB['nextLine']], this.buttonWidth['next'] + 2]);
			}
			if (this.CB['definition'].innerHTML != '') {
				ele.push([[this.CB['definition'], this.CB['definitionLine']], this.buttonWidth['definition'] + 2]);
			}
			if ((this.ckplayerConfig['config']['mobileVolumeBarShow'] || !this.isMobile()) && this.css(this.CB['volume'], 'display') != 'none') {
				ele.push([[this.CB['volume']], this.buttonWidth['volume']]);
				ele.push([[this.CB['mute'], this.CB['escMute'], this.CB['muteLine']], this.buttonWidth['mute'] + 2, 'mute']);
			}
			ele.push([[this.CB['timeText']], this.buttonWidth['timeText']]);
			ele.push([[this.CB['play'], this.CB['pause'], this.CB['playLine']], this.buttonWidth['play'] + 2, 'play']);

			var i = 0;
			var len = 0;
			var isc = true;
			//计算所有要显示的节点的总宽度
			for (var i = 0; i < ele.length; i++) {
				var nlen = ele[i][1];
				if (nlen > 2) {
					len += nlen;
				} else {
					isc = false;
				}
			}
			if (isc) {
				this.buttonLen = len;
				this.buttonArr = ele;
			}
			len = this.buttonLen;
			ele = this.buttonArr;
			for (var i = 0; i < ele.length; i++) {
				if (len > controlBarW) {
					len -= ele[i][1];
					this.css(ele[i][0], 'display', 'none');
				} else {
					this.css(ele[i][0], 'display', 'block');
					if (ele[i].length == 3) {
						var name = ele[i][2];
						switch (name) {
						case 'mute':
							if (this.volume == 0) {
								this.css(this.CB['mute'], 'display', 'none');
							} else {
								this.css(this.CB['escMute'], 'display', 'none');
							}
							break;
						case 'play':
							this.playShow(this.V.paused ? false: true);
							break;
						case 'full':
							if (this.full) {
								this.css(this.CB['full'], 'display', 'none');
							} else {
								this.css(this.CB['escFull'], 'display', 'none');
							}
							break;
						}
					}
				}
			}
		},
		/*
			内部函数
			初始化暂停或播放按钮
		*/
		initPlayPause: function() {
			if (!this.showFace) {
				return;
			}
			if (this.vars['autoplay']) {
				this.css([this.CB['play'], this.CB['pauseCenter']], 'display', 'none');
				this.css(this.CB['pause'], 'display', 'block');
			} else {
				this.css(this.CB['play'], 'display', 'block');
				if (this.css(this.CB['errorText'], 'display') == 'none') {
					this.css(this.CB['pauseCenter'], 'display', 'block');
				}
				this.css(this.CB['pause'], 'display', 'none');
			}
		},

		/*
			下面为监听事件
			内部函数
			监听元数据已加载
		*/
		loadedHandler: function() {
			this.loaded = true;
			if (this.vars['loaded'] != '') {
				try {
					eval(this.vars['loaded'] + '()');
				} catch(event) {
					this.log(event);
				}
			}
		},
		/*
			内部函数
			监听播放
		*/
		playingHandler: function() {
			this.playShow(true);
			//如果是第一次播放
			if (this.isFirstTimePlay && !this.isUndefined(this.advertisements['front'])) {
				this.isFirstTimePlay = false;
				//调用播放前置广告组件
				this.adI = 0;
				this.adType = 'front';
				this.adMuteInto();
				this.adIsVideoTime = true;
				this.adPlayStart = true;
				this.adVideoPlay = false;
				this.videoPause();
				this.advertisementsTime();
				this.advertisementsPlay();
				this.adSkipButtonShow();
				//调用播放前置广告组件结束
				return;
			}
			if (this.adPlayerPlay) {
				return;
			}
			//判断第一次播放结束
			if (this.needSeek > 0) {
				this.videoSeek(this.needSeek);
				this.needSeek = 0;
			}
			if (this.animatePauseArray.length > 0) {
				this.animateResume('pause');
			}
			if (this.playerType == 'html5video' && this.V != null && this.config['videoDrawImage']) {
				this.sendVCanvas();
			}
			if (!this.isUndefined(this.advertisements['pause']) && !this.adPlayStart) { //如果存在暂停广告
				this.adPauseCloseFunction();
			}
		},
		/*暂停时播放暂停广告*/
		adPausePlayer: function() {
			this.adI = 0;
			this.adType = 'pause';
			this.adPauseShow = true;
			this.loadAdPause();
		},
		loadAdPause: function() {
			var ad = this.getNowAdvertisements();
			var type = ad['type'];
			var thisTemp = this;
			var width = this.PD.offsetWidth,
			height = this.PD.offsetHeight;
			if (this.isStrImage(type) && this.adPauseShow) {
				this.css(this.CB['adElement'], 'display', 'block');
				var imgClass = 'adimg' + this.randomString(10);
				var imgHtml = '<img src="' + ad['file'] + '" class="' + imgClass + '">';
				if (ad['link']) {
					imgHtml = '<a href="' + ad['link'] + '" target="_blank">' + imgHtml + '</a>';
				}
				this.CB['adElement'].innerHTML = imgHtml;
				this.addListenerInside('load',
				function() {
					var imgObj = new Image();
					imgObj.src = this.src;
					var imgWH = thisTemp.adjustmentWH(imgObj.width, imgObj.height);
					thisTemp.css([thisTemp.getByElement(imgClass), thisTemp.CB['adElement']], {
						width: imgWH['width'] + 'px',
						height: imgWH['height'] + 'px',
						border: '0px'
					});
					if (thisTemp.ckplayerConfig['style']['advertisement']['closeButtonShow'] && thisTemp.adPauseShow) {
						thisTemp.css(thisTemp.CB['adPauseClose'], {
							display: 'block'
						});
					}
					thisTemp.ajaxSuccessNull(ad['exhibitionMonitor']);
					thisTemp.adPauseCoor();
				},
				this.getByElement(imgClass));
				this.addListenerInside('click',
				function() {
					thisTemp.ajaxSuccessNull(ad['clickMonitor']);
				},
				this.CB['adElement']);
				var newI = this.adI;
				if (this.adI < this.advertisements['pause'].length - 1) {
					newI++;
				} else {
					newI = 0;
				}
				if (ad['time'] > 0) {
					setTimeout(function() {
						if (thisTemp.adPauseShow) {
							thisTemp.adI = newI;
							thisTemp.loadAdPause();
						}
					},
					ad['time'] * 1000);
				}
			}
		},
		/*调整暂停广告的位置*/
		adPauseCoor: function() {
			if (this.css(this.CB['adElement'], 'display') == 'block') {
				var w = this.CB['adElement'].offsetWidth,
				h = this.CB['adElement'].offsetHeight;
				var pw = this.PD.offsetWidth,
				ph = this.PD.offsetHeight;
				this.css(this.CB['adElement'], {
					top: (ph - h) * 0.5 + 'px',
					left: (pw - w) * 0.5 + 'px'
				});
				if (this.css(this.CB['adPauseClose'], 'display') == 'block') {
					this.css(this.CB['adPauseClose'], {
						top: (ph - h) * 0.5 - 10 + 'px',
						left: (pw - w) * 0.5 + w - 10 + 'px'
					});
				}
			}
		},
		/*
			关闭暂停广告
		*/
		adPauseCloseFunction: function() {
			this.CB['adElement'].innerHTML = '';
			this.css([this.CB['adElement'], this.CB['adPauseClose']], 'display', 'none');
			this.adPauseShow = false;
		},
		/*计算广告时间*/
		advertisementsTime: function(nt) {
			if (this.isUndefined(nt)) {
				nt = 0;
			}
			var ad = this.advertisements[this.adType];
			if (nt > 0) {
				ad[this.adI]['time'] = Math.ceil(nt);
			}
			this.adTimeAllTotal = 0;
			for (var i = this.adI; i < ad.length; i++) {
				if (!this.isUndefined(ad[i]['time'])) {
					this.adTimeAllTotal += Math.ceil(ad[i]['time']);
				}
			}
			if (this.adTimeAllTotal > 0) {
				this.CB['adTime'].innerHTML = this.language['adTime'].replace('{$second}', this.adTimeAllTotal > 9 ? this.adTimeAllTotal: '0' + this.adTimeAllTotal);
			}
			if (this.adPauseShow) {
				this.adPauseCloseFunction();
			}
			this.adOtherCloseAll();
			this.adTimeTotal = -1;
		},
		/*判断是否需要显示跳过广告按钮*/
		adSkipButtonShow: function() {
			var thisTemp = this;
			var skipConfig = this.ckplayerConfig['style']['advertisement'];
			var delayTimeTemp = skipConfig[this.adType + 'SkipButtonDelay'];
			var timeFun = function() {
				if (delayTimeTemp >= 0) {
					thisTemp.CB['adSkip'].innerHTML = thisTemp.language['skipAdTime'].replace('{$second}', delayTimeTemp > 9 ? delayTimeTemp: '0' + delayTimeTemp);
					setTimeout(timeFun, 1000);
				} else {
					thisTemp.CB['adSkip'].innerHTML = thisTemp.language['skipAd'];
				}
				delayTimeTemp--;
			};
			if (skipConfig['skipButtonShow']) {
				this.css(thisTemp.CB['adSkip'], 'display', 'block');
				if (skipConfig[this.adType + 'SkipButtonDelay'] > 0 && this.isUndefined(this.adSkipButtonTime)) {
					timeFun();
				} else {
					thisTemp.css(thisTemp.CB['adSkip'], 'display', 'block');
					thisTemp.CB['adSkip'].innerHTML = this.language['skipAd'];
				}
			}
		},
		/*播放广告*/
		advertisementsPlay: function() {
			this.css([this.CB['adBackground'], this.CB['adElement'], this.CB['adBar'], this.CB['adLink']], 'display', 'none');
			this.adPlayerPlay = false;
			var ad = this.advertisements[this.adType];
			if (this.adI == 0 && (this.adType == 'front' || this.adType == 'insert' || this.adType == 'end')) {
				this.sendJS('process', this.adType + ' ad play')
			}
			this.trackHide();
			if (this.adI < ad.length) {
				if (!this.isUndefined(ad[this.adI]['time'])) {
					this.adTimeTotal = parseInt(ad[this.adI]['time']);
				}
				this.loadAdvertisements();
			} else {
				this.adEnded();
			}
		},
		/*清除当前所有广告*/
		eliminateAd: function() {
			if (this.adType) {
				var ad = this.advertisements[this.adType];
				this.adI = ad.length;
				this.advertisementsPlay();
			}

		},
		/*广告播放结束*/
		adEnded: function() {
			var thisTemp = this;
			this.adPlayStart = false;
			if(this.adType=='front'){
				this.time=0;
			}
			this.adPlayerPlay = false;
			if (this.adVideoPlay) {
				if (this.videoTemp['src'] != '') {
					this.V.src = this.videoTemp['src'];
				} else {
					if (this.V.src) {
						this.V.removeAttribute('src');
					}
				}
				if (this.videoTemp['source'] != '') {
					this.V.innerHTML = this.videoTemp['source'];
				}
				if (this.videoTemp['currentSrc'] != '') {
					this.V.src = this.videoTemp['currentSrc'];
					this.V.currentSrc = this.videoTemp['currentSrc'];
				}
				if (this.videoTemp['loop']) {
					this.V.loop = true;
					this.videoTemp['loop'] = false;
				}
				if (this.adType == 'end') {
					this.endedHandler();
				} else {
					this.videoPlay();
				}
			} else {
				this.videoPlay();
			}
			this.changeVolume(this.vars['volume']);
			this.sendJS('process', this.adType + ' ad ended');
			this.changeControlBarShow(true);
		},
		/*加载广告*/
		loadAdvertisements: function() {
			//this.videoTemp
			var ad = this.getNowAdvertisements();
			var type = ad['type'];
			var thisTemp = this;
			var width = this.PD.offsetWidth,
			height = this.PD.offsetHeight;
			this.changeControlBarShow(false);
			this.adPlayerPlay = true;
			if (this.isStrImage(type)) {
				this.css([this.CB['adBackground'], this.CB['adElement'], this.CB['adBar']], 'display', 'block');
				this.css([this.CB['adMute'], this.CB['adEscMute']], 'display', 'none');
				var imgClass = 'adimg' + this.randomString(10);
				var imgHtml = '<img src="' + ad['file'] + '" class="' + imgClass + '">';
				if (ad['link']) {
					imgHtml = '<a href="' + ad['link'] + '" target="_blank">' + imgHtml + '</a>';
				}
				this.CB['adElement'].innerHTML = imgHtml;
				this.addListenerInside('load',
				function() {
					var imgObj = new Image();
					imgObj.src = this.src;
					var imgWH = thisTemp.adjustmentWH(imgObj.width, imgObj.height);
					thisTemp.css(thisTemp.getByElement(imgClass), {
						width: imgWH['width'] + 'px',
						height: imgWH['height'] + 'px',
						border: '0px'
					});
					thisTemp.css(thisTemp.CB['adElement'], {
						width: imgWH['width'] + 'px',
						height: imgWH['height'] + 'px',
						top: (height - imgWH['height']) * 0.5 + 'px',
						left: (width - imgWH['width']) * 0.5 + 'px'
					});
					thisTemp.ajaxSuccessNull(ad['exhibitionMonitor']);
				},
				this.getByElement(imgClass));
				this.addListenerInside('click',
				function() {
					thisTemp.ajaxSuccessNull(ad['clickMonitor']);
				},
				this.CB['adElement']);
				if (!this.isUndefined(ad['time'])) {
					this.adCountDown();
				}
			} else {
				this.css(this.CB['adBar'], 'display', 'block');
				//判断是否静音
				if (this.adVideoMute) {
					this.css(this.CB['adEscMute'], 'display', 'block');
					this.css(this.CB['adMute'], 'display', 'none');
				} else {
					this.css(this.CB['adEscMute'], 'display', 'none');
					this.css(this.CB['adMute'], 'display', 'block');
				}
				this.CB['adElement'].innerHTML = '';
				if (this.videoTemp['currentSrc'] == '') {
					this.videoTemp['currentSrc'] = this.getCurrentSrc();
				}
				if (this.V.loop) {
					this.videoTemp['loop'] = true;
					this.V.loop = false;
				}
				if (this.V != null && this.V.currentTime > 0 && this.adIsVideoTime && this.adType!='front') { //当有视频广告时而又没有记录下已播放的时间则进行记录
					this.adIsVideoTime = false;
					this.needSeek = this.V.currentTime;
				}
				this.V.src = ad['file'];
				this.V.currentSrc = ad['file'];
				this.V.innerHTML = '';
				this.V.play();
				this.adVideoPlay = true;
				this.ajaxSuccessNull(ad['exhibitionMonitor']);
				if (!this.adVideoMute) {
					this.adEscMuteFunction();
				}
			}
			if (ad['link']) {
				this.css(this.CB['adLink'], 'display', 'block');
				var link = '<a href="' + ad['link'] + '" target="_blank" class="ckadmorelink">' + this.language['adLink'] + '</a>';
				this.CB['adLink'].innerHTML = link;
				this.css(this.getByElement('ckadmorelink'), {
					color: '#FFFFFF',
					textDecoration: 'none'
				});
				this.addListenerInside('click',
				function() {
					thisTemp.ajaxSuccessNull(ad['clickMonitor']);
				},
				this.CB['adLink']);
			} else {
				this.css(this.CB['adLink'], 'display', 'none');
			}

		},
		/*普通广告倒计时*/
		adCountDown: function() {
			var thisTemp = this;
			if (this.adTimeTotal > 0) {
				if (!this.adIsPause) {
					this.adTimeTotal--;
					this.showAdTime();
					this.adCountDownObj = null;
					this.adCountDownObj = setTimeout(function() {
						thisTemp.adCountDown();
					},
					1000);
				}
			} else {
				this.adI++;
				this.advertisementsPlay();
			}
		},
		/*视频广告倒计时*/
		adPlayerTimeHandler: function(time) {
			var ad = this.getNowAdvertisements();
			var type = ad['type'];
			if (this.isStrImage(type)) {
				return;
			}
			if (this.adTimeTotal != parseInt(time)) {
				this.adTimeTotal = parseInt(time);
				this.showAdTime();
			}
		},
		/*格式化广告倒计时显示*/
		showAdTime: function() {
			this.adTimeAllTotal--;
			var n = this.adTimeAllTotal;
			if (n < 0) {
				n = 0;
			}
			this.CB['adTime'].innerHTML = this.language['adTime'].replace('{$second}', n < 10 ? '0' + n: n);
		},
		/*
			单独监听其它广告
		*/
		checkAdOther: function(t) {
			if (this.adPlayerPlay) {
				return;
			}
			var adTime = this.advertisements['othertime'];
			var adPlay = this.advertisements['otherPlay'];
			for (var i = 0; i < adTime.length; i++) {
				if (t >= adTime[i] && !adPlay[i]) { //如果播放时间大于广告时间而该广告还没有播放，则开始播放
					adPlay[i] = true;
					this.newAdOther(i);
				}
			}
		},
		/*
			新建其它广告 
		*/
		newAdOther: function(i) {
			var thisTemp = this;
			var ad = this.advertisements['other'][i];
			var randomS = this.randomString(10); //获取一个随机字符串
			var adDivID = 'adother' + randomS; //广告容器
			imgClassName = 'adimgother' + randomS;
			var adDiv = document.createElement('div');
			adDiv.className = adDivID;
			this.PD.appendChild(adDiv);
			ad['div'] = adDivID;
			ad['element'] = imgClassName;
			var adHtml='<img src="' + ad['file'] + '" class="' + imgClassName + '">';
			if(ad['link']){
				adHtml='<a href="' + ad['link'] + '" target="blank">'+adHtml+'</a>';
			}
			this.getByElement(adDivID).innerHTML =adHtml;
			this.css(adDivID, {
				position: 'absolute',
				overflow: 'hidden',
				zIndex: '996',
				top: '60px',
				left: '30px',
				cursor: 'pointer'
			});
			if (this.ckplayerConfig['style']['advertisement']['closeOtherButtonShow']) {
				var closeAdDivID = 'adotherclose' + randomS; //广告容器
				var closeAdDiv = document.createElement('div');
				closeAdDiv.className = closeAdDivID;
				this.PD.appendChild(closeAdDiv);
				this.getByElement(closeAdDivID).innerHTML = this.newCanvas(closeAdDivID, 20, 20);
				ad['closeDiv'] = closeAdDivID;
				ad['close'] = false;
				this.css(closeAdDivID, {
					backgroundColor: '#f7f7f7',
					//f8f7f7
					widht: '20px',
					height: '20px',
					position: 'absolute',
					overflow: 'hidden',
					zIndex: '997',
					top: '60px',
					left: '30px',
					borderRadius: '20px',
					cursor: 'pointer'
				});
				var adOtherClose = this.getByElement(closeAdDivID + '-canvas').getContext('2d');
				var adOtherCloseFillRect = function() {
					thisTemp.canvasFill(adOtherClose, [[4, 6], [6, 6], [16, 15], [14, 15]]);
					thisTemp.canvasFill(adOtherClose, [[14, 6], [16, 6], [6, 15], [4, 15]]);
				};
				adOtherClose.fillStyle = '#404856';
				adOtherCloseFillRect();
				var adOtherCloseOver = function() {
					adOtherClose.clearRect(0, 0, 20, 20);
					adOtherClose.fillStyle = '#0782F5';
					adOtherCloseFillRect();
				};
				var adOtherCloseOut = function() {
					adOtherClose.clearRect(0, 0, 20, 20);
					adOtherClose.fillStyle = '#404856';
					adOtherCloseFillRect();
				};
				this.addListenerInside('mouseover', adOtherCloseOver, this.getByElement(closeAdDivID + '-canvas'));
				this.addListenerInside('mouseout', adOtherCloseOut, this.getByElement(closeAdDivID + '-canvas'));
			}
			this.addListenerInside('load',
			function() {
				var imgObj = new Image();
				imgObj.src = this.src;
				var imgWH = thisTemp.adjustmentWH(imgObj.width, imgObj.height);
				thisTemp.css([thisTemp.getByElement(imgClassName), thisTemp.getByElement(adDivID)], {
					width: imgWH['width'] + 'px',
					height: imgWH['height'] + 'px',
					border: '0px'
				});
				thisTemp.advertisements['other'][i] = ad;
				thisTemp.ajaxSuccessNull(ad['exhibitionMonitor']);
				thisTemp.adOtherCoor();
			},
			this.getByElement(imgClassName));
			this.addListenerInside('click',
			function() {
				thisTemp.adOtherClose(i);
			},
			this.getByElement(closeAdDivID));
			this.addListenerInside('click',
			function() {
				thisTemp.ajaxSuccessNull(ad['clickMonitor']);
			},
			this.getByElement(imgClassName));
			if (ad['time'] > 0) {
				setTimeout(function() {
					thisTemp.adOtherClose(i);
				},
				ad['time'] * 1000);
			}
		},
		/*
		关闭其它广告
		*/
		adOtherClose: function(i) {
			var ad = this.advertisements['other'][i];
			if (!this.isUndefined(ad['close'])) {
				if (!ad['close']) {
					ad['close'] = true;
					this.PD.removeChild(this.getByElement(ad['div']));
					this.PD.removeChild(this.getByElement(ad['closeDiv']));
				}
			}
		},
		adOtherCloseAll: function() {
			if (!this.isUndefined(this.advertisements['other'])) {
				var ad = this.advertisements['other'];
				for (var i = 0; i < ad.length; i++) {
					this.adOtherClose(i);
				}
			}
		},
		/*
			计算其它广告的坐标
		*/
		adOtherCoor: function() {
			if (!this.isUndefined(this.advertisements['other'])) {
				var arr = this.advertisements['other'];
				for (var i = 0; i < arr.length; i++) {
					var ad = arr[i];
					if (!this.isUndefined(ad['close'])) {
						if (!ad['close']) {
							var coor = this.getPosition(ad);
							var x = coor['x'],
							y = coor['y'],
							cx = x + this.getByElement(ad['div']).offsetWidth - 10,
							cy = y - 10;
							this.css(this.getByElement(ad['div']), {
								left: x + 'px',
								top: y + 'px'
							});
							if (!this.isUndefined(ad['closeDiv'])) {
								this.css(this.getByElement(ad['closeDiv']), {
									left: cx + 'px',
									top: cy + 'px'
								});
							}
						}
					}
				}
			}
		},
		/*
			单独监听中间插入广告
		*/
		checkAdInsert: function(t) {
			if (this.adPlayerPlay) {
				return;
			}
			var adTime = this.advertisements['inserttime'];
			var adPlay = this.advertisements['insertPlay'];
			var duration = this.getMetaDate()['duration'];
			for (var i = adTime.length - 1; i > -1; i--) {
				if (t >= adTime[i] && t < duration - 2 && t > 1 && !adPlay[i]) { //如果播放时间大于广告时间而该广告还没有播放，则开始播放
					this.adI = 0;
					this.adType = 'insert';
					this.adMuteInto();
					this.adIsVideoTime = true;
					this.adPlayStart = true;
					this.adVideoPlay = false;
					this.videoPause();
					this.advertisementsTime();
					this.advertisementsPlay();
					this.adSkipButtonShow();
					adPlay[i] = true;
					for (var n = 0; n < i + 1; n++) {
						adPlay[n] = true;
					}
					break;
				}
			}
		},
		/*格式化中间插入广告的播放时间*/
		formatInserttime: function(duration) {
			if (!this.isUndefined(this.advertisements['inserttime'])) {
				var arr = this.advertisements['inserttime'];
				var newArr = [];
				for (var i = 0; i < arr.length; i++) {
					if (arr[i].toString().substr( - 1) == '%') {
						newArr.push(parseInt(duration * parseInt(arr[i]) * 0.01));
					} else {
						newArr.push(parseInt(arr[i]));
					}
				}
				this.advertisements['inserttime'] = newArr;
			}
		},
		/*获取当前的广告*/
		getNowAdvertisements: function() {
			if (this.adI == -1) {
				return {
					file: '',
					time: 0,
					link: ''
				};
			}
			return this.advertisements[this.adType][this.adI];
		},
		/*根据元件尺寸和播放器尺寸调整大小*/
		adjustmentWH: function(w, h) {
			var width = this.PD.offsetWidth,
			height = this.PD.offsetHeight;
			var nw = 0,
			nh = 0;
			if (w >= width || h >= height) {
				if (width / w > height / h) {
					nh = height - 20;
					nw = w * nh / h;
				} else {
					nw = width - 20;
					nh = h * nw / w;
				}
			} else {
				nw = w;
				nh = h;
			}
			return {
				width: nw,
				height: nh
			}
		},
		/*单独请求一次地址，但不处理返回的数据*/
		ajaxSuccessNull: function(url) {
			if (!this.isUndefined(url)) {
				var ajaxObj = {
					url: url,
					success: function(data) {}
				};
				this.ajax(ajaxObj);
			}
		},
		/*
			内部函数
			运行指定函数
		*/
		runFunction: function(s) {
			try {
				var arr = s.split('->');
				switch (arr[0]) {
				case 'javaScript':
					eval(arr[1] + '()');
					break;
				case 'actionScript':
					eval('this.' + arr[1] + '()');
					break;
				}
			} catch(event) {}
		},
		/*
			内部函数
			使用画布附加视频
		*/
		sendVCanvas: function() {
			if (this.timerVCanvas == null) {
				this.css(this.V, 'display', 'none');
				this.css(this.MD, 'display', 'block');
				var thisTemp = this;
				var videoCanvas = function() {
					if (thisTemp.MDCX.width != thisTemp.PD.offsetWidth) {
						thisTemp.MDC.width = thisTemp.PD.offsetWidth;
					}
					if (thisTemp.MDCX.height != thisTemp.PD.offsetHeight) {
						thisTemp.MDC.height = thisTemp.PD.offsetHeight;
					}
					thisTemp.MDCX.clearRect(0, 0, thisTemp.MDCX.width, thisTemp.MDCX.height);
					var coor = thisTemp.getProportionCoor(thisTemp.PD.offsetWidth, thisTemp.PD.offsetHeight, thisTemp.V.videoWidth, thisTemp.V.videoHeight);
					thisTemp.MDCX.drawImage(thisTemp.V, 0, 0, thisTemp.V.videoWidth, thisTemp.V.videoHeight, coor['x'], coor['y'], coor['width'], coor['height']);
				};
				this.timerVCanvas = new this.timer(0, videoCanvas);
			}
		},
		/*
			内部函数
			监听暂停
		*/
		pauseHandler: function() {
			var thisTemp = this;
			this.playShow(false);
			if (this.animatePauseArray.length > 0) {
				this.animatePause('pause');
			}
			if (this.playerType == 'html5video' && this.V != null && this.config['videoDrawImage']) {
				this.stopVCanvas();
			}
			if (!this.isUndefined(this.advertisements['pause']) && !this.adPlayStart && !this.adPauseShow) { //如果存在暂停广告
				setTimeout(function() {
					if (!thisTemp.isUndefined(thisTemp.advertisements['pause']) && !thisTemp.adPlayStart && !thisTemp.adPauseShow && thisTemp.time > 1) { //如果存在暂停广告
						thisTemp.adPausePlayer();
					}
				},
				300);
			}
		},
		/*
			内部函数
			停止画布
		*/
		stopVCanvas: function() {
			if (this.timerVCanvas != null) {
				this.css(this.V, 'display', 'block');
				this.css(this.MD, 'display', 'none');
				if (this.timerVCanvas.runing) {
					this.timerVCanvas.stop();
				}
				this.timerVCanvas = null;
			}
		},
		/*
			内部函数
			根据当前播放还是暂停确认图标显示
		*/
		playShow: function(b) {
			if (!this.showFace) {
				return;
			}
			if (b) {
				this.css(this.CB['play'], 'display', 'none');
				this.css(this.CB['pauseCenter'], 'display', 'none');
				this.css(this.CB['pause'], 'display', 'block');
			} else {
				this.css(this.CB['play'], 'display', 'block');
				if (this.css(this.CB['errorText'], 'display') == 'none') {
					if (!this.adPlayerPlay) {
						this.css(this.CB['pauseCenter'], 'display', 'block');
					}

				} else {
					this.css(this.CB['pauseCenter'], 'display', 'none');
				}
				this.css(this.CB['pause'], 'display', 'none');
			}
		},
		/*
			内部函数
			监听seek结束
		*/
		seekedHandler: function() {
			this.resetTrack();
			this.isTimeButtonMove = true;
			if (this.V.paused) {
				if(this.hlsAutoPlay){
					this.videoPlay();
				}
				else{
					this.hlsAutoPlay=true;
				}
			}
		},
		/*
			内部函数
			监听播放结束
		*/
		endedHandler: function() {
			if (this.adPlayerPlay) {
				this.adI++;
				this.advertisementsPlay();
				return;
			}
			if (!this.endAdPlay && !this.isUndefined(this.advertisements['end'])) {
				this.endAdPlay = true;
				this.adI = 0;
				this.adType = 'end';
				this.adMuteInto();
				this.adIsVideoTime = true;
				this.adPlayStart = true;
				this.adVideoPlay = false;
				this.videoPause();
				this.advertisementsTime();
				this.advertisementsPlay();
				this.adSkipButtonShow();
				this.adReset = true;
				return;
			}
			this.sendJS('ended');
			this.endedAdReset();
			if (this.vars['loop']) {
				this.videoSeek(0);
			}
		},
		/*
			重置结束后相关的设置
		*/
		endedAdReset: function() {
			var arr = [];
			var i = 0;
			if (!this.isUndefined(this.advertisements['insertPlay'])) {
				arr = this.advertisements['insertPlay'];
				for (i = 0; i < arr.length; i++) {
					this.advertisements['insertPlay'][i] = false;
				}
			}
			if (!this.isUndefined(this.advertisements['otherPlay'])) {
				arr = this.advertisements['otherPlay'];
				for (i = 0; i < arr.length; i++) {
					this.advertisements['otherPlay'][i] = false;
				}
			}
			//this.endAdPlay=false;
		},
		/*
			内部函数
			监听音量改变
		*/
		volumechangeHandler: function() {
			if (!this.showFace) {
				return;
			}
			if ((this.ckplayerConfig['config']['mobileVolumeBarShow'] || !this.isMobile()) && this.css(this.CB['volume'], 'display') != 'none') {
				try {
					var volume=this.volume || this.V.volume;
					if (volume > 0) {
						this.css(this.CB['mute'], 'display', 'block');
						this.css(this.CB['escMute'], 'display', 'none');
					} else {
						this.css(this.CB['mute'], 'display', 'none');
						this.css(this.CB['escMute'], 'display', 'block');
					}
				} catch(event) {}
			}
		},
		/*
			内部函数
			监听播放时间调节进度条
		*/
		timeUpdateHandler: function() {
			var duration = 0;
			if (this.playerType == 'html5video') {
				try {
					duration = this.V.duration;
				} catch(event) {}
			}
			if (isNaN(duration) || parseInt(duration) < 0.2) {
				duration = this.vars['duration'];
			}
			if(this.vars['forceduration']>0){
				duration=this.vars['forceduration'];
			}
			if (duration > 0) {
				this.time = this.V.currentTime;
				this.timeTextHandler();
				this.trackShowHandler();
				if (this.isTimeButtonMove) {
					this.timeProgress(this.time, duration);
				}
			}
		},
		/*
			内部函数
			按时间改变进度条
		*/
		timeProgress: function(time, duration) {
			if (!this.showFace) {
				return;
			}
			var timeProgressBgW = this.CB['timeProgressBg'].offsetWidth;
			var timeBOW = parseInt((time * timeProgressBgW / duration) - (this.CB['timeButton'].offsetWidth * 0.5));
			if (timeBOW > timeProgressBgW - this.CB['timeButton'].offsetWidth) {
				timeBOW = timeProgressBgW - this.CB['timeButton'].offsetWidth;
			}
			if (timeBOW < 0) {
				timeBOW = 0;
			}
			this.css(this.CB['timeProgress'], 'width', timeBOW + 'px');
			this.css(this.CB['timeButton'], 'left', parseInt(timeBOW) + 'px');
		},
		/*
			内部函数
			监听播放时间改变时间显示文本框
		*/
		timeTextHandler: function() { //显示时间/总时间
			if (!this.showFace) {
				return;
			}
			var duration = this.V.duration;
			var time = this.V.currentTime;
			if (isNaN(duration) || parseInt(duration) < 0.2) {
				duration = this.vars['duration'];
			}
			if(this.vars['forceduration']>0){
				duration=this.vars['forceduration'];
			}
			this.CB['timeText'].innerHTML = this.formatTime(time) + ' / ' + this.formatTime(duration);
			if (this.CB['timeText'].offsetWidth > 0) {
				this.buttonWidth['timeText'] = this.CB['timeText'].offsetWidth;
			}
		},
		/*
			内部函数
			监听是否是缓冲状态
		*/
		bufferEdHandler: function() {
			if (!this.showFace || this.playerType == 'flashplayer') {
				return;
			}
			var thisTemp = this;
			var clearTimerBuffer = function() {
				if (thisTemp.timerBuffer != null) {
					if (thisTemp.timerBuffer.runing) {
						thisTemp.sendJS('buffer', 100);
						thisTemp.timerBuffer.stop();
					}
					thisTemp.timerBuffer = null;
				}
			};
			clearTimerBuffer();
			var bufferFun = function() {
				if (!thisTemp.isUndefined(thisTemp.V) && thisTemp.V.buffered.length > 0) {
					var duration = thisTemp.V.duration;
					var len = thisTemp.V.buffered.length;
					var bufferStart = thisTemp.V.buffered.start(len - 1);
					var bufferEnd = thisTemp.V.buffered.end(len - 1);
					var loadTime = bufferStart + bufferEnd;
					var loadProgressBgW = thisTemp.CB['timeProgressBg'].offsetWidth;
					var timeButtonW = thisTemp.CB['timeButton'].offsetWidth;
					var loadW = parseInt((loadTime * loadProgressBgW / duration) + timeButtonW);
					if (loadW >= loadProgressBgW) {
						loadW = loadProgressBgW;
						clearTimerBuffer();
					}
					thisTemp.changeLoad(loadTime);
				}
			};
			this.timerBuffer = new this.timer(200, bufferFun);
		},
		/*
			内部函数
			单独计算加载进度
		*/
		changeLoad: function(loadTime) {
			if (this.V == null) {
				return;
			}
			if (!this.showFace) {
				return;
			}
			var loadProgressBgW = this.CB['timeProgressBg'].offsetWidth;
			var timeButtonW = this.CB['timeButton'].offsetWidth;
			var duration = this.V.duration;
			if (isNaN(duration) || parseInt(duration) < 0.2) {
				duration = this.vars['duration'];
			}
			if(this.vars['forceduration']>0){
				duration=this.vars['forceduration'];
			}
			if (this.isUndefined(loadTime)) {
				loadTime = this.loadTime;
			} else {
				this.loadTime = loadTime;
			}
			var loadW = parseInt((loadTime * loadProgressBgW / duration) + timeButtonW);
			this.css(this.CB['loadProgress'], 'width', loadW + 'px');
			this.sendJS('loadTime',loadTime);
			this.loadTimeTemp=loadTime;
		},
		/*
			内部函数
			判断是否是直播
		*/
		judgeIsLive: function() {
			var thisTemp = this;
			if (this.timerError != null) {
				if (this.timerError.runing) {
					this.timerError.stop();
				}
				this.timerError = null;
			}
			this.error = false;
			if (this.showFace) {
				this.css(this.CB['errorText'], 'display', 'none');
			}
			var timeupdate = function(event) {
				thisTemp.timeUpdateHandler();
			};
			if (!this.vars['live']) {
				if (this.V != null && this.playerType == 'html5video') {
					this.addListenerInside('timeupdate', timeupdate);
					thisTemp.timeTextHandler();
					thisTemp.prompt(); //添加提示点
					setTimeout(function() {
						thisTemp.bufferEdHandler();
					},
					200);
				}
			} else {
				this.removeListenerInside('timeupdate', timeupdate);
				if (this.timerTime != null) {
					window.clearInterval(this.timerTime);
					timerTime = null;
				}
				if (this.timerTime != null) {
					if (this.timerTime.runing) {
						this.timerTime.stop();
					}
					this.timerTime = null;
				}
				var timeFun = function() {
					if (thisTemp.V != null && !thisTemp.V.paused && thisTemp.showFace) {
						thisTemp.CB['timeText'].innerHTML = thisTemp.getNowDate();
					}
				};
				this.timerTime = new this.timer(1000, timeFun);
				//timerTime.start();
			}
			this.definition();
		},
		/*
			内部函数
			加载字幕
		*/
		loadTrack: function(def) {
			if (this.playerType == 'flashplayer' || this.vars['flashplayer'] == true) {
				return;
			}
			if(this.isUndefined(def)){
				def=-1;
			}
			var track = this.vars['cktrack'];
			var loadTrackUrl='';
			var type=this.typeString(track);
			var thisTemp = this;
			if(type=='array'){
				if(def==-1){
					var index=0;
					var indexN=0;
					for(var i=0;i<track.length;i++){
						var li=track[i];
						if(li.length==3 && li[2]>indexN){
							indexN=li[2];
							index=i;
						}
					}
				}
				else{
					index=def;
				}
				loadTrackUrl=track[index][0];
			}
			else{
				loadTrackUrl=track;
			}
			var obj = {
				method: 'get',
				dataType: 'text',
				url: loadTrackUrl,
				charset: 'utf-8',
				success: function(data) {
					if(data){
						thisTemp.track = thisTemp.parseSrtSubtitles(data);
						thisTemp.trackIndex = 0;
						thisTemp.nowTrackShow = {
							sn: ''
						}
					}
					
				}
			};
			this.ajax(obj);
		},
		/*
			内部函数
			重置字幕
		*/
		resetTrack: function() {
			this.trackIndex = 0;
			this.nowTrackShow = {
				sn: ''
			};
		},
		/*
			内部函数
			根据时间改变读取显示字幕
		*/
		trackShowHandler: function() {
			if (!this.showFace || this.adPlayerPlay) {
				return;
			}
			if (this.track.length < 1) {
				return;
			}
			if (this.trackIndex >= this.track.length) {
				this.trackIndex = 0;
			}
			var nowTrack = this.track[this.trackIndex]; //当前编号对应的字幕内容
			/*
				this.nowTrackShow=当前显示在界面上的内容
				如果当前时间正好在nowTrack时间内，则需要判断
			*/
			if (this.time >= nowTrack['startTime'] && this.time <= nowTrack['endTime']) {
				/*
				 	如果当前显示的内容不等于当前需要显示的内容时，则需要显示正确的内容
				*/
				var nowShow = this.nowTrackShow;
				if (nowShow['sn'] != nowTrack['sn']) {
					this.trackHide();
					this.trackShow(nowTrack);
					this.nowTrackTemp=nowTrack;
				}
			} else {
				/*
				 * 如果当前播放时间不在当前编号字幕内，则需要先清空当前的字幕内容，再显示新的字幕内容
				 */
				this.trackHide();
				this.checkTrack();
			}
		},
		trackShowAgain:function(){
			this.trackHide();
			this.trackShow(this.nowTrackTemp);
		},
		/*
			内部函数
			显示字幕内容
		*/
		trackShow: function(track) {
			this.nowTrackShow = track;
			var arr = track['content'];
			for (var i = 0; i < arr.length; i++) {
				var obj = {
					list: [{
						type: 'text',
						text: arr[i],
						color: '#FFFFFF',
						size: this.trackFontSize,
						font: this.fontFamily,
						lineHeight: this.trackLineHeight+'px'
					}],
					position: [1, 2, null, -(arr.length - i) * this.trackLineHeight - 50]
				};
				var ele = this.addElement(obj);
				this.trackElement.push(ele);
			}
		},
		/*
			内部函数
			隐藏字字幕内容
		*/
		trackHide: function() {
			for (var i = 0; i < this.trackElement.length; i++) {
				this.deleteElement(this.trackElement[i]);
			}
			this.trackElement = [];
		},
		/*
			内部函数
			重新计算字幕的编号
		*/
		checkTrack: function() {
			var num = this.trackIndex;
			var arr = this.track;
			var i = 0;
			for (i = num; i < arr.length; i++) {
				if (this.time >= arr[i]['startTime'] && this.time <= arr[i]['endTime']) {
					this.trackIndex = i;
					break;
				}
			}
		},
		/*
		-----------------------------------------------------------------------------接口函数开始
			接口函数
			在播放和暂停之间切换
		*/
		playOrPause: function() {
			if (!this.loaded) {
				return;
			}
			if (this.V == null) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.playOrPause();
				return;
			}
			if (this.V.paused) {
				this.videoPlay();
			} else {
				this.videoPause();
			}
		},
		/*
			接口函数
			播放动作
		*/
		videoPlay: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoPlay();
				return;
			}
			if (this.adPlayerPlay) {
				this.eliminateAd(); //清除广告
				return;
			}
			try {
				if (this.V.currentSrc) {
					this.V.play();
				}
			} catch(event) {}
		},
		/*
			接口函数
			暂停动作
		*/
		videoPause: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoPause();
				return;
			}
			try {
				this.V.pause();
			} catch(event) {}
		},
		/*
			接口函数
			跳转时间动作
		*/
		videoSeek: function(time) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoSeek(time);
				return;
			}
			var duration = this.V.duration>0.2?this.V.duration:this.getMetaDate()['duration'];
			if (duration > 0 && time > duration) {
				if(this.vars['forceduration']>0){
					time=0;
					this.sendJS('ended');
				}
				else{
					time = duration-0.1;
				}
			}
			if (time >= 0) {
				this.V.currentTime = time;
				this.sendJS('seekTime', time);
			}
		},
		/*
			接口函数
			调节音量/获取音量
		*/
		changeVolume: function(vol, bg, button) {
			if (this.loaded) {
				if (this.playerType == 'flashplayer') {
					this.V.changeVolume(vol);
					return;
				}
			}
			if (isNaN(vol) || this.isUndefined(vol)) {
				vol = 0;
			}
			if (!this.loaded) {
				this.vars['volume'] = vol;
			}
			if (!this.html5Video) {
				this.V.changeVolume(vol);
				return;
			}
			try {
				if (this.isUndefined(bg)) {
					bg = true;
				}
			} catch(e) {}
			try {
				if (this.isUndefined(button)) {
					button = true;
				}
			} catch(e) {}
			if (!vol) {
				vol = 0;
			}
			if (vol < 0) {
				vol = 0;
			}
			if (vol > 1) {
				vol = 1;
			}
			try {
				this.V.volume = vol;
			} catch(error) {}
			this.volume = vol;
			if (bg && this.showFace) {
				var bgW = vol * this.CB['volumeBg'].offsetWidth;
				if (bgW < 0) {
					bgW = 0;
				}
				if (bgW > this.CB['volumeBg'].offsetWidth) {
					bgW = this.CB['volumeBg'].offsetWidth;
				}
				this.css(this.CB['volumeUp'], 'width', bgW + 'px');
			}

			if (button && this.showFace) {
				var buLeft = parseInt(this.CB['volumeUp'].offsetWidth - (this.CB['volumeBO'].offsetWidth * 0.5));
				if (buLeft > this.CB['volumeBg'].offsetWidth - this.CB['volumeBO'].offsetWidth) {
					buLeft = this.CB['volumeBg'].offsetWidth - this.CB['volumeBO'].offsetWidth
				}
				if (buLeft < 0) {
					buLeft = 0;
				}
				this.css(this.CB['volumeBO'], 'left', buLeft + 'px');
			}
		},
		/*
			接口函数
			静音
		*/
		videoMute: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoMute();
				return;
			}
			this.volumeTemp = this.V ? (this.V.volume > 0 ? this.V.volume: this.vars['volume']) : this.vars['volume'];
			this.changeVolume(0);
		},
		/*
			接口函数
			取消静音
		*/
		videoEscMute: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoEscMute();
				return;
			}
			this.changeVolume(this.volumeTemp > 0 ? this.volumeTemp: this.vars['volume']);
		},
		/*
			接口函数
			视频广告静音
		*/
		adMuteFunction: function() {
			if (!this.loaded) {
				return;
			}
			this.changeVolume(0);
			this.adVideoMute = true;
			this.css(this.CB['adEscMute'], 'display', 'block');
			this.css(this.CB['adMute'], 'display', 'none');
		},
		/*
			接口函数
			视频广告取消静音
		*/
		adEscMuteFunction: function() {
			if (!this.loaded) {
				return;
			}
			var v = this.ckplayerConfig['style']['advertisement']['videoVolume'];
			this.changeVolume(v);
			this.adMuteInto();
		},
		/*
		 	初始化广告的音量按钮
		*/
		adMuteInto: function() {
			this.adVideoMute = false;
			this.css(this.CB['adEscMute'], 'display', 'none');
			this.css(this.CB['adMute'], 'display', 'block');
		},
		/*
			接口函数
			快退
		*/
		fastBack: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.fastBack();
				return;
			}
			var time = this.time - this.ckplayerConfig['config']['timeJump'];
			if (time < 0) {
				time = 0;
			}
			this.videoSeek(time);
		},
		/*
			接口函数
			快进
		*/
		fastNext: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.fastNext();
				return;
			}
			var time = this.time + this.ckplayerConfig['config']['timeJump'];
			if (time > this.V.duration) {
				time = this.V.duration;
			}
			this.videoSeek(time);
		},
		/*
			接口函数
			获取当前播放的地址
		*/
		getCurrentSrc: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				return this.V.getCurrentSrc();
			}
			return this.V.currentSrc;
		},
		/*
			内置函数
			全屏/退出全屏动作，该动作只能是用户操作才可以触发，比如用户点击按钮触发该事件
		*/
		switchFull: function() {
			if (this.full) {
				this.quitFullScreen();
			} else {
				this.fullScreen();
			}
		},
		/*
			内置函数
			全屏动作，该动作只能是用户操作才可以触发，比如用户点击按钮触发该事件
		*/
		fullScreen: function() {
			if (this.html5Video && this.playerType == 'html5video') {
				var element = this.PD;
				if (element.requestFullscreen) {
					element.requestFullscreen();
				} else if (element.mozRequestFullScreen) {
					element.mozRequestFullScreen();
				} else if (element.webkitRequestFullscreen) {
					element.webkitRequestFullscreen();
				} else if (element.msRequestFullscreen) {
					element.msRequestFullscreen();
				} else if (element.oRequestFullscreen) {
					element.oRequestFullscreen();
				}
				this.judgeFullScreen();
			} else {
				//this.V.fullScreen();
			}
		},
		/*
			接口函数
			退出全屏动作
		*/
		quitFullScreen: function() {
			if (this.html5Video && this.playerType == 'html5video') {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.oRequestFullscreen) {
					document.oCancelFullScreen();
				} else if (document.requestFullscreen) {
					document.requestFullscreen();
				} else if (document.webkitExitFullscreen) {
					document.webkitExitFullscreen();
				} else {
					this.css(document.documentElement, 'cssText', '');
					this.css(document.document.body, 'cssText', '');
					this.css(this.PD, 'cssText', '');
				}
				this.judgeFullScreen();
			}
		},
		/*
		 下面列出只有flashplayer里支持的 
		 */
		videoRotation: function(n) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoRotation(n);
				return;
			}
			if (this.isUndefined(n)) {
				n = 0;
			}
			var tf = this.css(this.V, 'transform');
			if (this.isUndefined(tf) && !tf) {
				tf = 'rotate(0deg)';
			}
			var reg = tf.match(/rotate\([^)]+\)/);
			reg = reg ? reg[0].replace('rotate(', '').replace('deg)', '') : '';
			if (reg == '') {
				reg = 0;
			} else {
				reg = parseInt(reg);
			}
			if (n == -1) {
				reg -= 90;
			} else if (n == 1) {
				reg += 90;
			} else {
				if (n != 90 && n != 180 && n != 270 && n != -90 && n != -180 && n != -270) {
					reg = 0;
				} else {
					reg = n;
				}
			}
			n = reg;
			var y90 = n % 90,
			y180 = n % 180,
			y270 = n % 270;
			var ys = false;
			if (y90 == 0 && y180 == 90 && y270 == 90) {
				ys = true;
			}
			if (y90 == 0 && y180 == 90 && y270 == 0) {
				ys = true;
			}
			if (y90 == -0 && y180 == -90 && y270 == -90) {
				ys = true;
			}
			if (y90 == -0 && y180 == -90 && y270 == -0) {
				ys = true;
			}
			tf = tf.replace(/rotate\([^)]+\)/, '').replace(/scale\([^)]+\)/, '') + ' rotate(' + n + 'deg)';
			var cdW = this.CD.offsetWidth,
			cdH = this.CD.offsetHeight,
			vW = this.V.videoWidth,
			vH = this.V.videoHeight;
			if (vW > 0 && vH > 0) {
				if (ys) {
					if (cdW / cdH > vH / vW) {
						nH = cdH;
						nW = vH * nH / vW;
					} else {
						nW = cdW;
						nH = vW * nW / vH;
					}
					this.css(this.V, 'transform', 'rotate(0deg)');
					this.css(this.V, 'transform', 'scale(' + nH / cdW + ',' + nW / cdH + ')' + tf);
				} else {
					this.css(this.V, 'transform', tf);
				}
			} else {
				this.css(this.V, 'transform', tf);
			}
			return;
		},
		videoBrightness: function(n) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoBrightness(n);
				return;
			}
		},
		videoContrast: function(n) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoContrast(n);
				return;
			}
		},
		videoSaturation: function(n) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoSaturation(n);
				return;
			}
		},
		videoHue: function(n) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoHue(n);
				return;
			}
		},
		videoZoom: function(n) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoZoom(n);
				return;
			}
			if (this.isUndefined(n)) {
				n = 1;
			}
			if (n < 0) {
				n = 0;
			}
			if (n > 2) {
				n = 2;
			}
			var tf = this.css(this.V, 'transform');
			tf = tf.replace(/scale\([^)]+\)/, '') + ' scale(' + n + ')';
			this.videoScale = n;
			this.css(this.V, 'transform', tf);
			return;
		},
		videoProportion: function(w, h) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoProportion(w, h);
				return;
			}
		},
		adPlay: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.adPlay();
				return;
			}
			if (this.adPlayerPlay) {
				this.adIsPause = false;
				var ad = this.getNowAdvertisements();
				var type = ad['type'];
				if (this.isStrImage(type)) {
					this.adCountDown();
				} else {
					this.V.play();
				}
			}
		},
		adPause: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.adPause();
				return;
			}
			if (this.adPlayerPlay) {
				this.adIsPause = true;
				var ad = this.getNowAdvertisements();
				var type = ad['type'];
				if (type != 'jpg' && type != 'jpeg' && type != 'png' && type != 'svg' && type != 'gif') {
					this.videoPause();
				}
			}
		},
		videoError: function(n) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoError(n);
				return;
			}
		},
		changeConfig: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				var args = Array.prototype.slice.call(arguments);
				switch(args.length){
					case 1:
						this.V.changeConfig(args[0]);
						break;
					case 2:
						this.V.changeConfig(args[0],args[1]);
						break;
					case 3:
						this.V.changeConfig(args[0],args[1],args[2]);
						break;
					case 4:
						this.V.changeConfig(args[0],args[1],args[2],args[3]);
						break;
					case 5:
						this.V.changeConfig(args[0],args[1],args[2],args[3],args[4]);
						break;
					case 6:
						this.V.changeConfig(args[0],args[1],args[2],args[3],args[4],args[5]);
						break;
					case 7:
						this.V.changeConfig(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
						break;
					case 8:
						this.V.changeConfig(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
						break;
					case 8:
						this.V.changeConfig(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8]);
						break;
				}
				return;
			}
			var obj = this.ckplayerConfig;
			var arg = arguments;
			for (var i = 0; i < arg.length - 1; i++) {
				if (obj.hasOwnProperty(arg[i])) {
					obj = obj[arg[i]];
				} else {
					return;
				}
			}
			var val = arg[arg.length - 1];
			switch (arg.length) {
			case 2:
				this.ckplayerConfig[arg[0]] = val;
				break;
			case 3:
				this.ckplayerConfig[arg[0]][arg[1]] = val;
				break;
			case 4:
				this.ckplayerConfig[arg[0]][arg[1]][arg[2]] = val;
				break;
			case 5:
				this.ckplayerConfig[arg[0]][arg[1]][arg[2]][arg[3]] = val;
				break;
			case 6:
				this.ckplayerConfig[arg[0]][arg[1]][arg[2]][arg[3]][arg[4]] = val;
				break;
			case 7:
				this.ckplayerConfig[arg[0]][arg[1]][arg[2]][arg[3]][arg[4]][arg[5]] = val;
				break;
			case 8:
				this.ckplayerConfig[arg[0]][arg[1]][arg[2]][arg[3]][arg[4]][arg[5]][arg[6]] = val;
				break;
			case 9:
				this.ckplayerConfig[arg[0]][arg[1]][arg[2]][arg[3]][arg[4]][arg[5]][arg[6]][arg[7]] = val;
				break;
			case 10:
				this.ckplayerConfig[arg[0]][arg[1]][arg[2]][arg[3]][arg[4]][arg[5]][arg[6]][arg[7]][arg[8]] = val;
				break;
			default:
				return;
				break;
			}
			this.sendJS('configChange', this.ckplayerConfig);
		},
		custom: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.custom(arguments);
				return;
			}
		},
		getConfig: function() {
			if (!this.loaded) {
				return null;
			}
			if (this.playerType == 'flashplayer') {
				return this.V.getConfig(arguments);
			}
			else{
				var temp=this.ckplayerConfig;
				for(var index in arguments) {  
			        try{
			        	temp=temp[arguments[index]];
			        }
			        catch(error){
			        	temp=null;
			        }
			    }; 
				return temp;
			}
		},
		openUrl: function(n) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.openUrl(n);
				return;
			}
		},
		/*
			接口函数
			清除视频
		*/
		videoClear: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoClear();
				return;
			}
		},
		/*
			接口函数
			向播放器传递新的视频地址
		*/
		newVideo: function(c) {
			if (this.playerType == 'flashplayer') {
				this.V.newVideo(c);
				return;
			} else {
				this.embed(c);
			}
		},
		/*
			接口函数
			截图
		*/
		screenshot: function(obj, save, name) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				try {
					this.V.screenshot(obj, save, name);
				} catch(error) {
					this.log(error);
				}
				return;
			}
			if (obj == 'video') {
				var newCanvas = document.createElement('canvas');
				newCanvas.width = this.V.videoWidth;
				newCanvas.height = this.V.videoHeight;
				newCanvas.getContext('2d').drawImage(this.V, 0, 0, this.V.videoWidth, this.V.videoHeight);
				try {
					var base64 = newCanvas.toDataURL('image/jpeg');
					this.sendJS('screenshot', {
						object: obj,
						save: save,
						name: name,
						base64: base64
					});
				} catch(error) {
					this.log(error);
				}
			}
		},
		/*
			接口函数
			改变播放器尺寸
		*/
		changeSize: function(w, h) {
			if (this.isUndefined(w)) {
				w = 0;
			}
			if (this.isUndefined(h)) {
				h = 0;
			}
			if (w > 0) {
				this.css(this.CD, 'width', w + 'px');
			}
			if (h > 0) {
				this.css(this.CD, 'height', h + 'px');
			}
			if (this.html5Video) {
				this.elementCoordinate();
			}
		},
		/*
			接口函数
			改变视频播放速度
		*/
		changePlaybackRate: function(n) {
			if (this.html5Video) {
				var arr = this.playbackRateArr;
				n = parseInt(n);
				if (n < arr.length) {
					this.newPlaybackrate(arr[n][1]);
				}
			}
		},
		/*
			内部函数
			注册控制控制栏显示与隐藏函数
		*/
		changeControlBarShow: function(show) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.changeControlBarShow(show);
				return;
			}
			if (show) {
				this.controlBarIsShow = true;
				this.controlBarHide(false);
			} else {
				this.controlBarIsShow = false;
				this.controlBarHide(true);
			}
		},
		/*
			-----------------------------------------------------------------------
			调用flashplayer
		*/
		embedSWF: function() {
			var vid = this.randomString();
			var flashvars = this.getFlashVars();
			var param = this.getFlashplayerParam();
			var flashplayerUrl = 'http://www.macromedia.com/go/getflashplayer';
			var html = '',
			src = javascriptPath + 'ckplayer.swf';
			id = 'id="' + vid + '" name="' + vid + '" ';
			html += '<object pluginspage="' + flashplayerUrl + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=11,3,0,0" width="100%" height="100%" ' + id + ' align="middle" wmode="transparent">';
			html += param['v'];
			html += '<param name="movie" value="' + src + '">';
			html += '<param name="flashvars" value="' + flashvars + '">';
			html += '<param name="wmode" value="transparent">';
			html += '<embed wmode="transparent" ' + param['w'] + ' src="' + src + '" flashvars="' + flashvars + '" width="100%" height="100%" ' + id + ' align="middle" type="application/x-shockwave-flash" pluginspage="' + flashplayerUrl + '" />';
			html += '</object>';
			this.PD.innerHTML = html;
			this.V = this.getObjectById(vid); //V：定义播放器对象全局变量
			this.playerType = 'flashplayer';
			//if(!this.checkShockwaveFlash()){
				//this.PD.innerHTML = '<p>'+this.language['noLoadShockwaveFlash']+'</p><p><a href="https://www.flash.cn/" target="_blank" style="color:#FFFFFF">'+this.language['downLoadShockwaveFlash']+'</a></p>';
				//this.css(this.PD,{color:'#FFFFFF',textAlign:'center',paddingTop:'40px'});
			//}
		},
		/*
			判断浏览器是否支持flashplayer 
		*/
		checkShockwaveFlash:function(){
			if(window.ActiveXObject) {
				try {
					var s = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
					if(s) {
						return true;
					}
				} catch(e) {}
			} else {
				try {
					var s = navigator.plugins['Shockwave Flash'];
					if(s) {
						return true;
					}
				} catch(e) {}
			}
			return false;
		},
		/*
			内置函数
			将vars对象转换成字符
		*/
		getFlashVars: function() {
			this.getVarsObject();
			var v = this.vars;
			var z = '';
			for (k in v) {
				if (k != 'flashplayer' && k != 'container' && v[k] != '') {
					if (z != '') {
						z += '&';
					}
					var vk = v[k];
					if (vk == true) {
						vk = 1;
					}
					if (vk == false) {
						vk = 0;
					}
					z += k + '=' + vk;
				}

			}
			if (!v.hasOwnProperty('volume') || !v['volume']) {
				if (z != '') {
					z += '&';
				}
				z += 'volume=0';
			}
			return z;
		},
		/*判断字符串是否是图片*/
		isStrImage: function(s) {
			if (s == 'jpg' || s == 'jpeg' || s == 'png' || s == 'svg' || s == 'gif') {
				return true;
			}
			return false;
		},
		/*
			内置函数
			将vars格式化成flash能接受的对象。再由getFlashVars函数转化成字符串或由newVideo直接使用
		*/
		getVarsObject: function() {
			var v = this.vars;
			var f = '',
			d = '',
			w = ''; //f=视频地址，d=清晰度地址,w=权重，z=最终地址
			var arr = this.VA;
			var prompt = v['promptSpot'];
			var i = 0;
			var video = this.vars['video'];
			if (typeof(video) == 'object') { //对象或数组
				if (!this.isUndefined(typeof(video.length))) { //说明是数组
					var arr = video;
					for (i = 0; i < arr.length; i++) {
						var arr2 = arr[i];
						if (arr2) {
							if (f != '') {
								f += this.ckplayerConfig['config']['split'];
								d += ',';
								w += ',';
								v['type'] += this.ckplayerConfig['config']['split'];
							}
							f += encodeURIComponent(decodeURIComponent(arr2[0]));
							d += arr2[2];
							w += arr2[3];
							v['type'] += arr2[1].replace('video/', '');
						}
					}
				} else {
					f = encodeURIComponent(decodeURIComponent(video['file']));
					if (!this.isUndefined(video['type'])) {
						v['type'] = video['type'];
					}
					d = '';
					w = '';
				}
			} else {
				f = encodeURIComponent(decodeURIComponent(video));
			}
			if (v['preview'] != null) {
				v['previewscale'] = v['preview']['scale'];
				v['preview'] = v['preview']['file'].join(',');

			}
			if (prompt != null) {
				v['promptspot'] = '';
				v['promptspottime'] = '';
				for (i = 0; i < prompt.length; i++) {
					if (v['promptspot'] != '') {
						v['promptspot'] += ',';
						v['promptspottime'] += ',';
					}
					v['promptspot'] += prompt[i]['words'];
					v['promptspottime'] += prompt[i]['time'];
				}

			}
			if (f != '') {
				v['video'] = f;
				v['definition'] = d;
				v['weight'] = w;
			}
			if (!v['volume']) {
				v['volume'] = 0;
			}
			var newV = {};

			for (var k in v) {
				if (v[k] != null) {
					newV[k] = v[k];
				}
				if (k == 'type') {
					newV[k] = v[k].replace('video/m3u8', 'm3u8');
				}
			}

			this.vars = newV;
		},
		/*
			内置函数
			将embedSWF里的param的对象进行转换
		*/
		getFlashplayerParam: function() {
			var w = '',
			v = '',
			o = {
				allowScriptAccess: 'always',
				allowFullScreen: true,
				quality: 'high',
				bgcolor: '#000'
			};
			for (var e in o) {
				w += e + '="' + o[e] + '" ';
				v += '<param name="' + e + '" value="' + o[e] + '" />';
			}
			w = w.replace('movie=', 'src=');
			return {
				w: w,
				v: v
			};
		},

		/*
			操作动作结束
			-----------------------------------------------------------------------
			
			接口函数
			获取元数据部分
		*/
		getMetaDate: function() {
			if (!this.loaded || this.V == null) {
				return false;
			}
			if (this.playerType == 'html5video') {
				var duration = 0;
				try {
					duration = !isNaN(this.V.duration) ? this.V.duration: 0;
					if (isNaN(duration) || parseInt(duration) < 0.2) {
						if(this.vars['duration']>0){
							duration=this.vars['duration'];
						}
					}
					if(this.vars['forceduration']>0){
						duration=this.vars['forceduration'];
					}
				} catch(event) {
					this.log(event);
				}
				var data = {
					duration: duration,
					volume: this.V.volume,
					playbackRate: this.V.playbackRate,
					width: this.PD.offsetWidth || this.V.offsetWidth || this.V.width,
					height: this.PD.offsetHeight || this.V.offsetHeight || this.V.height,
					streamWidth: this.V.videoWidth,
					streamHeight: this.V.videoHeight,
					videoWidth: this.V.offsetWidth,
					videoHeight: this.V.offsetHeight,
					paused: this.V.paused,
					loadTime:this.loadTimeTemp
				};
				return data;
			} else {
				try {
					return this.V.getMetaDate();
				} catch(event) {
					this.log(event);
				}
			}
			return false;
		},
		/*
			接口函数
			取当前提供给播放器播放的视频列表
		*/
		getVideoUrl: function() {
			if (this.playerType == 'flashplayer') {
				return this.V.getVideoUrl();
			}
			var arr = [];
			if (this.V.src) {
				arr.push(this.V.src);
			} else {
				var uArr = this.V.childNodes;
				for (var i = 0; i < uArr.length; i++) {
					arr.push(uArr[i].src);
				}
			}
			return arr;
		},
		/*
			内置函数
			格式化函数
		*/
		clickEvent: function(call) {
			if (call == 'none' || call == '' || call == null) {
				return {
					type: 'none'
				};
			}
			var callArr = call.split('->');
			var type = '',
			fun = '',
			link = '',
			target = '';
			if (callArr.length == 2) {
				var callM = callArr[0];
				var callE = callArr[1];
				if (!callE) {
					return {
						type: 'none'
					};
				}
				var val = '';
				var eArr = [];
				type = callM;
				switch (callM) {
				case 'actionScript':
					//trace(THIS.hasOwnProperty(callE));
					if (callE.indexOf('(') > -1) {
						eArr = callE.split('(');
						callE = eArr[0];
						val = eArr[1].replace(')', '');
					}
					if (val == '') {
						fun = 'thisTemp.' + callE + '()';
					} else {
						fun = 'thisTemp.' + callE + '(' + val + ')';
					}
					break;
				case 'javaScript':
					if (callE.substr(0, 11) == '[flashvars]') {
						callE = callE.substr(11);
						if (this.vars.hasOwnProperty(callE)) {
							callE = this.vars[callE];
						} else {
							break;
						}

					}
					if (callE.indexOf('(') > -1) {
						eArr = callE.split('(');
						callE = eArr[0];
						val = eArr[1].replace(')', '');
					}
					if (val == '') {
						fun = callE + '()';
					} else {
						fun = callE + '(' + val + ')';
					}
					break;
				case "link":
					var callLink = (callE + ',').split(',');
					if (callLink[0].substr(0, 11) == '[flashvars]') {
						var fl = callLink[0].replace('[flashvars]', '');
						if (this.vars.hasOwnProperty(fl)) {
							callLink[0] = this.vars[fl];
						} else {
							break;
						}
					}
					if (!callLink[1]) {
						callLink[1] = '_blank';
					}
					link = callLink[0];
					target = callLink[1];
					break;
				}
			}
			return {
				type: type,
				fun: fun,
				link: link,
				target: target
			}
		},
		/*
			内置函数
			根据指定的align,valign,offsetX,offsetY计算坐标
		*/
		getPosition: function(obj) {
			/*
			{
	            "align": "right",
	            "vAlign": "right",
	            "offsetX": -60,
	            "offsetY": -60
	        } 
			*/
			var pw = this.PD.offsetWidth,
			ph = this.PD.offsetHeight;
			var x = 0,
			y = 0;
			switch (obj['align']) {
			case 'left':
				x = obj['offsetX'];
				break;
			case 'center':
				x = pw * 0.5 + obj['offsetX'];
				break;
			case 'right':
				x = pw + obj['offsetX'];
				break;
			}
			switch (obj['vAlign']) {
			case 'top':
				y = obj['offsetY'];
				break;
			case 'middle':
				y = ph * 0.5 + obj['offsetY'];
				break;
			case 'bottom':
				y = ph + obj['offsetY'];
				break;
			}
			return {
				x: x,
				y: y
			};
		},
		/*
			内置函数
			向播放器界面添加一个文本
		*/
		addElement: function(attribute) {
			var thisTemp = this;
			if (this.playerType == 'flashplayer') {
				return this.V.addElement(attribute);
			}
			var i = 0;
			var obj = {
				list: null,
				x: '100%',
				y: "50%",
				position: null,
				alpha: 1,
				backgroundColor: '',
				backAlpha: 1,
				backRadius: 0,
				clickEvent: ''
			};
			obj = this.standardization(obj, attribute);
			var list = obj['list'];
			if (list == null) {
				return '';
			}
			var id = 'element' + this.randomString(10);
			var ele = document.createElement('div');
			ele.className = id;
			if (obj['x']) {
				ele.setAttribute('data-x', obj['x']);
			}
			if (obj['y']) {
				ele.setAttribute('data-y', obj['y']);
			}
			if (obj['position'] != null) {
				ele.setAttribute('data-position', obj['position'].join(','));
			}

			this.PD.appendChild(ele);
			var eid = this.getByElement(id);
			this.css(eid, {
				position: 'absolute',
				filter: 'alpha(opacity:' + obj['alpha'] + ')',
				opacity: obj['alpha'].toString(),
				width: '800px',
				zIndex: '20'
			});
			var bgid = 'elementbg' + this.randomString(10);
			var bgAlpha = obj['alpha'].toString();
			var bgColor = obj['backgroundColor'].replace('0x', '#');
			var html = '';
			var idArr = [];
			var clickArr = [];
			if (!this.isUndefined(list) && list.length > 0) {
				var textObj, returnObj, clickEvent;
				for (i = 0; i < list.length; i++) {
					var newEleid = 'elementnew' + this.randomString(10);
					switch (list[i]['type']) {
					case 'image':
					case 'png':
					case 'jpg':
					case 'jpeg':
					case 'gif':
						textObj = {
							type: 'image',
							file: '',
							radius: 0,
							//圆角弧度
							width: 30,
							//定义宽，必需要定义
							height: 30,
							//定义高，必需要定义
							alpha: 1,
							//透明度
							paddingLeft: 0,
							//左边距离
							paddingRight: 0,
							//右边距离
							paddingTop: 0,
							paddingBottom: 0,
							marginLeft: 0,
							marginRight: 0,
							marginTop: 0,
							marginBottom: 0,
							backgroundColor: '',
							clickEvent: ''
						};

						list[i] = this.standardization(textObj, list[i]);
						clickEvent = this.clickEvent(list[i]['clickEvent']);
						clickArr.push(clickEvent);
						if (clickEvent['type'] == 'link') {
							html += '<div class="' + newEleid + '" data-i="' + i + '"><a href="' + clickEvent['link'] + '" target="' + clickEvent['target'] + '"><img class="' + newEleid + '_image" src="' + list[i]['file'] + '" style="border:0;"></a></div>';
						} else {
							html += '<div class="' + newEleid + '" data-i="' + i + '"><img class="' + newEleid + '_image" src="' + list[i]['file'] + '" style="border:0;"></div>';
						}
						break;
					case 'text':
						textObj = {
							type: 'text',
							//说明是文本
							text: '',
							//文本内容
							color: '0xFFFFFF',
							size: 14,
							font: this.fontFamily,
							leading: 0,
							alpha: 1,
							//透明度
							paddingLeft: 0,
							//左边距离
							paddingRight: 0,
							//右边距离
							paddingTop: 0,
							paddingBottom: 0,
							marginLeft: 0,
							marginRight: 0,
							marginTop: 0,
							marginBottom: 0,
							backgroundColor: '',
							backAlpha: 1,
							backRadius: 0,
							//背景圆角弧度，支持数字统一设置，也支持分开设置[30,20,20,50]，对应上左，上右，下右，下左
							clickEvent: ''
						};
						list[i] = this.standardization(textObj, list[i]);
						clickEvent = this.clickEvent(list[i]['clickEvent']);
						clickArr.push(clickEvent);
						if (clickEvent['type'] == 'link') {
							html += '<div class="' + newEleid + '" data-i="' + i + '"><div class="' + newEleid + '_bg"></div><div class="' + newEleid + '_text"><a href="' + clickEvent['link'] + '" target="' + clickEvent['target'] + '">' + list[i]['text'] + '</a></div></div>';
						} else {
							html += '<div  class="' + newEleid + '" data-i="' + i + '"><div class="' + newEleid + '_bg"></div><div class="' + newEleid + '_text">' + list[i]['text'] + '</div></div>';
						}
						break;
					default:
						break;
					}
					idArr.push(newEleid);
				}
			}
			var objClickEvent = this.clickEvent(obj['clickEvent']);
			/*if(objClickEvent['type']=='link'){
				html = '<a href="'+objClickEvent['link']+'" target="'+objClickEvent['target']+'">' + html + '</a>';
			}*/
			eid.innerHTML = '<div class="' + bgid + '"></div><div class="' + bgid + '_c">' + html + '</div>';
			if (objClickEvent['type'] == 'javaScript' || objClickEvent['type'] == 'actionScript') {
				var objClickHandler = function() {
					eval(objClickEvent['fun']);
					thisTemp.sendJS('clickEvent', clk['type'] + '->' + clk['fun'].replace('thisTemp.', '').replace('()', ''));
				};
				this.addListenerInside('click', objClickHandler, this.getByElement(bgid + '_c'))
			}
			this.css(bgid + '_c', {
				position: 'absolute',
				zIndex: '2'
			});
			for (i = 0; i < idArr.length; i++) {
				var clk = clickArr[i];

				if (clk['type'] == 'javaScript' || clk['type'] == 'actionScript') {
					var clickHandler = function() {
						clk = clickArr[this.getAttribute('data-i')];
						eval(clk['fun']);
						thisTemp.sendJS('clickEvent', clk['type'] + '->' + clk['fun'].replace('thisTemp.', '').replace('()', ''));
					};
					this.addListenerInside('click', clickHandler, this.getByElement(idArr[i]))
				}
				switch (list[i]['type']) {
				case 'image':
				case 'png':
				case 'jpg':
				case 'jpeg':
				case 'gif':
					this.css(idArr[i], {
						float: 'left',
						width: list[i]['width'] + 'px',
						height: list[i]['height'] + 'px',
						filter: 'alpha(opacity:' + list[i]['alpha'] + ')',
						opacity: list[i]['alpha'].toString(),
						marginLeft: list[i]['marginLeft'] + 'px',
						marginRight: list[i]['marginRight'] + 'px',
						marginTop: list[i]['marginTop'] + 'px',
						marginBottom: list[i]['marginBottom'] + 'px',
						borderRadius: list[i]['radius'] + 'px',
						cursor: 'pointer'
					});
					this.css(idArr[i] + '_image', {
						width: list[i]['width'] + 'px',
						height: list[i]['height'] + 'px',
						borderRadius: list[i]['radius'] + 'px'
					});
					break;
				case 'text':
					this.css(idArr[i] + '_text', {
						filter: 'alpha(opacity:' + list[i]['alpha'] + ')',
						opacity: list[i]['alpha'].toString(),
						borderRadius: list[i]['radius'] + 'px',
						fontFamily: list[i]['font'],
						fontSize: list[i]['size'] + 'px',
						color: list[i]['color'].replace('0x', '#'),
						lineHeight: list[i]['leading'] > 0 ? list[i]['leading'] + 'px': '',
						paddingLeft: list[i]['paddingLeft'] + 'px',
						paddingRight: list[i]['paddingRight'] + 'px',
						paddingTop: list[i]['paddingTop'] + 'px',
						paddingBottom: list[i]['paddingBottom'] + 'px',
						whiteSpace: 'nowrap',
						position: 'absolute',
						zIndex: '3',
						cursor: 'pointer'
					});
					this.css(idArr[i], {
						float: 'left',
						width: this.getByElement(idArr[i] + '_text').offsetWidth + 'px',
						height: this.getByElement(idArr[i] + '_text').offsetHeight + 'px',
						marginLeft: list[i]['marginLeft'] + 'px',
						marginRight: list[i]['marginRight'] + 'px',
						marginTop: list[i]['marginTop'] + 'px',
						marginBottom: list[i]['marginBottom'] + 'px'
					});
					this.css(idArr[i] + '_bg', {
						width: this.getByElement(idArr[i] + '_text').offsetWidth + 'px',
						height: this.getByElement(idArr[i] + '_text').offsetHeight + 'px',
						filter: 'alpha(opacity:' + list[i]['backAlpha'] + ')',
						opacity: list[i]['backAlpha'].toString(),
						borderRadius: list[i]['backRadius'] + 'px',
						backgroundColor: list[i]['backgroundColor'].replace('0x', '#'),
						position: 'absolute',
						zIndex: '2'
					});
					break;
				default:
					break;
				}
			}
			this.css(bgid, {
				width: this.getByElement(bgid + '_c').offsetWidth + 'px',
				height: this.getByElement(bgid + '_c').offsetHeight + 'px',
				position: 'absolute',
				filter: 'alpha(opacity:' + bgAlpha + ')',
				opacity: bgAlpha,
				backgroundColor: bgColor.replace('0x', '#'),
				borderRadius: obj['backRadius'] + 'px',
				zIndex: '1'
			});
			this.css(eid, {
				width: this.getByElement(bgid).offsetWidth + 'px',
				height: this.getByElement(bgid).offsetHeight + 'px'
			});
			var eidCoor = this.calculationCoor(eid);
			this.css(eid, {
				left: eidCoor['x'] + 'px',
				top: eidCoor['y'] + 'px'
			});

			this.elementArr.push(eid.className);
			return eid;
		},
		/*
			内置函数
			获取元件的属性，包括x,y,width,height,alpha
		*/
		getElement: function(element) {
			if (this.playerType == 'flashplayer') {
				return this.V.getElement(element);
			}
			var ele = element;
			if (typeof(element) == 'string') {
				ele = this.getByElement(element);
			}
			var coor = this.getCoor(ele);
			return {
				x: coor['x'],
				y: coor['y'],
				width: ele.offsetWidth,
				height: ele.offsetHeight,
				alpha: !this.isUndefined(this.css(ele, 'opacity')) ? parseFloat(this.css(ele, 'opacity')) : 1,
				show: this.css(ele, 'display') == 'none' ? false: true
			};
		},
		/*
			内置函数
			控制元件显示和隐藏
		*/
		elementShow: function(element, show) {
			if (this.playerType == 'flashplayer') {
				this.V.elementShow(element, show);
				return;
			}
			if (typeof(element) == 'string') {
				if (element) {
					this.css(ele, 'display', show == true ? 'block': 'none');
				} else {
					var arr = this.elementTempArr;
					for (var i = 0; i < arr.length; i++) {
						this.css(arr[i], 'display', show == true ? 'block': 'none');
					}
				}
			}

		},
		/*
			内置函数
			根据节点的x,y计算在播放器里的坐标
		*/
		calculationCoor: function(ele) {
			if (this.playerType == 'flashplayer') {
				return this.V.calculationCoor(ele);
			}
			if (ele == []) {
				return;
			}
			var x, y, position = [];
			var w = this.PD.offsetWidth,
			h = this.PD.offsetHeight;
			var ew = ele.offsetWidth,
			eh = ele.offsetHeight;
			if (!this.isUndefined(this.getDataset(ele, 'x'))) {
				x = this.getDataset(ele, 'x');
			}
			if (!this.isUndefined(this.getDataset(ele, 'y'))) {
				y = this.getDataset(ele, 'y');
			}
			if (!this.isUndefined(this.getDataset(ele, 'position'))) {
				try {
					position = this.getDataset(ele, 'position').toString().split(',');
				} catch(event) {}
			}
			if (position.length > 0) {
				position.push(null, null, null, null);
				var i = 0;
				for (i = 0; i < position.length; i++) {
					if (this.isUndefined(position[i]) || position[i] == null || position[i] == 'null' || position[i] == '') {
						position[i] = null;
					} else {
						position[i] = parseFloat(position[i]);
					}
				}

				if (position[2] == null) {
					switch (position[0]) {
					case 0:
						x = 0;
						break;
					case 1:
						x = parseInt((w - ew) * 0.5);
						break;
					default:
						x = w - ew;
						break;
					}
				} else {
					switch (position[0]) {
					case 0:
						x = position[2];
						break;
					case 1:
						x = parseInt(w * 0.5) + position[2];
						break;
					default:
						x = w + position[2];
						break;
					}
				}
				if (position[3] == null) {
					switch (position[1]) {
					case 0:
						y = 0;
						break;
					case 1:
						y = parseInt((h - eh) * 0.5);
						break;
					default:
						y = h - eh;
						break;
					}
				} else {
					switch (position[1]) {
					case 0:
						y = position[3];
						break;
					case 1:
						y = parseInt(h * 0.5) + position[3];
						break;
					default:
						y = h + position[3];
						break;
					}
				}
			} else {
				if (x.substring(x.length - 1, x.length) == '%') {
					x = Math.floor(parseInt(x.substring(0, x.length - 1)) * w * 0.01);
				}
				if (y.substring(y.length - 1, y.length) == '%') {
					y = Math.floor(parseInt(y.substring(0, y.length - 1)) * h * 0.01);
				}
			}
			return {
				x: x,
				y: y
			}

		},
		/*
			内置函数
			修改新增元件的坐标
		*/
		changeElementCoor: function() {
			for (var i = 0; i < this.elementArr.length; i++) {
				if (this.getByElement(this.elementArr[i]) != []) {
					var c = this.calculationCoor(this.getByElement(this.elementArr[i]));
					if (c['x'] && c['y']) {
						this.css(this.elementArr[i], {
							top: c['y'] + 'px',
							left: c['x'] + 'px'
						});
					}
				}
			}
		},
		/*
			内置函数
			缓动效果集
		*/
		tween: function() {
			var Tween = {
				None: { //均速运动
					easeIn: function(t, b, c, d) {
						return c * t / d + b;
					},
					easeOut: function(t, b, c, d) {
						return c * t / d + b;
					},
					easeInOut: function(t, b, c, d) {
						return c * t / d + b;
					}
				},
				Quadratic: {
					easeIn: function(t, b, c, d) {
						return c * (t /= d) * t + b;
					},
					easeOut: function(t, b, c, d) {
						return - c * (t /= d) * (t - 2) + b;
					},
					easeInOut: function(t, b, c, d) {
						if ((t /= d / 2) < 1) return c / 2 * t * t + b;
						return - c / 2 * ((--t) * (t - 2) - 1) + b;
					}
				},
				Cubic: {
					easeIn: function(t, b, c, d) {
						return c * (t /= d) * t * t + b;
					},
					easeOut: function(t, b, c, d) {
						return c * ((t = t / d - 1) * t * t + 1) + b;
					},
					easeInOut: function(t, b, c, d) {
						if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
						return c / 2 * ((t -= 2) * t * t + 2) + b;
					}
				},
				Quartic: {
					easeIn: function(t, b, c, d) {
						return c * (t /= d) * t * t * t + b;
					},
					easeOut: function(t, b, c, d) {
						return - c * ((t = t / d - 1) * t * t * t - 1) + b;
					},
					easeInOut: function(t, b, c, d) {
						if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
						return - c / 2 * ((t -= 2) * t * t * t - 2) + b;
					}
				},
				Quintic: {
					easeIn: function(t, b, c, d) {
						return c * (t /= d) * t * t * t * t + b;
					},
					easeOut: function(t, b, c, d) {
						return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
					},
					easeInOut: function(t, b, c, d) {
						if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
						return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
					}
				},
				Sine: {
					easeIn: function(t, b, c, d) {
						return - c * Math.cos(t / d * (Math.PI / 2)) + c + b;
					},
					easeOut: function(t, b, c, d) {
						return c * Math.sin(t / d * (Math.PI / 2)) + b;
					},
					easeInOut: function(t, b, c, d) {
						return - c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
					}
				},
				Exponential: {
					easeIn: function(t, b, c, d) {
						return (t == 0) ? b: c * Math.pow(2, 10 * (t / d - 1)) + b;
					},
					easeOut: function(t, b, c, d) {
						return (t == d) ? b + c: c * ( - Math.pow(2, -10 * t / d) + 1) + b;
					},
					easeInOut: function(t, b, c, d) {
						if (t == 0) return b;
						if (t == d) return b + c;
						if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
						return c / 2 * ( - Math.pow(2, -10 * --t) + 2) + b;
					}
				},
				Circular: {
					easeIn: function(t, b, c, d) {
						return - c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
					},
					easeOut: function(t, b, c, d) {
						return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
					},
					easeInOut: function(t, b, c, d) {
						if ((t /= d / 2) < 1) return - c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
						return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
					}
				},
				Elastic: {
					easeIn: function(t, b, c, d, a, p) {
						if (t == 0) return b;
						if ((t /= d) == 1) return b + c;
						if (!p) p = d * .3;
						if (!a || a < Math.abs(c)) {
							a = c;
							var s = p / 4;
						} else var s = p / (2 * Math.PI) * Math.asin(c / a);
						return - (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
					},
					easeOut: function(t, b, c, d, a, p) {
						if (t == 0) return b;
						if ((t /= d) == 1) return b + c;
						if (!p) p = d * .3;
						if (!a || a < Math.abs(c)) {
							a = c;
							var s = p / 4;
						} else var s = p / (2 * Math.PI) * Math.asin(c / a);
						return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
					},
					easeInOut: function(t, b, c, d, a, p) {
						if (t == 0) return b;
						if ((t /= d / 2) == 2) return b + c;
						if (!p) p = d * (.3 * 1.5);
						if (!a || a < Math.abs(c)) {
							a = c;
							var s = p / 4;
						} else var s = p / (2 * Math.PI) * Math.asin(c / a);
						if (t < 1) return - .5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
						return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
					}
				},
				Back: {
					easeIn: function(t, b, c, d, s) {
						if (s == undefined) s = 1.70158;
						return c * (t /= d) * t * ((s + 1) * t - s) + b;
					},
					easeOut: function(t, b, c, d, s) {
						if (s == undefined) s = 1.70158;
						return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
					},
					easeInOut: function(t, b, c, d, s) {
						if (s == undefined) s = 1.70158;
						if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
						return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
					}
				},
				Bounce: {
					easeIn: function(t, b, c, d) {
						return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b;
					},
					easeOut: function(t, b, c, d) {
						if ((t /= d) < (1 / 2.75)) {
							return c * (7.5625 * t * t) + b;
						} else if (t < (2 / 2.75)) {
							return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
						} else if (t < (2.5 / 2.75)) {
							return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
						} else {
							return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
						}
					},
					easeInOut: function(t, b, c, d) {
						if (t < d / 2) return Tween.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
						else return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
					}
				}
			};
			return Tween;
		},
		/*
			接口函数
			缓动效果
			ele:Object=需要缓动的对象,
			parameter:String=需要改变的属性：x,y,width,height,alpha,
			effect:String=效果名称,
			start:Int=起始值,
			end:Int=结束值,
			speed:Number=运动的总秒数，支持小数
		*/
		animate: function(attribute) {
			if (this.playerType == 'flashplayer') {
				return this.V.animate(attribute);
			}
			var thisTemp = this;
			var animateId = 'animate_' + this.randomString();
			var obj = {
				element: null,
				parameter: 'x',
				static: false,
				effect: 'None.easeIn',
				start: null,
				end: null,
				speed: 0,
				overStop: false,
				pauseStop: false,
				//暂停播放时缓动是否暂停
				callBack: null
			};
			obj = this.standardization(obj, attribute);
			if (obj['element'] == null || obj['speed'] == 0) {
				return false;
			}
			var w = this.PD.offsetWidth,
			h = this.PD.offsetHeight;
			var effArr = (obj['effect'] + '.').split('.');
			var tweenFun = this.tween()[effArr[0]][effArr[1]];
			var eleCoor = {
				x: 0,
				y: 0
			};
			if (this.isUndefined(tweenFun)) {
				return false;
			}
			//先将该元件从元件数组里删除，让其不再跟随播放器的尺寸改变而改变位置
			var def = this.arrIndexOf(this.elementArr, obj['element'].className);
			if (def > -1) {
				this.elementTempArr.push(obj['element'].className);
				this.elementArr.splice(def, 1);
			}
			//var run = true;
			var css = {};
			//对传递的参数进行转化，x和y转化成left,top
			var pm = this.getElement(obj['element']); //包含x,y,width,height,alpha属性
			var t = 0; //当前时间
			var b = 0; //初始值
			var c = 0; //变化量
			var d = obj['speed'] * 1000; //持续时间
			var timerTween = null;
			var tweenObj = null;
			var start = obj['start'] == null ? '': obj['start'].toString();
			var end = obj['end'] == null ? '': obj['end'].toString();
			switch (obj['parameter']) {
			case 'x':
				if (obj['start'] == null) {
					b = pm['x'];
				} else {
					if (start.substring(start.length - 1, start.length) == '%') {
						b = parseInt(start) * w * 0.01;
					} else {
						b = parseInt(start);
					}

				}
				if (obj['end'] == null) {
					c = pm['x'] - b;
				} else {
					if (end.substring(end.length - 1, end.length) == '%') {
						c = parseInt(end) * w * 0.01 - b;
					} else if (end.substring(0, 1) == '-' || end.substring(0, 1) == '+') {
						if (typeof(obj['end']) == 'number') {
							c = parseInt(obj['end']) - b;
						} else {
							c = parseInt(end);
						}

					} else {
						c = parseInt(end) - b;
					}
				}
				break;
			case 'y':
				if (obj['start'] == null) {
					b = pm['y'];
				} else {
					if (start.substring(start.length - 1, start.length) == '%') {
						b = parseInt(start) * h * 0.01;
					} else {
						b = parseInt(start);
					}

				}
				if (obj['end'] == null) {
					c = pm['y'] - b;
				} else {
					if (end.substring(end.length - 1, end.length) == '%') {
						c = parseInt(end) * h * 0.01 - b;
					} else if (end.substring(0, 1) == '-' || end.substring(0, 1) == '+') {
						if (typeof(obj['end']) == 'number') {
							c = parseInt(obj['end']) - b;
						} else {
							c = parseInt(end);
						}
					} else {
						c = parseInt(end) - b;
					}
				}
				break;
			case 'alpha':
				if (obj['start'] == null) {
					b = pm['alpha'] * 100;
				} else {
					if (start.substring(start.length - 1, start.length) == '%') {
						b = parseInt(obj['start']);
					} else {
						b = parseInt(obj['start'] * 100);
					}

				}
				if (obj['end'] == null) {
					c = pm['alpha'] * 100 - b;
				} else {
					if (end.substring(end.length - 1, end.length) == '%') {
						c = parseInt(end) - b;
					} else if (end.substring(0, 1) == '-' || end.substring(0, 1) == '+') {
						if (typeof(obj['end']) == 'number') {
							c = parseInt(obj['end']) * 100 - b;
						} else {
							c = parseInt(obj['end']) * 100;
						}
					} else {
						c = parseInt(obj['end']) * 100 - b;
					}
				}
				break;
			}
			var callBack = function() {
				var index = thisTemp.arrIndexOf(thisTemp.animateElementArray, animateId);
				if (index > -1) {
					thisTemp.animateArray.splice(index, 1);
					thisTemp.animateElementArray.splice(index, 1);
				}
				index = thisTemp.arrIndexOf(thisTemp.animatePauseArray, animateId);
				if (index > -1) {
					thisTemp.animatePauseArray.splice(index, 1);
				}
				if (obj['callBack'] != null && obj['element'] && obj['callBack'] != 'callBack' && obj['callBack'] != 'tweenX' && obj['tweenY'] != 'callBack' && obj['callBack'] != 'tweenAlpha') {
					var cb = eval(obj['callBack']);
					cb(obj['element']);
					obj['callBack'] = null;
				}
			};
			var stopTween = function() {
				if (timerTween != null) {
					if (timerTween.runing) {
						timerTween.stop();
					}
					timerTween = null;
				}
			};
			var tweenX = function() {
				if (t < d) {
					t += 10;
					css = {
						left: Math.ceil(tweenFun(t, b, c, d)) + 'px'
					};
					if (obj['static']) {
						eleCoor = thisTemp.calculationCoor(obj['element']);
						css['top'] = eleCoor['y'] + 'px';
					}
					thisTemp.css(obj['element'], css);

				} else {
					stopTween();
					try {
						var defX = this.arrIndexOf(this.elementTempArr, obj['element'].className);
						if (defX > -1) {
							this.elementTempArr.splice(defX, 1);
						}
					} catch(event) {}
					thisTemp.elementArr.push(obj['element'].className);
					callBack();
				}
			};
			var tweenY = function() {
				if (t < d) {
					t += 10;
					css = {
						top: Math.ceil(tweenFun(t, b, c, d)) + 'px'
					};
					if (obj['static']) {
						eleCoor = thisTemp.calculationCoor(obj['element']);
						css['left'] = eleCoor['x'] + 'px';
					}
					thisTemp.css(obj['element'], css);
				} else {
					stopTween();
					try {
						var defY = this.arrIndexOf(this.elementTempArr, obj['element'].className);
						if (defY > -1) {
							this.elementTempArr.splice(defY, 1);
						}
					} catch(event) {}
					thisTemp.elementArr.push(obj['element'].className);
					callBack();
				}
			};
			var tweenAlpha = function() {
				if (t < d) {
					t += 10;
					eleCoor = thisTemp.calculationCoor(obj['element']);
					var ap = Math.ceil(tweenFun(t, b, c, d)) * 0.01;
					css = {
						filter: 'alpha(opacity:' + ap + ')',
						opacity: ap.toString()
					};
					if (obj['static']) {
						eleCoor = thisTemp.calculationCoor(obj['element']);
						css['top'] = eleCoor['y'] + 'px';
						css['left'] = eleCoor['x'] + 'px';
					}
					thisTemp.css(obj['element'], css);
				} else {
					stopTween();
					try {
						var defA = this.arrIndexOf(this.elementTempArr, obj['element'].className);
						if (defA > -1) {
							this.elementTempArr.splice(defA, 1);
						}
					} catch(event) {}
					thisTemp.elementArr.push(obj['element'].className);
					callBack();
				}
			};
			switch (obj['parameter']) {
			case 'x':
				tweenObj = tweenX;
				break;
			case 'y':
				tweenObj = tweenY;
				break;
			case 'alpha':
				tweenObj = tweenAlpha;
				break;
			default:
				break;
			}
			timerTween = new thisTemp.timer(10, tweenObj);
			timerTween.callBackFunction = callBack;
			if (obj['overStop']) {
				var mouseOver = function() {
					if (timerTween != null && timerTween.runing) {
						timerTween.stop();
					}
				};
				this.addListenerInside('mouseover', mouseOver, obj['element']);
				var mouseOut = function() {
					var start = true;
					if (obj['pauseStop'] && thisTemp.getMetaDate()['paused']) {
						start = false;
					}
					if (timerTween != null && !timerTween.runing && start) {
						timerTween.start();
					}
				};
				this.addListenerInside('mouseout', mouseOut, obj['element']);
			}

			this.animateArray.push(timerTween);
			this.animateElementArray.push(animateId);
			if (obj['pauseStop']) {
				this.animatePauseArray.push(animateId);
			}
			return animateId;
		},
		/*
			接口函数函数
			继续运行animate
		*/
		animateResume: function(id) {
			if (this.playerType == 'flashplayer') {
				this.V.animateResume(this.isUndefined(id) ? '': id);
				return;
			}
			var arr = [];
			if (id != '' && !this.isUndefined(id) && id != 'pause') {
				arr.push(id);
			} else {
				if (id === 'pause') {
					arr = this.animatePauseArray;
				} else {
					arr = this.animateElementArray;
				}
			}
			for (var i = 0; i < arr.length; i++) {
				var index = this.arrIndexOf(this.animateElementArray, arr[i]);
				if (index > -1) {
					this.animateArray[index].start();
				}
			}

		},
		/*
			接口函数
			暂停运行animate
		*/
		animatePause: function(id) {
			if (this.playerType == 'flashplayer') {
				this.V.animatePause(this.isUndefined(id) ? '': id);
				return;
			}
			var arr = [];
			if (id != '' && !this.isUndefined(id) && id != 'pause') {
				arr.push(id);
			} else {
				if (id === 'pause') {
					arr = this.animatePauseArray;
				} else {
					arr = this.animateElementArray;
				}
			}
			for (var i = 0; i < arr.length; i++) {
				var index = this.arrIndexOf(this.animateElementArray, arr[i]);
				if (index > -1) {
					this.animateArray[index].stop();
				}
			}
		},
		/*
			内置函数
			根据ID删除数组里对应的内容
		*/
		deleteAnimate: function(id) {
			if (this.playerType == 'flashplayer' && this.V) {
				try {
					this.V.deleteAnimate(id);
				} catch(event) {
					this.log(event);
				}
				return;
			}
			var index = this.arrIndexOf(this.animateElementArray, id);
			if (index > -1) {
				this.animateArray[index].callBackFunction();
				this.animateArray.splice(index, 1);
				this.animateElementArray.splice(index, 1);
			}
		},
		/*
			内置函数
			删除外部新建的元件
		*/
		deleteElement: function(ele) {
			if (this.playerType == 'flashplayer' && this.V) {
				try {
					this.V.deleteElement(ele);
				} catch(event) {}
				return;
			}
			//先将该元件从元件数组里删除，让其不再跟随播放器的尺寸改变而改变位置
			var def = this.arrIndexOf(this.elementArr, ele.className);
			if (def > -1) {
				this.elementArr.splice(def, 1);
			}
			try {
				def = this.arrIndexOf(this.elementTempArr, ele.className);
				if (def > -1) {
					this.elementTempArr.splice(def, 1);
				}
			} catch(event) {}
			this.deleteAnimate(ele);
			this.deleteChild(ele);
		},
		/*
			--------------------------------------------------------------
			共用函数部分
			以下函数并非只能在本程序中使用，也可以在页面其它项目中使用
			根据ID获取元素对象
		*/
		getByElement: function(obj, parent) {
			if (this.isUndefined(parent)) {
				parent = document;
			}
			var num = obj.substr(0, 1);
			var res = [];
			if (num != '#') {
				if (num == '.') {
					obj = obj.substr(1, obj.length);
				}
				if (parent.getElementsByClassName) {
					res = parent.getElementsByClassName(obj);
				} else {
					var reg = new RegExp(' ' + obj + ' ', 'i');
					var ele = parent.getElementsByTagName('*');

					for (var i = 0; i < ele.length; i++) {
						if (reg.test(' ' + ele[i].className + ' ')) {
							res.push(ele[i]);
						}
					}
				}

				if (res.length > 0) {
					return res[0];
				} else {
					return res;
				}
			} else {
				if (num == '#') {
					obj = obj.substr(1, obj.length);
				}
				return document.getElementById(obj);
			}
		},
		/*
		 	共用函数
			功能：修改样式或获取指定样式的值，
				elem：ID对象或ID对应的字符，如果多个对象一起设置，则可以使用数组
				attribute：样式名称或对象，如果是对象，则省略掉value值
				value：attribute为样式名称时，定义的样式值
				示例一：
				this.css(ID,'width','100px');
				示例二：
				this.css('id','width','100px');
				示例三：
				this.css([ID1,ID2,ID3],'width','100px');
				示例四：
				this.css(ID,{
					width:'100px',
					height:'100px'
				});
				示例五(获取宽度)：
				var width=this.css(ID,'width');
		*/
		css: function(elem, attribute, value) {
			var i = 0;
			var k = '';
			if (typeof(elem) == 'object') { //对象或数组
				if (!this.isUndefined(typeof(elem.length))) { //说明是数组
					for (i = 0; i < elem.length; i++) {
						var el;
						if (typeof(elem[i]) == 'string') {
							el = this.getByElement(elem[i])
						} else {
							el = elem[i];
						}
						if (typeof(attribute) != 'object') {
							if (!this.isUndefined(value)) {
								el.style[attribute] = value;
							}
						} else {
							for (k in attribute) {
								if (!this.isUndefined(attribute[k])) {
									try {
										el.style[k] = attribute[k];
									} catch(event) {
										this.log(event);
									}
								}
							}
						}
					}
					return;
				}

			}
			if (typeof(elem) == 'string') {
				elem = this.getByElement(elem);
			}
			if (typeof(attribute) != 'object') {
				if (!this.isUndefined(value)) {
					elem.style[attribute] = value;
				} else {
					if (!this.isUndefined(this.getStyle(elem, attribute))) {
						return this.getStyle(elem, attribute);
					} else {
						return false;
					}
				}
			} else {
				for (k in attribute) {
					if (!this.isUndefined(attribute[k])) {
						elem.style[k] = attribute[k];
					}
				}
			}

		},
		/*
			内置函数
			兼容型获取style
		*/
		getStyle: function(obj, attr) {
			if (!this.isUndefined(obj.style[attr])) {
				return obj.style[attr];
			} else {
				if (obj.currentStyle) {
					return obj.currentStyle[attr];
				} else {
					return getComputedStyle(obj, false)[attr];
				}
			}
		},
		/*
			共用函数
			判断变量是否存在或值是否为undefined
		*/
		isUndefined: function(value) {
			try {
				if (value == 'undefined' || value == undefined || value == null) {
					return true;
				}
			} catch(event) {
				this.log(event);
			}
			return false;
		},
		/*
		 	共用函数
			外部监听函数
		*/
		addListener: function(name, funName) {
			if (name && funName) {
				if (this.playerType == 'flashplayer') {
					var ff = ''; //定义用来向flashplayer传递的函数字符
					if (typeof(funName) == 'function') {
						ff = this.getParameterNames(funName);
					}
					this.V.addListener(name, ff);
					return;
				}
				var have = false;
				for (var i = 0; i < this.listenerJsArr.length; i++) {
					var arr = this.listenerJsArr[i];
					if (arr[0] == name && arr[1] == funName) {
						have = true;
						break;
					}
				}
				if (!have) {
					this.listenerJsArr.push([name, funName]);
				}
			}
		},
		/*
			共用函数
			外部删除监听函数
		*/
		removeListener: function(name, funName) {
			if (name && funName) {
				if (this.playerType == 'flashplayer') {
					var ff = ''; //定义用来向flashplayer传递的函数字符
					if (typeof(funName) == 'function') {
						ff = this.getParameterNames(funName);
					}
					this.V.removeListener(name, ff);
					return;
				}
				for (var i = 0; i < this.listenerJsArr.length; i++) {
					var arr = this.listenerJsArr[i];
					if (arr[0] == name && arr[1] == funName) {
						this.listenerJsArr.splice(i, 1);
						break;
					}
				}
			}
		},
		/*
			内部监听函数，调用方式：
			this.addListenerInside('click',function(event){},[ID]);
			d值为空时，则表示监听当前的视频播放器
		*/
		addListenerInside: function(e, f, d, t) {
			if (this.isUndefined(t)) {
				t = false;
			}
			var o = this.V;
			if (!this.isUndefined(d)) {
				o = d;
			}
			if (o.addEventListener) {
				try {
					o.addEventListener(e, f, t);
				} catch(event) {}
			} else if (o.attachEvent) {
				try {
					o.attachEvent('on' + e, f);
				} catch(event) {}
			} else {
				o['on' + e] = f;
			}
		},
		/*
			删除内部监听函数，调用方式：
			this.removeListenerInside('click',function(event){}[,ID]);
			d值为空时，则表示监听当前的视频播放器
		*/
		removeListenerInside: function(e, f, d, t) {
			/*if(this.playerType=='flashplayer' && this.getParameterNames(f) && this.isUndefined(d)) {
				return;
			}*/
			if (this.isUndefined(t)) {
				t = false;
			}
			var o = this.V;
			if (!this.isUndefined(d)) {
				o = d;
			}
			if (o.removeEventListener) {
				try {
					this.addNum--;
					o.removeEventListener(e, f, t);
				} catch(e) {}
			} else if (o.detachEvent) {
				try {
					o.detachEvent('on' + e, f);
				} catch(e) {}
			} else {
				o['on' + e] = null;
			}
		},
		/*
			共用函数
			统一分配监听，以达到跟as3同样效果
		*/
		sendJS: function(name, val) {
			if (this.adPlayerPlay && name.substr( - 2) != 'Ad') {
				return;
			}
			var list = this.listenerJsArr;
			var obj = {
				variable: this.vars['variable']
			};
			if (this.vars['playerID']) {
				obj['playerID'] = this.vars['playerID'];
			}
			if(this.vars['debug']){
				this.log(name+':'+val);
			}
			for (var i = 0; i < list.length; i++) {
				var arr = list[i];
				if (arr[0] == name) {
					if (val) {
						switch (arr[1].length) {
						case 1:
							arr[1](val);
							break;
						case 2:
							arr[1](val, obj);
							break;
						default:
							arr[1]();
							break;
						}

					} else {
						switch (arr[1].length) {
						case 1:
							if (typeof(val) == 'boolean') {
								arr[1](false);
							} else {
								arr[1](obj);
							}
							break;
						default:
							arr[1]();
							break;
						}

					}
				}
			}
		},
		/*
			共用函数
			获取函数名称，如 function ckplayer(){} var fun=ckplayer，则getParameterNames(fun)=ckplayer
		*/
		getParameterNames: function(fn) {
			if (typeof(fn) !== 'function') {
				return false;
			}
			var COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
			var code = fn.toString().replace(COMMENTS, '');
			var result = code.slice(code.indexOf(' ') + 1, code.indexOf('('));
			return result === null ? false: result;
		},
		/*
			共用函数
			获取当前本地时间
		*/
		getNowDate: function() {
			var nowDate = new Date();
			var month = nowDate.getMonth() + 1;
			var date = nowDate.getDate();
			var hours = nowDate.getHours();
			var minutes = nowDate.getMinutes();
			var seconds = nowDate.getSeconds();
			var tMonth = '',
			tDate = '',
			tHours = '',
			tMinutes = '',
			tSeconds = '',
			tSeconds = (seconds < 10) ? '0' + seconds: seconds + '',
			tMinutes = (minutes < 10) ? '0' + minutes: minutes + '',
			tHours = (hours < 10) ? '0' + hours: hours + '',
			tDate = (date < 10) ? '0' + date: date + '',
			tMonth = (month < 10) ? '0' + month: month + '';
			return tMonth + '/' + tDate + ' ' + tHours + ':' + tMinutes + ':' + tSeconds;
		},
		/*
			共用函数
			格式化时分秒
			seconds:Int：秒数
			ishours:Boolean：是否显示小时，如果设置成false，则会显示如80:20，表示1小时20分钟20秒
		*/
		formatTime: function(seconds, ishours) {
			var tSeconds = '',
			tMinutes = '',
			tHours = '';
			if (isNaN(seconds)) {
				seconds = 0;
			}
			var s = Math.floor(seconds % 60),
			m = 0,
			h = 0;
			if (ishours) {
				m = Math.floor(seconds / 60) % 60;
				h = Math.floor(seconds / 3600);
			} else {
				m = Math.floor(seconds / 60);
			}
			tSeconds = (s < 10) ? '0' + s: s + '';
			tMinutes = (m > 0) ? ((m < 10) ? '0' + m + ':': m + ':') : '00:';
			tHours = (h > 0) ? ((h < 10) ? '0' + h + ':': h + ':') : '';
			if (ishours) {
				return tHours + tMinutes + tSeconds;
			} else {
				return tMinutes + tSeconds;
			}
		},
		/*
			共用函数
			获取一个随机字符
			len：随机字符长度
		*/
		randomString: function(len) {
			len = len || 16;
			var chars = 'abcdefghijklmnopqrstuvwxyz';
			var maxPos = chars.length;
			var val = '';
			for (i = 0; i < len; i++) {
				val += chars.charAt(Math.floor(Math.random() * maxPos));
			}
			return 'ch' + val;
		},
		/*
			共用函数
			获取字符串长度,中文算两,英文数字算1
		*/
		getStringLen: function(str) {
			var len = 0;
			for (var i = 0; i < str.length; i++) {
				if (str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
					len += 2;
				} else {
					len++;
				}
			}
			return len;
		},
		/*
			内部函数
			用来为ajax提供支持
		*/
		createXHR: function() {
			if (window.XMLHttpRequest) {
				//IE7+、Firefox、Opera、Chrome 和Safari
				return new XMLHttpRequest();
			} else if (window.ActiveXObject) {
				//IE6 及以下
				try {
					return new ActiveXObject('Microsoft.XMLHTTP');
				} catch(event) {
					try {
						return new ActiveXObject('Msxml2.XMLHTTP');
					} catch(event) {
						this.eject(this.errorList[7]);
					}
				}
			} else {
				this.eject(this.errorList[8]);
			}
		},
		/*
			共用函数
			ajax调用
		*/
		ajax: function(cObj) {
			var thisTemp = this;
			var callback = null;
			var obj = {
				method: 'get',
				//请求类型
				dataType: 'json',
				//请求的数据类型
				charset: 'utf-8',
				async: false,
				//true表示异步，false表示同步
				url: '',
				data: null,
				success: null
			};
			if (typeof(cObj) != 'object') {
				this.eject(this.errorList[9]);
				return;
			}
			obj = this.standardization(obj, cObj);
			if (obj.dataType === 'json' || obj.dataType === 'text' || obj.dataType === 'html') {
				var xhr = this.createXHR();
				callback = function() {
					//判断http的交互是否成功
					if (xhr.status == 200) {
						if (thisTemp.isUndefined(obj.success)) {
							return;
						}
						if (obj.dataType === 'json') {
							try {
								obj.success(eval('(' + xhr.responseText + ')')); //回调传递参数
							} catch(event) {
								obj.success(null);
							}
						} else {
							obj.success(xhr.responseText); //回调传递参数
						}
					} else {
						obj.success(null);
						thisTemp.eject(thisTemp.errorList[10], 'Ajax.status:' + xhr.status);
					}
				};
				obj.url = obj.url.indexOf('?') == -1 ? obj.url + '?rand=' + this.randomString(6) : obj.url;
				obj.data = this.formatParams(obj.data); //通过params()将名值对转换成字符串
				if (obj.method === 'get' && !this.isUndefined(obj.data)) {
					if (obj.data != '') {
						if (obj.url.indexOf('?') == -1) {
							obj.url += '?' + obj.data
						} else {
							obj.url += '&' + obj.data;
						}
					}
				}
				if (obj.async === true) { //true表示异步，false表示同步
					xhr.onreadystatechange = function() {
						if (xhr.readyState == 4 && callback != null) { //判断对象的状态是否交互完成
							callback(); //回调
						}
					};
				}
				xhr.open(obj.method, obj.url, obj.async);
				if (obj.method === 'post') {
					try{
						xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
						xhr.setRequestHeader('charset', obj['charset']);
						xhr.send(obj.data);
					}
					catch(event){callback();}
				} else {
					try{
						xhr.send(null); //get方式则填null
					}
					catch(event){callback(); }	
				}
				if (obj.async === false) { //同步
					callback();
				}

			} else if (obj.dataType === 'jsonp') {
				var oHead = document.getElementsByTagName('head')[0];
				var oScript = document.createElement('script');
				var callbackName = 'callback' + new Date().getTime();
				var params = this.formatParams(obj.data) + '&callback=' + callbackName; //按时间戳拼接字符串
				callback = obj.success;
				//拼接好src
				oScript.src = obj.url.split('?') + '?' + params;
				//插入script标签
				oHead.insertBefore(oScript, oHead.firstChild);
				//jsonp的回调函数
				window[callbackName] = function(json) {
					callback(json);
					oHead.removeChild(oScript);
				};
			}
		},
		/*
			内置函数
			动态加载js
		*/
		loadJs: function(path, success) {
			var oHead = document.getElementsByTagName('HEAD').item(0);
			var oScript = document.createElement('script');
			oScript.type = 'text/javascript';
			oScript.src = this.getNewUrl(path);
			oHead.appendChild(oScript);
			oScript.onload = function() {
				success();
			}
		},
		/*
			共用函数
			排除IE6-9
		*/
		isMsie: function() {
			var browser = navigator.appName;
			var b_version = navigator.appVersion;
			var version = b_version.split(';');
			var trim_Version = '';
			if (version.length > 1) {
				trim_Version = version[1].replace(/[ ]/g, '');
			}
			if (browser == 'Microsoft Internet Explorer' && (trim_Version == 'MSIE6.0' || trim_Version == 'MSIE7.0' || trim_Version == 'MSIE8.0' || trim_Version == 'MSIE9.0' || trim_Version == 'MSIE10.0')) {
				return false;
			}
			return true;
		},
		/*
			共用函数
			判断是否安装了flashplayer
		*/
		uploadFlash: function() {
			var swf;
			if (navigator.userAgent.indexOf('MSIE') > 0) {
				try {
					var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
					return true;
				} catch(e) {
					return false;
				}
			}
			if (navigator.userAgent.indexOf('Firefox') > 0) {
				swf = navigator.plugins['Shockwave Flash'];
				if (swf) {
					return true
				} else {
					return false;
				}
			}
			return true;
		},
		/*
			共用函数
			检测浏览器是否支持HTML5-Video
		*/
		supportVideo: function() {
			if (!this.isMsie()) {
				return false;
			}
			if ( !! document.createElement('video').canPlayType) {
				var vidTest = document.createElement('video');
				var oggTest;
				try {
					oggTest = vidTest.canPlayType('video/ogg; codecs="theora, vorbis"');
				} catch(error) {
					oggTest = false;
				}
				if (!oggTest) {
					var h264Test;
					try {
						h264Test = vidTest.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
					} catch(error) {
						h264Test = false;
					}
					if (!h264Test) {
						return false;
					} else {
						if (h264Test == "probably") {
							return true;
						} else {
							return false;
						}
					}
				} else {
					if (oggTest == "probably") {
						return true;
					} else {
						return false;
					}
				}
			} else {
				return false;
			}
		},
		/*
			共用函数
			获取属性值
		*/
		getDataset: function(ele, z) {
			try {
				return ele.dataset[z];
			} catch(error) {
				try {
					return ele.getAttribute('data-' + z)
				} catch(error) {
					return false;
				}
			}
		},
		/*
			共用函数
			返回flashplayer的对象
		*/
		getObjectById: function(id) {
			var x = null;
			var y = this.getByElement('#' + id);
			var r = 'embed';
			if (y && y.nodeName == 'OBJECT') {
				if (typeof(y.SetVariable) != 'undefined') {
					x = y;
				} else {
					var z = y.getElementsByTagName(r)[0];
					if (z) {
						x = z;
					}
				}
			}
			return x;
		},
		/*
			共用函数
			对象转地址字符串
		*/
		formatParams: function(data) {
			var arr = [];
			for (var i in data) {
				arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
			}
			return arr.join('&');
		},
		/*
			内置函数
			对地址进行冒泡排序
		*/
		arrSort: function(arr) {
			var temp = [];
			for (var i = 0; i < arr.length; i++) {
				for (var j = 0; j < arr.length - i; j++) {
					if (!this.isUndefined(arr[j + 1]) && arr[j][3] < arr[j + 1][3]) {
						temp = arr[j + 1];
						arr[j + 1] = arr[j];
						arr[j] = temp;
					}
				}
			}
			return arr;
		},
		/*
			内置函数
			判断文件后缀
		*/
		getFileExt: function(filepath) {
			if (filepath != '' && !this.isUndefined(filepath)) {
				if (filepath.indexOf('?') > -1) {
					filepath = filepath.split('?')[0];
				}
				var pos = '.' + filepath.replace(/.+\./, '');
				return pos.toLowerCase();
			}
			return '';
		},
		/*
			内置函数
			判断是否是移动端
		*/
		isMobile: function() {
			if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android|ios)/i)) {
				return true;
			}
			return false;
		},
		/*
			内置函数
			搜索字符串str是否包含key
		*/
		isContains: function(str, key) {
			return str.indexOf(key) > -1;
		},
		/*
			内置函数
			给地址添加随机数
		*/
		getNewUrl: function(url) {
			if (this.isContains(url, '?')) {
				return url += '&' + this.randomString(8) + '=' + this.randomString(8);
			} else {
				return url += '?' + this.randomString(8) + '=' + this.randomString(8);
			}
		},
		/*
			共用函数
			获取clientX和clientY
		*/
		client: function(event) {
			var eve = event || window.event;
			if (this.isUndefined(eve)) {
				eve = {
					clientX: 0,
					clientY: 0
				};
			}
			return {
				x: eve.clientX + (document.documentElement.scrollLeft || this.body.scrollLeft) - this.pdCoor['x'],
				y: eve.clientY + (document.documentElement.scrollTop || this.body.scrollTop) - this.pdCoor['y']
			}
		},
		/*
			内置函数
			获取节点的绝对坐标
		*/
		getCoor: function(obj) {
			var coor = this.getXY(obj);
			return {
				x: coor['x'] - this.pdCoor['x'],
				y: coor['y'] - this.pdCoor['y']
			};
		},
		getXY: function(obj) {
			var parObj = obj;
			var left = obj.offsetLeft;
			var top = obj.offsetTop;
			while (parObj = parObj.offsetParent) {
				left += parObj.offsetLeft;
				top += parObj.offsetTop;
			}
			return {
				x: left,
				y: top
			};
		},
		/*
			内置函数
			删除本对象的所有属性
		*/
		removeChild: function() {
			if (this.playerType == 'html5video') {
				//删除计时器
				var i = 0;
				var timerArr = [this.timerError, this.timerFull, this.timerTime, this.timerBuffer, this.timerClick, this.timerLoading, this.timerCBar, this.timerVCanvas];
				for (i = 0; i < timerArr.length; i++) {
					if (timerArr[i] != null) {
						if (timerArr[i].runing) {
							timerArr[i].stop();
						}
						timerArr[i] = null;
					}
				}
				//删除事件监听
				var ltArr = this.listenerJsArr;
				for (i = 0; i < ltArr.length; i++) {
					this.removeListener(ltArr[i][0], ltArr[i][1]);
				}
			}
			this.playerType == '';
			this.V = null;
			if (this.showFace) {
				this.deleteChild(this.CB['menu']);
			}
			this.deleteChild(this.PD);
			this.CD.innerHTML = '';
		},
		/*
			内置函数
			画封闭的图形
		*/
		canvasFill: function(name, path) {
			name.beginPath();
			for (var i = 0; i < path.length; i++) {
				var d = path[i];
				if (i > 0) {
					name.lineTo(d[0], d[1]);
				} else {
					name.moveTo(d[0], d[1]);
				}
			}
			name.closePath();
			name.fill();
		},
		/*
			内置函数
			画矩形
		*/
		canvasFillRect: function(name, path) {
			for (var i = 0; i < path.length; i++) {
				var d = path[i];
				name.fillRect(d[0], d[1], d[2], d[3]);
			}
		},
		/*
			共用函数
			删除容器节点
		*/
		deleteChild: function(f) {
			var def = this.arrIndexOf(this.elementArr, f.className);
			if (def > -1) {
				this.elementArr.splice(def, 1);
			}
			var childs = f.childNodes;
			for (var i = childs.length - 1; i >= 0; i--) {
				f.removeChild(childs[i]);
			}

			if (f && f != null && f.parentNode) {
				try {
					if (f.parentNode) {
						f.parentNode.removeChild(f);

					}

				} catch(event) {}
			}
		},
		/*
			内置函数
		 	根据容器的宽高,内部节点的宽高计算出内部节点的宽高及坐标
		*/
		getProportionCoor: function(stageW, stageH, vw, vh) {
			var w = 0,
			h = 0,
			x = 0,
			y = 0;
			if (stageW / stageH < vw / vh) {
				w = stageW;
				h = w * vh / vw;
			} else {
				h = stageH;
				w = h * vw / vh;
			}
			x = (stageW - w) * 0.5;
			y = (stageH - h) * 0.5;
			return {
				width: parseInt(w),
				height: parseInt(h),
				x: parseInt(x),
				y: parseInt(y)
			};
		},
		/*
			共用函数
			将字幕文件内容转换成数组
		*/
		parseSrtSubtitles: function(srt) {
			var subtitlesArr = [];
			var textSubtitles = [];
			var i = 0;
			var arrs = srt.split('\n');
			var arr = [];
			var delHtmlTag = function(str) {
				return str.replace(/<[^>]+>/g, ''); //去掉所有的html标记
			};
			for (i = 0; i < arrs.length; i++) {
				if (arrs[i].replace(/\s/g, '').length > 0) {
					arr.push(arrs[i]);
				} else {
					if (arr.length > 0) {
						textSubtitles.push(arr);
					}
					arr = [];
				}
			}
			for (i = 0; i < textSubtitles.length; ++i) {
				var textSubtitle = textSubtitles[i];
				if (textSubtitle.length >= 2) {
					var sn = textSubtitle[0]; // 字幕的序号
					var startTime = this.toSeconds(this.trim(textSubtitle[1].split(' --> ')[0])); // 字幕的开始时间
					var endTime = this.toSeconds(this.trim(textSubtitle[1].split(' --> ')[1])); // 字幕的结束时间
					var content = [delHtmlTag(textSubtitle[2])]; // 字幕的内容
					var cktrackdelay=this.vars['cktrackdelay'];
					if(cktrackdelay!=0){
						startTime+=cktrackdelay;
						endTime+=cktrackdelay;
					}
					// 字幕可能有多行
					if (textSubtitle.length > 2) {
						for (var j = 3; j < textSubtitle.length; j++) {
							content.push(delHtmlTag(textSubtitle[j]));
						}
					}
					// 字幕对象
					var subtitle = {
						sn: sn,
						startTime: startTime,
						endTime: endTime,
						content: content
					};
					subtitlesArr.push(subtitle);
				}
			}
			return subtitlesArr;
		},
		/*
			共用函数
			计时器,该函数模拟as3中的timer原理
			time:计时时间,单位:毫秒
			fun:接受函数
			number:运行次数,不设置则无限运行
		*/
		timer: function(time, fun, number) {
			var thisTemp = this;
			this.time = 10; //运行间隔
			this.fun = null; //监听函数
			this.timeObj = null; //setInterval对象
			this.number = 0; //已运行次数
			this.numberTotal = null; //总至需要次数
			this.runing = false; //当前状态
			this.startFun = function() {
				thisTemp.number++;
				thisTemp.fun();
				if (thisTemp.numberTotal != null && thisTemp.number >= thisTemp.numberTotal) {
					thisTemp.stop();
				}
			};
			this.start = function() {
				if (!thisTemp.runing) {
					thisTemp.runing = true;
					thisTemp.timeObj = window.setInterval(thisTemp.startFun, time);
				}
			};
			this.stop = function() {
				if (thisTemp.runing) {
					thisTemp.runing = false;
					window.clearInterval(thisTemp.timeObj);
					thisTemp.timeObj = null;
				}
			};
			if (time) {
				this.time = time;
			}
			if (fun) {
				this.fun = fun;
			}
			if (number) {
				this.numberTotal = number;
			}
			this.start();
		},
		/*
			共用函数
			将时分秒转换成秒
		*/
		toSeconds: function(t) {
			var s = 0.0;
			if (t) {
				var p = t.split(':');
				for (i = 0; i < p.length; i++) {
					s = s * 60 + parseFloat(p[i].replace(',', '.'));
				}
			}
			return s;
		},
		/*将字符变成数字形式的数组*/
		arrayInt: function(str) {
			var a = str.split(',');
			var b = [];
			for (var i = 0; i < a.length; i++) {
				if (this.isUndefined(a[i])) {
					a[i] = 0;
				}
				if (a[i].substr( - 1) != '%') {
					a[i] = parseInt(a[i]);
				}
				b.push(a[i]);
			}
			return b;
		},
		/*
			共用函数
			将对象Object标准化
		*/
		standardization: function(o, n) { //n替换进o
			var h = {};
			var k;
			for (k in o) {
				h[k] = o[k];
			}
			for (k in n) {
				var type = typeof(h[k]);
				switch (type) {
				case 'number':
					h[k] = parseFloat(n[k]);
					break;
				default:
					h[k] = n[k];
					break;
				}

			}
			return h;
		},
		/*
			共用函数
			搜索数组
		 */
		arrIndexOf: function(arr, key) {
			if(!arr || !key){
				return false;
			}
			var re = new RegExp(key, ['']);
			return (arr.toString().replace(re, '┢').replace(/[^,┢]/g, '')).indexOf('┢');
		},
		/*
			共用函数
			去掉空格
		 */
		trim: function(str) {
			if (str != '') {
				return str.replace(/(^\s*)|(\s*$)/g, '');
			}
			return '';
		},
		/*
			共用函数
			判断对象类型
		*/
		typeString:function typeString(object) {
   			return Object.prototype.toString.call(object).slice(8,-1).toLowerCase();
		},
		/*
			共用函数
			输出内容到控制台
		*/
		log: function(val) {
			try {
				console.log(val);
			} catch(e) {}
		},
		/*
			共用函数
			弹出提示
		*/
		eject: function(er, val) {
			if (!this.vars['debug']) {
				return;
			}
			var errorVal = er[1];
			if (!this.isUndefined(val)) {
				errorVal = errorVal.replace('[error]', val);
			}
			var value = 'error ' + er[0] + ':' + errorVal;
			try {
				this.log(value);
			} catch(e) {}
		}
	};
	window.ckplayer = ckplayer;
})();
;