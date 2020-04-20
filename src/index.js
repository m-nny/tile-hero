import * as p5 from 'p5';

var x, y;

console.log('!@#', x, y);

const sketch = new p5((p5) => {
  p5.setup = () => {
    p5.createCanvas(800, 600);
    x = 100;
    y = 300;
  }


  p5.draw = () => {
    p5.background(64);
    p5.rect(x, y, 100, 100);
    x = (x + 10) % 800;
  }
});