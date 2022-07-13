import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

//IMPORTING COMPONENTS
import Header from './Components/Header';
import About from './Components/About';
import Training from './Components/Training';
import Team from './Components/Team';

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <About />
        <Training />
        <Team />
      </div>
    )
  }
}
