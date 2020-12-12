import styled from 'styled-components';

const Divider = styled.div`
  background-color: ${ props => props.color || "#748592" };
  flex-basis: 100%;
  width: auto;
  padding-top: 25px;
`;

export default Divider;