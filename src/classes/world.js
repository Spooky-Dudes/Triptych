class World {
  constructor() {
    this.layout = [];
    this.entities = {};
  }

  getTile(x, y) {
    return this.layout[y][x];
  }

  getEntity(x, y) {
    return this.entities[y][x];
  }

  loadMap() {
    base_image = new Image();
    base_image.src = 'src/assets/map.png';

    base_image.onload = function() {
      var canvas = document.createElement("canvas"),
        context = canvas.getContext('2d');

      var width = base_image.width;
      var height = base_image.height;
      canvas.width = width;
      canvas.height = height;

      context.drawImage(base_image, 0, 0, width, height);

      var colordata = context.getImageData(0, 0, width, height);

      var currentrow = [];
      for (var i = 0; i < (colordata.length / 4); i++) {
        var r = colordata[(i * 4)];
        var g = colordata[(i * 4) + 1];
        var b = colordata[(i * 4) + 2];
        var a = colordata[(i * 4) + 3];

        if(i % width == 0) {
          // A new horizontal row needs to be created.
          if(i !== 0) {
            this.layout.push(currentrow);
          }
          currentrow = [];
        }

        if(r == 255 && g == 255 && b == 255) {
          // grass
          currentrow.push(0);
        } else {
          x = i % width;
          y = Math.floor(i / width);
          console.log("Map Error: Tile number " + i + " (co-ordinates: " x + ", " + y + ") cannot be recognized. Color values: " + r + " ;" + g + " ; " + b " ; " + a)
          alert("Whoops! Something went terribly wrong.");
          return
        }

      }
    }
  }
}

export default Map;
