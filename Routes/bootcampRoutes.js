const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Show all bootcamps',
  })
})

router.get('/:id', (req, res) => {
  res.status(200).json({
    message: `Show bootcamp ${req.params.id}`,
  })
})

router.post('/', (req, res) => {
  res.status(201).json({
    message: 'Create a new bootcamp',
  })
})

router.put('/:id', (req, res) => {
  res.status(200).json({
    message: `Update bootcamp ${req.params.id}`,
  })
})

router.delete('/:id', (req, res) => {
  res.status(200).json({
    message: `Delete bootcamp ${req.params.id}`,
  })
})

module.exports = router
