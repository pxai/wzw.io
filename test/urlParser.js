
const assert = require('assert');
const urlParser = require('../src/parser/urlParser');
const rootUrl = 'http://wzw.io/p/';
const parser = new urlParser.UrlParser(rootUrl);

beforeEach(function() {
});


describe('#urlParser.toString()', function() {
  it('responds to String with one mesesage', function() {
      assert.equal(parser.toString(),'Name: UrlParser');
  });
});

describe('#urlParser.getHostname()', function() {
  it('gets the hostname correctly', function() {
      assert.equal(parser.getHostname(),'wzw.io');
  });
});

describe('#urlParser.getPort()', function() {
  it('gets the port correctly', function() {
      assert.equal(parser.getPort(),80);
  });
});

describe('#urlParser.getPathname()', function() {
  it('gets the pathname correctly', function() {
      assert.equal(parser.getPathname(),'/p/');
  });
});

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

/*
describe('#urlParser.toString()', function() {
  it('responds with empty object with empty js', function() {
    return expect(optimizer.optimize('')).to.be.empty; // == {}
  });
});
*/