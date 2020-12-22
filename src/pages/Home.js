import Header from "../components/Header";
import { Descriptors } from "../components/HomeMain";
import {PageSupportingContent, SupportingContentText} from "../components/PageSupportingContent";
import { formatOf } from "../components/extras/customFormatters";
import Footer from "../components/Footer";
import Container from "../styles/Global";

const pageContent = () => {
  return (
    <SupportingContentText>
      Hello&#128075; My name is Dan, and I'm a Senior at
      <a
        href="https://www.davidson.edu/"
        target="_blank"
        rel="noreferrer"
        style={{
          color: "#748592",
          textDecoration: "underline",
          textDecorationColor: "#C8C8C8",
          fontWeight: "bold",
        }}
      >
        {" "}
        Davidson College
      </a>
      . I'm an Economics major, and I spend most of my time coding, reading,
      and working on
      <a
        href="/projects"
        target="_blank"
        rel="noreferrer"
        style={{
          color: "#748592",
          textDecoration: "underline",
          textDecorationColor: "#C8C8C8",
          fontWeight: "bold",
        }}
      >
        {" "}
        personal projects
      </a>
      . I'm passionate about contributing to Open Source Software, designing
      accessible and easy-to-use Interfaces, and building a more equitable
      technoligical future.
      <br />
      <br />
      Learn more{" "}
      <a
        href="/about"
        target="_blank"
        rel="noreferrer"
        style={{
          color: "#748592",
          textDecoration: "underline",
          textDecorationColor: "#C8C8C8",
          fontWeight: "bold",
        }}
      >
        about me
      </a>{" "}
      and the things I'm{" "}
      <a
        href="/projects"
        target="_blank"
        rel="noreferrer"
        style={{
          color: "#748592",
          textDecoration: "underline",
          textDecorationColor: "#C8C8C8",
          fontWeight: "bold",
        }}
      >
        working on
      </a>
      !
    </SupportingContentText>
  );
};

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
      <PageSupportingContent content={pageContent()} />
      <Footer />
    </Container>
  );
};

export default HomePage;
