
const Product = require("../models/Product");
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('./verifyToken');
const router = require('express').Router();

// 
router.post("/", verifyTokenAndAdmin, async(req, res) => {
    const newProduct = new Product(req.body)

    try{
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json({message: "error adding new product"})
    }
});

router.put('/:id', verifyTokenAndAuthorization, async(req, res) => {
    // since we assigned req.user in the verify token, we can access it here.

    try {

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            // this is what we are going to update
            // take everything inside the req.body and update it
            $set: req.body
        }, {new: true});
        
        res.status(200).json(updatedProduct);
    } catch(err) {
        res.status(500).json({message: "Something went wrong in updating the product"});
    }
})

// // delete user
router.delete('/:id', verifyTokenAndAuthorization, async(req, res) => {


    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Product deleted"});
    } catch(err) {
        res.status(500).json({message: "Something went wrong in deleting the product"});
    }
})

// // get product
router.get('/find/:id',  async(req, res) => {


    try {

        const product = await Product.find(req.params.id);

        res.status(200).json(product);
        // res.status(200).json({...others});
    } catch(err) {
        res.status(500).json({message: "Something went wrong in getting the product"});
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



module.exports = router;