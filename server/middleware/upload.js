const multer = require('multer')


// Multer filter to only accept csv files
const csvFilter = (req, file, cb) => {
  if (file.mimetype.includes('csv')) {
    cb(null, true);
  } else {
    cb('Please upload only csv file.', false)
  }
}

// Telling multer to use disk storage engine. Pass in the folder destination and filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/")
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const uploadFile = multer({ storage: storage, fileFilter: csvFilter })

module.exports = uploadFile
