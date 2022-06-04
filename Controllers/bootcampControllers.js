//@desc Get all bootcamps
//@route GET /api/v1/bootcamps
//@access Public

const getAllBootcamps = (req, res, next) => {
  res.status(200).json({
    message: 'Show all bootcamps',
  })
}

//@desc Get single bootcamps
//@route GET /api/v1/bootcamps/:id
//@access Public

const getBootcamp = (req, res, next) => {
  res.status(200).json({
    message: `Show bootcamp ${req.params.id}`,
  })
}

//@desc Create bootcamps
//@route POST /api/v1/bootcamps
//@access private

const createBootcamp = (req, res, next) => {
  res.status(201).json({
    message: 'Create a new bootcamp',
  })
}

//@desc Update bootcamps
//@route PUT /api/v1/bootcamps/:id
//@access private

const updateBootcamp = (req, res, next) => {
  res.status(200).json({
    message: `Update bootcamp ${req.params.id}`,
  })
}

//@desc Delete bootcamps
//@route Delete /api/v1/bootcamps/:id
//@access private

const deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    message: `Delete bootcamp ${req.params.id}`,
  })
}

module.exports = {
  getAllBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
}
