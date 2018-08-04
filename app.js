const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Cat = mongoose.model('Cat', { name: String });

const Kitty = new Cat({ name: 'Salem' });
Kitty.save().then(() => console.log('Salem says meow'));

app.get('/', (req, res) => res.send('Saving is the best'));

app.listen(3000);
