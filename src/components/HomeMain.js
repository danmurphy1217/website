import Typewriter from "typewriter-effect";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: #525252;
`;

const MainCard = styled.div`
  width: auto;
  padding-bottom: 150px;
`;

const PlainText = styled.header`
  color: #c8c8c8;
  font-size: 60px;
  padding-top: 150px;
`;

const Descriptors = (props) => {
  const typewriter = props.config ? (
    <Typewriter options={props.config} />
  ) : null;
  return (
    <Root>
      <MainCard>
        <PlainText>
          {props.plaintext}
          {typewriter}
        </PlainText>
      </MainCard>
    </Root>
  );
};
export { Descriptors, MainCard, PlainText };
