const router = require('express').Router();

router.get("/usertest", (req, res) => {

    res.send("User test is successful");
});

router.post('/userposttest', (req, res) => {

    // going to test this with postman tommorrow morning. last note at 12:18 am 1/3/2022
    const username = req.body.username;
    
    console.log(username)
})

module.exports = router;