import React, { Component } from 'react';

class Register extends Component {

    onDelete = () => {
        //console.log("register on delete");
        this.props.onDelete(this.props.register.id);
    }

    onEdit = () => {
        this.props.onEdit(this.props.register);
    }

    /*onView = () => {
        //console.log("view register");
        this.props.onView(this.props.register);
    }*/

    render() {
        const { name_job, name_service, phone, place_delivery, prepayment, speci, reg_date} = this.props.register;
        return(
            <tr>
                <td>{name_job}</td>
                <td>{name_service}</td>
                <td>{phone}</td>
                <td>{place_delivery}</td>
                <td>{prepayment}</td>
                <td width="240px;" >{speci}</td>
                <td>{reg_date}</td>
                <td>
                    <button className="mini ui orange button" onClick={this.onEdit}><img src={require('../svg/edit.svg')} /></button>
                    <button className="mini ui red button" onClick={this.onDelete}> <img src={require('../svg/delete.svg')} /> </button>
                </td>
            </tr>
        )
    }
}

export default Register;