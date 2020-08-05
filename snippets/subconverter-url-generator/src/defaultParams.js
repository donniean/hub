const get = require('lodash/get');

const { configs } = require('./constants');

const config = get(configs, 'ACL4SSR.Online_NoAuto');

module.exports = {
  target: 'clash',
  config,
  emoji: true,
  udp: true,
  filename: 'ACL4SSR_Online_NoAuto',
  new_name: true,
};
