var recipes = new Object({});
function updateObjectWithKeyAndValue(object,key,value){
  var newObject = Object.assign({},object,{[key]:value});
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object,key){
  var newObject1 = Object.assign({},object,key);
<<<<<<< HEAD
  delete newObject1[key];
  return newObject1;
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return object;
=======
  delete newObject1.key;
  return newObject1;
>>>>>>> 0450d4a8710a00e4dd54be85c76e0aab83720b9d
}