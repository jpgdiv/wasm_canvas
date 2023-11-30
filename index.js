// For more comments about what's going on here, check out the `hello_world`
// example.
import('./pkg')
  .catch(console.error);

import { add } from './pkg';

function example1() {
  console.log(`adding 1 en 2: ${add(1,2)}`)
}

window.example1 = example1;