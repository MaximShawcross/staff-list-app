import StaffListItem from "../staff-list-item/staff-list-item";

import './staff-list.css';

const StaffList = ({data, deletePerson, onToggleProp, onUpdateInputValue}) =>{
    
    const elements = data.map((item) => {
        const {id, ...itemProps} = item;
        return(
            <StaffListItem 
                key={id} 
                {...itemProps}
                deletePerson ={() => deletePerson(id)}
                onToggleProp = {e => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))}/> /* name ={prop.name} salary = {prop.salary} */
        )
    });
    
    // console.log(elements)
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default StaffList