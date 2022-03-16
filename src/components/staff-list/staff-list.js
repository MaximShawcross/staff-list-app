import StaffListItem from "../staff-list-item/staff-list-item";
import './staff-list.css';

const StaffList = ({data}) =>{
    
    const elements = data.map((item) => {
        const {id, ...itemProps} = item;
        return(
            <StaffListItem key={id} {...itemProps}/> /* name ={prop.name} salary = {prop.salary} */
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