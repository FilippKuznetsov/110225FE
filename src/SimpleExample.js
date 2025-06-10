import React from "react";

export default function SimpleExample() {


const rand=Math.random()


  return (<div>
<p>This will be rerendered in all Cases!</p>

{
    rand > 0.5 ? <p>Rand less then 0,5</p> : <h3>Rand is greater like 0,5</h3>
}

  </div>)
}
