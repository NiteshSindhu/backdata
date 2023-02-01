const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    mob: Number
});

const UserModal = mongoose.model("user", userSchema);

module.exports=UserModal