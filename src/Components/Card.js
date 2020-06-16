import React from "react";
import { Card,  CardTitle, Span, Img } from "../Styles/styles"

const card = ({ name, image, status, species, gender }) => {
  return (
    <Card>
      <Img alt="" src={image}/>
      <CardTitle>Name: {name}</CardTitle>
      <Span>Specie: {species}</Span>
      <Span>Status: {status}</Span>
      <Span>Gender: {gender}</Span>
    </Card>
  );
};

export default card;
