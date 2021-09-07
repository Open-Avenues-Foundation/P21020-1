const express = require('express')
const router = express.Router()
const { uploadCSV } = require('../controllers/csv/csv-controller.js')
const upload = require('../middleware/upload')


router.post('/upload', upload.single('file'), uploadCSV);

module.exports = router;