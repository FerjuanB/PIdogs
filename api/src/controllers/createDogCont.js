const {Dog} = require("../db")
const axios = require("axios")
const {  MY_API_K } = process.env


const createADog = async (nombre,imagen,altura,peso,anios_de_vida) =>
 await Dog.create({nombre,imagen,altura,peso,anios_de_vida});


 module.exports = {createADog}