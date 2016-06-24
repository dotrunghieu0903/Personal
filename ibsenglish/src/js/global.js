// $(document).ready(function() {
// 	$("#point1").hover(function() {
// 		// remove old image
// 		$("#profile").remove();
		
// 		// display image
// 		var img = $("<img id='profile' src='img/photo-circle.png'>");
		
// 		// prepare position
// 		var pointPos = $("#point1").offset();
		
// 		var imgWidth = img.width();
// 		img.css({
// 			"color:black"
// 			"border:1px solid #22"
// 			"width:200px"
// 			"height:120px"
// 			"font-size:11px"
// 			"position": "relative"
// 			 "top": pointPos.top-50,
// 			 "left": pointPos.left-300,
// 		});
		
// 		// draw image
// 		$("#map").append(img);
// 	},
// 	function() {
// 		// hide image
// 		$("#profile").remove();
// 	});
// });
//  
 $(document).ready(function() {
  function init(){
            var x=document.getElementById("container1");

            var pos1=$("#point1").offset();
            img1.css({
             	"top":pos1+50%(x.height)
              	"left":pos1+35%(x.width)
              	 alert();
            });
          }
          window.onload=init();
});

 // $("#img1").css({
 //      "width": "10px",
 //      "height": "10px",
 //      "border": "3px solid rgba(255, 209, 0, 1)",
 //      "border-radius": "50%",
 //      "position": "relative",
 //      "top": "59%",
 //      "left": "40%"
 //    });

  // $(function() {
  //   $("#a").hover(function(ev) {
  //       var x = ev.clientX;
  //       var y = ev.clientY;
  //       alert('x: ' + x + ', y: ' + y);
		// //if(x==776 && y==30){
		// //$(document).mousemove(function(event) {
		// //	$(".image").css({"position":"absolute","left":event.clientX ,"top":event.clientY }).show();    
		// //});
		// //}
	 //  });

    // $("#b").click(function(e) {
    //   var offset = $(this).offset();
    //   var relativeX = (e.pageX - offset.left);
    //   var relativeY = (e.pageY - offset.top);
    //   alert(relativeX+':'+relativeY);
    //   $(".position").val("afaf");
    // });

   

  // });
