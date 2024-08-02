/* eslint import/no-unresolved: [2, { ignore: ['^https:\/\/'] }] */

import _ from 'https://esm.run/lodash';

export const version = _.VERSION;

const o = {
  a: {},
  b: {},
  c: {},
};
const r = _.isEmpty(o);
console.log(r);
