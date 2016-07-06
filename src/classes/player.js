class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  moveTo(x,y) {
    this.x = x;
    this.y = y;
  }

  move(d) {
    switch (d) {
    case 's':
      this.moveS();
      break;
    case 'n':
      this.moveN();
      break;
    case 'e':
      this.moveE();
      break;
    case 'w':
      this.moveW();
      break;
    default:

    }

  }

  moveN() {
    this.y -= 1;
  }

  moveS() {
    this.y += 1;
  }

  moveW() {
    this.x -= 1;
  }

  moveE() {
    this.x += 1;
  }
}

export default Player;
