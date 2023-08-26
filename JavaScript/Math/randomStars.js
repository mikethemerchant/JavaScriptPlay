
/*
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(
    new Float32Array(500), { radius: 0.4 }));

*/

// import * as random from 'maath/random/dist/maath-random.esm';

// const [sphere] = random.inSphere(
//     new Float32Array(500), { radius: 0.4 });

// console.log(sphere);

const THREE = require('three');

const [x, y, z] = Array(3)
.fill()
.map(() => THREE.MathUtils.randFloatSpread(10));

console.log(x, y, z);