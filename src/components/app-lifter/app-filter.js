import './app-filter.css';

const  AppFilter = (props) =>{
    const buttonsData = [
        {name: 'every', label:'Все сотрудники'},
        {name: 'rise', label: 'Сотрудники на повышение'},
        {name: 'salary', label: 'З/П больше 1000$'},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' :  'btn-outline-light'

        return (
            <button className={`btn ${clazz}`}
                type = "button"
                key={name}
                onClick = {() => props.onFilterSelect(name)}>
                {label}
                    
            </button>
        )
    })

    return(
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;