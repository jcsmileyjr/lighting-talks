import React from 'react';

import Header from '../components/header/Header';
import Input from '../components/Input/Input';
import TextArea from '../components/Input/TextArea';
import PrimaryButton from '../components/Button/Button';

const Setup = props => {
    return(
        <main>
            <Header />
            <Input  action={props.getSubject} 
                    output={props.subject} 
                    label="Talk's Subject or Title" />
            <TextArea   action={props.getDescription}
                        output={props.description}
                        label="Talk's Description" />
            <Input  action={props.getSpeaker} 
                    output={props.speaker}
                    label="Author's Name" />
            <Input  action={props.getMinutes} 
                    output = {props.minutes}
                    label="Timer: Number of minutes" />
            <PrimaryButton action={props.preview} />
        </main>
    );
}

export default Setup;