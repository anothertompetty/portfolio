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

  // smooth scroll anchors

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
  });

  // sticky nav

  $('.overview').stickem({
    // start: -20,
    // offset: -20,
  });
    	
});
