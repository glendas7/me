import React from 'react';
import '../App.css';
import { TiArrowRight } from "react-icons/ti";

export default function Skills() {
    const arrow = { color: 'rgb(72, 70, 85)' }

    return (
        <div class="skills">
            <div class="content-header" id="skills">SKILLS</div>
            <div class="content-body">
                <TiArrowRight style={arrow} />C++
                <TiArrowRight style={arrow} />Java
                <TiArrowRight style={arrow} />Python<br />
                <TiArrowRight style={arrow} />Javascript (Vanilla, Node.js, React)
                <TiArrowRight style={arrow} />SQL
                <TiArrowRight style={arrow} />PHP
            </div>
        </div >
    );

}