const express = require('express')
const cors = require('cors')
const connectDB = require('./db')
const app = express()
connectDB()

app.use(express.json({ extended: false }))
app.use(cors())
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))

const PORT = 1234

app.listen(PORT, () => console.log(`server running on ${PORT}`))
