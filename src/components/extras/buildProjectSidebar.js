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
    minWidth: "auto",
  },
}));

function SidebarWith({ companyDetails }) {
  const classes = useStyles();
  const projectArray = []
  companyDetails.forEach( (company) => company.projects.forEach((project) =>  projectArray.push(project.label )));
  
  console.log(projectArray);
  const initialProjectState = {}
  projectArray.forEach((project) => initialProjectState[project] = false )
  
  console.log(initialProjectState);
  
  const [open, setOpen] = useState({
    Stacauto: false,
    Pathstream: false,
    Jam: false,
    "Wilbur Labs": false,
  });

  const [projectClicked, setProjectClicked] = useState(initialProjectState);

  const handleCompanyOpen = (companyName) => {
    console.log(open[companyName]);
    setOpen({ [companyName]: !open[companyName] });
  };

  const handleProjectClicked = (projectName) => {
    console.log(projectClicked[projectName]);
    setProjectClicked({ [projectName]: !projectClicked[projectName] });
  }
  const companyFormattedComponents = [];

  companyDetails.forEach((company) => {
    companyFormattedComponents.push(
      <React.Fragment key={company.companyName}>
        <ListItem
          className={classes.root}
          key={company.companyName}
          button
          onClick={() => {
            handleCompanyOpen(company.companyName);
          }}
        >
          <ListItemText primary={company.companyName} />
          {open[company.companyName] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        {Array.isArray(company.projects) ? (
          <List>
            {company.projects.map((project) => {
              return (
                <Collapse
                  in={open[company.companyName]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItem
                      button
                      key={company.companyName}
                      className={classes.nested}
                      onClick= { () => {handleProjectClicked(project.label)}}
                    >
                      <ListItemText primary={project.label} />
                    </ListItem>
                  </List>
                  { projectClicked[project.label] ? <p> {project.label} Clicked</p> : null }
                </Collapse>
              );
            })}
          </List>
        ) : (
          <List>
            <ListItem button>
              <ListItemText key={company.companyName}>
                Projects Coming Soon!
              </ListItemText>
            </ListItem>
          </List>
        )}
      </React.Fragment>
    );
  });

  return (
    <div style={{ display: "flex" }}>
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
        {companyFormattedComponents}
      </List>
      {open["Stacauto"] ? (
        <h2 style={{ fontSize: "60px" }}>Stacauto was opened</h2>
      ) : null}
      {open["Wilbur Labs"] ? (
        <h2 style={{ fontSize: "60px" }}>Wilbur was opened</h2>
      ) : null}
      {open["Pathstream"] ? (
        <h2 style={{ fontSize: "60px" }}>Pathstream was opened</h2>
      ) : null}
      {open["Jam"] ? (
        <h2 style={{ fontSize: "60px" }}>Jam was opened</h2>
      ) : null}
    </div>
  );
}

export default SidebarWith;
