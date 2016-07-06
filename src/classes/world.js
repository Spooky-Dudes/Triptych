class World {
  constructor() {
    this.layout = [
      []
    ];
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

      for (var i = 0; i < colordata.length; i = i + 4) {
        r = colordata[i];
        g = colordata[i + 1];
        b = colordata[i + 2];

        // do something
      }
    }
  }
}

export default Map;
