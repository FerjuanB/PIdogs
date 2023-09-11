const {Dog} = require("../db")
const axios = require("axios")
const {  MY_API_K } = process.env

const imagenUrl=`https://cdn2.thedogapi.com/images/`

const findDogs = async() =>{
   
    const dogs = await Dog.findAll();
   
    const dogsApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${MY_API_K}`)
    const dog = dogsApi.data.map(dog => ({
        id:dog.id,
        nombre:dog.name,
        imagen:dog.reference_image_id,
        Altura:dog.height.metric,
        Peso:dog.weight.metric,
        Anios_de_vida:dog.life_span,
        created: false,


    })) 
    const allDogs = [...dogs,...dog]
    return allDogs; 
}

module.exports = {
findDogs,
}

//*.create  