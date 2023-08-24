const { Schema, model } = require('mongoose');

//setting up the schema model for Category
const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true
    },
    categoryID: {
        type: BigInt,
        required: true
    }
})

const Category = model('Category', categorySchema);

module.exports = Category;