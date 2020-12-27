import {Header} from "../components/Header";
import Container from "../styles/Global"
import Footer from "../components/Footer"
import { Descriptors } from "../components/HomeMain";
import Divider from "../components/extras/Divider"
import {PageSupportingContent} from "../components/PageSupportingContent";
import ContactPageContent from "./contents/ContactPageContents"

const ContactPage = () => {
    return (
      <Container>
        <Header />
        <Descriptors plaintext="GET IN TOUCH"/>
        <Divider />
        <PageSupportingContent content={ContactPageContent()} />
        <Footer />
      </Container>
    );
  };

export default ContactPage;