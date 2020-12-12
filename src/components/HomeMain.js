import Typewriter from "typewriter-effect";
import styled from "styled-components";
import { formatOf } from "./extras/customFormatters";

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

const Descriptors = () => {
  return (
      <Root>  
        <MainCard>
          <PlainText>
              I AM A...
              <Typewriter
              options={{
                  strings: [
                  `${formatOf("ENGINEER")}`,
                  `${formatOf("STUDENT")}`,
                  `${formatOf("MUSICIAN")}`,
                  `${formatOf("WRITER")}`,
                  ],
                  autoStart: true,
                  loop: true,
              }}
              />
          </PlainText>
        </MainCard>
    </Root>
  );
};
export { Descriptors, MainCard, PlainText};