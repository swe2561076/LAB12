const test = require('node:test');
const assert = require('node:assert');
const { ticketTotal } = require('./price');

test('2 тасалбар, 10% хөнгөлөлт', () => {
  assert.strictEqual(ticketTotal(15000, 2, 0.1), 27000);
});
