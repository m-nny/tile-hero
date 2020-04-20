import * as p5 from 'p5';
import spriteSheetLocation from '../assets/0x72_DungeonTilesetII_v1.3.png';
const spriteMap: Sprite[] = require('../assets/tiles_list_v1.3.json');

export type SpriteNames = "wall_top_left" | "wall_top_mid" | "wall_top_right" | "wall_left" | "wall_mid" | "wall_right" | "wall_fountain_top" | "wall_fountain_mid_red_anim" | "wall_fountain_basin_red_anim" | "wall_fountain_mid_blue_anim" | "wall_fountain_basin_blue_anim" | "wall_hole_1" | "wall_hole_2" | "wall_banner_red" | "wall_banner_blue" | "wall_banner_green" | "wall_banner_yellow" | "column_top" | "column_mid" | "coulmn_base" | "wall_column_top" | "wall_column_mid" | "wall_coulmn_base" | "wall_goo" | "wall_goo_base" | "floor_1" | "floor_2" | "floor_3" | "floor_4" | "floor_5" | "floor_6" | "floor_7" | "floor_8" | "floor_ladder" | "floor_spikes_anim" | "wall_side_top_left" | "wall_side_top_right" | "wall_side_mid_left" | "wall_side_mid_right|wall_side_front_left|wall_side_front_right|wall_corner_top_left|wall_corner_top_right|wall_corner_left|wall_corner_right|wall_corner_bottom_left|wall_corner_bottom_right|wall_corner_front_left|wall_corner_front_right|wall_inner_corner_l_top_left|wall_inner_corner_l_top_rigth|wall_inner_corner_mid_left|wall_inner_corner_mid_rigth|wall_inner_corner_t_top_left|wall_inner_corner_t_top_rigth|edge|hole|doors_all|doors_frame_left|doors_frame_top|doors_frame_righ|doors_leaf_closed|doors_leaf_open|chest_empty_open_anim|chest_full_open_anim|chest_mimic_open_anim|flask_big_red|flask_big_blue|flask_big_green|flask_big_yellow|flask_red|flask_blue|flask_green|flask_yellow|skull|crate|coin_anim|ui_heart_full|ui_heart_half|ui_heart_empty|weapon_knife|weapon_rusty_sword|weapon_regular_sword|weapon_red_gem_sword|weapon_big_hammer|weapon_hammer|weapon_baton_with_spikes|weapon_mace|weapon_katana|weapon_saw_sword|weapon_anime_sword|weapon_axe|weapon_machete|weapon_cleaver|weapon_duel_sword|weapon_knight_sword|weapon_golden_sword|weapon_lavish_sword|weapon_red_magic_staff|weapon_green_magic_staff|weapon_spear|tiny_zombie_idle_anim|tiny_zombie_run_anim|goblin_idle_anim|goblin_run_anim|imp_idle_anim|imp_run_anim|skelet_idle_anim|skelet_run_anim|muddy_idle_anim|muddy_run_anim|swampy_idle_anim|swampy_run_anim|zombie_idle_anim|zombie_run_anim|ice_zombie_idle_anim|ice_zombie_run_anim|masked_orc_idle_anim|masked_orc_run_anim|orc_warrior_idle_anim|orc_warrior_run_anim|orc_shaman_idle_anim|orc_shaman_run_anim|necromancer_idle_anim|necromancer_run_anim|wogol_idle_anim|wogol_run_anim|chort_idle_anim|chort_run_anim|big_zombie_idle_anim|big_zombie_run_anim|ogre_idle_anim|ogre_run_anim|big_demon_idle_anim|big_demon_run_anim|elf_f_idle_anim|elf_f_run_anim|elf_f_hit_anim|elf_m_idle_anim|elf_m_run_anim|elf_m_hit_anim|knight_f_idle_anim|knight_f_run_anim|knight_f_hit_anim|knight_m_idle_anim|knight_m_run_anim|knight_m_hit_anim|wizzard_f_idle_anim|wizzard_f_run_anim|wizzard_f_hit_anim|wizzard_m_idle_anim|wizzard_m_run_anim|wizzard_m_hit_anim|lizard_f_idle_anim|lizard_f_run_anim|lizard_f_hit_anim|lizard_m_idle_anim|lizard_m_run_anim|lizard_m_hit_anim";

export type Sprite = {
  name: string,
  x: number,
  y: number,
  w: number,
  h: number,
  animLen: number,
  isAnim: boolean,
  image: p5.Image,
}

export type SpriteMap = Record<SpriteNames, Sprite> & { sheet: p5.Image };

export function loadSpriteSheet(p5: p5) {
  return p5.loadImage(spriteSheetLocation);
}

export function loadSprites(spriteSheet: p5.Image): SpriteMap {
  return spriteMap.reduce((map, sprite) => ({
    [sprite.name]: {
      image: spriteSheet.get(sprite.x, sprite.y, sprite.w, sprite.h),
      ...sprite
    },
    ...map,
  }), { sheet: spriteSheet }) as SpriteMap;
}