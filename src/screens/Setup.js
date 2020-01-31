import React from 'react';
import '../css/setup.css';

import Input from '../components/Input/Input';
import TextArea from '../components/Input/TextArea';
import PrimaryButton from '../components/Button/Button';

const Setup = props => {
    return(
        <main >
            <section>
            <Input  action={props.getSubject} 
                    output={props.subject} 
                    label="Type Subject" />
            
                <TextArea   action={props.getDescription}
                        output={props.description}
                        label="Type Description" />
            
                <Input  action={props.getSpeaker} 
                output={props.speaker}
                label="Type Speaker Name" />
            
                <Input  action={props.getMinutes} 
                output = {props.minutes}
                label="Timer: Number of minutes" />                
            
                <PrimaryButton instructions="Click to Continue" action={props.preview} />
                                
            </section>

        </main>
    );
}

export default Setup;