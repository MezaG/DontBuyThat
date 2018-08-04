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
		withdraw.validate( (err) => {
			expect(err.errors.amount).to.not.exist;
			done();
		});
	});
});

describe('withdraw without specify date', () => {
	it('should not be undefined', (done) => {
		var withdraw = new Withdraw();
		var date = withdraw.date;
		assert.isDefined(date);
		done();
	});
});

describe('withdraw without card', () => {
	it('should throw error message', (done) => {
		var withdraw = new Withdraw();
		withdraw.validate( (err) => {
			expect(err.errors.card).to.exist;
			done();
		});
	});
});

describe('withdraw with card number length lt 4', () => {
	it('should throw error message', (done) => {
		var withdraw = new Withdraw();
		withdraw.card = 123;
		withdraw.validate( (err) => {
			expect(err.errors.card).to.exist;
			done();
		});
	});
});

describe('withdraw with card number constraint satisfied', () => {
	it('should not throw error message', (done) => {
		var withdraw = new Withdraw();
		withdraw.card = 1234;
		withdraw.validate( (err) => {
			expect(err.errors.card).to.not.exist;
			done();
		});
	});
});

describe('withdraw without motive', () => {
	it('should throw error message', (done) => {
		var withdraw = new Withdraw();
		withdraw.validate( (err) => {
			expect(err.errors.motive).to.exist;
			done();
		});
	});
});

describe('withdraw with motive', () => {
	it('should not throw error message', (done) => {
		var withdraw = new Withdraw();
		withdraw.motive = 'this is a test';
		withdraw.validate( (err) => {
			expect(err.errors.motive).to.not.exist;
			done();
		});
	});
});
