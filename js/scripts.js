//mobile menu toggle

$(document).ready(function() {
	$('#menu-icon').click(function() {
		$('.nav').slideToggle(500);
	});
});

//expand-bio toggle

$(".expand").click(expandBio)
	function expandBio() {
		$(".more-about-me").slideToggle(500);
	}
	
// smooth anchor scrolling
	
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});
