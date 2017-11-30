
exports.Resource =  function (url, status, headers) {
  this.url = url;
  this.status = status;
  this.headers = headers;

  this.getResource = function () {
    return { url: this.url, status: this.status, headers: this.headers};
  }
}
