const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({    
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, min: 6, max: 12, required: true }
})

module.exports = restful.model('User', userSchema, 'User');

/*
use db_finance;

db._SCHEMA.insert(
{
    "_id": "User",
    "name": "",
    "email": "",
    "password": ""
});

db.User.insertMany([
    {
        "name": "admin",
        "email": "difusao@gmail.com",
        "password": "$2b$10$NijyvKkqykJdmm574gcITuW0aAe/7dsiuhHeXRBF7NT3QOpisAhhK" // 123456AbX#
    },
]);
    
db.User.find();
*/