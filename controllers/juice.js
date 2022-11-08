// const juice = require('../models/juice');
var Juice = require('../models/juice');

// List of all Juices
exports.juice_list = async function (req, res) {
    try {
        theJuices = await Juice.find();
        res.send(theJuices);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.juice_view_all_Page = async function (req, res) {
        try {
        theJuices = await Juice.find();
        res.render('juice', { title: 'Juice Search Results', rel: theJuices });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};



// for a specific Costume.
exports.juice_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Juice detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.juice_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Juice create POST');
};
// Handle Costume delete form on DELETE.
exports.juice_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Juice delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.juice_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Juice update PUT' + req.params.id);
};
