import { SupportingContentText } from "../../components/PageSupportingContent";
import { makeStyles } from "@material-ui/core/styles";
import {
  navLinkStylesEnter,
  navLinkStylesLeave,
} from "../../components/Header";

const useStyles = makeStyles(() => ({
  standout: {
    color: "#525252",
    textDecoration: "underline",
    textDecorationColor: "#C8C8C8",
    fontWeight: "bold",
  },
  link: {
    color: "#748592",
    textDecoration: "underline",
    textDecorationColor: "#C8C8C8",
    fontWeight: "bold",
  },
}));

const AboutPageContent = () => {
  const classes = useStyles();

  return (
    <SupportingContentText>
      I enjoy coding, and I spend a majority of my free time working on side
      projects where I <font className={classes.standout}>design</font>,{" "}
      <font className={classes.standout}>develop</font>, and{" "}
      <font className={classes.standout}>deploy</font> applications with Figma,
      AWS or GCP, and Docker. A few of my recent projects include{" "}
      <a
        href="https://github.com/danmurphy1217/notion-ruby"
        rel="noreferrer"
        target="_blank"
        className={classes.link}
        onMouseEnter={(e) => {
          navLinkStylesEnter(e, "underline", "2px", "#525252", "#748492");
        }}
        onMouseLeave={(e) => {
          navLinkStylesLeave(e, "none", "#748492");
        }}
      >
        Notion API Ruby Gem
      </a>{" "}
      and{" "}
      <a
        href="https://github.com/dylane1999/SentimentAnalysisApp"
        rel="noreferrer"
        target="_blank"
        className={classes.link}
        onMouseEnter={(e) => {
          navLinkStylesEnter(e, "underline", "2px", "#525252", "#748492");
        }}
        onMouseLeave={(e) => {
          navLinkStylesLeave(e, "none", "#748492");
        }}
      >
        Twitter Sentiment Analysis
      </a>
      . Some of my favorite technologies to work with are AWS S3, AWS EC2, AWS
      Lambda, AWS RDS, GCP Cloud Run, and Docker. I primarily code in Python,
      Ruby, and Javascript (Node.js and React). For all of my projects, I also
      write documentation and unit tests.
      <br />
      <br /> Other than coding, I love to read (check out some of my favorites{" "}
      <a
        href="/bookshelf"
        rel="noreferrer"
        target="_blank"
        className={classes.link}
        onMouseEnter={(e) => {
          navLinkStylesEnter(e, "underline", "2px", "#525252", "#748492");
        }}
        onMouseLeave={(e) => {
          navLinkStylesLeave(e, "none", "#748492");
        }}
      >
        here
      </a>
      ), cook, create music, and spend time with family. I grew up in
      Wilmington, Delaware and go to Davidson College.
    </SupportingContentText>
  );
};

export default AboutPageContent;
