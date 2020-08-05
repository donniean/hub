const get = require('lodash/get');

const { configs } = require('./constants');

const config = get(configs, 'ACL4SSR.Online_NoAuto');

module.exports = {
  target: 'clash',
  config,
  emoji: true,
  udp: true,
  new_name: true,
};
