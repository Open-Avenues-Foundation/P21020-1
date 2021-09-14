const handleCSV = require('../../utilities/handle-csv')

// Upload and save CSV file to database
const uploadCSV = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!")
    }

    let path = __basedir + "/resources/static/assets/uploads/" + req.file.filename

    const results = await handleCSV(path, req.file.filename)

    return res.status(results.status).send(results.message)

  } catch (error) {
    return res.status(500).send("Could not upload the file: " + req.file.originalname)
  }
}

module.exports = { uploadCSV }