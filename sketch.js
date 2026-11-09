function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();
}
function draw() {
  background(20);

  let colunas = floor(map(mouseX, 0, width, 3, 20));
  let tam = width / colunas;
  let linhas = ceil(height / tam)
  
  for (let i = 0; i < colunas; i++) {
    for (let j = 0; j < colunas; j++) {

      let x = i * tam + tam / 2;
      let y = j * tam + tam / 2;

      let d = dist(mouseX, mouseY, x, y);
      let angulo = map(d, 0, width, 0, PI) + frameCount * 0.02;

      if (d < 120) {
        fill(255, 100, 100);
      } else {
        fill(100, 180, 255);
      }
      push();
      translate(x, y);
      rotate(angulo);
      rect(0, 0, tam * 0.8, tam * 0.15);
      pop();
    }
  }
}