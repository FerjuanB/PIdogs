const {createADog} = require("../controllers/createDogCont")


const createDog = async (req, res)=>{
    try {
  const {nombre,imagen,altura,peso,anios_de_vida,temperamento} = req.body;
    const newDog = await createADog(nombre,imagen,altura,peso,anios_de_vida,temperamento);
    res.status(201).json(newDog)      
    } catch (error) {
        res.status(400).json({error:error.message})
    }
  
  } 

  module.exports = {
    createDog
  }