'use strict';

const Misko = [true, false, 1, NaN, '7.2$', 'cat', 17, 'fruit', { n: 2 },
  true, 'nein', [ 5, 9 ], function() {}, null,
  undefined, Infinity, Symbol('fuf'), 11n];
const Mason = { number: 0, string: 0, boolean: 0, symbol: 0, bigint: 0,
  undefined: 0, null: 0, object: 0, function: 0 };
for (const elem of Misko) {
  ++Mason[typeof elem];
};
console.debug(Mason);
const countTypesInArray = (Mo) => {
  if (Mo === null || typeof Mo[Symbol.iterator] !== 'function') return {};
  const Ms = {};
  for (const e of Mo) {
    const v = typeof e;
    Ms[v] = (Ms[v] ?? 0) + 1;
  };
  return Ms;
};
const result = countTypesInArray(Misko);
console.debug(result);
module.exports = { countTypesInArray };
