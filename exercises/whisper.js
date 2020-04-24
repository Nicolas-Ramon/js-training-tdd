'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:

function whisper(str) {
    return '*'+str.toLowerCase()+'*'
};


//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof whisper, 'function');
assert.strictEqual(whisper.length, 1);
assert.deepStrictEqual(whisper('ABC'), ('*abc*'));
assert.deepStrictEqual(whisper('A B C'), ('*a b c*'));

// assert.fail('You must write your own tests');
// End of tests */
