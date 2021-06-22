import React, { Component } from 'react'
import hornsData from './hornsData'
import { Card, Button, Col } from 'react-bootstrap';
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
    render() {
        return (
            <div>
                <Col sm ={5}>
                    <Card style={{ width: '18rem' }}
                        bg='dark'
                        text='white'>
                        <Card.Img variant="top" src={this.props.imgVarible} />
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

        )
    }
}

export default Hornedbeasts
