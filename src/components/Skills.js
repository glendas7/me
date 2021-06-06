import React from 'react';
import '../App.css';
import { TiArrowRight } from "react-icons/ti";

export default function Skills() {
    const arrow = { color: 'rgb(199, 199, 199)' }
    return (
        <div class="skills">
            <div class="content-header" id="skills">Skills</div>
            <TiArrowRight style={arrow} />C++
            <TiArrowRight style={arrow} />Java
            <TiArrowRight style={arrow} />Python<br />
            <TiArrowRight style={arrow} />Javascript (Vanilla, Node.js, React)
            <TiArrowRight style={arrow} />SQL
            <TiArrowRight style={arrow} />PHP
        </div >
    );

}