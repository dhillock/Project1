// JsCode for classroom exercise

document.addEventListener("DOMContentLoaded", function() {
  // all of your JS code goes her
  const nameEL = document.getElementById("name");

  const evolveBtn = document.getElementById("evolve");

  let currentStage = "Simple Spore";

  evolutionStage = document.getElementById("evolution");

  evolutionStage.innerHTML = currentStage;

  let clicks = 0;
  let styleColour = "black";

  // Add the initial stage of evolution to the span id="evolution"

  evolveBtn.addEventListener("click", function evolve() {
    clicks++;
    //console.log(event.target);
    //console.log(clicks);
    navigator.vibrate(200);
    if (clicks === 10) {
      currentStage = "10Evolve";
      styleColour = "red";
    } else if (clicks === 11) {
      currentStage = "11Evolve";
      styleColour = "green";
    } else if (clicks === 12) {
      currentStage = "12Evolve";
      styleColour = "pink";
    } else if (clicks === 13) {
      currentStage = "13Evolve";
      styleColour = "orange";
    } else if (clicks === 14) {
      currentStage = "14Evolve";
      styleColour = "magenta";
    } else if (clicks === 15) {
      currentStage = "15Saṃsāra";
      styleColour = "blue";
    } else {
      currentStage = "Note >= 10 and <=15";
      styleColour = "BlueViolet";
    }
    evolutionStage.innerHTML = currentStage;
    document.getElementById("evolution").style.color = styleColour;

    // add 1 to the clicks variable
    // When the number of clicks reaches 10, add a second stage of evolution to the DOM!
    // You choose the name of each additional stage.
  });
});
