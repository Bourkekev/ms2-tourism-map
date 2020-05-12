//Need to delare these first for Geolocating as a function happens outside of initMap
//let map, myInfoWindow, infoWindow;

function initMap() {
    //map options
    let options = {
        zoom: 14,
        center: {
            lat: 53.347293,
            lng: -6.258970
        }
    }
    //assign these variables values here
    map = new google.maps.Map(document.getElementById("map"), options);
    infoWindow = new google.maps.InfoWindow;

    // Put infoWindow content into variable
    let portoContent = `
        <h2>Velvet Strand</h2>
        <p>Portmarnock</p>
        <p><a href="https://www.visitdublin.com/see-do/details/portmarnock-the-velvet-strand-blue-flag-beach-2019" target="_blank">See more here</a></p>`
    // Put all addMarkers called into array instead of individual addMarker calls
    let markers = [
        {
            coords:{lat: 53.4246, lng: -6.1210 },
            iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            content: portoContent
        },
        {
            coords:{lat: 53.4509, lng: -6.1501 },
            iconImage: "http://maps.google.com/mapfiles/kml/pal2/icon27.png",
            content: '<h2>Party Village</h2><p>Malahide</p>'
        },
        {
            coords:{lat: 53.3786, lng: -6.0570 },
            iconImage: "http://maps.google.com/mapfiles/ms/micons/fishing.png",
            content: '<h2>Fishing Village</h2><p>Howth</p>'
        }
    ];

    //loop through markers
    for(let i = 0; i < markers.length; i++){
        addMarker(markers[i]);
    }

    // Add Marker function
    function addMarker(props){
        let marker = new google.maps.Marker({
            position: props.coords,
            map: map,
        });

        // Test for custom icon image
        if(props.iconImage){
            // set icon image
            marker.setIcon(props.iconImage);
        }

        // Test for info window content. Test if true otherwise get info window with no info
        if(props.content){
            //info window
            let myInfoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            // need to add listener to listen for that info window
            marker.addListener('click', function(){
                myInfoWindow.open(map, marker)
            });
        }
    }
    

    // TEST OUT POLYGON
    let shopArea = [
        { lat: 53.350621, lng: -6.254402 },
        { lat: 53.350805, lng: -6.254516 },
        { lat: 53.349973, lng: -6.259895 },
        { lat: 53.352647, lng: -6.261170 },
        { lat: 53.350991, lng: -6.264752 },
        { lat: 53.349644, lng: -6.269237 },
        { lat: 53.347236, lng: -6.268296 },
        { lat: 53.348286, lng: -6.259702 },
        { lat: 53.349765, lng: -6.259890 },
    ];
    shoppingAreaNorth = new google.maps.Polygon({
        path: shopArea,
        strokeColor:"#0000FF",
        strokeOpacity:0.8,
        strokeWeight:1
    });
    // To use a POLYGON just use .Polygon in above example
    // call function to add line
    addLine();
    
}
function addLine() {
    // set the map to put polyline on
    shoppingAreaNorth.setMap(map);
}

function removeLine() {
    shoppingAreaNorth.setMap(null);
}
function whereAmI(){
    // Try HTML5 geolocation. From Google documentation - https://developers.google.com/maps/documentation/javascript/geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        let pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        //add marker to your location. POS variable from right above
        let geoMarker = new google.maps.Marker({
            position: pos,
            map: map,
            //icon: props.iconImage,
            //content: props.content
        });
        let geoInfoWindow = new google.maps.InfoWindow;
        geoInfoWindow.setPosition(pos);
        geoInfoWindow.setContent('You are here.');
        geoInfoWindow.open(map);
        // open your location info window again on click marker
        geoMarker.addListener('click', function(){
            geoInfoWindow.open(map, geoMarker)
        });
        // sets and overrides the map centering location
        map.setCenter(pos);
        map.setZoom(12);
        }, function() {
            handleLocationError(true, geoInfoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, geoInfoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, geoInfoWindow, pos) {
    geoInfoWindow.setPosition(pos);
    geoInfoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    geoInfoWindow.open(map);
}