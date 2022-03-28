import './staff-list-item.css';

const StaffListItem = (props) => {

    const {name, salary, increase, rise, deletePerson, onToggleIncrease, onToggleRise} = props;

    let classNames = "list-group-item d-flex justify-content-beetwen"
    
    if(increase){
        classNames += " increase" ;
    }
    if(rise){
        classNames +=" like"
    }

    return(
        <li className={classNames}>
            <span onClick={onToggleRise} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue ={salary}/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" 
                    className="btn-cookie btn-sm "
                    onClick={onToggleIncrease}>
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
 
export default StaffListItem;