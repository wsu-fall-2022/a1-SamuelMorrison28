// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// First: Set up your name
let std_name = "Samuel Morrison"
document.querySelector('#std_name').innerHTML = `<strong>${std_name}</strong>`

//Then: comes everything else
// TODO

import * as d3 from "d3";





let svg = d3.select('main')
    .append('svg')
    .attr('width', 600)
    .attr('height', 600)

let obj1Data = [{ "cx": 120, "cy": 120, "radius": 40, "color": "blue", "opacity": .35 },
    { "cx": 120, "cy": 120, "radius": 18, "color": "black" },
    { "cx": 120, "cy": 120, "radius": 9, "color": "white" },
    { "cx": 120, "cy": 120, "radius": 60, "color": "red", "opacity": .1 }
]

let obj1Group = svg.append("g")


let obj1 = obj1Group.selectAll("circle")
    .data(obj1Data)
    .enter()
    .append("circle")
    .transition()
    .on("end", function repeat() {
        d3.active(this)
            .duration(1000)
            .attr("transform", "translate(80,0)")
            .transition()
            .duration(5000)
            .attr("transform", "translate(-50,0)")
            .transition()
            .duration(5000)
        obj1.attr("fill-opacity", 0)
            .transition()
            .on("end", repeat);
    })

let obj1Attributes = obj1
    .attr("cx", function (d) { return d.cx; })
    .attr("cy", function (d) { return d.cy; })
    .attr("r", function (d) { return d.radius; })
    .style("fill", function (d) { return d.color; })
    .style("fill-opacity", function (d) { return d.opacity; })

let obj2Data = [{ "cx": 320, "cy": 120, "rx": 120, "ry": 40, "stroke": "black", "fill": "white" },
    { "cx": 320, "cy": 120, "rx": 150, "ry": 80, "stroke": "black", "fill": "none" },
    { "cx": 320, "cy": 120, "rx": 40, "ry": 40, "stroke": "black", "fill": "red" },
    { "cx": 320, "cy": 120, "rx": 5, "ry": 40, "stroke": "black", "fill": "yellow" }
]

let obj2Group = svg.append("g")

let obj2 = obj2Group.selectAll("ellipse")
    .data(obj2Data)
    .enter()
    .append("ellipse")
    .transition()
    .duration(1000)
    .attr("transform", "translate(100,0)")
    .transition()
    .duration(5000)


let obj2Attributes = obj2
    .attr("cx", function (d) { return d.cx; })
    .attr("cy", function (d) { return d.cy; })
    .attr("rx", function (d) { return d.rx; })
    .attr("ry", function (d) { return d.ry; })
    .style("fill", function (d) { return d.fill; })
    .style("stroke", function (d) { return d.stroke; })


let path = d3.path()
path.moveTo(350, 350)
path.lineTo(400, 350)
path.lineTo(375, 400)
path.closePath()

path.moveTo(400, 350)
path.lineTo(450, 350)
path.lineTo(425, 400)
path.closePath()

path.moveTo(375, 400)
path.lineTo(425, 400)
path.lineTo(400, 450)
path.closePath()

svg.append("circle")
    .attr("cx", 400)
    .attr("cy", 400)
    .attr("r", 80)
    .attr("fill", "purple")
    .attr("fill-opacity", 0.5)


svg.append("path")
    .attr("d", path)
    .attr("stroke", "black")
    .attr("fill", "Yellow")
    .transition()
    .duration(2000)
    .attr("transform", "rotate(180 400 395) ")




let obj4Group = svg.append("g")

obj4Group.append("rect")
    .attr("x", 200)
    .attr("y", 200)
    .attr("width", 100)
    .attr("height", 100)
    .style("fill", "blue")
    .style("stroke", "white")
    .style("stroke-width", 3)
obj4Group.append("rect")
    .attr("x", 200)
    .attr("y", 200)
    .attr("width", 100)
    .attr("height", 100)
    .style("fill", "cyan")
    .style("stroke", "white")
    .style("stroke-width", 3)
    .transition()
    .duration(1000)
    .attr("transform", "rotate(45 250 250) ")
obj4Group.append("rect")
    .attr("x", 200)
    .attr("y", 200)
    .attr("width", 100)
    .attr("height", 100)
    .style("fill", "orange")
    .style("stroke", "white")
    .style("stroke-width", 3)
    .transition()
    .duration(2000)
    .attr("transform", "rotate(75 250 250) ")
obj4Group.append("rect")
    .attr("x", 225)
    .attr("y", 225)
    .attr("width", 50)
    .attr("height", 50)
    .style("fill", "black")
    .style("stroke", "black")
    .style("stroke-width", 3)
    .transition()
    .duration(3000)
    .attr("transform", "rotate(45 250 250) ")
obj4Group.append("rect")
    .attr("x", 235)
    .attr("y", 235)
    .attr("width", 25)
    .attr("height", 25)
    .style("fill", "white")
    .style("stroke", "white")
    .style("stroke-width", 3)
    .transition()
    .duration(4000)
    .attr("transform", "rotate(45 250 250) ")

let obj5Group = svg.append("g")

obj5Group.append("circle")
    .attr("cx", 50)
    .attr("cy", 450)
    .attr("r", 50)
    .attr("fill-opacity", 0.5)
    .style("fill", "yellow")
    //.style("stroke", "black")
    .transition()
    .duration(1000)
    .attr("transform", "rotate(180 75 450) ")
obj5Group.append("circle")
    .attr("cx", 100)
    .attr("cy", 450)
    .attr("r", 50)
    .attr("fill-opacity", 0.5)
    .style("fill", "green")
    //.style("stroke", "black")
    .transition()
    .duration(1500)
    .attr("transform", "rotate(-180 125 450) ")
obj5Group.append("circle")
    .attr("cx", 75)
    .attr("cy", 410)
    .attr("r", 50)
    .attr("fill-opacity", 0.5)
    .style("fill", "red")
    //.style("stroke", "black")
    .transition()
    .duration(2500)
    .attr("transform", "rotate(-180 100 450) ")
obj5Group.append("circle")
    .attr("cx", 75)
    .attr("cy", 480)
    .attr("r", 50)
    .attr("fill-opacity", 0.5)
    .style("fill", "blue")
    //.style("stroke", "black")
    .transition()
    .duration(2000)
    .attr("transform", "rotate(-180 100 450) ")
obj5Group.append("circle")
    .attr("cx", 75)
    .attr("cy", 445)
    .attr("r", 10)
    .attr("fill-opacity", 0.5)
    .style("fill", "white")
    .style("stroke", "black")
    .transition()
    .duration(3000)
    .attr("transform", "rotate(-180 100 450) ")
