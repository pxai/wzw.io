const greet = require('./src/http/greeter');
beforeEach(function() {
 /* return db.clear()
    .then(function() {
      return db.save([tobi, loki, jane]);
    });*/
});

describe('#greeter()', function() {
  it('respond with a given greet', function() {
    return db.find({ type: 'User' }).should.eventually.have.length(3);
  });
});