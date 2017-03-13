// Challenge: Write a function, isPrototypeOf, that works just like Object.prototype.isPrototypeOf

function isPrototypeOf(prototype, object) {
  // Base  case 0:
  if(prototype === null || prototype === undefined) {
    throw new TypeError;
  // Base case 1:
  } else if (Object.getPrototypeOf(object) === prototype) {
    return true;
  // Base case 2:
  } else if (Object.getPrototypeOf(object) === null) {
    return false;
  // Base case 3:
  } else if (object === Object.prototype) {
    return false;
  // Recursion:
  } else {
    return isPrototypeOf(prototype, Object.getPrototypeOf(object));
  }
}
