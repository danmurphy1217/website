import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListSubheader from "@material-ui/core/ListSubheader";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    height: "auto",
  },
  nested: {
    paddingLeft: theme.spacing(4),
    minWidth: 450
  },
}));

function SidebarWith({ companyDetails }) {
  const classes = useStyles();
  const [open, setOpen] = useState({
    "Stacauto": false,
    "Pathstream": false,
    "Jam": false,
    "Wilbur Labs": false
  });

  const handleClick = (companyName) => {
    console.log(open[companyName]);
    setOpen({[companyName]: !open[companyName]})
  };
  const companyFormattedComponents = [];

  companyDetails.forEach((company) => {
    companyFormattedComponents.push(
      <React.Fragment key={company.companyName}>
        <ListItem className={classes.root} key={company.companyName} button onClick={() => {handleClick(company.companyName)}}>
          <ListItemText primary={company.companyName} />
          {open[company.companyName] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        {Array.isArray(company.projects) ? (
          <List>
            {company.projects.map((project) => {
              return (
                <Collapse in={open[company.companyName]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                      <ListItemText primary={project.label} />
                    </ListItem>
                  </List>
                </Collapse>
              );
            })}
          </List>
        ) : (
          <List>
            <ListItem button>
              <ListItemText>Projects Coming Soon!</ListItemText>
            </ListItem>
          </List>
        )}
      </React.Fragment>
    );
  });

  return (
    <List
      subheader={
        <ListSubheader style={{ fontSize: "25px" }}>
          Professional Projects
        </ListSubheader>
      }
    >
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding></List>
      </Collapse>
      { console.log(open, open["Stacauto"]) }
      {companyFormattedComponents}
    </List>
  );
}

export default SidebarWith;
