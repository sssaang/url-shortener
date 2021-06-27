const mongoose = require('mongoose')
const config = require('config')
const mongoURI = config.get('mongoURI')

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true
    })

    console.log('DB connected successfully!')
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

module.exports = connectDB
