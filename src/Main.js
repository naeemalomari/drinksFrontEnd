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
            .get(`http://localhost:3050/drink`)
        // console.log(request)
        this.setState({
            apiData: request.data,
            showDataComponent: true
        })
    }
    favoriteItem = async (obj) => {
        console.log(obj);
        await axios.post(`http://localhost:3050/drink/favorite`, obj);
 
    }
    render() {
        return (
            <>
                {
                    this.state.showDataComponent &&
                    <ApiData
                        apiData={this.state.apiData}
                        favoriteItem={this.favoriteItem}
                    />
                }
            </>
        )
    }
}

export default Main;
