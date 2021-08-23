import axios from 'axios';
import React, { Component } from 'react'
import ApiData from './ApiData';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: [],
            showDataComponent: false,
        }
    }
    componentDidMount = async () => {
        const request = await axios
        .get(`http://localhost:6000/drink`)
        this.setState({
            apiData: request.data,
            showDataComponent: true
        })
    }

    render() {
        return (
            <>
                
                   
                    <ApiData
                        apiData={this.state.apiData}
                    />
                
            </>
        )
    }
}

export default Main;
