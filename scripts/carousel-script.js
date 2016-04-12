 
/*READY FUNCTIONS*/ 
 $( document ).ready(function() { 
  $('.carousel').carousel({ interval:4000 });
  $(".carousel-description-container").hide() ;
});
/*READY FUNCTIONS*/ 

/*SHOW DESC ON HOVER*/
 $(function () { 

  $("#myCarousel").mouseover(function () {

    $(".carousel-description-container").fadeIn(1200)  ;
  });

  $("#myCarousel").on('slide.bs.carousel', function () {

    $(".carousel-description-container").hide() ;

  });

  $('#myCarousel').on('slid.bs.carousel', function () {

    if( $('#myCarousel').is(':hover') === true) {
      $(".carousel-description-container").fadeIn(1200) ;

    }
  });   

});
/*SHOW DESC ON HOVER*/


 /*PLAY AND PAUSE*/

 $(function () { 
  $('#playButton').click(function () {
    $('#myCarousel').carousel('cycle');
    document.getElementById("playButton").style.visibility = "hidden";
    document.getElementById("pauseButton").style.visibility = "visible";
  });
  $('#pauseButton').click(function () {
    $('#myCarousel').carousel('pause');
    document.getElementById("pauseButton").style.visibility = "hidden";
    document.getElementById("playButton").style.visibility = "visible";
  });

});

/*PLAY AND PAUSE*/