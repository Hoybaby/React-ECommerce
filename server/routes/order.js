
const Order = require("../models/Order");
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('./verifyToken');
const router = require('express').Router();

// 
router.post("/", verifyToken, async(req, res) => {
    const newOrder = new Order(req.body)

    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json({message: "error adding new Order"})
    }
});

// updating.
// IO only want the admin to be able to update
router.put('/:id', verifyTokenAndAdmin, async(req, res) => {
    // since we assigned req.user in the verify token, we can access it here.

    try {

        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            // this is what we are going to update
            // take everything inside the req.body and update it
            $set: req.body
        }, {new: true});
        
        res.status(200).json(updatedOrder);
    } catch(err) {
        res.status(500).json({message: "Something went wrong in ordering the Order"});
    }
})

// DELETE user
router.delete('/:id', verifyTokenAndAuthorization, async(req, res) => {


    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Order deleted"});
    } catch(err) {
        res.status(500).json({message: "Something went wrong in deleting the Order"});
    }
})

// // GET USER Orders
router.get('/find/:userId', verifyTokenAndAuthorization,  async(req, res) => {


    try {

        const orders = await Order.find({userId: req.params.userId});

        res.status(200).json(orders);
        // res.status(200).json({...others});
    } catch(err) {
        res.status(500).json({message: "Something went wrong in getting the Order"});
    }
})

// GET ALL ORDERs

router.get('/', verifyTokenAndAdmin, async(req,res) => {
    try {

        const orders = await Order.find();
        res.status(200).json(orders);

    } catch (err) {
        res.status(500).json({message: "Something went wrong in getting all the products"});
    }
})

// this will calcuate all the order profit.
router.get('/income', verifyTokenAndAdmin, async(req,res) => {
    // i only want to calcuate within the one month so it will be very similar to he user.js stats

    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    // below will calcuate the profit of the two months
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    // using the aggregate method that is using mongoose
    try {
        const income  = await Order.aggregate([
            {$match: {createdAt: {$gte: previousMonth}}},
            {
                $project: {
                    month: {$month : "$createdAt"},
                    // in ourder Order.js, we have the amount field.
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id : "$month",
                    total: {$sum: "$sales"}
                },
            },
        ]);
        res.status(200).json({message: "is working", income});

    } catch(err) {
        res.status(500).json({message: "Something went wrong in getting the profit"});
    }
});


module.exports = router;

