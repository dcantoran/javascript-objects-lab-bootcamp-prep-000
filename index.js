var recipes = {};

function updateObjectWithKeyAndValue(object, value, key) {
  return Object.assign({}, object, key[value]);
}