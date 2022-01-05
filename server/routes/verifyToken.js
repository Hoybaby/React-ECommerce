const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {

    const authHeader = req.headers.token;

    if(authHeader) {

        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.JWT_SK, (err, user) => {
            if(err) res.status(403).json({message: "Token is not valid"});
            // 
            req.user = user;
            // the next means it will go into the next function which will be user.
            next();
        });
    } else {
        return res.status(401).json({message: "You are not Authenticated. Wrong token"});
    }

}

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json({message: "Not authorized to do that"});
        }
    });
};

// when adding products to the store or anything like that, only an admin can do so i will be making a new function that will handle something very similar

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin) {
            next();
        } else {
            res.status(403).json({message: "Not authorized to do that"});
        };
    });
}

module.exports = {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin};