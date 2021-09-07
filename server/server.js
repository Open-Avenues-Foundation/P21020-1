const express = require('express')
const app = express()
global.__basedir = __dirname
const db = require('./config/database')
const models = require('./models')

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
models.Customer.sync().then(() => {
  console.log('Syncing DB');
});

// Routes
app.use('/csv', csvRoutes)
app.use('/customers', customerRoutes)

// Port
const port = 3000
app.listen(port, () => {
  console.log(`Running at localhost:${port}`)
})