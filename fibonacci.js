//Build a function to illustrate how to get this sequence to output.
function fibonacci(x) {
 var array = [];
 array[0]=0;
 array[1]=1;
 for (var i = 2; i <= x; i++) {
   array[i] = array[i-2] + array[i-1]
 }
 return array[x];
}
module.exports = fibonacci;
