import React, { Component } from 'react'
import './App2.css'

export default class App2 extends Component {

    btnClick(num) {
        console.log(num);
    }

    render() {

        return (
            <div>
                <button onClick={this.btnClick.bind(this, 123)}>
                    button 1
                </button>
            </div>
        )

    }
}
