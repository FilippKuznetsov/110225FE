import React from "react";

function getRandonValue() {
    return Math.random()
}


function SimpleHeader() {
  return <div>
    <h2>Hello, im a simple Header h2</h2>
    {getRandonValue()}
  </div>
}

export  {SimpleHeader}