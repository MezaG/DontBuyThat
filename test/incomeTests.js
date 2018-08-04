const expect = require('chai').expect;
const assert = require('chai').assert;
const Mongoose = require('mongoose');
const Income = require('../models/income').Income;

describe('Income without amount', () => {
	it('should throw error message', (done) => {
		var income = new Income();
		income.validate( (err) => {
			expect(err.errors.amount).to.exist;
			done();
		});
	});
});

describe('Income with amount lt zero', () => {
	it('should not throw error message', (done) => {
		var income = new Income();
		income.amount = -1;
		income.validate( (err) => {
			expect(err.errors.amount).to.exist;
			done();
		});
	});
});

describe('Income with amount', () => {
	it('should not throw error message', (done) => {
		var income = new Income();
		income.amount = 1;
		income.validate( (err) => {
			expect(err.errors.amount).to.not.exist;
			done();
		});
	});
});

describe('Income with default date', () => {
	it('should not throw error message', (done) => {
		var income = new Income();
		var error = income.date;
		expect(error).to.exist;
		done();
	});
});

describe('Income without from', () => {
	it('should throw error message', (done) => {
		var income = new Income();
		income.validate( (err) => {
			expect(err.errors.from).to.exist;
			done();
		});
	});
});

describe('Income with from', () => {
	it('should not throw error message', (done) => {
		var income = new Income();
		income.from = 'this is a test';
		income.validate( (err) => {
			expect(err.errors.from).to.not.exist;
			done();
		});
	});
});

