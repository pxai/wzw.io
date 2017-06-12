const http = require('http');

function HttpRequest (url) {
	// Properties ///////////////
	this.url = url;
	this.requestDate = new Date();
        const options = {
        port: 80,
        hostname: 'www.google.com',
        method: 'GET',
        path: 'www.google.com:80'
    };

    this.req;



	// Methods ////////////////
	/**
	* greet, says something -what-
	*/
	this.get = function () {
        this.req = http.request(options);
        req.end();
		return this.name + "> " + what;
	}

    this.req.on('connect', (res, socket, head) => {
    console.log('got connected!');

    // make a request over an HTTP tunnel
    socket.write('GET / HTTP/1.1\r\n' +
                 'Host: www.google.com:80\r\n' +
                 'Connection: close\r\n' +
                 '\r\n');
    socket.on('data', (chunk) => {
      console.log(chunk.toString());
    });
    socket.on('end', () => {
      proxy.close();
    });
  });

	/**
	* toString, returns all properties
	*/
	this.toString = function () {
		return 'Name: ' + this.name + ' ' +
		       'Race: ' + race + ' ' +
		       'Date of birth: ' + this.dateOfBirth;
	}
}
