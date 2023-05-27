import { Scene as PScene } from 'phaser'
import idle from 'public/assets/_Idle.png'
import run from 'public/assets/_Run.png'
import { Player } from './player'

export class Scene extends PScene {
  private player!: Player

  preload() {
    this.load.spritesheet('idle', idle, {
      frameWidth: 120,
      frameHeight: 80
    })
    this.load.spritesheet('run', run, {
      frameWidth: 120,
      frameHeight: 80
    })
  }

  create() {
    this.player = new Player(this)
    // this.add.image(400, 300, 'sky')

    // const particles = this.add.particles(0, 0, 'red', {
    //   speed: 100,
    //   scale: { start: 1, end: 0 },
    //   blendMode: 'ADD'
    // })

    // const logo = this.physics.add.image(400, 100, 'logo')
    // const character = new Character(this, 0, 0, 'idle')
    // const character = this.physics.add.sprite(0, 0, 'run')

    // logo.setVelocity(100, 200)
    // logo.setBounce(1, 1)
    // character.setCollideWorldBounds(true)

    // particles.startFollow(character)
  }

  update() {
    this.player.update()
  }
}
