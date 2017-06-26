
const assert = require('assert');
const htmlOptimizer = require('../src/optimizer/htmlOptimizer');
const rootUrl = 'http://wzw.io/p/';
var optimizer = new htmlOptimizer.HtmlOptimizer();

beforeEach(function() {

});


describe('#htmlOptimizer.toString()', function() {
  it('responds to String with one message', function() {
      assert.equal(optimizer.toString(),'Name: HtmlOptimizer');
  });
});


var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);


describe('#htmlOptimizer.optimize()', function() {
  it('responds with empty object with empty html', function() {
    return expect(optimizer.optimize('')).to.be.empty; // == {}
  });
});

/*
describe('#optimize()', function() {
  it('changes href reference', function() {
    let url = 'http://www.google.es';
    return expect(parser.changeRefs(url)).to.eventually.equal(rootUrl + url); // == {}
  });
});
*/