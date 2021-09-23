const express = require('express')
const app = express()
global.__basedir = __dirname
const db = require('./config/database')
const models = require('./models')

require('dotenv').config()

// Require Routes
const customerRoutes = require('./routes/customer-routes')
const csvRoutes = require('./routes/csv-routes')

// App Config
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// DB Test
db.authenticate()
  .then(() => console.log('connected'))
  .catch((err) => console.log('error!'))

// Reset Customer Table
db.sync({ force: true }).then(() => {
  console.log('All models dropped and re-synced');
});

// Routes
app.use('/csv', csvRoutes)
app.use('/customers', customerRoutes)

// Port
const port = 3000
app.listen(port, () => {
  console.log(`Running at localhost:${port}`)
})