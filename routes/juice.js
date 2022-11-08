// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('juice', { title: 'Search Results Juice' });
// });

// module.exports = router;


var express = require('express');
const juice_controlers= require('../controllers/juice');
var router = express.Router();
/* GET costumes */
router.get('/', juice_controlers.juice_view_all_Page);
module.exports = router;
