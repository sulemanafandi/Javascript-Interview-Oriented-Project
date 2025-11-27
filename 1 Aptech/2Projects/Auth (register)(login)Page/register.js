let register = document.getElementById('register');

register.addEventListener('submit', function (e) {
    e.preventDefault();
    let fullname = document.getElementById('fullname');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let cpassword = document.getElementById('cpassword');
    let error = document.getElementById('error');

    if (password.value !== cpassword.value) {
        error.innerHTML = `Password and Confirm Password doesn't matched `;
        password.style.border = '1px solid red'
        cpassword.style.border = '1px solid red'
    } else {
        let data = {
            fullname: fullname.value,
            email: email.value,
            password: password.value,
            cpassword: cpassword.value
        }
        // console.log(data)
        let datas = JSON.stringify(data)
        console.log(datas)
        localStorage.setItem('data', datas);

        fullname.value = "";
        email.value = "";
        password.value = "";
        cpassword.value = "";
        window.location.href = 'login.html'
    }
});