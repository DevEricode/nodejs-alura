'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
      Pessoa.hasMany(models.Curso, {
        foreignKey: 'docente_id'
      });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        scope: { status: 'matriculado' },
        as: 'aulasMatriculadas'
      });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        as: 'todasAsMatriculas'
      });
    }
  }
  Pessoa.init({
    nome: DataTypes.STRING,
    email: { 
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true, 
          msg: 'Formato do email inválido!'
        }
      } 

    },
    cpf: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
          msg: 'Formato do CPF inválido!'
        }

      }
    },
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoas',
    paranoid: true,
    defaultScope: {
      where: {
        ativo: true,
      }
    },
    scopes: {
      todosOsRegistros: {
        where: {}
      }
    }
  });
  return Pessoa;
};