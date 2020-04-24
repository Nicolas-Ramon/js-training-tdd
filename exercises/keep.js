'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:

function keepFirst(a) {
    return a.slice(0, 2);
}

function keepLast(b) {
    return b.slice(-2, b.length);
}

function keepFirstLast(c) {
    return c.slice(2, 4);
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof keepFirst, 'function');
assert.strictEqual(keepFirst.length, 1);
assert.deepStrictEqual(keepFirst('abcdef'), ('ab'));
assert.strictEqual(typeof keepLast, 'function');
assert.strictEqual(keepLast.length, 1);
assert.deepStrictEqual(keepLast('abcdef'), ('ef'));
assert.strictEqual(typeof keepFirstLast, 'function');
assert.strictEqual(keepFirstLast.length, 1);
assert.deepStrictEqual(keepFirstLast('abcdefgh'), ('cd'));

// assert.fail('You must write your own tests');
// End of tests */
