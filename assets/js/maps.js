//Need to delare these first for Geolocating as a function happens outside of initMap
let map, infoWindow;

function initMap() {
    //map options
    let options = {
        zoom: 12,
        center: {
            lat: 53.4256,
            lng: -6.1016
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

        // Test for info window content
        if(props.content){
            //info window
                infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            // need to add listener to listen for that info window
            marker.addListener('click', function(){
                infoWindow.open(map, marker)
            });
        }
    }

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
        
        infoWindow.setPosition(pos);
        infoWindow.setContent('You are here.');
        infoWindow.open(map);
        map.setCenter(pos);
        }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}