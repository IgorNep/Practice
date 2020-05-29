import React, { Component } from 'react';
import './Header.scss';

export class Header extends Component {
    constructor() {
        super();
        this.state = {
            links: []
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                links: [
                    {
                        title: 'Lesson 11',
                        href: './lesson_11.html'
                    },
                    {
                        title: 'Lesson 14',
                        href: './lesson_14.html'
                    },
                    {
                        title: 'Lesson 16',
                        href: './lesson_16.html'
                    },
                    {
                        title: 'Google',
                        href: 'https://google.com'
                    }
                ]
            });
            console.log(this.links);
        }, 1000);
    }

    renderLinks() {
        const htmlElements = [];

        for (let link of this.state.links) {
            const li = <li className='header__item'>
                <a className='header__link' href={link.href}>{link.title}</a>
            </li>;

            htmlElements.push(li);
        }

        return htmlElements;
    }

    render() {
        return <header className='header'>
            <ul className="header__menu">
                {this.renderLinks()}
            </ul>
        </header>
    }
}