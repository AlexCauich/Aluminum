import React, { Component } from 'react';

class MyForm extends Component {
    state = {
        form: {name_job: '', name_service: '', phone: '', place_delivery: '', prepayment: '', speci: '', reg_date: '', isEdit: false},
        btnName: 'Save',
        btnClass: "ui primary button submit-button"
    };


    isEmpty(obj) {
        return Object.entries(obj).length === 0 && obj.constructor === Object;
    };

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props && !this.isEmpty(this.props.register)) {
            //console.log("Is update");
            this.setState({
                form: {...this.props.register, isEdit: true},
                btnName: 'Edit',
                btnClass: 'ui orange button submit-button'
            });
        }
    };

    handleChange = event =>{
        const {name, value} = event.target;
        let form = this.state.form;
        form[name] = value;
        this.setState({form});

    };

    onFormSubmit = e => {
        e.preventDefault();

        if (this.formValidate()) {
            this.props.onFormSubmit(this.state.form);
        }

        this.clearFormFields();

    };

    formValidate = () => {
        if(document.getElementsByName("name_job")[0].value === "") {
            alert("Fill all the fields with the symbol (*) ");
            return false;
        }
        if(document.getElementsByName("name_service")[0].value === "") {
            alert("Fill all the fields with the symbol (*) ");
            return false;
        }
        if(document.getElementsByName("phone")[0].value === "") {
            alert("Fill all the fields with the symbol (*) ");
            return false;
        }
        if(document.getElementsByName("place_delivery")[0].value === "") {
            alert("Fill all the fields with the symbol (*) ");
            return false;
        }

        return true;

    };

    clearFormFields = () => {
        this.setState({
            form: {name_job: '', name_service: '', phone: '', place_delivery: '', prepayment: '', speci: '', reg_date: '', isEdit: false},
        });

        this.setState({
            btnName: 'Save',
            btnClass: "ui primary button submit-button"
        });

    }

    render() {
        return(
            <div className="MyForm">
                <div className="ui form">
                    <div className="fields">
                        <div className="four wide field">
                            <label>Name job*</label>
                            <input type="text" name="name_job" placeholder="Name job" value={this.state.form.name_job}  onChange={this.handleChange} />
                        </div>
                        <div className="four wide field">
                            <label>Name service*</label>
                            <input type="text" name="name_service" placeholder="Name job" value={this.state.form.name_service}  onChange={this.handleChange} />
                        </div>
                        <div className="four wide field">
                            <label>Phone*</label>
                            <input type="text" name="phone" placeholder="Phone" value={this.state.form.phone}  onChange={this.handleChange} />
                        </div>
                        <div className="four wide field">
                            <label>Place delivery*</label>
                            <input type="text" name="place_delivery" placeholder="Place delivery" value={this.state.form.place_delivery}  onChange={this.handleChange} />
                        </div>
                        <div className="four wide field">
                            <label>Prepayment</label>
                            <input type="text" name="prepayment" placeholder="Prepayment" value={this.state.form.prepayment}  onChange={this.handleChange} />
                        </div>
                        <div className="four wide field">
                            <label> Specifications </label>
                            <input type="text" name="speci" placeholder=" Specifications " value={this.state.form.speci}  onChange={this.handleChange} />
                        </div>
                        <div className="four wide field">
                            <label>Register Date</label>
                            <input type="date" name="reg_date" placeholder="Register Date" value={this.state.form.reg_date} onChange={this.handleChange}  />
                        </div>

                        <div className="four wide field">
                            <button className={this.state.btnClass} onClick={this.onFormSubmit}>
                                {this.state.btnName}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyForm;