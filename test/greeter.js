
const assert = require('assert');

const greeter = require('../src/http/greeter');

beforeEach(function() {
});

describe('#greet()', function() {
  it('respond with a given greet', function() {
    return greeter.greet('Hello').then(function(data) {
        assert.equal(data,'Hello');
    });
  });
});

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

describe('#greet() with chai', function() {
  it('respond with a given greet with chai-as-promised', function() {
    return expect(greeter.greet('Hello')).to.eventually.equal('Hello');
  });
});