let cp = document.getElementById('colorPicker');

cp.addEventListener('input', () => {
    document.body.style.backgroundColor = cp.value;
    document.getElementById('hexacode').innerText = cp.value;
})

let ct = document.getElementById('copyText');
ct.addEventListener(('click'), () => {
    let textCopy = document.getElementById('hexacode').innerText;
    navigator.clipboard.writeText(textCopy);
    document.getElementById('copyText').innerHTML = "Copied!"

})