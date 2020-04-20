import * as p5 from 'p5';
import { loadSprites, SpriteMap, loadSpriteSheet } from './sprites';
import Entity from './Entity';
import { TILE_WIDTH, COLUMNS, ROWS, TILE_HEIGHT } from './constants';

const sketch = new p5((p5: p5) => {
  let sprites: SpriteMap;
  let spriteSheet: p5.Image;

  let tiles: Entity[][] = [];

  p5.preload = () => {
    spriteSheet = loadSpriteSheet(p5);
  }

  p5.setup = () => {
    sprites = loadSprites(spriteSheet);
    p5.createCanvas(COLUMNS * TILE_WIDTH, ROWS * TILE_HEIGHT);
    p5.noSmooth();
    for (let i = 0; i < ROWS; i++) {
      tiles[i] = [];
      for (let j = 0; j < COLUMNS; j++) {
        tiles[i][j] = new Entity(j, i, sprites.floor_1);
      }
    }
  }

  p5.draw = () => {
    p5.background(128);
    tiles.forEach(r => r.forEach(t => t.draw(p5)));
  }
});