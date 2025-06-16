import "./App.css";
import SimpleParagraph from "./components/SimpleParagraph/SimpleParagraph";
import DwarfCard from "./DwarfCard/DwarfCard";
import {
  dwarwes,
  middleEarthAreas,
  programe,
  detailed,
} from "./DwarfCard/dwarwes.js";
import SimpleHeader2 from "./components/SimpleHeader2/SimpleHeader2";
import DwarfAreaCard from "./DwarfCard/DwarfAreaCard";
import DwarfsList from "./components/DwarfsList/DwarfsList.jsx";



function App() {
  return (
    <div>
      <SimpleHeader2
        headerText="Hello im HEADER TEXT WITH PROPS"
        type="alert"
        customStyles={{color:'blue',fontSize:'20px'}}
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
            dwarfData={{
            key:val.name,
            name:val.name,
            nickname: val.nickname,
            age: val.age,
            weapon: val.weapon
            }}
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
        <DwarfsList dwarwes={dwarwes}/>
      </div>
    </div>
  );
}

export default App;
