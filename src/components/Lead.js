import styled from 'styled-components/macro';

const StyleLead = styled.p`
  text-aline: center;
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 300;
  margin-bottom: 2rem;
`;

const Lead = ({ lead }) => <StyleLead>{lead}</StyleLead>;

export default Lead;
