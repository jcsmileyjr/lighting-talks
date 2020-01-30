import React from 'react';
import './button.css';
import {Container, Row, Col, Button} from 'react-bootstrap';

const PrimaryButton = props => {
    return(
        <Container fluid={true} className="containerStyle">
            <Row>
                <Col xs={0} sm={4}></Col>
                <Col xs={12} sm={4}>
                    <Button onClick={props.action} variant="success" type="submit" block size="lg">Preview</Button>
                </Col>
                <Col xs={0} sm={4}></Col>
            </Row>
        </Container>
    );
}

export default PrimaryButton;