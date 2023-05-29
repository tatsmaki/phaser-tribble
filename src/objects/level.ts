import { GameObjects, Physics, Scene } from 'phaser'

export class Level extends Physics.Arcade.StaticGroup {
  constructor(scene: Scene) {
    super(scene.physics.world, scene)

    const objectA = new GameObjects.Rectangle(scene, 200, 200, 200, 200, 0xffffff)
    this.add(objectA, true)
  }
}
