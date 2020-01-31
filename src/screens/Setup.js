import React from 'react';
import '../css/setup.css';

import Header from '../components/header/Header';
import Input from '../components/Input/Input';
import TextArea from '../components/Input/TextArea';
import PrimaryButton from '../components/Button/Button';
import colors from '../constants';

const Setup = props => {
    return(
        <main >
            <Header title="Step 1/2" />
            <section>
                <Input  action={props.getSubject} 
                        output={props.subject} 
                        label="Subject" />
                <TextArea   action={props.getDescription}
                            output={props.description}
                            label="Description" />
                <Input  action={props.getSpeaker} 
                        output={props.speaker}
                        label="Speaker Name" />
                <Input  action={props.getMinutes} 
                        output = {props.minutes}
                        label="Timer: Number of minutes" />
                <PrimaryButton action={props.preview} />
            </section>

        </main>
    );
}

export default Setup;