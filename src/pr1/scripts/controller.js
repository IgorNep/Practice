import { TrafficLighter } from './trafficlighter';

const DEFAULT_TARGET = document.querySelector('body');

export class Controller {
    constructor(targetelement = DEFAULT_TARGET) {
        this.target = targetelement;
        this.render();
        this.renderBtn();
    }
    render() {
        const container = document.createElement('div');
        this.header = document.createElement('div');
        this.content = document.createElement('div');
        this.content.style.display = 'flex';

        container.appendChild(this.header);
        container.appendChild(this.content);

        this.target.appendChild(container);
    }
    renderBtn() {
        const addBtn = document.createElement('button');
        const onBtn = document.createElement('button');
        const offBtn = document.createElement('button');

        addBtn.textContent = '+';
        onBtn.textContent = 'on';
        offBtn.textContent = 'off';

        this.header.appendChild(addBtn);
        this.header.appendChild(onBtn);
        this.header.appendChild(offBtn);

        addBtn.onclick = () => {
            const lighter = new TrafficLighter(this.content);
        }

    }
}

