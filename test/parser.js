
const assert = require('assert');
const htmlParser = require('../src/parser/htmlParser');

var parser = new htmlParser.HtmlParser();

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
describe('#get(www.google.es)', function() {
  it('responds with content from google', function() {
    return expect(client.get('www.google.es')).to.not.equal('');
  });

    it('responds with content from google', function() {
      return expect(client.get('www.google.es')).to.not.equal('');
  });
});*/

describe('#changeRefs(html)', function() {
  it('responds with empty object with empty html', function() {
    return expect(client.changeRefs('')).to.equal(''); // == {}
  });
});