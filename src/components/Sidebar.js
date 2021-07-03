import React, { Component } from 'react'
import MyPhoto from '../images/self.jpg'
import Image from 'react-bootstrap/Image'
import { SiLinkedin, SiGithub, SiGmail } from 'react-icons/si';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <header className="sidebar-header">
                    GLENDA SALAS
                </header>
                <Image id="portrait" src={MyPhoto} />
                <div class="sidebar-nav">
                    <a href="https://drive.google.com/file/d/1VJKUfgI-NT50ZPgLE-Ss9rSFHa5LSzKt/view?usp=sharing">Resume</a><br />
                    <a href="#about">About</a><br />
                    <a href="#skills">Skills</a><br />
                    <a href="#projects">Projects</a><br />
                    <a href="#education">Education</a><br />
                    <a href="#extra">For Fun</a><br />
                    <a href="https://github.com/glendasalas7" target="_blank" rel="noopener noreferrer"><SiGithub size={32} /></a>
                    <a href="https://www.linkedin.com/in/g2salas" target="_blank" rel="noopener noreferrer"><SiLinkedin size={32} /></a>
                    <a href="mailto:gsalas1@uco.edu"><SiGmail size={32} /></a>
                </div >
            </div>
        )
    }
}
export default Sidebar