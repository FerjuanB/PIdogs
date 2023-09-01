const { Router } = require ("express")
const {getDogsByTemps} = require("../handlers/getTemperamentsHand")

const getTemps = Router();

getTemps.get("/",getDogsByTemps)


module.exports = getTemps;