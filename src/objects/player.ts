import { Physics, Scene } from 'phaser'
import { keyboardController } from '../controllers/keyboard.controller'

export class Player extends Physics.Arcade.Sprite {
  declare body: Physics.Arcade.Body

  constructor(scene: Scene) {
    super(scene, 100, 100, 'idle')
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)

    this.body.setCollideWorldBounds(true)
    this.body.setSize(40, 40)
    this.body.setOffset(40, 40)
    this.setScale(2)

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
    // this.debugShowBody = true
    // this.debugBodyColor = 0x000
  }

  update() {
    const x = Number(keyboardController.d) - Number(keyboardController.a)

    if (x) {
      this.anims.play('run', true)
      this.body.velocity.x = x * 300

      if (x < 0) {
        this.flipX = true
      } else {
        this.flipX = false
      }
    } else {
      this.anims.play('idle', true)
      this.body.setVelocity(0)
    }
  }
}
