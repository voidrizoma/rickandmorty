import React from "react";
import styled from "styled-components";

export default function Buttons(props) {
  return <Button
  onClick={props.clickHandler} onChange={props.clickChange}>{props.text}</Button>;
}


const Button = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
border: 2px solid  #00ca93;
&:hover{
    background-color: #00ca93;
}
`;
