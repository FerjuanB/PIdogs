const {Dog} = require("../db")
const axios = require("axios")
const {  MY_API_K } = process.env


const getDogsIdRaza= async (id,source)=>{
    let dog ={}
if (source === "api") {
    dog = (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}?api_key=${MY_API_K}`)).data;
    dog = {
        id:dog.id,
        nombre:dog.name,
        imagen:dog.reference_image_id,
        Altura:dog.height,
        Peso:dog.weight,
        Anios_de_vida:dog.life_span,
        created: false,
    };
} else {
  dog = await Dog.findByPk(id);
}


    return dog;
    } 

    module.exports = {getDogsIdRaza}