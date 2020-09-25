function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: { lat: 62.113482, lng: 13.296200 }
    });

    // Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var locations = [
        { lat: 62.114080, lng: 13.294574 },
        { lat: 62.112139, lng: 13.271385 },
        { lat: 62.114006, lng: 13.252872 },
        { lat: 62.113482, lng: 13.296200 },

        { lat: 62.112852, lng: 13.271819 },
        { lat: 62.113444, lng: 13.296156 },
        { lat: 62.113614, lng: 13.296927 },
        { lat: 62.114454, lng: 13.314653 },
    ]

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}