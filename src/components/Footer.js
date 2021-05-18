import React from 'react';
import { Link } from 'react-router-dom';
import { Column, Row } from '../styles/Styles';

const Footer = () => (
  <Row>
    <Column>
      <Link to="/artikkelside">
        <h2>Artikkelside</h2>
      </Link>
    </Column>
    <Column>
      <Link to="kontakt">
        <h2>Kontakt oss</h2>
      </Link>
    </Column>
    <Column>
      <Link to="om-oss">
        <h2>Om oss</h2>
      </Link>
    </Column>
    <Column>
      <Link to="#">
        <h2>Galleri</h2>
      </Link>
    </Column>
    <Column>
      <h2>Sosiale Medier</h2>
      {/* <a class="sosiale_medier_1" href="https://fontawesome.com/icons?d=gallery&p=2&m=free"></a> */}
      <p>Her kommer alle sosiale medier m/logo som iconer</p>
      <i className="fab fa-facebook-f">
        <p>Facebook</p>
      </i>

      <p>Instagram</p>
      <p>Twitter</p>
    </Column>
  </Row>
);

export default Footer;
