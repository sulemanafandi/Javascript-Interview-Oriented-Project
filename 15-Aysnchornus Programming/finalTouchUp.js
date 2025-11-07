// callback
getData('1st data', () => {
    console.log('fetching 2nd data...')
    getData('2nd Data', () => {
        console.log('fetching 3rd data...')
        getData('3rd Data', () => {
            console.log('fetching 4th data...')
            getData('4th data')
        });
    });
});


// Promise Syntax
fetchData()
    .then((data) => {
        console.log("data aa chuka h", data);
        return fetchData2()
    })
    .then((data) => {
        console.log("data2 bhi aa chuka h", data)
        return fetchData3()
    })
    .then((data) => {
        console.log("final data3 bhi aa chuka h", data)
    })
    .catch((err) => {
        console.log(err);
    })

// aysnc await syntax
async function fetchData() {
    let data1 = await getData(1);
    console.log(data1);
    let data2 = await getData(2);
    console.log(data2);
    let data3 = await getData(3);
    console.log(data3);
}

// Practicle CallBack Syntax 

function getUsers(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    xhr.onload = function () {
        if (xhr.status === 200) {
            const users = JSON.parse(xhr.responseText);
            callback(null, users);
        } else {
            callback(`Error: ${xhr.status}`);
        }
    };

    xhr.onerror = function () {
        callback('Network error');
    };

    xhr.send();
}


function showData(err, data) {
    if (err) {
        console.log("Failed:", err);
    } else {
        console.log("Success:", data);
    }
}
// Using the function
getUsers(showData);


// Practicle Promise Syntax
let response = fetch('https://jsonplaceholder.typicode.com/users');
response
    .then((data) => {
        console.log(data);
        return fetch('https://jsonplaceholder.typicode.com/users');
    })
    .catch((err) => {
        console.error(err)
    })

// Practicle async Syntax
async function fetchData() {
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(data);
}
// acha agar us may error aya tu trycatch ka use karo ye kehta hai 
// try catch us ko aysnc function k andar b kar sakty hai or bahar b kar saktay hai

// acha IIFE say automatically call ho jahy ga name denay ki need b nahi hai
(async function () {
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(data);
})()

// try Catch
(async function () {
    try {
        let data = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(data);
    } catch (err) {
        console.log(err)
    }
})()

// q k promise k andar dekho tu function k andar dalnay ki need nahi hai laken aysnc await wala syntax dekho tu await agar use karna hai tu function k andar dalna hi paray ga or us ko call karna hi paray ga us lie invoke function use kar rahay hai kud hi call ho jahy 