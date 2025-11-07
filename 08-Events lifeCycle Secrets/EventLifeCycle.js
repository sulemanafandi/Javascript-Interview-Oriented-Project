let grandParent = document.querySelector('.grandParent');
let Parent = document.querySelector('.Parent');
let Child = document.querySelector('.Child');

// Event propigation 
// 1.Capturing Phase 2.Target Phase 3.Bubbling Phase

// grandParent.addEventListener(('click'),()=>{
//     alert("Grand Parent Par Click howa");
// });
// Parent.addEventListener(('click'),()=>{
//     alert("Parent Par Click howa");
// });
// Child.addEventListener(('click'),()=>{
//     alert("Child Par Click howa");
// });


// grandParent.addEventListener(('click'),()=>{
//     alert("Grand Parent Par Click howa");
// });
// grandParent.addEventListener(('click'),()=>{
//     alert("Grand Parent Par Click howa");
// },true);
// Parent.addEventListener(('click'),()=>{
//     alert("Parent Par Click howa");
// });
// Parent.addEventListener(('click'),()=>{
//     alert("Parent Par Click howa");
// },true);
// Child.addEventListener(('click'),()=>{
//     alert("Child Par Click howa");
// });
// Child.addEventListener(('click'),()=>{
//     alert("Child Par Click howa");
// },true);


// grandParent.addEventListener(('click'),()=>{
//     alert("Grand Parent Par Click howa");
// },false);

// Parent.addEventListener(('click'),()=>{
//     alert("Parent Par Click howa");
// },true);

// Child.addEventListener(('click'),()=>{
//     alert("Child Par Click howa");
// },true);


// Event.target v/s event.currentTarget 

// grandParent.addEventListener(('click'), (e) => {
//     console.log("Grand Parent");
//     console.log(e.target);
//     console.log(e.currentTarget);
// });

// Parent.addEventListener(('click'), (e) => {
//     console.log("Parent");
//     console.log(e.target);
//     console.log(e.currentTarget);
// });

// Child.addEventListener(('click'), (e) => {
//     console.log("Child");
//     console.log(e.target);
//     console.log(e.currentTarget);
// });


// this


// Child.addEventListener(('click'), function (e) {
//     console.log("Child");
//     console.log(e.target);
//     console.log(e.currentTarget);
//     console.log(this);
// });


// Child.addEventListener(('click'), (e) => {
//     console.log("Child");
//     console.log(e.target);
//     console.log(e.currentTarget);
//     console.log(this); 
// });


// Parent.addEventListener(('click'), (e) => {
//     console.log("Parent");
//     console.log(e.target);
//     console.log(e.currentTarget);
//     console.log(this);
// });


// Stop Propagation()

// grandParent.addEventListener(('click'), (e) => {
//     console.log("Grand Parent");
//     console.log(e.target);
//     console.log(e.currentTarget);
// });

// Parent.addEventListener(('click'), (e) => {
//     console.log("Parent");
//     console.log(e.target);
//     console.log(e.currentTarget);
//     e.stopPropagation()
// });

// Child.addEventListener(('click'), (e) => {
//     console.log("Child");
//     console.log(e.target);
//     console.log(e.currentTarget);
//     e.stopPropagation()
// });


// StopImmediate Propagation()

// grandParent.addEventListener(('click'), (e) => {
//     console.log("Grand Parent");
//     console.log(e.target);
//     console.log(e.currentTarget);
// });

// Parent.addEventListener(('click'), (e) => {
//     console.log("Parent");
//     console.log(e.target);
//     console.log(e.currentTarget);
//     e.stopImmediatePropagation()
// });
// Parent.addEventListener(('click'), (e) => {
//     console.log("This is another Parent");
// });

// Child.addEventListener(('click'), (e) => {
//     console.log("Child");
//     console.log(e.target);
//     console.log(e.currentTarget);
// });


// next Event Delegation
// pehla tu ye hai jo differenet hai laken performance wise sahi nahi hai
// let container = document.querySelector('.container');

// container.childNodes.forEach((elem)=>{
//     elem.addEventListener('click',()=>{
//         console.log(elem.innerText)
//     })
// })

// Best way for performance event delegation
// let container = document.querySelector('.container');

// container.addEventListener('click',function(e){
//     if(e.target.className === 'box'){
//         console.log(e.target.textContent)
//     }
// })