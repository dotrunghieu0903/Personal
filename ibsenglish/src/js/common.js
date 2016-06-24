// Scrolling
    $(document).ready(function(){

        var headerHeight = $("#header").height();

        // Initialize Tooltip
        $('[data-toggle="tooltip"]').tooltip(); 

        // Add smooth scrolling to all links in navbar + footer link
        $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

            // Prevent default anchor click behavior
            // event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({scrollTop: $(hash).offset().top - headerHeight}, 900, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                //window.location.hash = hash;
                //$('html').animate({ 'scrollTop': $(hash).offset().top - headerHeight}, 0);
                window.location.hash = hash;
            });
        });
    });


    $(function() {
        $('.nav a').on('click', function(){ 
            if($('.navbar-toggle').css('display') !='none'){
                $(".navbar-toggle").trigger( "click" );
            }
        });
    });

     $(document).on('click', '.navbar-nav li', function() {
        $(".navbar-nav li").removeClass("active");
        $(this).addClass("active");
    }); 
    //  $(document).on('click', '.navbar-nav li', function() {
    //     $('.navbar-nav li.active').removeClass('active');
    //     $(this).addClass('active');
    // });

    //   $('li a').click(function() {
    //     $('a').removeClass('active');
    //     $(this).addClass('active');
    // });

    // <div class="collapse navbar-collapse" id="myNavbar">
    //         <ul class="nav navbar-nav navbar-right">
    //             <li><a class="page-scroll" href="#section_about_us">ABOUT US</a></li>
    //             <li><a class="page-scroll" href="#section_our_services">OUR SERVICES</a></li>
    //             <li><a class="page-scroll" href="#section_our_work">OUR WORK</a></li>
    //             <li><a class="page-scroll" href="#section_global_team">GLOBAL TEAM</a></li>
    //             <li class="btn-mypage">
    //                 <a class="page-scroll btn-mypage" href="#section_partnership">PARTNERSHIP</a>
    //             </li>
    //         </ul>
    // </div>

// Loading 
    (function(){
      function id(v){return document.getElementById(v); }
      function loadbar() {
        var ovrl = id("overlay"),
            prog = id("progress"),
            stat = id("progstat"),
            img = document.images,
            c = 0;
            tot = img.length;

        function imgLoaded(){

            $({countNum: $('#counter').text()}).animate({countNum: 120}, {
              duration: 2500,
              easing:'linear',
              step: function() {
                $('#counter').text(Math.floor(this.countNum));
              },
              complete: function() {
                $('#counter').text(this.countNum);
                
              }
          });
    
          $({countNum1: $('#counter1').text()}).animate({countNum1: 2980}, {
              duration: 2500,
              easing:'linear',
              step: function() {
                $('#counter1').text(Math.floor(this.countNum1));
              },
              complete: function() {
                $('#counter1').text(this.countNum1);
                
              }
            });
            setTimeout(doneLoading, 2500);
        }

        function doneLoading(){
          ovrl.style.opacity = 0;
          setTimeout(function(){ 
            ovrl.style.display = "none";
          }, 1000);
        }
        for(var i=0; i<tot; i++) {
          var tImg     = new Image();
          tImg.onload  = imgLoaded;
          tImg.onerror = imgLoaded;
          tImg.src     = img[i].src;
        }    
      }
      document.addEventListener('DOMContentLoaded', loadbar, false);
    }());