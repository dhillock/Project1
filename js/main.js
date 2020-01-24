document.addEventListener("DOMContentLoaded", function() {
  var elem = document.querySelector(".carousel");
  var flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true,
    freeScroll: true,
    wrapAround: true
  });
  // element argument can be a selector string
  //   for an individual element
  var flkty = new Flickity(".carousel", {
    // options
  });

  // identify the submitButton, and letup a listener
  document
    .getElementById("submitButton")
    .addEventListener("click", function(event) {
      // alert("Thank you for Subscribing !");
      // pull out from the test box, the email address
      event.preventDefault();

      let tstVar = document.getElementById("emInput");
      // console.log(tstVar);
      if (validateEmail(tstVar.value)) {
        alert("Thank you for subscribing");
        tstVar.value = "";
      } else {
        alert("Invalid emal address. Please try again.");
      }
    });

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // identify which item from all unordered lists, was clicked, and react accordingly
  var listItems = document.querySelectorAll("ul li"); // this returns an array of each li in the DOM
  listItems.forEach(function(item) {
    item.onclick = function(e) {
      console.log(this.innerText); // this displays clicked li's value

      if (this.innerText == "Updates") {
        var elmnt = document.getElementById("jumpUpdates");
        elmnt.scrollIntoView();
      }
    };
  });
});
