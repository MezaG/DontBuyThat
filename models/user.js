const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	_id: String,
	password: { type: String, required: true },
	name: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

module.exports = {
	User: User
}
