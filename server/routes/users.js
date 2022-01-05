
const {verifyToken, verifyTokenandAuthorization} = require('./verifyToken');
const router = require('express').Router();


router.put('/:id', verifyTokenandAuthorization, (req, res) => {
    // since we assigned req.user in the verify token, we can access it here.
    if(req.user.id === req.params.id || req.user.isAdmin) {
        
    }

    
})

module.exports = router;