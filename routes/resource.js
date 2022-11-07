var express = require('express');
var router = express.Router();

var Costume = require('../models/costume');

// Require controller modules.
var api_controller = require('../controllers/api');
// var costume_controller = require('../controllers/costume');

var costume_controller = require('../controllers/costume');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/costumes', costume_controller.costume_create_post);
// DELETE request to delete Costume.
router.delete('/costumes/:id', costume_controller.costume_delete);
// PUT request to update Costume.
router.put('/costumes/:id', costume_controller.costume_update_put);
// GET request for one Costume.
router.get('/costumes/:id', costume_controller.costume_detail);
// GET request for list of all Costume items.
router.get('/costumes', costume_controller.costume_list);

// router.get('/costumes', async (req, res) => {
//     try{
//         const data = await Costume.find();
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// })













module.exports = router;