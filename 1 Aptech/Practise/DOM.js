// let hea = document.getElementById('heading')
// hea.innerText = 'bye'
// hea.textContent = '<i>bye</i>'
// hea.innerHTML = '<i>bye</i>'
// hea.style.color = 'red'
// hea.style.backgroundColor = 'red'
// console.log(hea)

// let element = document.createElement("a")
// element.innerText = 'google';
// console.log(element);

// event listeners

// let element = document.createElement('a');
// element.innerHTML = "salman khan";
// element.setAttribute("href","https://google.com");
// document.body.append(element)


// let element = document.createElement('a');
// element.innerHTML = "salman khan";
// element.setAttribute("href","https://google.com");
// document.body.append(element)

// let parent = document.getElementById('parent');
// let child = document.createElement('a');
// child.innerHTML = 'google';
// child.setAttribute('href','https://google.com');
// // document.body.append(child)
// parent.append(child);


// let parent = document.getElementById('parent')
// // acnher element
// let a = document.createElement('a')
// a.innerText = 'google';
// a.setAttribute('href','https://google.com');
// a.style.color = 'red'

// // h1 element node
// let h1 = document.createElement('h1')
// h1.innerText = 'hello world';

// // parent.appendChild(h1,a)
// parent.append(h1,a)

// four type of node
// 1- Element node 2- attribute node 3-text node 4- style node
// har element k sath ye fharo node hoti hai ye fharo aik object banati hai or wo model may set hota hai

// event matlab kab hoga (event )or kasay hoga (function)

// function triggerAlert(){
//     alert('ho gya')
// }

// let naam = 'salman';
// let btn = document.getElementById('btn');
// btn.addEventListener('click',()=>{
//     alert(`alert ho gya ${naam}`)
// })

// let name = 'salman';
// document.write('<h1>'+name+'</h1>');
// document.write(`<h1>${name}</h1>`); 

//  document.getElementById('btnSubmit').addEventListener('click',function(){
//     let value = document.getElementById('nameInput').value;
//      document.getElementById('showName').innerText = value;
//     console.log(value)
//     document.getElementById('nameInput').value = '';
// })


// let button = document.getElementById('btnSum');
// button.addEventListener('click', function () {
//     let num1 = document.getElementById('num1').value;
//     let num2 = document.getElementById('num2').value;
//     num1 = Number(num1)
//     num2 = Number(num2)
//     let sum = num1 + num2;
//     document.getElementById('result').innerHTML = sum;

//      document.getElementById('num1').value = '';
//      document.getElementById('num2').value = '';
// })