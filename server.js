/* server.js  */
/* jshint esversion:6, node:true */

/*
1.  I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

2.  If it does, it returns both the Unix timestamp and the natural language form of that date.

3.  If it does not contain a date or Unix timestamp, it returns null for those properties.

Example usage:

   https://timestamp-ms.herokuapp.com/December%2015,%202015
                   - or -
   https://timestamp-ms.herokuapp.com/1450137600

Outputs:  { "unix": 1450137600, "natural": "December 15, 2015" } 

*/

const express = require('express'),
      app     = express(),
      path    = require('path'),
      routes  = require('./routes')(app),
      morgan  = require('morgan');

// log http requests to console
app.use(morgan('dev'));

// for serving static client app
app.use(express.static(path.join(__dirname, 'client')));


app.listen(3000, function () {
    console.log('Example server listening on port 3000');
});
