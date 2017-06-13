const greeter = require('./src/http/greeter');
greeter.greet('epa').then(m => console.log(m));
greeter.greet('epa');

const http = require('http');

        let get = function(url) {
            return new Promise(function(resolve, reject) {
                const options = {
                    port: 80,
                    hostname: url,
                    method: 'GET',
                    path: '/'
                };
                http.get(options,function(res) {
                            var content = [];
                            res.on('data', function (e){
                                content.push(e);
                            }).on('end', function () {
                                console.log(content);
                                resolve(content);
                            });
                }).on('error', function(e) {
                    reject(e);
                });
            });
        }

get('www.google.es');