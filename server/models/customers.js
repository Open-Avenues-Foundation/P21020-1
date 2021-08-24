const customers = (connection, Sequelize) => {
  return connection.define('customers', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: Sequelize.STRING
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
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
    }
  })
}

module.exports = customers