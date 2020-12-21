import Header from "../components/Header";
import styled from "styled-components";
import { Descriptors } from "../components/HomeMain";
import BasicTimeline from "../components/AboutMain";
import Footer from "../components/Footer";
import Divider from "../components/extras/Divider";
import Container from "../styles/Global";

const AboutPage = () => {
  return (
    <Container>
      <Header />
      <Descriptors plaintext="ABOUT ME" />
      <Divider />
      <BasicTimeline />
      <Footer />
    </Container>
  );
};

export default AboutPage;
