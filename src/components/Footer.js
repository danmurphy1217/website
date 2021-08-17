import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    bottomNav: {
        backgroundColor: "#748592",
        width: '100%',
        position: 'fixed',
        bottom: 0
    }
})

const NavBarItems = {
    GitHub: {
        id: 1,
        value: "github",
        icon: <GitHubIcon/>,
        href: "https://github.com/danmurphy1217"
    },
    LinkedIn: {
        id: 2,
        value: "linkedin",
        icon: <LinkedInIcon/>,
        href: "https://www.linkedin.com/in/dmurphy1217/"
    },
    Email: {
        id: 3,
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
            <BottomNavigationAction key={NavBarItems[label].id} href={NavBarItems[label].href} target="_blank" label={label} value={NavBarItems[label].value} icon={NavBarItems[label].icon}/>
        )
    })

    return (
        <BottomNavigation showLabels className= {classes.bottomNav}>
            {BottomNavActions}
        </BottomNavigation>
    )
}

export default Footer;