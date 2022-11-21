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

// A little function to check if we have an authorized user and continue on

// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

/* GET costumes */
router.get('/', juice_controlers.juice_view_all_Page);

/* GET detail juice page */
router.get('/detail', juice_controlers.juice_view_one_Page);


/* GET create juice page */
router.get('/create', juice_controlers.juice_create_Page);


/* GET create update page */
router.get('/update',secured, juice_controlers.juice_update_Page);



/* GET delete juice page */
router.get('/delete', juice_controlers.juice_delete_Page);

module.exports = router;
