'use strict';

// prettier-ignore

const form = document.querySelector('.form');

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);
    },
    function () {
      alert('Could not get your position');
    }
  );
}
