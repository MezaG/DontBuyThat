const expect = require('chai').expect;
const assert = require('chai').assert;
const Mongoose = require('mongoose');
const MonthlyDue  = require('../models/monthlydue').MonthlyDue;

describe('MonthlyDue without entity', () => {
	it('should throw error message', (done) => {
		var monthly = new MonthlyDue();
		monthly.validate( (err) => {
			expect(err.errors.entity).to.exist;
			done();
		});
	});
});

describe('MonthlyDue with entity', () => {
	it('should not throw error message', (done) => {
		var monthly = new MonthlyDue();
		monthly.entity = 'Some test entity';
		monthly.validate( (err) => {
			expect(err.errors.entity).to.not.exist;
			done();
		});
	});
});

describe('MonthlyDue with default date', () => {
	it('should not throw error message', (done) => {
		var monthly = new MonthlyDue();
		var error = monthly.date;
		expect(error).to.exist;
		done();
	});
});

describe('MonthlyDue with item properties', () => {
	it('should not throw error message', (done) => {
		var monthly = new MonthlyDue();
		var properties = {
			name: 'test',
			cost: 123,
			months: 12,
			payed: 100,
			due: 23
		}
		monthly.item = properties;
		monthly.validate( (err) => {
			expect(err.errors.item).to.not.exist;
			done();
		});
	});
});
