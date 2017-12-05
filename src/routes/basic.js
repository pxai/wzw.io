
module.exports = function (app) {

    // home
    app.get('/h', function(req, res) {
         res.send('Check this out: https://github.com/pxai/wzw.io');
    });

    // about
    app.get('/a', function(req, res) {
        res.send('<a href="http://pello.io">Pello Xabier Altadill Izura - pello.io</a>');
    });

}
