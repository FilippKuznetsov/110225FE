import React from "react";
import DwarfCard from "../../DwarfCard/DwarfCard";
import { dwarwes } from "../../DwarfCard/dwarwes";

export default function DwarfsList({listHeaderText='Dwarwes list',dwarwes=[],describeClickHandler}) {


return (

    <>
      <h4>{listHeaderText}</h4>
      {
        dwarwes && dwarwes.length > 0 ?
        <div >
          { dwarwes.map( el => <DwarfCard key={el.name} dwarfData={el}describeClickHandler={describeClickHandler} />)}
        </div> :
        <h4>Empty dwarwes list!</h4>
      }
    </>


)



}
