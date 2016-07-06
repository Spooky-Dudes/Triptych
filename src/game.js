import World from './classes/world.js';
import Renderer from './classes/renderer.js';

const world = new World();
const renderer = new Renderer();

world.randMap();
console.log(world.getDrawableTiles(0,0));
renderer.renderWorld(world.getDrawableTiles(0,0));
