import React from 'react';
import './input.css';

import {Container, Row, Col} from 'react-bootstrap';

const TextArea = props => {

    const getValue = (event) => {
        props.action(event.target.value);
    }

    return(
        <Container fluid={true} className="containerStyle">
            <Row>
                <Col xs={0} sm={4} md={2} lg={4}></Col>
                <Col xs={12} sm={4} md={8} lg={4} className="textAreaStyle">
                    <textarea   onChange={getValue} 
                                value={props.output} 
                                rows="5" 
                                className="textStyle"
                                placeholder={props.label} ></textarea>
                </Col>
                <Col xs={0} sm={4} md={2} lg={4}></Col>
            </Row>
        </Container>
    );
}

export default TextArea;