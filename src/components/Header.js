import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import Logo from "./Logo";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  color: #525252;
  padding: 20px;
  font-weight: bold;
`;

const navLinkStylesEnter = (e, textDecor = "underline", textDecorThickness = "2px", textDecorColor = "#C8C8C8", textColor = "#525252") => {
  e.target.style.textDecoration = textDecor;
  e.target.style.textDecorationThickness = textDecorThickness;
  e.target.style.textDecorationColor = textDecorColor;
  e.target.style.color = textColor;
};

const navLinkStylesLeave = (e, textDecor="none", textColor="#525252") => {
  e.target.style.textDecoration = textDecor;
  e.target.style.color = textColor;
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
  },
  siteNavitation: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0),
    width: "100%",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
    },
  },
}));

const Header = function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ backgroundColor: "#748592" }}>
        <Toolbar>
          <Typography className={classes.logo}>
            <Logo />
          </Typography>
          <div className={classes.siteNavitation}>
            <StyledLink
              href="/"
              onMouseEnter={(e) => {
                navLinkStylesEnter(e);
              }}
              onMouseLeave={(e) => {
                navLinkStylesLeave(e);
              }}
            >
              Home
            </StyledLink>
            <StyledLink
              href="/projects"
              onMouseEnter={(e) => {
                navLinkStylesEnter(e);
              }}
              onMouseLeave={(e) => {
                navLinkStylesLeave(e);
              }}
            >
              Projects
            </StyledLink>
            <StyledLink
              href="/about"
              onMouseEnter={(e) => {
                navLinkStylesEnter(e);
              }}
              onMouseLeave={(e) => {
                navLinkStylesLeave(e);
              }}
            >
              About
            </StyledLink>
            <StyledLink
              href="/bookshelf"
              onMouseEnter={(e) => {
                navLinkStylesEnter(e);
              }}
              onMouseLeave={(e) => {
                navLinkStylesLeave(e);
              }}
            >
              Books
            </StyledLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export { Header, navLinkStylesEnter, navLinkStylesLeave, StyledLink };
