const { ServerApiVersion } = require("mongodb")
const mongoose = require("mongoose")


const juiceSchema = mongoose.Schema({
variety:{
    type: String,
    minLength: 5
}, 
vitamin:{
    type: String,
    maxLength: 4
},

price: Number
})
module.exports = mongoose.model("Juice", juiceSchema)
