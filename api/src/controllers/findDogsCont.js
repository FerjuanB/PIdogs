const {Dog} = require("../db")
const axios = require("axios")
const {  MY_API_K } = process.env



const findDogs = async(req,res) =>{
    const dogs = await Dog.findAll();
    const dogsApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${MY_API_K}}`)
    const dog = dogsApi.data.map(dog => ({
        id:dog.id,
        nombre:dog.name,
        imagen:dog.reference_image_id,
        Altura:dog.height,
        Peso:dog.weight,
        Esperanza_de_vida:dog.life_span,
    })) 
    allDogs = [...dogs,...dog]
    return allDogs; 
}




 

const findDogsByTemps = (res, req)=>{
    
}

module.exports = {
findDogs,
}

//*.create  