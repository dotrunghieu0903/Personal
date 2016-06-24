function deviceFunc(){
	var breakPoint = 480;
	if ( screen.width <= breakPoint ){
		// footerLink
		$('#footerLink').each(function(){
			$(this).children('li').click(function() {
				$(this).toggleClass('open');
				$(this).siblings().removeClass('open');
				$(this).children('ul').toggle();
				$(this).siblings().children('ul').hide();
		    });
		});
	} else {
		// ua
		var MSIE=/*@cc_on@if(@_jscript_version<=9)!@end@*/false;
		if(MSIE){ $('body').addClass('lte8');}
		// globalnav
		$('#globalNav').each(function(){
			$(this).children('li').hover(function() {
				$(this).children('ul').stop().slideDown();
				//$(this).children('ul').show();
			}, function() {
				$(this).children('ul').hide();
		    });
		});
	}
}
$(function(){
	// top
	$('#header').before('<span id="top"></span>');
	//popup
	$('.popupBtn a').click(function(event){
	    var box = $(this).attr('href');
	    $('body').removeClass('headFix');
	    $('body').addClass('fixed');
	    $(box).fadeIn();
		event.stopPropagation();
        return false;
	});
	$(document).on('click', function(event){
		if (!$.contains($('.popupLayerInner')[0], event.target)) {
		    $('body').removeClass('fixed');
			$('.popupLayer').hide();
		}
	});
	$('.btnClose').click(function(){
	    $('body').removeClass('fixed');
		$('.popupLayer').hide();
	});
	deviceFunc();
	// tab
	$('.tabBox').each(function(){
		$('.tab li').click(function() {
		    var num = $(this).parent('.tab').children('li').index(this);
			$(this).addClass('current');
			$(this).siblings('li').removeClass('current');
			$(this).parent().nextAll('section').removeClass('current');
			$(this).parent().nextAll('section').eq(num).addClass('current');
	        return false;
	    });
	});
	// box3 height
	$('.box3').each(function(){
		$('article').matchHeight();
		$('.free').matchHeight('remove');
	});
	//none
	$('a.none').click(function(){
        return false;
	});
	// anchor
	$('.anchor a').click(function() {
	    var speed = 500;
	    var href= $(this).attr("href");
	    var anc = $(href == "#" || href == "" ? 'html' : href);
	    var position = anc.offset().top;
	    $('body,html').animate({scrollTop:position}, speed, 'swing');
	    return false;
	});
});
jQuery.event.add(window,'load',function(){
	var breakPoint = 480;
	if ( screen.width <= breakPoint ){
		var pageHeight = $(document).height();
		$('#popupMenu').css({ 'min-height': pageHeight});
	}
});
