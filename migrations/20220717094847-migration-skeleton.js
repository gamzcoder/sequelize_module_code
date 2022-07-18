'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // return queryInterface.sequelize.transaction(t => {
    //   return Promise.all([
    //     // queryInterface.addColumn('Users','description',  {
    //     //   type: Sequelize.DataTypes.STRING
    //     // }, { transaction: t }),
    //     // queryInterface.addColumn('Users','eValue', {
    //     //   type: Sequelize.DataTypes.INTEGER,
    //     // }, { transaction: t })
    //   ]);
    // });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.sequelize(t=>{
      return Promise.all([queryInterface.removecolumn('Users','eValue',{transaction:t})

      ])
    })
  }
};
