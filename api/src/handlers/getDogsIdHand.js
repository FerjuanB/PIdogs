const {Dog} = require("../db")
const axios = require("axios")
const {  MY_API_K } = process.env
const {getDogsIdRaza} = require("../controllers/getDogsIdCont")



const getDogsById = async (req,res)=>{
    const {idRaza} = req.params;
   
    const source = isNaN(idRaza)? "bdd": "api";
    try {
    const dog = await getDogsIdRaza (idRaza, source);
    res.status(200).json(dog)
   } catch (error) {
    res.status(500).json({error:error.message})
   }
  }

  module.exports ={getDogsById}