import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "./Logo";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  color: #525252;
  padding: 20px;
  font-weight: bold;
`;

const navLinkStylesEnter = (e) => {
  e.target.style.textDecoration = "underline";
  e.target.style.textDecorationThickness = "2px";
  e.target.style.textDecorationColor = "#C8C8C8";
  e.target.style.color = "#525252";
};

const navLinkStylesLeave = (e) => {
  e.target.style.textDecoration = "none";
  e.target.style.color = "#525252";
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
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    display: "table-cell",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const HeaderTwo = function SearchAppBar() {
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
              href="/contact"
              onMouseEnter={(e) => {
                navLinkStylesEnter(e);
              }}
              onMouseLeave={(e) => {
                navLinkStylesLeave(e);
              }}
            >
              Contact
            </StyledLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderTwo;
