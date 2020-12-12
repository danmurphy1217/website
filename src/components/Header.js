import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  justify-content: flex-end;
  background-color: #748592;
`;

const StyledLinkWrapper = styled.div`
  padding-right: 35px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #525252;
  padding: 20px;
  font-weight: bold;
`;

const StyledLogo = styled(NavLink)`
  text-decoration: none;
  color: #c8c8c8;
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: #525252;
  padding: 15px 15px 15px 35px;
  margin-right: auto; // https://stackoverflow.com/questions/23621650/how-to-justify-a-single-flexbox-item-override-justify-content
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <StyledLogo to="/">Dan Murphy</StyledLogo>
      <StyledLinkWrapper>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </StyledLinkWrapper>
    </HeaderWrapper>
  );
};

export default Header;
