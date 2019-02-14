var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value} );
  
}

function destructivelyUpdateObjectWithKayAndValue(object, key, value) {
  object[key] = value;
  return object
}