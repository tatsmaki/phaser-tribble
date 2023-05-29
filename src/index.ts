import { Core, Utils } from 'phaser'
import { Game } from './objects/game'
import './index.css'

Core.TimeStep.prototype.resetDelta = Utils.NOOP

new Game()
