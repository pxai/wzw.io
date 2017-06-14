const greeter = require('./src/http/greeter');
greeter.greet('epa').then(m => console.log(m));
const httpRequest = require('./src/http/httpRequest');

var client = new httpRequest.HttpRequest();


client.get('www.google.es').then(console.log('ok'));