import React, { Component } from 'react'
import hornsData from './hornsData'
 class Hornedbeasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galary: 0
        }
    }
    react = () => {
        this.setState(
            {
                galary: this.state.galary + 1
            })
    }
    render() {
        return (
            <div>
           
                   
                   <p>{this.props.title}</p>
                   <p>{this.props.description}</p>
                   <p>{this.props.keyword}</p>
                   <p>{this.props.horns}</p>
                   <img src={this.props.imgVarible} style={{ width: 300 }} />
                   <h1>{this.state.galary}</h1>
                   <button onClick={this.react} style={{ borderRadius: 8 }}>React</button>
        
             
            

            </div>
        )
    }
}

export default Hornedbeasts
