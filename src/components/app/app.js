import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-lifter/app-filter';
import StaffList from '../staff-list/staff-list';
import StaffAddForm from '../staff-add-form/staff-add-form';

import './app.css';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: "Jhon Crammer", salary: 1000, increase: false, id:1},
                {name: "Victor But", salary: 1500, increase: true, id:2},
                {name: "Lector Gannibal", salary: 2000, increase: false, id:3},
            ]
        }
    }

    deleteItem = (id) =>{
        this.setState(({data}) => {
            // const index = data.findIndex(item => item.id == id);
            
            // const dataClone = JSON.parse(JSON.stringify(data));
            // dataClone.splice(index, 1)

            return{
                data: data.filter(item => item.id !== id),
            }            
        })
    }

    render(){
        return(
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
        
            <StaffList 
                data={this.state.data}
                onDelete = {this.deleteItem}/>

            <StaffAddForm/>
        </div>)
    }    
}

export default App;