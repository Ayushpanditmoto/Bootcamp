const BootcampModel = require('../Models/BootcampModels')
//@desc Get all bootcamps
//@route GET /api/v1/bootcamps
//@access Public

exports.getAllBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await BootcampModel.find()
    res.status(200).json({
      success: true,
      data: bootcamps,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    })
  }
}

//@desc Get single bootcamps
//@route GET /api/v1/bootcamps/:id
//@access Public

exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await BootcampModel.findById(req.params.id)
    res.status(200).json({
      success: true,
      data: bootcamp,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    })
  }
}

//@desc Create bootcamps
//@route POST /api/v1/bootcamps
//@access private

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await BootcampModel.create(req.body)
    res.status(201).json({
      success: true,
      data: bootcamp,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    })
  }
}

//@desc Update bootcamps
//@route PUT /api/v1/bootcamps/:id
//@access private

exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await BootcampModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    )
    res.status(200).json({
      success: true,
      data: bootcamp,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    })
  }
}

//@desc Delete bootcamps
//@route Delete /api/v1/bootcamps/:id
//@access private

exports.deleteBootcamp = (req, res, next) => {
  try {
    BootcampModel.findByIdAndDelete(req.params.id)
    res.status(200).json({
      success: true,
      data: {},
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    })
  }
}
// module.exports = {
//     getAllBootcamps,
//     getBootcamp,
//     createBootcamp,
//     updateBootcamp,
//     deleteBootcamp,
//   }
