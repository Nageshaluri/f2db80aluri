const { ServerApiVersion } = require("mongodb")
const mongoose = require("mongoose")


const juiceSchema = mongoose.Schema({
    variety: String,
    vitamin: String,
    price: Number
})
module.exports = mongoose.model("Juice", juiceSchema)