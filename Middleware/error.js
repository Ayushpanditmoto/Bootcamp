const errorHandler = (err, req, res, next) => {
  // console.log(err);
  res.status(500).send({
    success: false,
    error: err.message,
  })
}

module.exports = errorHandler
