import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    GLENDA SALAS
                </header>
                <div class="nav">
                    <a href="#skills">Skills</a>|
                    {/* <a href="#projects">Projects</a>| */}
                    <a href="#about">About</a>|
                    <a href="#resume">Resume</a>|
                    <a href="https://github.com/glendasalas7" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-1x"></i></a>
                    <a href="https://www.linkedin.com/in/g2salas" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-1x"></i></a>
                </div>
            </div>
        )
    }
}
export default Header