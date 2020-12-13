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
  // ! useful for overiding material ui default typography
  // https://stackoverflow.com/questions/43975839/material-ui-next-styling-text-inside-listitemtext
  root: {
    width: 350,
    height: "auto", 
    color: "#748492",
    fontWeight: "bold", 
    fontSize: "20px"
  },
  nested: {
    paddingLeft: theme.spacing(4),
    minWidth: "auto",
    fontSize: "16px",
  },
   
}));

function SidebarWith({ companyDetails }) {
  const classes = useStyles();
  const projectArray = [];
  companyDetails.forEach((company) =>
    company.projects.forEach((project) => projectArray.push(project.label))
  );
  const initialProjectState = {};
  projectArray.forEach((project) => (initialProjectState[project] = false));

  const [open, setOpen] = useState({
    Stacauto: false,
    Pathstream: false,
    Jam: false,
    "Wilbur Labs": false,
  });
  const [projectClicked, setProjectClicked] = useState(initialProjectState);

  const companyNames = companyDetails.map((company) => {
    return company.companyName;
  });
  const projectDetails = {};
  companyDetails.forEach((company) => {
    projectDetails[company.companyName] = company.projects;
  });

  const handleCompanyOpen = (companyName) => {
    console.log(open[companyName]);
    setOpen({ [companyName]: !open[companyName] });
  };

  const handleProjectClicked = (projectName) => {
    console.log(projectClicked[projectName]);
    setProjectClicked({ [projectName]: !projectClicked[projectName] });
  };

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
          <ListItemText primary={company.companyName} disableTypography/>
          {open[company.companyName] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        {Array.isArray(company.projects) ? (
          <List>
            {company.projects.map((project) => {
              return (
                <div>
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
                        onClick={() => {
                          handleProjectClicked(project.label);
                        }}
                      >
                        <ListItemText primary={project.label} disableTypography/>
                      </ListItem>
                    </List>
                  </Collapse>
                </div>
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

  const companyNameToDisplay = [];
  companyNames.forEach((name) => {
    return open[name]
      ? companyNameToDisplay.push(
          <h2 style={{ fontSize: "60px" }}> {name} was opened</h2>
        )
      : null;
  });

  const projectNameToDisplay = [];
  companyNames.forEach((name) => {
    if (open[name]) {
      let companyProjects = projectDetails[name];
      companyProjects.forEach((project) => {
        console.log(projectClicked[project.label]);
        if (projectClicked[project.label]) {
          return projectNameToDisplay.push(
            <h2 style={{ fontSize: "60px", color: "black" }}>
              {project.label} was clicked.
            </h2>
          );
        }
      });
    }
  });

  return (
    <div style={{ display: "flex" }}>
      <List
        subheader={
          <ListSubheader style={{ fontSize: "25px", paddingTop: "15%", fontWeight: "bold"}}>
            Professional Projects
          </ListSubheader>
        }
      >
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding></List>
        </Collapse>
        {companyFormattedComponents}
      </List>
      {companyNameToDisplay}
      {projectNameToDisplay}
    </div>
  );
}

export default SidebarWith;
