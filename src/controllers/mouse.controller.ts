class MouseController {
  isPressed = false
  x = 0
  y = 0

  constructor() {
    document.onmousedown = this.handleMouseDown.bind(this)
    document.onmousemove = this.handleMouseMove.bind(this)
    document.onmouseup = this.handleMouseUp.bind(this)
  }

  handleMouseDown() {
    this.isPressed = true
  }

  handleMouseMove(event: MouseEvent) {
    if (this.isPressed) {
      this.x = event.clientX - window.innerWidth / 2
      this.y = event.clientY - window.innerHeight / 2
    }
  }

  handleMouseUp() {
    this.isPressed = false
  }
}

export const mouseController = new MouseController()
