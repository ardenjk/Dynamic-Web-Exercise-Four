const express = require ('express');
const router = express.Router ();

// router.use ((req, res, next) => {
//     console.log('Time: ', Date.now())
//     next()
// });

//define the homepage route 

router.get("/", (req, res) => {
    res.send("Hello World?!?!?!");

});

module.exports = router; 