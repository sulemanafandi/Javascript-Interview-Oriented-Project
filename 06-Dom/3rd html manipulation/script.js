// console.log("hello");
// console.log(document); // output same index documet page
// console.dir(document); // output object



// let a = document.querySelector('p');
// console.log(a);


/*
1.DOM
2.Selection
3.Manipulating the html 
*/

// DOM
// let a = document.querySelectorAll("div");
// console.log(a);

// Selection
// let a  = document.getElementsByTagName('div');
// console.log(a);

// id hum unique cheezo k lie dety hai
// console.log( document.getElementById('heading'));



// agar multiple cheezo ko same name dena hai tu class ka use karay

// console.log(document.getElementsByClassName('hi'));

// QuerySelector and all ye both powerfull hai us say ap id , class ,  tagName k basis par b selectoir kar saktay hai

// tag select
// let a = document.querySelector('div');
// console.log(a);


// // id select
// let a = document.querySelectorAll('#heading');
// console.log(a);

//  // class select
// let a = document.querySelectorAll('.hi');
// console.log(a);


// ye multiple select kar raha hota hai
// let a = document.querySelectorAll('#heading');  // ye do id ko select kar raha hai us lie us ko use nahi karty id unique hoti hai

// us lie hum ye use hota hai
// let a = document.getElementById('heading');
// console.log(a);

// sab div ko agar select karna hai
// console.log(document.querySelectorAll('div'));



// next chid node agar maloom karna ho
// let falha = document.querySelector('.hi');
// console.log(falha);

// console.log(falha.lastChild);
// aagr saray children dekhnay ho
// console.log(falha.children);


//  how to Manipulate HTMl
/*
tag not change 
text change
element change 
html
attribute
*/


// let h1 = document.querySelector('h1');
// console.log(h1);

// let h1 = document.getElementsByTagName('h1');
// console.log(h1);

// let h = document.querySelector('h1');
// console.log(h.tagName);  // tagname

// let h1 = document.querySelector('h1');
// console.log(h1.nodeName); // ragname,text node, comment node 

// text node 
// let h1 = document.querySelector('h1');
// console.log(h1.firstChild);  // text

// let h1 = document.querySelector('h1');
// console.log(h1.firstChild.nodeName);


// let h1 = document.querySelector('h1');
// console.log(h1.firstChild.nodeName);


// not change tag name node name
// ye siraf read only property hai
// let h1 = document.querySelector('h1');
// h1.nodeName = 'p';
// console.log(h1);
// console.log(h1.tagName);


// tu innertext ap ko siraf text deta hai laken textContent pora formating matlab us may space wagira sab deta hai
// ye property hai us say hum get or set dono kar saktay hai pehlay oper wala read only property ta
// let h1 = document.querySelector('h1');
// h1.innerText = "salo  bahi "

// console.log(h1.innerText);
// console.log(h1.textContent);

// h1.innerHTML = `<p> okay ye b hogaya </p>`;
// console.log(h1.innerHTML);
// console.log(h1.firstChild);

// so innerhtml par zyada focus karna us say ap text element or html ko changes karsakaty ho useful hai


// Insert Element (Addition of element)

// let div = document.querySelector('div');

// let elem = document.createElement('p');
// elem.innerText = "new line paragraph";
// div.append(elem);  // last may add ho raha hai
// div.prepend(elem);  // first may add ho raha hai 



// acha agar div k bahar element insert karna chatay ho tu after or before k use karo gy
// let div = document.querySelector('div');
// let create = document.createElement('p');
// create.innerText = "bahir a gaya";

// div.before(create);
// div.after(create);



// aik element aisa hai jo k ap ka position b ly raha hota hai element tu ly ga hi matlab jo oper walay 4 method kam kar rahay tay wo ap insert adjancent k method say kar saktay ho

// let div = document.querySelector('div');
// let elem = document.createElement('p');
// elem.innerText = "New line";

// div.insertAdjacentElement('afterbegin',elem);

// and
// let div = document.querySelector('div');
// let elem = document.createElement('p');
// elem.innerText = "New line";

// div.insertAdjacentElement('beforebegin',elem);


// and
// let div = document.querySelector('div');
// let elem = document.createElement('p');
// elem.innerText = "New line";

// div.insertAdjacentElement('afterend',elem);

// and
// let div = document.querySelector('div');
// let elem = document.createElement('p');
// elem.innerText = "New line";

// div.insertAdjacentElement('beforeend',elem);

// and agar remove karna hai tu
// let div = document.querySelector('div');
// let elem = document.createElement('p');
// elem.innerText = "New line";

// div.insertAdjacentElement('afterbegin',elem);
// div.remove();


// agar aik element remove karna hai
// let div = document.querySelector('div');
// let elem = document.createElement('p');
// elem.innerText = "New line";

