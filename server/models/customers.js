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
    fristName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING(10)
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