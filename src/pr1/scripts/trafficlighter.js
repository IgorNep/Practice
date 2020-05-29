
import { Light } from './light';

export class TrafficLighter {
    constructor(targetelement) {
        this.target = targetelement;
        this.colors = ['red', 'yellow', 'green'];
        this.isActive = false;
        this.index = 0;
        this.lights = [];
        this.render();
        this.renderLights();
        this.autoSwitch();
    }

    autoSwitch() {
        this.intId = setInterval(() => {
            this.toggleOffAll();
            this.index = this.index < this.colors.length ? this.index : 0;
            this.lights[this.index].toggleOn();
            this.index++;
        }, 1000);
    }
    stopAutoswitch() {
        clearInterval(this.intId);
    }
    render() {
        this.lighter = document.createElement('div');
        this.lighter.className = 'lighter';

        this.target.appendChild(this.lighter);
        this.lighter.onmouseenter = () => {
            this.stopAutoswitch();
        }
        this.lighter.onmouseleave = () => {
            this.autoSwitch();
        }
    }

    renderLights() {
        for (let color of this.colors) {
            const light = new Light(this.lighter, color, () => {
                this.toggleOffAll()
            });
            this.lights.push(light);
        }
    }

    toggleOffAll() {
        for (const light of this.lights) {
            light.toggleOff();
        }
    }
    toggleOn() {
        this.lights[0].toggleOn();
    }

}







