import '../App.css';
import { SiSquareenix } from 'react-icons/si';

const sqenix = { color: 'rgb(157, 8, 8)' }

export default function AboutMe() {
    return (
        <>
            <div class="content-header" id="about">About Me</div>
            <div class="content-body-list">
                <div class="body-accent"><u>Home Town: </u></div>Oklahoma City, Oklahoma <br />
                <div class="body-accent"><u>Pets: </u></div>Panther Chameleon<br />
                <div class="body-accent"><u>Hobbies: </u></div>Hanging out with my son, crocheting, 3D printing, playing video games, traveling, and animals<br />
                <div class="body-accent"><u>Current Build: </u></div><a href="https://secure.newegg.com/wishlist/pd/20367076">College Budget Build</a><br />
                <div class="body-accent"><u>What I'm Up To: </u></div><a href="https://www.udemy.com/course/unitycourse2/">Unity C# 3D</a>,
                <a href="https://www.udemy.com/coursse/unitycourse/?src=sac&kw=Complete+C%23+Unity+Game+Developer">Unity C# 2D</a>,
                <a href="https://www.edx.org/course/introduction-to-kubernetes-on-edge-with-k3s">Kubernetes</a><br />
                <a href="https://na.finalfantasyxiv.com/lodestone/character/44924210/"><SiSquareenix style={sqenix} /></a>
            </div>
        </>
    );
}