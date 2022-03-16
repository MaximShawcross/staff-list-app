import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-lifter/app-filter';
import StaffList from '../staff-list/staff-list';
import StaffAddForm from '../staff-add-form/staff-add-form';

import './app.css';


function App(){

    const data =[
        {name: "Jhon Crammer", salary: 1000, increase: false, id:1},
        {name: "Victor But", salary: 1500, increase: true, id:2},
        {name: "Lector Gannibal", salary: 2000, increase: false, id:3},
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