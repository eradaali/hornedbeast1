import React, { Component } from 'react'
import Hornedbeasts from './Hornedbeasts'
// import hornsData from './hornsData'
import { Row} from 'react-bootstrap';
// import { Button } from 'reactstrap';
class Main extends Component {
   constructor(props){
       
       super(props);
       debugger
   }
    
    render() {
        this.x=this.props.dataParentToChild

        // console.log(typeof this.state.galary);
        // console.log(this.state)

        return (

            <Row>{
                this.x.map(i => {

                return (
                //    this.state==-1?
                    

                        <Hornedbeasts
                            imgVarible={i.image_url}
                            title={i.title}
                            description={i.description}
                            horns={i.horns} 
                            keyword={i.keyword}
                           

                        />
                        // : <Hornedbeasts
                        //     imgVarible={i.image_url}
                        //     title={i.title}
                        //     description={i.description}
                        //     horns={i.horns&&this.state==i.horns} 
                        //     keyword={i.keyword}
                        //     handleCallback={this.handleCallback}

                        

                        // />
                        

                 
             ) }) }
             </Row > )
        
    }
}
export default Main