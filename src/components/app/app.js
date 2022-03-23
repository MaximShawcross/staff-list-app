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
            ],
        }
        
        this.maxId = 3;
    }

    deletePreson = (id) =>{
        this.setState(({data}) => {
            return{
                data: data.filter(item => item.id !== id),
            }            
        })
    }

    addPerson = (name, salary) => {
        this.maxId = this.maxId + 1

        this.setState(({data}) => {
            let newUser = {name: name, salary: salary, id: this.maxId}
            return {
                data: [...data, newUser]
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
                data = {this.state.data}
                deletePerson = {this.deletePreson}/>

            <StaffAddForm
                addPerson = {this.addPerson}/>
        </div>)
    }    
}

export default App;