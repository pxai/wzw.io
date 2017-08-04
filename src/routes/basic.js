
module.exports = function (app) {

    // home
    app.get('/h', function(req, res) {
         res.send('I will never help');
    });

    // about
    app.get('/a', function(req, res) {
        res.send('<a href="http://pello.io">pello.io</a>');
    });

}
