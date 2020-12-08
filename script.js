'use strict';

// prettier-ignore

const form = document.querySelector('.form');

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(latitude, longitude);
      const coords = [latitude, longitude];
      //code copied form leaflet js site visit it to get more info
      const map = L.map('map').setView(coords, 15);

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on('click', mapEvent => {
        console.log(mapEvent);

        const { lat, lng } = mapEvent.latlng;
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              className: 'style-popup',
            })
          )
          .setPopupContent('Marker')
          .openPopup();
      });
    },

    function () {
      alert('Could not get your position');
    }
  );
}
