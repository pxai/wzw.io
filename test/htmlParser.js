
const assert = require('assert');
const htmlParser = require('../src/parser/htmlParser');
const rootUrl = 'http://wzw.io/p/';
const parser = new htmlParser.HtmlParser();

beforeEach(function() {
});


describe('#toString()', function() {
  it('responds to String with one message', function() {
      assert.equal(parser.toString(),'Name: HtmlParser');
  });
});


var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const anchorsHTML = '<html><head></head><body><b><a href="http://www.as.com">as</a> Epa ye<a href="http://www.marca.com">as</a> </b></body></html>';
const expectedAnchorsHTML =  '<html><head></head><body><b><a href="'+rootUrl+'http%3A%2F%2Fwww.as.com">as</a> Epa ye<a href="'+rootUrl+'http%3A%2F%2Fwww.marca.com">as</a> </b></body></html>';

describe('#changeAnchors(html)', function() {
  it('replaces HTML links with prefixed links', function() {
    return expect(parser.changeAnchors(anchorsHTML)).to.eventually.equal(expectedAnchorsHTML); // == {}
  });
});


const imgHTML = '<html><head></head><body><b><img src="http://www.as.com/we.jpg" /> Epa ye<img src="http://www.marca.com/we.png" /> </b></body></html>';
const expectedImgHTML = '<html><head></head><body><b><img src="'+rootUrl+'http%3A%2F%2Fwww.as.com%2Fwe.jpg"> Epa ye<img src="'+rootUrl+'http%3A%2F%2Fwww.marca.com%2Fwe.png"> </b></body></html>';

describe('#changeImages(html)', function() {
  it('replaces HTML img sources with prefixed links', function() {
    return expect(parser.changeImages(imgHTML)).to.eventually.equal(expectedImgHTML); // == {}
  });
});
