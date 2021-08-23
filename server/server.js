// Requiring Packages
// Express
const express = require('express')
const app = express()
// MySQL
const mysql = require('mysql2')


// MySQL Create Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'customers'
});
// MySQL Connect
db.connect()


// Index Route
app.get('/', (req, res) => {
  res.send('Hello World!')
})


// Setting up Port to listen on
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})