const model = require('../../models')

const fs = require('fs')
const csv = require('fast-csv')

const sanitizeEmails = require('../../public/javascript/sanitize')


// Upload and save CSV file to database
const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!")
    }

    let customers = []
    let path = __basedir + "/resources/static/assets/uploads/" + req.file.filename

    fs.createReadStream(path)
      .pipe(csv.parse({ headers: ['email', 'firstName', 'lastName', 'phone', 'city', 'state', 'lastOrderPrice', 'lastOrderDate'], renameHeaders: true }))
      .on('error', (error) => {
        throw error.message
      })
      .on('data', (row) => {
        customers.push(row)
      })
      .on('end', () => {
        // Sanitize emails
        customers = sanitizeEmails(customers)
        // console.log(customers)
        model.customers.bulkCreate(customers)
          .then(() => {
            res.status(200).send({
              message:
                "Uploaded the file successfully: " + req.file.originalname
            })
          })
          .catch((error) => {
            res.status(500).send({
              message: "Failed to import data into database!",
              error: error.message
            })
          })
      })
  } catch (error) {
    console.log('ERROR')
    console.log(error)
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname
    })
  }
}

// Get all Cusotmers
const getCustomers = (req, res) => {
  model.customers.findAll()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occured while retrieving customers"
      })
    })
}

module.exports = { upload, getCustomers }