import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

const NavItems = [
  {
    name: 'Steder å bo',
    href: '/',
  },
  {
    name: 'Opplevelser',
    href: '/error',
  },
  {
    name: 'Opplevelser på nett',
    href: '/error2',
  },
];

const StyledNav = styled.nav`
  background-color: #fff;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'logo knapper andre'
    '. search .';
  box-shadow: -1px -1px 10px 0px #767676;
`;

const StyledNavUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-area: knapper;
`;

const StyledLogo = styled.img`
  padding: 2px;
  height: 27px;
`;

const StyledLogoWrapper = styled.section`
  display: flex;
  align-content: center;
  grid-area: logo;
  margin: 20px 0px 0px 100px;
`;

const StyledH1 = styled.h1`
  font-size: 20px;
  text-decoration: none !important;
  color: #ff5a5f;
`;

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  padding: 20px;
  & a {
    color: inherit;
    text-decoration: none;
    font-size: 14px;
    & :hover {
      color: #484848;
    }
    &.active {
      text-decoration: underline;
    }
  }
`;

const StyledForm = styled.form`
  grid-area: search;
  display: flex;
  flex-direction: row;
  border: 1px solid #949393;
  border-radius: 30px;
  align-self: center;
`;

const StyledOther = styled.section`
  grid-area: andre;
  display: flex;
  flex-direction: row;
  margin: 20px 0px 0px 0px;
  justify-self: center;
  align-items: center;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 2px;
`;

const StyledButton = styled.button`
  border-radius: 20px;
  background-color: #ff5a5f;
  border: none !important;
`;

const StyledLabel = styled.label`
  font-weight: 700;
`;

const StyledIcon = styled.img``;

const StyledInput = styled.input`
  border-right: 1px solid #a7a7a7;
  border-top: none;
  border-bottom: none;
  border-left: none;
`;

const StyledA = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: #484848;
  margin: 3px 10px;
  font-weight: 700;
`;

const StyledUser = styled.section`
  margin: 0px 15px;
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  align-content: center;
  border: 1px solid #767676;
  border-radius: 22px;
`;

const StyledImg = styled.img`
  margin: 0px 3px;
  border-radius: 100%;
`;

const StyledIconUser = styled.img`
  align-self: center;
`;

const Navigation = () => (
  <StyledNav>
    <NavLink to="/" style={{ textDecoration: 'none' }}>
      <StyledLogoWrapper>
        <StyledLogo
          src="https://api.iconify.design/logos-airbnb.svg"
          alt="Airbnb logo"
          height="50px"
        />
        <StyledH1>airbnb</StyledH1>
      </StyledLogoWrapper>
    </NavLink>
    <StyledNavUl>
      {NavItems.map((navItem) => (
        <StyledLi key={navItem.name}>
          <NavLink exact to={navItem.href} activeClassName="active">
            {navItem.name}
          </NavLink>
        </StyledLi>
      ))}
    </StyledNavUl>
    <StyledForm>
      <StyledSection>
        <StyledLabel>Sted</StyledLabel>
        <StyledInput type="text" value="Hvor skal du?" readOnly />
      </StyledSection>

      <StyledSection>
        <StyledLabel>Innsjekking</StyledLabel>
        <StyledInput type="date" readOnly />
      </StyledSection>

      <StyledSection>
        <StyledLabel>Utsjekking</StyledLabel>
        <StyledInput type="date" readOnly />
      </StyledSection>

      <StyledSection>
        <StyledLabel>Gjester</StyledLabel>
        <StyledInput type="number" style={{ borderRight: 'none' }} readOnly />
      </StyledSection>

      <StyledButton type="button">
        <StyledIcon
          src="https://img.icons8.com/fluent-systems-filled/48/ffffff/search.png"
          alt="Søk"
          height="20px"
        />
      </StyledButton>
    </StyledForm>
    <StyledOther>
      <StyledA href="#">Bli vertskap</StyledA>
      <StyledIcon
        src="https://img.icons8.com/ios/50/000000/geography.png"
        alt="Språk og region"
        height="20px"
      />
      <StyledUser>
        <StyledIconUser
          src="https://img.icons8.com/material-sharp/24/000000/menu--v1.png"
          alt="Åpne bruker menu"
          height="16px"
        />
        <StyledImg
          src="/assets/izzy.jpg"
          alt="Bilde til bruker"
          height="30px"
        />
      </StyledUser>
    </StyledOther>
  </StyledNav>
);

export default Navigation;