// div.insertAdjacentElement('afterbegin',elem);
// let p = div.children[3];
// console.log(p);
// p.remove();


// summaray
// let a = document.querySelector('div');
// let b = document.createElement('p');
// b.innerText = "Okay yes Sure !";

// a.append(b);
// a.prepend(b);
// a.after(b);
// a.before(b);
// a.insertAdjacentElement('beforebegin',b);
// a.insertAdjacentElement('beforeend',b);
// a.insertAdjacentElement('afterbegin',b);
// a.insertAdjacentElement('afterend',b);
// let p = a.children[3];
// let rem = p.remove();
// console.log(rem);



// Parent Nodes 
// usecase ap nay din liya hai us may both saray paragraph banahy hai or ap nay paragraph ko select kiya hai ab ap div may inserting nahi kar saktay ye paragraph k oper kuch or insert nahi kar saktay tab ap us ka use kar k sab kuch kar saktay hai

// let div = document.querySelector('div');

// let elem = document.createElement('div');
// elem.innerText = 'New Paragraph';

// let alpha = document.querySelector('#alpha');
// alpha.style.backgroungColor = 'red';
// let parentNode = alpha.parentNode;
// parentNode.append(elem); // text comment elem


// Attribute value 
// let div = document.querySelector('.box');
// console.log(div.attributes);
// console.log(div.attributes.class);
// console.log(div.attributes['class']);
// console.log(div.attributes[0]);
// console.log(div.attributes.class.value);
// console.log(div.getAttribute('class'));



// let div = document.querySelector('.box');
// console.log(div.attributes);
// console.log(div.getAttribute('title'));
// div.setAttribute('class','random');
// console.log(div.attributes.class.value);    



// next ab pora attributes replace ho jahy ga tu pora prana wala attribute replace hojahy ga nahy walay attribute say

// let div = document.querySelector('.box');
// let classValue = div.getAttribute('class');
// console.log(classValue);
// div.setAttribute('class',`${classValue} random`);
// console.log(div.attributes.class.value);


// Qno1: Create a paragraph With text "me Tumse Pyar Nahi Karta Hoon " and add the background color to black and fonts color to green using javascript

// let p = document.querySelector('p');
// p.innerText = 'mai tum say payar nahi karta ho';
// // p.style.backgroundColor  = 'black';
// // p.style.color  = 'green';
// // us tara b likh saktay ho
// p.setAttribute('style','background-Color: black; color: green');

// let body = document.querySelector('body');

// body.append(p);


// Qno2 : Insert a button with text 'click me' is the first element inside the paragraph created in 1st Question

// let p = document.createElement('p');
// p. innerText = "mai zinda ho";
// p.setAttribute('style','background-Color :black; color:green ');
// let body = document.querySelector('body');
// body.append(p);

// let button = document.createElement('button');
// button.innerText  = 'click me';
// // console.log(button);
// p.prepend(button);


// Question 3: Create a <div> tag in html and give a class and some styling Now creatre a new class in css and try to append this this class to the <div> element

// let div = document.querySelector('div');
// div.setAttribute('class',`${div.getAttribute('class')} box2`);
// console.log(div.getAttribute('class'));


// challlege
// Create a function that takes node a new tagName and replace the node from the new node with change tag name into the DOM

// tu matlab tagName ko change karnay k lie humay inbulid koyi custom method create karna paray ga .q k humaray pass koyi inbuid method ya property hai hi nahi
//acha us ki pir b hai jaisay html ,element, text,attribute us ki property or method hai
// tu humay aik aisa custom method create karna hoga jo k node or tagName ly ga

// function changeTagName(oldnode, newTagName) {
//     if (oldnode instanceof Element) {

//         let p = document.createElement(newTagName);
//         p.innerHTML = oldnode.innerHTML;

//         for (let attr of oldnode.attributes) {
//             p.setAttribute(attr.name, attr.value);
//         }

//         oldnode.replaceWith(p);
//     } else {
//         console.error('invalid node');
//     }
// }

// let div = document.querySelector('.box');
// changeTagName(div, 'p');

// another way

// function replaceTag(node, newTagName) {
//     if (!node || !(node instanceof Element)) {
//         console.error('Invalid node provided');
//         return null;
//     }

//     const newNode = document.createElement(newTagName);

//     //copy attributes
//     for (const attr of node.attributes) {
//         newNode.setAttribute(attr.name, attr.value);
//     }

//     //cpoy the inside content
//     // newNode.innerHTML = node.innerHTML;

//     // or
//     // Move all child nodes at once
//     newNode.append(...node.childNodes); // Spread all childNodes into append()

//     // repalce node
//     node.parentNode.replaceChild(newNode, node);

//     return newNode;

// }
// let btn = document.querySelector('.box');
// replaceTag(btn, 'div');



