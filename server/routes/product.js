
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



// router.put('/:id', verifyTokenAndAuthorization, async(req, res) => {
//     // since we assigned req.user in the verify token, we can access it here.
//     if(req.body.password) {
//         req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
//     }

//     try {


//         const updatedUser = await User.findByIdAndUpdate(req.params.id, {
//             // this is what we are going to update
//             // take everything inside the req.body and update it
//             $set: req.body
//         }, {new: true});
        
//         res.status(200).json(updatedUser);
//     } catch(err) {
//         res.status(500).json({message: "Something went wrong in updating the user"});
//     }
// })

// // delete user
// router.delete('/:id', verifyTokenAndAuthorization, async(req, res) => {


//     try {
//         await User.findByIdAndDelete(req.params.id);
//         res.status(200).json({message: "User deleted"});
//     } catch(err) {
//         res.status(500).json({message: "Something went wrong in deleting the user"});
//     }
// })

// // get all users
// router.get('/', verifyTokenAndAdmin, async(req, res) => {


//     try {

//         const users = await User.find(req.params.id);

//         res.status(200).json(users);
//         // res.status(200).json({...others});
//     } catch(err) {
//         res.status(500).json({message: "Something went wrong in getting the user"});
//     }
// })


// // get user stats
// router.get('/stats', verifyTokenAndAdmin, async(req, res) => {

//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//     try {

//         // using mongodb
//         const data = await User.aggregate([
//             // greater then
//             {$match: {createdAt: {$gte: lastYear}}},
//             {
//                 // a user is created at x date, it will assain to this month
//                 $project: {
//                     month: {$month: "$createdAt"},
//                 },
//             },
//             // will be grouping the users by month
//             {
//                 // group by month
//                 $group: {
//                     _id: "$month",
//                     // the sum 1 will register every user
//                     total: {$sum: 1}
//                 },
//             },
//         ]);

//         res.status(200).json(data);

//     } catch(err) {
//         res.status(500).json({message: "Something went wrong in getting the user stats"});
//     }
// })


module.exports = router;