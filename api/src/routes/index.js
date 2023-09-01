const { Router } = require('express');
const getDogs = require("./getDogs")
const getTemps = require("./getTemps")
// Importar todos los routers;
const router = Router();
// Ejemplo: const authRouter = require('./auth.js');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



  router.use("/dogs",getDogs)
  router.use("/temperaments",getTemps)



module.exports = router;
