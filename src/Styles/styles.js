import styled from "styled-components";

export const Card = styled.div`    
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  background-color:#00ca93;
  margin: 2%;
  heigth:200px;
  padding: 4% 8%;
  border-radius: 5px;
  transition: 0.3s;
  &:hover{
    transform: translate(0, -10px);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const CardTitle = styled.h3`
  text-align: center;
  font-size:20px;
  padding:3% 0%;
`;

export const Span = styled.span`
  text-align: center;
  font-size:18px;
`;

export const Img = styled.img`
  border-radius:50%;
  border: 5px solid #ddd;
`;


export const Button = styled.button`
font-size: 15px;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
border: 2px solid  #00ca93;
transition: 1s;
&:hover{
    background-color: #00ca93;
}
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;


export const Wrapper = styled.div`
  height: 82vh;
  overflow: scroll;
  max-width: 1340px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size:30px;
  padding:3% 0%;
`;

export const Pages = styled.div`
  display: flex;
  font-size:18px;
  color: #00ca93;
  align-items: center;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1340px;
  margin: 0 auto;
  justify-content: space-evenly;
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
`;
