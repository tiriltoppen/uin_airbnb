import styled from 'styled-components/macro';

const StyledArticle = styled.article`
  display: block;
  margin: 0;
  with: 100%;
  height: auto;
  z-index: 3;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  border-radius: 0;
  position: relative;
`;

const StyleCardContent = styled.section`
  position: absolute;
  buttom: 0px;
  left: 0;
  right: 0;
  padding: 1rem;
`;

const StyledCardH2 = styled.h2`
  font-size: 1.5 rem;
  font-weight: 900;
`;

const StyledCardImage = styled.img`
  max-width: 100px;
`;

const StyledCardLink = styled.a`
  display: inline-block;
  text-aline: center;
  padding: 0.6rem 0.9rem;
  border: 1px solid;
  text-trandsform: none;
  font-weight: 900;
  padding: 0.5rem 1rem;
  min:width: 54px;
  text-transform: uppercase;
  text-decoration: none;
  font-style: italic;
  margine-top: 1.5rem;
  &:hover {
    background-color: #fff;
    color: #333;
  }
`;

const StyledCardText = styled.p`
  font-size: 1.2rem;
  line-height: 2.4rem;
`;

const Card = ({ img, title, text, link }) => (
  <StyledArticle>
      <StyledCardImage src={img?.asset?.url} alt={img?.alt} />
      <StyledCardH2>{title}</StyledCardH2>
      <StyledCardText>{text}</StyledCardText> 
      <StyleCardContent>
      <StyledCardLink href="">Link</StyledCardLink>
    </StyleCardContent>
  </StyledArticle>
);
export default Card;
