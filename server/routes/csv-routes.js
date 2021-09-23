const express = require('express')
const router = express.Router()
const { uploadCSV } = require('../controllers/csv/csv-controller.js')
const upload = require('../middleware/upload')


router.post('/upload', upload.single('file'), async (req, res) => {
  if (req.file == undefined) return res.status(400).send("Please upload a CSV file!")

  const { filename } = req.file
  let path = __basedir + "/resources/static/assets/uploads/" + filename
  let uploadCSVResults = await uploadCSV(path, filename)

  return res.status(uploadCSVResults.status).send(uploadCSVResults.message)
});

module.exports = router;