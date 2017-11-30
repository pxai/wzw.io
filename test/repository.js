const assert = require('assert');
const resourceRepository = require('../src/data/resourceRepository');
const resource = require('../src/data/resource');

let repository;

beforeEach(function() {
 repository = new resourceRepository.ResourceRepository();
});


describe('#toString()', function() {
  it('responds to String with one message', function() {
      assert.equal(repository.toString(),'Name: ResourceRepository');
  });

  it('saves in the repository correctly', function() {
      repository.save(new resource.Resource('',0,''));
      assert.equal(repository.length(), 1);
  });

});

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
/*
describe('#get(www.google.es)', function() {
  it('responds with content from google', function() {
    return expect(httpClient.get('www.google.es')).to.not.equal('');
  });

    it('responds with content from google', function() {
      return expect(httpClient.get('www.google.es')).to.not.equal('');
  });
});

describe('#get(wrongurl)', function() {
  it('responds with empty object with wrong urls', function() {
    return expect(httpClient.get('wrongurl')).to.be.empty; // == {}
  });
});*/
