(function($){$.fn.pxSlider=function(options){if($("#px_slider a.pxs_fromthis").is(":visible")){var opts=$.extend({},$.fn.pxSlider.defaults,options);return this.each(function(){var $pxs_container=$(this),o=$.meta?$.extend({},opts,$pxs_container.data()):opts;var $pxs_slider=$(".pxs_slider",$pxs_container),$elems=$pxs_slider.children(),total_elems=$elems.length,$pxs_next=$(".pxs_next",$pxs_container),$pxs_prev=$(".pxs_prev",$pxs_container),$pxs_bg1=$(".pxs_bg1",$pxs_container),$pxs_bg2=$(".pxs_bg2",
$pxs_container),$pxs_bg3=$(".pxs_bg3",$pxs_container),current=0,$pxs_thumbnails=$(".pxs_thumbnails",$pxs_container),$thumbs=$pxs_thumbnails.children(),slideshow,$pxs_loading=$(".pxs_loading",$pxs_container),$pxs_slider_wrapper=$(".pxs_slider_wrapper",$pxs_container);var loaded=0,$images=$pxs_slider_wrapper.find("img");$images.each(function(){var $img=$(this);$("<img/>").load(function(){++loaded;if(loaded==total_elems*2){$pxs_loading.hide();$pxs_slider_wrapper.show();var one_image_w=$pxs_slider.find("img:first").width();
setWidths($pxs_slider,$elems,total_elems,$pxs_bg1,$pxs_bg2,$pxs_bg3,one_image_w,$pxs_next,$pxs_prev);$pxs_thumbnails.css({"width":one_image_w+"px","margin-left":-one_image_w/2+"px"});var spaces=one_image_w/(total_elems+1);$thumbs.each(function(i){var $this=$(this);var left=spaces*(i+1)-$this.width()/2;$this.css("left",left+"px");if(o.thumbRotation){var angle=Math.floor(Math.random()*41)-20;$this.addClass("pxs_rotate");$this.css({"-moz-transform":"rotate("+angle+"deg)","-webkit-transform":"rotate("+
angle+"deg)","transform":"rotate("+angle+"deg)"})}$this.bind("mouseenter",function(){$(this).stop(true,true).animate({top:"-10px"},100)}).bind("mouseleave",function(){$(this).stop(true,true).animate({top:"0px"},100)})});highlight($thumbs.eq(0));$pxs_next.bind("click",function(){++current;if(current>=total_elems)if(o.circular)current=0;else{--current;return false}highlight($thumbs.eq(current));if(o.auto)clearInterval(slideshow);slide(current,$pxs_slider,$pxs_bg3,$pxs_bg2,$pxs_bg1,o.speed,o.easing,
o.easingBg);pxs_auto()});$pxs_prev.bind("click",function(){--current;if(current<0)if(o.circular)current=total_elems-1;else{++current;return false}highlight($thumbs.eq(current));if(o.auto)clearInterval(slideshow);slide(current,$pxs_slider,$pxs_bg3,$pxs_bg2,$pxs_bg1,o.speed,o.easing,o.easingBg);pxs_auto()});$thumbs.bind("click",function(){var $thumb=$(this);highlight($thumb);if(o.auto)clearInterval(slideshow);current=$thumb.index();slide(current,$pxs_slider,$pxs_bg3,$pxs_bg2,$pxs_bg1,o.speed,o.easing,
o.easingBg);pxs_auto()});var pxs_auto=function pxs_auto(){if(o.auto!=0){o.circular=true;slideshow=setInterval(function(){$pxs_next.trigger("click")},o.auto)}};pxs_auto();$(window).resize(function(){w_w=$("#px_slider").width();setWidths($pxs_slider,$elems,total_elems,$pxs_bg1,$pxs_bg2,$pxs_bg3,one_image_w,$pxs_next,$pxs_prev);slide(current,$pxs_slider,$pxs_bg3,$pxs_bg2,$pxs_bg1,1,o.easing,o.easingBg)})}}).error(function(){}).attr("src",$img.attr("src"))})})}};var slide=function(current,$pxs_slider,
$pxs_bg3,$pxs_bg2,$pxs_bg1,speed,easing,easingBg){w_w=$("#px_slider").width();var slide_to=parseInt(-w_w*current);$pxs_slider.stop().animate({left:slide_to+"px"},speed,easing);$pxs_bg3.stop().animate({left:slide_to/2+"px"},speed,easingBg);$pxs_bg2.stop().animate({left:slide_to/4+"px"},speed,easingBg);$pxs_bg1.stop().animate({left:slide_to/8+"px"},speed,easingBg)};var highlight=function($elem){$elem.siblings().removeClass("selected");$elem.addClass("selected")};var setWidths=function($pxs_slider,$elems,
total_elems,$pxs_bg1,$pxs_bg2,$pxs_bg3,one_image_w,$pxs_next,$pxs_prev){w_w=$("#px_slider").width();var pxs_slider_w=w_w*total_elems;$pxs_slider.width(pxs_slider_w+"px");$elems.width(w_w+"px");$pxs_bg1.width(pxs_slider_w+"px");$pxs_bg2.width(pxs_slider_w+"px");$pxs_bg3.width(pxs_slider_w+"px");var position_nav=w_w/2-one_image_w/2+1;$pxs_next.css("right",position_nav+"px");$pxs_prev.css("left",position_nav+"px")};$.fn.pxSlider.defaults={auto:0,speed:1E3,easing:"jswing",easingBg:"jswing",circular:true,
thumbRotation:true}})(jQuery);