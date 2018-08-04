const moongose = require('mongoose');

const WithdrawSchema = new moongose.Schema({
	amount: { type: Number,
		validate: {
			validator: (value) => {
				return value > 0;
			},
			message: 'the amount should be gt zero'
		},
		required: true },
	date: { type: Date, default: Date.now },
	card: { type:  Number,
		validate: {
			validator: (value) => {
				return /\d{4}/.test(value);
			},
			message: 'only last 4 digits'
		},
		required: true },
	motive: { type: String, required: true }
});

const Withdraw = moongose.model('Withdraw', WithdrawSchema);

module.exports = {
	Withdraw: Withdraw
}
