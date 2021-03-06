import { Component } from "react";

import "./staff-add-form.css"

class StaffAddForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: "",
            salary: 0
        }
    }

    onValueChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmitForm = (event) =>{
        // if (this.state.name.length < 3 || !this.state.salary) return;
        event.preventDefault();
        this.props.addPerson(this.state.name, this.state.salary);

        this.setState({
            name: "",
            salary: 0
        })
    }

    render() {
        // const {addPerson} = this.props;
        const {name, salary} = this.state;

        return(
            <div className="app-add-form">
                <h3>Добавить нового сотрудника</h3>
                <form 
                    className="add-form d-flex"
                    onSubmit = {this.onSubmitForm}>
                    <input type="text" 
                        className="form-contor new-post-label" 
                        placeholder="Как его зовут?"
                        name="name"
                        value = {name}
                        onChange={this.onValueChange}/>
                    <input type="number" 
                        className="form-contor new-post-label" 
                        placeholder="З/П в $?"
                        name="salary"
                        value = {salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                        className ="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default StaffAddForm;