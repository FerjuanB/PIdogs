const {findDogs} = require("../controllers/findDogsCont")


const findDogsHandler = async (req,res)=>{
  
      try {
        const dogs = await findDogs();
      res.status(200).json(dogs)
      } catch (error) {
        res.status(500).json({error:error.message})
      }
    }


  const getDogsByName = (req,res)=>{
    const {name} = req.query
    res.send(name)
  }
  
  //?/ //////////////////////////////////////
  
  
  const getDogsByTemps = (req,res)=>{
    res.send("hola wacho de nuevo")
  }
  
  
  


  module.exports = {
    findDogsHandler,
    getDogsByName,
    getDogsByTemps,
    
  }