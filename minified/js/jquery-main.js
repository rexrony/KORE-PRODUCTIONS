function animateHomeSection(){var t=-1*parseInt($("body").width()+200);$(".bg-home").attr("style","margin-left:"+t+"px"),$(".bg-home").show(),$(".logo").animate({marginTop:"0px"},700),$(".opener").animate({marginTop:"0px"},700),$(".bg-home").animate({marginLeft:"0px"},1e3,"linear",function(){$(".arrow-top").animate({opacity:1,top:"90px"},1200),$(".arrow-bottom").animate({opacity:1,top:"752px"},1200),$(".video").animate({opacity:1},1500,"linear",function(){$(".bg-green").fadeIn(1200)}),$(".left-inner").fadeIn(1200)}),$(".left-circle").animate({opacity:1,top:"55px",left:"0"},1200),$(".col").animate({opacity:1,marginRight:0},1200),$(".two-columns .column").animate({opacity:1,"margin-top":0},1200),$(".customer-list").animate({opacity:1,top:0},1200),$(".gallery-holder a.btn-prev, .gallery-holder a.btn-next").animate({opacity:1},1200),$(".contactus .contact-area").animate({opacity:1,marginTop:0},1200),$(".arrow-left").animate({opacity:1,left:"40px"},1200),$(".img-mobile").animate({opacity:1,left:"160px"},1200)}function initSmoothScroll(){var o=/Windows Phone/.test(navigator.userAgent),s=jQuery("html, body"),r=(jQuery(window),"active"),a=jQuery("#header");jQuery("#nav ul li a").each(function(){var n=jQuery(this),t=n.attr("href");if(0==t.indexOf("#")){jQuery(t);n.on("click",function(t){var e=jQuery(n.attr("href"));if(0<e.length){t.preventDefault();var i=e.offset().top-a.height();!0,n.closest("li").addClass(r).siblings("li").removeClass(r),o?window.scrollTo(window.scrollLeft,i):s.stop().animate({scrollTop:i+1},{duration:800,complete:function(){!1}})}})}})}function initAnchorLinks(){var a=jQuery(window);page=jQuery("html,body"),isWP8=/MSIE 10.*Touch/.test(navigator.userAgent);var n=jQuery("#header"),h=jQuery("#nav ul li a"),c=n.find("#header").outerHeight(),o=jQuery(".open-close").data("OpenClose");jQuery(".go").click(function(t){t.preventDefault();var e=this.getAttribute("href"),i=1<e.length?jQuery(e).offset().top:0;a.width()<768&&(i=1<e.length?jQuery(e).offset().top-n.find(".header-holder").outerHeight()-30:0),o&&n.outerWidth()<768&&o.hideSlide(),isWP8?a.scrollTop(i-c+30):page.animate({scrollTop:i-c+30},650)}),h.each(function(n){var o=jQuery(this),s=jQuery(o.attr("href")),r=s.outerHeight();a.on("scroll",function(t){var e=s.offset().top;t.preventDefault();var i=jQuery(this).scrollTop();e-50<i&&i<e-c+r?o.hasClass("active")||o.parent().addClass("active"):o.parent().removeClass("active"),i+jQuery(this).outerHeight()>jQuery("body").outerHeight()-30&&(h.parent().removeClass("active"),n==h.length-1&&o.parent().addClass("active"))})})}function initAnchors(){new SmoothScroll({extraOffset:$(".anchor-nav").height()||0,anchorLinks:".anchor-nav a",activeClasses:"link",wheelBehavior:"ignore",animDuration:800})}function initScrollClass(){var t="scrolled",e=jQuery(window),i=jQuery("body");e.on("scroll load resize orientationchange",function(){25<e.scrollTop()?i.addClass(t):i.removeClass(t)})}function initOpenClose(){jQuery(".search-form").openClose({hideOnClickOutside:!0,activeClass:"active",opener:".form-opener",slider:".form-slide",animSpeed:500,effect:"slide"})}function initMobileNav(){jQuery(".open-close").mobileNav({hideOnClickOutside:!0,menuActiveClass:"active",menuOpener:".opener, .nav-opener",menuDrop:".slide",effect:"fade"})}function initSameHeight(){jQuery("div.columns-holder").sameHeight({elements:"div.column",multiLine:!0})}function initBackgroundResize(){jQuery(".banner-m").each(function(){ImageStretcher.add({container:this,image:"img"})})}$(document).ready(function(){$(".slide ul li").click(function(){$("#nav").removeClass("active")})}),jQuery(window).load(function(){animateHomeSection(),initScrollClass(),initOpenClose(),initMobileNav(),initSameHeight(),initAccordion(),initBackgroundResize(),jQuery("input, textarea").placeholder(),initSmoothScroll()}),function(l,t){var o,s,r,i=l(window),a="onwheel"in document||9<=document.documentMode?"wheel":"mousewheel DOMMouseScroll";function n(t,e,i){var n;document.body&&(e="number"==typeof e?{duration:e}:e||{},o=o||l("html, body"),n=e.container||o,"number"==typeof t&&(t={top:t}),s&&r&&s.off(a,r),e.wheelBehavior&&"none"!==e.wheelBehavior&&(r=function(t){"stop"===e.wheelBehavior?(n.off(a,r),n.stop()):"ignore"===e.wheelBehavior&&t.preventDefault()},s=n.on(a,r)),n.stop().animate({scrollLeft:t.left,scrollTop:t.top},e.duration,function(){r&&n.off(a,r),l.isFunction(i)&&i()}))}function e(t){this.options=l.extend({anchorLinks:'a[href^="#"]',container:null,extraOffset:null,activeClasses:null,easing:"swing",animMode:"duration",animDuration:800,animSpeed:1500,anchorActiveClass:"active",sectionActiveClass:"section-active",wheelBehavior:"stop",useNativeAnchorScrolling:!1},t),this.init()}e.prototype={init:function(){this.initStructure(),this.attachEvents()},initStructure:function(){this.container=this.options.container?l(this.options.container):l("html,body"),this.scrollContainer=this.options.container?this.container:i,this.anchorLinks=l(this.options.anchorLinks)},getAnchorTarget:function(t){var e=l(t).attr("href");return l(1<e.length?e:"html")},getTargetOffset:function(t){var e=t.offset().top;return this.options.container&&(e-=this.container.offset().top-this.container.prop("scrollTop")),"number"==typeof this.options.extraOffset?e-=this.options.extraOffset:"function"==typeof this.options.extraOffset&&(e-=this.options.extraOffset(t)),{top:e}},attachEvents:function(){var e=this;this.options.activeClasses&&(this.anchorData=[],this.anchorLinks.each(function(){var i,t=jQuery(this),n=e.getAnchorTarget(t);l.each(e.anchorData,function(t,e){e.block[0]===n[0]&&(i=e)}),i?i.link=i.link.add(t):e.anchorData.push({link:t,block:n})}),this.resizeHandler=function(){e.recalculateOffsets()},this.scrollHandler=function(){e.refreshActiveClass()},this.recalculateOffsets(),this.scrollContainer.on("scroll",this.scrollHandler),i.on("resize",this.resizeHandler)),this.clickHandler=function(t){e.onClick(t)},this.options.useNativeAnchorScrolling||this.anchorLinks.on("click",this.clickHandler)},recalculateOffsets:function(){var i=this;l.each(this.anchorData,function(t,e){e.offset=i.getTargetOffset(e.block),e.height=e.block.outerHeight()}),this.refreshActiveClass()},refreshActiveClass:function(){var o=this,s=!1,r=this.container.prop("scrollHeight"),a=this.scrollContainer.height(),h=this.options.container?this.container.prop("scrollTop"):i.scrollTop();function c(t,e,i){t.toggleClass(o.options.anchorActiveClass,i),e.toggleClass(o.options.sectionActiveClass,i)}this.options.customScrollHandler?this.options.customScrollHandler.call(this,h,this.anchorData):(this.anchorData.sort(function(t,e){return t.offset.top-e.offset.top}),l.each(this.anchorData,function(t){var e=o.anchorData.length-t-1,i=o.anchorData[e],n="parent"===o.options.activeClasses?i.link.parent():i.link;r-a<=h?e===o.anchorData.length-1?c(n,i.block,!0):c(n,i.block,!1):!s&&(h>=i.offset.top-1||0===e)?(s=!0,c(n,i.block,!0)):c(n,i.block,!1)}))},calculateScrollDuration:function(t){return"speed"===this.options.animMode?Math.abs(this.scrollContainer.scrollTop()-t.top)/this.options.animSpeed*1e3:this.options.animDuration},onClick:function(t){var e=this.getAnchorTarget(t.currentTarget),i=this.getTargetOffset(e);t.preventDefault(),n(i,{container:this.container,wheelBehavior:this.options.wheelBehavior,duration:this.calculateScrollDuration(i)})},destroy:function(){this.options.activeClasses&&(i.off("resize",this.resizeHandler),this.scrollContainer.off("scroll",this.scrollHandler)),this.anchorLinks.off("click",this.clickHandler)}},l.extend(e,{scrollTo:function(t,e,i){n(t,e,i)}}),t.SmoothScroll=e}(jQuery,this);var ImageStretcher={getDimensions:function(t){var e=t.imageRatio||t.imageWidth/t.imageHeight,i=t.maskWidth,n=i/e;return n<t.maskHeight&&(i=(n=t.maskHeight)*e),{width:i,height:n,top:(t.maskHeight-n)/2,left:(t.maskWidth-i)/2}},getRatio:function(t){if(t.prop("naturalWidth"))return t.prop("naturalWidth")/t.prop("naturalHeight");var e=new Image;return e.src=t.prop("src"),e.width/e.height},imageLoaded:function(t,e){var i=this,n=function(){e.call(i)};t.prop("complete")?n():t.one("load",n)},resizeHandler:function(){var i=this;jQuery.each(this.imgList,function(t,e){e.image.prop("complete")&&i.resizeImage(e.image,e.container)})},resizeImage:function(e,i){this.imageLoaded(e,function(){var t=this.getDimensions({imageRatio:this.getRatio(e),maskWidth:i.width(),maskHeight:i.height()});e.css({width:t.width,height:t.height,marginTop:t.top,marginLeft:t.left})})},add:function(t){var e=jQuery(t.container?t.container:window),i="string"==typeof t.image?e.find(t.image):jQuery(t.image);this.resizeImage(i,e),this.win||(this.resizeHandler=jQuery.proxy(this.resizeHandler,this),this.imgList=[],this.win=jQuery(window),this.win.on("resize orientationchange",this.resizeHandler)),this.imgList.push({container:e,image:i})}};function initAccordion(){jQuery(".accordion").slideAccordion({opener:">a.opener-a",slider:".slide",collapsible:!0,animSpeed:300}),jQuery(".img-tec-s").slideAccordion({opener:".click",slider:".bar-holder",collapsible:!0,animSpeed:300})}!function(n){function e(t){this.options=n.extend({addClassBeforeAnimation:!0,hideOnClickOutside:!1,activeClass:"active",opener:".opener",slider:".slide",animSpeed:400,effect:"fade",event:"click"},t),this.init()}e.prototype={init:function(){this.options.holder&&(this.findElements(),this.attachEvents(),this.makeCallback("onInit",this))},findElements:function(){this.holder=n(this.options.holder),this.opener=this.holder.find(this.options.opener),this.slider=this.holder.find(this.options.slider)},attachEvents:function(){var i=this;this.eventHandler=function(t){t.preventDefault(),i.slider.hasClass(o)?i.showSlide():i.hideSlide()},i.opener.bind(i.options.event,this.eventHandler),"over"===i.options.event&&(i.opener.bind("mouseenter",function(){i.holder.hasClass(i.options.activeClass)||i.showSlide()}),i.holder.bind("mouseleave",function(){i.hideSlide()})),i.outsideClickHandler=function(t){if(i.options.hideOnClickOutside){var e=n(t.target);e.is(i.holder)||e.closest(i.holder).length||i.hideSlide()}},this.holder.hasClass(this.options.activeClass)?n(document).bind("click touchstart",i.outsideClickHandler):this.slider.addClass(o)},showSlide:function(){var t=this;t.options.addClassBeforeAnimation&&t.holder.addClass(t.options.activeClass),t.slider.removeClass(o),n(document).bind("click touchstart",t.outsideClickHandler),t.makeCallback("animStart",!0),s[t.options.effect].show({box:t.slider,speed:t.options.animSpeed,complete:function(){t.options.addClassBeforeAnimation||t.holder.addClass(t.options.activeClass),t.makeCallback("animEnd",!0)}})},hideSlide:function(){var t=this;t.options.addClassBeforeAnimation&&t.holder.removeClass(t.options.activeClass),n(document).unbind("click touchstart",t.outsideClickHandler),t.makeCallback("animStart",!1),s[t.options.effect].hide({box:t.slider,speed:t.options.animSpeed,complete:function(){t.options.addClassBeforeAnimation||t.holder.removeClass(t.options.activeClass),t.slider.addClass(o),t.makeCallback("animEnd",!1)}})},destroy:function(){this.slider.removeClass(o).css({display:""}),this.opener.unbind(this.options.event,this.eventHandler),this.holder.removeClass(this.options.activeClass).removeData("OpenClose"),n(document).unbind("click touchstart",this.outsideClickHandler)},makeCallback:function(t){if("function"==typeof this.options[t]){var e=Array.prototype.slice.call(arguments);e.shift(),this.options[t].apply(this,e)}}};var t,i,o="js-slide-hidden";t=n('<style type="text/css">')[0],i="."+o,i+="{position:absolute !important;left:-9999px !important;top:-9999px !important;display:block !important}",t.styleSheet?t.styleSheet.cssText=i:t.appendChild(document.createTextNode(i)),n("head").append(t);var s={slide:{show:function(t){t.box.stop(!0).hide().slideDown(t.speed,t.complete)},hide:function(t){t.box.stop(!0).slideUp(t.speed,t.complete)}},fade:{show:function(t){t.box.stop(!0).hide().fadeIn(t.speed,t.complete)},hide:function(t){t.box.stop(!0).fadeOut(t.speed,t.complete)}},none:{show:function(t){t.box.hide().show(0,t.complete)},hide:function(t){t.box.hide(0,t.complete)}}};n.fn.openClose=function(t){return this.each(function(){jQuery(this).data("OpenClose",new e(n.extend(t,{holder:this})))})}}(jQuery),function(r){function i(t){this.options=r.extend({container:null,hideOnClickOutside:!1,menuActiveClass:"nav-active",menuOpener:".nav-opener",menuDrop:".nav-drop",toggleEvent:"click",outsideClickEvent:"click touchstart pointerdown MSPointerDown"},t),this.initStructure(),this.attachEvents()}i.prototype={initStructure:function(){this.page=r("html"),this.container=r(this.options.container),this.opener=this.container.find(this.options.menuOpener),this.drop=this.container.find(this.options.menuDrop)},attachEvents:function(){var i=this;t&&(t(),t=null),this.outsideClickHandler=function(t){if(i.isOpened()){var e=r(t.target);e.closest(i.opener).length||e.closest(i.drop).length||i.hide()}},this.openerClickHandler=function(t){t.preventDefault(),i.toggle()},this.opener.on(this.options.toggleEvent,this.openerClickHandler)},isOpened:function(){return this.container.hasClass(this.options.menuActiveClass)},show:function(){this.container.addClass(this.options.menuActiveClass),this.options.hideOnClickOutside&&this.page.on(this.options.outsideClickEvent,this.outsideClickHandler)},hide:function(){this.container.removeClass(this.options.menuActiveClass),this.options.hideOnClickOutside&&this.page.off(this.options.outsideClickEvent,this.outsideClickHandler)},toggle:function(){this.isOpened()?this.hide():this.show()},destroy:function(){this.container.removeClass(this.options.menuActiveClass),this.opener.off(this.options.toggleEvent,this.clickHandler),this.page.off(this.options.outsideClickEvent,this.outsideClickHandler)}};var t=function(){var t,e,i=r(window),n=r("html"),o="resize-active",s=function(){t=!1,n.removeClass(o)};i.on("resize orientationchange",function(){t||(t=!0,n.addClass(o)),clearTimeout(e),e=setTimeout(s,500)})};r.fn.mobileNav=function(e){return this.each(function(){var t=new i(r.extend({},e,{container:this}));r.data(this,"MobileNav",t)})}}(jQuery),function(h){h.fn.sameHeight=function(t){var r=h.extend({skipClass:"same-height-ignore",leftEdgeClass:"same-height-left",rightEdgeClass:"same-height-right",elements:">*",flexible:!1,multiLine:!1,useMinHeight:!1,biggestHeight:!1},t);return this.each(function(){var t,e,i=h(this),n=i.find(r.elements).not("."+r.skipClass);if(n.length){s();var o=function(){e||(e=!0,s(),clearTimeout(t),t=setTimeout(function(){s(),setTimeout(function(){e=!1},10)},100))};r.flexible&&h(window).bind("resize orientationchange fontresize",o),h(window).bind("load",o)}function s(){n.css(r.useMinHeight&&c?"minHeight":"height",""),r.multiLine?function(t,i){var n,o=h(),s=0,r=t.eq(0).offset().top;t.each(function(t){var e=h(this);e.offset().top===r?o=o.add(this):(n=a(o),s=Math.max(s,l(o,n,i)),r=(o=e).offset().top)}),o.length&&(n=a(o),s=Math.max(s,l(o,n,i)));i.biggestHeight&&t.css(i.useMinHeight&&c?"minHeight":"height",s)}(n,r):l(n,i,r)}})};var c=void 0!==document.documentElement.style.maxHeight;function a(t){var e=0;return t.each(function(){e=Math.max(e,h(this).outerHeight())}),e}function l(t,o,s){var r,a="number"==typeof o?o:o.height();return t.removeClass(s.leftEdgeClass).removeClass(s.rightEdgeClass).each(function(t){var e=h(this),i=0,n="border-box"===e.css("boxSizing")||"border-box"===e.css("-moz-box-sizing")||"border-box"===e.css("-webkit-box-sizing");"number"!=typeof o&&e.parents().each(function(){var t=h(this);if(o.is(this))return!1;i+=t.outerHeight()-t.height()}),r=a-i,0<(r-=n?0:e.outerHeight()-e.height())&&e.css(s.useMinHeight&&c?"minHeight":"height",r)}),t.filter(":first").addClass(s.leftEdgeClass),t.filter(":last").addClass(s.rightEdgeClass),r}}(jQuery),jQuery.onFontResize=function(n){return n(function(){var t="font-resize-frame-"+Math.floor(1e3*Math.random()),e=n("<iframe>").attr("id",t).addClass("font-resize-helper");if(e.css({width:"100em",height:"10px",position:"absolute",borderWidth:0,top:"-9999px",left:"-9999px"}).appendTo("body"),window.attachEvent&&!window.addEventListener)e.bind("resize",function(){n.onFontResize.trigger(e[0].offsetWidth/100)});else{var i=e[0].contentWindow.document;i.open(),i.write('<script>window.onload = function(){var em = parent.jQuery("#'+t+'")[0];window.onresize = function(){if(parent.jQuery.onFontResize){parent.jQuery.onFontResize.trigger(em.offsetWidth / 100);}}};<\/script>'),i.close()}jQuery.onFontResize.initialSize=e[0].offsetWidth/100}),{trigger:function(t){n(window).trigger("fontresize",[t])}}}(jQuery),function(t,e,r){var i,n,o="[object OperaMini]"==Object.prototype.toString.call(t.operamini),s="placeholder"in e.createElement("input")&&!o,a="placeholder"in e.createElement("textarea")&&!o,h=r.fn,c=r.valHooks,l=r.propHooks;function u(t,e){var i=this,n=r(i);if(i.value==n.attr("placeholder")&&n.hasClass("placeholder"))if(n.data("placeholder-password")){if(n=n.hide().next().show().attr("id",n.removeAttr("id").data("placeholder-id")),!0===t)return n[0].value=e;n.focus()}else i.value="",n.removeClass("placeholder"),i==d()&&i.select()}function p(){var e,i,n,o,t=r(this),s=this.id;if(""==this.value){if("password"==this.type){if(!t.data("placeholder-textinput")){try{e=t.clone().attr({type:"text"})}catch(t){e=r("<input>").attr(r.extend((i=this,n={},o=/^jQuery\d+$/,r.each(i.attributes,function(t,e){e.specified&&!o.test(e.name)&&(n[e.name]=e.value)}),n),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":t,"placeholder-id":s}).bind("focus.placeholder",u),t.data({"placeholder-textinput":e,"placeholder-id":s}).before(e)}t=t.removeAttr("id").hide().prev().attr("id",s).show()}t.addClass("placeholder"),t[0].value=t.attr("placeholder")}else t.removeClass("placeholder")}function d(){try{return e.activeElement}catch(t){}}s&&a?(n=h.placeholder=function(){return this}).input=n.textarea=!0:((n=h.placeholder=function(){return this.filter((s?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":u,"blur.placeholder":p}).data("placeholder-enabled",!0).trigger("blur.placeholder"),this}).input=s,n.textarea=a,i={get:function(t){var e=r(t),i=e.data("placeholder-password");return i?i[0].value:e.data("placeholder-enabled")&&e.hasClass("placeholder")?"":t.value},set:function(t,e){var i=r(t),n=i.data("placeholder-password");return n?n[0].value=e:i.data("placeholder-enabled")?(""==e?(t.value=e,t!=d()&&p.call(t)):i.hasClass("placeholder")&&u.call(t,!0,e)||(t.value=e),i):t.value=e}},s||(c.input=i,l.value=i),a||(c.textarea=i,l.value=i),r(function(){r(e).delegate("form","submit.placeholder",function(){var t=r(".placeholder",this).each(u);setTimeout(function(){t.each(p)},10)})}),r(t).bind("beforeunload.placeholder",function(){r(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery),Object.create&&function(t,a,e,T){"use strict";function h(t,e,i){return setTimeout(c(t,i),e)}function i(t,e,i){return!!Array.isArray(t)&&(o(t,i[e],i),!0)}function o(t,e,i){var n;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==T)for(n=0;n<t.length;)e.call(i,t[n],n,t),n++;else for(n in t)t.hasOwnProperty(n)&&e.call(i,t[n],n,t)}function s(t,e,i){for(var n=Object.keys(e),o=0;o<n.length;)(!i||i&&t[n[o]]===T)&&(t[n[o]]=e[n[o]]),o++;return t}function n(t,e){return s(t,e,!0)}function r(t,e,i){var n,o=e.prototype;(n=t.prototype=Object.create(o)).constructor=t,n._super=o,i&&s(n,i)}function c(t,e){return function(){return t.apply(e,arguments)}}function l(t,e){return typeof t==Z?t.apply(e&&e[0]||T,e):t}function u(t,e){return t===T?e:t}function p(e,t,i){o(v(t),function(t){e.addEventListener(t,i,!1)})}function d(e,t,i){o(v(t),function(t){e.removeEventListener(t,i,!1)})}function b(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function f(t,e){return-1<t.indexOf(e)}function v(t){return t.trim().split(/\s+/g)}function m(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function g(t){return Array.prototype.slice.call(t,0)}function y(t,i,e){for(var n=[],o=[],s=0;s<t.length;){var r=i?t[s][i]:t[s];m(o,r)<0&&n.push(t[s]),o[s]=r,s++}return e&&(n=i?n.sort(function(t,e){return t[i]>e[i]}):n.sort()),n}function C(t,e){for(var i,n,o=e[0].toUpperCase()+e.slice(1),s=0;s<G.length;){if((n=(i=G[s])?i+o:e)in t)return n;s++}return T}function w(t){var e=t.ownerDocument;return e.defaultView||e.parentWindow}function k(e,t){var i=this;this.manager=e,this.callback=t,this.element=e.element,this.target=e.options.inputTarget,this.domHandler=function(t){l(e.options.enable,[e])&&i.handler(t)},this.init()}function E(t,e,i){var n=i.pointers.length,o=i.changedPointers.length,s=e&ht&&n-o==0,r=e&(ct|lt)&&n-o==0;i.isFirst=!!s,i.isFinal=!!r,s&&(t.session={}),i.eventType=e,function(t,e){var i=t.session,n=e.pointers,o=n.length;i.firstInput||(i.firstInput=S(e)),1<o&&!i.firstMultiple?i.firstMultiple=S(e):1===o&&(i.firstMultiple=!1);var s=i.firstInput,r=i.firstMultiple,a=r?r.center:s.center,h=e.center=x(n);e.timeStamp=tt(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=D(a,h),e.distance=H(a,h),d=i,f=e,v=f.center,m=d.offsetDelta||{},g=d.prevDelta||{},y=d.prevInput||{},(f.eventType===ht||y.eventType===ct)&&(g=d.prevDelta={x:y.deltaX||0,y:y.deltaY||0},m=d.offsetDelta={x:v.x,y:v.y}),f.deltaX=g.x+(v.x-m.x),f.deltaY=g.y+(v.y-m.y),e.offsetDirection=A(e.deltaX,e.deltaY),e.scale=r?(u=r.pointers,p=n,H(p[0],p[1],Tt)/H(u[0],u[1],Tt)):1,e.rotation=r?(c=r.pointers,l=n,D(l[1],l[0],Tt)-D(c[1],c[0],Tt)):0,function(t,e){var i,n,o,s,r=t.lastInterval||e,a=e.timeStamp-r.timeStamp;if(e.eventType!=lt&&(at<a||r.velocity===T)){var h=r.deltaX-e.deltaX,c=r.deltaY-e.deltaY,l={x:h/(u=a)||0,y:c/u||0};n=l.x,o=l.y,i=K(l.x)>K(l.y)?l.x:l.y,s=A(h,c),t.lastInterval=e}else i=r.velocity,n=r.velocityX,o=r.velocityY,s=r.direction;var u;e.velocity=i,e.velocityX=n,e.velocityY=o,e.direction=s}(i,e);var c,l;var u,p;var d,f,v,m,g,y;var C=t.element;b(e.srcEvent.target,C)&&(C=e.srcEvent.target),e.target=C}(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function S(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:J(t.pointers[i].clientX),clientY:J(t.pointers[i].clientY)},i++;return{timeStamp:tt(),pointers:e,center:x(e),deltaX:t.deltaX,deltaY:t.deltaY}}function x(t){var e=t.length;if(1===e)return{x:J(t[0].clientX),y:J(t[0].clientY)};for(var i=0,n=0,o=0;o<e;)i+=t[o].clientX,n+=t[o].clientY,o++;return{x:J(i/e),y:J(n/e)}}function A(t,e){return t===e?ut:K(t)>=K(e)?0<t?pt:dt:0<e?ft:vt}function H(t,e,i){i||(i=Ct);var n=e[i[0]]-t[i[0]],o=e[i[1]]-t[i[1]];return Math.sqrt(n*n+o*o)}function D(t,e,i){i||(i=Ct);var n=e[i[0]]-t[i[0]],o=e[i[1]]-t[i[1]];return 180*Math.atan2(o,n)/Math.PI}function O(){this.evEl=wt,this.evWin=kt,this.allow=!0,this.pressed=!1,k.apply(this,arguments)}function z(){this.evEl=xt,this.evWin=At,k.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function j(){this.evTarget="touchstart",this.evWin="touchstart touchmove touchend touchcancel",this.started=!1,k.apply(this,arguments)}function I(){this.evTarget=Ot,this.targetIds={},k.apply(this,arguments)}function Q(){k.apply(this,arguments);var t=c(this.handler,this);this.touch=new I(this.manager,t),this.mouse=new O(this.manager,t)}function M(t,e){this.manager=t,this.set(e)}function R(t){this.id=et++,this.manager=null,this.options=n(t||{},this.defaults),this.options.enable=u(this.options.enable,!0),this.state=Lt,this.simultaneous={},this.requireFail=[]}function _(t){return t==vt?"down":t==ft?"up":t==pt?"left":t==dt?"right":""}function L(t,e){var i=e.manager;return i?i.get(t):t}function N(){R.apply(this,arguments)}function W(){N.apply(this,arguments),this.pX=null,this.pY=null}function P(){N.apply(this,arguments)}function F(){R.apply(this,arguments),this._timer=null,this._input=null}function $(){N.apply(this,arguments)}function X(){N.apply(this,arguments)}function Y(){R.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function B(t,e){return(e=e||{}).recognizers=u(e.recognizers,B.defaults.preset),new q(t,e)}function q(t,e){var i;e=e||{},this.options=n(e,B.defaults),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.element=t,this.input=new((i=this).options.inputClass||(nt?z:ot?I:it?Q:O))(i,E),this.touchAction=new M(this,this.options.touchAction),U(this,!0),o(e.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function U(t,i){var n=t.element;o(t.options.cssProps,function(t,e){n.style[C(n.style,e)]=i?t:""})}var G=["","webkit","moz","MS","ms","o"],V=a.createElement("div"),Z="function",J=Math.round,K=Math.abs,tt=Date.now,et=1,it="ontouchstart"in t,nt=C(t,"PointerEvent")!==T,ot=it&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),st="touch",rt="mouse",at=25,ht=1,ct=4,lt=8,ut=1,pt=2,dt=4,ft=8,vt=16,mt=pt|dt,gt=ft|vt,yt=mt|gt,Ct=["x","y"],Tt=["clientX","clientY"];k.prototype={handler:function(){},init:function(){this.evEl&&p(this.element,this.evEl,this.domHandler),this.evTarget&&p(this.target,this.evTarget,this.domHandler),this.evWin&&p(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&d(this.element,this.evEl,this.domHandler),this.evTarget&&d(this.target,this.evTarget,this.domHandler),this.evWin&&d(w(this.element),this.evWin,this.domHandler)}};var bt={mousedown:ht,mousemove:2,mouseup:ct},wt="mousedown",kt="mousemove mouseup";r(O,k,{handler:function(t){var e=bt[t.type];e&ht&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=ct),this.pressed&&this.allow&&(e&ct&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:rt,srcEvent:t}))}});var Et={pointerdown:ht,pointermove:2,pointerup:ct,pointercancel:lt,pointerout:lt},St={2:st,3:"pen",4:rt,5:"kinect"},xt="pointerdown",At="pointermove pointerup pointercancel";t.MSPointerEvent&&(xt="MSPointerDown",At="MSPointerMove MSPointerUp MSPointerCancel"),r(z,k,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),o=Et[n],s=St[t.pointerType]||t.pointerType,r=s==st,a=m(e,t.pointerId,"pointerId");o&ht&&(0===t.button||r)?a<0&&(e.push(t),a=e.length-1):o&(ct|lt)&&(i=!0),a<0||(e[a]=t,this.callback(this.manager,o,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),i&&e.splice(a,1))}});var Ht={touchstart:ht,touchmove:2,touchend:ct,touchcancel:lt};r(j,k,{handler:function(t){var e=Ht[t.type];if(e===ht&&(this.started=!0),this.started){var i=function(t,e){var i=g(t.touches),n=g(t.changedTouches);return e&(ct|lt)&&(i=y(i.concat(n),"identifier",!0)),[i,n]}.call(this,t,e);e&(ct|lt)&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:st,srcEvent:t})}}});var Dt={touchstart:ht,touchmove:2,touchend:ct,touchcancel:lt},Ot="touchstart touchmove touchend touchcancel";r(I,k,{handler:function(t){var e=Dt[t.type],i=function(t,e){var i=g(t.touches),n=this.targetIds;if(e&(2|ht)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var o,s,r=g(t.changedTouches),a=[],h=this.target;if(s=i.filter(function(t){return b(t.target,h)}),e===ht)for(o=0;o<s.length;)n[s[o].identifier]=!0,o++;for(o=0;o<r.length;)n[r[o].identifier]&&a.push(r[o]),e&(ct|lt)&&delete n[r[o].identifier],o++;return a.length?[y(s.concat(a),"identifier",!0),a]:void 0}.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:st,srcEvent:t})}}),r(Q,k,{handler:function(t,e,i){var n=i.pointerType==st,o=i.pointerType==rt;if(n)this.mouse.allow=!1;else if(o&&!this.mouse.allow)return;e&(ct|lt)&&(this.mouse.allow=!0),this.callback(t,e,i)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var zt=C(V.style,"touchAction"),jt=zt!==T,It="compute",Qt="manipulation",Mt="none",Rt="pan-x",_t="pan-y";M.prototype={set:function(t){t==It&&(t=this.compute()),jt&&(this.manager.element.style[zt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var e=[];return o(this.manager.recognizers,function(t){l(t.options.enable,[t])&&(e=e.concat(t.getTouchAction()))}),function(t){if(f(t,Mt))return Mt;var e=f(t,Rt),i=f(t,_t);return e&&i?Rt+" "+_t:e||i?e?Rt:_t:f(t,Qt)?Qt:"auto"}(e.join(" "))},preventDefaults:function(t){if(!jt){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var n=this.actions,o=f(n,Mt),s=f(n,_t),r=f(n,Rt);return o||s&&i&mt||r&&i&gt?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var Lt=1,Nt=2,Wt=4,Pt=8,Ft=Pt,$t=16;R.prototype={defaults:{},set:function(t){return s(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(i(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=L(t,this)).id]||(e[t.id]=t).recognizeWith(this),this},dropRecognizeWith:function(t){return i(t,"dropRecognizeWith",this)||(t=L(t,this),delete this.simultaneous[t.id]),this},requireFailure:function(t){if(i(t,"requireFailure",this))return this;var e=this.requireFail;return-1===m(e,t=L(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(i(t,"dropRequireFailure",this))return this;t=L(t,this);var e=m(this.requireFail,t);return-1<e&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return 0<this.requireFail.length},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(i){function t(t){var e;n.manager.emit(n.options.event+(t?(e=o)&$t?"cancel":e&Pt?"end":e&Wt?"move":e&Nt?"start":"":""),i)}var n=this,o=this.state;o<Pt&&t(!0),t(),Pt<=o&&t(!0)},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=32)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|Lt)))return!1;t++}return!0},recognize:function(t){var e=s({},t);return l(this.options.enable,[this,e])?(this.state&(Ft|$t|32)&&(this.state=Lt),this.state=this.process(e),void(this.state&(Nt|Wt|Pt|$t)&&this.tryEmit(e))):(this.reset(),void(this.state=32))},process:function(){},getTouchAction:function(){},reset:function(){}},r(N,R,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(Nt|Wt),o=this.attrTest(t);return n&&(i&lt||!o)?e|$t:n||o?i&ct?e|Pt:e&Nt?e|Wt:Nt:32}}),r(W,N,{defaults:{event:"pan",threshold:10,pointers:1,direction:yt},getTouchAction:function(){var t=this.options.direction,e=[];return t&mt&&e.push(_t),t&gt&&e.push(Rt),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,o=t.direction,s=t.deltaX,r=t.deltaY;return o&e.direction||(n=e.direction&mt?(o=0===s?ut:s<0?pt:dt,i=s!=this.pX,Math.abs(t.deltaX)):(o=0===r?ut:r<0?ft:vt,i=r!=this.pY,Math.abs(t.deltaY))),t.direction=o,i&&n>e.threshold&&o&e.direction},attrTest:function(t){return N.prototype.attrTest.call(this,t)&&(this.state&Nt||!(this.state&Nt)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=_(t.direction);e&&this.manager.emit(this.options.event+e,t),this._super.emit.call(this,t)}}),r(P,N,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Mt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&Nt)},emit:function(t){if(this._super.emit.call(this,t),1!==t.scale){var e=t.scale<1?"in":"out";this.manager.emit(this.options.event+e,t)}}}),r(F,R,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return["auto"]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,o=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(ct|lt)&&!o)this.reset();else if(t.eventType&ht)this.reset(),this._timer=h(function(){this.state=Ft,this.tryEmit()},e.time,this);else if(t.eventType&ct)return Ft;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===Ft&&(t&&t.eventType&ct?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=tt(),this.manager.emit(this.options.event,this._input)))}}),r($,N,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Mt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&Nt)}}),r(X,N,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:mt|gt,pointers:1},getTouchAction:function(){return W.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(mt|gt)?e=t.velocity:i&mt?e=t.velocityX:i&gt&&(e=t.velocityY),this._super.attrTest.call(this,t)&&i&t.direction&&t.distance>this.options.threshold&&K(e)>this.options.velocity&&t.eventType&ct},emit:function(t){var e=_(t.direction);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),r(Y,R,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Qt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,o=t.deltaTime<e.time;if(this.reset(),t.eventType&ht&&0===this.count)return this.failTimeout();if(n&&o&&i){if(t.eventType!=ct)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<e.interval,r=!this.pCenter||H(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,r&&s?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=h(function(){this.state=Ft,this.tryEmit()},e.interval,this),Nt):Ft}return 32},failTimeout:function(){return this._timer=h(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Ft&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),B.VERSION="2.0.4",B.defaults={domEvents:!1,touchAction:It,enable:!0,inputTarget:null,inputClass:null,preset:[[$,{enable:!1}],[P,{enable:!1},["rotate"]],[X,{direction:mt}],[W,{direction:mt},["swipe"]],[Y],[Y,{event:"doubletap",taps:2},["tap"]],[F]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};q.prototype={set:function(t){return s(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,n=this.recognizers,o=e.curRecognizer;(!o||o&&o.state&Ft)&&(o=e.curRecognizer=null);for(var s=0;s<n.length;)i=n[s],2===e.stopped||o&&i!=o&&!i.canRecognizeWith(o)?i.reset():i.recognize(t),!o&&i.state&(Nt|Wt|Pt)&&(o=e.curRecognizer=i),s++}},get:function(t){if(t instanceof R)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(i(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),(t.manager=this).touchAction.update(),t},remove:function(t){if(i(t,"remove",this))return this;var e=this.recognizers;return t=this.get(t),e.splice(m(e,t),1),this.touchAction.update(),this},on:function(t,e){var i=this.handlers;return o(v(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this},off:function(t,e){var i=this.handlers;return o(v(t),function(t){e?i[t].splice(m(i[t],e),1):delete i[t]}),this},emit:function(t,e){var i,n,o;this.options.domEvents&&(i=t,n=e,(o=a.createEvent("Event")).initEvent(i,!0,!0),(o.gesture=n).target.dispatchEvent(o));var s=this.handlers[t]&&this.handlers[t].slice();if(s&&s.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var r=0;r<s.length;)s[r](e),r++}},destroy:function(){this.element&&U(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},s(B,{INPUT_START:ht,INPUT_MOVE:2,INPUT_END:ct,INPUT_CANCEL:lt,STATE_POSSIBLE:Lt,STATE_BEGAN:Nt,STATE_CHANGED:Wt,STATE_ENDED:Pt,STATE_RECOGNIZED:Ft,STATE_CANCELLED:$t,STATE_FAILED:32,DIRECTION_NONE:ut,DIRECTION_LEFT:pt,DIRECTION_RIGHT:dt,DIRECTION_UP:ft,DIRECTION_DOWN:vt,DIRECTION_HORIZONTAL:mt,DIRECTION_VERTICAL:gt,DIRECTION_ALL:yt,Manager:q,Input:k,TouchAction:M,TouchInput:I,MouseInput:O,PointerEventInput:z,TouchMouseInput:Q,SingleTouchInput:j,Recognizer:R,AttrRecognizer:N,Tap:Y,Pan:W,Swipe:X,Pinch:P,Rotate:$,Press:F,on:p,off:d,each:o,merge:n,extend:s,inherit:r,bindFn:c,prefixed:C}),typeof define==Z&&define.amd?define(function(){return B}):"undefined"!=typeof module&&module.exports?module.exports=B:t.Hammer=B}(window,document),function(e){e.fn.slideAccordion=function(t){var s=e.extend({addClassBeforeAnimation:!1,activeClass:"active",opener:".opener",slider:".slide",animSpeed:300,collapsible:!0,event:"click"},t);return this.each(function(){e(this).find(":has("+s.slider+")").each(function(){var n=e(this),t=n.find(s.opener),o=n.find(s.slider);t.bind(s.event,function(t){if(!o.is(":animated"))if(n.hasClass(s.activeClass))s.collapsible&&o.slideUp(s.animSpeed,function(){a(o),n.removeClass(s.activeClass)});else{var e=n.siblings("."+s.activeClass),i=e.find(s.slider);n.addClass(s.activeClass),r(o).hide().slideDown(s.animSpeed),i.slideUp(s.animSpeed,function(){e.removeClass(s.activeClass),a(i)})}t.preventDefault()}),n.hasClass(s.activeClass)?r(o):a(o)})})};var r=function(t){return t.css({position:"",top:"",left:"",width:""})},a=function(t){return t.show().css({position:"absolute",top:-9999,left:-9999,width:t.width()})}}(jQuery);