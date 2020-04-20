import * as p5 from 'p5';
import Tile, { TILE_WIDTH, TILE_HEIGHT } from './tile';
import { loadSprites } from './sprites';

const ROWS = 8, COLUMNS = 8;

const canvas = new p5((sketch: p5) => {
  let tiles: Tile[][];
  const sprites = loadSprites(sketch);

  sketch.setup = () => {
    sketch.createCanvas(COLUMNS * TILE_WIDTH, ROWS * TILE_HEIGHT);
    tiles = [];
    for (let i = 0; i < ROWS; i++) {
      tiles[i] = [];
      for (let j = 0; j < COLUMNS; j++) {
        tiles[i][j] = new Tile(j, i, sprites.floor_1);
      }
    }
  }

  sketch.draw = () => {
    tiles.forEach(row => row.forEach(tile =>
      tile.draw(sketch)
    ))
  }
});
