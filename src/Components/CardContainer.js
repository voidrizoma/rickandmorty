import React from "react";
import Card from "./Card";
import { CardWrapper } from "../Styles/styles"

const CardList = ({ data }) => {
  return (
    <CardWrapper>
      {data.map((item, i) => {
        return (
          <Card
            key={i}
            image={data[i].image}
            name={data[i].name}
            species={data[i].species}
            status={data[i].status}
            gender={data[i].gender}
          />
        );
      })}
    </CardWrapper>
  );
};

export default CardList;
