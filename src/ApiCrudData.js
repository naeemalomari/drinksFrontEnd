import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

export class ApiCrudData extends Component {
    render() {
        return (
            this.props.apiCrudData.map((obj, idx) => {
                console.log(obj);
                return(
                <div key={idx}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Title>{obj.strDrink}</Card.Title>
                        <Card.Img variant="top" src={obj.strDrinkThumb} alt="" />
                        <Card.Text>{obj.idDrink}</Card.Text>
                        <Button variant="success" onClick={e => this.props.deleteItem(obj.slug)}> DELETE ME FROM HERE </Button>
                        <Button variant="success" onClick={e => this.props.showUpdateForm(obj.strDrink,obj.idDrink)}> UPDATE ME FROM HERE </Button>
                    </Card>
                </div>
                )
            })
        )
    }
}

export default ApiCrudData
