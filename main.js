let container = document.querySelector(".container");
container.addEventListener("mousemove", function (e) {
  let x = e.offsetX;
  let y = e.offsetY;
  let rotateY = (-1 / 5) * x + 20;
  let rotateX = (4 / 30) * y - 20;
  container.style = `transform: perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
