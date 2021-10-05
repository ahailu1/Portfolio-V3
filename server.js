const express = require('express');
const app = express();
const port = 4000;
let path = require('path');
const static = path.join(__dirname, 'dist');
app.use(express.static(static));
app.get('/', (req, res) => {

    console.log('righthere');
    console.log('testing buddy')
    let htmlFile = path.join(__dirname, 'index.html');
    res.sendFile(htmlFile)
});

app.listen(port, () => {
console.log('its working');
});