const {findDogsHandler} = require("../handlers/findDogsHand")
const {getDogsByName} = require("../handlers/findDogsNameHand")
const {createDog} = require("../handlers/createDogHand") 
const {getDogsById} = require("../handlers/getDogsIdHand")
const { Router } = require ("express")
const getDogs = Router();



// const validate = (req,res,next)=>{
//   const {id} = req.params;
//   if(!id) res.status(400).json({error: "el Id no existe"})

//   next();
// }

getDogs.get("/", findDogsHandler);
  
getDogs.get("/name",getDogsByName)

getDogs.post("/", createDog)

getDogs.get("/:idRaza", getDogsById)

  module.exports = getDogs;