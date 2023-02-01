// const url = "mongodb+srv://niteshsindhu:nitesh@pharma.m5xxg8j.mongodb.net/PharmaEasy?retryWrites=true&w=majority"

const mongoose = require("mongoose");
require('dotenv').config();
mongoose.set({ strictQuery: false });
const connection = mongoose.connect(process.env.URL);
module.exports = connection;