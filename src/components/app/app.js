import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-lifter/app-filter';
import StaffList from '../staff-list/staff-list';
import StaffAddForm from '../staff-add-form/staff-add-form';

import './app.css';


function App(){

    const data =[
        {name: "Jhon Crammer", salary: 1000, increase: true},
        {name: "Victor But", salary: 1500, increase: true},
        {name: "Lector Gannibal", salary: 1, increase: false},
        {name: "Saruon", salary: 2022, increase: false},
        {name: "Tom Shelby", salary: 0.12, increase: true}
    ];

    return(<div className="app">
        <AppInfo/>

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <StaffList data={data}/>
        <StaffAddForm/>
    </div>)
}

export default App;