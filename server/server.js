const express = require('express')
const app = express()
const models = require('./models')
const initRoutes = require('./routes/customer.routes')
global.__basedir = __dirname

app.use(express.urlencoded({ extended: true }))
initRoutes(app)

// Index Route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

models.customers.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// Setting up Port to listen on
const port = 3000
app.listen(port, () => {
  console.log(`Running at localhost:${port}`)
})