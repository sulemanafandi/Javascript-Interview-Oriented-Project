let randonBtn = document.querySelector('.randomBtn');
let colorInput = document.querySelector('#colorInput');
let applyBtn = document.querySelector('.applyBtn');
let currentColorValue = document.querySelector('.currentColorValue');
let container = document.querySelector('.container');

const colorArray = ['red', 'blue', 'green', 'yellow', 'lightseagreen', 'cyan', 'tomato', 'lightcoral', 'aqua', 'white', 'black', 'salmon'];

const generateRandomColor = () => {
    const randonNumber = Math.floor(Math.random() * colorArray.length);
    return colorArray[randonNumber];
}
let color = generateRandomColor();

const changeColor = (color) => {
    container.style.backgroundColor = color;
    currentColorValue.innerText = color;
}

const handlerandomBtnClick = () => {
    let color = generateRandomColor();
    changeColor(color);
}

const handleApplyBtnClick = () => {
    // console.log(colorInput.value);
    const color = colorInput.value;
    changeColor(color);
}

randonBtn.addEventListener('click', handlerandomBtnClick);
applyBtn.addEventListener('click', handleApplyBtnClick);