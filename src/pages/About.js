import {Header} from "../components/Header";
import {PageSupportingContent} from "../components/PageSupportingContent";
import AboutPageContent from "./contents/AboutPageContents"
import { Descriptors } from "../components/HomeMain";
// import AboutMain from "../components/AboutMain";
import Footer from "../components/Footer";
import Divider from "../components/extras/Divider";
import Container from "../styles/Global";

const AboutPage = () => {
  return (
    <Container>
      <Header />
      <Descriptors plaintext="ABOUT ME" />
      <Divider />
      <Divider color="#C8C8C8"/>
      <PageSupportingContent content={AboutPageContent()} />
      {/* <AboutMain /> */}
      <Footer />
    </Container>
  );
};

export default AboutPage;
