const BootcampModel = require('../Models/BootcampModels')
const asyncHandler = require('../Middleware/async')
const ErrorResponse = require('../Utils/errorResponse')
//@desc Get all bootcamps
//@route GET /api/v1/bootcamps
//@access Public

exports.getAllBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await BootcampModel.find()
  res.status(200).json({
    success: true,
    data: bootcamps,
  })
})

//@desc Get single bootcamps
//@route GET /api/v1/bootcamps/:id
//@access Public

exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await BootcampModel.findById(req.params.id)
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404)
    )
  }
  res.status(200).json({
    success: true,
    data: bootcamp,
  })
})

//@desc Create bootcamps
//@route POST /api/v1/bootcamps
//@access private

exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await BootcampModel.create(req.body)
  res.status(201).json({
    success: true,
    data: bootcamp,
  })
})
//@desc Update bootcamps
//@route PUT /api/v1/bootcamps/:id
//@access private

exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await BootcampModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  )
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404)
    )
  }
  res.status(200).json({
    success: true,
    data: bootcamp,
  })
})

//@desc Delete bootcamps
//@route Delete /api/v1/bootcamps/:id
//@access private

exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await BootcampModel.findByIdAndDelete(req.params.id)
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404)
    )
  }
  res.status(200).json({
    success: true,
    data: {},
  })
})
// module.exports = {
//     getAllBootcamps,
//     getBootcamp,
//     createBootcamp,
//     updateBootcamp,
//     deleteBootcamp,
//   }
