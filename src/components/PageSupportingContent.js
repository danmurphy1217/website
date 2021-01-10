import styled from "styled-components";

const SecondaryCard = styled.div`
  background-color: ${(props) => props.color || "#748592"};
`;

const SupportingContentWrapper = styled.div`
  display: flex;
  margin-bottom: 50px;
  background-color: #E6E6E6;
  justify-content: center;
`;

const SupportingContentText = styled.p`
  padding-top: 2%;
  font-size: 24px;
  color: #525252;
  width: 55%;
`;

const PageSupportingContent = (props) => {
  return (
    <SecondaryCard>
      <SupportingContentWrapper>
        {props.content}
      </SupportingContentWrapper>
    </SecondaryCard>
  );
};

export { PageSupportingContent, SupportingContentText };