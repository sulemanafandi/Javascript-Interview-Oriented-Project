// using attribute method
// let attr = document.querySelector('div');
// attr.setAttribute('style','backgroung-color:red');
// attr.setAttribute('class','redbg');


// using style 
// let div =document.querySelector('div');
// div.style.backgroundColor = 'green';
// div.style.color = 'white';
// div.style.fontSize = '30px';

// using css Text property
// us say b aik achi proprety hai
// let div = document.querySelector('div');
// div.style.cssText = 'background-color:red; font-size:40px; color:white; ';

// using className property
// let div = document.querySelector('div');
// console.log(div.className);
// div.className = 'redbg';
// console.log(div.className);

// useful classlist method us say add remove and check present not present and toggle matlab agar nahi hai tu laga hy ga or agar hai tu nahi lagahy ga  
// let div = document.querySelector('div');
// div.classList.add('redBg');
// div.classList.remove('redbg');
// let a = div.classList.contains('redBg');
// let b = div.classList.contains('blue');
// console.log(a);
// console.log(b);
// div.classList.toggle('blueBg');
// div.classList.toggle('redBg');
// console.log(div.className);


//Qno1: create a simple website with theme changing functionality

// let button = document.querySelector('button');
// let body = document.querySelector('body');

// let theme = 'light';
// button.addEventListener('click', () => {
//     if (theme === 'light') {
//         body.style.backgroundColor = 'black';
//         body.style.color = 'white';
//         theme = 'black';
//     } else {
//         body.style.backgroundColor = 'white';
//         body.style.color = 'black';
//         theme = 'light';
//     }
// })

// Qno2: solve first question by Changing CSS class

// let button = document.querySelector('button');
// let body = document.querySelector('body');

// let theme = 'light';
// button.addEventListener('click', () => {
//     if (body.className === 'light') {
//         body.className = 'dark'
//     } else {
//         body.className = 'light'
//     }
// })



// solve the first question by toggle CSS class

// let button = document.querySelector('button');
// let body = document.querySelector('body');

// button.addEventListener('click', () => {
//     body.classList.toggle('dark');
// })

