const fs = require("fs")

const path = require('path')

const location = path.join(__dirname, 'write.txt');
fs.writeFile(location, 'Hello, I am writing to the file', (err) => {
    if (err) {
        console.log('cannot read file!!!')
        throw err;
    }
})

// expensive operation
for (let i = 0; i < 10000000000; i++) {
    let mul = i;
    mul = mul * mul * mul * mul;
}