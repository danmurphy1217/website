import Header from "../components/Header";
import { Descriptors } from "../components/HomeMain";
import HomePageSupporters from "../components/HomeSecondary";
import { formatOf } from "../components/extras/customFormatters";
import Footer from "../components/Footer";
import Container from "../styles/Global"

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
      <HomePageSupporters />
      <Footer/>
    </Container>
  );
};

export default HomePage;
