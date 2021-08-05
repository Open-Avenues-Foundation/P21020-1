// Requiring Packages
// Express
const express = require('express')
const app = express()
// MySQL
const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'customers'
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})


const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})