import React, { Component } from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectHornes from './SelectHornes';
import ModelHornedbeats from './ModelHornedbeats';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import SelectSimple from './SelectSimple';
import hornsData from './hornsData'


export class App extends React.Component {
  myArray = [];
  constructor() {
    super()
    this.myArray=hornsData;
  }
  generateNewList = (xx) => {
    this.myArray = [];
    for (let i = 0; i < hornsData.length; i++) {
      if (hornsData[i].horns == xx) {
        this.myArray.push(hornsData[i])
      }

    }
    this.forceUpdate();
  }

  handleCallback(xx) {
    this.generateNewList(xx);

  }

  render() {
    return (
      <div>
        <ModelHornedbeats />
        <Header />
        <SelectSimple handleCallback={this.handleCallback} generateNewList={this.generateNewList} myArray={this.myArray} />
        {/* <SelectHornes /> */}
        <Container>
          <Main dataParentToChild={this.myArray} />
        </Container>
        <Footer />

      </div>
    )
  }
}



export default App;
