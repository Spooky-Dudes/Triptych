import tiles from '../constants/tiles.js';

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

  loadMap(cb) {
    const base_image = new Image();
    base_image.src = '/assets/map.png';

    base_image.onload = () => {
      const canvas = document.createElement('canvas'),
        context = canvas.getContext('2d');

      const width = base_image.width;
      const height = base_image.height;
      canvas.width = width;
      canvas.height = height;

      context.drawImage(base_image, 0, 0, width, height);

      const colordata = context.getImageData(0, 0, width, height).data;

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

        if(r == 0 && g == 0 && b == 0) {
          // grass

          const NewValue = (((a) * (0.99)) / (255));
          currentrow.push(0 + NewValue);
        } else if (r === 0 && g === 0 && b === 255) {
          currentrow.push(1);
        } else {
          const x = i % width;
          const y = Math.floor(i / width);
          console.log(`Map Error: Tile number ${i} (co-ordinates: ${x}, ${y}) cannot be recognized. Color values: ${r}; ${g}; ${b}; ${a}`);
          alert('Whoops! Something went terribly wrong.');
          return;
        }

      }

      // surround map with water
      const filler = new Array(this.map[0].length).join('1').split('');

      this.map.unshift(filler);
      this.map.push(filler);

      for (let i = 0; i < this.map.length; i++) {
        this.map[i].unshift(1);
        this.map[i].push(1);
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

  canMove(x,y) {
    const tile = this.getTile(x,y);

    return (tiles[Math.floor(tile)].tile.passable);
  }
}

export default World;
