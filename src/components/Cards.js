import styled from 'styled-components/macro';

const StyledCards = styled.section`
  display: grid;
  grid-templete-columns: repeat(2, 1fr);
  gap: 25px;
`;
const Cards = ({ children }) => <StyledCards>{children}</StyledCards>;

export default Cards;
