
exports.ResourceRepository =  function () {
  let data = [];

  this.create = function (key, resource) {
      data.push({key: resource});
  }

  this.save = function (resource) {
      data.push(resource);
  }

  this.length = function () {
      return data.length;
  }

  this.dump = function () {
    return data;
  }

  this.toString = function () {
    return 'Name: ResourceRepository';
  }
}
