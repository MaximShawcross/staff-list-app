import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-lifter/app-filter';
import StaffList from '../staff-list/staff-list';
import StaffAddForm from '../staff-add-form/staff-add-form';

import './app.css';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: "Jhon Crammer", salary: 1000, increase: false, rise: true, id:1},
                {name: "Victor But", salary: 1500, increase: true, rise: false, id:2},
                {name: "Lector Gannibal", salary: 2000, increase: false, rise: false, id:3},
            ],
        }

        this.maxId = 4;
    }

    deletePreson = (id) =>{
        this.setState(({data}) => {
            return{
                data: data.filter(item => item.id !== id),
            }            
        })

    }

    addPerson = (name, salary) => {
        const newUser = {
            name: name, 
            salary: salary, 
            increase: false, 
            rise: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newData = [...data, newUser];

            return {
                data: newData
            }

        })
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, increase: !item.increase}
                }

                return item;    
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, rise: !item.rise}
                }

                return item;    
            })
        }))
    }


    render(){
        const staffs = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        return(
        <div className="app">
            <AppInfo
            staffs = {staffs}
            increased ={increased}/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
        
            <StaffList 
                data = {this.state.data}
                deletePerson = {this.deletePreson}
                onToggleIncrease = {this.onToggleIncrease}
                onToggleRise = {this.onToggleRise}/>

            <StaffAddForm
                addPerson = {this.addPerson}/>
        </div>)
    }    
}

export default App;