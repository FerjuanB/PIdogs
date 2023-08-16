const { DataTypes } = require('sequelize');
//* Exportamos una funcion que define el modelo
//* Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    ID:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Image:{
      type:DataTypes.STRING,
    },
    Height:{
      type:DataTypes.INTEGER,
    },
    weight:{

    },
    years_of_life:{}
  });
};
