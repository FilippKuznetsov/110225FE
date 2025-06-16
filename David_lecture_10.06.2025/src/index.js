import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SimpleExample from './SimpleExample';
import SimpleHeading from './SimpleHeading/SimpleHeading';
import SimpleRandom from './RandomText';
import {SimpleHeader} from './components/SimpleHeader';
import Copywrite from './components/Copywrite';
import PersonalCard from './components/PersonalCard/PersonalCard';
import Advantages from './components/Advantages/Advantages';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
   
    <SimpleExample/>
    <SimpleHeading/>
   <SimpleRandom/>
   <SimpleHeader/>
   <Copywrite/>
   <PersonalCard/>
   <Advantages/>
    <App />
</>
);

