const get = require('lodash/get');

const { configs } = require('./constants');

const config = get(configs, 'ACL4SSR.Online');

module.exports = {
  target: 'clash',
  config,
  emoji: true,
  udp: true,
  list: true,
  new_name: true,
};
