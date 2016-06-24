var myCenter1=new google.maps.LatLng(10.843992,106.562527);
var myCenter2=new google.maps.LatLng(35.712298,139.733723);
var myCenter3=new google.maps.LatLng(26.797390,128.252743);
	
function initialize() {

  	var mapProp = {
    center:myCenter2,
    zoom:2,
    mapTypeId:google.maps.MapTypeId.TERRAIN
	};
	var map=new google.maps.Map(document.getElementById("map"),mapProp);
	
	var marker1=new google.maps.Marker({
	position:myCenter1,
	// icon:'pinkball.png'
	  });
	//marker1.setMap(map);
	  
	
	
	var marker2=new google.maps.Marker({
	position:myCenter2,
	// icon:'pinkball.png'
	});
	//marker2.setMap(map);
	
	
	var myCenter3=new google.maps.LatLng(26.797390,128.252743);
	var marker3=new google.maps.Marker({
	position:myCenter3,
	// icon:'pinkball.png'
	});
	//marker3.setMap(map);
	
}

function show(){
	var marker1=new google.maps.Marker({
	position:myCenter1,
	map: map
	  });
	  alert(map);
	//marker1.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'resize', initialize);

	