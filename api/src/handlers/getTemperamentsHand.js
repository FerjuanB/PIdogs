const {axios} = require("axios")

const {findByTemps}=require("../controllers/getTemperamentsCont")


const getDogsByTemps = async (req,res)=>{
    try {
      
        const temps = await findByTemps();
        res.status(200).json(temps)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
  }

  module.exports ={
    getDogsByTemps
  }