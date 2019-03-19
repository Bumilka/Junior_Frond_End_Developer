import React, { Component } from 'react';
import Accordion from './Accordion'
import image from './person.jpg';
import {cvImage, personNameText, personPositionText,personButton, flexContainer, lineSection} from './person.style';

const experience = [{
  title: 'Mid - Front-End-Developer Developer',
  years: '2018',
  content: 'Name Company',
},{
  title: 'Junior - Front-End-Developer Developer',
  years: '2017-2018',
  content: 'Name Company',
},
{
  title: 'Staż - Front-End-Developer Developer',
  years: '2012-2013',
  content: 'Name Company',
}
]
const education = [{
  title: 'Studia - Podyplomowe',
  years: '2017-2019',
  content: 'Opis Studiów poduplomowych',
},{
  title: 'Studia - Magister',
  years: '2014-2017',
  years: 'Opis Studiów Magisterskich',
},
{
  title: 'Studia - Licencjat',
  years: '2011-2014',
  content: 'Opis studiów licencjackich',
}
]

class App extends Component {
  render() {
    return (
      <div>
        <div style = {flexContainer}>
          <img style={cvImage} src={image} alt='Logo'/>
          <div>
            <div style={personNameText}> Jan Kowalski </div>
            <div style={personPositionText}> JAVA SCRIPT DEVELOPER</div>
          </div>
        </div>

        <div style = {flexContainer}>
          <button style={personButton} onClick={personButton}></button>
          <div>example.com</div>
          <button style={personButton} onClick={personButton}></button>
          <div> example@email.com</div>
        </div>
        <hr style={lineSection}/>
        <div style = {flexContainer}>
          <Accordion title="DOŚWIADCZENIE >" data={experience}/>
        </div>
        <hr style={lineSection}/>
        <div style = {flexContainer}>
          <Accordion title="EDUKACJA >" data={education}/>
        </div>
        <hr style={lineSection}/>
      </div>
    );
  }
}

export default App;
