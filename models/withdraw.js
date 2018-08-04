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
	card: Number,
	motive: String
});

const Withdraw = moongose.model('Withdraw', WithdrawSchema);

module.exports = {
	Withdraw: Withdraw
}
