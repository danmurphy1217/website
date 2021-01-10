import { SiPython } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiRuby } from "react-icons/di";
import { DiDatabase } from "react-icons/di";
import { DiGit } from "react-icons/di";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { IconContext } from "react-icons";

const useStyles = makeStyles((theme) => ({
  icons: {
    display: "flex",
    alignItems: "flex-center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-around",
      flexWrap: "wrap",
      flexDirection: "row",
    },
  }

}))

const IconElements = [
  <SiPython size={65} />,
  <SiAmazonaws size={65} />,
  <DiRuby size={65} />,
  <SiJavascript size={65} />,
  <SiGooglecloud size={65} />,
  <GrMysql size={65} />,
  <SiDocker size={65} />,
  <DiDatabase size={65} />,
  <DiGit size={65} />,
];

const OnHoverElements = [
    <h6>Python</h6>,
    <h6>AWS - EC2, Lambda, Cloudformation, S3, RDS, IAM, & more</h6>,
    <h6>Ruby</h6>,
    <h6>JavaScript - Vanilla, React, and Node</h6>,
    <h6>GCP: Cloud Run</h6>,
    <h6>MySQL</h6>,
    <h6>Docker</h6>,
    <h6>Database Design</h6>,
    <h6>Git</h6>,
]
const FormattedIconElements = [];

IconElements.forEach(function (icon, i) {
  FormattedIconElements.push(
    <Tooltip title={OnHoverElements[i]} aria-label={OnHoverElements[i]} size="large">
        <Button style={{marginBottom: "25px"}}>
          <IconContext.Provider value={{ color: "#525252"}}>
            {icon}
          </IconContext.Provider>
        </Button>
    </Tooltip>
  );
});

const AboutMeIcons = () => {

  const classes = useStyles();

  return (
    <div style={{ width: "50%" }}>
      <h1 style={{ textAlign: "center", marginBottom: "35px" }}>Skills</h1>
      <div
        className= {classes.icons}
        id = "icon-children"
      >
        {FormattedIconElements}
      </div>
    </div>
  );
};

export default AboutMeIcons;
