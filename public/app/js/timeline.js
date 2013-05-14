(function() {

    timeline = {};

    var options = {
        height: 100,
        width: 1000,
        margin: { top: 40, right: 40, bottom: 40, left:40 }
    };

    var svg, x;

    timeline.create = function (settings) {

        options = $.extend(options, settings);

        x = d3.time.scale()
            .domain([new Date('2006-03-21'), new Date('2013-05-14')])
            .rangeRound([0, options.width - options.margin.left - options.margin.right]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient('bottom')
            .ticks(d3.time.months, 6)
            .tickFormat(d3.time.format('%m/%y'))
            .tickSize(1);

        svg = d3.select("#timeline")
            .append("svg")
            .attr("width", options.width)
            .attr("height", options.height)
            .append('g')
            .attr('transform', 'translate(' + options.margin.left + ', ' + options.margin.top + ')');


        svg.append("g")
            .attr('transform', 'translate(0, ' + (options.height - options.margin.top - options.margin.bottom) + ')')
            .call(xAxis);
    }

    timeline.update = function (events) {

        // Group events by month and calculate y-index
        var allEvents = [];
        var eventsByDate = d3.nest().key(function(d) {
            var eventDate = moment(d.data.date, "DD/MM/YYYY");
            var day = new Date(eventDate);
            return new Date(day.getFullYear(), day.getMonth(), 1);
        }).entries(events);
        for (var i=0; i<eventsByDate.length; i++) {
            var dayEvents = eventsByDate[i].values;
            for (var j=0; j<dayEvents.length; j++) {
                var e = dayEvents[j];
                e.yIndex = e.type == "report" ? 1 : -(j+1);
                allEvents.push(e);
            }
        }

        // Data Join
        var objs = svg
            .selectAll('.events')
            .data(allEvents);

        // Enter
        objs.enter()
            .append('rect');

        // Enter + Update
        svg.selectAll('rect')
            .attr('x',function(d){
                var eventDate = moment(d.data.date, "DD/MM/YYYY");
                return x(new Date(eventDate));
            })
            .attr('y',function(d){
                return options.height - options.margin.top - options.margin.bottom - (15*d.yIndex) ;
            })
            .attr('width', 10)
            .attr('height', function(d) { return 8 })
            .attr('class','events');

        // Exit
        objs.exit()
            .transition()
            .duration(500)
            .remove();
    }



})()