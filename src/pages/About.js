import Header from "../components/Header";
import styled from "styled-components";
import { Descriptors } from "../components/HomeMain";
import BasicTimeline from "../components/AboutMain";
import { formatOf } from "../components/extras/customFormatters";

const AboutBody = styled.div`
  // background-color: #005086;
`;

const AboutPage = () => {
  return (
      <AboutBody>
        <Header />
        <Descriptors plaintext="ABOUT ME" />
        <BasicTimeline />
      </AboutBody>
  );
};

export default AboutPage;