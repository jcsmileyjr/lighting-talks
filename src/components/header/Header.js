import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import colors from '../../constants.js';
import './header.css';

const Header = props => {
    return(
        <Container fluid={true} style={colors.headerColor}>
            <Row className="primaryTitleStyle"><Col>Lighting Talks</Col></Row>
            <Row className="secondaryTitleStyle"><Col>For Tech Meetups</Col></Row>
        </Container>
    );
}

export default Header;

