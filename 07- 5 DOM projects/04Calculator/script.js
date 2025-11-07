let display = document.querySelector('.display');

appendValue = (text) => {
    if(display.innerText === '0' || display.innerText === 'Error' || display.innerText === 'Infinity'){
        display.innerText = text
        return;
    }
    display.innerText = `${display.innerText}${text}`
}

clearDisplay = () => {
    display.innerText = '0';
}

calculate = () => {
    try {
       display.innerText = eval(display.innerText) 
    } catch (error) {
        display.innerText  = 'Error'
    }

    
}