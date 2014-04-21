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