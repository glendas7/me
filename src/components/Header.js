import React, { Component } from 'react'
import MyPhoto from '../images/profilepic.png'
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
                    <a href="#skills">Skills</a><br />
                    <a href="#projects">Projects</a><br />
                    <a href="#about">About</a><br />
                    <a href="#resume">Resume</a><br />
                    <a href="#extra">For Fun</a><br />
                    <a href="https://github.com/glendasalas7" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-1x"></i></a><br />
                    <a href="https://www.linkedin.com/in/g2salas" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-1x"></i></a><br />
                </div >
            </div>
        )
    }
}
export default Header