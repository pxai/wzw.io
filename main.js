const greeter = require('./src/http/greeter');
greeter.greet('epa').then(m => console.log(m));