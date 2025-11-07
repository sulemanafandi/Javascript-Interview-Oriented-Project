// Object Oriented Programming 
// Object Oriented Programming(OOPs) in Javascript os a programming paradigm based on the concept of objects.

//These objhects encapsulatw both data or property (attributes) and hte functions that operate on that data(methods)

// Javascript, while not a purely class-based language like C++, is heavilly object-oriented and supports OOP principle through its  Prototype-based model and class syntax

// Class:
// A Blueprint or Templete, encapsulates data (properties) and function (methods)

// Object:
// instance of a class, Each object has its own unique set of value for its properties

// matlab class ka use use kar k hum multiple objects bana sakaty hai or us object ko hum instance kehtay hai new key word ka use kar k banatay hai us ka pora seperate meomory allocation hota hai class humara blue print taayr kar k deta hai jis may name, age, yahi cheezay dalni hai or jo method hai wahi use karnay hai leken apnay data k sath hum single single objects single single instance hum create kar rahy hotay hai

// pora k pora class banaya or us ko intialize karnay k lie constructor k use kr liya

// class Car {
//     constructor(name, color, mileage) {
//         this.name = name;
//         this.color = color;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log(`${this.name} is Starting...`)
//     }
//     stop() {
//         console.log(`${this.name} is Stoping...`)
//     }
// }

// // yaha nichy car k instance create kiya hai aik BMW aik Toyota aik Bugati un ko hum object kehtay hai
// let BMW = new Car("BMW", "Dark Blue", 45);
// let Toyota = new Car("Toyota", "Silver", 28);
// let Bugatti = new Car("Bugatti", "Brown", 5);
// console.log(BMW);
// console.log(Toyota);
// console.log(Bugatti);

// tu class aik blueprint hai jis say hum multiple instance create karty hai ginay hum objects kehtay hai


// Constructor
// A constructor is a special type of method within class that is automatically called when a new object instance of that class is created.
// It is primarily used to initialize object properties with specific value or perform setup task for the object

// Constructor aik type ka method hai us may kuch parameter dy ty hai tu constructor special method hai jo pehlay say ban rakha hai or agar constructor nahi banahy gy tu default constructor run hoga ho default empty hota hai tu kul mila k constructor run hoga jab b hum instance create karengy tu sab say pehlay constructor run hoga or us ojbect ki cheezo ko initalize karay ga tu constructor akag kuch nahi hai method hi hai

// T characteristics of constructor 
// purpose :to create an initialize objects
// Automatic innovation: called automatically when an object is created using the new keyboard
// Initialization : sets initial value for object properties
// Implicit constructor :if a class does not have a constructor Javascript provide a default empty constructor
// Derived class constructor if a drived class constructor does not have a constructor it called the parent constructor passing along any argument (matlab agar child may constructor nahi banaya hai tu ye kud parent k constructor ko call kar de ga laken call zaroor kary ga)

// For Pillar of OOP


// Abstruction - hiding complexity and showing only the essential feature
// tu user ko wahi cheeza dikhani hai jis ki us ko need hai colpexity ko khatam karna hai siraf itna feature show karo jitna k user ko show karna hai tu internal working say koyi matlab nahi hai example car wala user chata hai k may accerate honay par car acculerate ho mujay dashbord par nazar ahy car accelerate ho gahi us speed say chal raha ho fuel itna kam ho raha hai kaisa ho raha hai us say matlab nahi hai calculation ho raha hai ye ap ka kam hai user ka nahi programmer ka kam hai user ka kam use karna  maqsad ye hai k jo b ap method wagira likh rahy ho us tariqy say logic likho k single method ko call kar k user ka kam ho jahy logic user ko na lihkna paray

// Encapsulation - hiding data inside objects and provide security 
// tu encapsulation kehta hai k security provide karo jo data user ko nahi show karna us ko restricted karo wo chahy b access na kar pahy tu aisa data jo ap ko nahi dekhana hai hide karna hai tu Ensapsulation ka use karay pivite date bana to encapsualte kar deta hai

