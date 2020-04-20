import * as p5 from 'p5';
import * as spriteMap from '../assets/tiles_list_v1.3.json';

export type Sprite = {
  name: string,
  x: number
  y: number,
  w: number,
  h: number,
  animLen: number,
  isAnim: boolean,
  image: p5.Image,
}

export type SpriteMap = {
  [name: string]: Sprite
}

export function loadSprites(sketch: p5): SpriteMap {
  const spriteSheet = sketch.loadImage('../assets/0x72_DungeonTilesetII_v1.3.png');
  // const spriteMap = sketch.loadJSON('../assets/tiles_list_v1.3.json') as Sprite[];
  console.log(spriteMap);
  const sprites = spriteMap.reduce((sprites, { name, x, y, w, h }) => ({
    [name]: { image: spriteSheet.get(x, y, w, h), x, y, w, h, name },
    ...sprites
  }), {});
  return sprites;
}
