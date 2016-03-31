$(window).load(function(){
	var availHeight = $(window).height();
	$("body").css("height",availHeight);
	var task = $('.task').height();
	var middle = (availHeight-task)/2+'px';
	$('.task').css("margin-top",middle);
});

window.onresize=function(){
	var availHeight = $(window).height();
	$("body").css("height",availHeight);
	var task = $('.task').height();
	var middle = (availHeight-task)/2+'px';
	$('.task').css("margin-top",middle);
}