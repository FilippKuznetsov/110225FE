import "./App.css";
import SimpleParagraph from "./components/SimpleParagraph/SimpleParagraph";
import DwarfCard from "./DwarfCard/DwarfCard";
import {
  dwarwes as originalDwarwesArray,
  middleEarthAreas,
  programe,
  detailed,
} from "./DwarfCard/dwarwes.js";
import SimpleHeader2 from "./components/SimpleHeader2/SimpleHeader2";
import DwarfAreaCard from "./DwarfCard/DwarfAreaCard";
import DwarfsList from "./components/DwarfsList/DwarfsList.jsx";
import { useState } from "react";
import DwarfForm from "./DwarfCard/DwarfForm/DwarfForm.jsx";



function App() {


const clickHandler=()=>{
        console.log('This Header was klicked')  
}


const describeClickHandler=()=>{
  console.log('Clikced on Describe Button');
  
}

const[dwarwes,setDwarwes]=useState(originalDwarwesArray)


const addNewDwarf=(newDwarw)=>{
  setDwarwes((oldDwarwArray)=>[...oldDwarwArray,newDwarw])
}

  return (
    <div>
      <SimpleHeader2
        headerText="Hello im HEADER TEXT WITH PROPS"
        type="alert"
        customStyles={{color:'blue',fontSize:'20px'}}
        clickHandler={clickHandler}
      />
      <div className="myCssClass">Hello World!</div>
      <SimpleParagraph
        textContent="This is a props Text Content"
        textColor="red"
        backgroundColor="pink"
        fontSize="40px"
      />

      {dwarwes.map((val) => {
        return (
          <DwarfCard
          key={val.name}
            dwarfData={{
            name:val.name,
            nickname: val.nickname,
            age: val.age,
            weapon: val.weapon
           
            }}
             describeClickHandler={describeClickHandler}
          />
          
        );
      })}

      <div>
        {middleEarthAreas.map((location) => {
          return <DwarfAreaCard area={location} />;
        })}
      </div>

      <div>
        <ul>
          {programe.map((prog) => {
            return <li key={prog}>{prog}</li>;
          })}
        </ul>
      </div>
      <div>
        {detailed.map((el) => {
          return (
            <div key={el.name}>
              <h2>
                {el.name}
                {el.nickname && el.nickname}
              </h2>
              <p>{el.subject}</p>
            </div>
          );
        })}
      </div>



      <div>Dwarwes List: 
        <DwarfsList dwarwes={  dwarwes} describeClickHandler={describeClickHandler}/>
      </div>
      <DwarfForm addNewDwarf={addNewDwarf}/>
    </div>
  );
}

export default App;
