(function() {
    mapper = {};

    var
        map             = null,
        user            = "belbo",
        table           = "qpr2",
        visibleIds      = [],
        cartodbLayer    = null,
        zoom            = 13,
        lat             = -34.857623,
        lng             = -58.365984;

    var resetLayer = function() {
        // Add the cartodb tiles
        map.overlayMapTypes.insertAt(0, new google.maps.ImageMapType(cartoDBLayer));
        map.overlayMapTypes.pop(1);
    }

    var sqlQuery = function() {
        var select = "SELECT * FROM qpr2";
        var where = visibleIds.length > 0 ? "WHERE cartodb_id IN (" + visibleIds.join(",") + ")" : "WHERE cartodb_id = -1";
        var query = select + " " + where;
        return  query;
    }

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

        // Add the CartoDB tiles. See: http://belbo.cartodb.com/api/v1/viz/qpr2/viz.json
        cartodb.createLayer(map, {
            type : "cartodb",
            options: {
                user_name : "belbo",
                table_name : "qpr2",
                query: sqlQuery(),
                interactivity: 'cartodb_id,type',
                featureClick : function(e, latlng, pos, data) {
                    qpr2.select(data);
                }
            }

        }, function(layer) {
            cartodbLayer = layer;
            map.overlayMapTypes.setAt(0, layer);
        });
    }

    mapper.setVisible = function(ids) {
        visibleIds = ids;
        cartodbLayer.setQuery(sqlQuery());
    }
})()