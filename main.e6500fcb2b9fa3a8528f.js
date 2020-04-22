(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "1mbS":
/*!**************************************************!*\
  !*** ./assets/sprites/lizard_f_idle_anim_f4.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9f445fe2577b2124f8f36fd2acaa8859.png");

/***/ }),

/***/ "1x2n":
/*!*******************************!*\
  !*** ./assets/red_square.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "32b222333c4b6b8523b158941e151fe9.png");

/***/ }),

/***/ "F7op":
/*!***********************************************!*\
  !*** ./assets/0x72_DungeonTilesetII_v1.3.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2ca9143afd0f8154b568ff463a13c8eb.png");

/***/ }),

/***/ "UdTY":
/*!*************************!*\
  !*** ./assets/map.json ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6a20a3f6b501e5698561aa41aa9a7bcb.json");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "ZLgM");
var _0x72_DungeonTilesetII_v1_3_png_1 = __webpack_require__(/*! ../assets/0x72_DungeonTilesetII_v1.3.png */ "F7op");
var red_square_png_1 = __webpack_require__(/*! ../assets/red_square.png */ "1x2n");
var map_json_1 = __webpack_require__(/*! ../assets/map.json */ "UdTY");
var lizard_f_idle_anim_f4_png_1 = __webpack_require__(/*! ../assets/sprites/lizard_f_idle_anim_f4.png */ "1mbS");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
};
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        return _super.call(this, sceneConfig) || this;
    }
    GameScene.prototype.preload = function () {
        this.load.image('dungeon', _0x72_DungeonTilesetII_v1_3_png_1.default);
        this.load.image('red_square', red_square_png_1.default);
        this.load.tilemapTiledJSON('map', map_json_1.default);
        this.load.spritesheet('player', lizard_f_idle_anim_f4_png_1.default, { frameWidth: 16, frameHeight: 28, });
    };
    GameScene.prototype.create = function () {
        var _this = this;
        this.map = this.make.tilemap({ key: 'map' });
        var dungeionTileset = this.map.addTilesetImage('0x72_DungeonTilesetII_v1.3', 'dungeon');
        var floor = this.map.createStaticLayer('Floor', dungeionTileset);
        var obstacles = this.createObstacles();
        var walls = this.map.createStaticLayer('Walls', dungeionTileset);
        var wallTopings = this.map.createStaticLayer('WallTopings', dungeionTileset);
        this.player = this.map.createFromObjects('Player', 'StartingPoint', { key: 'player' })[0];
        // this.player.setSize(16, 8);
        this.physics.add.existing(this.player);
        this.player.body.setOffset(0, 16);
        this.physics.add.collider(obstacles, this.player);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
        this.cameras.main.setZoom(2);
        this.physics.world.createDebugGraphic();
        this.physics.world.drawDebug = false;
        this.input.keyboard.on('keydown_C', function () {
            _this.physics.world.debugGraphic.clear();
            _this.physics.world.drawDebug = !_this.physics.world.drawDebug;
        });
        this.cursors = this.input.keyboard.createCursorKeys();
    };
    GameScene.prototype.createObstacles = function () {
        var _this = this;
        var obstacles = this.map.createFromObjects('Obstacles', 'Wall', { key: 'red_square' });
        obstacles.forEach(function (obs) {
            _this.physics.add.existing(obs);
            obs.setVisible(false).setActive(true);
            obs.body.setImmovable(true).setSize(obs.width, obs.height);
        });
        return obstacles;
    };
    GameScene.prototype.update = function () {
        var _a, _b, _c, _d;
        this.player.body.setVelocity(0);
        if ((_a = this.cursors.up) === null || _a === void 0 ? void 0 : _a.isDown) {
            this.player.body.setVelocityY(-100);
        }
        else if ((_b = this.cursors.down) === null || _b === void 0 ? void 0 : _b.isDown) {
            this.player.body.setVelocityY(100);
        }
        if ((_c = this.cursors.right) === null || _c === void 0 ? void 0 : _c.isDown) {
            this.player.body.setVelocityX(100);
        }
        else if ((_d = this.cursors.left) === null || _d === void 0 ? void 0 : _d.isDown) {
            this.player.body.setVelocityX(-100);
        }
    };
    return GameScene;
}(Phaser.Scene));
var gameConfig = {
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
            debug: false,
        }
    },
    parent: 'game',
    backgroundColor: '#000000',
    scene: GameScene,
    render: {
        pixelArt: true,
    }
};
exports.game = new Phaser.Game(gameConfig);


