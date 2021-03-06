process.env.NODE_ENV = "test";

var app       = require('../server.js'),
    seed      = require('../seed.js'),
    server;

before(function(done) {
  server = app.listen(9888);
  seed(done);
});

after(function(done) {
  server.close(done);
})
