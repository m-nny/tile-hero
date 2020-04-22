import * as Phaser from 'phaser';
import tiles from '../assets/0x72_DungeonTilesetII_v1.3.png';
import reqSquare from '../assets/red_square.png';
import tilemap from '../assets/map.json';
import lizard from '../assets/sprites/lizard_f_idle_anim_f4.png';

let sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
}

type ArdaceSprite = Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body };
class GameScene extends Phaser.Scene {
  private player!: ArdaceSprite;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private map!: Phaser.Tilemaps.Tilemap;

  constructor() {
    super(sceneConfig);
  }
  public preload() {
    this.load.image('dungeon', tiles)
    this.load.image('red_square', reqSquare)
    this.load.tilemapTiledJSON('map', tilemap);
    this.load.spritesheet('player', lizard, { frameWidth: 16, frameHeight: 28, });
  }
  public create() {
    this.map = this.make.tilemap({ key: 'map' });
    let dungeionTileset = this.map.addTilesetImage('0x72_DungeonTilesetII_v1.3', 'dungeon');
    let floor = this.map.createStaticLayer('Floor', dungeionTileset);
    let obstacles = this.createObstacles();
    
    let walls = this.map.createStaticLayer('Walls', dungeionTileset);
    let wallTopings = this.map.createStaticLayer('WallTopings', dungeionTileset);
    this.player = this.map.createFromObjects('Player', 'StartingPoint', { key: 'player' })[0] as any;
    // this.player.setSize(16, 8);
    this.physics.add.existing(this.player);
    this.player.body.setOffset(0, 16);

    this.physics.add.collider(obstacles, this.player);

    this.cameras.main.startFollow(this.player);
    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);

    this.cameras.main.setZoom(2);

    this.input.keyboard.on('keydown_C', () => {
      this.physics.world.debugGraphic.clear();
      this.physics.world.drawDebug = !this.physics.world.drawDebug;
    })

    this.cursors = this.input.keyboard.createCursorKeys();
  }
  private createObstacles(): ArdaceSprite[] {
    const obstacles = this.map.createFromObjects('Obstacles', 'Wall', { key: 'red_square' }) as ArdaceSprite[];
    obstacles.forEach((obs) => {
      this.physics.add.existing(obs);
      obs.setVisible(false).setActive(true);
      obs.body.setImmovable(true).setSize(obs.width, obs.height);
    });
    return obstacles;
  }
  public update() {
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