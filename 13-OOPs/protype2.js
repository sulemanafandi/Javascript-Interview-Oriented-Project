// function Student(name,age){
//     this.name = name;
//     this.age = age;
//     this.IntroduceMySelf = function(){
//         console.log(`My Name is ${this.name} and Age is ${this.age}`)
//     }
// }
// let s1 = new Student('salman',23);
// let s2 = new Student('usman',17);
// s1.IntroduceMySelf();
// s2.IntroduceMySelf();
// console.log(s1);
// console.log(s2);

// tu yaha oper replication wala syntax tu hata diya 
// yaha oper this ka object alag alag context k lie alag alag hai tu ye alag memory q ly raha hai aisa kuch kar saktay hai alag alag memory na ly exictly aisa kar saktay hai prototype ki help say acha say memory ka (buget) hota memory efficient kam hota hai
// tu agar consloe may prototype dekho to prototype dono may hi same hai
// agar hum introduceMySelf method ko protype may dal dy tu constructor function automatically constructor function ly raha hota hai prototype ki maniually setup ki need nahi parhti prototype automatically set ho jata hai
// tu jab jab ap new object banaho gy protype attached hota jahy ga tu q na hum introduceMySelf  method ko hi protype may dal dy tu alag alag memory nahi banay gi


// function Student(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Student.prototype.IntroduceMySelf = function () {
//     console.log(`My Name is ${this.name} and Age is ${this.age}`)
// }
// let s1 = new Student('salman',23);
// let s2 = new Student('usman',17);
// s1.IntroduceMySelf();
// s2.IntroduceMySelf();
// console.log(s1);
// console.log(s2);


// tu introduceMySelf ko hum nay Prototype may dal diya memory tu bacha li 



// again repeated
// function BankAccount(holderName, balance = 0) {
//     this.holderName = holderName;
//     this.balance = balance;
//     this.deposit = function (balance) {
//         this.balance += balance;
//     }
//     this.withdraw = function (balance) {
//         this.balance -= balance;
//     }
// }

// let s1 = new BankAccount('salman', 200)
// let s2 = new BankAccount('Usman', 1000)
// let s3 = new BankAccount('Moiz', 2000)
// console.log(s1)
// console.log(s2)
// console.log(s3)


// again repeated
// performance oriented
// jo cheezay sab k lie aivalable karani hai wo prototype may dala karo
// ab method may falto kam karna nahi hai jo b ap ko lag raha hai repeat horaha hai us ko prototype may dal do or agar nahi b ho raha hai prototype may pir b dal do or sab may same kam karna hai prototype may dal do 
// function BankAccount(holderName, balance = 0) {
//     this.holderName = holderName;
//     this.balance = balance;
// }
// BankAccount.prototype.deposit = function (balance) {
//     this.balance += balance;
// }
// BankAccount.prototype.withdraw = function (balance) {
//     this.balance -= balance;
// }
// let s1 = new BankAccount('salman', 200)
// let s2 = new BankAccount('Usman', 1000)
// let s3 = new BankAccount('Moiz', 2000)
// console.log(s1)
// console.log(s2)
// console.log(s3)

// so
// prototype
// In Javascript OOPs it allow us to shere methods b/w all instances of a class or constructor functions,making code memory efficient
// Javascript is a prototypical - based for prototype-based language

// How to it work ?
// Every object has an internal link to another object called its prototype
// When you access a property or method javascript looks for it in the object
// * If not found if climbs the prototype chain to find it

// so what about the last in JS
// Javascript introduce the class keyboard in a ES6 but
// class is just syntatic sugar- underneath its still using prototype


// factory functiion prototype only object not a constructor function
// function Student(name){
//     return{
//         name,
//     }
// }
// let result = Student('salman');
// console.log(result);

// har object k pass aik or object present hota hai wo hota hai protype object ye link hota hai dosray object say or us object ko hum kehtay hai Prototype object jo ka saray instance k sath link hoga us ko prototype objwct kehtay hai

// pehlay property or method ko access karta hai us may jab nahi milta hai us k bad prototype may jamp karta hai pir waha b agar na ho pir us k prototype pir us k prototype us tara search karta hai

// class jo hai sirf aik payara sa syntax hai matlab syntatic suger behind the seen ye abi b prototype hi use kar raha hota hai construtor function use kar raha hota hai. ocnstrutor function may jo method ap bana rahy ty us ko manually ap ko set karna par raha ta protype may but class may wo kud hi prototype may set hota hai

// class Student{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     introduceMySelf(){
//         console.log(`My Name is ${this.name}, age is ${this.age}`)
//     }
// }

// let s1 = new Student('salman',13);
// console.log(s1);

// ab samaj aya k hum factory function ko use nahi karen gy construtor function ko use karen gy or constructor function ko use nahi karen gy class us say b acha hai jo k ES6 may introduced howa hai behind the seen construtor function use ho raha hota hai prototype.constructor may jab b naya instance create kartay tay tu alaga alag memory ly raha hota ta or us ko solve karnay k lie humay prototype k andar dalna parta ta.class may dalna nahi par raha hai wo bydefault prototype k andar hi hai class syntax ki achi sifat hai

