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
exports.game = new Phaser.Game(gameConfig);


/***/ })

},[["zUnb","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9saXphcmRfZl9pZGxlX2FuaW1fZjQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWRfc3F1YXJlLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvMHg3Ml9EdW5nZW9uVGlsZXNldElJX3YxLjMucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9tYXAuanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIsMENBQTBDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FoRix1REFBaUM7QUFDakMsb0hBQTZEO0FBQzdELG1GQUFpRDtBQUNqRCx1RUFBeUM7QUFDekMsaUhBQWlFO0FBRWpFLElBQUksV0FBVyxHQUF1QztJQUNwRCxNQUFNLEVBQUUsS0FBSztJQUNiLE9BQU8sRUFBRSxLQUFLO0lBQ2QsR0FBRyxFQUFFLE1BQU07Q0FDWjtBQUdEO0lBQXdCLDZCQUFZO0lBS2xDO2VBQ0Usa0JBQU0sV0FBVyxDQUFDO0lBQ3BCLENBQUM7SUFDTSwyQkFBTyxHQUFkO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLHlDQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLHdCQUFTLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsa0JBQU8sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxtQ0FBTSxFQUFFLEVBQUUsVUFBVSxFQUFF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LENBQUM7S0FDUjtJQUVELE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxJQUFJO1NBQ1o7S0FDRjtJQUVELE1BQU0sRUFBRSxNQUFNO0lBQ2QsZUFBZSxFQUFFLFNBQVM7SUFFMUIsS0FBSyxFQUFFLFNBQVM7SUFFaEIsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFLElBQUk7S0FDZjtDQUNGLENBQUM7QUFFVyxZQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uMDczMDg2MjBmODYwMjE4M2RkMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWY0NDVmZTI1NzdiMjEyNGY4ZjM2ZmQyYWNhYTg4NTkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjMyYjIyMjMzM2M0YjZiODUyM2IxNTg5NDFlMTUxZmU5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyY2E5MTQzYWZkMGY4MTU0YjU2OGZmNDYzYTEzYzhlYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmEyMGEzZjZiNTAxZTU2OTg1NjFhYTQxYWE5YTdiY2IuanNvblwiOyIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgdGlsZXMgZnJvbSAnLi4vYXNzZXRzLzB4NzJfRHVuZ2VvblRpbGVzZXRJSV92MS4zLnBuZyc7XHJcbmltcG9ydCByZXFTcXVhcmUgZnJvbSAnLi4vYXNzZXRzL3JlZF9zcXVhcmUucG5nJztcclxuaW1wb3J0IHRpbGVtYXAgZnJvbSAnLi4vYXNzZXRzL21hcC5qc29uJztcclxuaW1wb3J0IGxpemFyZCBmcm9tICcuLi9hc3NldHMvc3ByaXRlcy9saXphcmRfZl9pZGxlX2FuaW1fZjQucG5nJztcclxuXHJcbmxldCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ0dhbWUnLFxyXG59XHJcblxyXG50eXBlIEFyZGFjZVNwcml0ZSA9IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUgJiB7IGJvZHk6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Cb2R5IH07XHJcbmNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHJpdmF0ZSBwbGF5ZXIhOiBBcmRhY2VTcHJpdGU7XHJcbiAgcHJpdmF0ZSBjdXJzb3JzITogUGhhc2VyLlR5cGVzLklucHV0LktleWJvYXJkLkN1cnNvcktleXM7XHJcbiAgcHJpdmF0ZSBtYXAhOiBQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgfVxyXG4gIHB1YmxpYyBwcmVsb2FkKCkge1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdkdW5nZW9uJywgdGlsZXMpXHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3JlZF9zcXVhcmUnLCByZXFTcXVhcmUpXHJcbiAgICB0aGlzLmxvYWQudGlsZW1hcFRpbGVkSlNPTignbWFwJywgdGlsZW1hcCk7XHJcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3BsYXllcicsIGxpemFyZCwgeyBmcmFtZVdpZHRoOiAxNiwgZnJhbWVIZWlnaHQ6IDI4LCB9KTtcclxuICB9XHJcbiAgcHVibGljIGNyZWF0ZSgpIHtcclxuICAgIHRoaXMubWFwID0gdGhpcy5tYWtlLnRpbGVtYXAoeyBrZXk6ICdtYXAnIH0pO1xyXG4gICAgbGV0IGR1bmdlaW9uVGlsZXNldCA9IHRoaXMubWFwLmFkZFRpbGVzZXRJbWFnZSgnMHg3Ml9EdW5nZW9uVGlsZXNldElJX3YxLjMnLCAnZHVuZ2VvbicpO1xyXG4gICAgbGV0IGZsb29yID0gdGhpcy5tYXAuY3JlYXRlU3RhdGljTGF5ZXIoJ0Zsb29yJywgZHVuZ2Vpb25UaWxlc2V0KTtcclxuICAgIGxldCBvYnN0YWNsZXMgPSB0aGlzLmNyZWF0ZU9ic3RhY2xlcygpO1xyXG4gICAgXHJcbiAgICBsZXQgd2FsbHMgPSB0aGlzLm1hcC5jcmVhdGVTdGF0aWNMYXllcignV2FsbHMnLCBkdW5nZWlvblRpbGVzZXQpO1xyXG4gICAgbGV0IHdhbGxUb3BpbmdzID0gdGhpcy5tYXAuY3JlYXRlU3RhdGljTGF5ZXIoJ1dhbGxUb3BpbmdzJywgZHVuZ2Vpb25UaWxlc2V0KTtcclxuICAgIHRoaXMucGxheWVyID0gdGhpcy5tYXAuY3JlYXRlRnJvbU9iamVjdHMoJ1BsYXllcicsICdTdGFydGluZ1BvaW50JywgeyBrZXk6ICdwbGF5ZXInIH0pWzBdIGFzIGFueTtcclxuICAgIC8vIHRoaXMucGxheWVyLnNldFNpemUoMTYsIDgpO1xyXG4gICAgdGhpcy5waHlzaWNzLmFkZC5leGlzdGluZyh0aGlzLnBsYXllcik7XHJcbiAgICB0aGlzLnBsYXllci5ib2R5LnNldE9mZnNldCgwLCAxNik7XHJcblxyXG4gICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihvYnN0YWNsZXMsIHRoaXMucGxheWVyKTtcclxuXHJcbiAgICB0aGlzLmNhbWVyYXMubWFpbi5zdGFydEZvbGxvdyh0aGlzLnBsYXllcik7XHJcbiAgICB0aGlzLmNhbWVyYXMubWFpbi5zZXRCb3VuZHMoMCwgMCwgdGhpcy5tYXAud2lkdGhJblBpeGVscywgdGhpcy5tYXAuaGVpZ2h0SW5QaXhlbHMpO1xyXG5cclxuICAgIHRoaXMuY2FtZXJhcy5tYWluLnNldFpvb20oMik7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5rZXlib2FyZC5vbigna2V5ZG93bl9DJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnBoeXNpY3Mud29ybGQuZGVidWdHcmFwaGljLmNsZWFyKCk7XHJcbiAgICAgIHRoaXMucGh5c2ljcy53b3JsZC5kcmF3RGVidWcgPSAhdGhpcy5waHlzaWNzLndvcmxkLmRyYXdEZWJ1ZztcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5jdXJzb3JzID0gdGhpcy5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XHJcbiAgfVxyXG4gIHByaXZhdGUgY3JlYXRlT2JzdGFjbGVzKCk6IEFyZGFjZVNwcml0ZVtdIHtcclxuICAgIGNvbnN0IG9ic3RhY2xlcyA9IHRoaXMubWFwLmNyZWF0ZUZyb21PYmplY3RzKCdPYnN0YWNsZXMnLCAnV2FsbCcsIHsga2V5OiAncmVkX3NxdWFyZScgfSkgYXMgQXJkYWNlU3ByaXRlW107XHJcbiAgICBvYnN0YWNsZXMuZm9yRWFjaCgob2JzKSA9PiB7XHJcbiAgICAgIHRoaXMucGh5c2ljcy5hZGQuZXhpc3Rpbmcob2JzKTtcclxuICAgICAgb2JzLnNldFZpc2libGUoZmFsc2UpLnNldEFjdGl2ZSh0cnVlKTtcclxuICAgICAgb2JzLmJvZHkuc2V0SW1tb3ZhYmxlKHRydWUpLnNldFNpemUob2JzLndpZHRoLCBvYnMuaGVpZ2h0KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9ic3RhY2xlcztcclxuICB9XHJcbiAgcHVibGljIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMucGxheWVyLmJvZHkuc2V0VmVsb2NpdHkoMCk7XHJcblxyXG4gICAgaWYgKHRoaXMuY3Vyc29ycy51cD8uaXNEb3duKSB7XHJcbiAgICAgIHRoaXMucGxheWVyLmJvZHkuc2V0VmVsb2NpdHlZKC0xMDApO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnNvcnMuZG93bj8uaXNEb3duKSB7XHJcbiAgICAgIHRoaXMucGxheWVyLmJvZHkuc2V0VmVsb2NpdHlZKDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY3Vyc29ycy5yaWdodD8uaXNEb3duKSB7XHJcbiAgICAgIHRoaXMucGxheWVyLmJvZHkuc2V0VmVsb2NpdHlYKDEwMCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3Vyc29ycy5sZWZ0Py5pc0Rvd24pIHtcclxuICAgICAgdGhpcy5wbGF5ZXIuYm9keS5zZXRWZWxvY2l0eVgoLTEwMClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmxldCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xyXG4gIHRpdGxlOiAnVGlsZUhlcm8nLFxyXG5cclxuICB0eXBlOiBQaGFzZXIuQVVUTyxcclxuXHJcbiAgc2NhbGU6IHtcclxuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgem9vbTogMSxcclxuICB9LFxyXG5cclxuICBwaHlzaWNzOiB7XHJcbiAgICBkZWZhdWx0OiAnYXJjYWRlJyxcclxuICAgIGFyY2FkZToge1xyXG4gICAgICBkZWJ1ZzogdHJ1ZSxcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBwYXJlbnQ6ICdnYW1lJyxcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwJyxcclxuXHJcbiAgc2NlbmU6IEdhbWVTY2VuZSxcclxuXHJcbiAgcmVuZGVyOiB7XHJcbiAgICBwaXhlbEFydDogdHJ1ZSxcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTsiXSwic291cmNlUm9vdCI6IiJ9