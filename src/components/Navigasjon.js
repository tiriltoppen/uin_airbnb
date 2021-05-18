import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

const NavItems = [
  {
    name: 'Steder aa bo',
    href: '/',
  },
  {
    name: 'Opplevelser',
    href: '/',
  },
  {
    name: 'Opplevelser paa nett',
    href: '/',
  },
];

const StyledNav = styled.nav`
  background-color: gray;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
`;

const StyledNavUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledLogo = styled.img`
  padding: 3px;
`;

const StyledLogoWrapper = styled.section`
  display: flex;
  align-items: center;
`;

const StyledH1 = styled.h1`
  font-size: 20px;
`;

const StyledLi = styled.li`
  display: flex;
  padding: 20px;
  & a {
    color: inherit;
    text-decoration: none;
    & :hover {
      color: white;
    }
  }
`;

const Navigation = () => (
  <StyledNav>
    <NavLink to="/">
      <StyledLogoWrapper>
        <StyledLogo
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Z69SBjLqL3M7L7M145OwcAZCdejq32Q5Lg&usqp=CAU"
          alt="Airbnb logo"
          height="50px"
        />
        <StyledH1>airbnb</StyledH1>
      </StyledLogoWrapper>
    </NavLink>
    <StyledNavUl>
      {NavItems.map((navItem) => (
        <StyledLi key={navItem.name}>
          <a href={navItem.href}>{navItem.name}</a>
        </StyledLi>
      ))}
    </StyledNavUl>
  </StyledNav>
);

export default Navigation;
