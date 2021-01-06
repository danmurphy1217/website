import {Header} from "../components/Header";
import {PageSupportingContent} from "../components/PageSupportingContent";
import AboutPageContent from "./contents/AboutPageContents"
import AboutMeIcons from "./contents/AboutMeIcons"
import { Descriptors } from "../components/HomeMain";
import Footer from "../components/Footer";
import Divider from "../components/extras/Divider";
import Container from "../styles/Global";


const AboutPage = () => {
  return (
    <Container>
      <Header />
      <Descriptors plaintext="ABOUT ME" />
      <Divider />
      <PageSupportingContent content={AboutPageContent()} />
      <PageSupportingContent content={AboutMeIcons()} />
      <Footer />
    </Container>
  );
};

export default AboutPage;
