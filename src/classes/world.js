class World {
  constructor() {
    this.map = [];
    this.entities = {};
  }


  getTile(x,y) {
    return this.map[y][x];
  }

  getEntity(x, y) {
    return this.entities[y][x];
  }

  loadMap(cb) {
    const base_image = new Image();
    base_image.src = '../assets/map.png';

    base_image.onload = function() {
      const canvas = document.createElement('canvas'),
        context = canvas.getContext('2d');

      const width = base_image.width;
      const height = base_image.height;
      canvas.width = width;
      canvas.height = height;

      context.drawImage(base_image, 0, 0, width, height);

      const colordata = context.getImageData(0, 0, width, height);

      let currentrow = [];
      for (let i = 0; i < (colordata.length / 4); i++) {
        const r = colordata[(i * 4)];
        const g = colordata[(i * 4) + 1];
        const b = colordata[(i * 4) + 2];
        const a = colordata[(i * 4) + 3];

        if(i % width == 0) {
          // A new horizontal row needs to be created.
          if(i !== 0) {
            this.map.push(currentrow);
          }
          currentrow = [];
        }

        if(r == 255 && g == 255 && b == 255) {
          // grass
          currentrow.push(0);
        } else {
          const x = i % width;
          const y = Math.floor(i / width);
          console.log(`Map Error: Tile number ${i} (co-ordinates: ${x}, ${y}") cannot be recognized. Color values: ${r}; ${g}; ${b}; ${a}`);
          alert('Whoops! Something went terribly wrong.');
          return;
        }


      }

      cb();

    };

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
