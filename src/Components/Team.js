import React, { Component } from 'react';
import styled from 'styled-components';

//IMPORTING ASSETS
import mySearchIcon from "../Assets/SearchIcon.svg"

const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 72px;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  text-align: left;
  color: #00145D;
  width: 80vw;
  height: 15vh;
`;

const SearchContainer = styled.div`
    width: 80vw;
    height: 10vh;
    display: flex;
    align-items: center;
    padding-left: 72px;
    background-color: #0F2260;
`;

const Search = styled.label`
    width: 20vw;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #FFFFFF;
    border-radius: 4px;
`;

const Input = styled.input`
    width: 15vw;
    height: 5vh;
    border: none;
    background-color: transparent;

    ::placeholder{
        color: #BCE0FD;
    }
`;

const SearchBtn = styled.button`
    width: 4vw;
    height: 5vh;
    border: none;
    display: flex;
    align-items: center:
    justify-content: center;
    background-color: transparent;

    :hover{
        cursor:pointer;
    }
`;

const SearchIcon = styled.img`
    width:5vw;
    height: 5vh;
    object-fit: contain;
`;

export default class Team extends Component {
  render() {
    return (
      <Container>
        <Subtitle>Equipe</Subtitle>
        <SearchContainer>
            <Search><Input placeholder='Pesquisar...' /> <SearchBtn><SearchIcon src={mySearchIcon} /></SearchBtn></Search>
        </SearchContainer>
      </Container>
    )
  }
}
