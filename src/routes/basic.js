/**
 * basic.js
 * https://github.com/pxai/wzw.io
 * Pello Altadill - http://pello.io
 */
module.exports = function (app) {
    /**
     * Mighty homepage
     */
    app.get('/h', function(req, res) {
         res.send('I will never help');
    });

    /**
     * About homepage
     */
    app.get('/a', function(req, res) {
        res.send('<a href="http://pello.io">pello.io</a>');
    });

}
