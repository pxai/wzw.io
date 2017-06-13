
const assert = require('assert');
const httpRequest = require('../src/http/httpRequest');

var client = new httpRequest.HttpRequest();

beforeEach(function() {

});


describe('#toString()', function() {
  it('responds to String with one message', function() {
      assert.equal(client.toString(),'Name: HttpRequest');
  });
});

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

describe('#get(www.google.es)', function() {
  it('responds with content from google', function() {
    return expect(client.get('www.google.es')).to.not.equal('');
  });
});

describe('#get(wrongurl)', function() {
  it('responds with empty object with wrong urls', function() {
    return expect(client.get('wrongurl')).to.be.empty; // == {}
  });
});