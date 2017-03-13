// Beasts challenge 7: writing a toFixed by moving the decimal in the string representation of the value

function toFixed(value, precision) {
  value = moveDecimal(value, precision);
  value = Math.round(value);
  value = moveDecimal(value, -precision);
  return value;
}

function moveDecimal(value, distance) {
  value = value.toString().split('');
  // remove first digit if it's a zero.
  if(value[0] === '0') {
    value.shift();
  }

  // find current index of decimal
  var indexOfDecimal = value.indexOf('.');
  // if there is no decimal, set indexOfDecimal to length of array
  if(indexOfDecimal === -1) {
    indexOfDecimal = value.length;

  // else remove decimal from array
  } else {
    value.splice(indexOfDecimal, 1);
  }

  // new index for decimal after moving
  var newIndex = indexOfDecimal + distance;

  // if newIndex is less than 1, add 0's in the beginning and increase index, until new index of decimal is 1
  if (newIndex < 1) {
    while(newIndex < 1) {
      value.unshift('0');
      newIndex++;
    }
  }

  // if newIndex is larger than current length of array, add zeros until it's not
  while(newIndex > value.length) {
    value.push('0');
  }

  // add decimal (if newIndex is not in the end)
  if (newIndex !== value.length) {
    value.splice(newIndex, 0, '.');
  }

  return value.join('');
}
