const {findByName} = require("../controllers/findDogsNameCont")

const getDogsByName = async(req,res)=>{
const name = req.query.name.toLowerCase();
if((await findByName(name)).length === 0)
res.status(400).json({message:"no existen Razas con ese nombre"})
try {
   
    const names = await findByName(name);
    res.status(200).json(names);
} catch (error) {
    res.status(400).json({message:error.message})
}
}




module.exports = {getDogsByName};