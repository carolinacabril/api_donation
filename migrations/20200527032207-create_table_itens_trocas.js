'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('itens_trocas', {
        id_troca:{
          type:Sequelize.INTEGER,
          references:{
            model:{tableName: 'trocas'},
            key: 'id_troca'
          }
        },
        id_item:{
          type:Sequelize.INTEGER,
          references:{
            model: {tableName: 'itens'},
            key: 'id_item'
          }
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('itens_trocas');
  }
};
