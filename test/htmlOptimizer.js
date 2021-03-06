
const assert = require('assert');
const htmlOptimizer = require('../src/optimizer/htmlOptimizer');
const rootUrl = 'http://wzw.io/p/';
const optimizer = new htmlOptimizer.HtmlOptimizer();
const sampleHTML = '<script type=\"text\/javascript\">var abc= \"hello\";<\/script>\r\n\r\n\r\n' +
            '<style type=\"text\/css\">#foo { color: red;        }          <\/style>\r\n\r\n\r\n' +
            '<div>\r\n  <div>\r\n    <div><!-- hello -->\r\n      <div>' +
            '<!--! hello -->\r\n        <div>\r\n          <div class=\"\">\r\n\r\n            ' +
            '<textarea disabled=\"disabled\">     this is a textarea <\/textarea>\r\n          ' +
            '<\/div>\r\n        <\/div>\r\n      <\/div>\r\n    <\/div>\r\n  <\/div>\r\n<\/div>' +
            '<pre>       xxxx<\/pre><span>x<\/span> <span>Hello<\/span> <b>billy<\/b>     \r\n' +
            '<input type=\"text\">\r\n<textarea><\/textarea>\r\n<pre><\/pre>';
const optimizedHTML = '<script>var abc="hello"</script><style>#foo{color:red}</style><div><div><div><div><!--! hello --><div><div><textarea disabled>     this is a textarea </textarea></div></div></div></div></div></div><pre>       xxxx</pre><span>x</span> <span>Hello</span> <b>billy</b> <input><textarea></textarea><pre></pre><div style=\'background-color: orange;position:absolute;top:0;right:0;\'><b>HTML</b>: 305 reduced to 305 57%</div>';

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

   it('responds with optimized html with some html', function() {
    return expect(optimizer.optimize('<div><p>\n\r\r\r</p></div>')).to.eventually.equal('<div><p></div><div style=\'background-color: orange;position:absolute;top:0;right:0;\'><b>HTML</b>: 14 reduced to 14 64%</div>');
   });

   it('responds with optimized html with complex html', function() {
    return expect(optimizer.optimize(sampleHTML)).to.eventually.equal(optimizedHTML);
   });
});
