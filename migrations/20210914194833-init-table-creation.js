'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('customers', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      lastOrderPrice: {
        type: Sequelize.INTEGER
      },
      lastOrderDate: {
        type: Sequelize.STRING
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })

    await queryInterface.createTable('messages', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      text: {
        type: Sequelize.STRING
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })

    return queryInterface.createTable('customerMessages', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      customerId: {
        type: Sequelize.INTEGER,
        references: { model: 'customers', key: 'id' }
      },
      messageId: {
        type: Sequelize.INTEGER,
        references: { model: 'messages', key: 'id' }
      },
      dateSent: {
        type: Sequelize.DATEONLY,
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('customerMessages')
    await queryInterface.dropTable('messages')
    return queryInterface.dropTable('customers')
  }
};
