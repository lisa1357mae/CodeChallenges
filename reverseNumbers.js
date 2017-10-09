
//Given a non-negative integer, return an array containing a list of independent digits in reverse order.
//Example: `348597 => [7,9,5,8,4,3]`

//Hint: it may help to convert to a string -> array  and then convert each element back to a number

function reverseNumbers(num) {
  var digits = num + '';
  var result = [];
  for (var i = 0, length = digits.length; i < length; i++) {
    result[length - 1 - i] = +digits[i];

}
return result;
}

module.exports = reverseNumbers;
