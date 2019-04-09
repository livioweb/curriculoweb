import React, {Component} from 'react';

export default class TodoForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            todo:''
        }
    }


    onChange = (event) => {
        this.setState({todo: event.target.value})
    }

    onAdd = (event) => {
            event.preventDefault();
            const {todo} = this.state;
            if(todo){
                  this.props.pushToItems(todo);
                  this.setState({
                      todo:''
                  })
            }


    }

    render(){
        const {todo} = this.state;
        return(
            <div>
                <input type="text" name="todo" value={todo} onChange={this.onChange} placeholder="Enter Todo here!" />
                <button type="button" onClick={this.onAdd} > create </button>
            </div>
        );
    }

}