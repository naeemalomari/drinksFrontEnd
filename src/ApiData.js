import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

class ApiData extends Component {
    render() {
        return (
            this.props.apiData.map((obj, idx) => {
                return (
                    <div key={idx}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Title>{obj.strDrink}</Card.Title>
                            <Card.Img variant="top" src={obj.strDrinkThumb} alt="" />
                            <Card.Text>{obj.idDrink}</Card.Text>
                            <Button variant="success">ADD TO FAVORITE </Button>
                        </Card>
                    </div>
                )
            })
        )
    }
}

export default ApiData
