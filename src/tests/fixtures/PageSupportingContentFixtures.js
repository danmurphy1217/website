import { SupportingContentText } from "../../components/PageSupportingContent";

const PageSupportingContentFixtureOne = () => {
  return (
    <SupportingContentText id="FixtureOne">
        You can contact me at my{" "}
        <a href="mailto:danielmurph8@gmail.com" className="FixtureOneATag">email</a> or fill out the below
        form.
    </SupportingContentText>
  );
};

export default PageSupportingContentFixtureOne;
