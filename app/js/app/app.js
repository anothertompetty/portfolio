$(document).on('ready', function() {

  // lazy load images

  $('.project img').unveil(0, function() {
    $(this).load(function() {
      this.style.opacity = 1;
    });
  });

  // carousel plug-in

  $(".owl-carousel").owlCarousel({
    autoPlay: 4000,
    stopOnHover: true,
    navigation : true,
    slideSpeed : 300,
    pagination: false,
    paginationSpeed : 400,
    singleItem:true,
  });

  // // link hover turns background to image
  // // hide functionality on mobile devices
  
  // if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) == false ) {
	
  //   var highlight = $('.highlight');
  //   var body = $('body');

  //   highlight.on('mouseenter', function() {

  //     var relatedImage = $(this).data('image');

  //     body.css({
  //       'background' : '#EDEDED url(img/' + relatedImage + '.jpg) no-repeat center center fixed',
  //       '-webkit-background-size' : 'cover',
  //       '-moz-background-size' : 'cover',
  //       '-o-background-size' : 'cover',
  //       'background-size' : 'cover'
  //     });

  //   });

  //   highlight.on('mouseleave', function() {

  //     body.css('background', '#EDEDED');

  //   });

  // };
    	
});
