import { Ajax } from './ajax';

export class CommentList {
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.fetchComments();
    }

    fetchComments() {
         const request = new Ajax('https://evening-dawn-11092.herokuapp.com/list');
        request.get((result) => {
            this.options = result;
            this.renderList();
        });
    }
}