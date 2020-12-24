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

const HomePageContent = () => {
  const classes = useStyles();

  return (
    <SupportingContentText>
      <div style={{height: "50vh"}}>
        You can contact me at my <a href="mailto:danielmurph8@gmail.com">
            email
        </a>{" "}
        or fill out the below form.
      </div>
    </SupportingContentText>
  );
};

export default HomePageContent;
