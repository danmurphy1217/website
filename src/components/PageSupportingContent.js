import styled from "styled-components";
import Divider from "./extras/Divider";

const SecondaryCard = styled.div`
  background-color: ${(props) => props.color || "#748592"};
`;

const SupportingContentWrapper = styled.div`
  display: flex;
  background-color: #c8c8c8;
  justify-content: center;
  padding-bottom: 10%;
`;

const SupportingContentText = styled.p`
  padding-top: 2%;
  font-size: 24px;
  color: #525252;
  width: 50%;
`;

const PageSupportingContent = (props) => {
  return (
    <SecondaryCard>
      <Divider />
      <SupportingContentWrapper>
        {props.content}
      </SupportingContentWrapper>
    </SecondaryCard>
  );
};

export { PageSupportingContent, SupportingContentText };