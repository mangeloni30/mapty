"use strict";

const onSuccessPosition = (position) => {
  const { latitude, longitude } = position.coords;
  console.log("Here's the google maps url: ", `https://www.google.com.ar/maps/@${latitude},${longitude}`)
}

const onErrorPosition = () => {
  alert("Couldn't get your position");
}

navigator.geolocation.getCurrentPosition(onSuccessPosition, onErrorPosition);
