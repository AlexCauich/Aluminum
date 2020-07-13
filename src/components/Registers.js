import React, { Component } from 'react';
import MyForm from './Registers/MyForm';
import RegisterList from './Registers/RegisterList';
import axios from 'axios';
import Loader from './Registers/Loader';
/* styles */
import "./css/app.css";

class App extends Component {
    state = {
        registers: [],
        register: {},
        loader: false,
        url: "http://127.0.0.1:8000/api/registers"
    };

    getRegisters = async () => {
        this.setState({ loader: true });
        const registers = await axios.get(this.state.url);
        this.setState({ registers: registers.data, loader:false });
    };

    createRegister = async data => {
        this.setState({ loader: true });

        await axios.post(this.state.url, {
            name_job: data.name_job,
            name_service: data.name_service,
            phone: data.phone,
            place_delivery: data.place_delivery,
            prepayment: data.prepayment,
            speci: data.speci,
            reg_date: data.reg_date
        });

        this.getRegisters();
    }

    editRegister = async data => {
        //clear register object
        this.setState({ register: {}, loader: true });

        await axios.put(`${this.state.url}/${data.id}` , {
            name_job: data.name_job,
            name_service: data.name_service,
            phone: data.phone,
            place_delivery: data.place_delivery,
            prepayment: data.prepayment,
            speci: data.speci,
            reg_date: data.reg_date
        });

        this.getRegisters();
    }

    deleteRegister = async id => {
        this.setState({ loader: true });
        await axios.delete(`${this.state.url}/${id}`);

        this.getRegisters();
    }

    componentDidMount() {
        this.getRegisters();
    }

    onDelete = (id) => {
        //console.log("app ", id)
        this.deleteRegister(id);
    }

    onEdit = (data) => {
        //console.log("app ", data)
        this.setState({register: data});
    }

    /*onView = (data) => {
        this.setState({register: data});
    }*/



    onFormSubmit = data => {
        if(data.isEdit) {
            // if is edit true 
            this.editRegister(data);
        }else {
            //if is edit false 
            this.createRegister(data);
        }
    }

    render() {
        return (
            <div className="App">
                
                <div className="ui main container">
                    <MyForm 
                        register={this.state.register}
                        onFormSubmit={this.onFormSubmit}
                    />
                    { this.state.loader ? <Loader /> : '' }
                    <RegisterList 
                        registers={this.state.registers}
                        onDelete={this.onDelete}
                        onEdit={this.onEdit}
                        //onView={this.onView}
                    />
                </div>
            </div>      
        )
    }
}

export default App;