const { default: mongoose } = require("mongoose");
const professeur = require("./professeur.model");

exports.listProfesseurs = async (request , response) => {   
    await professeur.find()
    .then((data)=>{
        response.status(200).json(data);
    })
    .catch(error => {
        response.status(500).json(error);
    })
}

exports.getProfesseur = async (request , response) => {
    // const id = mongoose.Types.ObjectId(request.params.id);
    // console.log(id);
    
    await professeur.findById({_id : request.params.id })
    .then(data => {
        response.status(200).json(data);
    })
    .catch((error)=>{
        response.status(500).json(error);
    })
}

exports.createProfesseur = async (request , response) => {
    const newProfesseur = new professeur({
        lastName : request.body.lastName ,
        firstName : request.body.firstName ,
        email : request.body.email ,
        phone : request.body.phone ,

    })

    await newProfesseur.save()
    .then((data)=>{
        response.status(201).json({message : "Professeur created" , data : data});
    })
    .catch((error)=>{
        response.status(500).json(error);
    })
}


exports.updateProfesseur = async (request , response) => {

    await professeur.findOneAndUpdate(
        {_id : request.params.id} ,
        {
            $set : {
                firstName :  request.body.firstName ,
                lastName :  request.body.lastName ,
                email :  request.body.email ,
                phone :  request.body.phone 
            } 
        } ,
        {
            new :true , upsert : false , setDefaultsOnInsert : true
        }
    )
    .then((data)=>{
        response.status(200).json({message : "Professeur updated" , data : data});
    })
    .catch((error)=>{
        response.status(500).json(error);
    })
}


exports.deleteProfesseur = async (request , response) => {
    await professeur.deleteOne({
        _id : request.params.id 
    })
    .then(()=>{
        response.status(200).json({message : "Deleted successfully"});
    })
    .catch(error => {
        response.status(500).json(error);
    })
}
