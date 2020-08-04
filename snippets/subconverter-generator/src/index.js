const { stringify } = require('qs');
const { writeSync } = require('clipboardy');

const defaultParams = require('./defaultParams');
const params = require('./params');

const object = { ...defaultParams, ...params };
const string = stringify(object);
const profileURL = `http://127.0.0.1:25500/sub?${string}`;
writeSync(profileURL);

console.log(profileURL);
