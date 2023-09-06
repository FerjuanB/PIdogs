const axios = require("axios")
const {Temperament} =require("../db")
const {  MY_API_K } = process.env


const findByTemps = async ()=>{

    let api = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${MY_API_K}`)
    let tempApi = api.data.map(temp => ({
        
        temperamento :temp.temperament,

    })) // se filtra el array de objetos, para quitar los objetos vacios, antes de subirlos a la BDD, luego se utiliza la funcion SORT para que los temperamentos aparezcan alfabeticamente"
    
    tempApi = tempApi.filter(obj => obj.temperamento);
    tempApi.sort((a, b) => {
        return a.temperamento.localeCompare(b.temperamento);
      });
    Temperament.bulkCreate(
        tempApi 
    )

return tempApi;
}
module.exports = {
findByTemps
}