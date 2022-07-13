import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  width: 60vw;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ListItem = styled.li`
  text-align: center;
  color: #FFFFFF;
  line-height: 4vh;
  width: 8vw;
  height: 5vh;
  margin-right: 10px;
  background-color: transparent;

  :hover{
    border: 1.5px solid #FFAC2D;
    border-radius: 2.5vh;
    cursor: pointer;
  }
`;

export default function Nav() {
    return (
        <List>
            <ListItem>Sobre</ListItem>
            <ListItem>Formação</ListItem>
            <ListItem>Equipe</ListItem>
            <ListItem>Eventos</ListItem>
            <ListItem>Contato</ListItem>
        </List>
    )
}
