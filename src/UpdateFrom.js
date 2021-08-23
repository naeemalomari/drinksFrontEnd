import React, { Component } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
export class UpdateFrom extends Component {
    render() {
        console.log(this.props.strDrink)
        return (
            <div>
                <Form onSubmit={this.props.updateItem}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2" type="text"> change your drink </Form.Label>
                        <Col sm="10">
                            <Form.Control name="input" type="text" defaultValue={this.props.strDrink}onChange={this.props.updateDrinkState} />
                        </Col>
                        <Button type="submit" value="updateData">update here </Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default UpdateFrom;

