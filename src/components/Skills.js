import '../App.css';
import { TiArrowRight } from "react-icons/ti";

export default function Skills() {
    const arrow = { color: 'rgb(72, 70, 85)' }

    return (
        <>
            <div class="content-header" id="skills">SKILLS</div>
            <div class="content-body">
                <TiArrowRight style={arrow} />C++
                <TiArrowRight style={arrow} />C#
                <TiArrowRight style={arrow} />Java
                <TiArrowRight style={arrow} />Python<br />
                <TiArrowRight style={arrow} />SQL
                <TiArrowRight style={arrow} />GIT
                <TiArrowRight style={arrow} />Javascript
                <TiArrowRight style={arrow} />HTML/CSS
                <TiArrowRight style={arrow} />NODE.JS
                <TiArrowRight style={arrow} />REACT
                <TiArrowRight style={arrow} />FLUTTER
                <TiArrowRight style={arrow} />DART
                <TiArrowRight style={arrow} />PHP
            </div>
        </ >
    );

}