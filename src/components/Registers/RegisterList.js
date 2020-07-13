import React, { Component } from 'react';
import Register from './Register';

class RegisterList extends Component {

    onDelete = id => {
        //console.log("register list", id);
        this.props.onDelete(id);
    }

    onEdit = data => {
        //console.log("register list", id);
        this.props.onEdit(data);
    }

    /*onView = data => {
        //console.log("View register ", id);
        this.props.onView(data);
    }*/

    render() {
        const registers = this.props.registers;
        return(
            <div className="RegisterList">
                <h3>Tabla de registros pendientes</h3>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Name job</th>
                            <th>Name service</th>
                            <th>Phone</th>
                            <th>Place_delivery</th>
                            <th>Prepayment</th>
                            <th>Specifications</th>
                            <th>Register date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registers.map(register => {
                            return ( 
                                <Register 
                                    register={register}
                                    key={register.id}
                                    onDelete={this.onDelete} 
                                    onEdit={this.onEdit}
                                    onView={this.onView}       
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default RegisterList;