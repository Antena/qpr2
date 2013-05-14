'use strict';

/* Controllers */

angular.module('qpr2.controllers', []).
    controller('StoryController', ['$scope', '$http', function($scope, $http) {
        var dateFormat      = "DD/MM/YYYY";

        $scope.step = null;

        // Articles
        $scope.articles = [
            {
                id: 101,
                source: "Argentina.ar",
                link: "http://www.argentina.ar/temas/pais/17693-aysa-a-7-anos-de-su-reestatizacion-avanza-con-su-plan-director",
                title: "AYSA: a 7 años de su reestatización, avanza con su plan director",
                date: "21/03/2013",
                description: "La empresa tiene previsto para el corriente año una inversión de 6.000 millones de pesos para finalizar cuatro obras de envergadura para la mejor prestación de servicio, en el marco de su plan director.",
                topics: [
                    { name: "AySA", labelClass: "label-inverse" },
                    { name: "Plan director", labelClass: "label-inverse" },
                    { name: "Inversión", labelClass: "label-inverse" }
                ]
            },
            {
                id: 102,
                source: "Portal Terra Noticias",
                link: "http://noticias.terra.com.ar/acuerdo-de-aysa-y-corporacion-andina-para-capacitar-cooperativas,7f272138a97bf210VgnVCM4000009bf154d0RCRD.html",
                title: "ACUERDO DE AYSA Y CORPORACION ANDINA PARA CAPACITAR COOPERATIVAS",
                date: "03/05/2011",
                description: "La Corporación Andina de Fomento (CAF) y la empresa Aguas y Saneamientos Argentinos Sociedad Anónima (AYSA) firmaron un convenio que le permitirá a la compañía estatal recibir fondos no reembolsables para la conformación y capacitación de cooperativas de trabajo, que beneficará a más de 1500 familias."
            },
            {
                id: 103,
                source: "Portal Terra Noticias",
                link: "http://noticias.terra.com.ar/aysa-invertira-25000-millones-de-pesos-para-brindar-servicios-de-agua-y-cloacas-en-toda-su-area-de-cobertura,07c6475ecd292310VgnVCM20000099f154d0RCRD.html",
                title: "AYSA invertirá 25.000 millones de pesos para brindar servicios de agua y cloacas en toda su área de cobertura",
                date: "22/09/2011",
                description: "La empresa estatal de Aguas y Saneamiento (AySA) presentó hoy su Plan Estratégico 2011/2020, período en el cual promete alcanzar el 100 por ciento de cobertura de servicios de agua potable y desagües cloacales a su área de concesión, con una inversión que totalizará los 25.000 millones de pesos."
            },
            {
                id: 104,
                source: "Secretaría de comunicación.",
                link: "http://www.prensa.argentina.ar/2013/03/05/38820-la-argentina-recibio-un-prestamo-para-obras-de-agua-potable.php",
                title: "La Argentina recibió un préstamo para obras de agua potable",
                date: "05/03/2013",
                description: "El Ministerio de Planificación informó que hoy el Banco de Desarrollo para América Latina (ex CAF) aprobó por unanimidad en su reunión de directorio, un préstamo destinado al Programa de Obras Básicas de Agua Potable 2012-2015 AySA (Fase 1), por un monto de 600 millones de pesos."
            }
        ];

        // Reports
        $scope.reports = [
            {
                id: 201,
                date: "25/02/2013",
                report: {
                    "payload": {
                        "domain": "https://quepasariachuelo.crowdmap.com/",
                        "incidents": [
                            {
                                "incident": {
                                    "incidentid": "71",
                                    "incidenttitle": "Planta potabilizadora de Almirante Brown inconclusa",
                                    "incidentdescription": "Taller Almirante Brown 25 de Febrero de 2013:\n\nSe reportó en el Taller realizado el 25 de febrero de 2013, en la localidad de Almirante Brown, que se encontraban inconclusas las obras tendientes a la puesta en funcionamiento de una planta potabilizadora lo que impedía el acceso a agua potable por parte de vecinos de dicha localidad.\n\nCategoría: Agua – Obra paralizada.\nDatos secundarios: Se indicó como factor probable de la paralización de las obras la falta de suministro eléctrico.\nUbicación precisa: Av. República Argentina y Av. Juan B. Justo, de la localidad de Ministro Rivadavia, Almirante  Brown.\nEnlace/fuente de noticias:  -\nVideos/Fotos: Foto. Si.\nInformación personal (opcional): Juan Vegué",
                                    "incidentdate": "2013-05-13 13:48:00",
                                    "incidentmode": "1",
                                    "incidentactive": "1",
                                    "incidentverified": "0",
                                    "locationid": "71",
                                    "locationname": "Av. República Argentina y Av. Juan B. Justo, de la localidad de Ministro Rivadavia, Almirante  Brown.",
                                    "locationlatitude": "-34.859958",
                                    "locationlongitude": "-58.363784"
                                },
                                "categories": [
                                    {
                                        "category": {
                                            "id": 37,
                                            "title": "Obras paralizadas"
                                        }
                                    }
                                ],
                                "media": [
                                    {
                                        "id": 317,
                                        "type": 4,
                                        "link": "http://www.diariodelsurdelgba.com/index.php?option=com_content&view=article&catid=71:noticias-brown&id=7628:reclaman-un-plan-de-rescate-por-problemas-de-agua-en-varias-localidades",
                                        "thumb": null
                                    }
                                ],
                                "comments": [],
                                "customfields": {
                                    "1": {
                                        "field_id": "1",
                                        "form_id": "1",
                                        "field_name": "descripcion",
                                        "field_type": "1",
                                        "field_default": null,
                                        "field_required": "1",
                                        "field_maxlength": "0",
                                        "field_height": "5",
                                        "field_width": "0",
                                        "field_isdate": "0",
                                        "field_ispublic_visible": "0",
                                        "field_ispublic_submit": "0",
                                        "field_response": "Planta potabilizadora en Glew, obra inconclusa."
                                    }
                                }
                            }
                        ]
                    },
                    "error": {
                        "code": "0",
                        "message": "Sin error"
                    }
                },
                related: {
                    places: [301, 302, 303, 304],
                    articles: [101,102,103,104]
                }
            }
        ];

        // Places
        $scope.places = [
            {
                id: 301,
                cartodb_id: 10,
                geometry: "polygon",
                type: "industry",
                name: "Planta potabilizadora de Almirante Brown",
                address: "Av. República Argentina y Av. Juan B. Justo, de la localidad de Ministro Rivadavia, Almirante Brown.",
                link: "https://quepasariachuelo.crowdmap.com/reports/view/71"
            },
            {
                id: 302,
                cartodb_id: 11,
                geometry: "point",
                type: "industry",
                name: "PETROLERA DEL CONOSUR S.A.",
                address: "RUTA 210 21219 GLEW, ALMIRANTE BROWN",
                link: "http://quepasariachuelo.org.ar/industrias/29023790"
            },
            {
                id: 303,
                cartodb_id: 12,
                geometry: "point",
                type: "landfill",
                name: "Espora I",
                address: "Av. Espora entre Yapeyu y Juan B. Justo, Longchamps, Almirante Brown",
                link: "http://quepasariachuelo.org.ar/basurales/57"
            },
            {
                id: 304,
                cartodb_id: 13,
                geometry: "point",
                type: "landfill",
                name: "Espora II",
                address: "Av. Espora interseccion Ribera, Longchamps, Almirante Brown",
                link: "http://quepasariachuelo.org.ar/basurales/58"
            }
        ];

        // Milestones
        $scope.milestones = [
            {
                id: 401,
                date: "21/03/2006",
                source: "Sitio Web AySA",
                topics: [
                    { name: "AySA", labelClass: "label-inverse" },
                    { name: "Plan director de sanamiento", labelClass: "label-inverse" }
                ],
                title: "Creación de AySA, Agua y Saneamientos Argentinos",
                description: "El 21 de marzo de 2006 el Gobierno Nacional creaba AySA, encomendándole la ejecución del Plan Director, un programa de obras de saneamiento.",
                related: {
                    places: [301]
                }
            }
        ]

        // Story
        $scope.story = {
            title: "Planta potabilizadora Almirante Brown",
            description: "En el taller de Monitoreo Social de la Cuenca Matanza-Riachuelo realizado el 25 de febrero de 2013 en la localidad de Almirante Brown, se reportó que se encontraban inconclusas las obras de una planta potabilizadora sita en Avda. Juan B. Justo y Virrey Ceballos, localidad de Glew, Partido de Almirante Brown, Buenos Aires. Esta situación traería como consecuencia la restricción al acceso a agua potable por parte de los vecinos de dicho lugar.",
            topics: [
                { name: "Planta Potabilizadora", labelClass: "label-info" },
                { name: "Obras Inconclusas", labelClass: "label-important" }
            ]
        };

        // Timeline events
        $scope.events = [
            { step: 0, type: "milestone", date: $scope.milestones[0].date, data: $scope.milestones[0] },
            { step: 1, type: "article", date: $scope.articles[1].date, data: $scope.articles[1] },
            { step: 2, type: "article", date: $scope.articles[2].date, data: $scope.articles[2] },
            { step: 3, type: "article", date: $scope.articles[3].date, data: $scope.articles[3] },
            { step: 4, type: "article", date: $scope.articles[0].date, data: $scope.articles[0] },
            { step: 5, type: "report", date: $scope.reports[0].date, data: $scope.reports[0] }
        ];

        // Get events
        $scope.eventsUntil = function(date) {
            var currentDate = moment(date, dateFormat);

            var events = $scope.events.filter(function(event) {
                var eventDate = moment(event.date, dateFormat);
                return eventDate.isBefore(currentDate) || eventDate.isSame(currentDate);
            });

            if (events.length > 0) {
                var placeCartodbIds = [];
                for (var i=0; i<events.length; i++) {
                    var event = events[i];
                    if (event.type == "place") {
                        placeCartodbIds.push(event.data.cartodb_id);
                    }
                    if (event.data.related && event.data.related.places) {
                        var relatedPlaces = event.data.related.places;
                        for (var j=0; j<relatedPlaces.length; j++) {
                            placeCartodbIds.push(getEntity("places", relatedPlaces[j]).cartodb_id);
                        }
                    }
                }
                mapper.setVisible(placeCartodbIds);
            }

            timeline.update(events);

            return events;
        }

        $scope.step = function() {
            var events = $scope.events.filter(function(event) {
                return event.step <= step.value;
            });

            if (events.length > 0) {
                var placeCartodbIds = [];
                for (var i=0; i<events.length; i++) {
                    var event = events[i];
                    if (event.type == "place") {
                        placeCartodbIds.push(event.data.cartodb_id);
                    }
                    if (event.data.related && event.data.related.places) {
                        var relatedPlaces = event.data.related.places;
                        for (var j=0; j<relatedPlaces.length; j++) {
                            placeCartodbIds.push(getEntity("places", relatedPlaces[j]).cartodb_id);
                        }
                    }
                }
                mapper.setVisible(placeCartodbIds);
            }

            timeline.update(events);
        }

        // Event Sorter
        $scope.eventSorter = function(event) {
            return moment(event.date, dateFormat).unix();
        };

        // Utility functions
        function getEntity(entity, id) {
            return  $scope[entity].filter(function (entity) {
                return entity.id == id;
            })[0];
        }

    }])
    .controller('MyCtrl2', [function() {

    }]);