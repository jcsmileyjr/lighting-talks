import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Header from '../components/header/Header';
import Input from '../components/Input/Input';

const Setup = props => {
    return(
        <Container fluid={true}>
            <Header />
            <Input label="Subject or Title" />
        </Container>
    );
}

export default Setup;