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
    productID: {
        type: BigInt,
        required: true
    },
    categoryID: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    categoryImage: {
        type: String,
        required: true
    }
})

const Product = model('Product', productSchema);

module.exports = Product;