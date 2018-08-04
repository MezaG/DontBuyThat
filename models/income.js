const mongoose = require('mongoose')

const IncomeSchema = new mongoose.Schema({
	amount: { type: Number,
		validate: {
			validator: (value) => {
				return value > 0;
			},
			message: 'the amount should be gt zero'
		},
		required: true},
	from: { type: String, required: true },
	date: { type: Date, default: Date.now },
	user_id: { type: mongoose.Schema.Types.ObjectId, required: true }
});

const Income = mongoose.model('Income', IncomeSchema);

module.exports = {
	Income: Income
}
