import styled from 'styled-components/macro';

/**
 * Her er en enkel Styled Component som jeg ønsker å bruke mange steder.
 * Derfor eksporteres den herfra
 * Når vi bruker export const Navn så må den importeres med import {Navn} from 'filepath'
 */

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
