var recipes = {};

function updateObjectWithKeyAndValue(object, value, key) {
  Object.assign({}, object, key[value]);
  
}