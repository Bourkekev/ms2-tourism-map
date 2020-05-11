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


    // addMarker({
    //     coords:{lat: 53.4246, lng: -6.1210 },
    //     iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    //     content: '<h2>Velvet Strand</h2><p>Portmarnock</p><h3>Hi!</h3>'
    // });
    // addMarker({
    //     coords:{lat: 53.4509, lng: -6.1501 },
    //     iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    //     content: '<h2>Party Village</h2><p>Malahide</p>'
    // });
    // addMarker({
    //     coords:{lat: 53.3786, lng: -6.0570 },
    //     content: '<h2>Fishing Village</h2><p>Howth</p>'
        
    // });

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