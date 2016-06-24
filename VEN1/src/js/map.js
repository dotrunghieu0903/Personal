var hcmLatLng=new google.maps.LatLng(10.843992,106.562527);
var tokyoLatLng=new google.maps.LatLng(35.6833,139.6833);
var okinawaLatLng=new google.maps.LatLng(26.797390,128.252743);
function initialize() {
  	var mapProp = {
    center:hcmLatLng,
    zoom:2,
    mapTypeId:google.maps.MapTypeId.TERRAIN
	};
	var map=new google.maps.Map(document.getElementById("map"),mapProp);
}
//set Mark for hcm city
function mHCM(){
	var mapProp = {
    center:hcmLatLng,
    zoom:2,
    mapTypeId:google.maps.MapTypeId.TERRAIN
	};
	var map=new google.maps.Map(document.getElementById("map"),mapProp);
	var marker = new google.maps.Marker({
		position: hcmLatLng,
		label: 'xxx',
		map:map
	  });
}
//set Mark for Okinawa
function mOkinawa(){
	var mapProp = {
    center:okinawaLatLng,
    zoom:2,
    mapTypeId:google.maps.MapTypeId.TERRAIN
	};
	var map=new google.maps.Map(document.getElementById("map"),mapProp);
	var marker = new google.maps.Marker({
		position: okinawaLatLng,
		label: 'xxx',
		map:map
	  });
}
////set Mark for Tokyo
function mTokyo(){
	var mapProp = {
    center:tokyoLatLng,
    zoom:2,
    mapTypeId:google.maps.MapTypeId.TERRAIN
	};
	var map=new google.maps.Map(document.getElementById("map"),mapProp);
	var marker = new google.maps.Marker({
		position: tokyoLatLng,
		label: 'xxx',
		map:map
	  });
}
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'resize', initialize);