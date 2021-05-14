import styled from 'styled-components/macro';

const styledCards = styled.section`
  display: grid;
  grid-templete-columns: repeat(2, 1fr);
  gap: 25px;
`;
const Cards = ({ children }) => <styledCards>{children}</styledCards>;

export default Cards;
