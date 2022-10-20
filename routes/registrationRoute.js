const express = require("express");
const router = express.Router();
const Registration = require("../models/registration");

router.route("/create").post((req, res) => {
    const companyname = req.body.companyname;
    const email = req.body.email;
    const password = req.body.password;

    const newRegistration = new Registration({
        companyname,
        email,
        password
    });

    newRegistration.save();
});

router.route("/registered").get((req, res) => {
    Registration.find()
                .then(foundRegistration => res.json(foundRegistration))
})

module.exports = router;