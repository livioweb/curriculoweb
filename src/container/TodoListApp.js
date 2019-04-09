import React, {Component} from 'react';
import TodoForm from '../components/TodoForm';
import {TodoList} from '../components/TodoList';


export default class TodoListApp extends Component{

    constructor(props){
        super(props)
        this.state = {
            items:[]
        }
    }

    pushToItems = (todo) => {
        const {items} = this.state;
        this.setState({
            items:[...items, todo]
        })

    }

    removeFromItems = (index) => {
        const {items} = this.state;
        items.splice(index,1);
        this.setState({items});

    }


    render(){
        const {items} = this.state;
        return(
            <div>
                <TodoForm pushToItems={this.pushToItems} />
                <TodoList items = {items} removeFromItems={this.removeFromItems} />
            </div>

    );
    }

}