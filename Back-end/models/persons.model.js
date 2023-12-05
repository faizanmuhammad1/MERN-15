const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
        username: { type: String, required: true, unique: true },
        role: { type: String, enum: ['Admin', 'User'], default: 'User' },
        email: { type: String, required: true, unique: true },
});

const personsModel = mongoose.model('person', personSchema);

module.exports = personsModel;