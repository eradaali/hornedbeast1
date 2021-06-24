import React, { Component } from 'react'
import hornsData from './hornsData'
import { Card, Button, Col,Modal } from 'react-bootstrap';
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
    disLike = () => {
        this.setState(
            {
                galary: this.state.galary - 1
            })
    }
    handelmodal(){
        this.setState({show:!this.state.show})
    }
    render() {
        return (

<>
            <Modal show={this.state.show} onHide={()=>this.handelmodal()}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>{this.props.title}</Modal.Body>
            <Modal.Body><Card.Img  onClick={()=>{this.handelmodal()}} variant="top" src={this.props.imgVarible} /></Modal.Body>
            <Modal.Body>{this.props.description}</Modal.Body>
            <Modal.Body>{this.props.keyword}</Modal.Body>
            <Modal.Body>{this.state.galary}</Modal.Body>
            <Modal.Footer><Button onClick={()=>{this.handelmodal()}}>close Modal</Button></Modal.Footer>
        </Modal>
            
            <div>
                 
                <Col sm ={5}>
                    <Card style={{ width: '18rem' }}
                        bg='dark'
                        text='white'>
                        <Card.Img  onClick={()=>{this.handelmodal()}} variant="top" src={this.props.imgVarible} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>{this.props.description}</Card.Text>
                            <Card.Text>{this.props.keyword}</Card.Text>
                            <Card.Text>{this.state.galary}</Card.Text>
                            <Button variant="primary" onClick={this.react}>❤️</Button>
                            <Button variant="primary" onClick={this.disLike}>💔</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
</>
        )
    }
}

export default Hornedbeasts