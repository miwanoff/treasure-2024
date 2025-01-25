const treasure = {
  x: 100,
  y: 200,
};

const map = document.getElementById("map");
console.log(map);
console.log(map.width);
console.log(map.height);
const wrap = document.getElementById("wrap");

wrap.style.width = `${map.width}px`;
wrap.style.height = `${map.height}px`;
wrap.style.position = "relative";

map.onmousemove = function (event) {
  const coords = document.getElementById("coords");
  let distanceX = Math.abs(event.offsetX - treasure.x);
  let distanceY = Math.abs(event.offsetY - treasure.y);
  let x = event.offsetX;
  //... // тут отримуємо значення координат миші x та y від події event
  coords.value = `Координати: ${x}`;
  if (distanceX < 60) {
    // умова, де знаходиться скарб - відстань від координат курсору до координат скарбу менше 30
    let treasureCircle = document.createElement('div');
    treasureCircle.style = "width: 60px; height: 60px; position: absolute; top: 0; left: 0; border: solid red 3px;";
    wrap.appendChild(treasureCircle);
    //alert("Скарб тут!");
  }
};
