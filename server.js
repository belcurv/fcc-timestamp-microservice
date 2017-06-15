/* jshint esversion:6, node:true */

const express = require('express'),
      app     = express(),
      path    = require('path'),
      routes  = require('./routes')(app),
      port    = process.env.PORT || 3000;

// for serving static client app
app.use(express.static(path.join(__dirname, 'client')));

app.listen(port, function () {
    console.log('Example server listening on port %d', port);
});
