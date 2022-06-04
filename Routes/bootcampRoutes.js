const express = require('express')
const router = express.Router()
const {
  getAllBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require('../Controllers/bootcampControllers')

router.route('/').get(getAllBootcamps).post(createBootcamp)
router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp)

// router.get('/', getAllBootcamps)

// router.get('/:id', getBootcamp)

// router.post('/', createBootcamp)

// router.put('/:id', updateBootcamp)

// router.delete('/:id', deleteBootcamp)

module.exports = router
