
const assert = require('assert');
const cssOptimizer = require('../src/optimizer/cssOptimizer');
const rootUrl = 'http://wzw.io/p/';
const optimizer = new cssOptimizer.CssOptimizer();

beforeEach(function() {

});


describe('#cssOptimizer.toString()', function() {
  it('responds to String with one message', function() {
      assert.equal(optimizer.toString(),'Name: CssOptimizer');
  });
});


var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);


describe('#cssOptimizer.optimize()', function() {
  it('responds with empty object with empty css', function() {
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