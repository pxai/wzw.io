const greeter = require('./src/http/greeter');
greeter.greet('epa').then(m => console.log(m));
const httpRequest = require('./src/http/httpRequest');

var client = new httpRequest.HttpRequest();
const htmlParser = require('./src/parser/htmlParser');

var parserClient = new htmlParser.HtmlParser();

client.get('www.google.es').then(console.log('ok'));
parserClient.changeRefs('www.google.es').then(a => console.log(a));