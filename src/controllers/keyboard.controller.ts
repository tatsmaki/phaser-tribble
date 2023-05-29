class KeyboardController {
  a = false
  w = false
  s = false
  d = false

  constructor() {
    document.onkeydown = this.handleKeyDown.bind(this)
    document.onkeyup = this.handleKeyUp.bind(this)
  }

  private handleKeyDown(event: KeyboardEvent) {
    switch (event.code) {
      case 'KeyA': {
        this.a = true
        break
      }
      case 'KeyW': {
        this.w = true
        break
      }
      case 'KeyS': {
        this.s = true
        break
      }
      case 'KeyD': {
        this.d = true
        break
      }
      default: {
        break
      }
    }
  }

  private handleKeyUp(event: KeyboardEvent) {
    switch (event.code) {
      case 'KeyA': {
        this.a = false
        break
      }
      case 'KeyW': {
        this.w = false
        break
      }
      case 'KeyS': {
        this.s = false
        break
      }
      case 'KeyD': {
        this.d = false
        break
      }
      default: {
        break
      }
    }
  }
}

export const keyboardController = new KeyboardController()
