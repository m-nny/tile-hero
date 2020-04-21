import * as Phaser from 'phaser';
import tiles from '../assets/0x72_DungeonTilesetII_v1.3.png';
import tilemap from '../assets/map.json';
import lizard from '../assets/sprites/lizard_f_idle_anim_f4.png';

let sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
}

class GameScene extends Phaser.Scene {
  private player!: Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body };
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private debugGraphics!: Phaser.GameObjects.Graphics;
  private map!: Phaser.Tilemaps.Tilemap;
  private showDebug = false;

  constructor() {
    super(sceneConfig);
  }
  public preload() {
    this.load.image('dungeon', tiles)
    this.load.tilemapTiledJSON('map', tilemap);
    this.load.spritesheet('player', lizard, { frameWidth: 16, frameHeight: 28, });
  }
  public create() {
    this.map = this.make.tilemap({ key: 'map' });
    let tiles = this.map.addTilesetImage('0x72_DungeonTilesetII_v1.3', 'dungeon');
    let floor = this.map.createStaticLayer('Floor', tiles);
    let walls = this.map.createStaticLayer('Walls', tiles);
    walls.setCollisionByProperty({ collides: true });

    this.player = this.map.createFromObjects('Player', 'StartingPoint', { key: 'player' })[0] as any;
    this.player.setSize(16, 16);
    this.physics.add.existing(this.player);
    this.physics.add.collider(walls, this.player);
    this.player.body.setOffset(0, 12);

    this.cameras.main.startFollow(this.player);
    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);

    this.cameras.main.setZoom(2);

    this.debugGraphics = this.add.graphics();

    this.input.keyboard.on('keydown_C', () => {
      this.showDebug = !this.showDebug;
      this.drawDebug();
    })

    this.cursors = this.input.keyboard.createCursorKeys();
  }
  public update(_: never, delta: number) {
    this.player.body.setVelocity(0);

    if (this.cursors.up?.isDown) {
      this.player.body.setVelocityY(-100);
    } else if (this.cursors.down?.isDown) {
      this.player.body.setVelocityY(100);
    }

    if (this.cursors.right?.isDown) {
      this.player.body.setVelocityX(100);
    } else if (this.cursors.left?.isDown) {
      this.player.body.setVelocityX(-100)
    }
  }
  private drawDebug() {
    this.debugGraphics.clear();
    if (this.showDebug) {
      this.map.renderDebug(this.debugGraphics, {
        tileColor: null,
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 200),
        faceColor: new Phaser.Display.Color(40, 39, 37, 255),
      })
    }
  }
}

let gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'TileHero',

  type: Phaser.AUTO,

  scale: {
    width: window.innerWidth,
    height: window.innerHeight,
    zoom: 1,
  },

  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    }
  },

  parent: 'game',
  backgroundColor: '#000000',

  scene: GameScene,

  render: {
    pixelArt: true,
  }
};

export const game = new Phaser.Game(gameConfig);