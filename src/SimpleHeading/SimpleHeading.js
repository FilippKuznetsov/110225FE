import React from "react";

export default function SimpleHeading() {



    const rand=Math.random
  return (<div>

{
    rand > 0.5 ? <h3>Hello, conditional rendering! This is h3</h3> : <h2>Hello, conditional rendering! this is h2</h2>
}


  </div>)
}
