const express = require('express')
const connectDB = require('./db')
const app = express()
connectDB()

app.use(express.json({ extended: false }))

const PORT = 5000

app.listen(PORT, () => console.log(`server running on ${PORT}`))
