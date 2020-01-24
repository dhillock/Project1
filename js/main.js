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

/*xxxxxxxxxxxxxxxxxx*/

// document.addEventListener(
//   "click",
//   function(event) {
//     // If the clicked element doesn't have the right selector, don't continue
//     if (!event.target.matches(".menuMain")) return;

//     // Log the clicked element in the console
//     console.log("You clicked the menuMain");
//     console.log(event.target.innerHTML);
//     // console.log(event.innerHTML);
//     console.log(event.target);
//   },
//   false
// );

var listItems = document.querySelectorAll("ul li"); // this returns an array of each li
listItems.forEach(function(item) {
  item.onclick = function(e) {
    console.log(this.innerText); // this displays clicked li's value

    if (this.innerText == "Updates") {
      var elmnt = document.getElementById("jumpUpdates");
      elmnt.scrollIntoView();
    }
  };
});
