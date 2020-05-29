import './pr2.scss';


//game vars
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//define UI vars

const game = document.querySelector('#game');
const minNum = document.querySelector('.minNum');
const maxNum = document.querySelector('.maxNum');
const inputNum = document.querySelector('#guess');
const msgArea = document.querySelector('#msg');
const submitBtn = document.querySelector('#submitBtn');

//Add Event Listener
submitBtn.addEventListener('click', playTheGame);

//Compare the numbers
function playTheGame() {
    //validate
    if (isNaN(inputNum.value) || inputNum.value < min || inputNum.value > max) {
        showMsg('Check your number!', 'red');
    } else {
        if (inputNum.value === winningNum) {
            console.log(inputNum.value);
            gameOver(`${inputNum} is correct. YOU WIN!`, 'green');
        }
    }
}
//show message
function showMsg(msg, color) {
    msgArea.textContent = msg;
    msgArea.style.color = color;
}
//Game over
function gameOver(msg, color) {
    submitBtn.value = 'Play Again';
    inputNum.style.borderColor = color;
    showMsg(msg, color);

}