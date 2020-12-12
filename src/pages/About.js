import Header from "../components/Header";
import styled from "styled-components";

const AboutBody = styled.body`
  background-color: #005086;
`;

const AboutPage = () => {
  return (
      <AboutBody>
        <Header />
        <h1>ABOUT</h1>
        <h2>Dan</h2>
      </AboutBody>
  );
};

export default AboutPage;