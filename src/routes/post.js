/**
 * routes/post.js
 * https://github.com/pxai/wzw.io
 * Pello Altadill - http://pello.io
 */
module.exports = function (app) {

    /**
     * request
     */
    app.post('/m', function(req, res) {
        var url = req.body.u;
        res.send('TODO, make something about this ' + url);
    });
}
