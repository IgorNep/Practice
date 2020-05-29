import React, { Component } from 'react';

import { Form } from './Form.jsx';
import { Comment } from './Comment.jsx';

import './Main.scss';

export class Main extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        fetch('https://evening-dawn-11092.herokuapp.com/comments')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                this.setState({
                    comments: data,
                })
            })
    }

    renderComments() {
        const htmlElements = [];

        for (let comment of this.state.comments) {

            htmlElements.push(
                <Comment
                    text={comment.text}
                    date={comment.date}
                    author={comment.author} />
            );
        }

        return htmlElements;
    }

    addComment(comment) {
        console.log('>>>>>', comment);
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch('https://evening-dawn-11092.herokuapp.com/comments', requestOptions)
            .then((response) => {
                return response.json()
            })
            .then((comment) => {
                this.setState({
                    comments: this.state.comments.concat([comment])
                })
            })
            .catch((e) => {
                console.log('ERROR');
            });
    }

    render() {
        return <div className='main'>
            <Form onSubmit={this.addComment.bind(this)}/>
            {
                this.state.comments.length === 0
                    ? <h2>Loading...</h2>
                    : this.renderComments()
            }
        </div>
    }
}