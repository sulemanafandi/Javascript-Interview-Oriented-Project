let myform = document.getElementById('myform');
myform.addEventListener('submit', (e) => {
    e.preventDefault();
    postData();
})

async function postData() {
    let myname = document.getElementById('myname').value;
    let myage = document.getElementById('myage').value;
    let dataObj = {
        stdId: crypto.randomUUID(),
        name: myname,
        age: myage,
    }
    dataObj = JSON.stringify(dataObj);

    await fetch('http://localhost:3000/Student', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: dataObj,
    })

    document.getElementById('myname').value = '';
    document.getElementById('myage').value = '';
    alert('Data Inserted Successfully')
}