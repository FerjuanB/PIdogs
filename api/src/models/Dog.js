const { DataTypes } = require('sequelize');
//* Exportamos una funcion que define el modelo
//* Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen:{
      
      type:DataTypes.STRING,
      allowNull:false,
      
    },
    altura:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    peso:{
    type:DataTypes.STRING,
    allowNull:false,
    },
    anios_de_vida:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    created: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
    
  },{
    timestamps: false
  });
};
