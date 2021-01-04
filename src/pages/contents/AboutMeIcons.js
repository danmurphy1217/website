import React, { forwardRef } from "react";
import { SiPython } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { SiRubygems } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "black",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const IconElements = [
  <SiPython size={35} />,
  <SiAmazonaws size={35} />,
  <SiRubygems size={35} />,
  <SiJavascript size={35} />,
  <SiGooglecloud size={35} />,
  <GrMysql size={35} />,
];

const OnHoverElements = [
    "Python",
    "AWS: EC2, Lambda, Cloudformation, S3, RDS, IAM, & more",
    "Ruby",
    "JavaScript: Vanilla, React, and Node",
    "GCP: Cloud Run",
    "MySQL"
]
const FormattedIconElements = [];

IconElements.forEach(function (icon, i) {
  FormattedIconElements.push(
    <Tooltip title={OnHoverElements[i]} aria-label="add">
      <Fab>{icon}</Fab>
    </Tooltip>
  );
});

// TODO: use style={{flexBasis: "100%"}} styling on div, wrap every 3 elements in it

const AboutMeIcons = () => {
  return (
    <div style={{ width: "40%" }}>
      <h1 style={{ textAlign: "center" }}>Skills</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1em 0",
          flexWrap: "wrap",
        }}
      >
        {FormattedIconElements}
      </div>
    </div>
  );
};

export default AboutMeIcons;
