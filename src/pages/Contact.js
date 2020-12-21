import Header from "../components/Header";
import Container from "../styles/Global"
import Footer from "../components/Footer"
import { Descriptors } from "../components/HomeMain";
const ContactPage = () => {
    return (
      <Container>
        <Header />
        <Descriptors plaintext="Get in Touch"/>
        <Footer />
      </Container>
    );
  };

export default ContactPage;