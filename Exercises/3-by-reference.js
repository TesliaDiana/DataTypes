'use strict';

const inc = (a) => {
  if (typeof a === 'object') a.n++;
};
module.exports = { inc };
