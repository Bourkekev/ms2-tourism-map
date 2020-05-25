/* Single location map. thisLocation is declared on each individual location page */
function initMap() {
    //map options
    let options = {
        zoom: 15,
        center: {
            lat: thisLocation.lat,
            lng: thisLocation.lng
        },
        mapTypeControl: false,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP,
        },
        streetViewControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT,
        },
    };
    //assign these variables values here
    let map = new google.maps.Map(document.getElementById("location-map"), options);
    infoWindow = new google.maps.InfoWindow();

    let marker = new google.maps.Marker({
        position: options.center,
        map: map,
        title: thisLocation.title,
      });
}/** END INIT */