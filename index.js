const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

dotenv.config()

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
