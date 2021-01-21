import { SupportingContentText } from "../../components/PageSupportingContent";
import {
  navLinkStylesEnter,
  navLinkStylesLeave,
} from "../../components/Header";
import Button from "react-bootstrap/Button";

const NotFoundContent = (
  <SupportingContentText>
    <div class="col text-center">
      <Button  type="button" class="btn" href="/" variant="dark">
        Go Home
      </Button>
    </div>
  </SupportingContentText>
);

export default NotFoundContent;
