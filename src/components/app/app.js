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
                {name: "Jhon Crammer", salary: 1000, increase: false, rise: true, id:0},
                {name: "Victor But", salary: 1500, increase: true, rise: false, id:1},
                {name: "Lector Gannibal", salary: 2000, increase: false, rise: false, id:2},
            ],
            term : '',
            filter: 'every'
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
        const newUser = {
            name: name, 
            salary: salary, 
            increase: false, 
            rise: false,
            id: this.maxId++
        }

        if(newUser.name.length > 3 && newUser.salary){
            this.setState(({data}) => {
                const newData = [...data, newUser];
    
                return {
                    data: newData
                }
            })
        }
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, [prop]: !item[prop]}
                }

                return item;    
            })
        }))
    }

    searchStaff = (items, term) =>{
        if(term.length === 0) {
            return items;   
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) =>{
        this.setState({
            term: term
        });
    }

    filterPost = (items, filter) => {
        switch (filter) { 
            case 'rise':
                return items.filter(item => item.rise);
            case 'salary':
                return items.filter(item => item.salary >= 1000);
            
            default: 
                return items;
        } 
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }


    render(){
        const {data, term, filter} = this.state;
        const staffs = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchStaff(data, term), filter);

        return(
        <div className="app">
            <AppInfo
                staffs = {staffs}
                increased ={increased}/>

            <div className="search-panel">
                <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                <AppFilter
                    filter = {filter}
                    onFilterSelect = {this.onFilterSelect}/>
            </div>  
        
            <StaffList 
                data = {visibleData}
                deletePerson = {this.deletePreson}
                onToggleProp = {this.onToggleProp}/>

            <StaffAddForm
                addPerson = {this.addPerson}/>
        </div>)
    }    
}

export default App;