/* jshint esversion:6, node:true */

/*
        http://localhost:3000/1450137600
        output:

        { "unix": 1450137600, "natural": "December 15, 2015" }
    

*/

const path       = require('path'),
      moment     = require('moment'),
      monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

moment().format();


/* =========================== helper functions ============================ */

/**
 * Parse unix timestamp > string
 * ex. "December 15, 2015"
*/
function parseNumeric(n) {
    let date  = new Date(n * 1000),
        month = monthNames[date.getMonth()],
        day   = date.getDate(),
        year  = date.getFullYear();
    
    return `${month} ${day}, ${year}`;
}


/* ================================ routes ================================= */

module.exports = function(app) {
    
    
    /**
      GET requests to the root / route
      receive our client html page
    */
    app.get('/', function (req, res) {
    
        res.sendFile(path.join(__dirname, 'client/index.html'));

    });
    
    
    /**
      GET requests to the root / route parameters
      trigger timestamp parsing and handling
    */
    app.get('/:str', function (req, res) {
        
        var reqTime = req.params.str,
            dates = {};
        
        if (isNaN(parseInt(reqTime))) {
            
            dates.unix    = Date.parse(reqTime) / 1000;
            dates.natural = reqTime;
            
        } else {
            
            dates.unix    = reqTime;
            dates.natural = parseNumeric(reqTime);
        }
        
        res.send(dates);
        
    });
    
};
