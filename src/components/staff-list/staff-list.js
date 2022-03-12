import StaffListItem from "../staff-list-item/staff-list-item";
import './staff-list.css';

const StaffList = ({data}) =>{
    
    const elements = data.map(item => {
        return(
            <StaffListItem {...item}/> /* name ={prop.name} salary = {prop.salary} */
        )
        })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default StaffList