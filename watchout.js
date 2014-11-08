
var drag = d3.behavior.drag()
  .on('dragstart', function(){ console.log('started dragging');})
  .on('drag', function(){ d3.select('ellipse').attr('cx', d3.event.x)
                                  .attr('cy', d3.event.y); })
  .on('dragend', function(){ console.log('stopped dragging');});

var svg = d3.select("body svg");

svg.append("ellipse")
.data([{x:300, y:200}])
.attr("cx", function(d) {return d.x})
.attr("cy", function(d) {return d.y})
.attr("rx", 20)
.attr("ry", 15)
.style("fill", "red")
.call(drag)
;

var rand = function(){
  return Math.floor(Math.random() * 500 );
}
var populateBoard = function(){
  for(var i = 0; i < 20; i++){
    var px = rand();
    var fx = rand();
    svg.append("circle")
.attr("cx", px)
.attr("cy", fx)
.attr("r", 15)
.style("fill", "purple");

  }
}

var randArr = function (){
  var randArray = [];
  for (i=0; i<20; i++) {
    randArray.push(rand());
  }
  return randArray;
}

populateBoard();

var changeLocation = function(){
  var locations = [];
  for (var i=0; i<20; i++) {
    locations.push({"cx":rand(),"cy":rand()})
  }
  svg.selectAll("circle").data(locations).transition().duration(1900).attr("cx", function(d) {
    return d.cx;
  }).attr("cy", function(d) {
    return d.cy;
  })
}

setInterval(changeLocation, 3000);


