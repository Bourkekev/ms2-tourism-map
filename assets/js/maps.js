
/** -----------------------------------------------------------
 *  MAPPING FUNCTIONS
 */

//store markers here
let markers = [];

function initMap() {
    //map options
    let options = {
        zoom: 14,
        center: {
            lat: 53.347293,
            lng: -6.25897,
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
    map = new google.maps.Map(document.getElementById("map"), options);
    infoWindow = new google.maps.InfoWindow();

    // Category Icons
    let categories = {
        outdoors: {
            name: "Outdoors",
            icon: "assets/images/markers/outdoors-marker-icon.png",
        },
        beach: {
            name: "Beach",
            icon:
                "assets/images/markers/beachflag-marker-icon.png",
        },
        bars: {
            name: "Bars",
            icon: "assets/images/markers/beer-marker-icon.png",
        },
        entertain: {
            name: "Entertainment",
            icon: "assets/images/markers/sports-marker-icon.png",
        },
        restaurant: {
            name: "Restaurants",
            icon: "assets/images/markers/restaurant-marker-icon.png",
        },
        museum: {
            name: "Museums",
            icon: "assets/images/markers/museum-marker-icon.png",
        },
        cultural: {
            name: "Cultural",
            icon: "assets/images/markers/historic-marker-icon.png",
        },
    };

    // Put all addMarkers called into array instead of individual addMarker calls
    let locations = [
        {
            coords: { lat: 53.368697, lng: -6.1483245 },
            content:
                "<h3>Bull Island</h3><p>Bull Island is a low lying, dune covered sand spit in Dublin Bay off the coast of the city’s north side. As a National Nature reserve it is a paradise for birdwatchers and wildlife enthusiasts, and a good place for walking.</p>",
            type: "outdoors",
        },
        {
            coords: { lat: 53.360065, lng: -6.325532 },
            content:
                '<h3>Phoenix Park</h3><img src="assets/images/phoenix-park-200x122.jpg" alt="Phoenix Park" /><p>Enormous park that houses Dublin Zoo and is the largest enclosed public park in any capital city in Europe.</p>',
            type: "outdoors",
        },
        {
            coords: { lat: 53.372642, lng: -6.271671 },
            content:
                "<h3>National Botanic Gardens</h3><p>An oasis of calm and beauty, and entry is free. A premier scientific institution, the gardens contain important collections of plant species and cultivars from all over the world.</p>",
            type: "outdoors",
        },
        {
            coords: { lat: 53.338183, lng: -6.259257 },
            content:
                '<h3>St. Stephen\'s Green</h3><img src="assets/images/st-stephens-green-200x133.jpg" alt="St. Stephen\'s Green" /><p>City centre park with ornamental lake, waterfall, sculptures and a children\'s playground.</p>',
            type: "outdoors",
        },
        {
            coords: { lat: 53.4246, lng: -6.121 },
            content: '<h2>Velvet Strand</h2><p>Portmarnock</p><p><a href="https://www.visitdublin.com/see-do/details/portmarnock-the-velvet-strand-blue-flag-beach-2019" target="_blank">See more here</a></p>',
            type: "beach",
        },
        {
            coords: { lat: 53.36798, lng: -6.145895 },
            content: "<h3>Dollymount Strand</h3>",
            type: "beach",
        },
        {
            coords: { lat: 53.4509, lng: -6.1501 },
            content: "<h3>Malahide</h3><p>Malahide</p>",
            type: "bars",
        },
        {
            coords: { lat: 53.335241, lng: -6.2285659 },
            content: "<h3>Aviva Stadium</h3><p>Aviva Stadium prides itself on being a unique world class international stadium - an outstanding venue for football, rugby, concerts and conferences.</p>",
            type: "entertain",
        },
        {
            coords: { lat: 53.3606718, lng: -6.2515338 },
            content: "<h3>Croke Park Stadium</h3><p>As the home of Ireland's largest sporting, the GAA - Croke Park has played host to iconic moments in Irish sport & history and to major international events.</p>",
            type: "entertain",
        },
        {
            coords: { lat: 53.3418652, lng: -6.2867874 },
            content: "<h3>Guinness Storehouse</h3><p>Guinness Storehouse is a tourist attraction at St. James's Gate Brewery in Dublin, Ireland. Since opening in 2000, it has received over twenty million visitors.</p>",
            type: "entertain",
        },
        {
            coords: { lat: 53.348260, lng: -6.277255 },
            content: "<h3>Jameson Distillery Tour</h3><p>Expert guides tell the story of Jameson in a recreated distillery scene with tastings and dining.</p>",
            type: "entertain",
        },
        {
            coords: { lat: 53.35429, lng: -6.263879 },
            content:
                "<h3>Chapter One</h3><p>Founded in 13th century, Malahide Castle is located off Dame Street.</p>",
            type: "restaurant",
        },
        {
            coords: { lat: 53.340009, lng: -6.258476 },
            content:
                "<h3>The Greenhouse</h3><p>Fine dining on Dawson Street.</p>",
            type: "restaurant",
        },
        {
            coords: { lat: 53.340508, lng: -6.255047 },
            content:
                "<h3>National Museum of Ireland - Archaeology</h3><p>Local archaeological finds from the Bronze Age, Vikings and Medieval times with some Egyptian items.</p>",
            type: "cultural",
        },
        {
            coords: { lat: 53.343225, lng: -6.267848 },
            content:
                '<h3>Dublin Castle</h3><img src="assets/images/dublin-castle-200x133.jpg" alt="Dublin Castle" /><p>Founded in 13th century, Dublin Castle is located off Dame Street.</p>',
            type: "cultural",
        },
        {
            coords: { lat: 53.348660, lng: -6.247859 },
            content:
                "<h3>EPIC The Irish Emigration Museum</h3><p>EPIC The Irish Emigration Museum is located in Dublin's Docklands which covers the history of the Irish diaspora and emigration to other countries.</p>",
            type: "cultural",
        },
        {
            coords: { lat: 53.444904, lng: -6.164135 },
            content:
                "<h3>Malahide Castle</h3><p>Malahide Castle, parts of which date to the 12th century, lies close to the village of Malahide, nine miles north of central Dublin in Ireland.</p>",
            type: "cultural",
        },
        {
            coords: { lat: 53.349579, lng: -6.260422 },
            content:
                "<h3>GPO Witness History Visitor Centre</h3><p>Award winning immersive & interactive must see in Dublin. Located in the historical GPO building on O' Connell St, this was the hub of the 1916 Easter Rising.</p>",
            type: "cultural",
        },
    ];

    //loop through locations
    for (let i = 0; i < locations.length; i++) {
        addMarker(locations[i]);
    }

    // Add Marker function
    function addMarker(props) {
        let marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: categories[props.type].icon,
        });

        // Test for custom icon image
        // if (props.iconImage) {
        //     // set icon image
        //     marker.setIcon(props.iconImage);
        // }

        // Test for info window content. Test if true otherwise get info window with no info
        if (props.content) {
            //info window
            let myInfoWindow = new google.maps.InfoWindow({
                content: props.content,
                maxWidth: 200,
            });

            // need to add listener to listen for that info window
            marker.addListener("click", function () {
                myInfoWindow.open(map, marker);
            });
        }
        // push to array
        markers.push({
            marker: marker,
            type: props.type,
        });
    }
    
    // Create the legend with categories, names and icons
    let legend = document.getElementById("legend");
    for (let key in categories) {
        let type = categories[key];
        let name = type.name;
        let icon = type.icon;
        let div = document.createElement("div");
        div.innerHTML =
            '<input checked="checked" type="checkbox" onchange="toggleType(this, event, \'' +
            key +
            '\')"><img src="' +
            icon +
            '"> ' +
            name;
        legend.appendChild(div);
    }
    // set position for the new legend
    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend);

    // Northside shopping POLYGON
    let shopArea = [
        { lat: 53.350621, lng: -6.254402 },
        { lat: 53.350805, lng: -6.254516 },
        { lat: 53.349973, lng: -6.259895 },
        { lat: 53.352647, lng: -6.26117 },
        { lat: 53.350991, lng: -6.264752 },
        { lat: 53.349644, lng: -6.269237 },
        { lat: 53.347236, lng: -6.268296 },
        { lat: 53.348286, lng: -6.259702 },
        { lat: 53.349765, lng: -6.25989 },
    ];
    shoppingAreaNorth = new google.maps.Polygon({
        path: shopArea,
        strokeColor: "#0000FF",
        strokeOpacity: 0.8,
        strokeWeight: 1,
    });
    
    // Southside shopping POLYGON
    let shopPolySouth = [
        { lat: 53.342976, lng: -6.257750 },
        { lat: 53.339518, lng: -6.258811 },
        { lat: 53.339857, lng: -6.260678 },
        { lat: 53.339558, lng: -6.261100 },
        { lat: 53.340992, lng: -6.263386 },
        { lat: 53.343883, lng: -6.260852 },
    ];
    shoppingAreaSouth = new google.maps.Polygon({
        path: shopPolySouth,
        strokeColor: "#0000FF",
        strokeOpacity: 0.8,
        strokeWeight: 1,
    });

    // Add a listener for the click event.
    shoppingAreaNorth.addListener("click", northPolyContent);
    shoppingAreaSouth.addListener("click", southPolyContent);

    infoWindow = new google.maps.InfoWindow({ maxWidth: 200 });

    /**
     * Google Places
     */
    // Create the search box and link it to the UI element.
    let input = document.getElementById("pac-input");
    let searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", function () {
        searchBox.setBounds(map.getBounds());
    });

    let placesMarkers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", function () {
        let places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        placesMarkers.forEach(function (marker) {
            marker.setMap(null);
        });
        placesMarkers = [];

        // For each place, get the icon, name and location.
        let bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            let icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };

            // Create a marker for each place.
            placesMarkers.push(
                new google.maps.Marker({
                    map: map,
                    icon: icon,
                    title: place.name,
                    position: place.geometry.location,
                })
            );

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
    /** END GOOGLE PLACES */
} // END INITMAP

