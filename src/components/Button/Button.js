import React from 'react';
import {Button} from 'react-bootstrap';
import './button.css';

import {Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const PrimaryButton = props => {
    const goToPreview =() => {
        props.action(3);
    }
    return(
        <Container fluid={true} className="containerStyle">
            <Row style={{height:"15vh"}}>                    
                    <Col xs={12}> 
                        <Button onClick={goToPreview} variant="primary" type="button" block>
                        <i className="iconStyle"><FontAwesomeIcon icon={faBolt} /></i>
                            {props.instructions}
                        </Button>                     
                    </Col>
            </Row>
        </Container>
    );
}

export default PrimaryButton;