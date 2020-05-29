import '../styles/car.scss';
const imgUrl = require('../../../assets/images/car.png');

export class Car {
    constructor(parent, speed) {
        this.parent = parent;   
        this.speed = speed;
        this.coordinates = {
            left: 0
        };
        this.render();
    }

    render() {
        this.domElement = document.createElement('img');
        this.domElement.classList.add('car');
        this.domElement.style.left = 0;
        this.domElement.src = imgUrl;
        this.parent.appendChild(this.domElement);
    }

    moveForward() {
        const leftCoord = parseInt(this.domElement.style.left) + 1;
        this.domElement.style.left = leftCoord + 'px';
        this.coordinates.left = leftCoord;
    }

    moveTop() {

    }

    moveBottom() {
        
    }
}