import React, {useState} from 'react';
import './App.css';

import Setup from './screens/Setup';
import LogIn from './screens/LogIn';

const App = () => {
  const [subject, setSubject]  = useState("Intro to React");
  const [description, setDescription] = useState("Hello World App");
  const [speaker, setSpeaker] = useState("Smiley");
  const [minutes, setMinutes] = useState(0);
  const [navigation, setNavigation] = useState(1);

  const updateSubject = newSubject => { setSubject(newSubject);}
  const updateDescription = description => {setDescription(description);}
  const updateSpeaker = speaker => {setSpeaker(speaker);}
  const updateMinutes = minutes => {setMinutes(minutes);}
  const updateNavigation = (routeNumber) => {setNavigation(routeNumber)}

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
    </div>
  );
}

export default App;
