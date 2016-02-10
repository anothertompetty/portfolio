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
    	
});
