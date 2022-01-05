
const User = require("../models/User");
const {verifyToken, verifyTokenAndAuthorization} = require('./verifyToken');
const router = require('express').Router();



router.put('/:id', verifyTokenAndAuthorization, async(req, res) => {
    // since we assigned req.user in the verify token, we can access it here.
    if(req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
    }

    try {


        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            // this is what we are going to update
            // take everything inside the req.body and update it
            $set: req.body
        }, {new: true});
        
        res.status(200).json(updatedUser);
    } catch(err) {
        res.status(500).json({message: "Something went wrong in updating the user"});
    }
})

module.exports = router;