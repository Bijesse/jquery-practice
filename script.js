$( document ).ready(function() 
{
    	$("#div1").text("hello");
	$("body").append("<div>Div 4</div>")
	$("#div3").remove();
	$("#one").attr("src", "http://zapp4.staticworld.net/reviews/graphics/products/uploaded/apple_116inch_macbook_air14ghz_64_gb_710257_g2.jpg")
	$("body").css("background-color", "yellow")
	//Click Hanlders
	$("button").on("click", function(){
		alert('hello!')
	});
	$("#scripted").on("mouseover", function(){
		alert('hello!')
	});
});



