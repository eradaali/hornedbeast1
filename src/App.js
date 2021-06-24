import React, { Component } from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectHornes from './SelectHornes';
import ModelHornedbeats from './ModelHornedbeats';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

export class App extends React.Component {
  render() {
    return (
      <div>
       <ModelHornedbeats/>
        <Header />
        <SelectHornes/>
        <Container>
        <Main  />
        </Container>
        <Footer />
        
      </div>
    )
  }
}



export default App;
