import { Header } from "../components/Header";
import Books from "../components/Books";
import Footer from "../components/Footer";
import { Descriptors } from "../components/HomeMain";
import Container from "../styles/Global";
import Divider from "../components/extras/Divider"

const BookPage = () => {
  return (
    <Container>
      <Header />
      <Descriptors
        plaintext="My Bookshelf"
      />
      <Divider />
      <Books />
      <Footer />
    </Container>
  );
};

export default BookPage;
