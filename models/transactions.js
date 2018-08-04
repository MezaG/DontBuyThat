const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
	amount: { type: Number,
		validate: {
			validator: (value) => {
				return value > 0;
			},
			message: 'the amount should be gt zero'
		},
		required: true },
	description: { type: String, required: true },
	date: { type: Date, default: Date.now },
	from_to: {
		from: { type: String, required: true },
		to: { type: String, required: true }
	},
	user_id: { type: mongoose.Schema.Types.ObjectId, required: true }
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = {
	Transaction: Transaction
}
