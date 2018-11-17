var bcrypt = require('bcrypt');

bcrypt.hash('potatoes', 10, function(err, hash) {
  console.log(hash);
});

bcrypt.compare('potatoes', '$2a$10$ZRv9HYR/L6He7m5f.2xbb.lZXMCks4/bsySUejQ6D4wxmj72o8e0.', function(err, res) {
  console.log(res);
});

bcrypt.compare('bananas', '$2a$10$ZRv9HYR/L6He7m5f.2xbb.lZXMCks4/bsySUejQ6D4wxmj72o8e0.', function(err, res) {
  console.log(res);
});
