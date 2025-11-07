// property method

// let firstBtn = document.querySelector('.firstBtn');

// firstBtn.onclick = () => {
//     console.log("mai property method wala click ho");
// }

// acha same element par same event do bar nahi laga saktay ye last walay ko pureity dy ga or porana wala override ho jahy ga naya walay say or remove nahi kar sakty

// let firstBtn = document.querySelector('.firstBtn');

// firstBtn.onclick = ()=>{
//     console.log("first");
// }
// firstBtn.onclick = ()=>{
//     console.log("second");
// }


// addeventlistner method
// tu agar event ko remove karna hai ap siraf removeeventlistner ka use kar saktay ho tu clean wagira ka kam karna hai ye pir ap same element par same event hum multiple time hum log use kar pahy tu eventlistner ka use karo gy or remove k lie b yahi use karna hoga
// khas bath same element pe same event multiple time laga saktay hai

// let firstBtn = document.querySelector('.firstBtn');

// firstBtn.addEventListener('click', () => {
//     console.log("first Event Listener");
// })

// firstBtn.addEventListener('click', () => {
//     console.log("second Event Listener");
// })



// another way 
// aik location pe function create howa hai us ka reference hum multiple jaga use kar sakty hai us say faida ye hota hai k ap jo event laga ty ho wo remove b kar saktay ho

// let firstBtn = document.querySelector('.firstBtn');

// let showConsole = () => {
//     console.log("hello bahi");
// }

// firstBtn.addEventListener('click',showConsole); // chal gaya 
// firstBtn.removeEventListener('click',showConsole); // chal gaya or remove b hogaya
// // tu samjay yaha showConsole variable may reference hai function ka matlab copy tu jaha variable hai waha aik function memory location hai jaha call kiya hai waha do same reference pass ki hai hum nay



// Event Object
// us function k parameter may aik bydefault event b a raha hota hai us ko ap dekh b saktay ho console kar k 
// yaha type or target

// let firstBtn = document.querySelector('.firstBtn');

// firstBtn.addEventListener('click',(event)=>{
//     console.log(event);    
//     console.log(event.type);    
//     console.log(event.target);    
// })


// acha reference may b dekh saktay ho matlab fuction ko variable may band kar k 

let firstBtn = document.querySelector('.firstBtn');

let consoleBtn = (event) => {
    console.log(event)
}

firstBtn.addEventListener('click', consoleBtn);