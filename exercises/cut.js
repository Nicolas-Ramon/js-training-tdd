'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:

function cutFirst(a) {
    return a.slice(2);
}

function cutLast(b) {
    return b.slice(0, -2);
}

function cutFirstLast(c) {
    return c.slice(2).slice(0, -2);
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof cutFirst, 'function');
assert.strictEqual(cutFirst.length, 1);
assert.deepStrictEqual(cutFirst('abcdef'), ('cdef'));
assert.strictEqual(typeof cutLast, 'function');
assert.strictEqual(cutLast.length, 1);
assert.deepStrictEqual(cutLast('abcdef'), ('abcd'));
assert.strictEqual(typeof cutFirstLast, 'function');
assert.strictEqual(cutFirstLast.length, 1);
assert.deepStrictEqual(cutFirstLast('abcdefgh'), ('cdef'));


// assert.fail('You must write your own tests');
// End of tests */
