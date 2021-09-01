"use strict";function _createForOfIteratorHelper(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,t=function(){};return{s:t,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){a=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var interval,DESCRIPTIONS={0:"17 oz double wall 18/8 stainless steel thermal bottle with copper vacuum insulation, threaded stainless steel insulated lid, and stainless steel base. The world is boundless with this stylish water bottle! The perfect giveaway!",1:"The coziest zip up hoodie around. So stylish and comfy, you won't want to take it off. It has unisex sizing, a full zipper, and kangaroo pockets for all your essentials.",2:"One of our best sellers - the Swag.com Triblend Crew! Our blend of durable polyester, combed ring-spun cotton, and silky rayon makes for a soft, comfortable, and long-lasting tee."},main=document.querySelector(".js-main"),itemWrappers=document.querySelectorAll(".js-item-wrapper"),clearElements=document.querySelectorAll(".js-clear"),showDescription=function(e){e=e.target.closest(".js-item-wrapper").dataset.productId,e=DESCRIPTIONS[e];clearInterval(interval),document.querySelector(".js-description").innerHTML=e,setTimeout(function(){interval=setInterval(showNextDescription,3e3)},5e3),console.log("will show")},clearDescription=function(e){e.stopPropagation(),document.querySelector(".js-description").innerHTML="",console.log("will clear")};main.addEventListener("click",showDescription);var _step,_iterator=_createForOfIteratorHelper(clearElements);try{for(_iterator.s();!(_step=_iterator.n()).done;){var clear=_step.value;clear.addEventListener("click",clearDescription)}}catch(e){_iterator.e(e)}finally{_iterator.f()}var nextDescription=window.localStorage.getItem("currentDescription")||0;console.log(nextDescription);var showNextDescription=function(){var e=document.querySelector(".js-description");e.classList.add("description-hidden"),setTimeout(function(){e.innerHTML=nextDescription.toString()+". "+DESCRIPTIONS[nextDescription],nextDescription++,e.classList.remove("description-hidden")},500),nextDescription>=Object.keys(DESCRIPTIONS).length&&(nextDescription=0)};showNextDescription(),interval=setInterval(showNextDescription,3e3),window.addEventListener("beforeunload",function(){window.localStorage.setItem("currentDescription",0===nextDescription?Object.keys(DESCRIPTIONS).length-1:nextDescription-1)});
//# sourceMappingURL=script1.js.map
