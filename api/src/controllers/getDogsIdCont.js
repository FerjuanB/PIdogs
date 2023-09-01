const {Dog} = require("../db")
const axios = require("axios")
const {  MY_API_K } = process.env


const getDogsIdRaza= async (id,source)=>{
    
    const dog = source 
     === "api"
    ?(await axios.get(`https://api.thedogapi.com/v1/breeds/${id}?api_key=${MY_API_K}}`)).data 
    :await Dog.findByPk(id  //,{
        //include:[Temperament]
    //} 
    ) 
    // const detailDog = dog.map(d =>({
    //     id:d.id,
    //     nombre:d.name,
    //     imagen:d.reference_image_id,
    //     Altura:d.height,
    //     Peso:d.weight,
    //     Anios_de_vida:d.life_span,
    //     created: false,
    // }))
    return dog
    } 

    module.exports = {getDogsIdRaza}