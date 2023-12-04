const elem = document.getElementById("fps");
let lastLoop = new Date().getMilliseconds();
let fps = 0;
let count = 1;

function gameLoop() {
  const thisLoop = new Date().getMilliseconds();
  if (lastLoop > thisLoop) {
    fps = count;
    count = 1;
  } else {
    count += 1;
  }
  lastLoop = thisLoop;
}
function displayLoop() {
  elem.innerText = fps;
  requestAnimationFrame(function () {
    gameLoop();
    displayLoop();
  });
}
displayLoop();
