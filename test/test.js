/* jshint esversion:6, node:true */
/* globals describe, it */

const assert    = require('assert'),
      tsService = require('../tsService');

describe('tsService Module', function() {
    
    it('should export a function',
       function() {
        assert.equal('function', typeof tsService);
    });

    
    it('should return a type: object',
       function() {
        assert.equal('object', typeof tsService());
    });

    
    it('should return December 15, 2015 when passed 1450137600',
       function() {
        assert.deepEqual(
            { unix: 1450137600, natural: 'December 15, 2015' },
            tsService(1450137600)
        );
    });

    
    it('should return 1450137600 when passed December 15, 2015',
       function() {
        assert.deepEqual(
            { unix: 1450137600, natural: 'December 15, 2015' },
            tsService('December 15, 2015')
        );
    });

    
    it('should return 0 when passed Jan 1, 1970',
       function() {
        assert.deepEqual(
            { unix: 0, natural: 'January 1, 1970' },
            tsService('January 1, 1970')
        );
    });

    
    it('should return null for both properties if not passed a date string',
       function() {
        assert.deepEqual(
            { unix: null, natural: null },
            tsService('foo')
        );
    });

    
    it('should return null for both properties if not passed a UNIX timestamp',
       function() {
        assert.deepEqual(
            { unix: null, natural: null },
            tsService(42)
        );
    });
        
});
