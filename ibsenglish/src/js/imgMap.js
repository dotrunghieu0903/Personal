var POINT_SIZE = 8;

$(function() {
	var mouseInHcm = false;
	var mouseInTokyo = false;
	var mouseInOkinawa = false;
	var mw = $(window).width();
	var mh = mw/3;
	var hochiminh_point = undefined;
	var tokyo_point = undefined;
	var okinawa_point = undefined;

	drawMap(mw, mh, function() {
		// draw point hochiminh
		var ratioX = 552/1366;
		var ratioY = 232/455;

		var hochiminh = {
			x: $(window).width()*ratioX,
			y: mh*ratioY
		};
		
		hochiminh_point = drawPointHCM(hochiminh.x, hochiminh.y);

		// draw point tokyo
		var ratioX_Tokyo = 628/1366;
		var ratioY_Tokyo = 185/455;

		var tokyo = {
			x: $(window).width()*ratioX_Tokyo,
			y: mh*ratioY_Tokyo
		};
		
		tokyo_point = drawPointTokyo(tokyo.x, tokyo.y);

		// draw point Okinawa
		var ratioX_Okinawa = 595/1366;
		var ratioY_Okinawa = 202/455;

		var okinawa = {
			x: $(window).width()*ratioX_Okinawa,
			y: mh*ratioY_Okinawa
		};
		
		okinawa_point = drawPointOkinawa(okinawa.x, okinawa.y);
		
	});

	$("#c").mousemove(function(evt) {

		var coord = getCanvasClickedPos($(this)[0], evt);
		var rect = {};
		rect = {
			startx: hochiminh_point.x,
			starty: hochiminh_point.y,
			endx: hochiminh_point.x+POINT_SIZE,
			endy: hochiminh_point.y+POINT_SIZE
		};

		var rectTokyo = {};
		rectTokyo = {
			startx: tokyo_point.x,
			starty: tokyo_point.y,
			endx: tokyo_point.x+POINT_SIZE,
			endy: tokyo_point.y+POINT_SIZE
		}

		var rectOkinawa = {};
		rectOkinawa = {
			startx: okinawa_point.x,
			starty: okinawa_point.y,
			endx: okinawa_point.x+POINT_SIZE,
			endy: okinawa_point.y+POINT_SIZE
		}

		if(pointInRect(coord, rect)) {

			mouseInHcm = true;
			var popup = $("<img src='./img/yoshihito-satoyoshi.png'>");
			popup.load(function(evt) {

				// 50px is hard code, change it to other value as neede
				var popup_coord = {};

				var c = $("#c")[0].getContext("2d");

				var mw = $("#c").width();
				var mh = $("#c").height();
				console.log();
				
				var img = new Image();
				img.src = './img/yoshihito-satoyoshi.png';
				var wdImg = img.width;
				var hiImg = img.height;

			    var popupY = hochiminh_point.y - mh/5.5; 
			    var popupX = hochiminh_point.x + 90;

			    if (mw > 991) {
			    	var popupHeight = mh/2;
			    	var popupWidth =  mw/3;

			    }else{ 
			    	popupX = mw/6;
			    	popupY = mh/20; 
			    	popupHeight = 6*mh/7;
			    	popupWidth = 4*mw/5;
			   	}

				var newwdImg;
				var newhiImg;

				if (mw > 991) {
					newwdImg = wdImg;
					newhiImg = hiImg;
					c.drawImage(this, popupX, popupY, newwdImg, newhiImg);
				} else{
					var imgMobile = new Image();
					imgMobile.src = './img/yoshihito-satoyoshi-mobile.png';
					var wdImg = imgMobile.width;
					var hiImg = imgMobile.height;
					newhiImg = mh;
					newwdImg = wdImg*newhiImg/hiImg;
					
					var margin = popupHeight/4 ;
					c.drawImage(imgMobile, margin, 0, newwdImg, newhiImg);
				};

			});
		}

		if (pointInRect(coord, rectTokyo)) {
			mouseInTokyo = true;
			var popup = $("<img src='./img/Toshihito-Nagai.png'>");
			popup.load(function(evt) {
				
				// 50px is hard code, change it to other value as neede
				var popup_coord = {};

				var c = $("#c")[0].getContext("2d");

				var mw = $("#c").width();
				var mh = $("#c").height();
				console.log();
				
				var img = new Image();
				img.src = './img/Toshihito-Nagai.png';
				var wdImg = img.width;
				var hiImg = img.height;

			    var popupY = tokyo_point.y - mh/5; 
			    var popupX = tokyo_point.x + 60;		  

			    if (mw > 991) {
			    	var popupHeight = mh/2;
			    	var popupWidth =  mw/3;

			    }else{ 
			    		popupX = mw/6;
			    		popupY = mh/20; 
			    		popupHeight = 6*mh/7;
			    		popupWidth = 4*mw/5;
			    }
			   
				var newwdImg;
				var newhiImg;

				if (mw > 991) {
					newwdImg = wdImg;
					newhiImg = hiImg;
					c.drawImage(this, popupX, popupY, wdImg, hiImg);
				} else{
					var imgMobile = new Image();
					imgMobile.src = './img/Nagai-mobile.png';
					var wdImg = imgMobile.width;
					var hiImg = imgMobile.height;
					newhiImg = mh;
					newwdImg = wdImg*newhiImg/hiImg;
					
					var margin = popupHeight/4 ;
					c.drawImage(imgMobile, margin, 0, newwdImg, newhiImg);
				};

			});
		};
		if (pointInRect(coord, rectOkinawa)) {
			mouseInOkinawa = true;
			var popup = $("<img src='./img/Shingo-Tsuboi.png'>");
			popup.load(function(evt) {
				
				// 50px is hard code, change it to other value as neede
				var popup_coord = {};

				var c = $("#c")[0].getContext("2d");

				var mw = $("#c").width();
				var mh = $("#c").height();
				console.log();
				
				var img = new Image();
				img.src = './img/Shingo-Tsuboi.png';
				var wdImg = img.width;
				var hiImg = img.height;

			    var popupY = okinawa_point.y - mh/6; 
			    var popupX = okinawa_point.x + 75;	  

			    if (mw > 991) {
			    	var popupHeight = mh/2;
			    	var popupWidth =  mw/3;

			    }else{ 
			    		popupX = mw/6;
			    		popupY = mh/20; 
			    		popupHeight = 6*mh/7;
			    		popupWidth = 4*mw/5;
			    }
			   
				var newwdImg;
				var newhiImg;

				if (mw > 991) {
					newwdImg = wdImg;
					newhiImg = hiImg;
					c.drawImage(this, popupX, popupY, newwdImg, newhiImg);
				} else{
					var imgMobile = new Image();
					imgMobile.src = './img/Tsuboi-mobile.png';
					var wdImg = imgMobile.width;
					var hiImg = imgMobile.height;
					newhiImg = mh;
					newwdImg = wdImg*newhiImg/hiImg;
					
					var margin = popupHeight/4 ;
					c.drawImage(imgMobile, margin, 0, newwdImg, newhiImg);
				};

			});
		};

	});

	$("#c").mousemove(function(evt) {
		var coord = getCanvasClickedPos($(this)[0], evt);
		var rect = {};

		rect = {
			startx: hochiminh_point.x,
			starty: hochiminh_point.y,
			endx: hochiminh_point.x+POINT_SIZE,
			endy: hochiminh_point.y+POINT_SIZE
		};


		var rectTokyo = {};
		rectTokyo = {
			startx: tokyo_point.x,
			starty: tokyo_point.y,
			endx: tokyo_point.x+POINT_SIZE,
			endy: tokyo_point.y+POINT_SIZE
		}

		var rectOkinawa = {};
		rectOkinawa = {
			startx: okinawa_point.x,
			starty: okinawa_point.y,
			endx: okinawa_point.x+POINT_SIZE,
			endy: okinawa_point.y+POINT_SIZE
		}

		if(mouseInHcm && !pointInRect(coord, rect)) {
			mouseInHcm = false;
			var mw = $(window).width();
			var mh = mw/3;
			drawMap(mw, mh, function() {

				// draw point HCM
				var ratioX = 552/1366;
				var ratioY = 232/455;

				var hochiminh = {
					x: $(window).width()*ratioX,
					y: mh*ratioY
				};
				
				hochiminh_point = drawPointHCM(hochiminh.x, hochiminh.y);
				// draw point Tokyo
				var ratioX_Tokyo = 628/1366;
				var ratioY_Tokyo = 185/455;

				var tokyo = {
					x: $(window).width()*ratioX_Tokyo,
					y: mh*ratioY_Tokyo
				};
				
				tokyo_point = drawPointTokyo(tokyo.x, tokyo.y);

				// draw point Okinawa
				var ratioX_Okinawa = 595/1366;
				var ratioY_Okinawa = 202/455;

				var okinawa = {
					x: $(window).width()*ratioX_Okinawa,
					y: mh*ratioY_Okinawa
				};
				
				okinawa_point = drawPointOkinawa(okinawa.x, okinawa.y);
			});
		}

		if(mouseInTokyo && !pointInRect(coord, rectTokyo)) {
			mouseInTokyo = false;
			var mw = $(window).width();
			var mh = mw/3;
			drawMap(mw, mh, function() {
		
				// draw point HCM
				var ratioX = 552/1366;
				var ratioY = 232/455;

				var hochiminh = {
					x: $(window).width()*ratioX,
					y: mh*ratioY
				};
				
				hochiminh_point = drawPointHCM(hochiminh.x, hochiminh.y);
				// draw point Tokyo
				var ratioX_Tokyo = 628/1366;
				var ratioY_Tokyo = 185/455;

				var tokyo = {
					x: $(window).width()*ratioX_Tokyo,
					y: mh*ratioY_Tokyo
				};
				
				tokyo_point = drawPointTokyo(tokyo.x, tokyo.y);

				// draw point Okinawa
				var ratioX_Okinawa = 595/1366;
				var ratioY_Okinawa = 202/455;

				var okinawa = {
					x: $(window).width()*ratioX_Okinawa,
					y: mh*ratioY_Okinawa
				};
				
				okinawa_point = drawPointOkinawa(okinawa.x, okinawa.y);
			});
		}

		if(mouseInOkinawa && !pointInRect(coord, rectOkinawa)) {
			mouseInOkinawa = false;
			var mw = $(window).width();
			var mh = mw/3;
			drawMap(mw, mh, function() {
		
				// draw point HCM
				var ratioX = 552/1366;
				var ratioY = 232/455;

				var hochiminh = {
					x: $(window).width()*ratioX,
					y: mh*ratioY
				};
				
				hochiminh_point = drawPointHCM(hochiminh.x, hochiminh.y);
				// draw point Tokyo
				var ratioX_Tokyo = 628/1366;
				var ratioY_Tokyo = 185/455;

				var tokyo = {
					x: $(window).width()*ratioX_Tokyo,
					y: mh*ratioY_Tokyo
				};
				
				tokyo_point = drawPointTokyo(tokyo.x, tokyo.y);

				// draw point Okinawa
				var ratioX_Okinawa = 595/1366;
				var ratioY_Okinawa = 202/455;

				var okinawa = {
					x: $(window).width()*ratioX_Okinawa,
					y: mh*ratioY_Okinawa
				};
				
				okinawa_point = drawPointOkinawa(okinawa.x, okinawa.y);
			});
		}
	});
});

