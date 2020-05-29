import '../styles/game.scss';
import { Car } from './car';

export class Game {
    constructor(carCount = 2, parentNode = document.querySelector('body')) {
        this.parent = parentNode;
        this.carCount = carCount;
        this.inititalize();
        window.startGame = () => this.startGame();
    }

    inititalize() {
        this.render();
        this.renderCars();
    }

    render() {
        this.gameField = document.createElement('div');
        this.button = document.createElement('button');
        this.gameField.classList.add('game');
        this.parent.appendChild(this.gameField);
        this.parent.appendChild(this.button);
        console.log(this.gameField.offsetLeft);
        this.button.textContent = 'Start Race';
        this.button.addEventListener('click', () => {
            this.startGame();
        });
        const clientRect = this.gameField.getBoundingClientRect();
        this.finishCoordinates = Math.ceil(clientRect.right - 40);
    }

    renderCars() {
        this.cars = [];
        for(let i = 0; i < this.carCount; i++) {
            const car = new Car(this.gameField, 2);
            this.cars.push(car);
        }
        console.log(this.cars);
    }

    startGame() {
        this.intervalIds = [];
        this.cars.forEach((car, i) => {
            const interval = Math.ceil(Math.random() * 200);
            this.intervalIds.push(this.moveCar(car, i, interval));
        })
    }

    moveCar(car, indexOfCar, timeInterval = 100) {
        return setInterval(() => {
            if (car.coordinates.left <= this.finishCoordinates)  {
                car.moveForward();
                console.log(car.coordinates.left);
            } else {
                this.intervalIds.forEach((id) => {
                    clearInterval(id);
                });
                confirm('FINISHED: ' + indexOfCar);
            }
        }, timeInterval);
    }
}