const express = require('express')
const router = express.Router()
const {
  getAllBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require('../Controllers/bootcampControllers')

router.get('/', getAllBootcamps)

router.get('/:id', getBootcamp)

router.post('/', createBootcamp)

router.put('/:id', updateBootcamp)

router.delete('/:id', deleteBootcamp)

module.exports = router
