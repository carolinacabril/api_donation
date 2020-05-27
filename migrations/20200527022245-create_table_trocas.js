'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('trocas', {
        id_troca:{
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        id_doador:{
          type:Sequelize.INTEGER,
          references:{
            model:{tableName: 'usuarios'},
            key: 'id_usuario'
          }
        },
        id_beneficiario:{
          type:Sequelize.INTEGER,
          references: {
            model:{tableName: 'usuarios'},
            key: 'id_usuario'
          }
        },
        status:{
          type:Sequelize.STRING,
          allowNull: false
        },
        created_at:{
          type:Sequelize.DATE,
          allowNull: false,
        },
        updated_at:{
          type:Sequelize.DATE,
          allowNull: false
        }
      });

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('trocas');
  }
};
