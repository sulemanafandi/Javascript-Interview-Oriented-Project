// Brower ye softwere ap  ka client hai agar ap softwere may button par click karty hai tu wo request ap k srever par jata hai server k pass ap ka data present hota hai server ko database ki tara treat kar saktay ho or server reponse bejh dy ga or server say jo data melay ga wo ap ko json format may ap ko mil raha hoga pehlay ap ka XML use hota ta XML format data ka format hai abi most popular jo hai JSON format transfer kar rahhay hotay hai ap send b JSON format may kar rahay hotay hai JSON (Javascript Object Notation) both zyada useful hai

// json hum use q karty hai tu definatly ye siraf javascript may use nahi hota database ki connectivity a rahi hai that means k hum multiple languages k sath kam karnay k lie ab ready hai ap javascript k sath kam kar rahy ho dosra banda python k sath kam kar raha ho ho sakta hai us nay server python par bana rakha ho but data ap ko json may milay ga tu json both important hai database k sath khalnay k lie database say jo b data araha hoga json ki format may hoga

// JSON (javascript object notation)
// it's a lightwight data format used to store and exchange data - like sending data b/w a brower and a server

// javascript-Object
// const users = {
//     name: 'M.Suleman',
//     age: 21,
//     isStudent: true
// };
// console.log(users)
// JSON version (as a string)
// const jsonUser = {
//     "name": "M.Suleman",
//     "age": 21,
//     "isStudent":true,
//     "is salo":"Yes salo"
// };
// console.log(jsonUser)
// JSON allow
// Number,string,null,Boolean,Object,Array
// Not Allow JSON
// function ,date , undefinesd
// Note
//  1- Keys and string values are wrapped in double quote
//  2-it's string not an object

// files .json--->Strict
// double quotes(key:value)
// access
// dot notation ,braket notation like jsonUser.age , jsonUser['age']

// maximum see like this 

// const jsonUser = [
//     {
//         "name": "M.Suleman",
//         "age": 21,
//         "isStudent": true,
//         "is salo": "Yes salo"
//     },
//     {
//         "name": "M.Suleman",
//         "age": 21,
//         "isStudent": true,
//         "is salo": "Yes salo"
//     },
//     {
//         "name": "M.Suleman",
//         "age": 21,
//         "isStudent": true,
//         "is salo": "Yes salo"
//     },
//     {
//         "name": "M.Suleman",
//         "age": 21,
//         "isStudent": true,
//         "is salo": "Yes salo"
//     }
// ];
// console.log(jsonUser);


// let UserJson = `{
//     "name": "M.Suleman",
//     "age": 21,
//     "isStudent": true,
//     "is salo": "Yes salo"
// }`;

// console.log(UserJson);
// // console.log(typeof UserJson);

// // Convert JSON to Object (normal  format convert)
// let result = JSON.parse(UserJson);
// console.log(result);

// // Convert Object to JSON 
// let result1= JSON.stringify(UserJson);
// console.log(result1);

// // acutally JSON object format may hota hai
// // acha typeof UserJson jo hai Object hi ahy ga

// Json normal string hi hai string format may ap ko milay ga

// API (Application Programming Interface)
// it's a set of rules that allows diff software entities to communicate with each other
// it's a bridge b/w diff software entities
// API allow diff software systems to interact with each other
// API define the method and data format that software system use to communicate with each other
// API can be used to access web services ,databases and other software systems

// types of API
// 1. Web APIs
// 2. Library APIs
// 3. Operating System APIs
// 4. Remote APIs
// 5. Hardware APIs

// Web APIs
// Web APIs are designed to be accessed over the internet using HTTP/HTTPS protocols
// They allow communication between a client (e.g., a web browser) and a server
// Web APIs are commonly used to retrieve or send data to a web server
// Examples of Web APIs include RESTful APIs and SOAP APIs

// Library APIs
// Library APIs provide a set of functions and procedures for developers to use in their applications
// They are typically packaged as libraries or frameworks that can be imported into a project
// Library APIs simplify complex tasks and promote code reusability
// Examples of Library APIs include jQuery, React, and Lodash

// Operating System APIs
// Operating System APIs provide access to the underlying operating system's features and services
// They allow applications to interact with the OS for tasks such as file management, memory allocation, and process control
// Examples of Operating System APIs include Windows API, POSIX API, and macOS API

// Remote APIs
// Remote APIs allow communication between different systems over a network
// They enable applications to access resources and services hosted on remote servers
// Examples of Remote APIs include RESTful APIs, GraphQL APIs, and gRPC APIs

// Hardware APIs
// Hardware APIs provide access to the underlying hardware components of a device
// They allow applications to interact with hardware devices such as printers, cameras, and sensors
// Examples of Hardware APIs include OpenGL (for graphics), DirectX (for gaming), and WebUSB (for USB devices)
// RESTful APIs
// REST (Representational State Transfer) is an architectural style for designing networked applications
// RESTful APIs are web APIs that adhere to the principles of REST
// RESTful APIs use standard HTTP methods (GET, POST, PUT, DELETE) for communication
// RESTful APIs are stateless, meaning each request from a client contains all the information needed to process the request
// RESTful APIs use resource-based URLs to represent entities and their relationships
// RESTful APIs often return data in JSON format, making it easy to work with in web applications

// Example of a RESTful API endpoint:
// GET /api/users/123
// This endpoint retrieves the user with the ID of 123

