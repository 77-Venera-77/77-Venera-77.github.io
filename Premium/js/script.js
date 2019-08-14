$(document).ready(function(){
    $('.main-slider').slick({
     // setting-name: setting-value
     autoplay: true,
     autoplaySpeed: 2000,
     arrows: false,
     dots: true,
   /*  slidesToShow: 1,
     slidesToScroll: 1,
     responsive: [
    {
         breakpoint: 480,
         settings:  {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
*/
   });


  //});


   //menu
    $('.mob-menu').click(function(){
      $('.header-nav').addClass('menu-visible')
  });
    $('.header-nav').click(function(){
      $('.header-nav').removeClass('menu-visible')
    
  }); 

});