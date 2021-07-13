import '../App.css';
import Divider from '@material-ui/core/Divider';
import { SiFirebase, SiJavascript, SiJava, SiDart, SiFlutter } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';

const divider = {
    background: 'rgb(72, 70, 85)',
    width: '90%',
    marginLeft: '5%',
}

const firebase = { color: 'rgb(255, 231, 52)' }
const node = { color: 'rgb(14, 170, 40)' }
const javascript = { color: 'rgb(255, 231, 52)' }
const java = { color: 'rgb(96, 141, 255)' }
const flutter = { color: 'rgb(0, 187, 255)' }
const dart = { color: 'rgb(0, 123, 255)' }

export default function Projects() {
    return (

        <>
            <div class="content-header" id="projects">PROJECTS</div>
            <div class="content-body">
                <u>Candy Store Web App</u> - Created a web app for an online candy store.Users can create an account, simulate purchasing products, add/modify/delete products, comment and rate products, and edit their user profile.
                <br /> <FaNode style={node} /><SiJavascript style={javascript} /><SiFirebase style={firebase} />
                <Divider style={divider} />
                <u>Nostalgia: Photo Memo App</u> - Created an app that allows users to share their photos with others. Users may also like and comment on a photo, tag other users, search for users, and update their profile information.
                <br /> <SiDart style={dart} /><SiFlutter style={flutter} /><SiFirebase style={firebase} />
                <Divider style={divider} />
                <u>Java Game Collection</u> - A collection of games inspired by classic favorites.<br /><SiJava style={java} />
                <Divider style={divider} />
                <u>KWIC + Microminer Web App</u> - Worked in a group to deliver a web app that circular shifts and sorts statements.
                <br />The Input created by the user may also be searched for utilizing the 'Microminer' search feature.
                <br /><SiFirebase style={firebase} /><SiJavascript style={javascript} />
            </div >
        </>
    );

}