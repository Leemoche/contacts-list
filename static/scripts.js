
mapboxgl.accessToken = 'pk.eyJ1IjoibGVlbW9jaGUiLCJhIjoiY2t4OWQ2MGlxMGRkZzMya3Q3cDE2NGJ1eiJ9.C82_NW7XNUqlhyTPL9upYg';

//Get curren location
navigator.geolocation.getCurrentPosition(
  successLocation,
  errorLocation, {
  enableHighAccuracy: true
  }

)

function successLocation(position){
  console.log(location)
  setupMap([position.coords.longitude,position.coords.latitude])

}

function errorLocation(){
  var default_loc = [-2.24, 53.48]
  setupMap(default_loc)
}


function setupMap(center){
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center, //zooms in to the location,
    zoom: 14
    })
    
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav)

    direction = new MapboxDirections({
    accessToken: mapboxgl.accessToken
    })
    map.addControl(direction,'top-left');
}