import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "../Components/CardContainer";
import styled from "styled-components";
import Button from "../Components/Buttons";
const API = "https://rickandmortyapi.com/api/";

function Container() {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([{}]);
  const [status, setStatus] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fecthData = () => {
    axios(`${API}/character/?page=${currentPage}`)
      .then((response) => {
        let sort = response.data.results.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);
        setData(sort);
        setInfo(response.data.info);
        console.log(response.data.info.next);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    fecthData();
  }, [currentPage]);

  const nextPage = (event) => {
    event.preventDefault();
    if (currentPage <= info.pages) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(1);
    }
  };

  const returnPage = (event) => {
    event.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(info.pages);
    }
  };

  return !data.length ? (
    <h1>Loading</h1>
  ) : (
    <>
      <Title>Rick and Morty</Title>
      <ButtonContainer>
        <Pagination>
          <Button
            clickHandler={(event) => returnPage(event)}
            text="Previous Page"
          />
          <p>
            {currentPage}/{info.pages}
          </p>
          <Button clickHandler={(event) => nextPage(event)} text="Next Page" />
        </Pagination>
        <Filter>
          <Button text="Alive" value="alive" />
          <Button text="Dead" value="dead" />
          <Button text="Unknown" value="unknown" />
        </Filter>
      </ButtonContainer>

      <Wrapper>
        <List data={data} />
      </Wrapper>
    </>
  );
}

export default Container;

const Wrapper = styled.div`
  height: 80vh;
  overflow: scroll;
  max-width:1340px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
`;

const ButtonContainer = styled.div`
display:flex;
flex-direction:row;
max-width:1340px;
margin: 0 auto;
justify-content: space-evenly;
`;

const Pagination = styled.div`
display:flex;
flex-direction:row;
`;

const Filter = styled.div`
display:flex;
flex-direction:row;
`;

