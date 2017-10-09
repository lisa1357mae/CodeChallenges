function validEmail( email ) {
 var validation = /^[a-zA-Z][A-Za-z0-9_\.]*\@[A-Za-z0-9_\-\.]{1,}\.\w+$/;
 var result = validation.test(email);
 return result;
  //return 'abcdefghijklmnopqrstuvwxyz'.includes( email[0] );
};

module.exports = validEmail;
