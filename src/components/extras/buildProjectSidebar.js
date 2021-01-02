import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles((theme) => ({
  // ! useful for overiding material ui default typography
  // https://stackoverflow.com/questions/43975839/material-ui-next-styling-text-inside-listitemtext
  root: {
    width: 350,
    height: "auto",
    color: "#5C5C5C",
    fontWeight: "bold",
    fontSize: "20px",
  },
  nested: {
    paddingLeft: theme.spacing(4),
    minWidth: "auto",
    fontSize: "16px",
  },
  header: {
    paddingLeft: theme.spacing(2),
    color: "black",
    fontSize: "30px",
    marginTop: "10%",
    [theme.breakpoints.up("md")]: {
      marginTop: "20%",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
    },
  },
  projectDetailsContainer: {
    display: "flex",
    justifyContent: "center",
  },
  projectDetails: {
    backgroundColor: "#E6E6E6",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      maxWidth: "65%",
    },
  },

  videoBtn: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "inline-block",
    },
  },

  videoWarningDisplay: {
    display: "flex",
    color: "red",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
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
    setOpen({ [companyName]: !open[companyName] });
  };

  const handleProjectClicked = (projectName) => {
    setProjectClicked({ [projectName]: !projectClicked[projectName] });
  };

  const displayDemoInfoFor = (project) => {
    if (project.meta.image || project.meta.video) {
      if (project.meta.image) {
        return (
          <div>
            <Button target="_blank" href={project.meta.image} variant="dark">
              View Data Diagram
            </Button>
          </div>
        );
      } else {
        return (
          <div>
            <Button target="_blank" href={project.meta.video} variant="dark">
              View Demo
            </Button>
          </div>
        );
      }
    }
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
          <ListItemText primary={company.companyName} disableTypography />
          {open[company.companyName] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        {Array.isArray(company.projects) ? (
          <List>
            {company.projects.map((project) => {
              return (
                <div key={Math.random().toString(36)}>
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
                        <ListItemText
                          primary={project.label}
                          disableTypography
                        />
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

  const projectNameToDisplay = [];
  companyNames.forEach((name) => {
    if (open[name]) {
      let companyProjects = projectDetails[name];
      companyProjects.forEach((project) => {
        const uniqueProjectKey = name + project.slug;

        if (projectClicked[project.label]) {
          const requirements = [];
          project.meta.projectRequirements.forEach((p) => {
            requirements.push(<li>{p}</li>);
          });
          const techStack = [];
          project.meta.techStack.forEach((p) => {
            techStack.push(<li>{p}</li>);
          });
          const problemsSolved = [];
          project.meta.problemsSolved.forEach((p) => {
            problemsSolved.push(<li>{p}</li>);
          });
          return projectNameToDisplay.push(
            <div className={classes.projectDetailsContainer}>
              <Jumbotron className={classes.projectDetails}>
                <h1>{project.label}</h1>
                <p>{project.meta.description}</p>
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {displayDemoInfoFor(project)}
                  <br />
                </div>
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey={uniqueProjectKey + "requirements"}
                      >
                        Project Requirements
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse
                      eventKey={uniqueProjectKey + "requirements"}
                    >
                      <Card.Body>{requirements}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey={uniqueProjectKey + "tech"}
                      >
                        Tech Stack Used
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={uniqueProjectKey + "tech"}>
                      <Card.Body>{techStack}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey={uniqueProjectKey + "outcome"}
                      >
                        Outcomes
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={uniqueProjectKey + "outcome"}>
                      <Card.Body>{problemsSolved}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Jumbotron>
            </div>
          );
        }
      });
    }
  });

  return (
    <div className={classes.container}>
      <List>
        <h1 className={classes.header}>Professional Projects</h1>
        {companyFormattedComponents}
      </List>
      {projectNameToDisplay}
    </div>
  );
}

export default SidebarWith;
