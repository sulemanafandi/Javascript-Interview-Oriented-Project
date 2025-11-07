// Number
// let num = 2212;
// let num1 = 123.454;
// console.log(num);
// console.log(num1);
// console.log(typeof num);
// console.log(typeof num1);


// Constructor Method vs literial method
// let num = new Number(123);  // object type
// let num1 = new Number('123'); // object type
// let num3 = '123454';  // primitive type
// let num4 = 123454;    // primitive type
// let num5 = Number('123');  // primitive type
// let num6 = Number(123);    // primitive type
// console.log(num);  // output Number {123} is object
// console.log(num1);  // output Number {123} is object
// console.log(num3,typeof num3); // output 123454 string
// console.log(num4,typeof num4); // output 123454 'number'
// console.log(num5,typeof num5); // 123 'number'
// console.log(num6,typeof num6); // 123 'number'
// Number is built-in object



// Number ko yaha koyi initialize declare nahi karty direct dekhty hai
// Number Property means property jo ap ko info dy rahi hoti hai
// console.log(Number)  //output ƒ Number() { [native code] }
// console.log(Number.MAX_VALUE)   //output 1.7976931348623157e+308
// console.log(Number.MIN_VALUE)  //output 5e-324
// console.log(Number.POSITIVE_INFINITY)  // Infinity
// console.log(Number.NEGATIVE_INFINITY) // -Infinity
// console.log(Number.Infinity) //NaN
// console.log(Number.isNaN) //ƒ isNaN() { [native code] }
// console.log(0/0) //NaN
// console.log(1/0) //INFINITY
// let a = 0/0;
// console.log(Number.isNaN(a)); //true
// console.log(isNaN(a)); //true  it is method
// console.log(Number.EPSILON) //2.220446049250313e-16



// Number method means method jo humay kuch kam kar k dy 

// let num = 123.456;
// console.log(Number.isInteger(num)); // output false
// console.log(Number.parseInt(num)); // output 123 acha pareInt float ko convert karta hai integer may
// console.log(Number.parseFloat(num)) //output 123.456 float may a raha hota hai
// // ye sab tab use karty hai jab database may ye DOM may string may value a rahi hoti hai us ko convert kar saktay hai int ye float may
// console.log(Number.isFinite(num)); // true
// console.log(Number.isFinite(123)); // true
// console.log(Number.isFinite('asv')); // false
// console.log(Number.isFinite(Infinity)); // false


// Number Instance Method
// let num = 123443;
//  console.log(num.toFixed()); // output 123443 
//  console.log(typeof num.toFixed()); // output string so to convert String
// console.log(num.toFixed(3)); // output 123443.000 ye point k bad teen digit tak fixed kar deta hai ye round of b karta hai acha number ko fixed kar deta hai
// console.log(num.toExponential()) //output 1.23443e+5 and string may convert karta hai
// console.log(num.toPrecision()) //output 123443 jo  may cahta ho
// console.log(num.toPrecision(3)) // output 1.23e+5 laken exponet may b deta hai jab ap us tara likho gy.string may convert karta hai
// console.log(num.toString()); //output 123443 ye ap ka string may convert karay ga
// console.log(typeof num.toString()); // output string

// let num2= new Number('2145');

// console.log(num2) //output Number {2145}
// console.log(num2.valueOf());// output 2145 return Number object  to primitive value


// Math
// javascript provide built-in math object 
// let num = 123.56;
// console.log(Math.round(num)); //output 124 nearest integer
// console.log(Math.floor(num)); // output 123 int may dy ga floor means ground actual number dy ga
// console.log(Math.ceil(num)); // oputput 124 int may dy ga ceil means oper chaht tu oper wala number dy ga

// console.log(Math.floor(12.3)); // output 12
// console.log(Math.ceil(12.3));// output 13

// console.log(Math.floor(1)) //output 1
// console.log(Math.floor(1.5))//output 1
// console.log(Math.floor(1.9))//output 1
// console.log(Math.floor(2.6))//output 2
// console.log(Math.floor(-2.6))//output -3

// console.log(Math.ceil(1)) //output 1
// console.log(Math.ceil(1.5))//output 2
// console.log(Math.ceil(1.9))//output 2
// console.log(Math.ceil(2.6))//output 3
// console.log(Math.ceil(-2.6))//output -2

// console.log(Math.abs(-3)) //output 3 so abs means absolute
// console.log(Math.abs(3)) //output 3
// console.log(Math.abs(0))//output 0
// console.log(Math.abs(-0))//output 0

// console.log(Math.sqrt(4)) //output 2
// console.log(Math.sqrt(2)) //output 1.4142135623730951
// console.log(Math.sqrt(9)) //output 3

// console.log(Math.pow(2,3)) //output 8
// console.log(Math.pow(2,5)) //output 32
// console.log(Math.pow(5,3)) //output 125
// console.log(2**5) //output 32

// console.log(Math.min(3,56,32,21,13)); // output 3
// console.log(Math.max(3,56,32,21,13)); // output 56


// Math.random() aik both use honay wala method hai
// ye 0 or 1 k darmiyan value deta hai 0 inclusive matlab include hota hai or 1 exclusive matlab incuded nahi hota

// console.log(Math.random()) //output 0.9026408604104831
// console.log(Math.random()) //output 0.5026124118956797
// console.log(Math.random()) //output 0.99259649587977


// console.log(Math.random()*10) //output 9.051248094522998
// // us tara 0 say 9 tak ahy ga laken 10 nahi ahy ga garentee

// // mujay kabhi need parta hai array ka legth 5 hai may chata ho us ka 0 say 4 index tak index generate kar waho waha par may kuch calculation karo
// console.log(Math.random()*4) //output 1.1512977762532008 tu four kabhi nahi ahy ga

// hum shifting b kar saktay hai matlab w number b la saktay hai
// console.log(Math.random()*4 + 1) //output 4.958547051720284

// acha mujay minimum value say maximum value tak jana hai tu ye hai hazir janab or include b karna hai maximum or minimum ko
// let min = 5;
// let max = 25;
// let result =  Math.floor(Math.random()*(max - min + 1) + min)
// console.log(result); // output apka 5 say 25 tak ahy ga done 


