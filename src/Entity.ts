import * as p5 from "p5";
import { Sprite } from "./sprites";
import { TILE_WIDTH, TILE_HEIGHT } from "./constants";


class Entity {
  constructor(private x: number, private y: number, private sprite: Sprite) {

  }
  draw(p5: p5) {
    p5.image(this.sprite.image, this.x * TILE_WIDTH, this.y * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
  }
}

export default Entity;