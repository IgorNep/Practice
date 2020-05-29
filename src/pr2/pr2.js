import './pr2.scss';


//game vars
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//define UI vars

const game = document.querySelector('#game');
let minNum = document.querySelector('.minNum');
let maxNum = document.querySelector('.maxNum');
const inputNum = document.querySelector('#guess');
const msgArea = document.querySelector('#msg');
const submitBtn = document.querySelector('#submitBtn');

//define min and max 
minNum.textContent = min;
maxNum.textContent = max;

//Listen for play again
game.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('play-again')) {
        window.location.reload();
    }
});
//Add Event Listener
submitBtn.addEventListener('mouseup', () => {
    const number = parseInt(inputNum.value);
    //validate
    if (isNaN(number) || number < min || number > max) {
        showMsg(`Please enter number between ${min} and ${max}`, 'red');
    } else {
        if (number === winningNum) {
            gameOver(true, `${number} is correct. YOU WIN!`);
        } else {
            guessesLeft -= 1;
            if (guessesLeft === 0) {
                gameOver(false, `You Lost! The winning number was ${winningNum}`);
            } else {
                showMsg(`${number} is not correct, you have ${guessesLeft} guesses left`, 'red');
                inputNum.value = '';
            }
        }
    }
});




//show message
function showMsg(msg, color) {
    msgArea.textContent = msg;
    msgArea.style.color = color;

}
//Game over
function gameOver(win, msg) {
    let color = win ? 'green' : 'red';
    submitBtn.value = 'Play Again';
    submitBtn.classList.add('play-again');
    inputNum.disabled = true;
    inputNum.style.borderColor = color;
    showMsg(msg, color);
}

