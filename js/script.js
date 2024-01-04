$(function(){
    'use strict';
    

    // $('.banner').slick({
        
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay:true,
    //     autoplaySpeed:3000,

    //   });



    $('#hero').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots:true,
      arrows:false,
  
      
    });

    $('.review_slide').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      dots:true,
      arrows:false,
  
      
    });

     // About Video JS Start

   
     $('.work_slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      dots:false,
      arrows:false,
  
      
    });
          
            
  // About Video JS Start



    $('.hey').venobox();


  });







