const handleCSV = require('../../utilities/handle-csv')

// Upload and save CSV file to database
const uploadCSV = async (path, filename) => {
  try {
    return await handleCSV(path, filename)
  } catch (error) {
    return (error)
  }
}

module.exports = { uploadCSV }