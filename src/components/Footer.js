import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles({
    bottomNav: {
        backgroundColor: "#748592"
    }
})

const NavBarItems = {
    GitHub: {
        value: "github",
        icon: <GitHubIcon/>,
        href: "https://github.com/danmurphy1217"
    },
    LinkedIn: {
        value: "linkedin",
        icon: <LinkedInIcon/>,
        href: "https://www.linkedin.com/in/daniel-p-murphy/"
    },
    Email: {
        value: "email",
        icon: <AlternateEmailIcon/>,
        href: "mailto:danielmurph8@gmail.com"
    }
}

const Footer = () => {
    const classes = useStyles();
    const NavBarLabels = Object.keys(NavBarItems);
    const BottomNavActions = []
    NavBarLabels.forEach( (label) => {
        BottomNavActions.push(
            <BottomNavigationAction href={label.value} target="_blank" label={label} value={label.value} icon={label.icon}/>
        )
    })

    return (
        <BottomNavigation showLabels className= {classes.bottomNav}>
            <BottomNavigationAction href="https://github.com/danmurphy1217" target="_blank" label="GitHub" value="github" icon={<GitHubIcon/>}/>
            <BottomNavigationAction href="https://www.linkedin.com/in/daniel-p-murphy/" target="_blank" label="LinkedIn" value="linkedin" icon={<LinkedInIcon/>}/>
            <BottomNavigationAction href="mailto:danielmurph8@gmail.com" target="_blank" label="Email" value="email" icon={<AlternateEmailIcon/>}/>
        </BottomNavigation>
    )
}

export default Footer;