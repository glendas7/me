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
            <div class="content-body-list">
                <div class="body-accent"><u>Candy Store Web App</u></div>
                - A web app for an online candy store.
                Users can create and update user accounts, purchase products, leave comments and ratings, and manage the store's inventory.
                <br />
                <div class="icons">
                    <FaNode style={node} /> <SiJavascript style={javascript} /><SiFirebase style={firebase} /><SiGithub style={github} />
                </div>
                <Divider style={divider} />

                <div class="body-accent"><u>Nostalgia: Photo Memo App</u></div>
                - Mobile app that allows users to share their photos with others. Users can also like and comment on a photo, tag other users, search for users, and update their profile information.
                <br />
                <div class="icons">
                    <SiDart style={dart} /><SiFlutter style={flutter} /><SiFirebase style={firebase} /><SiGithub style={github} />
                </div>

                <Divider style={divider} />
                <div class="body-accent"><u>Unnamed Unity Game</u></div>
                - Creating an idle task horror game using Unity and C#.
                <br />
                <div class="icons">
                    <SiCsharp style={csharp} /> <SiUnity style={unity} /> <SiGithub style={github} />
                </div>
            </div >
        </>
    );
}