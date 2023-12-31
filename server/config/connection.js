//importing our mongoose connection
const mongoose = require('mongoose');

//invoke our connection
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/happy-tails',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;