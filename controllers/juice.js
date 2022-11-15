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
        res.render('juice', { title: 'Juice Search Results', results: theJuices });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};



// for a specific Costume.
exports.juice_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Juice.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle Juice create on POST.
// Handle Juice create on POST.
exports.juice_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Juice();
   
    document.variety = req.body.variety;
    document.vitamin = req.body.vitamin;
    document.price = req.body.price;
    
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


// Handle Juice delete form on DELETE.

exports.juice_delete = async function(req, res) {
 console.log("delete " + req.params.id)
 try {
 result = await Juice.findByIdAndDelete( req.params.id)
 console.log("Removed " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": Error deleting ${err}}`);
 }
};
// Handle Juice update form on PUT.
exports.juice_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Juice.findById( req.params.id)
    // Do updates of properties
    if(req.body.variety)
    toUpdate.variety = req.body.variety;
    if(req.body.vitamin) toUpdate.vitamin = req.body.vitamin;
    if(req.body.price) toUpdate.price = req.body.price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };

    // Handle a show one view with id specified by query
exports.juice_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Juice.findById( req.query.id)
    res.render('juicedetail', { title: 'Juice Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

 // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.juice_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('juicecreate', { title: 'Juice Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
 };


