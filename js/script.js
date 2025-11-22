const audio = new Audio("https://www.druewilding.com/push-the-button/audio/button.mp3");
const button = document.getElementById("button");
const label = document.getElementById("label");

const params = new URLSearchParams(window.location.search);
const settingsParam = params.get("s");

if(settingsParam) {
  try {
    const settings = JSON.parse(atob(settingsParam));
    if(settings.label) {
      label.textContent = settings.label;
    }
  } catch(e) {
    // something went wrong
  }
}

button.addEventListener("click", () => {
  audio.play();
});
