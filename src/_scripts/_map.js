var map = L.map('map', {  scrollWheelZoom: false,
});
var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
minZoom: 16
});
osm.addTo(map);
map.setView([33.983265, -118.306799], 18);

console.log(homicides);

homicides.forEach(function (obj) {
    L.circleMarker([obj.latitude,  obj.longitude])
      .addTo(map)
      .bindTooltip(obj.first_name + " " + obj.last_name, {permanent: true});
});

var osm2 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 9,
    zoomLevelFixed: 9});
var mini = new L.Control.MiniMap(osm2, { toggleDisplay: true });
mini.addTo(map);
