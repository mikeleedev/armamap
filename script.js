// Map image and coordinate parameters.
var imageWidth = 7280;
var imageHeight = 7558;
var coordWidth = 136;
var coordHeight = 130;
var scaleX = imageWidth / coordWidth;    // Approximately 53.53 pixels per coordinate unit.
var scaleY = imageHeight / coordHeight;   // Approximately 58.14 pixels per coordinate unit.

// Create a custom CRS so that (0, 130) maps to the top‑left and (136, 0) to the bottom‑right.
var customCRS = L.extend({}, L.CRS.Simple, {
  transformation: new L.Transformation(scaleX, 0, -scaleY, imageHeight)
});

// Initialise the map.
var map = L.map('map', {
  crs: customCRS,
  minZoom: -5,
  maxZoom: 5,
  center: [coordHeight / 2, coordWidth / 2],
  zoom: 0
});

// Define the image bounds.
var imageBounds = [
  [0, 0],
  [coordHeight, coordWidth]
];
L.imageOverlay('map.png', imageBounds).addTo(map);

/* Helper functions for padding numbers */
function pad3(num) {
  return ('000' + num).slice(-3);
}

/* Update the hover overlay with coordinates in "000,000" format.
   (Uses the underlying grid values.) */
map.on('mousemove', function (e) {
  let x = Math.floor(e.latlng.lng);
  let y = Math.floor(e.latlng.lat);
  document.getElementById('coordsOverlay').innerText = pad3(x) + "," + pad3(y);
});

map.on('click', function(e){
  L.popup()
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
});

document.addEventListener('touchstart', function (e) {
  // Prevent double-tap zoom
  if (e.touches.length > 1) e.preventDefault();
}, { passive: false });

// Add resize listener to handle orientation changes
window.addEventListener('resize', function () {
  map.invalidateSize();
});

// L.marker([59.519549, 54.825]).addTo(map)
var markers = [
  { loc: [59.519549, 54.825], text: '600' },
  { loc: [60.66552, 55.044505], text: '400' }
  //{ lat: 51.515, lng: -0.08, text: 'C' }
];

// Loop through marker data and create markers
markers.forEach(markerData => {
  var customIcon = L.divIcon({
    className: 'custom-marker',
    html: `<div class="marker-text">${markerData.text}</div>`,
    iconSize: [30, 30],
    iconAnchor: [20, 40]
  });

  L.marker(markerData.loc, { icon: customIcon }).addTo(map);
});