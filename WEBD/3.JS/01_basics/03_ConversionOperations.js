let score=33

let stscore="33"
console.log(typeof score);//number

console.log(typeof stscore);//string

//conversion operations
//1. Number() => converts the string to number
console.log(Number(stscore));//33

let valueinnumber=Number(stscore);
console.log(valueinnumber);//33
console.log(typeof valueinnumber);//number


let score2="33abs";

console.log(Number(score2));//NaN
console.log(typeof Number(score2));//number


//"33" => 33
//"33abs" => NaN
//true => 1; false => 0
//null => 0
//undefined => NaN
//"" => 0


//2. parseInt() => converts the string to number
console.log(parseInt(stscore));//33
console.log(parseInt(score2));//33
console.log(parseInt("33.33"));//33
console.log(parseInt("33 33"));//33
console.log(parseInt("33 years"));//33
console.log(parseInt("years 33"));//NaN
console.log(parseInt("33years"));//33
//parseInt() is more strict than Number() function
//parseInt() only converts the first number in the string



let isl=1;

let boolisl=Boolean(isl);
console.log(boolisl);//true

let empts="";
let boolstr=Boolean(empts);
console.log(boolstr);//false

//1=>true
//0=>false
//""=>false
//"A"=>true || "0"=>true||"false"=>true || "null"=>true || "undefined"=>true || "NaN"=>true
//" "=>true
//null=>false
//undefined=>false