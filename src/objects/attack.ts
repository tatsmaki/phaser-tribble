import { GameObjects, Math, Scene, Physics } from 'phaser'
import { mouseController } from '../controllers/mouse.controller'
import { Player } from './player'
import { VECTOR2_00 } from '../constants/vector.constants'

export class Attack extends Physics.Arcade.Group {
  // cursor!: GameObjects.Arc
  fire!: GameObjects.Particles.ParticleEmitter

  constructor(scene: Scene, player: Player) {
    super(scene.physics.world, scene)

    // this.cursor = new GameObjects.Arc(scene, 0, 0, 100, 0xffffff)
    // this.cursor.visible = false
    // this.add(this.cursor, true)

    this.fire = this.scene.add.particles(0, 0, 'red', {
      color: [0xfacc22, 0xf89800, 0xf83600, 0x9f0404],
      colorEase: 'quad.out',
      lifespan: 200,
      scale: { start: 2, end: 0, ease: 'sine.out' },
      speed: 100,
      blendMode: 'ADD'
    })
    this.fire.visible = false
    this.fire.startFollow(player)
  }

  startFollow() {}

  update() {
    if (mouseController.isPressed) {
      // this.cursor.visible = true
      this.fire.visible = true

      const target = new Math.Vector2(mouseController.x, mouseController.y)
      // this.cursor.body?.position = target.normalize().scale(400)
      this.fire.followOffset.lerp(target.normalize().scale(400), 0.2)
    } else {
      this.fire.followOffset.lerp(VECTOR2_00, 0.2)
    }

    if (this.fire.followOffset.distance(VECTOR2_00) < 100) {
      // this.cursor.visible = false
      this.fire.visible = false
    }
  }
}
