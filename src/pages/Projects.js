import Header from "../components/Header";
import ProjectSidebar from "../components/ProjectSidebar";
import styled from 'styled-components';
import Footer from "../components/Footer"
import Container from "../styles/Global"

const ProjectsPage = () => {
    return (
        <Container>
            <Header />
            <ProjectSidebar />
            <Footer/>
        </Container>
    )
}

export default ProjectsPage;