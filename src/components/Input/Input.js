import React from 'react';
import './input.css';
import colors from '../../constants';

import {Container, Row, Col} from 'react-bootstrap';

const Input = props => {
    return(
        <Container fluid={true}>
            <Row>
                <Col xs={0} sm={4}></Col>
                <Col xs={12} sm={4} className="labelStyle" style={colors.textColor}>{props.label}</Col>
                <Col xs={0} sm={4}></Col>
            </Row>
            <Row>
                <Col xs={0} sm={4}></Col>
                <Col xs={12} sm={4}>
                    <input type="text" />
                </Col>
                <Col xs={0} sm={4}></Col>
            </Row>
        </Container>
    );
}

export default Input;