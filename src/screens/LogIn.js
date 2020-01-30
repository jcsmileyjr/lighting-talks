import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/login.css';

const LogIn = props => {
    return(        
        <main className="landingPageImage">
            <Container style={{color:"white"}}>
                <Row style={{height:"50vh"}} className="centerText">
                    <Col className="title">
                        Lighting Talks
                    </Col>
                </Row>
                <Row style={{height:"40vh"}} className="centerText">
                    <Col className="subTitle">
                        For Tech Meetups
                    </Col>
                </Row>
                <Row style={{height:"10vh"}}>
                    <Col className="footerText">Click ANYWHERE to Continue</Col>
                </Row>
            </Container>               
        </main>        
    );
}

export default LogIn;