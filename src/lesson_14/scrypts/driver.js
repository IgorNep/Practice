export class Driver {
    constructor(someCar) {
        this.car = someCar;
    }

    drive(distance) {
        for (let i = 0; i <= distance; i++) {
            try {
                this.car.moveForward();
            } catch(err) {
                console.log(err.message);
                break;
            }
        }
    }
}