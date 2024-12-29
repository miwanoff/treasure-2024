let treasure = {
  x: 100,
  y: 200,
};

const map = document.getElementById("map");

map.onmousemove = showCoords;

function showCoords(event) {
  let coords = document.getElementById("coords");
  let distanceX = event.offsetX - treasure.x;
  let distanceY = event.offsetY - treasure.y;
  let x = event.offsetX;
  //... // тут отримуємо значення координат миші x та y від події event
  coords.value = "Координати: " + x;
  if (Math.abs(distanceX) < 30) {
    // умова, де знаходиться скарб - відстань від координат курсору до координат скарбу менше 30
    alert("Скарб тут!");
  }
}
