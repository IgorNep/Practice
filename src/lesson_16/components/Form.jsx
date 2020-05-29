import React, { Component } from 'react';

export class Form extends Component {
    constructor() {
        super();
        this.state = {
            author: '',
            text: ''
        }
    }

    submit(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state);
    }

    onChangeAuthor(e) {
        const author = e.target.value;
        this.setState({
            author
        })
    }

    onChangeText(e) {
        const text = e.target.value;
        this.setState({
            text
        });
    }

    render() {
        return <form onSubmit={this.submit.bind(this)}>
            <p>{this.state.author}</p>
            <input
                value={this.state.author}
                onChange={this.onChangeAuthor.bind(this)}
                type="text" />
            <textarea
                cols="30"
                rows="10"
                value={this.state.text}
                onChange={this.onChangeText.bind(this)}
            />
            <button>Add</button>
        </form>
    }
}