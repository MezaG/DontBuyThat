const mongoose = require('mongoose');

const MonthlyDueSchema = new mongoose.Schema({
	entity: { type: String, required: true },
	item: {
		name: { type: String, required: true },
		cost: { type: Number,
			validate: {
				validator: (value) => {
					return value > 0;
				},
				message: 'the amount should be gt zero'
			},
			required: true },
		month: { type: Number,
			validate: {
				validator: (value) => {
					return value > 0 && value < 13;
				},
				message: 'the months should be between 1 - 12'
			},
			required: true },
		payed: { type: Number,
			validate: {
				validator: (value) => {
					return value >= 0;
				},
				message: 'the amount should be positive'
			},
			required: true },
		due: { type: Number,
			validate: {
				validator: (value) => {
					return value >= 0;
				},
				message: 'the amount should be positive'
			},
			required: true },
		date: { type: Date, default: Date.now, required: true }
	},
	date: { type: Date, default: Date.now },
	user_id: { type: mongoose.Schema.Types.ObjectId, required: true }
});

const MonthlyDue = mongoose.model('MonthlyDue', MonthlyDueSchema);

module.exports = {
	MonthlyDue: MonthlyDue
}
