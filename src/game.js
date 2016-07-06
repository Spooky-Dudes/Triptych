import World from './classes/world.js';
import Renderer from './classes/renderer.js';
import Player from './classes/player.js';

const world = new World();
const renderer = new Renderer();
const player = new Player(1,1);

let move = '';


// wonder if there's a better way to do this.
renderer.DOM_el[1].addEventListener('click', () => {
  move = 'n';
});
renderer.DOM_el[7].addEventListener('click', () => {
  move = 's';
});
renderer.DOM_el[3].addEventListener('click', () => {
  move = 'w';
});
renderer.DOM_el[5].addEventListener('click', () => {
  move = 'e';
});


world.loadMap(() => requestAnimationFrame(gameLoop));

function gameLoop() {
  if(move !== '') {
    player.move(move, world);
    move = '';
  }
  renderer.renderWorld(world.getDrawableTiles(player.x-1,player.y-1));
  requestAnimationFrame(gameLoop);
}
