
exports.ResourceRepository =  function () {
  let data = [];

  this.save = function (resource) {
      data.push(resource);
  }

  this.length = function () {
      return data.length;
  }

  this.toString = function () {
    return 'Name: ResourceRepository';
  }
}
