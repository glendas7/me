import Typewriter from "typewriter-effect";
import FadeIn from 'react-fade-in';

export default function Intro() {
    return (
        <div class="intro" vocab id="intro" >
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
                    I am a Full Time Student and Aspiring Software Engineer✨<br />
                    I hope to one day work with Embedded Systems, AI, or Full Stack<br />
                </div>
            </FadeIn>
        </div >
    );

}