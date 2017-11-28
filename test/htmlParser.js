
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

/*
describe('#changeRefs(html)', function() {
  it('responds with empty object with empty html', function() {
    return expect(parser.changeRefs('')).to.be.empty; // == {}
  });
});

describe('#changeRefs(html)', function() {
  it('changes href reference', function() {
    let url = 'http://www.google.es';
    return expect(parser.changeRefs(url)).to.eventually.equal(rootUrl + url); // == {}
  });
});*/
