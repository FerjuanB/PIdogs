const axios = require("axios")
const {Temperament} =require("../db")
const {  MY_API_K } = process.env


const findByTemps = async (req, res)=>{

    let api = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${MY_API_K}`)
    let tempApi = api.data.map(temp => ({
        
        nombre:temp.temperament,

    }))
    Temperament.bulkCreate(
        tempApi 
    )

return tempApi;
}
module.exports = {
findByTemps
}