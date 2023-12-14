const fs = require('fs');
const path = require('path');

const location = path.join(__dirname, 'data.txt');

// read data from file
const data = fs.readFileSync(location, { encoding: 'utf-8' })

// clean data
const cleanedData = data.split(" ")
    .map(word => word.trim())
    .filter(word => word.length > 0)
    .join(" ");

// write data to file
fs.writeFileSync(location, cleanedData, { encoding: 'utf-8' })