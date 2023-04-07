"use strict";

const onSuccessPosition = (position) => {
  const { latitude, longitude } = position.coords;
  console.log("Here's the google maps url: ", `https://www.google.com.ar/maps/@${latitude},${longitude}`)

  const coords = [latitude, longitude];

  var map = L.map('map').setView(coords, 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker(coords).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
}

const onErrorPosition = () => {
  alert("Couldn't get your position");
}

navigator.geolocation.getCurrentPosition(onSuccessPosition, onErrorPosition);
