import Header from "../components/Header";
import Container from "../styles/Global"
import Footer from "../components/Footer"
import { Descriptors } from "../components/HomeMain";
import Divider from "../components/extras/Divider"

const ContactPage = () => {
    return (
      <Container>
        <Header />
        <Descriptors plaintext="GET IN TOUCH"/>
        <Divider />
        <Footer />
      </Container>
    );
  };

export default ContactPage;