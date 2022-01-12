
const Cart = require("../models/Cart");
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('./verifyToken');
const router = require('express').Router();

// 
// create cart
router.post("/", verifyTokenAndAdmin, async(req, res) => {
    const newCart = new Cart(req.body)

    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json({message: "error adding cart"})
    }
});

// UPDATE
router.put('/:id', verifyTokenAndAuthorization, async(req, res) => {
    // since we assigned req.user in the verify token, we can access it here.

    try {

        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            // this is what we are going to update
            // take everything inside the req.body and update it
            $set: req.body
        }, {new: true});
        
        res.status(200).json(updatedCart);
    } catch(err) {
        res.status(500).json({message: "Something went wrong in updating the Cart"});
    }
})

// // delete user
router.delete('/:id', verifyTokenAndAuthorization, async(req, res) => {


    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Product deleted"});
    } catch(err) {
        res.status(500).json({message: "Something went wrong in deleting the Cart"});
    }
})

// get USER CART
router.get('/find/:userId', verifyTokenAndAuthorization,  async(req, res) => {


    try {

        // every user will have just one cart
        const cart = await Cart.find({userId: req.params.userId});

        res.status(200).json(cart);
        // res.status(200).json({...others});
    } catch(err) {
        res.status(500).json({message: "Something went wrong in getting the cart"});
    }
})

router.get('/',  async(req, res) => {

    const qNew = req.query.new;
    const qCategory = req.query.category;

    try {
            let products;

            if(qNew) {
                products = await Product.find().sort({createdAt: -1}).limit(5);
            } else if (qCategory) {
                products = await Product.find({categories : {
                    $in: [qCategory],
                },
            });
        } else {
        products = await Product.find();
        }

        res.status(200).json(products);
    

    } catch (err) {
        res.status(500).json({message: "Something went wrong in getting the products"});
    }
})

// GET ALL
router.get('/', verifyTokenAndAdmin, async(req,res) => {
    try {

        const carts = await Cart.find();
        res.status(200).json(carts);

    } catch (err) {
        res.status(500).json({message: "Something went wrong in getting all the products"});
    }
})


module.exports = router;