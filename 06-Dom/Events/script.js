// Event 

// Mouse

// let firstBtn = document.querySelector('.firstBtn');

// // click
// firstBtn.addEventListener('click',function(){
//     console.log("click")
// })

// // double click
// firstBtn.addEventListener('dblclick',function(){
//     console.log("double click")
// })

// mouse down + mouse up = click

// let firstBtn = document.querySelector('.firstBtn');
// let box = document.querySelector('.box');

// firstBtn.addEventListener('mousedown',function(){
//     console.log('mouse down');
// })
// firstBtn.addEventListener('mouseup',function(){
//     console.log('mouse up');
// })

// mouse enter + mouse leave + mouse move + context menu (right click) +  aux click (same right click)
// let box = document.querySelector('.box');

// box.addEventListener('mouseenter', ()=> {
//     console.log('mouse enter');
// })
// box.addEventListener('mouseleave', () => {
//     console.log('mouse leave');
// })
// box.addEventListener('mousemove', () => {
//     console.log('mouse move');
// })
// box.addEventListener('contextmenu', () => {
//     console.log('mouse context menu means right click ');
// })
// same oper walay ki tara hai contextmenu ki tara
// box.addEventListener('auxclick', () => {
//     console.log('aux click');
// })


// keyboard
// key up + key down = key press
// let firstBtn = document.querySelector('.firstBtn');

// firstBtn.addEventListener('keypress', function () {
//     console.log('key Press');
// })
// firstBtn.addEventListener('keyup', function () {
//     console.log('key up');
// })
// firstBtn.addEventListener('keydown', function () {
//     console.log('key down');
// })


// form
// let firstBtn  =document.querySelector('.firstBtn');
// let box = document.querySelector('.box');
// let nameInput = document.querySelector('.name');
// let form = document.querySelector('form');

// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     console.log("submit")
// })

// reset
// form.addEventListener('reset',function(){
//     console.log("form reset")
// })

// // focus matlab input par click kar k focus ho jahy
// nameInput.addEventListener('focus',function(){
//     console.log("input field in focus")
// })

// // blur matlab fucus ka ult de active hona 
// nameInput.addEventListener('blur',function(){
//     console.log('input field out of focus "blur" ')
// })  

// // input  matlab real time value gain
// nameInput.addEventListener('input',function(){
//     console.log(nameInput.value)
// })

// // change matlab ap nay input ko fill kar k submit par click kiya tu hi us k bad kam karta hai real time kam nahi karta
// nameInput.addEventListener('change',function(){
//     console.log("input field change")
// })


// Touch Event
// touchstart
// let box = document.querySelector('.box');


// box.addEventListener('touchmove',()=>{
//     console.log("mobile screen touch");
// })

// // scroll
// window.addEventListener('scroll',function(){
//     console.log("scroll")
// })

// // load
// window.addEventListener('load',function(){
//     console.log("load")
// })


// // unload
// window.addEventListener('unload',function(){
//     console.log("unload")
// })

// // resize
// window.addEventListener('resize',function(){
//     console.log("resize")
// })

// // copy
// let h1 = document.querySelector('h1');

// h1.addEventListener('copy',function(){
//     console.log("copy heading H1")
// })

// another way
// // copy
// let h1 = document.querySelector('h1');

// h1.addEventListener('copy',function(){
//     console.log(window.getSelection().toString())
// })

// // copyright
// window.addEventListener('copy',function(){
//     console.log("copyright")    
// })

// // cut
// let h1 = document.querySelector('h1');

// h1.addEventListener('cut',function(){
//     console.log("cut heading h1")
// })

// // paste
// let h1 = document.querySelector('h1');

// h1.addEventListener('paste',function(){
//     console.log("paste heading h1")
// })
// // online
// window.addEventListener('online',function(){
//     console.log("online")
// })
// // offline
// window.addEventListener('offline',function(){
//     console.log("offline")
// })  

// // error
// window.addEventListener('error',function(){
//     console.log("error")
// })

// // select
// nameInput.addEventListener('select',function(){
//     console.log("input field select")
// })


// Qno1 : Build an increment decrement counter similar to what you see in the shopping cart and Amazon or Flipkart

// let dec = document.querySelector('.decBtn');
// let inc = document.querySelector('.incBtn');
// let countValue = document.querySelector('.counterValue');

// dec.addEventListener('click',()=>{
//     let value = Number(countValue.innerText);
//     if(value <= 1){
//         return;
//     }
//     countValue.innerText = value - 1;
// })

// inc.addEventListener('click',()=>{
//     countValue.innerText = Number(countValue.innerText) + 1;
// })


// Create a simple form and display the submitted detail on the Webpage, ensure that if any field is left empty, the form should not be submitted

let form = document.querySelector('form');
let nameInput = document.querySelector('#name');
let email = document.querySelector('#email');
let submit = document.querySelector('.submitBtn');
let body = document.querySelector('body');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!nameInput.value || !email.value){
        alert('Fill All detail first');
        return;
    }

    let div = document.createElement('div');
    div.innerHTML = `<p>${nameInput.value}</p> <p>${email.value}</p>`;

    body.append(div);
})