class KeyboardController {
  a = false
  d = false

  constructor() {
    document.onkeydown = this.handleKeyDown.bind(this)
    document.onkeyup = this.handleKeyUp.bind(this)
  }

  private handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'a': {
        this.a = true
        break
      }
      case 'd': {
        this.d = true
        break
      }
      default: {
        break
      }
    }
  }

  private handleKeyUp(event: KeyboardEvent) {
    switch (event.key) {
      case 'a': {
        this.a = false
        break
      }
      case 'd': {
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
