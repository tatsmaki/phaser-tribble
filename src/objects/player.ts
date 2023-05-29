import { Physics, Scene, Math } from 'phaser'
import { keyboardController } from '../controllers/keyboard.controller'
import { PI2 } from '../constants/pi.constants'

export class Player extends Physics.Arcade.Sprite {
  declare body: Physics.Arcade.Body
  private speed = 400

  constructor(scene: Scene) {
    super(scene, 0, 0, 'idle')
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)

    this.body.setSize(800, 800)
    this.setScale(0.2)

    this.anims.create({
      key: 'idle',
      frames: this.scene.anims.generateFrameNames('idle'),
      repeat: -1,
      frameRate: 10
    })
    this.anims.create({
      key: 'run',
      frames: this.scene.anims.generateFrameNames('run'),
      repeat: -1,
      frameRate: 10
    })
    this.tint = 0xe9724f
  }

  update() {
    const x = Number(keyboardController.d) - Number(keyboardController.a)
    const y = Number(keyboardController.s) - Number(keyboardController.w)
    const direction = new Math.Vector2(x, y)

    if (x || y) {
      this.setRotation(direction.angle() + PI2)
      this.anims.play('run', true)
      this.body.setVelocity(x * this.speed, y * this.speed)
    } else {
      this.anims.play('idle', true)
      this.body.setVelocity(0)
    }
  }
}
