import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/login.css';
import whiteBolt from '../assets/images/bolt_1f.png';

//Landing page screen that leads to the Setup screen
const LogIn = props => {
    const test = () => {props.goToSetup(2)};//function that navigate user to the Setup Screen
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
                    A tool for presenting details about a talk and a countdown timer at a tech meetup.
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