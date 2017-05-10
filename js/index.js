//header部分
$(function(){
	$('.header .menu .imgs').hover(function(){
	$(this).find('.downs').slideDown('600');
	},function(){
		$(this).find('.downs').slideUp('100');
	});
});
