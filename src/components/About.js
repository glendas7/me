import React from 'react';
import '../App.css';
import MyPhoto from '../images/profile_pic.png'
import Image from 'react-bootstrap/Image'

export default function About() {

    return (
        <div class="intro" vocab id="about">

            <Image src={MyPhoto} width="260"
                height="270" ALIGN="left" />

            <span>
                <div class="intro-box">
                    Hello👋
                    <p>I am an Aspiring Software Engineer & Senior
                        at the University of Central Oklahoma</p><p> majoring in (you guessed it!)
                            Software Engineering✨</p>
                    <p>I hope to one day work as a Back End Developer or an Embedded Software Engineer</p>
                    <p>A little bit more about me: </p>
                    <p>Violinist, Mom of 1, Hiking/Nature Walks, Physics, Drones, MMOs, History</p>
                </div>
            </span>
        </div >
    );

}