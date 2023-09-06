const {Dog, Temperament} = require("../db")



const createADog = async (nombre,imagen,altura,peso,anios_de_vida,temperament) =>{

   

const newDog = await Dog.create({nombre,imagen,altura,peso,anios_de_vida})

if (!Array.isArray(temperament)) {
  temperament = [temperament]; 
}

for (let temp of temperament) {
  const t = await Temperament.findOne({
    where: { temperamento: temp }
  });
  if (t) {
    await newDog.addTemperament(t); 
  }
}

  return newDog;
}

 module.exports = {createADog}