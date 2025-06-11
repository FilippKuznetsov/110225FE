
import './App.css';
import SimpleParagraph from './components/SimpleParagraph/SimpleParagraph';
import DwarfCard from './DwarfCard/DwarfCard'
import dwarwes from './DwarfCard/dwarwes';
import SimpleHeader2 from './components/SimpleHeader2/SimpleHeader2';


function App() {



  return (
  <>
   <div className='myCssClass'>Hello World!</div>
  <SimpleParagraph textContent='This is a props Text Content' textColor='red' backgroundColor='pink' fontSize='40px' />
  
    
    {dwarwes.map((val)=>{
      return(
      <DwarfCard 
      key={val.name}
      name={val.name ? <SimpleParagraph textContent={val.name } /> :
                        <SimpleParagraph textContent='Default Brave Dwarf'/>} 
      nickname={ val.nickname}
      age={val.age}
      weapon={val.weapon}
      />
      )
    })}
    
   <SimpleHeader2 headerText='Hello im HEADER TEXT WITH PROPS' type='alert'/>
  </>
  )
}

export default App;
