import React from "react";

export default function SimpleParagraph(props) {
  return (<div style={{color:props.textColor,backgroundColor:props.backgroundColor,fontSize:props.fontSize}}>{props.textContent}</div>)
}
