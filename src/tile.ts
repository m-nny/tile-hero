import * as p5 from 'p5';
import { Sprite } from './sprites';

export const TILE_HEIGHT = 16, TILE_WIDTH = 16;

class Tile {
  isBlack: boolean;
  constructor(private x: number, private y: number, private sprite: Sprite) {
    this.isBlack = ((x + y) % 2) === 0;
  }
  draw(sketch: p5) {
    sketch.push()
    sketch.translate(this.x * TILE_WIDTH, this.y * TILE_HEIGHT);
    // sketch.noStroke();
    // sketch.fill(this.isBlack ? 64 : 255 - 64);
    // sketch.rect(0, 0, TILE_WIDTH, TILE_HEIGHT);
    sketch.image(this.sprite.image, 0, 0);
    sketch.pop();
  }
}

export default Tile;