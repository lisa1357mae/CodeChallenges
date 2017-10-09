function stringy(size) {
   let str = "";
   for (let i=0; i<parseInt(size); i ++){
     str += i % 2 ? 0 : 1;
   }
   return str;
 }

 module.exports = stringy;
