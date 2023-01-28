import '../App.css';
import Divider from '@material-ui/core/Divider';
import { SiFirebase, SiGithub, SiJavascript, SiDart, SiFlutter, SiCsharp, SiUnity } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';

const divider = {
    background: 'rgb(72, 70, 85)',
    width: '90%',
    marginLeft: '5%',
}

const firebase = { color: 'rgb(210, 181, 74)' }
const node = { color: 'rgb(14, 170, 40)' }
const javascript = { color: 'rgb(255, 231, 52)' }
const github = { color: 'rgb(212, 41, 209)' }
const flutter = { color: 'rgb(0, 187, 255)' }
const dart = { color: 'rgb(0, 123, 255)' }
const csharp = { color: 'rgb(120, 36, 210)' }
const unity = { color: 'rgb(133, 133, 133)' }



export default function Projects() {
    return (

        <>
            <div class="content-header" id="projects">PROJECTS</div>
            <div class="content-body">
                <div class="body-accent"><u>Candy Store Web App</u></div>
                - A web app for an simulated online candy store.
                Implemented features allow users to create and edit user accounts, purchase products, leave comments and ratings, and manage store's inventory.
                <br /> <FaNode style={node} /> <SiJavascript style={javascript} /><SiFirebase style={firebase} /><SiGithub style={github} />
                <Divider style={divider} />
                <div class="body-accent"><u>Nostalgia: Photo Memo App</u></div>
                - Created a mobile app that allows users to share their photos with others. Users may also like and comment on a photo, tag other users, search for users, and update their profile information.
                <br /> <SiDart style={dart} /><SiFlutter style={flutter} /><SiFirebase style={firebase} /><SiGithub style={github} />
                <Divider style={divider} />
                <div class="body-accent"><u>Simulated HR System & App</u></div>
                - A simulate a functional hr system implemented as a web or phone app.
                Users will be able to input an HR request and receive live updates on their phone.
                They will also be able to chat with hr representatives, update information, and put schedule requests in on both their phone and on the web app.
                <br /> <FaNode style={node} /><SiFirebase style={firebase} /><SiJavascript style={javascript} /><SiDart style={dart} />
                <SiFlutter style={flutter} /><SiGithub style={github} />
                <Divider style={divider} />
                <div class="body-accent"><u>Unnamed Home Decorating Game</u></div> -
                Created a Game utilizing C# and Unity which allows you to create a virtualhome that you can decorate and explore.
                <br /><SiCsharp style={csharp} /> <SiUnity style={unity} /> <SiGithub style={github} />
            </div >
        </>
    );

}


    //     Utilizing: C#, Unity, Github, TBD
