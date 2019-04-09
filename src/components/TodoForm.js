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
                <div className="form-group">
                    <input type="text" className="form-control" name="todo" value={todo} onChange={this.onChange} placeholder="Enter Todo here!" />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-success" onClick={this.onAdd} > create </button>
                </div>
            </div>
        );
    }

}