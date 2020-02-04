import React from 'react';
import '../css/setup.css';

import Input from '../components/Input/Input';//input component for user to input talk's details
import TextArea from '../components/Input/TextArea';//textarea component for user to input talk's description
import PrimaryButton from '../components/Button/Button';//button component to navigate to preview screen

//Screen that allows the user to input details about  the talk and navigate to the Preview screen
const Setup = props => {
    return(
        <main>
            <section>
                {/*Input component to get talk's subject */}
                <Input  action={props.getSubject} 
                        output={props.subject}
                        type="text" 
                        label="Type Subject" />

                {/*TextArea component to get talk's description */}
                <TextArea   action={props.getDescription}
                            output={props.description}
                            label="Type Description" />

                {/*Input component to get talk's speaker name */}
                <Input  action={props.getSpeaker} 
                        output={props.speaker}
                        type="text" 
                        label="Type Speaker Name" />

                {/*Input component to get the number of minutes of the talk */}
                <Input  action={props.getMinutes} 
                        output = {props.minutes}
                        type="number" 
                        label="Timer: Number of minutes" />                
            
                {/*Button to navigate to Preview screen */}
                <PrimaryButton instructions="Click to Continue" action={props.preview} />                                
            </section>

        </main>
    );
}

export default Setup;