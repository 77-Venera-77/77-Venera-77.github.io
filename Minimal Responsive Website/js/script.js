$(document).ready(function(){
    $('.main-slider').slick({
     //setting-name: setting-value
     autoplay: true,
     autoplaySpeed: 2000,
     arrows: true,
     dots: false,
     slidesToShow: 1,
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


    });
       
  });