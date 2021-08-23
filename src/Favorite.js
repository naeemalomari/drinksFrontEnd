import React, { Component } from 'react'
import axios from 'axios'
import ApiCrudData from './ApiCrudData'
import UpdateForm from './UpdateFrom'
export class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiCrudData: [],
            showCrudDataComponent: false,
            showUpdateForm: false,
            strDrink: "",
            strDrinkThumb: "",
            slugName: '',
            idDrink: ''
        }
    }
    componentDidMount = async () => {
        const request = await axios
            .get(`http://localhost:3050/drink/favorite`);
        this.setState({
            apiCrudData: request.data,
            showCrudDataComponent: true,
        })
    }

    deleteItem = async (slug) => {

        await axios.delete(`http://localhost:3050/drink/favorite/${slug}`)
        const newCrudData = this.state.apiCrudData.filter(obj => obj.slug !== slug);
        this.setState({
            apiCrudData: newCrudData,
        })
    }
    showUpdateForm = (strDrink, slug) => {
        console.log(slug)
        this.setState({
            strDrink: strDrink,
            slugName: slug,
            showUpdateForm: true
        })
    }
    UpdateDrinkState = (e) => {
        this.setState({
            strDrink: e.target.value
        })
    }
    updateItem = async (e, x) => {
        e.preventDefault();
        const y = { strDrink: e.target.input.value }
        const updateRequest = await axios.put(`http://localhost:3050/drink/favorite/${x}`, y)
        console.log(updateRequest.data);
    }
    render() {
        return (
            <>
                {
                    this.state.showUpdateForm &&
                    <UpdateForm
                        updateItem={this.updateItem}
                        UpdateDrinkState={this.UpdateDrinkState}
                        strDrink={this.state.strDrink}
                    />
                }
                {
                    this.state.showCrudDataComponent &&
                    <ApiCrudData
                        apiCrudData={this.state.apiCrudData}
                        deleteItem={this.deleteItem}
                        showUpdateForm={this.showUpdateForm}
                    />
                }
            </>
        )
    }
}

export default Favorite
