import {Header} from "../components/Header";
import { Descriptors } from "../components/HomeMain";
import { formatOf } from "../components/extras/customFormatters";
import {PageSupportingContent} from "../components/PageSupportingContent";
import HomePageContent from "./contents/HomePageContents"
import Footer from "../components/Footer";
import Container from "../styles/Global";
import Divider from "../components/extras/Divider";

const HomePage = () => {
  return (
    <div>
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
          <Divider />
          <PageSupportingContent content={HomePageContent} />
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
