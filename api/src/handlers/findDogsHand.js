const axios = require ("axios")
const {Dog} = require("../db")
const {findDogs} = require("../controllers/findDogsCont")


const findDogsHandler = async (req,res)=>{
  
      try {
        const dogs = await findDogs();
      res.status(200).json(dogs)
      } catch (error) {
        res.status(500).json({error:error.message})
      }
    }


  
  
  //?/ //////////////////////////////////////
  
  
  
  
  
  


  module.exports = {
    findDogsHandler
  }