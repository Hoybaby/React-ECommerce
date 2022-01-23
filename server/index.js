const express = require('express');

const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order")

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(express.json());

dotenv.config();

mongoose.connect(process.env.MONGO_URI, )
.then(
    () => console.log("Connected to MONGODB database")).catch((err) => console.log(err)
);
    

// this is to test if the api endpoint is working which it did in the console.log
app.get("/api/test", () => {
    console.log("test is succesful");
})

// to test, the person needs to type localhost:5000/api/user/usertest
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port 5000');
});



