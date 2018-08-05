const expect = require('chai').expect;
const assert = require('chai').assert;

const Withdraw = require('../models/withdraw').Withdraw;
const Transaction = require('../models/transactions').Transaction;
const Mongoose = require('mongoose');

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

describe('withdraw without user', () => {
	it('should throw error message', (done) => {
		var withdraw = new Withdraw();
		withdraw.validate( (err) => {
			expect(err.errors.user_id).to.exist;
			done();
		});
	});
});

describe('withdraw with user', () => {
	it('should not throw error message', (done) => {
		var withdraw = new Withdraw();
		withdraw.user_id = new Mongoose.Types.ObjectId;
		withdraw.validate( (err) => {
			expect(err.errors.user_id).to.not.exist;
			done();
		});
	});
});

describe('Transaction without amount', () => {
	it('should throw error message', (done) => {
		var transaction = new Transaction();
		transaction.validate( (err) => {
			expect(err.errors.amount).to.exist;
			done();
		});
	});
});

describe('Transaction with amount', () => {
	it('should not throw error message', (done) => {
		var transaction = new Transaction();
		transaction.amount = 1;
		transaction.validate( (err) => {
			expect(err.errors.amount).to.not.exist;
			done();
		});
	});
});

describe('Transaction with amount lt zero', () => {
	it('should throw error message', (done) => {
		var transaction = new Transaction();
		transaction.amount = -1;
		transaction.validate( (err) => {
			expect(err.errors.amount).to.exist;
			done();
		});
	});
});

describe('Transaction with amount gt zero', () => {
	it('should not throw error message', (done) => {
		var transaction = new Transaction();
		transaction.amount = 4;
		transaction.validate( (err) => {
			expect(err.errors.amount).to.not.exist;
			done();
		});
	});
});

describe('Transaction without description', () => {
	it('should throw error message', (done) => {
		var transaction = new Transaction();
		transaction.validate( (err) => {
			expect(err.errors.description).to.exist;
			done();
		});
	});
});


describe('Transaction with description', () => {
	it('should not throw error message', (done) => {
		var transaction = new Transaction();
		transaction.description = 'this is a test';
		transaction.validate( (err) => {
			expect(err.errors.description).to.not.exist;
			done();
		});
	});
});


describe('Transaction without date', () => {
	it('should not throw error message', (done) => {
		var transaction = new Transaction();
		transaction.validate( (err) => {
			expect(err.errors.date).to.not.exist;
			done();
		});
	});
});

describe('Transaction with date', () => {
	it('should not throw error message', (done) => {
		var transaction = new Transaction();
		transaction.description = 'this is a test';
		transaction.validate( (err) => {
			expect(err.errors.description).to.not.exist;
			done();
		});
	});
});

describe('Transaction with from_to', () => {
	it('should not throw error message', (done) => {
		var transaction = new Transaction();
		transaction.from_to = {
			from: 'Fer',
			to: 'Test'
		}
		transaction.validate( (err) => {
			expect(err.errors.from_to).to.not.exist;
			done();
		});
	});
});
