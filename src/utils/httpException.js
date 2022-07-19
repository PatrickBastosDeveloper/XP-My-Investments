class HttpException extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    // this.message = new message;
  }
}

module.exports = HttpException;
