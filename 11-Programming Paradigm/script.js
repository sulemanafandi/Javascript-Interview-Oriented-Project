// Progamming Paradigm :- tariqe hai way hai jis tarique say ap programming karty hai

// Imperative Programming
// let arr = [2, 4, 3, 6, 7, 8];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// yaha humay pata hai kasay kam kar raha hai 


// Declarative Programming
// arr.map(elem => console.log(elem))
// ye pata nahi hai ki ye internally kasay kam karta hai humay bas itna pata hai kiya kam karta hai


// procedural -> procedure / functions
// tu procedure may kam karta hai matlab step by step hum bata rahay hai ye karo pir ye karo acha laken structure nahi hai kahi b jamp karta hai program sahi execute karta hai example

// function consoleEnd() {
//     console.log('Program is End...!!')
// }

// function CheckNum(num) {
//     if (num === 0) consoleZero()
//     else if (num > 0) positive()
//     else negative();

// }

// function consoleZero() {
//     console.log('number os Zero')
//     consoleEnd()
// }

// function positive() {
//     console.log('number is positive')
//     consoleEnd()
// }

// function negative() {
//     console.log('number is negative')
//     consoleEnd()
// }

// let num = 12;

// CheckNum(num);


// jab ap imperative programmming kartay ho tu wo preffered karta hai ap structured programming karo structured means structured programming acha structure bolta hai ap sequence may kam karo gy ap if else use kar saktay ho iteration etc kar sak ty ho step by step ye b hoga

// Structured - seqyence(if-else), iterate etc

// way example

// function checkNumber(num){
//     if(num === 0){
//         console.log('number is Zero');
//     }else if(num > 0){
//         console.log(`number is ${num} Positive .`)
//     }else{
//         console.log(`number is negative`)
//     }
    
//     console.log(`Program is End`)
// }
// checkNumber(5)
// tu ye ap ka structure way hai aik function banaya or us may ap nay structured way may kam kiya 

// Functional programming
// Declarative means kiya kam karna hai na k kasay kam karta hai us say ap ka matlab nahi hota tu functinal programming or reactive programming Declarative may a ta hai
// tu functional programming focus karta hai what you want
// functional programming basicallay side effect ko avoid karta hai sideeffect ko
// ye avoid karta hai shared state ko
// ye focus karta hai Immetutibility ko matlab orignal cheezo ko change nahi karnay ki try karen gy 
// ye Declerative par focus karta hai q k Declerative hai
// ye loose coplig tu coupling losse ho chahiye 
// functional programming pure function hotay hai matalb aik specific input k lie aik specific output ap ko har bar dy raha hota hai example 

// function sum(a,b){
//     return a+b;
// }
// let result = sum(2,4);
// console.log(result);
// tu har bar same input k lie same output milay ga

// let arr = [2,4,5,7,8];

// function doubleTheElements(array){
//     let result = array.map((elem)=>{
//         return elem * 2;
//     })
//     return result;
// }
// let newArr = doubleTheElements(arr);
// console.log(newArr);



// Object - Oriented - Programming
// yaha jo b kam kartay ho wo classes or object k basis par karty ho
// singleton object (literal Object )ka instance create nahi kar saktay class based Object ka instance create kar saktay hai

// class Car{

//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     start(){
//         console.log('Starting the Car...');
//     }

//     stop(){
//         console.log('Stoping the Car...');
//     }

// }

// let bugatti = new Car('buggati',12);
// console.log(bugatti)
// bugatti.start()
// bugatti.stop()


// Event-Driven Programming
// ap click kar rahy ho kuch action karay ga agar ap nay hundle kiya hai tu
// event par kam karay ga pehlay aram karay ga jaisay event karo gy tu ye action may a jahy ga kam kar raha hoga

// function consoleClick(){
//     console.log('Event is Clicked')
// }


// Asynchronus Programming 
//  us ko hum programming may include hi nahi kartay q k ye tariqe hai programming ka laken concerate tariqa hai matlab multiple task ko aik sath start kar sakty ho
// Javascript byDefault synchornus in Nature hota hai
// synchornus matlab pehla line execute hoga pir dosra line execute hoga pir us tara or agar thisray line may kuch error a gaya tu ahgy wala code band ho jahy ga execute nahi hoga
// Asynchornus may saray task aik sath start hotay hai task1 start howa task two start howa task three start sab aik sath howa ab ho sakta hai task1 ko execute honay may 3 second lagy 3 second bad print karay ga kuch task2 ko start honay may 4 second lagy 4 second bad print karay ga kuch sab start aik sath hon gy

// example
// setTimeout aik higherOrder function hota hai apnay andar function or time ly raha hota hai
// setTimeout(() => {
//     console.log('hello')
// },2000);

// setTimeout(function(){
//     console.log('first')
// },3000)



