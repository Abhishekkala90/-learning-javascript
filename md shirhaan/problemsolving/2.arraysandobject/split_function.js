// Split is used to split the string and form an array based on the delimiter.
// split()is a string function.

// It will accept a delimiter as an argument and it will split the array based on the delimiter and creates a new array.
let str='Abhishek is a handsome guy';
let Splitstr=str.split();
console.log(Splitstr); 
let emailIds="eee@gmail.com  ,    cat@gmail.com    ,dog@gmail.com,eee@sss.com ";
let emailsplit=emailIds.split(',');
console.log(emailsplit);
console.log(emailsplit.map(email=>email.trim()));
//trim removes starting and ending spaces.