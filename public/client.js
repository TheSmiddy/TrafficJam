//instantiate variables

//an array of all the cars on the road, new cars generated every 0.5 seconds
var cars = [];
var totalCars=0;

//a list of the potential spawn locations
var locations = [];

locations[0] = {
  left: 0,
  top: 56,
  nearestNode: 0
};

locations[1] = {
  left: 0,
  top: 378,
  nearestNode: 6
};

locations[2] = {
  left: 90,
  top: 458,
  nearestNode: 6
};

locations[3] = {
  left: 310,
  top: 458,
  nearestNode: 7
};

locations[4] = {
  left: 649,
  top: 458,
  nearestNode: 8
};

locations[5] = {
  left: 705,
  top: 230,
  nearestNode: 5
};

locations[6] = {
  left: 705,
  top: 62,
  nearestNode: 2
};

locations[7] = {
  left: 295,
  top: 0,
  nearestNode: 1
};

//a list of the node locations
var nodes = [];

nodes[0] = {
  n: {left:85,top:83},
  s: {left:81,top:56},
  e: {left:76,top:59},
  w: {left:113,top:71},
  grid: {row:0,col:0}
};


nodes[1] = {
  n: {left:311,top:81},
  s: {left:314,top:44},
  e: {left:300,top:59},
  w: {left:334,top:71},
  grid: {row:0,col:1}
};

nodes[2] = {
  n: {left:582,top:81},
  s: {left:572,top:56},
  e: {left:567,top:59},
  w: {left:615,top:68},
  grid: {row:0,col:2}
};

nodes[3] = {
  n: {left:83,top:230},
  s: {left:101,top:218},
  e: {left:83,top:215},
  w: {left:110,top:223},
  grid: {row:1,col:0}
};

nodes[4] = {
  n: {left:302,top:230},
  s: {left:329,top:218},
  e: {left:297,top:225},
  w: {left:330,top:223},
  grid: {row:1,col:1}
};

nodes[5] = {
  n: {left:580,top:230},
  s: {left:601,top:220},
  e: {left:572,top:224},
  w: {left:615,top:229},
  grid: {row:1,col:2}
};

nodes[6] = {
  n: {left:86,top:404},
  s: {left:101,top:367},
  e: {left:78,top:379},
  w: {left:119,top:394},
  grid: {row:2,col:0}
};

nodes[7] = {
  n: {left:310,top:404},
  s: {left:325,top:368},
  e: {left:296,top:379},
  w: {left:332,top:394},
  grid: {row:2,col:1}
};

nodes[8] = {
  n: {left:612,top:394},
  s: {left:600,top:379},
  e: {left:577,top:379},
  w: {left:612,top:394},
  grid: {row:2,col:2}
};




//controls the display of the traffic light toggles
var value = 0;
$(".trafficflow").rotate({
  bind:
  {
    click: function(){
      if (value===0) {
        value = 90;
      } else {
        value = 0;
      }
      $(this).rotate({ animateTo:value})
    }
  }
});

//randomly sets the spawn location of the first car
var rand = Math.floor(Math.random() * 7);
var rand2 = Math.floor(Math.random() * 7);
var heading = "";
var nextNode = 0;

switch(rand) {
    case 0:
        nextNode = 0;
        heading = "e";
        break;
    case 1:
        nextNode = 6;
        heading = "e";
        break;
    case 2:
        nextNode = 6;
        heading = "n";
        break;
    case 3:
        nextNode = 7;
        heading = "n";
        break;
    case 4:
        nextNode = 8;
        heading = "n";
        break;
    case 5:
        nextNode = 5;
        heading = "w";
        break;
    case 6:
        nextNode = 2;
        heading = "w";
        break;
    case 7:
        nextNode = 1;
        heading = "s";
        break;
    default:
        heading = "e";
}

cars[0] = {
  startLocation: locations[rand],
  endLocation: locations[rand2],
  nextNode: nextNode,
  heading: heading,
  tripTimer: 0
}

//loops through initial cars (currently just the one)
for (i=0;i<cars.length;i++) {
  $("#game").append('<img src="https://cdn.hyperdev.com/us-east-1%3A55d96d0c-7128-44c4-b911-af942e6f1db1%2Fgreencar.png" class="car" id="car'+i+'">');
  $("#car"+i).css("left", cars[i].startLocation.left);
  $("#car"+i).css("top", cars[i].startLocation.top);
  
}

