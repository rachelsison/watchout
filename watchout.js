var highScore = 0;
var currentScore = 0;
var collisions = 0;


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

var player = d3.select("body svg ellipse");
//console.log(player.attr('cx'));

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

var resetScore = function(){
  if(currentScore > highScore){
    highScore = currentScore;
  }
  collisions += 1;
  currentScore = 0;
  d3.select('.high span').text(highScore);
  d3.select('.current span').text(0);
  d3.select('.collisions span').text(collisions);

}

var increaseScore = function () {
  currentScore++;
  d3.select('.current span').text(currentScore);
}

var checkCollision = function(circle){
  var radiusSum = parseFloat(circle.attr('r')) + parseFloat(player.attr('ry'));
  var xDiff = parseFloat(circle.attr('cx')) - parseFloat(player.attr('cx'));
  var yDiff = parseFloat(circle.attr('cy')) - parseFloat(player.attr('cy'));

  var distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow( yDiff, 2))
  if(distance < radiusSum){
    resetScore();
  }
}

var ourTween = function(locations, self){

  var enemy=d3.select(self);
  // console.log('locations:');
  // console.log(locations);
  // console.log('enemy:');
  // console.log(enemy);
  // console.log('enemy.attr("cx")');
  // console.log(enemy.attr("cx") + 10000);
  var currPos = {x:parseFloat(enemy.attr("cx")), y: parseFloat(enemy.attr("cy"))}
  var endPos = {x:locations.cx,y:locations.cy};
  return function(t) {
    console.log('running function')
    checkCollision(enemy);
    var nextPos = {x: currPos.x+(endPos.x-currPos.x)*t,
               y: currPos.y+(endPos.y-currPos.y)*t };
    enemy.attr('cx',nextPos.x)
         .attr('cy',nextPos.y);
  }
}



var changeLocation = function(){
  var locations = [];
  for (var i=0; i<20; i++) {
    locations.push({"cx":rand(),"cy":rand()})
  }
  svg.selectAll("circle")
  .data(locations)
  .transition()
  .duration(1900)
  .tween('custom', function(d){
    var self = this;
    return ourTween(d, self);
  })
    .attr("cx", function(d) {
    // console.log("THIS ATTR:")
    // console.log(this.;

    return d.cx;
    })
    .attr("cy", function(d) {
    return d.cy;
    })

}

setInterval(changeLocation, 3000);
setInterval(increaseScore,50);


