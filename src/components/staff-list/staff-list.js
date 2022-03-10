import StaffListItem from "../staff-list-item/staff-list-item";
import './staff-list.css';

const StaffList = () =>{
    return(
        <ul className="app-list list-group">
            <StaffListItem/>
            <StaffListItem/>
            <StaffListItem/>  
            <i className="fa-thin fa-alien"></i>
        </ul>
    )
}

export default StaffList