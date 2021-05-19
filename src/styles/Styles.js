import styled from 'styled-components/macro';

export const Container = styled.section`
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 1160px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 960px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 740px;
  }
`;

export const Row = styled.footer`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const Column = styled.footer`
  .box1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .box2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .box3 {
    grid-area: 1 / 3 / 2 / 4;
  }
  .box4 {
    grid-area: 1 / 4 / 2 / 5;
  }
  .box5 {
    grid-area: 1 / 5 / 2 / 6;
  }
  .box6 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .box7 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .box8 {
    grid-area: 2 / 3 / 3 / 4;
  }
  .box9 {
    grid-area: 2 / 4 / 3 / 5;
  }
  .box10 {
    grid-area: 2 / 5 / 3 / 6;
  }
`;
