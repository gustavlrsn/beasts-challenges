// Challenge: Write a function, isPrototypeOf, that works just like Object.prototype.isPrototypeOf

function isPrototypeOf(prototype, object) {
  // Base case 1:
  if(Object.getPrototypeOf(object) === prototype) {
    return true;
  // Base case 2:
  } else if (object === Object.prototype) {
    return false;
  // Recursion:
  } else {
    return isPrototypeOf(prototype, Object.getPrototypeOf(object));
  }
}
