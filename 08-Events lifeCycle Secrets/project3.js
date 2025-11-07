let numberContainer = document.querySelector('.numberContainer');
let timerValue = document.querySelector('.timerValue');
let targetValue = document.querySelector('.targetValue');
let scoreValue = document.querySelector('.scoreValue');


let numberOfCircles = 94;
let timer = 10;
let target;

restartGame();
startTimer();

function restartGame() {
    timerReset();
    generateTarget();
    generateNumbers();
    scoreValue.innerText = 0;
}

function timerReset() {
    timerValue.innerText = timer;
    timer = 10;
}

function startTimer() {
    setInterval(() => {
        if (timer <= 0) {
            numberContainer.innerHTML = `
            <div><h1>Game Over</h1>
            <hr/>
            <br/><br/>
            <h3><button onclick=restartGame() style = "font-size: 20px">Reset Game</button></h3>
            </div>
            `;
            return;
        }
        timer--;
        timerValue.innerText = timer;
    }, 1000);
}

function generateTarget() {
    target = Math.ceil(Math.random() * 10);
    targetValue.innerText = target;
}

function generateNumbers() {
    numberContainer.innerHTML = ''
    for (let i = 1; i <= numberOfCircles; i++) {

        let divElem = document.createElement('div');
        divElem.className = 'circle';
        let number = Math.ceil(Math.random() * 10)
        divElem.innerText = number;

        numberContainer.append(divElem);

    }
}

numberContainer.addEventListener('click', function (event) {
    if (event.target.className === 'circle') {
        let number = Number(event.target.innerText);
        if (target === number) {
            let sv = Number(scoreValue.innerText);
            sv += 10;
            scoreValue.innerText = sv;
        }
        generateTarget()
    }
})