import React from 'react';
import '../css/preview.css';

import Header from '../components/header/Header';
import PrimaryButton from '../components/Button/Button';

const Preview = props => {
    return(
        <main className="">
            <Header title ="Step 2/2" /> 
            <section className="contentStyle previewPageImage">
                <h1 style={{"textDecoration":"underline"}}>{props.subject}</h1>
                <h3>{props.description}</h3>
                <p>By {props.speaker}</p>
                <h4>{props.minutes} minutes</h4>
                <PrimaryButton instructions="Click to Start" action={props.start} />                
            </section>           

            
        </main>
    );
}

export default Preview;