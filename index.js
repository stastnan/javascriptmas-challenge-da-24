const lights = document.getElementsByClassName("lights");

function setLights() {
  let isLightOn = true;

  setInterval(function () {
    if (isLightOn) {
      for (let i = 0; i < lights.length; i++) {
        lights[i].classList.add("lights-on");
      }
    } else {
      for (let i = 0; i < lights.length; i++) {
        lights[i].classList.remove("lights-on");
      }
    }

    isLightOn = !isLightOn;
  }, 800);
}

setLights();
