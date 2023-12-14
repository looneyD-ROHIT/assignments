const fs = require("fs")

const path = require('path')

const location = path.join(__dirname, 'read.txt');
fs.readFile(location, 'utf8', (err, data) => {
    if (err) {
        console.log('cannot read file!!!')
        return;
    }
    console.log(data)
})

// expensive operation
for (let i = 0; i < 10000000000; i++) {
    let mul = i;
    mul = mul * mul * mul * mul;
}