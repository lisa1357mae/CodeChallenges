var today = "June 16, 2017";
// Coupon Object
function Coupon( code, expiration ) {
  this.code = code;
  this.expiration = expiration;
}
Coupon.prototype.verifyDate = function(expiration, comparison){
 return new Date(expiration) > new Date(today);
}
Coupon.prototype.checkCoupon = function(){
    return this.verifyDate( this.expiration, today ) && this.code.length >= 4 && this.code.length <= 8;
}
// test
//var superSaver = new Coupon("America","July 4, 2017");
//var eoyPromo = new Coupon("ENJOY2017","December 31, 2016");

module.exports = Coupon;
