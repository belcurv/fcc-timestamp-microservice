/* jshint esversion:6, node:true */

const errorObj = {
        "unix"    : null,
        "natural" : null
      },
      monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


/* ========================== utility functions ============================ */

/* validate timestamp
 *   note: any integer >= 1000ms is a valid UNIX timestamp
 * @params    [string]   ts   [route req parameters]
 * @returns   [boolean]       [true if ts is a valid UNIX timestamp]
*/
function validTS(ts) {
    return parseInt(ts) >= 1000;
}


/* validate date string
 * @params    [string]   ds   [route req parameter]
 * @returns   [boolean]       [true if ds is a valid date string]
*/
function validDS(ds) {
    let timeStamp = Date.parse(ds);
    return (isNaN(timeStamp)) ? false : true;
}


/* convert unix timestamp > string
 * @params    [string]   ts   [route req parameter]
 * @returns   [string]        [natura language date string]
*/
function parseUnixToString(ts) {
    let date  = new Date(ts * 1000),
        month = monthNames[date.getUTCMonth()],
        day   = date.getUTCDate(),
        year  = date.getUTCFullYear();
    
    return `${month} ${day}, ${year}`;
}


/* ========================== export public method ========================= */

module.exports = function (req) {
    
    const dates = {};
    
    if (isNaN(parseInt(req))) {  // if is a string
        
        if (!validDS(req)) { return errorObj; }

        dates.unix    = Date.parse(req + ' GMT') / 1000;
        dates.natural = req;

    } else {                     // else is a number
        
        if (!validTS(req)) { return errorObj; }

        dates.unix    = req;
        dates.natural = parseUnixToString(req);
    }

    return dates;
    
};
