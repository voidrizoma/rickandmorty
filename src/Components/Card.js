import React from "react";
import styled from "styled-components";

const card = ({ name, image, status, species, gender }) => {
  return (
    <Card>
      <img alt="" src={image}/>
      <h2>Nombre: {name}</h2>
      <p>Especie: {species}</p>
      <p>Estado: {status}</p>
      <p>Género: {gender}</p>
    </Card>
  );
};

export default card;

const Card = styled.div`    
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  background-color:#00ca93;
  margin: 2%;
  width:100%;
  heigth:200px;
  padding: 4% 8%;
  border-radius: 3px;
  @media (min-width: 769px) {
    width:25%;
  }
`;
