import { Scene as PScene } from 'phaser'
import idle from 'public/assets/idle.png'
import run from 'public/assets/run.png'
import snow from 'public/assets/snow.png'
import red from 'public/assets/red.png'
import { Player } from './player'
import { Level } from './level'
import { Attack } from './attack'

export class Scene extends PScene {
  private level!: Level
  private player!: Player
  private attack!: Attack

  preload() {
    this.load.spritesheet('idle', idle, {
      frameWidth: 1000,
      frameHeight: 1000
    })
    this.load.spritesheet('run', run, {
      frameWidth: 1000,
      frameHeight: 1000
    })
    this.load.image('snow', snow)
    this.load.image('red', red)
  }

  create() {
    // this.add.tileSprite(0, 0, 1000, 1000, 'snow')
    this.level = new Level(this)
    this.player = new Player(this)

    this.physics.world.addCollider(this.level, this.player)
    this.cameras.main.startFollow(this.player)
    this.cameras.main.setZoom(0.5)

    this.attack = new Attack(this, this.player)
    // this.physics.world.addCollider(this.level, this.attack)
  }

  update() {
    this.player.update()
    this.attack.update()
  }
}
