var Channel = require('../models').channels;

Channel
  .destroy({ truncate: true })
  .then(function() {
    Channel.create({
      name: 'Help I accidentally built a shelf'
    });

    Channel.create({
      name: 'Every time you beat a computer at chess, it\'s because it let you'
    });

    Channel.create({
      name: 'Dogs are proof that you can buy friends'
    });

    Channel.create({
      name: 'Fish that are caught and released probably sound like insane conspiracy theorists to the other fish'
    });

    Channel.create({
      name: 'We buy garbage bags just to throw them away'
    });

    Channel.create({
      name: 'The symbol for 3 should be the new symbol for 4, since it is half of an 8'
    });
  });
