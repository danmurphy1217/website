import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  background-color: #748592;
  position: fixed;
  top: 0px;
  z-index: 999; // https://stackoverflow.com/questions/54849030/how-to-make-my-fixed-header-appear-in-front-of-the-body
`;

const StyledLinkWrapper = styled.div`
  padding-right: 35px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #525252;
  padding: 20px;
  font-weight: bold;
`;

const StyledLogo = styled.a`
  text-decoration: none;
  color: #c8c8c8;
  padding: 15px 15px 15px 35px;
  margin-right: auto; // https://stackoverflow.com/questions/23621650/how-to-justify-a-single-flexbox-item-override-justify-content
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

const Header = () => {
  return (
    <HeaderWrapper>
      <StyledLogo
        href="/"
      >
        <Logo/>
      </StyledLogo>
      <StyledLinkWrapper>
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
      </StyledLinkWrapper>
    </HeaderWrapper>
  );
};

export default Header;
