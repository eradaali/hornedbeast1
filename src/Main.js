
import React, { Component } from 'react'
import Hornedbeasts from './Hornedbeasts'
import hornsData from './hornsData'
import { Row} from 'react-bootstrap';
// import { Button } from 'reactstrap';
class Main extends Component {
   
    render() {
        // console.log(typeof this.state.galary);
        // console.log(this.state)
        return (
            <Row>{
            hornsData.map(i => {

                return (
                   
                    

                        <Hornedbeasts
                            imgVarible={i.image_url}
                            title={i.title}
                            description={i.description}
                            horns={i.horns} 
                            keyword={i.keyword}

                        />

                 
             ) }) }
             </Row > )
        
    }
}
export default Main