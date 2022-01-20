const { request } = require("https");

const router = require("express").Router();

const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post('/payment', (req,res) => {

    stripe.charges.create({
        source: request.body.tokenId,
        amount: req.body.amount,
        currency: "usd",

    }, (stripeErr, stripeRes) => {
        if(stripeErr) {
            res.status(500).json({message: "error in stripe processing"})
        } else {
            res.status(200).json({message: "payment successful", stripeRes})
        }
    })
});
module.exports = router;