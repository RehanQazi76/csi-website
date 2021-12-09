import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./Footerstyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "whitesmoke", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Computer Society of Pune, VIT chapter
      </h1>
      <Container>
        <Row>
          <Column>
            
            <FooterLink href="#">About Us</FooterLink>
            
          </Column>
          <Column>
            
            <FooterLink href="#">Services</FooterLink>
            
          </Column>
          <Column>
            
            <FooterLink href="#">Contact Us</FooterLink>
            
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            </Column>
        </Row>
        <Row>
          <Column>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            </Column>
            <Column>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            </Column>
            <Column>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            </Column>
            <Column>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
          </Row>
      </Container>
    </Box>
  );
};
export default Footer;