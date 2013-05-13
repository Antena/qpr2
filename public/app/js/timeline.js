(function(){
    timeline = {}
    timeline.options={
        height:100,
        width:1000,
        margin: {top: 40, right: 40, bottom: 40, left:40}
    }

    var self = timeline;
    timeline.create = function () {
        var height=timeline.options.height;
        var width=timeline.options.width;
        var margin = timeline.options.margin;

        console.log([new Date('2013-03-03'), new Date('2013-03-05')]);
        var x = d3.time.scale().domain([new Date('2011-03-20'), d3.time.month.offset(new Date('2013-04-20'), 1)]).rangeRound([0, width - margin.left - margin.right]);
        var xAxis = d3.svg.axis()
            .scale(x)
            .orient('bottom')
            .ticks(d3.time.months, 1)
            .tickFormat(d3.time.format('%m/%y'))
            .tickSize(1);

        var svg = d3.select("#timeline")
            .append("svg")
            .attr("width", timeline.options.width)
            .attr("height", timeline.options.height)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');


        svg.append("g")
            .attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom) + ')')
            .call(xAxis);

        self.svg = svg;
        self.x=x;
    }


    timeline.update = function (events) {

        var allEvents = [];
        var eventsByDate = d3.nest().key(function(d){
            var eventDate = moment(d.data.date, "DD/MM/YYYY");
            var day=new Date(eventDate);
            return new Date(day.getFullYear(), day.getMonth(), day.getDate());
        }).entries(events);

        for(var i=0; i<eventsByDate.length; i++) {
            var count=0;
            var dayEvents = eventsByDate[i].values;
            for(var j=0;j<dayEvents.length;j++) {
                var e=dayEvents[j];
                e.dayIndex=j;
                allEvents.push(e);
            }
        }


        var objs=timeline.svg
            .selectAll('.events')
            .data(allEvents);


        objs.enter().append('rect')
            .attr('x',function(d){
                var eventDate = moment(d.data.date, "DD/MM/YYYY");
                return timeline.x(new Date(eventDate));
            })
            .attr('y',function(d){
                return timeline.options.height - timeline.options.margin.top - timeline.options.margin.bottom - (10*(1+ d.dayIndex)) ;
            })
            .attr('width', 10)
            .attr('height', function(d) { return 8 })
            .attr('class','events');

        objs.exit().transition().duration(500).remove();


    }



})()