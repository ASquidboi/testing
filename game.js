// Get the canvas element from the HTML file
var canvas = document.getElementById("canvas");

// Set the canvas dimensions
canvas.width = 500;
canvas.height = 500;

// Get the canvas context
var ctx = canvas.getContext("2d");

// Set the initial player position
var player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  z: 0,
  speed: 5
};

// Set the initial cube position
var cube = {
  x: 100,
  y: 100,
  z: 0
};

// Set the cube size
var cubeSize = 50;

// Set the background color
ctx.fillStyle = "#f0f0f0";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw the cube
ctx.fillStyle = "#ff0000";
ctx.fillRect(
  cube.x - cubeSize / 2,
  cube.y - cubeSize / 2,
  cubeSize,
  cubeSize
);

// Draw the player
ctx.fillStyle = "#0000ff";
ctx.beginPath();
ctx.arc(player.x, player.y, 10, 0, 2 * Math.PI);
ctx.fill();

// Add a keydown event listener to move the player
document.addEventListener("keydown", function(event) {
  switch (event.keyCode) {
    case 37: // Left arrow
      player.x -= player.speed;
      break;
    case 38: // Up arrow
      player.y -= player.speed;
      break;
    case 39: // Right arrow
      player.x += player.speed;
      break;
    case 40: // Down arrow
      player.y += player.speed;
      break;
  }
  
  // Check if the player collided with the cube
  if (
    player.x > cube.x - cubeSize / 2 &&
    player.x < cube.x + cubeSize / 2 &&
    player.y > cube.y - cubeSize / 2 &&
    player.y < cube.y + cubeSize / 2
  ) {
    alert("You win!");
  }
  
  // Redraw the game
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#f0f0f0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ff0000";
  ctx.fillRect(
    cube.x - cubeSize / 2,
    cube.y - cubeSize / 2,
    cubeSize,
    cubeSize
  );
  ctx.fillStyle = "#0000ff";
  ctx.beginPath();
  ctx.arc(player.x, player.y, 10, 0, 2 * Math.PI);
  ctx.fill();
});
