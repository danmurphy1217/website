import styled from "styled-components";
import Divider from "./extras/Divider";

const SecondaryCard = styled.div`
  background-color: ${(props) => props.color || "#748592"};
`;

const SupportingContentWrapper = styled.div`
  display: flex;
  background-color: #c8c8c8;
  justify-content: center;
`;

const SupportContentText = styled.p`
  padding-top: 2%;
  font-size: 24px;
  color: #525252;
  width: 65%;
`;

const HomePageSupporters = () => {
  return (
    <SecondaryCard>
      <Divider />
      <SupportingContentWrapper>
          <SupportContentText>
          Hello&#128075; My name is Dan, and I'm a Senior at 
          <a href= "https://www.davidson.edu/" target="_blank" rel="noreferrer" style={{ color: "#748592", textDecoration: "underline", textDecorationColor: "#C8C8C8", fontWeight: "bold" }}> 
          {' '}Davidson College
          </a>. I'm an Economics major, and I spend most of my time coding, reading, and working on 
          <a href= "/projects" target="_blank" rel="noreferrer" style={{ color: "#748592", textDecoration: "underline", textDecorationColor: "#C8C8C8", fontWeight: "bold" }}>
          {' '}personal projects
          </a>. I'm passionate about contributing to Open Source Software, designing accessible and easy-to-use Interfaces, and building a more equitable technoligical future.
          <br/><br/>Learn more <a href= "/about" target="_blank" rel="noreferrer" style={{ color: "#748592", textDecoration: "underline", textDecorationColor: "#C8C8C8", fontWeight: "bold" }}>about me</a>
          {' ' }and the things I'm <a href= "/projects" target="_blank" rel="noreferrer" style={{ color: "#748592", textDecoration: "underline", textDecorationColor: "#C8C8C8", fontWeight: "bold" }}>working on</a>!
          </SupportContentText>
      </SupportingContentWrapper>
    </SecondaryCard>
  );
};

export default HomePageSupporters;
