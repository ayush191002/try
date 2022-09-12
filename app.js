var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('landing page');
});
app.listen(9000, function () {
    console.log('http://localhost:9000');
});
