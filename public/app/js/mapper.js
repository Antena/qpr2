(function() {
    mapper = {};

    var overlay, cartodb_imagemaptype,
        map     = null,
        user    = "belbo",
        table   = "qpr2",
        cat     = 'II',
        date    = '1900-05-13',
        zoom    = 13,
        lat     = -34.857623,
        lng     = -58.365984;

    var resetLayer = function() {
        // Add the cartodb tiles
        map.overlayMapTypes.insertAt(0, new google.maps.ImageMapType(cartoDBLayer));
        map.overlayMapTypes.pop(1);
    }

    var cartoDBLayer = {
        getTileUrl: function(coord, zoom) {
            var sql   = "SELECT * FROM qpr2 WHERE timestamp <= DATE '" + date + "'";
            return "https://"+user+".cartodb.com/tiles/"+table+"/"+zoom+"/"+coord.x+"/"+coord.y+".png?sql=" + sql;
        },
        tileSize: new google.maps.Size(256, 256)
    };

    mapper.init = function(divId, settings) {
        // Define the basic map options
        var cartodbMapOptions = {
            zoom: zoom,
            center: new google.maps.LatLng( lat, lng ),
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        // Init the map
        map = new google.maps.Map(document.getElementById("map"), cartodbMapOptions);

        var mapStyle = [{
            stylers: [{ saturation: -65 }, { gamma: 1.52 }] }, {
            featureType: "administrative", stylers: [{ saturation: -95 }, { gamma: 2.26 }] }, {
            featureType: "water", elementType: "labels", stylers: [{ visibility: "off" }] }, {
            featureType: "administrative.locality", stylers: [{ visibility: 'off' }] }, {
            featureType: "road", stylers: [{ visibility: "simplified" }, { saturation: -99 }, { gamma: 2.22 }] }, {
            featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] }, {
            featureType: "road.arterial", stylers: [{ visibility: 'off' }] }, {
            featureType: "road.local", elementType: "labels", stylers: [{ visibility: 'off' }] }, {
            featureType: "transit", stylers: [{ visibility: 'off' }] }, {
            featureType: "road", elementType: "labels", stylers: [{ visibility: 'off' }] }, {
            featureType: "poi", stylers: [{ saturation: -55 }]
        }];

        // Set the map style
        map.setOptions({ styles: mapStyle });

        // Add the CartoDB tiles
        map.overlayMapTypes.insertAt(0, new google.maps.ImageMapType(cartoDBLayer));
    }

    mapper.setDate = function(currentDate) {
        var currentDateParts = currentDate.split("/");
        date = currentDateParts[2] + "-" + currentDateParts[1] + "-" + currentDateParts[0] + " 23:59:59";
        resetLayer();
    }
})()