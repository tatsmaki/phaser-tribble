import { Game, WEBGL, Types, Core, Utils } from 'phaser'
import { Scene } from './objects/scene'
import './index.css'

Core.TimeStep.prototype.resetDelta = Utils.NOOP

const canvas = document.getElementById('canvas') as HTMLCanvasElement

const config: Types.Core.GameConfig = {
  type: WEBGL,
  render: { transparent: true },
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
      // gravity: { y: 200 }
    }
  },
  canvas,
  scene: Scene
}

const game = new Game(config)
