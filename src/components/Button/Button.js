import React from 'react';
import {Button} from 'react-bootstrap';
import './button.css';

import {Container, Row, Col} from 'react-bootstrap';

const PrimaryButton = props => {
    const goToPreview =() => {
        props.action(3);
    }
    return(
        <Container fluid={true} className="containerStyle">
            <Row style={{height:"15vh"}}>                    
                    <Col xs={12}> 
                        <Button onClick={goToPreview} variant="primary" type="button" >{props.instructions}</Button>                     
                    </Col>
                </Row>
        </Container>
    );
}

export default PrimaryButton;