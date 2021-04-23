var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController")
const charitiesController = require("../controllers/charityController")

// Home page route.
router.get('/', async (req, res) => {
    var status = "None";
    status = req.session.type;
    console.log(status);
    var usersArray = await usersController.getAllUsers();
    var charitiessArray = await charitiesController.getAllCharities();
    var donationsArray = await charitiesController.getAllDonations();
    var usersCount = usersArray.length;
    var charitiesCount = charitiessArray.length;
    var donationsCount = donationsArray.length;
    res.render('adminPage', {usersCount:usersCount, charitiesCount:charitiesCount, donationsCount:donationsCount});
})

module.exports = router;