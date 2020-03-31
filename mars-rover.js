// Rover Object Goes Here
// ======================
let rover = {
  x: 0,
  y: 0,
  direction: "N",
  travelLog: []
}



// ======================

const xLimit = 10;
const yLimit = 10;

function turnLeft(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("turnRight was called!");
}

function moveForward(rover){
  switch (rover.direction) {
    case "N":
      if (rover.x === 0) {
        console.log("Rover is on the edge!");
      } else {
        rover.x--
      }
      break;
    case "E":
      if (rover.y === yLimit) {
        console.log("Rover is on the edge!");
      } else {
        rover.y++
      }
      break;
    case "S":
      if (rover.x === xLimit) {
        console.log("Rover is on the edge!");
      } else {
        rover.x++;
      }
      break;
    case "W":
      if (rover.y === 0) {
        console.log("Rover is on the edge!");
      } else {
        rover.y--;
      }
      break;
  }
  console.log("moveForward was called")
}

function receiveCommands(commands, rover) {
  for (i = 0; i < commands.length; i++) {
    switch (commands[i]) {
      case "f":
        moveForward(rover);
        rover.travelLog.push(`X: ${rover.x} Y:${rover.y} Direction:${rover.direction}`);
        break;
      case "r":
        turnRight(rover);
        rover.travelLog.push(`X: ${rover.x} Y:${rover.y} Direction:${rover.direction}`);
        break;
      case "l":
        turnLeft(rover);
        rover.travelLog.push(`X: ${rover.x} Y:${rover.y} Direction:${rover.direction}`);
        break;
    }
  }
}


receiveCommands("rffrfflfrff", rover);