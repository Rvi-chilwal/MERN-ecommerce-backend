const mongoose = require('mongoose');
const {Schema} = mongoose;
const productSchema = new Schema({
    item_name: { type: String,required: true},
    restro_id: { type: Number,required: true },
    price: { type: Number, min:[1, 'wrong min price'], max:[10000, 'wrong max price']},
    deleted: { type :Boolean, default: false},
    restaurants :{type: String},
    
     
})


exports.Product = mongoose.model('Product',productSchema)