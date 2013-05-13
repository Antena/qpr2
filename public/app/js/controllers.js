'use strict';

/* Controllers */

angular.module('qpr2.controllers', []).
    controller('StoryController', ['$scope', function($scope) {
        $scope.articles = [
            {
                link: "http://www.argentina.ar/temas/pais/17693-aysa-a-7-anos-de-su-reestatizacion-avanza-con-su-plan-director",
                title: "AYSA: a 7 años de su reestatización, avanza con su plan director",
                date: "21/03/2013",
                description: "La empresa tiene previsto para el corriente año una inversión de 6.000 millones de pesos para finalizar cuatro obras de envergadura para la mejor prestación de servicio, en el marco de su plan director."
            },
            {
                link: "http://noticias.terra.com.ar/acuerdo-de-aysa-y-corporacion-andina-para-capacitar-cooperativas,7f272138a97bf210VgnVCM4000009bf154d0RCRD.html",
                title: "ACUERDO DE AYSA Y CORPORACION ANDINA PARA CAPACITAR COOPERATIVAS",
                date: "03/05/2011",
                description: "La Corporación Andina de Fomento (CAF) y la empresa Aguas y Saneamientos Argentinos Sociedad Anónima (AYSA) firmaron un convenio que le permitirá a la compañía estatal recibir fondos no reembolsables para la conformación y capacitación de cooperativas de trabajo, que beneficará a más de 1500 familias."
            }
        ];

        $scope.reports = [
            { id: "66" }
        ]

        $scope.topics = [
            { name: "Planta Potabilizadora", labelClass: "label-info" },
            { name: "Obras Inconclusas", labelClass: "label-important" }
        ]

        $scope.story = {
            title: "Planta potabilizadora Almirante Brown",
            description: "En el taller de Monitoreo Social de la Cuenca Matanza-Riachuelo realizado el 25 de febrero de 2013 en la localidad de Almirante Brown, se reportó que se encontraban inconclusas las obras de una planta potabilizadora sita en Avda. Juan B. Justo y Virrey Ceballos, localidad de Glew, Partido de Almirante Brown, Buenos Aires. Esta situación traería como consecuencia la restricción al acceso a agua potable por parte de los vecinos de dicho lugar."
        };

        // Timeline events
        $scope.events = [
            { type: "article", data: $scope.articles[0], date: $scope.articles[0].date },
            { type: "article", data: $scope.articles[1], date: $scope.articles[1].date },
            { type: "article", data: $scope.articles[1], date: $scope.articles[1].date }
        ]

        $scope.eventsBefore = function(date) {
            var currentDate = moment(date, "DD/MM/YYYY");

            var events= $scope.events.filter(function(event) {
                var eventDate = moment(event.date, "DD/MM/YYYY");
                return eventDate.isBefore(currentDate) || eventDate.isSame(currentDate);

            });

            timeline.update(events);

            return events;
        }

    }])
    .controller('MyCtrl2', [function() {

    }]);