/**
 * basic.js
 * https://github.com/pxai/wzw.io
 * Pello Altadill - http://pello.io
 */
module.exports = function (app) {

    // Just one simple middleware
    app.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now());
        next();
    });

    /**
     * Mighty homepage
     */
    app.get('/help', function(req, res) {
         res.send('I will never help');
    });

    /**
     * About homepage
     */
    app.get('/about', function(req, res) {
        res.send('About birds');
    });

}