// inheritance - using properties and methods from another object/class
// parent k pass jo jo feature hai data hai us ko hum inherit kar rahay hai child may tu parent say inherit hota hai child may or kuch extra feature hotay hai child may us ko hum inheritance kehtay hai tu basically ye DRY function k lie a ya ta means DON't Reapatyour  Self k kud ko repeat mat karo  
// example; pehlay phone ta pir hum nay kuch feature extra laga kar smart phone bana diya tu hum nay usi phone ka feature laga kar smart phone bana diya ye hum nay pehlay walay phone say inherit kar k  smart phone bana diya tu khas bath ye hai porani jo b cheezay hoti hai hum us ko inharit kar k use kar saktay hai

// Polymorphism - same method behaving differently based on the object
// ap k parent k pass hai same method hai Start ka or ap k child k pass b same method hai Start ka tu pehlay konsa wala run hoga parent ya child yahi hota hai Polymorphisms k same method hai but run differnetly kar raha hai body alag alag hai



// Abstruction
// means hiding complex implementation details and showing only the essentail features to the user
// Goal : Hiding complexity(what is irrelevent)

// class Car{
//     fuel = 100;

//     burnFuel(){
//         this.fuel -= 1
//     }

//     start(){
//         this.burnFuel();
//         console.log(`Car is Starting...`)
//     }
// }

// let bugati = new Car();
// console.log(bugati)
// let bug = bugati.start();
// console.log(bugati);
// may chata ho k jab car start ho jahy tu aik letter fuel burn ho jahy tu hugaya
// tu abstruction kehta hai k app ko start karnay k need ti ap nay start method provide kar diya or sath hi sath burn fuel karna hai tu burn fuel alag say karnay ki need nahi hai ap nay siarf or siraf start method provid kar diya yaha par start call karnay k yaha car start b ho gaya pir burn b hoga tu hum nay complexity ko hide kar diya aik single method k andar tu accerate k method ko b start may dal kar car ko aik single start karnay par burn or sath may accerate sab dy saktay ho tu ye hai abstruction k may nay both sari multiple complexities ko may nay hide kar diya wrap kar diya aik single method k andar or us single method ko may call karon ga siraf start karon ga kaisay burn hoga accelerate hoga etc sab jo program kar rakha hai wo jany 

// acha ab encapsulation kiya kehta hai k start tu kar diya absruction b sahi karm kar gaya laken burnfuel ko hum bahar b access kar pa rahay hai or direcly fuel may chirkani b kar pah rahy hai but security ka kiya 
// example

// class Car{
//     fuel = 100;

//     burnFuel(){
//         this.fuel -= 1
//     }

//     start(){
//         this.burnFuel();
//         console.log(`Car is Starting...`)
//     }
// }

// let bugati = new Car();
// bugati.start();
// console.log(bugati);
// bugati.burnFuel();
// console.log(bugati);
// bugati.fuel = 10000;
// console.log(bugati);
// tu us k lie a ta hai encapsulation . abstruction complexity hide kar raha hota hai k app un saray method ko jin ko access dena hai ap unhi sari method k access do jin may access nahi dena un ko private kardo access mat do encapsulate kardo



// class Car{
//     #fuel = 100;

//     burnFuel(){
//         this.#fuel -= 1
//     }

//     start(){
//         this.burnFuel();
//         console.log(`Car is Starting...`)
//     }
// }

// let bugati = new Car();
// bugati.start();
// console.log(bugati);
// bugati.burnFuel();
// console.log(bugati);
// tu ya par # hash tag laga kar hum private field may chirkani nahi kar saktay burnfuel kar saktay hai laken fuel may chirkani nahi kar saktay

// acha agar ap burnfuel ki access b nahi dena chatay tu us k agay b hash tag lagahy#


// class Car{
//     #fuel = 100;

//     #burnFuel(){
//         this.#fuel -= 1
//     }

//     start(){
//         this.#burnFuel();
//         console.log(`Car is Starting...`)
//     }
// }

// let bugati = new Car();
// bugati.start();
// console.log(bugati);
// bugati.#burnFuel();
// console.log(bugati);
// tu may ab siraf strat k method k andar access kar sakta ho 
// tu us tariqy say hum security provide kar saktay hai encapsulation ki help say ap complixity hide kar saktay hai abstruction ki help say exictly

