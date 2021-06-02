import React from 'react';
import '../App.css';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { SiFirebase } from 'react-icons/si';
import { SiDart } from 'react-icons/si';
import { SiFlutter } from 'react-icons/si';


const useStyles = makeStyles(() => ({
    divider: {
        background: '#6e6e6e',
        width: '90%',
        marginLeft: '5%',

    },
}));


export default function Projects() {
    const classes = useStyles();
    return (

        <div class="projects">
            <div class="content-header" id="projects-h">Projects</div>
            <br />
            <ListItem>
                <p><u>Candy Store Web App</u> - Created a web app for an online candy store.Users can create an account, simulate purchasing products, add/modify/delete products, comment and rate products, and edit their user profile
                    <i class="fab fa-js"></i><SiFirebase /><i class="fab fa-node"></i></p>
            </ListItem>
            <Divider classes={{ root: classes.divider }} />
            <ListItem>
                <p><u>Nostalgia: Photo Memo App</u> - Creating an app for sharing photos with other users.Users may also like and comment on a photo and update their profile information for other users to see.<SiDart /><SiFlutter /><SiFirebase /></p>
            </ListItem>
            <Divider classes={{ root: classes.divider }} />
            <ListItem>
                <p><u>Java Game Collection</u> - A collection of games inspired by classic popular games<i class="fab fa-java"></i> </p>
            </ListItem>
            <Divider classes={{ root: classes.divider }} />
            <ListItem>
                <p><u>KWIC + Microminer Web App</u> - Worked in a group to create a web app that circular shifts and sorts statements.Input created by the user may be searched for utilizing the Microminer search background
                    <i class="fab fa-js-square"></i><SiFirebase /><i class="fab fa-node"></i></p>
            </ListItem>
        </div >
    );

}