const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    mob: { type: Number, required: true },
});

const UserModal = mongoose.model("user", userSchema);

module.exports=UserModal