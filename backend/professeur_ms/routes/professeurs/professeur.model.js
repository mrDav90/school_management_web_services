const mongoose = require("mongoose");

const professeur = new mongoose.Schema({
    lastName : {
        type : String ,
        required : true 
    } , 
    firstName : {
        type : String ,
        required : true 
    } , 
    email : {
        type : String ,
        required : true ,
        unique : true , 
        lowercase : true
    } ,  
    phone : String ,
    

})


module.exports = mongoose.model('professeurs' , professeur );