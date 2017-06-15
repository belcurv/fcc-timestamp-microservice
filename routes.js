/* jshint esversion:6, node:true */

const path      = require('path'),
      tsService = require('./tsService');

module.exports = function(app) {    
    
    // GET requests to: root,
    // Sends our client html page.
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/index.html'));
    });
    
    
    // GET requests to: root/parameter,
    // Calls timestamp parsing and handling module.
    app.get('/:str', (req, res) => {
        res.json(tsService(req.params.str));
    });
    
};
