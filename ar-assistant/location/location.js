window.onload = () => {
  const button = document.querySelector('button[data-action="change"]');
  button.innerText = "﹖";

  updateCurrentPosition();
};

function updateCurrentPosition() {
  console.log("updateCurrentPosition...");
  let currentPosition = { latitude: "", longitude: "" };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      currentPosition.latitude = latitude;
      currentPosition.longitude = longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      document.getElementById(
        "help-text"
      ).innerText = `Latitude: ${currentPosition.latitude}, Longitude: ${currentPosition.longitude}`;
    });
  }
}

function renderPlaces() {
  document
    .querySelector('button[data-action="change"]')
    .addEventListener("click", function () {
      updateCurrentPosition();
    });
}
