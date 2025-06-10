import React from "react";

export default function RandomText() {

const rand=Math.random()


  return (
  <div>

    <p>This Text would be always</p>
    { rand< 0.5 && <p>This Text is only if rand is less 0,5</p> }
  </div>
  
  
  )
}
