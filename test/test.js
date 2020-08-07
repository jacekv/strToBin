const fs = require('fs');
const assert = require('assert');
const { strToBin } = require('../strToBin.js');
const rawData = fs.readFileSync('./test/testVector.json');
const testVector = JSON.parse(rawData);


describe('Array', function() {
  testVector.testData.forEach(function(entry) {
    describe('Converting numbers', function() {
      it('Converting ' + entry.input, function() {
        let a;
        if (entry.type) {
          a = JSON.stringify(strToBin(entry.input, entry.type));
          b = JSON.stringify(entry.result);
        } else {
          try{
            a = strToBin(entry.input, entry.type);
          } catch(e) {
            a = e.message;
          }
          b = entry.result;
        }
        assert.equal(a, b);
      });
    });
  });
});
