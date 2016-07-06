class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  moveTo(x,y) {
    this.x = x;
    this.y = y;
  }

  move(d, world) {
    switch (d) {
    case 's':
      this.moveS(world);
      break;
    case 'n':
      this.moveN(world);
      break;
    case 'e':
      this.moveE(world);
      break;
    case 'w':
      this.moveW(world);
      break;
    default:

    }

  }

  moveN(world) {
    if(world.canMove(this.x, this.y-1)) {
      this.y -= 1;
    }
  }

  moveS(world) {
    if(world.canMove(this.x, this.y+1)) {
      this.y += 1;
    }
  }

  moveW(world) {
    if(world.canMove(this.x-1, this.y)) {
      this.x -= 1;
    }
  }

  moveE(world) {
    if(world.canMove(this.x+1, this.y)) {
      this.x += 1;
    }
  }

}

export default Player;
