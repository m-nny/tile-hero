import * as p5 from 'p5';

import spriteSheet from '../assets/0x72_DungeonTilesetII_v1.3.png';

console.log(spriteSheet);

var x, y;

console.log('!@#', x, y);

const sketch = new p5((p5) => {
  const sprite = p5.loadImage(spriteSheet);
  const floor_1 = sprite.get(16, 64, 16, 16);
  p5.setup = () => {
    p5.createCanvas(800, 600);
    x = 100;
    y = 300;
  }


  p5.draw = () => {
    p5.background(64);
    p5.rect(x, y, 100, 100);
    x = (x + 10) % 800;
    p5.image(floor_1, x, y);
  }
});