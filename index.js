var { CAG, CSG } = require('@jscad/csg');

function main(params) {

    const wallRadius = params.wallDiameter / 2;

    const rim = CSG.cylinder({
        start: [0, 0, 0],
        end: [0, 0, params.rimHeight],
        radius: wallRadius + params.rimWidth,
        resolution: params.resolution
    });

    const wall = CSG.cylinder({
        start: [0, 0, params.rimHeight],
        end: [0, 0, params.rimHeight + params.wallHeight],
        radius: wallRadius,
        resolution: params.resolution
    });

    const hole = CSG.cylinder({
        start: [0, 0, 0],
        end: [0, 0, params.wallHeight + params.rimHeight],
        radius: wallRadius - params.wall,
        resolution: params.resolution
    });

    return wall.union(rim).subtract(hole);
}

function getParameterDefinitions() {
    return [
        { name: 'wallDiameter', caption: 'wall outer diameter', type: 'float', initial: 25.4 },
        { name: 'wall', caption: 'wall thickness', type: 'float', initial: 1 },
        { name: 'wallHeight', caption: 'wall height', type: 'float', initial: 19 },
        { name: 'rimWidth', caption: 'rim width', type: 'float', initial: 4 },
        { name: 'rimHeight', caption: 'rim height', type: 'float', initial: 2 },
        { name: 'resolution', caption: 'resolution', type: 'int', initial: 64 }
    ];
}

module.exports = main;
module.exports.getParameterDefinitions = getParameterDefinitions;
