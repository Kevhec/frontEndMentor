const key = "at_DtplxUBBO1wDtnAQklOV3bybN8izs";
const BASE_URL = "https://geo.ipify.org/api/v2/country,city?apiKey=";

function setHeight() {
  // main style height
  const mainContent = document.querySelector(".tracker");
  const response = document.querySelector(".response");
  mainContent.style.height = "auto";
  const mainHeight = mainContent.offsetHeight;
  const responseHeight = response.offsetHeight;
  mainContent.style.height = mainHeight - responseHeight / 2 + "px";
}

// Create map
const map = L.map("map", {
  center: [0, 0],
  zoom: 13,
  zoomControl: false,
});
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  maxZoom: 19,
}).addTo(map);

// Ser marker
const myIcon = L.icon({
  iconUrl: "../assets/icon-location.svg",
  iconSize: [30, 35],
});

let marker = L.marker([0, 0], { icon: myIcon }).addTo(map);

// Events
document.addEventListener("DOMContentLoaded", () => {
  getLocation();
  handleMap();
});

document.addEventListener("submit", (evt) => {
  evt.preventDefault();
  getLocation();
});

async function getLocation() {
  try {
    const ipInput = document.getElementById("ip-entry").value;
    const ipAd = `&ipAddress=${ipInput}`;
    const res = await fetch(BASE_URL + key + ipAd);
    const {
      ip,
      isp,
      location: { city, region, postalCode, timezone, lat, lng },
    } = await res.json();
    manageResponseUI(ip, city, region, postalCode, timezone, isp);
    handleMap(lat, lng);
  } catch (error) {
    console.log(error.message);
  }
}

function manageResponseUI(ip, city, region, postalCode, timezone, isp) {
  // Interface Variables
  const ipUI = document.getElementById("ip");
  const locationUI = document.getElementById("location");
  const timezoneUI = document.getElementById("timezone");
  const ispUI = document.getElementById("isp");

  ipUI.textContent = ip;
  locationUI.textContent = `${city}, ${region} ${postalCode}`;
  timezoneUI.textContent = `UTC ${timezone}`;
  ispUI.textContent = isp;
  setHeight();
}

// Change map position according to ip
function handleMap(lat, lng) {
  map.flyTo([lat, lng], 15, {
    animate: true,
    duration: 2,
  });
  marker.setLatLng([lat, lng]);
}
