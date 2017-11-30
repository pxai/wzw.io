const assert = require('assert');
const resource = require('../src/data/resource')
var chai = require('chai');
var expect = chai.expect;

const url = 'http://localhost';
const status = 200;
const headers = {"date":"Thu, 30 Nov 2017 19:36:28 GMT","server":"Apache/2.4.18","last-modified":"Sun, 03 Sep 2017 09:23:51 GMT","etag":"\"2c39-558458d5de16e\"","accept-ranges":"bytes","content-length":"11321","vary":"Accept-Encoding","connection":"close","content-type":"text/html"};
const actualResource = new resource.Resource(url, status, headers).getResource();
const expectedResource = {url: url, status: status, headers: headers};


describe('Resource testing', function() {
  describe('#getResource() function', function() {
    it('should return a resources object', function() {
      return expect(actualResource).to.deep.equal(expectedResource);
    });
  });

  describe('#getResource() function', function() {
    it('should save resources correctly', function() {
      return expect(actualResource).to.deep.equal(expectedResource);
    });
  });

});
