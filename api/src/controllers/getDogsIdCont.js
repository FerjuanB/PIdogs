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
    return dog;
    } 

    module.exports = {getDogsIdRaza}