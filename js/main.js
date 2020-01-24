document.addEventListener("DOMContentLoaded", function() {
  var elem = document.querySelector(".main-carousel");
  var flkty = new Flickity(elem, {
    // options
    // setGallerySize: false,
    // .carousel { height: 50%; },
    // .carousel-cell { height: 50% },
    // .flickity-page-dots { bottom: 10px; },
    cellAlign: "left",
    contain: true,
    wrapAround: true
    // autoPlay: true
  });

  // element argument can be a selector string
  //   for an individual element
  var flkty = new Flickity(".main-carousel", {
    // options
  });
});
