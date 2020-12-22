import Header from "../components/Header";
import { Descriptors } from "../components/HomeMain";
import { formatOf } from "../components/extras/customFormatters";
import {PageSupportingContent} from "../components/PageSupportingContent";
import HomePageContent from "./contents/HomePageContents"
import Footer from "../components/Footer";
import Container from "../styles/Global";

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Descriptors
        plaintext="I AM A..."
        config={{
          strings: [
            `${formatOf("ENGINEER")}`,
            `${formatOf("STUDENT")}`,
            `${formatOf("MUSICIAN")}`,
            `${formatOf("WRITER")}`,
          ],
          autoStart: true,
          loop: true,
        }}
      />
      <PageSupportingContent content={HomePageContent} />
      <Footer />
    </Container>
  );
};

export default HomePage;
