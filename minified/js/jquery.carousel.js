function initCarousel(){jQuery("div.carousel1").scrollGallery({mask:"div.gmask",slider:".slideset",slides:".slide",currentNumber:"span.cur-num",totalNumber:"span.all-num",disableWhileAnimating:!0,generatePagination:"div.pagination",circularRotation:!0,pauseOnHover:!1,autoRotation:!0,maskAutoSize:!0,switchTime:2e3,animSpeed:1e3,stretchSlideToMask:!0,step:1})}jQuery(function(){initCarousel()}),function(o){function e(t){this.options=o.extend({mask:"div.mask",slider:">*",slides:">*",activeClass:"active",disabledClass:"disabled",btnPrev:"a.btn-prev",btnNext:"a.btn-next",generatePagination:!1,pagerList:"<ul>",pagerListItem:'<li><a href="#"></a></li>',pagerListItemText:"a",pagerLinks:".pagination li",currentNumber:"span.current-num",totalNumber:"span.total-num",btnPlay:".btn-play",btnPause:".btn-pause",btnPlayPause:".btn-play-pause",galleryReadyClass:"gallery-js-ready",autorotationActiveClass:"autorotation-active",autorotationDisabledClass:"autorotation-disabled",stretchSlideToMask:!1,circularRotation:!0,disableWhileAnimating:!1,autoRotation:!1,pauseOnHover:!s,maskAutoSize:!1,switchTime:4e3,animSpeed:600,event:"click",swipeGap:!1,swipeThreshold:15,handleTouch:!0,vertical:!1,useTranslate3D:!1,step:!1},t),this.init()}e.prototype={init:function(){var t=this;if(this.options.holder){this.findElements(),this.attachEvents(),this.refreshPosition(),this.refreshState(!0),this.resumeRotation(),this.makeCallback("onInit",this);var e=document.querySelectorAll(".vmv"),s=e.length;for(i=0;i<s-1;i++){var n=new Vimeo.Player(e[i]);n.on("play",function(){t.pauseRotation.call(t),setTimeout(function(){t.pauseRotation.call(t)},500)}),n.on("pause",function(){t.resumeRotation.call(t)}),n.on("ended",function(){t.resumeRotation.call(t)})}}},findElements:function(){if(this.fullSizeFunction=this.options.vertical?"outerHeight":"outerWidth",this.innerSizeFunction=this.options.vertical?"height":"width",this.slideSizeFunction="outerHeight",this.maskSizeProperty="height",this.animProperty=this.options.vertical?"marginTop":"marginLeft",this.swipeProperties=this.options.vertical?["up","down"]:["left","right"],this.gallery=o(this.options.holder).addClass(this.options.galleryReadyClass),this.mask=this.gallery.find(this.options.mask),this.slider=this.mask.find(this.options.slider),this.slides=this.slider.find(this.options.slides),this.btnPrev=this.gallery.find(this.options.btnPrev),this.btnNext=this.gallery.find(this.options.btnNext),this.currentStep=0,this.stepsCount=0,!1===this.options.step){var t=this.slides.filter("."+this.options.activeClass);t.length&&(this.currentStep=this.slides.index(t))}this.calculateOffsets(),"string"==typeof this.options.generatePagination?(this.pagerLinks=o(),this.buildPagination()):(this.pagerLinks=this.gallery.find(this.options.pagerLinks),this.attachPaginationEvents()),this.btnPlay=this.gallery.find(this.options.btnPlay),this.btnPause=this.gallery.find(this.options.btnPause),this.btnPlayPause=this.gallery.find(this.options.btnPlayPause),this.curNum=this.gallery.find(this.options.currentNumber),this.allNum=this.gallery.find(this.options.totalNumber)},attachEvents:function(){var i=this;this.bindHandlers(["onWindowResize"]),o(window).bind("load resize orientationchange",this.onWindowResize),this.btnPrev.length&&(this.prevSlideHandler=function(t){t.preventDefault(),i.prevSlide()},this.btnPrev.bind(this.options.event,this.prevSlideHandler)),this.btnNext.length&&(this.nextSlideHandler=function(t){t.preventDefault(),i.nextSlide()},this.btnNext.bind(this.options.event,this.nextSlideHandler)),this.options.pauseOnHover&&!s&&(this.hoverHandler=function(){i.options.autoRotation&&(i.galleryHover=!0)},this.leaveHandler=function(){i.options.autoRotation&&(i.galleryHover=!1)}),this.btnPlay.length&&(this.btnPlayHandler=function(t){t.preventDefault(),i.startRotation()},this.btnPlay.bind(this.options.event,this.btnPlayHandler)),this.btnPause.length&&(this.btnPauseHandler=function(t){t.preventDefault(),i.stopRotation()},this.btnPause.bind(this.options.event,this.btnPauseHandler)),this.btnPlayPause.length&&(this.btnPlayPauseHandler=function(t){t.preventDefault(),i.gallery.hasClass(i.options.autorotationActiveClass)?i.stopRotation():i.startRotation()},this.btnPlayPause.bind(this.options.event,this.btnPlayPauseHandler)),s&&(this.options.useTranslate3D&&this.slider.css({"-webkit-transform":"translate3d(0px, 0px, 0px)"}),this.options.handleTouch&&jQuery.fn.hammer&&this.mask.hammer({drag_block_horizontal:!this.options.vertical,drag_block_vertical:!!this.options.vertical,drag_min_distance:1}).on(this.options.vertical?"touch release dragup dragdown swipeup swipedown":"touch release dragleft dragright swipeleft swiperight",function(t){switch(t.type){case"touch":i.galleryAnimating||(i.originalOffset=parseInt(i.slider.stop(!0,!1).css(i.animProperty),10));break;case i.options.vertical?"dragup":"dragright":case i.options.vertical?"dragdown":"dragleft":if(!i.galleryAnimating&&(t.gesture.direction===i.swipeProperties[0]||t.gesture.direction===i.swipeProperties[1])){var e=i.originalOffset+t.gesture[i.options.vertical?"deltaY":"deltaX"];e=Math.max(Math.min(0,e),i.maxOffset),i.tmpProps={},i.tmpProps[i.animProperty]=e,i.slider.css(i.tmpProps),t.gesture.preventDefault()}break;case i.options.vertical?"swipeup":"swipeleft":i.galleryAnimating||t.gesture.direction===i.swipeProperties[0]&&i.nextSlide(),t.gesture.stopDetect();break;case i.options.vertical?"swipedown":"swiperight":i.galleryAnimating||t.gesture.direction===i.swipeProperties[1]&&i.prevSlide(),t.gesture.stopDetect();break;case"release":i.galleryAnimating||(Math.abs(t.gesture[i.options.vertical?"deltaY":"deltaX"])>i.options.swipeThreshold?i.options.vertical?"down"==t.gesture.direction?i.prevSlide():"up"==t.gesture.direction&&i.nextSlide():"right"==t.gesture.direction?i.prevSlide():"left"==t.gesture.direction&&i.nextSlide():i.switchSlide())}}))},onWindowResize:function(){this.galleryAnimating?this.resizeQueue=!0:(this.calculateOffsets(),this.refreshPosition(),this.buildPagination(),this.refreshState(),this.resizeQueue=!1)},refreshPosition:function(){this.currentStep=Math.min(this.currentStep,this.stepsCount-1),this.tmpProps={},this.tmpProps[this.animProperty]=this.getStepOffset(),this.slider.stop().css(this.tmpProps)},calculateOffsets:function(){var t,e,i=this;if(this.options.stretchSlideToMask){var s={};s[this.innerSizeFunction]=this.mask[this.innerSizeFunction](),this.slides.css(s)}if(this.maskSize=this.mask[this.innerSizeFunction](),this.sumSize=this.getSumSize(),this.maxOffset=this.maskSize-this.sumSize,this.options.vertical&&this.options.maskAutoSize){this.options.step=1,this.stepsCount=this.slides.length,this.stepOffsets=[0];for(var n=t=0;n<this.slides.length;n++)t-=o(this.slides[n])[this.fullSizeFunction](!0),this.stepOffsets.push(t);this.maxOffset=t}else if("number"==typeof this.options.step&&0<this.options.step)for(this.slideDimensions=[],this.slides.each(o.proxy(function(t,e){i.slideDimensions.push(o(e)[i.fullSizeFunction](!0))},this)),this.stepOffsets=[0],this.stepsCount=1,t=e=0;t>this.maxOffset;)t-=this.getSlideSize(e,e+this.options.step),e+=this.options.step,this.stepOffsets.push(Math.max(t,this.maxOffset)),this.stepsCount++;else for(this.stepSize=this.maskSize,this.stepsCount=1,t=0;t>this.maxOffset;)t-=this.stepSize,this.stepsCount++},getSumSize:function(){var i=0;return this.slides.each(o.proxy(function(t,e){i+=o(e)[this.fullSizeFunction](!0)},this)),this.slider.css(this.innerSizeFunction,i),i},getStepOffset:function(t){return t=t||this.currentStep,"number"==typeof this.options.step?this.stepOffsets[this.currentStep]:Math.min(0,Math.max(-this.currentStep*this.stepSize,this.maxOffset))},getSlideSize:function(t,e){for(var i=0,s=t;s<Math.min(e,this.slideDimensions.length);s++)i+=this.slideDimensions[s];return i},buildPagination:function(){if("string"==typeof this.options.generatePagination&&(this.pagerHolder||(this.pagerHolder=this.gallery.find(this.options.generatePagination)),this.pagerHolder.length&&this.oldStepsCount!=this.stepsCount)){this.oldStepsCount=this.stepsCount,this.pagerHolder.empty(),this.pagerList=o(this.options.pagerList).appendTo(this.pagerHolder);for(var t=0;t<this.stepsCount;t++)o(this.options.pagerListItem).appendTo(this.pagerList).find(this.options.pagerListItemText).text(t+1);this.pagerLinks=this.pagerList.children(),this.attachPaginationEvents()}},attachPaginationEvents:function(){var e=this;this.pagerLinksHandler=function(t){t.preventDefault(),e.numSlide(e.pagerLinks.index(t.currentTarget))},this.pagerLinks.bind(this.options.event,this.pagerLinksHandler)},prevSlide:function(){this.options.disableWhileAnimating&&this.galleryAnimating||(0<this.currentStep?(this.currentStep--,this.switchSlide()):this.options.circularRotation&&(this.currentStep=this.stepsCount-1,this.switchSlide()))},nextSlide:function(t){this.options.disableWhileAnimating&&this.galleryAnimating||(this.currentStep<this.stepsCount-1?(this.currentStep++,this.switchSlide()):(this.options.circularRotation||!0===t)&&(this.currentStep=0,this.switchSlide()))},numSlide:function(t){this.currentStep!=t&&(this.currentStep=t,this.switchSlide())},switchSlide:function(){var t=this;this.galleryAnimating=!0,this.tmpProps={},this.tmpProps[this.animProperty]=this.getStepOffset(),this.slider.stop().animate(this.tmpProps,{duration:this.options.animSpeed,complete:function(){t.galleryAnimating=!1,t.resizeQueue&&t.onWindowResize(),t.makeCallback("onChange",t),t.autoRotate()}}),this.refreshState(),this.makeCallback("onBeforeChange",this)},refreshState:function(t){1!==this.options.step&&this.stepsCount!==this.slides.length||this.slides.removeClass(this.options.activeClass).eq(this.currentStep).addClass(this.options.activeClass),this.pagerLinks.removeClass(this.options.activeClass).eq(this.currentStep).addClass(this.options.activeClass),this.curNum.html(this.currentStep+1),this.allNum.html(this.stepsCount),this.options.maskAutoSize&&"number"==typeof this.options.step&&(this.tmpProps={},this.tmpProps[this.maskSizeProperty]=this.slides.eq(Math.min(this.currentStep,this.slides.length-1))[this.slideSizeFunction](!0),this.mask.stop()[t?"css":"animate"](this.tmpProps)),this.options.circularRotation||(this.btnPrev.add(this.btnNext).removeClass(this.options.disabledClass),0===this.currentStep&&this.btnPrev.addClass(this.options.disabledClass),this.currentStep===this.stepsCount-1&&this.btnNext.addClass(this.options.disabledClass)),this.gallery.toggleClass("not-enough-slides",this.sumSize<=this.maskSize)},startRotation:function(){this.options.autoRotation=!0,this.galleryHover=!1,this.autoRotationStopped=!1,this.resumeRotation()},stopRotation:function(){this.galleryHover=!0,this.autoRotationStopped=!0,this.pauseRotation()},pauseRotation:function(){this.gallery.addClass(this.options.autorotationDisabledClass),this.gallery.removeClass(this.options.autorotationActiveClass),clearTimeout(this.timer)},resumeRotation:function(){this.autoRotationStopped||(this.gallery.addClass(this.options.autorotationActiveClass),this.gallery.removeClass(this.options.autorotationDisabledClass),this.autoRotate())},autoRotate:function(){var t=this;clearTimeout(this.timer),!this.options.autoRotation||this.galleryHover||this.autoRotationStopped?this.pauseRotation():this.timer=setTimeout(function(){t.nextSlide(!0)},this.options.switchTime)},bindHandlers:function(t){var s=this;o.each(t,function(t,e){var i=s[e];s[e]=function(){return i.apply(s,arguments)}})},makeCallback:function(t){if("function"==typeof this.options[t]){var e=Array.prototype.slice.call(arguments);e.shift(),this.options[t].apply(this,e)}},destroy:function(){o(window).unbind("load resize orientationchange",this.onWindowResize),this.btnPrev.unbind(this.options.event,this.prevSlideHandler),this.btnNext.unbind(this.options.event,this.nextSlideHandler),this.pagerLinks.unbind(this.options.event,this.pagerLinksHandler),this.gallery.unbind({mouseenter:this.hoverHandler,mouseleave:this.leaveHandler}),this.stopRotation(),this.btnPlay.unbind(this.options.event,this.btnPlayHandler),this.btnPause.unbind(this.options.event,this.btnPauseHandler),this.btnPlayPause.unbind(this.options.event,this.btnPlayPauseHandler),this.options.handleTouch&&o.fn.hammer&&this.mask.hammer().off("touch release dragup dragdown dragleft dragright swipeup swipedown swipeleft swiperight");var t=[this.options.galleryReadyClass,this.options.autorotationActiveClass,this.options.autorotationDisabledClass];this.gallery.removeClass(t.join(" ")),this.slider.add(this.slides).removeAttr("style"),"string"==typeof this.options.generatePagination&&this.pagerHolder.empty()}};var s=/MSIE 10.*Touch/.test(navigator.userAgent)||"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch;o.fn.scrollGallery=function(t){return this.each(function(){o(this).data("ScrollGallery",new e(o.extend(t,{holder:this})))})}}(jQuery),function(t,n){"use strict";var h=function(t,e){return new h.Instance(t,e||{})};h.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},h.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,h.HAS_TOUCHEVENTS="ontouchstart"in t,h.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android/i,h.NO_MOUSEEVENTS=h.HAS_TOUCHEVENTS&&navigator.userAgent.match(h.MOBILE_REGEX),h.EVENT_TYPES={},h.DIRECTION_DOWN="down",h.DIRECTION_LEFT="left",h.DIRECTION_UP="up",h.DIRECTION_RIGHT="right",h.POINTER_MOUSE="mouse",h.POINTER_TOUCH="touch",h.POINTER_PEN="pen",h.EVENT_START="start",h.EVENT_MOVE="move",h.EVENT_END="end",h.DOCUMENT=document,h.plugins={},h.READY=!1,h.Instance=function(t,e){var i=this;return function(){if(!h.READY){for(var t in h.event.determineEventTypes(),h.gestures)h.gestures.hasOwnProperty(t)&&h.detection.register(h.gestures[t]);h.event.onTouch(h.DOCUMENT,h.EVENT_MOVE,h.detection.detect),h.event.onTouch(h.DOCUMENT,h.EVENT_END,h.detection.detect),h.READY=!0}}(),this.element=t,this.enabled=!0,this.options=h.utils.extend(h.utils.extend({},h.defaults),e||{}),this.options.stop_browser_behavior&&h.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),h.event.onTouch(t,h.EVENT_START,function(t){i.enabled&&h.detection.startDetect(i,t)}),this},h.Instance.prototype={on:function(t,e){for(var i=t.split(" "),s=0;i.length>s;s++)this.element.addEventListener(i[s],e,!1);return this},off:function(t,e){for(var i=t.split(" "),s=0;i.length>s;s++)this.element.removeEventListener(i[s],e,!1);return this},trigger:function(t,e){var i=h.DOCUMENT.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e;var s=this.element;return h.utils.hasParent(e.target,s)&&(s=e.target),s.dispatchEvent(i),this},enable:function(t){return this.enabled=t,this}};var r=null,l=!1,u=!1;h.event={bindDom:function(t,e,i){for(var s=e.split(" "),n=0;s.length>n;n++)t.addEventListener(s[n],i,!1)},onTouch:function(s,n,o){var a=this;this.bindDom(s,h.EVENT_TYPES[n],function(t){var e=t.type.toLowerCase();if(!e.match(/mouse/)||!u){(e.match(/touch/)||e.match(/pointerdown/)||e.match(/mouse/)&&1===t.which)&&(l=!0),e.match(/touch|pointer/)&&(u=!0);var i=0;l&&(h.HAS_POINTEREVENTS&&n!=h.EVENT_END?i=h.PointerEvent.updatePointer(n,t):e.match(/touch/)?i=t.touches.length:u||(i=e.match(/up/)?0:1),0<i&&n==h.EVENT_END?n=h.EVENT_MOVE:i||(n=h.EVENT_END),i||null===r?r=t:t=r,o.call(h.detection,a.collectEventData(s,n,t)),h.HAS_POINTEREVENTS&&n==h.EVENT_END&&(i=h.PointerEvent.updatePointer(n,t))),i||(r=null,u=l=!1,h.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=h.HAS_POINTEREVENTS?h.PointerEvent.getEvents():h.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],h.EVENT_TYPES[h.EVENT_START]=t[0],h.EVENT_TYPES[h.EVENT_MOVE]=t[1],h.EVENT_TYPES[h.EVENT_END]=t[2]},getTouchList:function(t){return h.HAS_POINTEREVENTS?h.PointerEvent.getTouchList():t.touches?t.touches:[{identifier:1,pageX:t.pageX,pageY:t.pageY,target:t.target}]},collectEventData:function(t,e,i){var s=this.getTouchList(i,e),n=h.POINTER_TOUCH;return(i.type.match(/mouse/)||h.PointerEvent.matchType(h.POINTER_MOUSE,i))&&(n=h.POINTER_MOUSE),{center:h.utils.getCenter(s),timeStamp:(new Date).getTime(),target:i.target,touches:s,eventType:e,pointerType:n,srcEvent:i,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return h.detection.stopDetect()}}}},h.PointerEvent={pointers:{},getTouchList:function(){var e=this,i=[];return Object.keys(e.pointers).sort().forEach(function(t){i.push(e.pointers[t])}),i},updatePointer:function(t,e){return t==h.EVENT_END?this.pointers={}:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e),Object.keys(this.pointers).length},matchType:function(t,e){if(!e.pointerType)return!1;var i={};return i[h.POINTER_MOUSE]=e.pointerType==e.MSPOINTER_TYPE_MOUSE||e.pointerType==h.POINTER_MOUSE,i[h.POINTER_TOUCH]=e.pointerType==e.MSPOINTER_TYPE_TOUCH||e.pointerType==h.POINTER_TOUCH,i[h.POINTER_PEN]=e.pointerType==e.MSPOINTER_TYPE_PEN||e.pointerType==h.POINTER_PEN,i[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},h.utils={extend:function(t,e,i){for(var s in e)t[s]!==n&&i||(t[s]=e[s]);return t},hasParent:function(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1},getCenter:function(t){for(var e=[],i=[],s=0,n=t.length;s<n;s++)e.push(t[s].pageX),i.push(t[s].pageY);return{pageX:(Math.min.apply(Math,e)+Math.max.apply(Math,e))/2,pageY:(Math.min.apply(Math,i)+Math.max.apply(Math,i))/2}},getVelocity:function(t,e,i){return{x:Math.abs(e/t)||0,y:Math.abs(i/t)||0}},getAngle:function(t,e){var i=e.pageY-t.pageY,s=e.pageX-t.pageX;return 180*Math.atan2(i,s)/Math.PI},getDirection:function(t,e){var i=Math.abs(t.pageX-e.pageX);return Math.abs(t.pageY-e.pageY)<=i?0<t.pageX-e.pageX?h.DIRECTION_LEFT:h.DIRECTION_RIGHT:0<t.pageY-e.pageY?h.DIRECTION_UP:h.DIRECTION_DOWN},getDistance:function(t,e){var i=e.pageX-t.pageX,s=e.pageY-t.pageY;return Math.sqrt(i*i+s*s)},getScale:function(t,e){return 2<=t.length&&2<=e.length?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return 2<=t.length&&2<=e.length?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==h.DIRECTION_UP||t==h.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t,e){var i,s=["webkit","khtml","moz","ms","o",""];if(e&&t.style){for(var n=0;n<s.length;n++)for(var o in e)e.hasOwnProperty(o)&&(i=o,s[n]&&(i=s[n]+i.substring(0,1).toUpperCase()+i.substring(1)),t.style[i]=e[o]);"none"==e.userSelect&&(t.onselectstart=function(){return!1})}}},h.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:h.utils.extend({},e),lastEvent:!1,name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var e=this.current.inst.options,i=0,s=this.gestures.length;i<s;i++){var n=this.gestures[i];if(!this.stopped&&!1!==e[n.name]&&!1===n.handler.call(n,t,this.current.inst)){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==h.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t}},stopDetect:function(){this.previous=h.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var e=this.current.startEvent;if(e&&(t.touches.length!=e.touches.length||t.touches===e.touches)){e.touches=[];for(var i=0,s=t.touches.length;i<s;i++)e.touches.push(h.utils.extend({},t.touches[i]))}var n=t.timeStamp-e.timeStamp,o=t.center.pageX-e.center.pageX,a=t.center.pageY-e.center.pageY,r=h.utils.getVelocity(n,o,a);return h.utils.extend(t,{deltaTime:n,deltaX:o,deltaY:a,velocityX:r.x,velocityY:r.y,distance:h.utils.getDistance(e.center,t.center),angle:h.utils.getAngle(e.center,t.center),direction:h.utils.getDirection(e.center,t.center),scale:h.utils.getScale(e.touches,t.touches),rotation:h.utils.getRotation(e.touches,t.touches),startEvent:e}),t},register:function(t){var e=t.defaults||{};return e[t.name]===n&&(e[t.name]=!0),h.utils.extend(h.defaults,e,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},h.gestures=h.gestures||{},h.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,e){switch(t.eventType){case h.EVENT_START:clearTimeout(this.timer),h.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==h.detection.current.name&&e.trigger("hold",t)},e.options.hold_timeout);break;case h.EVENT_MOVE:t.distance>e.options.hold_threshold&&clearTimeout(this.timer);break;case h.EVENT_END:clearTimeout(this.timer)}}},h.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,e){if(t.eventType==h.EVENT_END){var i=h.detection.previous,s=!1;if(t.deltaTime>e.options.tap_max_touchtime||t.distance>e.options.tap_max_distance)return;i&&"tap"==i.name&&t.timeStamp-i.lastEvent.timeStamp<e.options.doubletap_interval&&t.distance<e.options.doubletap_distance&&(e.trigger("doubletap",t),s=!0),(!s||e.options.tap_always)&&(h.detection.current.name="tap",e.trigger(h.detection.current.name,t))}}},h.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(t,e){if(t.eventType==h.EVENT_END){if(0<e.options.swipe_max_touches&&t.touches.length>e.options.swipe_max_touches)return;(t.velocityX>e.options.swipe_velocity||t.velocityY>e.options.swipe_velocity)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},h.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(t,e){if(h.detection.current.name!=this.name&&this.triggered)return e.trigger(this.name+"end",t),this.triggered=!1,n;if(!(0<e.options.drag_max_touches&&t.touches.length>e.options.drag_max_touches))switch(t.eventType){case h.EVENT_START:this.triggered=!1;break;case h.EVENT_MOVE:if(t.distance<e.options.drag_min_distance&&h.detection.current.name!=this.name)return;h.detection.current.name=this.name,(h.detection.current.lastEvent.drag_locked_to_axis||e.options.drag_lock_to_axis&&e.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var i=h.detection.current.lastEvent.direction;t.drag_locked_to_axis&&i!==t.direction&&(t.direction=h.utils.isVertical(i)?t.deltaY<0?h.DIRECTION_UP:h.DIRECTION_DOWN:t.deltaX<0?h.DIRECTION_LEFT:h.DIRECTION_RIGHT),this.triggered||(e.trigger(this.name+"start",t),this.triggered=!0),e.trigger(this.name,t),e.trigger(this.name+t.direction,t),(e.options.drag_block_vertical&&h.utils.isVertical(t.direction)||e.options.drag_block_horizontal&&!h.utils.isVertical(t.direction))&&t.preventDefault();break;case h.EVENT_END:this.triggered&&e.trigger(this.name+"end",t),this.triggered=!1}}},h.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,e){if(h.detection.current.name!=this.name&&this.triggered)return e.trigger(this.name+"end",t),this.triggered=!1,n;if(!(t.touches.length<2))switch(e.options.transform_always_block&&t.preventDefault(),t.eventType){case h.EVENT_START:this.triggered=!1;break;case h.EVENT_MOVE:var i=Math.abs(1-t.scale),s=Math.abs(t.rotation);if(e.options.transform_min_scale>i&&e.options.transform_min_rotation>s)return;h.detection.current.name=this.name,this.triggered||(e.trigger(this.name+"start",t),this.triggered=!0),e.trigger(this.name,t),s>e.options.transform_min_rotation&&e.trigger("rotate",t),i>e.options.transform_min_scale&&(e.trigger("pinch",t),e.trigger("pinch"+(t.scale<1?"in":"out"),t));break;case h.EVENT_END:this.triggered&&e.trigger(this.name+"end",t),this.triggered=!1}}},h.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,e){return e.options.prevent_mouseevents&&t.pointerType==h.POINTER_MOUSE?t.stopDetect():(e.options.prevent_default&&t.preventDefault(),t.eventType==h.EVENT_START&&e.trigger(this.name,t)),n}},h.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==h.EVENT_END&&e.trigger(this.name,t)}},"object"==typeof module&&"object"==typeof module.exports?module.exports=h:(t.Hammer=h,"function"==typeof t.define&&t.define.amd&&t.define("hammer",[],function(){return h}))}(this),function(s,n){"use strict";s!==n&&(Hammer.event.bindDom=function(t,e,i){s(t).on(e,function(t){var e=t.originalEvent||t;e.pageX===n&&(e.pageX=t.pageX,e.pageY=t.pageY),e.target||(e.target=t.target),e.which===n&&(e.which=e.button),e.preventDefault||(e.preventDefault=t.preventDefault),e.stopPropagation||(e.stopPropagation=t.stopPropagation),i.call(this,e)})},Hammer.Instance.prototype.on=function(t,e){return s(this.element).on(t,e)},Hammer.Instance.prototype.off=function(t,e){return s(this.element).off(t,e)},Hammer.Instance.prototype.trigger=function(t,e){var i=s(this.element);return i.has(e.target).length&&(i=s(e.target)),i.trigger({type:t,gesture:e})},s.fn.hammer=function(i){return this.each(function(){var t=s(this),e=t.data("hammer");e?e&&i&&Hammer.utils.extend(e.options,i):t.data("hammer",new Hammer(this,i||{}))})})}(window.jQuery||window.Zepto);