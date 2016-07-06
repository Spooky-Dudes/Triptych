class Map {
  constructor() {
    this.layout = [[]];
    this.entities = {};
  }

  getTile(x,y) {
    return this.layout[y][x];
  }

  getEntity(x,y) {
    return this.entities[y][x];
  }

  loadMap() {
    
  }
}

export default Map;
