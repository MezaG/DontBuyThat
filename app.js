const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Transaction = require('./models/transactions').Transaction;

var transaction = new Transaction({
	amount: 10,
	description: 'This is a test',
	from_to: {
		from: 'Fernando',
		to: 'Test'
	}
});

transaction.save().then(() => console.log('Transaction completed'));

app.get('/', (req, res) => res.send('Saving is the best'));

app.listen(3000);
