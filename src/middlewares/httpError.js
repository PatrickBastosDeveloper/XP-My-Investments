const httpError = (err, _req, res) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
};

module.exports = httpError;