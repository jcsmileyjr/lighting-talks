import React, {useState} from 'react';
import './App.css';

import Setup from './screens/Setup';
import LogIn from './screens/LogIn';

const App = () => {
  const [subject, setSubject]  = useState("Intro to React");
  const [description, setDescription] = useState("Hello World App");
  const [speaker, setSpeaker] = useState("Smiley");
  const [minutes, setMinutes] = useState(0);
  const [setupMode, setSetupMode] = useState(false);
  const [navigation, setNavigation] = useState(1);

  const updateSubject = newSubject => { setSubject(newSubject);}
  const updateDescription = description => {setDescription(description);}
  const updateSpeaker = speaker => {setSpeaker(speaker);}
  const updateMinutes = minutes => {setMinutes(minutes);}
  const goToPreview = () => {setSetupMode(true);}

  return (
    <div className="App">
      {navigation === 1 && <LogIn />}
      {navigation === 2 &&  
      <Setup  getSubject = {updateSubject}
              subject = {subject}
              getDescription = {updateDescription} 
              description = {description}
              getSpeaker = {updateSpeaker} 
              speaker = {speaker}
              getMinutes = {updateMinutes} 
              minutes = {minutes}
              preview = {goToPreview}
      />
      }
      {
        setupMode &&
          <div><p>It don't work</p></div>
      }  
    </div>
  );
}

export default App;