// aik or example 

// class BankAccount{
//     constructor(holderName,balanceName = 100){
//         this.holderName = holderName;
//         this.balanceName = balanceName;
//     }
// }

// let salmanAccount = new BankAccount('Muhammad Suleman',500);
// console.log(salmanAccount);

// kiya may deposite kar sakta ho definatly

// class BankAccount {
//     constructor(holderName, balance = 100) {
//         this.holderName = holderName;
//         this.balance = balance;
//     }
//     deposit(balance) {
//         this.balance += balance;
//     }
// }

// let salmanAccount = new BankAccount('Muhammad Suleman', 500);
// console.log(salmanAccount);
// salmanAccount.deposit(200);
// console.log(salmanAccount);
// yaha abstruction ko kar rakha hai balance dena hai deposit ho jahy ga laken console may may hum add kar saktay hay encapsulation nahi howa hai tu balance ka access nahi dena hai bahar may

// class BankAccount {

//     #balance = 100;

//     constructor(holderName, balance = 100) {
//         this.holderName = holderName;
//         this.#balance = balance;
//     }
//     deposit(balance) {
//         this.#balance += balance;
//     }
// }

// let salmanAccount = new BankAccount('Muhammad Suleman', 500);
// console.log(salmanAccount);
// salmanAccount.deposit(200);
// salmanAccount.#balance = 1342;
// console.log(salmanAccount);
// # tag lag k privte kar diya 

// tu ye tu samaj a ta hai hum nay private bana diya but aik or parayshani hai q k hum nay private bana diya ab humay agar agar balance set karnay ki need par gahi tu hum balance ko set nahi kar pahay gy bal get b nahi kar pahy gy ye problem hai 

// class BankAccount {

//     #balance = 100;

//     constructor(holderName, balance = 100) {
//         this.holderName = holderName;
//         this.#balance = balance;
//     }
//     deposit(balance) {
//         this.#balance += balance;
//     }
//     setBalance(balance) {
//         if(isNaN(balance)){
//             console.error('Invalid Balance');
//             return;
//         }
//         console.log(`Balance Set SuccessFully`)
//         this.#balance = balance;
//     }
//     getBalance() {
//         return this.#balance
//     }
// }

// let salmanAccount = new BankAccount('Muhammad Suleman', 500);

// salmanAccount.setBalance(3000);
// console.log(salmanAccount.getBalance());



// setBalace or getBalance k pass aik special syntax b hai 
// faida ye hoga k agar may koyi string dal do tu ye error dega
// class BankAccount {

//     #balance = 100;

//     constructor(holderName, balance = 100) {
//         this.holderName = holderName;
//         this.#balance = balance;
//     }
//     deposit(balance) {
//         this.#balance += balance;
//     }
//     set Balance(balance) {
//         if(isNaN(balance)){
//             console.error('Invalid Balance');
//             return;
//         }
//         console.log(`Balance Set SuccessFully`)
//         this.#balance = balance;
//     }
//     get Balance() {
//         return this.#balance
//     }
// }

// let salmanAccount = new BankAccount('Muhammad Suleman', 500);

// salmanAccount.Balance = 999;
// console.log(salmanAccount.Balance)


// ap name change b kar sakty ho

// class BankAccount {

//     #balance = 100;

//     constructor(holderName, balance = 100) {
//         this.holderName = holderName;
//         this.#balance = balance;
//     }
//     deposit(balance) {
//         this.#balance += balance;
//     }
//     set Setter(balance) {
//         if(isNaN(balance)){
//             console.error('Invalid Balance');
//             return;
//         }
//         console.log(`Balance Set SuccessFully`)
//         this.#balance = balance;
//     }
//     get getter() {
//         return this.#balance
//     }
// }

// let salmanAccount = new BankAccount('Muhammad Suleman', 500);

// salmanAccount.Setter = 999;
// console.log(salmanAccount.getter);
// faida ye hai k string dy gy tu error ahy ga or set tu hum normal method say kare rahy hai attribute ki tara kar rahy hai laken auctually may hai ye method validation k logic acually may perform kar raha hai ye 
// tu abstruction or encapsulation hum sath sath use karen gy


