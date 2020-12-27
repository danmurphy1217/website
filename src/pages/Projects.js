import { Header } from "../components/Header";
import ProjectSidebar from "../components/ProjectSidebar";
import { Descriptors } from "../components/HomeMain";
import Divider from "../components/extras/Divider";
import Footer from "../components/Footer";
import Container from "../styles/Global";

const ProjectsPage = () => {
  return (
    <Container>
      <Header />
      <Descriptors plaintext="PROJECTS" />
      <Divider />
      <ProjectSidebar />
      <Footer />
    </Container>
  );
};

export default ProjectsPage;
