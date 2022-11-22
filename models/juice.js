const { ServerApiVersion } = require("mongodb")
const mongoose = require("mongoose")


const juiceSchema = mongoose.Schema({
variety:{
    type: String,
    minLength: 5
}, 
vitamin: String,

price: Number
})
module.exports = mongoose.model("Juice", juiceSchema)