// Encapsulation 
// it means wrapping data (properties )and method (function) together into a single unit,usually a class or object and returcting direct access to some of the components

// why Encapsulte?
// Protect data from unauthorized access
// Prevents misuse of code 
// Makes code eaiser to maintain
// Support data hiding 
// Goal: Hide internal detail and only whats neccerary



// Inheritance matlab kuch b parent say chhild ko wo property pass ho rahi hai like parent ki eye color hair clor kuch b parent ki cheezay child ko pass ho rahi hai usay hum kehtay hai inherit karna proramming may b ais hi hota hai like class A name hum nay banaya hai or class b bi hai tu class a pass property 1 peroerty 2 method 1 hai or may chata ho class b may class a k property honi chaye or sath hi sath kuch alag property b honi chahehiye
// Inheritance
// Inheritance is an OOP concept where one calss(child) can acqiure properties and methods of anothre calss parent 
// why use Inheritance?
// Reuse exixting code
// Create Logical relationship (is-a)
// Reduce duplication
// Eaiser maintance and scalabity
// so DRY law Dont Repaet Yourself q k class ko repeat nahi karna inherit kar k dosray class may un ki property method may ly ana hai

// class Car {
//     constructor(brand, color) {
//         this.brand = brand;
//         this.color = color;
//     }
//     start() {
//         console.log(`${this.brand} is Starting...`)
//     }
//     stop() {
//         console.log(`${this.brand} is Stopping...`)
//     }
// }

// class ElectricCar extends Car {
//     Charging() {
//         console.log(`${this.brand} is Charging...`)
//     }
// }

// let tesla = new ElectricCar('SuperCar','Black In White');
// console.log(tesla);
// tesla.start();
// tesla.stop();
// tesla.Charging();
// elctricCar parent k constructor ko use kar raha hai
// so electric Class is a child class or derived class nad Car class is parent class or super class


// class Car {
//     constructor(brand, color) {
//         this.brand = brand;
//         this.color = color;
//     }
//     start() {
//         console.log(`${this.brand} is Starting...`)
//     }
//     stop() {
//         console.log(`${this.brand} is Stopping...`)
//     }
// }

// class ElectricCar extends Car {
//     constructor(battery){
//         this.battery = battery;
//     }
//     Charging() {
//         console.log(`${this.brand} is Charging...`)
//     }
// }

// let tesla = new ElectricCar('SuperCar');
// console.log(tesla);
// so ab ye parent may b constructor hai or child may b constructor hai ab ye pehlay child ko construct karey ga agar dono may howa tu error dy ga
// tu us k lie ye wala kam karay gy


// class Car {
//     constructor(brand, color) {
//         this.brand = brand;
//         this.color = color;
//     }
//     start() {
//         console.log(`${this.brand} is Starting...`)
//     }
//     stop() {
//         console.log(`${this.brand} is Stopping...`)
//     }
// }

// class ElectricCar extends Car {
//     constructor(brand,color,battery){
//         super(brand,color);

//         this.battery = battery;
//     }
//     Charging() {
//         console.log(`${this.brand} is Charging...`)
//     }
// }

// let tesla = new ElectricCar('Tesla','Blue',99);
// console.log(tesla);
// tesla.start();
// tesla.stop();
// tesla.Charging();

// let Car1 = new Car('Frado','Black',101);
// console.log(Car1)



// Polymorphism
// Poly means many and morph means forms so Polymorphisms = many forms

// it allow differnet classes to define methods with the same name but differnet bahaviuor(or we can say that has more than one form )
// matlab aik button par video play kar raha ho usi button par music play kar raha ho or usi button par game play kar raha ho button aik hai laken different different cheezo may diiferent differnet context may wo kam karay ga thats is called polymorphism

// class MediaPlayer{
//     play(){
//         console.log('play Media');
//     }
// }

// class Music extends MediaPlayer{
//     play(){
//         console.log('play music')
//     }
// }

// class Video extends MediaPlayer{
//     play(){
//         console.log('play Video')
//     }
// }
// let o1 = new Music();
// o1.play();

// let o2 = new Video();
// o2.play();

// let o3 = new MediaPlayer();
// o3.play();
