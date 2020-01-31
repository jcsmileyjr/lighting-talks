import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/login.css';
import whiteBolt from '../assets/images/bolt_1f.png';

const LogIn = props => {
    const test = () => {props.goToSetup(2)};
    return(        
        <main className="landingPageImage">
            <Container style={{color:"white"}}>
                <Row style={{height:"40vh"}} className="centerText">
                    <Col className="title">
                        Lighting Talks
                    </Col>
                </Row>
                <Row style={{height:"35vh"}} className="centerText">
                    <Col className="subTitle">
                        For Tech Meetups
                    </Col>
                </Row>
                <Row style={{height:"15vh"}}>                    
                    <Col xs={12}>                    
                        <button className="buttonStyle">
                            <img className="loginButton" src={whiteBolt} alt="white lighting bolt" onClick={test} />
                        </button>
                        
                    </Col>
                    <Col xs={12}>Click to Continue</Col>
                </Row>
            </Container>               
        </main>        
    );
}

export default LogIn;