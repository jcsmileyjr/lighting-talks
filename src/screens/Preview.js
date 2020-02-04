import React, {useState, useEffect} from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';
import '../css/preview.css';

import PrimaryButton from '../components/Button/Button';//Button to start the countdown timer
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

//Screen to give the user a preview of the details inputted and then later start the countdown timer
const Preview = props => { 
    const [seconds, setSeconds] = useState(0);//current number of seconds to be shown on the screen
    const [min, setMin] = useState(props.minutes);//current number of minutes to be shown on the screen
    const [start, setStart] = useState(false);//starts the countdown timer and show different elements on the screen (ex. back button)

    //if the user press the start button, every second the timer will countdown
    useEffect(() => {
        let interval = null;
        if(start){
            interval = setInterval(()=>{timer()},1000);
        }else if(!start){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    });

    //timer function that update the seconds and min state that is shown in the UI
    let timer = () => {
        if(seconds <= 0){
            if(min <= 1){
                setStart(!start);
                return;
            }
            setMin((min ) => min - 1);
            setSeconds(60);
            
        }else{
            setSeconds(seconds -1);
        }
    }

    const begin = ()=> {setSeconds(60); setStart(true);};//function to start the timer
    const goBack = () => {props.back(2)}//function to go back to the Preview screen

    return(
        <main className="">
            <section className="contentStyle previewPageImage">
                {/*The back button */}
                {!start &&
                    <Container className="rightAlignIcon">
                        <Row>
                            <Col xs={0} sm={4} md={2} lg={4}></Col>
                            <Col xs={12} sm={4} md={8} lg={4}>
                                <Button variant="link" onClick={goBack}>
                                    <i className="iconStyle"><FontAwesomeIcon icon={faArrowLeft} /> Back</i>
                                </Button>
                                
                            </Col>
                            <Col xs={0} sm={4} md={2} lg={4}></Col>
                        </Row>
                        
                    </Container>
                }
                <h1 style={{"textDecoration":"underline"}}>{props.subject}</h1>
                <h3>{props.description}</h3>
                <p>By {props.speaker}</p>
                {/*If the start button is press, then the timer is shown and started */}
                {
                    start?<p className="timer">{min-1} minutes : {seconds} seconds</p>:<h4>{props.minutes} minutes</h4>
                }
                {
                    start?<PrimaryButton instructions="Click to Restart" action={begin} />:<PrimaryButton instructions="Click to Start" action={begin} />
                }                
            </section>           

            
        </main>
    );
}

export default Preview;