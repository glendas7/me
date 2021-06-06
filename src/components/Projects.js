import React from 'react';
import '../App.css';
import ListItem from '@material-ui/core/ListItem';
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

        <div class="projects">
            <div class="content-header" id="projects">Projects</div>
            <br />
            <ListItem>
                <p><u>Candy Store Web App</u> - Created a web app for an online candy store.Users can create an account, simulate purchasing products, add/modify/delete products, comment and rate products, and edit their user profile
                    <FaNode style={node} /><SiJavascript style={javascript} /><SiFirebase style={firebase} /></p>
            </ListItem>
            <Divider style={divider} />
            <ListItem>
                <p><u>Nostalgia: Photo Memo App</u> - Creating an app for sharing photos with other users.Users may also like and comment on a photo and update their profile information for other users to see
                    <SiDart style={dart} /><SiFlutter style={flutter} /><SiFirebase style={firebase} /></p>
            </ListItem>
            <Divider style={divider} />
            <ListItem>
                <p><u>Java Game Collection</u> - A collection of games inspired by classic popular games<SiJava style={java} /></p>
            </ListItem>
            <Divider style={divider} />
            <ListItem>
                <p><u>KWIC + Microminer Web App</u> - Worked in a group to create a web app that circular shifts and sorts statements.Input created by the user may be searched for utilizing the Microminer search background
                    <SiFirebase style={firebase} /><SiJavascript style={javascript} /></p>
            </ListItem>
        </div >
    );

}