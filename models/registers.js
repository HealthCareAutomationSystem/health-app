const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})

// creating collection

const Register = new mongoose.model("Register", userSchema);

module.exports = Register;