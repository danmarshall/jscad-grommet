const grommet = require('./index');

const params = {
    wallDiameter: 50,
    wall: 1,
    wallHeight: 25,
    rimWidth: 5,
    rimHeight: 1,
    resolution: 64
};

const test = grommet(params);

console.log(test.toCompactBinary());
