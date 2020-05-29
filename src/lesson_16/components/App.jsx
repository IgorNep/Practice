import React, { Component } from 'react';
import { Header } from './Header.jsx';
import { Main } from './Main.jsx';

export class App extends Component {
    render() {
        return <React.Fragment>
            <Header />
            <Main />
        </React.Fragment>
    }
}