import React from "react";
import "./input.css";

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const Input = props => {
  const getValue = event => {
    props.action(event.target.value);
  };

  return (
    <Container fluid={true} className="containerStyle">
      <Row>
        <Col xs={0} sm={4} md={2} lg={4}></Col>
        <Col xs={12} sm={4} md={8} lg={4}>
          <input
            onChange={getValue}
            value={props.output}
            type={props.type}
            className="textStyle"
            placeholder={props.label}
          />
          {props.output.length >= 1 &&
            <i className="iconStyle"><FontAwesomeIcon icon={faBolt} /></i>          
          }

        </Col>
        <Col xs={0} sm={4} md={2} lg={4}></Col>
      </Row>
    </Container>
  );
};

export default Input;
