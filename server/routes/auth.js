const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require("crypto-js");
// const dotenv = require('dotenv');
// dotenv.config();

// register
router.post('/register', async (req, res) => {

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        // according to the documentation, the password is encrypted is needed with this
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
        
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch(err) {
        res.status(500).json(err);
    }

    
});

router.post('/login', async (req,res) => {


    try {
        // this will search the database to look for the username that i am posting in postman.
        const user = await User.findOne({username: req.body.username});
        !user && res.status(404).json({message: "User not found"});

        const hashPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);

        const password = hashPassword.toString(CryptoJS.enc.Utf8);

        password !== req.body.password && res.status(401).json("wrong cedentials");

        res.status(200).json(user);

    } catch(err) {
        res.status(500).json(err);
    }
    


})

module.exports = router;