// Example of a RESTful API response (in JSON format):
// {
//     "id": 123,
//     "name": "M.Suleman",
//     "age": 21,
//     "isStudent": true,
//     "is salo": "Yes salo"
// }
// Fetch API
// The Fetch API is a modern web API that provides an easy and flexible way to make network requests
// It is built into most modern browsers and can be used to fetch resources such as JSON data, images, and text files
// The Fetch API uses Promises to handle asynchronous operations, making it easier to work with than traditional XMLHttpRequest
// The Fetch API provides a simple and clean syntax for making requests and handling responses

// Basic Syntax of Fetch API
// fetch(url, options)
// url: The URL of the resource to fetch
// options: An optional object that contains settings for the request (e.g., method, headers, body)
// Example of using the Fetch API to make a GET request
// fetch('https://api.example.com/data')
//     .then(response => response.json()) // Parse the JSON from the response
//     .then(data => console.log(data)) // Handle the data
//     .catch(error => console.error('Error:', error)); // Handle any errors
// Example of using the Fetch API to make a POST request
// fetch('https://api.example.com/data', {
//     method: 'POST', // Specify the HTTP method
//     headers: {
//         'Content-Type': 'application/json' // Set the content type to JSON
//     },
//     body: JSON.stringify({ key: 'value' }) // Set the request body
// })
//     .then(response => response.json()) // Parse the JSON from the response
//     .then(data => console.log(data)) // Handle the data
//     .catch(error => console.error('Error:', error)); // Handle any errors
// Note: The Fetch API is not supported in Internet Explorer. For older browsers, you may need to use a polyfill or fallback to XMLHttpRequest.
// Example of using the Fetch API to get data from a public API
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json()) // Parse the JSON from the response
//     .then(data => console.log(data)) // Handle the data
//     .catch(error => console.error('Error:', error)); // Handle any errors
// // Example of using the Fetch API to post data to a public API
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST', // Specify the HTTP method
//     headers: {
//         'Content-Type': 'application/json' // Set the content type to JSON
//     },
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//     }) // Set the request body
// })
//     .then(response => response.json()) // Parse the JSON from the response
//     .then(data => console.log(data)) // Handle the data
//     .catch(error => console.error('Error:', error)); // Handle any errors   
// // Note: The above examples use a public API (jsonplaceholder.typicode.com) for demonstration purposes. In a real-world scenario, you would replace the URL with the endpoint of the API you want to interact with.
// // Example of using the Fetch API to get data from a public API
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json()) // Parse the JSON from the response
//     .then(data => console.log(data)) // Handle the data
//     .catch(error => console.error('Error:', error)); // Handle any errors
// // Example of using the Fetch API to post data to a public API
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST', // Specify the HTTP method
//     headers: {
//         'Content-Type': 'application/json' // Set the content type to JSON
//     },
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//     }) // Set the request body
// })
//     .then(response => response.json()) // Parse the JSON from the response
//     .then(data => console.log(data)) // Handle the data
//     .catch(error => console.error('Error:', error)); // Handle any errors
// // Note: The above examples use a public API (jsonplaceholder.typicode.com) for demonstration purposes. In a real-world scenario, you would replace the URL with the endpoint of the API you want to interact with.
// // Example of using the Fetch API to get data from a public API
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json()) // Parse the JSON from the response
//     .then(data => console.log(data)) // Handle the data
//     .catch(error => console.error('Error:', error)); // Handle any errors
// // Example of using the Fetch API to post data to a public API
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST', // Specify the HTTP method
//     headers: {
//         'Content-Type': 'application/json' // Set the content type to JSON
//     },  
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//     }) // Set the request body
// })
//     .then(response => response.json()) // Parse the JSON from the response
//     .then(data => console.log(data)) // Handle the data
//     .catch(error => console.error('Error:', error)); // Handle any errors
// // Note: The above examples use a public API (jsonplaceholder.typicode.com) for demonstration purposes. In a real-world scenario, you would replace the URL with the endpoint of the API you want to interact with.

// Async/Await with Fetch API
// Async/Await is a modern way to handle asynchronous operations in JavaScript
// It allows you to write asynchronous code that looks and behaves like synchronous code
// Async/Await is built on top of Promises and provides a cleaner and more readable syntax for working with asynchronous operations
// To use Async/Await, you need to define an async function using the async keyword
// Inside the async function, you can use the await keyword to wait for a Promise to resolve before proceeding with the next line of code
// Example of using Async/Await with the Fetch API to make a GET request
// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }   
// fetchData();
// // Example of using Async/Await with the Fetch API to make a POST request
// async function postData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST', // Specify the HTTP method
//             headers: {
//                 'Content-Type': 'application/json' // Set the content type to JSON
//             },
//             body: JSON.stringify({
//                 title: 'foo',
//                 body: 'bar',
//                 userId: 1
//             }) // Set the request body
//         });
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }
// postData();
// Note: The above examples use a public API (jsonplaceholder.typicode.com) for demonstration purposes. In a real-world scenario, you would replace the URL with the endpoint of the API you want to interact with.
// Note: The Fetch API is not supported in Internet Explorer. For older browsers, you may need to use a polyfill or fallback to XMLHttpRequest.




// API is a set of rules that allow different softwere ,application to comminicate and interact with each other

// pehlay client server ko request karta ta server us ko response may data send karta ta laken ap client APIs ko request karta hai APIs srever k pass jati hai or server data APIs ko deta hai or APIs data ko client k pass lati hai

// Application programming interface APIs(interface means protocol matlab set of rules (layer) ) jo server say client ko data la ti hai
//user jo hai customer hai client hai APIs witer hai server cheif hai


// acha lastest tariqa hum function banahan gy or us par aysnc await use krengy or APIs ko fetch karen gy async ap ko function say pehlay laga hen gy fetch say pehlay ap ko await laaghy gy



