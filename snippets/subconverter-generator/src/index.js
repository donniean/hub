const get = require('lodash/get');
const { stringify } = require('qs');
const { writeSync } = require('clipboardy');

const { configs } = require('./constants');
const defaultConfigs = require('./defaultConfigs');
const { target, url, config: configPath, ...rest } = require('./configs');

const config = get(configs, configPath);
const object = { ...defaultConfigs, target, url, config, rest };
const string = stringify(object);
const a = `http://127.0.0.1:25500/sub?${string}`;
writeSync(a);

console.log(a);
