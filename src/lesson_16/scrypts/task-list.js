import { Ajax } from "./ajax";

export class TaskList {
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
        this.fetchList();
        this.renderForm();
    }

    renderList() {
        this.list = document.createElement('ul');
        this.options.forEach((option) => {
            this.list.appendChild(this.renderItem(option));
        });
        this.rootElement.appendChild(this.list);
    }

    renderItem(option) {
        const li = document.createElement('li');
        li.textContent = option.title;
        return li;
    }

    renderForm() {
        const form = document.createElement('form');
        const input = document.createElement('input');

        input.placaholder = 'Enter task';

        form.appendChild(input);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.sendData(input.value);
            input.value = '';
        });

        this.rootElement.appendChild(form);
    }

    sendData(title) {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({ title }),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch('https://evening-dawn-11092.herokuapp.com/list', requestOptions)
            .then((response) => {
                console.log(response);
                return response.json()
            })
            .then((result) => {
                this.list.appendChild(this.renderItem(result));
            })
            .catch((e) => {
                debugger;
                console.log('ERROR');
            });
    }

    onSuccess(result) {
        console.log(result);
        this.options = result;
        this.renderList();
    }

    onError() {
        alert('Something goes wrong!');
    };

    fetchList() {
        fetch('https://evening-dawn-11092.herokuapp.com/list')
            .then((response) => {
                console.log(response);
                return response.json()
            })
            .then(this.onSuccess)
            .catch((e) => {
                debugger;
                console.log('ERROR');
            });
    }
}