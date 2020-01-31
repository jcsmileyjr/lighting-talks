import React from 'react';
import '../css/preview.css';

import Header from '../components/header/Header';
import PrimaryButton from '../components/Button/Button';

const Preview = props => {
    return(
        <main className="">
            <Header title ="Step 2/2" /> 
            <section className="contentStyle previewPageImage">
                <h1>{props.subject}</h1>
                <p>{props.description}</p>
                <h3>By {props.speaker}</h3>
                <h4>{props.minutex} minutes</h4>
                <PrimaryButton action={props.start} />                
            </section>           

            
        </main>
    );
}

export default Preview;