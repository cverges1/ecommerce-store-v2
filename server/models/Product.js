const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    description: {
        type, String,
        required: true
    },
    merchantID: {
        type: Int,
        required: true
    },
    productID: {
        type: BigInt,
        required: true
    },
    categoryID: {
        
    }
})

const Product = model('Product', productSchema);

module.exports = Product;