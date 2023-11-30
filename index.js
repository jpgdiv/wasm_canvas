// For more comments about what's going on here, check out the `hello_world`
// example.
import('./pkg')
  .catch(console.error);

import { draw_image } from './pkg';


function drawBlue() {
  draw_image(true)
}

function drawNormal() {
  draw_image(false)
}

window.drawBlue = drawBlue;
window.drawNormal = drawNormal;