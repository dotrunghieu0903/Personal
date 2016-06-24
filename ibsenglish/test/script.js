$(document).ready(function() {
	$("#point").hover(
	function() {
		// remove old image
		$("#chicken").remove();
		
		// display image
		var img = $("<img id='chicken' src='img.jpg'>");
		
		// prepare position
		var pointPos = $("#point").offset();
		
		var imgWidth = img.width();
		img.css({
			"position": "relative",
			"top": pointPos.top-200,
			"left": pointPos.left-100,
		});
		
		// draw image
		$("#map").append(img);
	},
	function() {
		// hide image
		$("#chicken").remove();
	});
});