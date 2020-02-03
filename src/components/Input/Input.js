import React from "react";
import "./input.css";

import { Container, Row, Col} from "react-bootstrap";

const Input = props => {
  const getValue = event => {
    props.action(event.target.value);
  };

  return (
    <Container fluid={true} className="containerStyle">
      <Row>
        <Col xs={0} sm={4} md={2} lg={4}></Col>
        <Col xs={12} sm={4} md={8} lg={4} className="iconInInput">
          <input 
            onChange={getValue}
            value={props.output}
            type={props.type}
            className="textStyle"
            placeholder={props.label}
          />    
        </Col>
        <Col xs={0} sm={4} md={2} lg={4}></Col>
      </Row>
    </Container>
  );
};

export default Input;
