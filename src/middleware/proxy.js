/**
 * middleware/proxy.js
 * https://github.com/pxai/wzw.io
 * Pello Altadill - http://pello.io
 */
module.exports = function request(req, res, next) {
        console.log('Time: ', Date.now());
        next();
};