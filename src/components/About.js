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

                        .typeString(" My name is Glenda 👋")
                        .start()
                }}
            />
            <FadeIn delay="5250">
                <div>
                    <p>I am an Aspiring Software Engineer & Senior
                        at the University of Central Oklahoma</p>
                    <p delay=""> majoring in (you guessed it!)
                        Software Engineering✨</p>
                    <p>A little bit more about me: </p>
                    <p>Violinist, Mom of 1, Hiking/Nature Walks, Physics, Drones, MMOs, History</p>
                </div>
            </FadeIn>
        </div >
    );

}