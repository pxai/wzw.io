
const assert = require('assert');
const jsOptimizer = require('../src/optimizer/jsOptimizer');
const rootUrl = 'http://wzw.io/p/';
const optimizer = new jsOptimizer.JsOptimizer();
const sampleJs = 'function    hello( a , b , c ) {   sys.log(a + b + c) }';
const optimizedJs = 'function hello(a,b,c){sys.log(a+b+c)}';

beforeEach(function() {
});


describe('#jsOptimizer.toString()', function() {
  it('responds to String with one message', function() {
      assert.equal(optimizer.toString(),'Name: JsOptimizer');
  });
});


var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);


describe('#jsOptimizer.optimize()', function() {
  it('responds with empty object with empty js', function() {
    return expect(optimizer.optimize('')).to.be.empty; // == {}
  });

  it('responds with optimized js with some js', function() {
    return expect(optimizer.optimize(sampleJs)).to.eventually.equal(optimizedJs);
  });

});
