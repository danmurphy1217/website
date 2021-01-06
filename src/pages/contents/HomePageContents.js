import { SupportingContentText } from "../../components/PageSupportingContent";
import {
  navLinkStylesEnter,
  navLinkStylesLeave,
} from "../../components/Header";

const HomePageContent = (
  <SupportingContentText>
    Hello&#128075; My name is Dan, and I'm a Senior at{" "}
    <a
      href="https://www.davidson.edu/"
      target="_blank"
      rel="noreferrer"
      style={{
        color: "#748592",
        textDecoration: "underline",
        textDecorationColor: "#E6E6E6",
        fontWeight: "bold",
      }}
      onMouseEnter={(e) => {
        navLinkStylesEnter(e, "underline", "2px", "#525252", "#748492");
      }}
      onMouseLeave={(e) => {
        navLinkStylesLeave(e, "none", "#748492");
      }}
    >
      Davidson College
    </a>
    . I'm an Economics major, and I like to spend my time helping companies build better businesses and software, reading, and
    working on{" "}
    <a
      href="/projects"
      target="_blank"
      rel="noreferrer"
      style={{
        color: "#748592",
        textDecoration: "underline",
        textDecorationColor: "#E6E6E6",
        fontWeight: "bold",
      }}
      onMouseEnter={(e) => {
        navLinkStylesEnter(e, "underline", "2px", "#525252", "#748492");
      }}
      onMouseLeave={(e) => {
        navLinkStylesLeave(e, "none", "#748492");
      }}  
    >
      coding projects
    </a>
    . I'm passionate about contributing to Open Source Software, designing
    accessible and easy-to-use Interfaces, and building a more equitable
    future for technologists.
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
        textDecorationColor: "#E6E6E6",
        fontWeight: "bold",
      }}
      onMouseEnter={(e) => {
        navLinkStylesEnter(e, "underline", "2px", "#525252", "#748492");
      }}
      onMouseLeave={(e) => {
        navLinkStylesLeave(e, "none", "#748492");
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
        textDecorationColor: "#E6E6E6",
        fontWeight: "bold",
      }}
      onMouseEnter={(e) => {
        navLinkStylesEnter(e, "underline", "2px", "#525252", "#748492");
      }}
      onMouseLeave={(e) => {
        navLinkStylesLeave(e, "none", "#748492");
      }}
    >
      working on
    </a>
    !
  </SupportingContentText>
);

export default HomePageContent;
