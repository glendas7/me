import React from 'react';
import Typewriter from "typewriter-effect";
import FadeIn from 'react-fade-in';

export default function About() {
    return (
        <div class="intro" vocab id="about" >
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .changeDelay(90)
                        .typeString("Hello!")
                        .pauseFor(1000)
                        .typeString(" My name is Glenda")
                        .start()
                }}
            />
            <FadeIn delay="4800">
                <div>
                    👋
                    <p>I am a Full Time Student and Aspiring Software Engineer✨</p>
                    <p>I hope to one day work with Embedded Systems, Robotics or AI.</p>
                    {/* <p>After I finishing my degree in Software Engineering in May 2022, I plan on continuing my education and learning more about Engineering </p> */}

                    {/* <p>I am an Aspiring Software Engineer & Senior
                        at the University of Central Oklahoma</p>
                    <p delay=""> majoring in (you guessed it!)
                        Software Engineering✨</p> */}
                </div>
            </FadeIn>
        </div >
    );

}