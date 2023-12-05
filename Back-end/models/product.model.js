const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
        available: { type: String, required: true, unique: true },
        categoryEnum: { type: String, enum: ['Food', 'Cloths', 'PC'], default: 'Other' },
        price: { type: Number, required: true, unique: true },
        name: { type: String, required: true, unique: true },
});

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;


