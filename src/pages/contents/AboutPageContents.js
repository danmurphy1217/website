import { SupportingContentText } from "../../components/PageSupportingContent";
import styled from "styled-components";

const Standout = styled.style`
    color: "#748592",
    text-decoration: "underline",
    text-decoration-color: "#C8C8C8",
    font-weight: "bold",
`;
const AboutPageContent = (
  <SupportingContentText>
    I enjoy coding, and I spend a majority of my free time working on side
    projects where I{" "}
    <a
      style={{
        color: "#748592",
        textDecoration: "underline",
        textDecorationColor: "#C8C8C8",
        fontWeight: "bold",
      }}
    >
      design
    </a>
    ,{" "}
    <a
      style={{
        color: "#748592",
        textDecoration: "underline",
        textDecorationColor: "#C8C8C8",
        fontWeight: "bold",
      }}
    >
      develop
    </a>
    , and{" "}
    <a
      style={{
        color: "#748592",
        textDecoration: "underline",
        textDecorationColor: "#C8C8C8",
        fontWeight: "bold",
      }}
    >
      deploy
    </a>{" "}
    applications with Figma, AWS or GCP, and Docker. Some of my favorite
    technologies to work with are AWS S3, AWS EC2, AWS Lambda, AWS RDS, GCP
    Cloud Run, and Docker. I primarily work with Python and Ruby, but have
    lately been using JavaScript as well. On all of my projects, I also document
    and write unit tests for my code. Outside of technology, I love to read,
    cook, and spend time with family.
  </SupportingContentText>
);

export default AboutPageContent;
