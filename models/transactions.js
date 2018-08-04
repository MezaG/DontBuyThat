const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
	amount: Number,
	description: String,
	date: { type: Date, default: Date.now },
	from_to: {
		from: String,
		to: String
	}

});

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = {
	Transaction: Transaction
}
