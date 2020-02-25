'use strict';
var validator = require('validator');
module.exports = (sequelize, DataTypes) => {
  const Nota = sequelize.define('Nota', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    usuarioId: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {});


  Nota.associate = function(models) {
    // associations can be defined here
  };
  return Nota;
};