const axios = require ("axios")
const {Op} = require("sequelize")
const {Dog} = require("../db")
const {  MY_API_K } = process.env


const findByName = async(name) =>{


const apiFindDogs = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${MY_API_K}`)
const apiFindD = apiFindDogs.data.map(dog => ({
    id:dog.id,
    nombre:dog.name,
    imagen:dog.reference_image_id,
    Altura:dog.height,
    Peso:dog.weight,
    Anios_de_vida:dog.life_span,
    created: false,
}))

const bddFindDog = await Dog.findAll({
    where:{
        nombre:{
            [Op.iLike]:`%${name}%` 
        }
    }
})
return [...apiFindD, ...bddFindDog]

}
module.exports= {
    
    findByName
};