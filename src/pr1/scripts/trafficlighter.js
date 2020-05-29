export class TrafficLighter {
    constructor(targetelement) {
        this.target = targetelement;
        this.lights = [];
        this.colors = ['red', 'yellow', 'green'];
        this.isActive = false;
        this.render();
        this.renderLights();
    }
    render() {
        this.lighter = document.createElement('div');
        this.lighter.className = 'lighter';



        this.target.appendChild(this.lighter);

    }
    renderLights() {
        for (let color of this.colors) {
            const light = document.createElement('button');
            light.className = `lighter__light lighter__light_${color}`;
            this.lights.push(light);
            this.lighter.appendChild(light);

            light.onclick = () => {
                this.toggleOffAll();
                light.classList.add('active');
            }
        }

    }
    toggleOffAll() {
        for (let light of this.lights) {
            light.classList.remove('active');
        }
    }

}