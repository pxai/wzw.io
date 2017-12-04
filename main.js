/*const greeter = require('./src/http/greeter');
greeter.greet('epa').then(m => console.log(m));
*/
const httpRequest = require('./src/http/httpRequest');
const htmlParser = require('./src/parser/htmlParser');
const htmlOptimizer = require('./src/optimizer/htmlOptimizer');

const url = 'http://localhost/';

var client = new httpRequest.HttpRequest();
var parserClient = new htmlParser.HtmlParser();
var optimizer = new htmlOptimizer.HtmlOptimizer();


//client.get('www.google.es').then(console.log('ok'));
//parserClient.changeRefs('www.google.es').then(a => console.log(a));

// client.get(url).then((c) => {console.log(c)});
client.get(url).then(m => optimizer.optimize(m)).then(o => console.log(o));

//parserClient.changeAnchors().then(a => console.log(a))
//parserClient.changeImages().then(a => console.log(a))
