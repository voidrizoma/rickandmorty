import React, { useEffect, useState } from "react";
import { Title, ButtonContainer, Pagination, Pages, Wrapper } from "../Styles/styles"
import axios from "axios";
import List from "../Components/CardContainer";
import Button from "../Components/Buttons";


const API = "https://rickandmortyapi.com/api/";

function Container() {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([{}]);
  const [currentPage, setCurrentPage] = useState(1);

  const fecthData = () => {
    axios(`${API}/character/?page=${currentPage}`)
      .then((response) => {
        let sort = response.data.results.sort((a, b) =>
          a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
        );
        setData(sort);
        setInfo(response.data.info);
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
    <div>
    <Title>Rick and Morty</Title>
    </div>

      <ButtonContainer>
        <Pagination>
          <Button
            clickHandler={(event) => returnPage(event)}
            text="Previous Page"
          />
          <Pages>
            {currentPage} - {info.pages}
          </Pages>
          <Button clickHandler={(event) => nextPage(event)} text="Next Page" />
        </Pagination>
      </ButtonContainer>
      <Wrapper>
        <List data={data} />
      </Wrapper>
    </>
  );
}

export default Container;

