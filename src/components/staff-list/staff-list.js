import StaffListItem from "../staff-list-item/staff-list-item";
import './staff-list.css';

const StaffList = ({data, onDelete}) =>{
    
    const elements = data.map((item) => {
        const {id, ...itemProps} = item;
        return(
            <StaffListItem 
                key={id} 
                {...itemProps}
                onDelete ={() => onDelete(id)}/> /* name ={prop.name} salary = {prop.salary} */
        )
    });
    console.log(elements)
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default StaffList