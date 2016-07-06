class World {
  constructor() {
    this.map = [];
    this.entities = {};
  }

  getTile(x,y) {
    return this.map[y][x];
  }

  getEntity(x,y) {
    return this.entities[y][x];
  }

  loadMap() {

  }

  randMap() {
    for (let y = 0; y < 99; y++) {
      this.map[y] = [];
      for (let x = 0; x < 99; x++) {
        this.map[y][x] = Math.round(Math.random());
      }
    }
  }

  getDrawableTiles(pX,pY) {
    const tiles = [];

    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        tiles.push(this.map[pY+y][pX+x]);
      }
    }

    return tiles;
  }
}

export default World;
