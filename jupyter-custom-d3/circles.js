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
            .style("fill", "#1f77b4")
            .style("opacity", 0.7)
            .on('mouseover', function() {
                d3.select(this)
                  .interrupt('fade')
                  .style('fill', '#ff7f0e')
                  .style("opacity", 1)
                  .attr("r", function (d) {return 1.1 * d + 10;});
            })
            .on('mouseout', function() {
                d3.select(this)
                    .transition('fade').duration(500)
                    .style("fill", "#1f77b4")
                    .style("opacity", 0.7)
                    .attr("r", function (d) {return d;});
            })
            .transition().duration(2000)
            .attr("r", function (d) {return d;});
    }

    return draw;
});

element.append('Loaded circles.js');
