let taskInput = document.querySelector('#taskInput');
let addBtn = document.querySelector('.addBtn');
let todoContainer = document.querySelector('.todoContainer');

let API = 'https://685beda389952c2db8b2a.mockapi.io/api/v1/todos';

addBtn.addEventListener('click', postData)

async function fetchData() {
    let reponse = await fetch(API)
    let data = await reponse.json();

    if (data) {
        todoContainer.innerHTML = '';
        data.forEach(obj => {

            let div = document.createElement('div');
            div.className = 'todo'
            div.innerHTML = ` 
                <p class='paraText'>${obj.text}</p>
                <input id="editInput" type="text" placeholder="Enter your task...!!" value='${obj.text}'></input>
                <div>
                    <button class='deleteBtn'>Delete</button>
                    <button class='editBtn'>Edit</button>
                    <button class='saveBtn'>Save</button>

                </div>`

            let deleteBtn = div.querySelector('.deleteBtn')
            let editBtn = div.querySelector('.editBtn')
            let saveBtn = div.querySelector('.saveBtn')
            let paraText = div.querySelector('.paraText')
            let editInput = div.querySelector('#editInput')

            deleteBtn.addEventListener('click', function () {
                deleteData(obj.id)
            })

            editBtn.addEventListener('click', function () {
                editBtn.style.display = 'none'
                saveBtn.style.display = 'inline'
                paraText.style.display = 'none'
                editInput.style.display = 'inline'
            })

            saveBtn.addEventListener('click', async function () {
                let editValue = editInput.value;
                let response = await updateData(obj.id, editInput)
                if (response.status === 200) {
                    editBtn.style.display = 'inline'
                    saveBtn.style.display = 'none'
                    paraText.style.display = 'inline'
                    editInput.style.display = 'none'
                }
            })

            todoContainer.append(div);
        });
    }
}

async function postData() {

    let objData = {
        text: value.trim()
    }
    let reponse = await fetch(API, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify(objData),
    })

    if (reponse.status === 201) {
        fetchData();

        taskInput.value = '';
    }
}

async function updateData() {

    let objData = {
        text: value.trim()
    }
    let reponse = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify(objData),
    })
    return reponse;
}

async function deleteData(id) {
    console.log(id);
    let reponse = await fetch(`${API}/${id}`, {
        method: 'DELETE',
    })
    if (reponse.status === 200) {
        fetchData();
    }

}

fetchData();

// api call apka promise return krega or boly ga ahgy barho block mat karo deta may dy donga ahy ga tu

// aysnc await
// but agar apne function aysnc bana diya hai tu aysnc function ka behaviour kuch aisa hota hai ki agar ap us k andar fetch etc use karte ho and await karte ho to aage ka task wo tab tak nahi kre ga jab tak ap ka aysnc task complete nahi ho jaata ... or is k internal working hum log aage properly understand karege... 

// Javascript single threaded hai matlab aik bar may aik hi task kar raha hoga kabhi b do ya multiple task aik sath nahi kar sakta but ap nay kaha ta k Aysnchornus Programming mutiple task kar rahay hoaty hai wo aik wahim hai k hum do task aik sath preform kara rahy hotay hai ye humay lagta hai k Aysnchornus aik bar may do taask perffrom kar raha hota hai halan k aisa hota nahi hai aisa siraf humay lagta hai bas . ye real may aik task perform kar raha hota hai us ko hum nay us tara say degsin kiya hai or baqi saray task ko block nahi kar raha hota hai laken aik bar may aik task kar raha hota hai lagta hai k multiple task aik sath perform kar rahy hotay hai

/*
setTimeout
setinterval
fetch
axios
*/ 

// acha aik main Stack hota hai or aik side Stack hota hai 
// main Stack may synchornus task horahy hotay hai jab saray synchornus task complete ho jahy or main stack kali ho jahy tab side Stack ka number a ta hai waha say jis ka time pora hota jahy wo main Stack may a ta hai or complete hota hai  or dono k beach jo bath cheet chal rahi hai usi ko event loop kehtay hai 

// tu javascript humay dokhay may rakhta hai karta aik task aik bar may single theraded hai laken humay lagta hai k multiple task aik sath ho rahy hai usi ko kehtay hai aysnchornus programming

