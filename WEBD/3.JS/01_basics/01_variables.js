const accountId= 123456;
let accountEmail="Amulya@gmail.com";
var accountpassword="123456";
acountcity="Bangalore";
let accountstate;


// accountId= 1234567; //Cant reassign a const variable'

accountEmail="emma@gmail.com";
accountpassword="1234567";
acountcity="Mysore";


console.log(accountId);//123456
console.log(accountEmail); //'emma@gmail.com'
console.log(accountpassword);//'1234567'
console.log(acountcity);//'Mysore'
console.log(accountstate);//undefined


console.table([accountId,accountEmail,accountpassword,acountcity,accountstate]);

//difference between let and var
// let is block scoped
// var is function scoped
//example of let
if(true){
    let a=10;
    console.log(a);
}
//console.log(a); //a is not defined
//example of var
if(true){
    var b=10;
    console.log(b);
}
console.log(b);// b is defined as it is function scoped


//prefer not to use var as it is function scoped



