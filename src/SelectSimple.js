import React, { Component } from "react";
import { Form,Button } from "react-bootstrap";
import hornsData from './hornsData'
class SelectSimple extends Component {
    constructor() {
        super();
        this.myRef = React.createRef();
    }
  onChangeColor(event) {
    console.log(event.target.value);
    this.state=event.target.value
  }
//   onButtonClick() {
//     console.log(this.myRef.current.value);
// }
handelmodal(){
    // debugger
   this.props.handleCallback(this.state)
    
}

  render() {
    return (
      <div>
        <hr />
        Select any Horns :
        <Form.Control
          as="select"
          custom
          onChange={this.onChangeColor.bind(this)}
        >
             <option value="nan"></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
          
        </Form.Control>
        <Button onClick={()=>{this.handelmodal()}} type="submit">Submit form</Button>
      </div>
    );
  }
}

export default SelectSimple;