/***/ })

},[["zUnb","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9saXphcmRfZl9pZGxlX2FuaW1fZjQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWRfc3F1YXJlLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvMHg3Ml9EdW5nZW9uVGlsZXNldElJX3YxLjMucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9tYXAuanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIsMENBQTBDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FoRix1REFBaUM7QUFDakMsb0hBQTZEO0FBQzdELG1GQUFpRDtBQUNqRCx1RUFBeUM7QUFDekMsaUhBQWlFO0FBRWpFLElBQUksV0FBVyxHQUF1QztJQUNwRCxNQUFNLEVBQUUsS0FBSztJQUNiLE9BQU8sRUFBRSxLQUFLO0lBQ2QsR0FBRyxFQUFFLE1BQU07Q0FDWjtBQUdEO0lBQXdCLDZCQUFZO0lBS2xDO2VBQ0Usa0JBQU0sV0FBVyxDQUFDO0lBQ3BCLENBQUM7SUFDTSwyQkFBTyxHQUFkO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLHlDQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLHdCQUFTLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsa0JBQU8sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxtQ0FBTSxFQUFFLEVBQUUsVUFBVSxFQUFF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TSxDQUFDLElBQUk7SUFFakIsS0FBSyxFQUFFO1FBQ0wsS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVO1FBQ3hCLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVztRQUMxQixJQUFJLEVBQUUsQ0FBQztLQUNSO0lBRUQsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFFBQVE7UUFDakIsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLEtBQUs7U0FDYjtLQUNGO0lBRUQsTUFBTSxFQUFFLE1BQU07SUFDZCxlQUFlLEVBQUUsU0FBUztJQUUxQixLQUFLLEVBQUUsU0FBUztJQUVoQixNQUFNLEVBQUU7UUFDTixRQUFRLEVBQUUsSUFBSTtLQUNmO0NBQ0YsQ0FBQztBQUVXLFlBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5lNjUwMGZjYjJiOWZhM2E4NTI4Zi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5ZjQ0NWZlMjU3N2IyMTI0ZjhmMzZmZDJhY2FhODg1OS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzJiMjIyMzMzYzRiNmI4NTIzYjE1ODk0MWUxNTFmZTkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjJjYTkxNDNhZmQwZjgxNTRiNTY4ZmY0NjNhMTNjOGViLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2YTIwYTNmNmI1MDFlNTY5ODU2MWFhNDFhYTlhN2JjYi5qc29uXCI7IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB0aWxlcyBmcm9tICcuLi9hc3NldHMvMHg3Ml9EdW5nZW9uVGlsZXNldElJX3YxLjMucG5nJztcclxuaW1wb3J0IHJlcVNxdWFyZSBmcm9tICcuLi9hc3NldHMvcmVkX3NxdWFyZS5wbmcnO1xyXG5pbXBvcnQgdGlsZW1hcCBmcm9tICcuLi9hc3NldHMvbWFwLmpzb24nO1xyXG5pbXBvcnQgbGl6YXJkIGZyb20gJy4uL2Fzc2V0cy9zcHJpdGVzL2xpemFyZF9mX2lkbGVfYW5pbV9mNC5wbmcnO1xyXG5cclxubGV0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gIGFjdGl2ZTogZmFsc2UsXHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAga2V5OiAnR2FtZScsXHJcbn1cclxuXHJcbnR5cGUgQXJkYWNlU3ByaXRlID0gUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSAmIHsgYm9keTogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkJvZHkgfTtcclxuY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwcml2YXRlIHBsYXllciE6IEFyZGFjZVNwcml0ZTtcclxuICBwcml2YXRlIGN1cnNvcnMhOiBQaGFzZXIuVHlwZXMuSW5wdXQuS2V5Ym9hcmQuQ3Vyc29yS2V5cztcclxuICBwcml2YXRlIG1hcCE6IFBoYXNlci5UaWxlbWFwcy5UaWxlbWFwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHByZWxvYWQoKSB7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2R1bmdlb24nLCB0aWxlcylcclxuICAgIHRoaXMubG9hZC5pbWFnZSgncmVkX3NxdWFyZScsIHJlcVNxdWFyZSlcclxuICAgIHRoaXMubG9hZC50aWxlbWFwVGlsZWRKU09OKCdtYXAnLCB0aWxlbWFwKTtcclxuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgncGxheWVyJywgbGl6YXJkLCB7IGZyYW1lV2lkdGg6IDE2LCBmcmFtZUhlaWdodDogMjgsIH0pO1xyXG4gIH1cclxuICBwdWJsaWMgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5tYXAgPSB0aGlzLm1ha2UudGlsZW1hcCh7IGtleTogJ21hcCcgfSk7XHJcbiAgICBsZXQgZHVuZ2Vpb25UaWxlc2V0ID0gdGhpcy5tYXAuYWRkVGlsZXNldEltYWdlKCcweDcyX0R1bmdlb25UaWxlc2V0SUlfdjEuMycsICdkdW5nZW9uJyk7XHJcbiAgICBsZXQgZmxvb3IgPSB0aGlzLm1hcC5jcmVhdGVTdGF0aWNMYXllcignRmxvb3InLCBkdW5nZWlvblRpbGVzZXQpO1xyXG4gICAgbGV0IG9ic3RhY2xlcyA9IHRoaXMuY3JlYXRlT2JzdGFjbGVzKCk7XHJcblxyXG4gICAgbGV0IHdhbGxzID0gdGhpcy5tYXAuY3JlYXRlU3RhdGljTGF5ZXIoJ1dhbGxzJywgZHVuZ2Vpb25UaWxlc2V0KTtcclxuICAgIGxldCB3YWxsVG9waW5ncyA9IHRoaXMubWFwLmNyZWF0ZVN0YXRpY0xheWVyKCdXYWxsVG9waW5ncycsIGR1bmdlaW9uVGlsZXNldCk7XHJcbiAgICB0aGlzLnBsYXllciA9IHRoaXMubWFwLmNyZWF0ZUZyb21PYmplY3RzKCdQbGF5ZXInLCAnU3RhcnRpbmdQb2ludCcsIHsga2V5OiAncGxheWVyJyB9KVswXSBhcyBhbnk7XHJcbiAgICAvLyB0aGlzLnBsYXllci5zZXRTaXplKDE2LCA4KTtcclxuICAgIHRoaXMucGh5c2ljcy5hZGQuZXhpc3RpbmcodGhpcy5wbGF5ZXIpO1xyXG4gICAgdGhpcy5wbGF5ZXIuYm9keS5zZXRPZmZzZXQoMCwgMTYpO1xyXG5cclxuICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIob2JzdGFjbGVzLCB0aGlzLnBsYXllcik7XHJcblxyXG4gICAgdGhpcy5jYW1lcmFzLm1haW4uc3RhcnRGb2xsb3codGhpcy5wbGF5ZXIpO1xyXG4gICAgdGhpcy5jYW1lcmFzLm1haW4uc2V0Qm91bmRzKDAsIDAsIHRoaXMubWFwLndpZHRoSW5QaXhlbHMsIHRoaXMubWFwLmhlaWdodEluUGl4ZWxzKTtcclxuXHJcbiAgICB0aGlzLmNhbWVyYXMubWFpbi5zZXRab29tKDIpO1xyXG5cclxuICAgIHRoaXMucGh5c2ljcy53b3JsZC5jcmVhdGVEZWJ1Z0dyYXBoaWMoKVxyXG4gICAgdGhpcy5waHlzaWNzLndvcmxkLmRyYXdEZWJ1ZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuaW5wdXQua2V5Ym9hcmQub24oJ2tleWRvd25fQycsICgpID0+IHtcclxuICAgICAgdGhpcy5waHlzaWNzLndvcmxkLmRlYnVnR3JhcGhpYy5jbGVhcigpO1xyXG4gICAgICB0aGlzLnBoeXNpY3Mud29ybGQuZHJhd0RlYnVnID0gIXRoaXMucGh5c2ljcy53b3JsZC5kcmF3RGVidWc7XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuY3Vyc29ycyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xyXG4gIH1cclxuICBwcml2YXRlIGNyZWF0ZU9ic3RhY2xlcygpOiBBcmRhY2VTcHJpdGVbXSB7XHJcbiAgICBjb25zdCBvYnN0YWNsZXMgPSB0aGlzLm1hcC5jcmVhdGVGcm9tT2JqZWN0cygnT2JzdGFjbGVzJywgJ1dhbGwnLCB7IGtleTogJ3JlZF9zcXVhcmUnIH0pIGFzIEFyZGFjZVNwcml0ZVtdO1xyXG4gICAgb2JzdGFjbGVzLmZvckVhY2goKG9icykgPT4ge1xyXG4gICAgICB0aGlzLnBoeXNpY3MuYWRkLmV4aXN0aW5nKG9icyk7XHJcbiAgICAgIG9icy5zZXRWaXNpYmxlKGZhbHNlKS5zZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgIG9icy5ib2R5LnNldEltbW92YWJsZSh0cnVlKS5zZXRTaXplKG9icy53aWR0aCwgb2JzLmhlaWdodCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvYnN0YWNsZXM7XHJcbiAgfVxyXG4gIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnBsYXllci5ib2R5LnNldFZlbG9jaXR5KDApO1xyXG5cclxuICAgIGlmICh0aGlzLmN1cnNvcnMudXA/LmlzRG93bikge1xyXG4gICAgICB0aGlzLnBsYXllci5ib2R5LnNldFZlbG9jaXR5WSgtMTAwKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJzb3JzLmRvd24/LmlzRG93bikge1xyXG4gICAgICB0aGlzLnBsYXllci5ib2R5LnNldFZlbG9jaXR5WSgxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmN1cnNvcnMucmlnaHQ/LmlzRG93bikge1xyXG4gICAgICB0aGlzLnBsYXllci5ib2R5LnNldFZlbG9jaXR5WCgxMDApO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnNvcnMubGVmdD8uaXNEb3duKSB7XHJcbiAgICAgIHRoaXMucGxheWVyLmJvZHkuc2V0VmVsb2NpdHlYKC0xMDApXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcclxuICB0aXRsZTogJ1RpbGVIZXJvJyxcclxuXHJcbiAgdHlwZTogUGhhc2VyLkFVVE8sXHJcblxyXG4gIHNjYWxlOiB7XHJcbiAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgIHpvb206IDEsXHJcbiAgfSxcclxuXHJcbiAgcGh5c2ljczoge1xyXG4gICAgZGVmYXVsdDogJ2FyY2FkZScsXHJcbiAgICBhcmNhZGU6IHtcclxuICAgICAgZGVidWc6IGZhbHNlLFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHBhcmVudDogJ2dhbWUnLFxyXG4gIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnLFxyXG5cclxuICBzY2VuZTogR2FtZVNjZW5lLFxyXG5cclxuICByZW5kZXI6IHtcclxuICAgIHBpeGVsQXJ0OiB0cnVlLFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpOyJdLCJzb3VyY2VSb290IjoiIn0=