function pointInRect(point, rect) {
	var inside = false;

	if(point.x > rect.startx && point.x < rect.endx &&
		point.y > rect.starty && point.y < rect.endy) {
		inside = true;
	}

	return inside;
}

function getCanvasClickedPos(c, evt) {
	var rect = c.getBoundingClientRect();
	var coord = {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
    return coord;
}

function drawMap(mw, mh, cb) {
	$("#c").attr("width", mw);
	$("#c").attr("height", mh);
	$("#c").css({
		"background": "#ddd"
	});

	var c = $("#c")[0].getContext("2d");
	var i = $("<img src='./img/map.png'>");
	i.hide();
	var iw = i.width();
	var ih = i.height();

	var iw = $("#c").width();
	var ih = $("#c").height();
	i.load(function() {
		c.drawImage(i[0],0,0,iw,ih);
		return cb();
	});
}

function drawPointHCM(x, y, cb) {
	var c = $("#c")[0].getContext("2d");
	// c.fillStyle="#7FFF00";
	// c.fillRect(x,y,POINT_SIZE,POINT_SIZE); 
	return {x:x, y:y};
}

function drawPointTokyo(x, y, cb) {
	var c = $("#c")[0].getContext("2d");
	// c.fillStyle="#FFFF00";
	// c.fillRect(x,y,POINT_SIZE,POINT_SIZE); 
	return {x:x, y:y};
}

function drawPointOkinawa(x, y, cb) {
	var c = $("#c")[0].getContext("2d");
	// c.fillStyle="#FF7F00";
	// c.fillRect(x,y,POINT_SIZE,POINT_SIZE); 
	return {x:x, y:y};
}