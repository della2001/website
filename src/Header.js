import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';

import './main.css';

class Header extends Component {
    render() {
        return (
            <div class="head">
                <p>ABOUT</p>
                <p>RESUME</p>
                <p>EXPERIENCE</p>
                <p>PROJECTS</p>
                <p>CONTACT</p>
            </div>

        )
    }
}

export default Header