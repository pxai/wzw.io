
const assert = require('assert');
const imageOptimizer = require('../src/optimizer/imageOptimizer');
const rootUrl = 'http://wzw.io/p/';
const optimizer = new imageOptimizer.ImageOptimizer();

beforeEach(function() {

});


describe('#imageOptimizer.toString()', function() {
  it('responds to String with one message', function() {
      assert.equal(optimizer.toString(),'Name: ImageOptimizer');
  });
});

