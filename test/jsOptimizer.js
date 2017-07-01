
const assert = require('assert');
const jsOptimizer = require('../src/optimizer/jsOptimizer');
const rootUrl = 'http://wzw.io/p/';
var optimizer = new jsOptimizer.JsOptimizer();

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
});

/* 
15 * 3 = 45
15 * 3 * 0,1= 4,5
describe('#optimize()', function() {
  it('changes href reference', function() {
    let url = 'http://www.google.es';
    return expect(parser.changeRefs(url)).to.eventually.equal(rootUrl + url); // == {}
  });
});
*/