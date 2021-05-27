import React, { Component } from 'react'
import MyPhoto from '../images/profile_pic.png'
import Image from 'react-bootstrap/Image'
class Header extends Component {
    render() {
        return (
            <div className="sidebar-content">
                <header className="sidebar-header">
                    GLENDA SALAS
                </header>
                <Image id="portrait" src={MyPhoto} />
                <div class="sidebar-nav">
                    <p>
                        <a href="#skills">Skills</a>
                    </p>
                    <p>
                        <a href="#projects">Projects</a>
                    </p>
                    <p>
                        <a href="#about">About</a>
                    </p>
                    <p>
                        <a href="#resume">Resume</a>
                    </p >
                    <p>
                        <a href="https://github.com/glendasalas7" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-1x"></i></a>
                        <a href="https://www.linkedin.com/in/g2salas" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-1x"></i></a>
                    </p>
                </div >
            </div>
        )
    }
}
export default Header