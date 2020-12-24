import { SupportingContentText } from "../../components/PageSupportingContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  standout: {
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
      AWS or GCP, and Docker. Some of my favorite technologies to work with are
      AWS S3, AWS EC2, AWS Lambda, AWS RDS, GCP Cloud Run, and Docker. I
      primarily code in Python and Ruby, but have lately been using JavaScript
      (Node.js and React). For all of my projects, I also document and write
      unit tests for my code.
      <br />
      <br /> Other than coding, I love to read, cook, create music, and spend
      time with family. I grew up in Wilmington, Delaware and go to Davidson
      College.
    </SupportingContentText>
  );
};

export default AboutPageContent;
