var express = require('express');
var router = express.Router();

var Juice = require('../models/juice');

// Require controller modules.
var api_controller = require('../controllers/api');
// var juice_controller = require('../controllers/juice');

var juice_controller = require('../controllers/juice');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// JUICE ROUTES ///
// POST request for creating a Juice.
router.post('/juices', juice_controller.juice_create_post);
// DELETE request to delete Juice.
router.delete('/juices/:id', juice_controller.juice_delete);
// PUT request to update Juice.
router.put('/juices/:id', juice_controller.juice_update_put);
// GET request for one Juice.
router.get('/juices/:id', juice_controller.juice_detail);
// GET request for list of all Juice items.
router.get('/juices', juice_controller.juice_list);
// router.get('/', juice_controlers.juice_view_all_Page );
module.exports = router;
