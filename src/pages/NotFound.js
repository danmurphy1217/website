import Container from "../styles/Global";
import Divider from "../components/extras/Divider";
import { Descriptors } from "../components/HomeMain";
import { Header } from "../components/Header";
import {PageSupportingContent} from "../components/PageSupportingContent";
import NotFoundContent from "./contents/NotFoundContents"


const NotFound = () => {
  return (
    <Container style={{height: "100%"}}>
      <Header />
      <Descriptors
        plaintext="LOST?"
      />
      <Divider />
      <PageSupportingContent content={NotFoundContent} />
    </Container>
  );
};

export default NotFound;
