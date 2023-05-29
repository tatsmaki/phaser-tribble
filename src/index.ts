import { Game, WEBGL, Types, Core, Utils } from 'phaser'
import { Scene } from './objects/scene'
import './index.css'

Core.TimeStep.prototype.resetDelta = Utils.NOOP

const canvas = document.getElementById('canvas') as HTMLCanvasElement

const config: Types.Core.GameConfig = {
  type: WEBGL,
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  canvas,
  scene: Scene
}

const game = new Game(config)

window.onresize = () => {
  game.scale.resize(window.innerWidth, window.innerHeight)
}
