import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Header from '../components/header/Header';
import Input from '../components/Input/Input';
import TextArea from '../components/Input/TextArea';

const Setup = props => {
    return(
        <main>
            <Header />
            <Input label="Talk's Subject or Title" />
            <TextArea label="Talk's Description" />
            <Input label="Author's Name" />
            <Input label="Timer: Number of minutes" />
        </main>
    );
}

export default Setup;