import React from 'react';
import { Link } from 'react-router-dom';
import { Column, Row } from '../styles/Styles';

const Footer = () => (
  <Row>
    <Column>
      <box1>
        <Link to="artikkelside">
          <h2>Artikkelside</h2>
        </Link>
      </box1>
      <box6 />
      <box2>
        <Link to="kontakt">
          <h2>Kontakt oss</h2>
        </Link>
      </box2>
      <box7 />
      <box3>
        <Link to="om-oss">
          <h2>Om oss</h2>
        </Link>
      </box3>
      <box8 />
      <box4>
        <Link to="#">
          <h2>Galleri</h2>
        </Link>
      </box4>
      <box9 />
      <box5>
        <h2>Sosiale Medier</h2>
        {/* <a class="sosiale_medier_1" href="https://fontawesome.com/icons?d=gallery&p=2&m=free"></a> */}
        <p>Her kommer alle sosiale medier m/logo som iconer</p>
      </box5>
      <box10>
        <i className="fab fa-facebook-f">
          <p>Facebook</p>
        </i>

        <p>Instagram</p>
        <p>Twitter</p>
      </box10>
    </Column>
  </Row>
);

export default Footer;
