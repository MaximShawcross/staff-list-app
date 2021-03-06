import { Component } from 'react';

import './staff-list-item.css';

class StaffListItem extends Component {
    constructor (props){
        super(props);
        this.state = {
            salary: 0
        }
    }

    render(){

        const {name, salary, increase, rise, deletePerson, onToggleProp} = this.props;

        let classNames = "list-group-item d-flex justify-content-beetwen";

        if(increase){
            classNames += " increase"
        }
        if(rise){
            classNames += " like"
        }

        return(
            <li className={classNames}>
                <span onClick={onToggleProp} className="list-group-item-label" data-toggle ="rise">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue ={salary + " $"} onChange = {this.onUpdateInputValue}
                onClick = {this.salaryLog}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" 
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle = "increase">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button" 
                        className="btn-trash btn-sm"
                        onClick = {deletePerson}>
                        <i className="fas fa-trash"> </i>
                    </button>
    
                    <i className="fas fa-star"></i>
                </div>
            </li>   
        )
    }
}
 
export default StaffListItem;