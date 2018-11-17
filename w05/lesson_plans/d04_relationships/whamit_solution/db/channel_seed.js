var Channel = require('../models').channels;

Channel
  .destroy({ truncate: true })
  .then(function() {
    Channel.create({
      name: 'Help I accidentally built a shelf'
    });

    Channel.create({
      name: 'Every time you beat computer in chess, because it let you'
    });

    Channel.create({
      name: 'Dogs proof that humans can buy friends'
    });

    Channel.create({
      name: 'Caught and released fish must sound like conspiracy theory fish to other fish'
    });

    Channel.create({
      name: 'We buy garbage bags to throw them out'
    });
  });
