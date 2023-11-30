// For more comments about what's going on here, check out the `hello_world`
// example.
import('./pkg')
  .catch(console.error);

import { add, draw_image } from './pkg';

function example1() {
  console.log(`adding 1 en 2: ${add(1,2)}`)
}

function example2() {
  draw_image()
}

window.example1 = example1;
window.example2 = example2;