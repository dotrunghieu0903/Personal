// Our work Page
var mw = $(window).width();

$(function() {
    if (mw > 991) {
        // Case 1
        $('#activator').click(function(){            
            $('#myoverlay').fadeIn('fast',function(){
                $("#box").show();
            }); 
        });

        $('#boxclose').click(function(){
            $('#myoverlay').fadeOut('fast',function(){
                $("#box").hide();
            }); 
        });

        // Case 2
        $('#activatorCase2').click(function(){
            $('#myoverlay').fadeIn('fast',function(){
                $("#box2").show();
            }); 
        });

        $('#boxclose2').click(function(){
            $('#myoverlay').fadeOut('fast',function(){
                $("#box2").hide();
            }); 
        });

        // Case 3
        $('#activatorCase3').click(function(){
            $('#myoverlay').fadeIn('fast',function(){
                $('#box3').show();
            });
        });

        $('#boxclose3').click(function(){
            $('#myoverlay').fadeOut('fast',function(){
                $("#box3").hide();
            }); 
        });
    }
    else {
        // Case 1
        $('#activator').trigger("click");
        $('#box').hide();
        $('#boxclose').hide();
        $('#activator').click(function(){
            $('#box').slideToggle();
        });
        // Case 2
        $('#activator2').trigger("click");
        $('#box2').hide();
        $('#boxclose2').hide();
        $('#activatorCase2').click(function(){
            $('#box2').slideToggle();
            
        });
        // Case 3
        $('#activator3').trigger("click");
        $('#box3').hide();
        $('#boxclose3').hide();
        $('#activatorCase3').click(function(){
            $('#box3').slideToggle();
        });
    }
});    

// Javascript for Our Service Page
$(function(){
    if (mw > 991) {
        // Service 1

        $("#activatorService").click(function(){
            $('#boxService').css('display','block');
            $('#service2').addClass('tint');
            $('#service3').addClass('tint');
            $('#service4').addClass('tint');
            $('#service5').addClass('tint');
        });
        $('#boxcloseService').click(function(){
            $('#boxService').hide();
            $('#service2').removeClass('tint');
            $('#service3').removeClass('tint');
            $('#service4').removeClass('tint');
            $('#service5').removeClass('tint');
        });   

        $(document).mouseup(function (e)
        {
            // Solution 1
            var container = $('#boxService');

            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container.hide();
                $('#service2').removeClass('tint');
                $('#service3').removeClass('tint');
                $('#service4').removeClass('tint');
                $('#service5').removeClass('tint');
            }
            // Solution 2
            var container2 = $('#boxService2');

            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container2.hide();
                $('#service').removeClass('tint');
                $('#service3').removeClass('tint');
                $('#service4').removeClass('tint');
                $('#service5').removeClass('tint');
            }
            // Solution 3
            var container3 = $('#boxService3');

            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container3.hide();
                $('#service').removeClass('tint');
                $('#service2').removeClass('tint');
                $('#service4').removeClass('tint');
                $('#service5').removeClass('tint');
            }
            // Solution 4
            var container4 = $('#boxService4');

            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container4.hide();
                $('#service').removeClass('tint');
                $('#service2').removeClass('tint');
                $('#service3').removeClass('tint');
                $('#service5').removeClass('tint');
            }
            // Solution 5
            var container5 = $('#boxService5');

            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container5.hide();
                $('#service').removeClass('tint');
                $('#service2').removeClass('tint');
                $('#service3').removeClass('tint');
                $('#service4').removeClass('tint');
            }

            // Our Work Case 
            // Case 1
            var case1 = $('#box');

            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                case1.hide();
                $('#myoverlay').fadeOut('fast');
            }

            // Case 2
            var case2 = $('#box2');

            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                case2.hide();
                $('#myoverlay').fadeOut('fast');
            }

            // Case 3
            var case3 = $('#box3');

            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                case3.hide();
                $('#myoverlay').fadeOut('fast');
            }
        });

        // Service 2
        $("#activatorService2").click(function(){
            $('#boxService2').css('display','block');
            $('#service').addClass('tint');
            $('#service3').addClass('tint');
            $('#service4').addClass('tint');
            $('#service5').addClass('tint');
        });
        $('#boxcloseService2').click(function(){
            $('#boxService2').hide();
            $('#service').removeClass('tint');
            $('#service3').removeClass('tint');
            $('#service4').removeClass('tint');
            $('#service5').removeClass('tint');
        }); 

        // Service 3
        $("#activatorService3").click(function(){
            $('#boxService3').css('display','block');
            $('#service').addClass('tint');
            $('#service2').addClass('tint');
            $('#service4').addClass('tint');
            $('#service5').addClass('tint');
        });
        $('#boxcloseService3').click(function(){
            $('#boxService3').hide();
            $('#service').removeClass('tint');
            $('#service2').removeClass('tint');
            $('#service4').removeClass('tint');
            $('#service5').removeClass('tint');
        }); 

        // Service 4
        $("#activatorService4").click(function(){
            $('#boxService4').css('display','block');
            $('#service').addClass('tint');
            $('#service2').addClass('tint');
            $('#service3').addClass('tint');
            $('#service5').addClass('tint');
        });
        $('#boxcloseService4').click(function(){
            $('#boxService4').hide();
            $('#service').removeClass('tint');
            $('#service2').removeClass('tint');
            $('#service3').removeClass('tint');
            $('#service5').removeClass('tint');
        }); 

        // Service 5
        $("#activatorService5").click(function(){
            $('#boxService5').css('display','block');
            $('#service').addClass('tint');
            $('#service2').addClass('tint');
            $('#service3').addClass('tint');
            $('#service4').addClass('tint');
        });
        $('#boxcloseService5').click(function(){
            $('#boxService5').hide();
            $('#service').removeClass('tint');
            $('#service2').removeClass('tint');
            $('#service3').removeClass('tint');
            $('#service4').removeClass('tint');
        }); 
    } else {
        // Service
        $('#activatorService').trigger("click");
        $('#boxService').hide();
        $('#boxcloseService').hide();
        $('#activatorService').click(function(){
            $('#boxService').slideToggle();
        });
        
        // Service 2
        $('#boxService2').hide();
        $('#boxService2').css('left','0');
        $('#boxcloseService2').hide();
        $('#activatorService2').click(function(){
            $('#boxService2').slideToggle();
        });

        // Service 3
        $('#boxService3').hide();
        $('#boxService3').css('left','0');
        $('#boxcloseService3').hide();
        $('#activatorService3').click(function(){
            $('#boxService3').slideToggle();
        });

        // Service 4
        $('#boxService4').hide();
        $('#boxService4').css('left','0');
        $('#boxcloseService4').hide();
        $('#activatorService4').click(function(){
            $('#boxService4').slideToggle();
        });

        // Service 5
        $('#boxService5').hide();
        $('#boxService5').css('left','0');
        $('#boxcloseService5').hide();
        $('#activatorService5').click(function(){
            $('#boxService5').slideToggle();
        });

    };
});
