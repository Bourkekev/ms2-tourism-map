function initMap() {
    //map options
    let options = {
        zoom: 12,
        center: {
            lat: 53.4256,
            lng: -6.1016
        }
    }
    let map = new google.maps.Map(document.getElementById("map"), options);

    /*
    // SINGLE MAP MARKER 
    let marker = new google.maps.Marker({
        position:  { lat: 53.4246, lng: -6.1210 },
        map: map,
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    });

    //info window
    let infoWindow = new google.maps.InfoWindow({
        content: '<h2>Velvet Strand</h2><p>Portmarnock</p><h3>Hi!</h3>'
    });

    // need to add listener to listen for that info window
    marker.addListener('click', function(){
        infoWindow.open(map, marker)
    });
    */
    addMarker({
        coords:{lat: 53.4246, lng: -6.1210 },
        iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        content: '<h2>Velvet Strand</h2><p>Portmarnock</p><h3>Hi!</h3>'
    });
    addMarker({
        coords:{lat: 53.4509, lng: -6.1501 },
        iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    });
    addMarker({
        coords:{lat: 53.3786, lng: -6.0570 },
        
    });

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
            let infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            // need to add listener to listen for that info window
            marker.addListener('click', function(){
                infoWindow.open(map, marker)
            });
        }
    }
}