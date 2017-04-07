/* server.js  */
/* jshint esversion:6, node:true */

const express = require('express'),
      app     = express();

app.get('/', function (req, res) {
    
    res.send('Hello World!');
    
});


app.listen(3000, function () {
    console.log('Example server listening on port 3000');
});
