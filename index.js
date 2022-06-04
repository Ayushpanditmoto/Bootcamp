const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const morgan = require('morgan')

dotenv.config()

// const logger = require('./Middleware/logger')
// app.use(logger)

//dev logger middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
//Route files
const bootcampRoutes = require('./routes/bootcampRoutes')
//Mount Routers
app.use('/api/v1/bootcamps', bootcampRoutes)

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the API',
  })
})

mongoose
  .connect(process.env.DB_CONNECTION, () => {
    console.log('DB Connected')
  })
  .catch((err) => {
    console.log(err)
  })

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port http://localhost:${process.env.PORT} in ${process.env.NODE_ENV} mode`
  )
})
