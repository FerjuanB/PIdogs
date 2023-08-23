const { Router } = require ("express")
const {findDogsHandler, getDogsByName, getDogsByTemps} = require("../handlers/findDogsHand")
const {createDog} = require("../handlers/createDogHand") 
const {getDogsById} = require("../handlers/getDogsIdHand")

const getDogs = Router();


getDogs.get("/", findDogsHandler);
  
getDogs.get("/name",getDogsByName)

getDogs.post("/", createDog)

getDogs.get("/temperaments",getDogsByTemps)

getDogs.get("/:idRaza",getDogsById)

  module.exports = getDogs;