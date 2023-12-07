console.log('findPointsInGrid.js loaded.');

const fs = require('fs');
const csv = require('csv-parser');

const X_MIN = 40;
const X_MAX = 70;
const Y_MIN = 30;
const Y_MAX = 70;

const points = [];

fs.createReadStream('list.csv')
    .pipe(csv())
    .on('data', (row) => {
        points.push([Number(row.x), Number(row.y)]);
    })
    .on('end', () => {
        //console.log('Points loaded.');
        //console.log(points);
        const filtered = points.filter(point => point[0] >= X_MIN 
                                             && point[0] <= X_MAX
                                             && point[1] >= Y_MIN 
                                             && point[1] <= Y_MAX);
        console.log(filtered);
    });



    

