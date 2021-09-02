const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        require: true
    }
});

module.exports = User = mongoose.model("user", userSchema);