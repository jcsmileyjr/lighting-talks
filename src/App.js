import React, {useState} from 'react';
import './App.css';

import Setup from './screens/Setup';//screen that allow user to input data
import LogIn from './screens/LogIn';//landing page featuring the name of the app
import Preview from './screens/Preview';//final page that allow user to preview data and start countdown timer

//HOC for the app. Contains the state and navigation for the screens within the app
const App = () => {
  const [subject, setSubject]  = useState("");//app's state that saves the title of the talk
  const [description, setDescription] = useState("");//app's state that saves the talk description
  const [speaker, setSpeaker] = useState("");//app's state that saves the speaker name
  const [minutes, setMinutes] = useState("");//app's state that saves the number of minutes for the speaker to speak
  const [navigation, setNavigation] = useState(1);//app's state that determine which screen the user is on

  const updateSubject = newSubject => { setSubject(newSubject);}//method to update the topic title in the Setup screen
  const updateDescription = description => {setDescription(description);}//method to update the topic's description in the Setup screen
  const updateSpeaker = speaker => {setSpeaker(speaker);}//method to update the speaker name in the Setup screen
  const updateMinutes = minutes => {setMinutes(minutes);}//method to update the number of minutes in the Setup screen
  const updateNavigation = (routeNumber) => {setNavigation(routeNumber)}//method to change the screens within the app

  return (
    <div className="App">
      {navigation === 1 && <LogIn goToSetup={updateNavigation} />}
      {navigation === 2 &&  
        <Setup  getSubject = {updateSubject}
                subject = {subject}
                getDescription = {updateDescription} 
                description = {description}
                getSpeaker = {updateSpeaker} 
                speaker = {speaker}
                getMinutes = {updateMinutes} 
                minutes = {minutes}
                preview = {updateNavigation}
      />
      } 
      {navigation === 3 && 
        <Preview 
                subject = {subject} 
                description = {description}
                speaker = {speaker} 
                minutes = {minutes}
                back = {updateNavigation}               
        />
      }
    </div>
  );
}

export default App;
