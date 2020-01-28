import React from 'react';

import Header from '../components/header/Header';
import Input from '../components/Input/Input';
import TextArea from '../components/Input/TextArea';
import PrimaryButton from '../components/Button/Button';

const Setup = props => {
    return(
        <main>
            <Header />
            <Input label="Talk's Subject or Title" />
            <TextArea label="Talk's Description" />
            <Input label="Author's Name" />
            <Input label="Timer: Number of minutes" />
            <PrimaryButton />
        </main>
    );
}

export default Setup;