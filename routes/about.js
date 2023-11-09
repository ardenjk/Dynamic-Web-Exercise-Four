const express = require ('express');
const router = express.Router ();

// router.use ((req, res, next) => {
//     console.log('Time: ', Date.now())
//     next()
// });

//define the about page route 
router.get("/", (req, res) => {
    res.send("About");

});

//define the aboutMe page route 
router.get("/me", (req, res) => {
    res.send("<h1>About Me</h1>");

});

module.exports = router; 