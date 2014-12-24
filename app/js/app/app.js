$(document).on('ready', function() {

	console.log('scripts working!');


	// hover background bit

	var highlight = $('.highlight');
	var imageFrame = $('.image-frame');

	highlight.on('mouseenter', function() {

		console.log('mouse in!');
		var relatedImage = $(this).data('image');
		var imagePath = '<img src="img/' + relatedImage + '.jpg">';
		imageFrame.html(imagePath);

	});

	highlight.on('mouseleave', function() {

		console.log('mouse out!');
		imageFrame.empty();

	});
	
	// resize fullscreen inline imgs

	var theWindow = $(window);
	var bg = $("#bg");
	var imgAspectRatio = bg.width() / bg.height();
	    			    		
	function resizeBg() {
		
		if ( (theWindow.width() / theWindow.height()) < imgAspectRatio ) {
		    bg
		    	.removeClass()
		    	.addClass('bgheight');
		} else {
		    bg
		    	.removeClass()
		    	.addClass('bgwidth');
		}
					
	}
	                   			
	theWindow.resize(resizeBg).trigger("resize");
	
});
