
const basic = require('./basic');
const post = require('./post');
const report = require('./report');

module.exports = function (app, repository) {
    basic(app, repository);
    post(app, repository);
    report(app, repository);
}
