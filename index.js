var recipes = {};

function updateObjectWithKeyAndValue(object, value, key) {
  var newObj = Object.assign({}, object, key[value]);
  return newObj;
}