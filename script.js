$(document).ready(function(){
	$(":input").css("width", "20");
	$('body').css("font-size", "30px");
	$(':input').each(function (){
		$(this).html("autocomplete", "false");
		$(this).html("autofill", "false");
	});
})

var url = "https://bypasscors.herokuapp.com/api/?url=" + encodeURIComponent("http://api.wolframalpha.com/v1/result?appid=YH94Q2-G6YWJ242L7&i=2+2");
//$("#61result").load(url);