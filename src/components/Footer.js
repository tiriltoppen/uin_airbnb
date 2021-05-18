import React from "react";
import { Link } from "react-router-dom";
import { Column, Container, Row } from "../styles/Styles";

const Footer = () => (
     
            <Row>
            <Column> 
                <h2>Artikkelside</h2>
                    <Link to="/artikkelside"><p>Artikkelside</p></Link>
                </Column>
                <Column>  
                <h2>Kontakt oss</h2>
                    <Link to="kontakt"><p>Kontakt oss</p></Link>
                </Column>
                <Column>
                    <h2>Om oss</h2>
                    <Link to="#"><p>Om oss</p></Link>
                    <p>Her kommer det linkt til om oss</p>
                </Column>
                <Column>
             
                <h2>Galleri</h2>
                <Link to="#"><p>Galleri</p></Link>
                    <p>her kommer det linkt til galleriet</p>
                </Column>
                <Column>
                <h2>Sosiale Medier</h2>  
                {/* <a class="sosiale_medier_1" href="https://fontawesome.com/icons?d=gallery&p=2&m=free"></a>*/}
                    <p>Her kommer alle sosiale medier m/logo som iconer</p>
                    <i class="fab fa-facebook-f"><p>Facebook</p></i> 

                    <p>Instagram</p>
                    <p>Twitter</p>

                </Column>
            </Row>
    
    );

export default Footer;