import React from 'react';
import './button.css';

import {Container, Row, Col, Button} from 'react-bootstrap';
import blueBolt from '../../assets/images/blue-bolt-2.png';

const PrimaryButton = props => {
    return(
        <Container fluid={true} className="containerStyle">
            <Row style={{height:"15vh"}}>                    
                    <Col xs={12}>                    
                        <button className="buttonStyle">
                            <img className="loginButton" src={blueBolt} alt="white lighting bolt" onClick={props.action} />
                        </button>                        
                    </Col>
                    <Col xs={12}>Click to Continue</Col>
                </Row>
        </Container>
    );
}

export default PrimaryButton;