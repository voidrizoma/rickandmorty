import React from "react";
import Card from "./Card";
import styled from "styled-components";

const CardList = ({ data }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default CardList;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
