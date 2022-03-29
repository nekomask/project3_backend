const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
productName: {type:String, default: "grass", required: true},
quantity: {type:Number, default: 0, required: true}
}, { timestamps: true })

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;