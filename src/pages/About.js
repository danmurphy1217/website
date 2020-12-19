import Header from "../components/Header";
import styled from "styled-components";
import { Descriptors } from "../components/HomeMain";
import BasicTimeline from "../components/AboutMain";
import Footer from "../components/Footer";

const AboutBody = styled.div`
  // background-color: #005086;
`;

const AboutPage = () => {
  return (
      <AboutBody>
        <Header />
        <Descriptors plaintext="ABOUT ME" />
        <BasicTimeline />
        <Footer />
      </AboutBody>
  );
};

export default AboutPage;