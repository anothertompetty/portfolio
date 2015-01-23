$(document).on('ready', function() {


  // link hover turns background to image
  // hide functionality on mobile devices
  
  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) == false ) {
  
    var highlight = $('.highlight');
    var body = $('body');

    highlight.on('mouseenter', function() {

      var relatedImage = $(this).data('image');

      body.css({
        'background' : '#EDEDED url(img/' + relatedImage + '.jpg) no-repeat center center fixed',
        '-webkit-background-size' : 'cover',
        '-moz-background-size' : 'cover',
        '-o-background-size' : 'cover',
        'background-size' : 'cover'
      });

    });

    highlight.on('mouseleave', function() {

      body.css('background', '#EDEDED');

    });
    
  // preload images

  preloadImages = function() {

    for ( var i = o; i < arguments.length; i++ ) {
      $('<img />').attr('src', arguments[i]);
    }

  }

  preloadImages('img/gocardless.jpg', 'wolff-olins.jpg');

  };
    	
});
