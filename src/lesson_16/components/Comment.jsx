import React, { Component } from 'react';

export class Comment extends Component {
    render() {
        return <div className="comment">
            <div className="comment__text">{this.props.text}</div>
            <div className="comment__footer">
                <span>{this.props.author}</span>
                <span>{this.props.date}</span>
            </div>
        </div>
    }
}