//main loop, creates a new car at a random spawn location with a random destination then progresses all the cars on the map towards their destinations
setInterval(function(){ 
  
  rand = Math.floor(Math.random() * 8);
  rand2 = Math.floor(Math.random() * 8);
  
  heading = "";
  nextNode=0;

  switch(rand) {
      case 0:
          nextNode = 0;
          heading = "e";
          break;
      case 1:
          nextNode = 6;
          heading = "e";
          break;
      case 2:
          nextNode = 6;
          heading = "n";
          break;
      case 3:
          nextNode = 7;
          heading = "n";
          break;
      case 4:
          nextNode = 8;
          heading = "n";
          break;
      case 5:
          nextNode = 5;
          heading = "w";
          break;
      case 6:
          nextNode = 2;
          heading = "w";
          break;
      case 7:
          nextNode = 1;
          heading = "s";
          break;
      default:
          heading = "e";
  }

  cars.push({
    startLocation: locations[rand],
    endLocation: locations[rand2],
    nextNode: nextNode,
    heading: heading,
    tripTimer: 0
  });
  
  totalCars++;
  $("#game").append('<img src="https://cdn.hyperdev.com/us-east-1%3A55d96d0c-7128-44c4-b911-af942e6f1db1%2Fgreencar.png" class="car" id="car'+totalCars+'">');
  $("#car"+totalCars).css("left", cars[totalCars].startLocation.left);
  $("#car"+totalCars).css("top", cars[totalCars].startLocation.top);
  
  switch(heading) {
    case "n":
        $('#car'+totalCars).rotate(270);
        break;
    case "s":
        $('#car'+totalCars).rotate(90);
        break;
    case "w":
        $('#car'+totalCars).rotate(180);
        break;
    default:
  }

  for (i=0;i<cars.length;i++) {
    animate(i);
  }

}, 500);


function animate(carID) {
  $('#car'+carID).animate({
          top: nodes[cars[carID]['nextNode']][cars[carID]['heading']]['top'],
          left: nodes[cars[carID]['nextNode']][cars[carID]['heading']]['left'],
        }, 3000, function() {
          findNextNode(carID);
        });
}


function findNextNode(carID) {
  /*
  get current car node
  compare to goal node
  if both row and col are the same travel to exit, end task
  if both row and col are different toss a coin
  travel in the direction of the chosen path
  */
  
  var currentNode = nodes[cars[carID]['nextNode']];
  var goalNode = nodes[cars[carID]['endLocation']['nearestNode']];
  var nextColNode = currentNode;
  var nextRowNode = currentNode;
  var tempColHeading = "s";
  var tempRowHeading = "e";
  var sameCol = false;
  var sameRow = false;
  
  
  if (currentNode.grid.col < goalNode.grid.col) {
    nextColNode = cars[carID]['nextNode']+1;
    tempColHeading = "e";
  } else if (currentNode.grid.col > goalNode.grid.col) {
    nextColNode = cars[carID]['nextNode']-1;
    tempColHeading = "w";
  } else {
    sameCol = true;
  }
  
  if (currentNode.grid.row < goalNode.grid.row) {
    nextRowNode = cars[carID]['nextNode']+3;
    tempRowHeading = "s";
  } else if (currentNode.grid.row > goalNode.grid.row) {
    nextRowNode = cars[carID]['nextNode']-3;
    tempRowHeading = "n";
  } else {
    sameRow = true;
  }
  
  if (sameCol===false && sameRow === false) {
    if (Math.random()<0.5) {
      cars[carID]['nextNode'] = nextColNode;
      cars[carID]['heading'] = tempColHeading;
      console.log("both false, column rolled");
    } else {
      cars[carID]['nextNode'] = nextRowNode;
      cars[carID]['heading'] = tempRowHeading;
      console.log("both false, row rolled");
    }
  } else if (sameCol===true && sameRow === true) {
    console.log("both true");
    //go to exit
  } else if (sameCol===false) {
    cars[carID]['nextNode'] = nextColNode;
    cars[carID]['heading'] = tempColHeading;
    console.log("column false");
  } else if (sameRow===false) {
    cars[carID]['nextNode'] = nextRowNode;
    cars[carID]['heading'] = tempRowHeading;
    console.log("row false");
  }
  console.log(nodes[cars[carID]['nextNode']][cars[carID]['heading']]['top']);
  $('#car'+carID).animate({
      top: nodes[cars[carID]['nextNode']][cars[carID]['heading']]['top'],
      left: nodes[cars[carID]['nextNode']][cars[carID]['heading']]['left'],
    }, 3000, function() {
      findNextNode(carID);
    });
  
  
  
}