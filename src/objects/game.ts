import { Game as PGame, WEBGL, Types } from 'phaser'
import { Scene } from './scene'

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
  canvas: document.getElementById('canvas') as HTMLCanvasElement,
  scene: Scene
}

export class Game extends PGame {
  constructor() {
    super(config)

    window.onresize = this.handleResize.bind(this)
  }

  handleResize() {
    this.scale.resize(window.innerWidth, window.innerHeight)
  }
}
