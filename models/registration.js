const mongoose = require("mongoose");

const registrationSchema = {
    companyname: String,
    email: String,
    password: String
}

const Registration = mongoose.model("Registration", registrationSchema);

module.exports = Registration;