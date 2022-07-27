mapboxgl.accessToken = 'pk.eyJ1IjoibWljYTE4OTgiLCJhIjoiY2w1aGR3cmQ4MDMwajNpcjBudWhtbGRsaiJ9.IFnZ3SCIbDP0dyp5BWMuLQ';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-122.33005, 47.60382])
}

const busStops = [
    [-122.33005, 47.60382],
    [-122.33148, 47.60277],
    [-122.33252, 47.60231],
    [-122.33382, 47.60370],
    [-122.33494, 47.60332],
    [-122.33561, 47.60398],

];


let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    center: [-122.33005, 47.60382],
    zoom: 15,
});

const nav = new mapboxgl.NavigationControl();
map.addControl(nav)

    var directions = new MapboxDirections({
    accessToken: 'pk.eyJ1IjoibWljYTE4OTgiLCJhIjoiY2w1aGR3cmQ4MDMwajNpcjBudWhtbGRsaiJ9.IFnZ3SCIbDP0dyp5BWMuLQ'
});

map.addControl(directions, 'bottom-left');
    
var marker = new mapboxgl.Marker()
    .setLngLat([-122.33005, 47.60382])
    .addTo(map)

let counter = 0;
function move() {
      setTimeout(() => {
        if (counter >= busStops.length) return;
        marker.setLngLat(busStops[counter]);
        counter++;
        move();
    }, 1000)
};











