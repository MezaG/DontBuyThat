const expect = require('chai').expect;
const User = require('../models/user').User;

describe('User has password', () => {
	it('should not be blank', (done) => {
		var user = new User();
		user.validate( (err) => {
			expect(err.errors.password).to.exist;
			done();
		});
	});
});

describe('User password', () => {
	it('should pass', (done) => {
		var user = new User();
		user.password = '@B123458';
		user.validate( (err) => {
			expect(err.errors.password).to.not.exist;
			done();
		});
	});
});


describe('User name', () => {
	it('should fails', (done) => {
		var user = new User();
		user.validate( (err) => {
			expect(err.errors.name).to.exist;
			done();
		});
	});
});

describe('User name', () => {
	it('should pass', (done) => {
		var user = new User();
		user.name = 'This is Test';
		user.validate( (err) => {
			expect(err.errors.name).to.not.exist;
			done();
		});
	});
});
