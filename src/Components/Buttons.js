import React from "react";
import { Button } from "../Styles/styles"

export default function Buttons(props) {
  return <Button
  onClick={props.clickHandler} onChange={props.clickChange} value={props.value}>{props.text}</Button>;
}

