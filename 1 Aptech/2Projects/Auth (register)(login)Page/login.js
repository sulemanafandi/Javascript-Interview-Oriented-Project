let login = document.getElementById('login');
login.addEventListener('submit', function (e) {
    e.preventDefault();

    let data = localStorage.getItem('data');
    data = JSON.parse(data);
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let localEmail = data.email;
    let localPassword = data.password;
    let error = document.getElementById('error')
    if (localEmail !== email.value || localPassword !== password.value) {
        error.innerHTML = `Email or Password InCorrect! `;
        email.style.border = '1px solid red'
        password.style.border = '1px solid red'
    } else {
        error.innerHTML = ``;
        email.style.border = '1px solid green'
        password.style.border = '1px solid green'
        window.location.href = 'index.html'
    }
})