/** @this {google.maps.Polygon} */
function northPolyContent(event) {
    let contentString =
        '<h3>Shopping Area</h3><img src="assets/images/henry-st-and-spire.jpg" alt="Henry Street shopping" /><p>This area encompasses O\' Connell Street and pedestrianised Henry Street areas.</p>';
    // Replace the info window's content and position.
    infoWindow.setContent(contentString);
    infoWindow.setPosition(event.latLng);

    infoWindow.open(map);
}
function southPolyContent(event) {
    let contentString =
        '<h3>Shopping Area</h3><img src="assets/images/grafton-st-dublin-shopping.jpg" alt="Grafton Street shopping" /><p>This area encompasses pedestrianised Grafton Street and St. Stephen\'s Green shopping areas.</p>';
    // Replace the info window's content and position.
    infoWindow.setContent(contentString);
    infoWindow.setPosition(event.latLng);

    infoWindow.open(map);
}

/** @description toggles the type of map category
 * @param 3 parameters sent in from checkbox; this(checkbox element), event, and categories key
 */
function toggleType(elm, event, type) {
    //on is checked
    let on = elm.checked;
    for (let i = 0; i < markers.length; i++) {
        // if marker type same as categories key
        if (markers[i].type == type) {
            //set marker on map if checkbox is true (or on), otherwise remove marker
            markers[i].marker.setMap(on ? map : null);
        }
    }
}

function addPoly() {
    // set the map to put polygons on
    shoppingAreaNorth.setMap(map);
    shoppingAreaSouth.setMap(map);
}

function removePoly() {
    shoppingAreaNorth.setMap(null);
    shoppingAreaSouth.setMap(null);
}
function whereAmI() {
    // Try HTML5 geolocation. From Google documentation - https://developers.google.com/maps/documentation/javascript/geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                let pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                //add marker to your location. POS variable from right above
                let geoMarker = new google.maps.Marker({
                    position: pos,
                    map: map,
                });
                let geoInfoWindow = new google.maps.InfoWindow();
                geoInfoWindow.setPosition(pos);
                geoInfoWindow.setContent("You are here.");
                geoInfoWindow.open(map);
                // open your location info window again on click marker
                geoMarker.addListener("click", function () {
                    geoInfoWindow.open(map, geoMarker);
                });
                // sets and overrides the map centering location
                map.panTo(pos);
                map.setZoom(12);
            },
            function () {
                handleLocationError(true, geoInfoWindow, map.getCenter());
            }
        );
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, geoInfoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, geoInfoWindow, pos) {
    geoInfoWindow.setPosition(pos);
    geoInfoWindow.setContent(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );
    geoInfoWindow.open(map);
}
