const DEFAULT_TARGET = document.querySelector('body');
export class Light {
    constructor(targetElement = DEFAULT_TARGET, color = 'aqua', onClick) {
        this.target = targetElement;
        this.color = color;
        this.onClick = onClick;
        this.isActive = false;
        this.render();
    }
    render() {
        this.light = document.createElement('button');
        this.light.className = `lighter__light`;
        this.target.appendChild(this.light);
        this.light.onclick = () => {
            if (this.onClick) {
                this.onClick();
            }
            this.toggle()
        };
    }
    toggle() {
        if (this.isActive) {
            this.toggleOff();
        } else {
            this.toggleOn();
        }
    }
    toggleOff() {
        this.light.style.backgroundColor = '';
        this.isActive = false;
    }
    toggleOn() {
        this.light.style.backgroundColor = this.color;
        this.isActive = true;
    }

}