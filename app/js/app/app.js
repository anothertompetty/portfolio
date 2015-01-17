$(document).on('ready', function() {

	// hover background bit

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
	
});
