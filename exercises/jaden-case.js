'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:

function toJadenCase(str) {
    return str.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};

//* Begin of tests
const assert = require('assert');

var str = "How can mirrors be real if our eyes aren't real";
assert.strictEqual(toJadenCase(str), "How Can Mirrors Be Real If Our Eyes Aren't Real");
assert.strictEqual(typeof toJadenCase, 'function');
assert.strictEqual(toJadenCase.length, 1);

// assert.fail('You must write your own tests');
// End of tests */
