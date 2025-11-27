let emailPathern = /^[a-zA-Z0-9.-_]{5,18}@[a-zA-Z]{3,7}.[a-zA-Z]{2,5}$/;
let passPathern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$#!@%&*~])[a-zA-Z\d$#!@%&*~]{8,}$/;

let emailInput = document.getElementById('email');
let passInput = document.getElementById('password');
let emailError = document.getElementById('emailError');
let passError = document.getElementById('passError');


document.getElementById('login').addEventListener('submit', (e) => {
    e.preventDefault();
    let emailVerify = false;
    let passVerify = false;
    if (emailInput.value == "") {
        emailError.style.display = 'block';
        emailError.innerHTML = 'Email field is required ';
        emailInput.style.border = '1px solid red';
    } else {
        if (!emailPathern.test(emailInput.value)) {
            emailError.style.display = 'block';
            emailError.innerHTML = 'Email is invalid ';
            emailInput.style.border = '1px solid red';
        } else {
            emailError.style.display = 'none';
            emailInput.style.border = '';
            emailVerify = true;
            emailInput.value = '';
        }
    }

    if (passInput.value == "") {
        passError.style.display = 'block';
        passError.innerHTML = 'Password field is required';
        passInput.style.border = '1px solid red';
    } else {
        if (!passPathern.test(passInput.value)) {
            passError.style.display = 'block';
            passError.innerHTML = 'Password is not valid ';
            passInput.style.border = '1px solid red';
        } else {
            passError.style.display = 'none';
            passInput.style.border = '';
            passVerify = true;
            passInput.value = '';
        }
    }


    if (emailVerify && passVerify) {
        alert('Success')
    }
})