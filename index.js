"use strict";

const form = document.querySelector(".form");
let mapEvent;
let map;

const onSuccessPosition = (position) => {
  const { latitude, longitude } = position.coords;
  console.log("Here's the google maps url: ", `https://www.google.com.ar/maps/@${latitude},${longitude}`)

  const coords = [latitude, longitude];
  map = L.map('map').setView(coords, 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  map.on("click", (mapE) => {
    mapEvent = mapE;
    form.hidden = false;
  })
}

const onErrorPosition = () => {
  alert("Couldn't get your position");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { latlng: { lat, lng } } = mapEvent;
    L.marker([lat, lng]).addTo(map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: "running-popup",
          background: "black"
        })
      )
      .setPopupContent("Workout")
      .openPopup();
});

navigator.geolocation.getCurrentPosition(onSuccessPosition, onErrorPosition);
