// First undefine 'circles' so we can easily reload this file.
require.undef('circles');

define('circles', ['d3'], function (d3) {

    var width = 600;
    var height = 200;

    function draw(container, data) {
        var svg = d3.select(container).append("svg")
            .attr('width', width)
            .attr('height', height)
            .append("g");

        var x = d3.scaleLinear()
            .domain([0, data.length - 1])
            .range([50, width - 50]);

        var circles = svg.selectAll('circle').data(data);

        circles.enter()
            .append('circle')
            .attr("cx", function (d, i) {return x(i);})
            .attr("cy", height / 2)
            .attr("r", 20)
            .style("fill", "#1570a4")
            .style("opacity", 0.8)
            .transition().duration(2000)
            .attr("r", function (d) {return d;});
    }

    return draw;
});

element.append('Loaded circles.js');
