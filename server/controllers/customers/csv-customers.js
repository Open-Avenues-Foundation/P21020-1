const Customer = require('../../models/Customer')
const handleCSV = require('../../utilities/handle-csv')

// Upload and save CSV file to database
const upload = async (req, res) => {
  try {
    if (req.file == undefined) return res.status(400).send("Please upload a CSV file!")

    let path = __basedir + "/resources/static/assets/uploads/" + req.file.filename

    handleCSV(path, req, res)

  } catch (error) {
    console.log(error)
    res.status(500).send("Could not upload the file: " + req.file.originalname)
  }
}

// Get all Cusotmers
const getCustomers = (req, res) => {
  Customer.findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send(err.message || "Some error occured while retrieving customers")
    })
}

module.exports = { upload, getCustomers }