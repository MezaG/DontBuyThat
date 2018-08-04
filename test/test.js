const expect = require('chai').expect;
const assert = require('chai').assert;

const Withdraw = require('../models/withdraw').Withdraw;

describe('withdraw without amount', () => {
	it('should be invalid if the amount is empty', (done) => {
		var withdraw = new Withdraw();
		withdraw.validate( (err) => {
			expect(err.errors.amount).to.exist;
			done();
		});
	});
});

describe('withdraw with amount as zero', () => {
	it('should be invalid if the amount is equals or lt zero', (done) => {
		var withdraw = new Withdraw();
		withdraw.amount = 0;
		var error = withdraw.validateSync();
		assert.equal(error.errors['amount'].message, 'the amount should be gt zero');
		done();
	});
});

describe('withdraw with amount as less than zero', () => {
	it('should be invalid if the amount is equals or lt zero', (done) => {
		var withdraw = new Withdraw();
		withdraw.amount = -4;
		var error = withdraw.validateSync();
		assert.equal(error.errors['amount'].message, 'the amount should be gt zero');
		done();
	});
});

describe('withdraw with amount as greater than zero', () => {
	it('should pass amount is gt zero', (done) => {
		var withdraw = new Withdraw();
		withdraw.amount = 1;
		var error = withdraw.validateSync();
		assert.notExists(error);
		done();
	});
});
