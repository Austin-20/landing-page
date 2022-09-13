var navLinks = document.getElementById("navLinks");
      function showMenu() {
        navLinks.style.right = "0";
      }
      function hideMenu() {
        navLinks.style.right = "-200px";
      }


      jQuery(document).ready(function ( $ ) {
        $ ('.counter').counterUp ({
          delay: 10,
          time: 1000
        });
      });


      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:40,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        stagepadding:50,
        dots:false,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $('.owl-carousel2').owlCarousel2({
      loop:true,
      margin:10,
      nav:false,
      autoplay:true,
      autoplayTimeout:1000,
      stagepadding:50,
      dots:false,

      responsive:{
          0:{
              card:1
          },
          600:{
              card:3
          },
          1000:{
              card:3
          }
      }
  })
      

    //   // When the user scrolls down 20px from the top of the document, slide down the navbar
    // window.onscroll = function() {scrollFunction()};
    
    // function scrollFunction() {
    //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //     document.getElementById("navLinks").style.top = "0";
    //   } else {
    //     document.getElementById("navLinks").style.top = "-50px";
    //   }
    // }


   