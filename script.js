// map image and coordinate parameters.
var imageWidth = 7280;
var imageHeight = 7558;
var coordWidth = 136;
var coordHeight = 130;
var scaleX = imageWidth / coordWidth;    // Approximately 53.53 pixels per coordinate unit.
var scaleY = imageHeight / coordHeight;   // Approximately 58.14 pixels per coordinate unit.

// create a custom CRS so that (0, 130) maps to the top‑left and (136, 0) to the bottom‑right.
var customCRS = L.extend({}, L.CRS.Simple, {
  transformation: new L.Transformation(scaleX, 0, -scaleY, imageHeight)
});

// init the map.
var map = L.map('map', {
  crs: customCRS,
  minZoom: -5,
  maxZoom: 5,
  center: [coordHeight / 2, coordWidth / 2],
  zoom: 0
 });

// define the image bounds.
var imageBounds = [
  [0, 0],
  [coordHeight, coordWidth]
];
L.imageOverlay('map.png', imageBounds).addTo(map);

/* helper functions for padding numbers */
function pad3(num) {
  return ('000' + num).slice(-3);
}

/* update the hover overlay with coordinates in "000,000" format.
   (uses the underlying grid values.) */
map.on('mousemove', function (e) {
  let x = Math.floor(e.latlng.lng);
  let y = Math.floor(e.latlng.lat);
  document.getElementById('coordsOverlay').innerText = pad3(x) + "," + pad3(y);
});

map.on('click', function(e){
  L.popup()
        .setLatLng(e.latlng)
        .setContent(`${e.latlng.lat.toFixed(3)}, ${e.latlng.lng.toFixed(3)}`)
        .openOn(map);
});

document.addEventListener('touchstart', function (e) {
  // prevent double-tap zoom
  if (e.touches.length > 1) e.preventDefault();
}, { passive: false });

// add resize listener to handle orientation changes
window.addEventListener('resize', function () {
  map.invalidateSize();
});

// iterate markers and create
markers.forEach(markerData => {
  var markerColor = markerData.color || 'blue';
  var markerClass = `custom-marker marker-${markerColor}`;

  var customIcon = L.divIcon({
    className: markerClass,
    html: `<div class="marker-text">${markerData.text}</div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20]
  });

  L.marker(markerData.loc, { icon: customIcon }).addTo(map);
});

