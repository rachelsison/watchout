// start slingin' some d3 here.
// var gameOptions = {
//   height: 450,
//   width: 700,
//   nEnemies: 30,
//   padding: 20
// }

// var gameStats = {
//   score: 0,
//   bestScore: 0
// }

// var axes = {
//   x: d3.scale.linear().domain([0,100]).range([0,gameOptions.width]),
//   y: d3.scale.linear().domain([0,100]).range([0,gameOptions.height])
// }

// var gameBoard = function(){
//   d3.select('.container').append('svg:svg')
//     .attr('width', gameOptions.width)
//     .attr('height', gameOptions.height)
//   }

var svg = d3.select("body svg");

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

populateBoard();


// var svg = d3.select("body").append("svg")
//     .attr("width", 100)
//     .attr("height", 100)
//   .append("g")
    //.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// $(body).append("span.container");

// d3.select(".container1").selectAll("div")
//   .data(['10px', '30px', '15px', '6px', '8px','17px'])
//   .enter()
//   .append("div")
//   .style('top', function(d){return d;});





 /*d3.select('.container').selectAll('div')
  .data(['10px', '30px', '15px', '6px', '8px'])
  //.enter()
 .style('left', function(d){return d;}).addClass("circle");





d3.select('.container').selectAll('div')
  .data(['10px', '30px', '15px', '6px', '8px'])
  //.enter()
  .style('height', function(d){return d;});
*/


// var testThis = d3.selectAll("svg")
//   .data(["red","black","yellow"])
//   .style("background-color",function(d) {return d;} );

// svg.on("mousemove", function() {
//   var p1 = d3.mouse(this);
//   //reset score to 0
//   console.log('mousedThis');
// });

//create a board
//populate the board with svg objects that are the same and randomly placed


//update method is going to change the cx and cy of svg objects to random loc

