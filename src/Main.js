
import React, { Component } from 'react'
import Hornedbeasts from './Hornedbeasts'
import hornsData from './hornsData'
// import { Button } from 'reactstrap';
class Main extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         galary: 0
    //     }
    // }

    // const printImages=()
    render() {
        // console.log(typeof this.state.galary);
        // console.log(this.state)
        return (
            hornsData.map(i => {

                return (
                    <div>
                        {/* <hornsData /> */}
                        {/* <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <h2>{this.props.keyword}</h2>
                <h3>{this.props.horns}</h3> */}
                        {/* <img src={this.props.image_url} style={{width: 250}} /> */}
                        {/* <button onClick={this.react}></button> */}

                        <Hornedbeasts
                            imgVarible={i.image_url}
                            title={i.title}
                            description={i.description}
                            horns={i.horns} 
                            keyword={i.keyword}

                        />

                    </div >
             ) })
        )
    }
}
export default Main