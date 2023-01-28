import '../App.css';
import { SiSquareenix } from 'react-icons/si';

const sqenix = { color: 'rgb(157, 8, 8)' }

export default function JustForFun() {
    return (
        <>
            <div class="content-header" id="extra">JUST FOR FUN</div>
            <div class="content-body">
                <div class="body-accent">Current Build: </div><a href="https://secure.newegg.com/wishlist/pd/20367076">College Budget Build</a><br />
                <div class="body-accent">What I'm Up To: </div><a href="https://www.udemy.com/course/unitycourse2/">Unity C# 3D</a>,
                <a href="https://www.udemy.com/course/unitycourse/?src=sac&kw=Complete+C%23+Unity+Game+Developer">Unity C# 2D</a>,
                <a href="https://www.edx.org/course/introduction-to-kubernetes-on-edge-with-k3s">Kubernetes</a><br />
                <a href="https://na.finalfantasyxiv.com/lodestone/character/44924210/"><SiSquareenix style={sqenix} /></a>
            </div >
        </>
    );
}