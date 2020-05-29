export class Ajax {
    static create(url) {
        return new Ajax(url);
    }

    constructor(url) {
        this.url = url;
    }

    get() {
      return new Promise((onSuccess, onError) => {
        console.log(onSuccess);
        debugger;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.url);
        xhr.send();
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    console.log(xhr.response);
                    onSuccess(JSON.parse(xhr.response));
                    xhr.onreadystatechange = undefined;
                } else {
                    onError(xhr.response)
                } 
            }
        };
      })
    }

    post(body, onSuccess, onError) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', this.url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(body));
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    console.log(xhr.response);
                    onSuccess(JSON.parse(xhr.response));
                    xhr.onreadystatechange = undefined;
                } else {
                    onError(xhr.response)
                } 
            }
        };

        return this;
    }
}